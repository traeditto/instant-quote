import "server-only"
import crypto from "crypto"

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN
const TEST_CODE = process.env.META_CAPI_TEST_CODE // optional, for Events Manager "Test Events"
const API_VERSION = "v21.0"

/** SHA-256 hash of normalized PII, as required by Meta CAPI. */
function hash(value?: string | null): string | undefined {
  if (!value) return undefined
  const normalized = value.trim().toLowerCase()
  if (!normalized) return undefined
  return crypto.createHash("sha256").update(normalized).digest("hex")
}

/** Digits-only phone with country code, then hashed. */
function hashPhone(phone?: string | null): string | undefined {
  if (!phone) return undefined
  let digits = phone.replace(/\D/g, "")
  if (!digits) return undefined
  // Assume US if 10 digits (Meta wants country code included).
  if (digits.length === 10) digits = "1" + digits
  return crypto.createHash("sha256").update(digits).digest("hex")
}

export type CapiEvent = {
  /** Meta standard event name, e.g. "Lead" or "PageView". */
  eventName: string
  eventId: string
  eventSourceUrl?: string
  name?: string | null
  email?: string | null
  phone?: string | null
  city?: string | null
  clientIp?: string | null
  userAgent?: string | null
  fbp?: string | null
  fbc?: string | null
}

// Backwards-compatible alias for the Lead payload shape.
export type CapiLead = Omit<CapiEvent, "eventName">

/**
 * Sends a server-side event to the Meta Conversions API.
 * Best-effort: returns silently (logging) if not configured or on error,
 * so it never blocks or breaks the request.
 */
export async function sendMetaEvent(event: CapiEvent): Promise<void> {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.log(`[v0] Meta CAPI not configured; skipping ${event.eventName} event.`)
    return
  }

  const first = event.name?.trim().split(/\s+/)[0]
  const last = event.name?.trim().split(/\s+/).slice(1).join(" ")

  const userData: Record<string, unknown> = {
    em: hash(event.email),
    ph: hashPhone(event.phone),
    fn: hash(first),
    ln: hash(last || undefined),
    ct: hash(event.city),
    client_ip_address: event.clientIp || undefined,
    client_user_agent: event.userAgent || undefined,
    fbp: event.fbp || undefined,
    fbc: event.fbc || undefined,
  }
  // Strip undefined keys.
  Object.keys(userData).forEach((k) => userData[k] === undefined && delete userData[k])

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: event.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: event.eventId,
        event_source_url: event.eventSourceUrl,
        action_source: "website",
        user_data: userData,
      },
    ],
  }
  if (TEST_CODE) payload.test_event_code = TEST_CODE

  try {
    const res = await fetch(
      `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    )
    const text = await res.text()
    if (!res.ok) {
      console.log(`[v0] Meta CAPI error (${event.eventName}):`, res.status, text)
    } else {
      console.log(`[v0] Meta CAPI ${event.eventName} sent OK:`, res.status, text)
    }
  } catch (err) {
    console.log(`[v0] Meta CAPI request failed (${event.eventName}):`, err)
  }
}

/** Sends a server-side "Lead" event to the Meta Conversions API. */
export async function sendMetaLead(lead: CapiLead): Promise<void> {
  return sendMetaEvent({ ...lead, eventName: "Lead" })
}
