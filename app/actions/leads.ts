"use server"

import { db } from "@/lib/db"
import { leads } from "@/lib/db/schema"
import { sendLeadEmail } from "@/lib/email"
import { sendMetaLead } from "@/lib/meta-capi"
import { cookies, headers } from "next/headers"

export type LeadResult = { ok: true } | { ok: false; error: string }

function clean(value: FormDataEntryValue | null, max = 500): string {
  return typeof value === "string" ? value.trim().slice(0, max) : ""
}

export async function submitLead(formData: FormData): Promise<LeadResult> {
  const name = clean(formData.get("name"), 120)
  const phone = clean(formData.get("phone"), 40)
  const email = clean(formData.get("email"), 160)
  const address = clean(formData.get("address"), 240)
  const service = clean(formData.get("service"), 60)
  const message = clean(formData.get("message"), 1000)
  const source = clean(formData.get("source"), 60) || "landing-page"
  const eventId = clean(formData.get("eventId"), 80)
  const eventSourceUrl = clean(formData.get("eventSourceUrl"), 500)

  // Honeypot: bots fill hidden fields. Pretend success without storing.
  const honeypot = clean(formData.get("company"), 120)
  if (honeypot) return { ok: true }

  if (name.length < 2) return { ok: false, error: "Please enter your name." }
  const digits = phone.replace(/\D/g, "")
  if (digits.length < 10) return { ok: false, error: "Please enter a valid phone number." }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." }
  }

  const lead = {
    name,
    phone,
    email: email || null,
    address: address || null,
    service: service || null,
    message: message || null,
    source,
  }

  try {
    await db.insert(leads).values(lead)
    // Best-effort notification: never let an email failure lose a saved lead.
    await sendLeadEmail(lead)

    // Best-effort server-side Meta Conversions API "Lead" event.
    // Shares eventId with the browser Pixel so Meta deduplicates them.
    if (eventId) {
      const hdrs = await headers()
      const cookieStore = await cookies()
      const forwardedFor = hdrs.get("x-forwarded-for") || ""
      const clientIp = forwardedFor.split(",")[0].trim() || hdrs.get("x-real-ip") || null
      const city = address ? address.split(",")[1]?.trim() || null : null
      await sendMetaLead({
        eventId,
        eventSourceUrl: eventSourceUrl || undefined,
        name,
        email: email || null,
        phone,
        city,
        clientIp,
        userAgent: hdrs.get("user-agent"),
        fbp: cookieStore.get("_fbp")?.value ?? null,
        fbc: cookieStore.get("_fbc")?.value ?? null,
      })
    }
    return { ok: true }
  } catch (err) {
    console.log("[v0] submitLead error:", err)
    return { ok: false, error: "Something went wrong. Please call us at (904) 846-3238." }
  }
}
