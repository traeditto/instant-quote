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

export type CapiLead = {
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

/**
 * Sends a server-side "Lead" event to the Meta Conversions API.
 * Best-effort: returns silently (logging) if not configured or on error,
 * so it never blocks or breaks lead capture.
 */
export async function sendMetaLead(lead: CapiLead): Promise<void> {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.log("[v0] Meta CAPI not configured; skipping Lead event.")
    return
  }

  const first = lead.name?.trim().split(/\s+/)[0]
  const last = lead.name?.trim().split(/\s+/).slice(1).join(" ")

  const userData: Record<string, unknown> = {
    em: hash(lead.email),
    ph: hashPhone(lead.phone),
    fn: hash(first),
    ln: hash(last || undefined),
    ct: hash(lead.city),
    client_ip_address: lead.clientIp || undefined,
    client_user_agent: lead.userAgent || undefined,
    fbp: lead.fbp || undefined,
    fbc: lead.fbc || undefined,
  }
  // Strip undefined keys.
  Object.keys(userData).forEach((k) => userData[k] === undefined && delete userData[k])

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: lead.eventId,
        event_source_url: lead.eventSourceUrl,
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
      console.log("[v0] Meta CAPI error:", res.status, text)
    } else {
      console.log("[v0] Meta CAPI Lead sent OK:", res.status, text)
    }
  } catch (err) {
    console.log("[v0] Meta CAPI request failed:", err)
  }
}
