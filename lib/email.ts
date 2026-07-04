import { Resend } from "resend"

// Using Resend's sandbox sender (no domain verification needed). It can only
// deliver to your Resend signup email (kingdomroofing7@gmail.com), so leads
// are sent there. To later send from your own domain to info@kingdomroofingco.com,
// verify kingdomroofingco.com in Resend, then set LEAD_FROM to your domain and
// LEAD_TO back to the company inbox.
const LEAD_TO = process.env.LEAD_NOTIFY_EMAIL || "kingdomroofing7@gmail.com"
const LEAD_FROM = "Kingdom Roofing Leads <onboarding@resend.dev>"

export type LeadEmail = {
  name: string
  phone: string
  email: string | null
  address: string | null
  service: string | null
  message: string | null
  source: string
}

function row(label: string, value: string | null) {
  if (!value) return ""
  return `<tr>
    <td style="padding:8px 12px;font:600 13px/1.4 Arial,sans-serif;color:#5b6b7c;background:#f1f5f9;border-bottom:1px solid #e2e8f0;white-space:nowrap;vertical-align:top;">${label}</td>
    <td style="padding:8px 12px;font:400 14px/1.5 Arial,sans-serif;color:#0b1a2e;border-bottom:1px solid #e2e8f0;">${value}</td>
  </tr>`
}

/**
 * Sends a lead notification email. Best-effort: returns false on failure
 * instead of throwing, so a missing key or send error never blocks the
 * lead from being saved to the database.
 */
export async function sendLeadEmail(lead: LeadEmail): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log("[v0] RESEND_API_KEY not set — skipping lead email")
    return false
  }

  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

  const phoneDigits = lead.phone.replace(/\D/g, "")

  const html = `<div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
    <div style="background:#0b1a2e;padding:20px 24px;">
      <div style="font:700 20px/1.2 Arial,sans-serif;color:#ffffff;">New Roofing Lead</div>
      <div style="font:600 12px/1.4 Arial,sans-serif;color:#e0b450;letter-spacing:1px;text-transform:uppercase;margin-top:4px;">Source: ${esc(lead.source)}</div>
    </div>
    <table style="width:100%;border-collapse:collapse;">
      ${row("Name", esc(lead.name))}
      ${row("Phone", `<a href="tel:${phoneDigits}" style="color:#cc2027;text-decoration:none;font-weight:600;">${esc(lead.phone)}</a>`)}
      ${row("Email", lead.email ? `<a href="mailto:${esc(lead.email)}" style="color:#cc2027;text-decoration:none;">${esc(lead.email)}</a>` : "")}
      ${row("Address", lead.address ? esc(lead.address) : "")}
      ${row("Service", lead.service ? esc(lead.service) : "")}
      ${row("Message", lead.message ? esc(lead.message).replace(/\n/g, "<br>") : "")}
    </table>
    <div style="padding:16px 24px;background:#f8fafc;font:400 12px/1.5 Arial,sans-serif;color:#5b6b7c;">
      Reply fast — Jimmy John's speed, Chick-fil-A service. Call them back within minutes for the best conversion.
    </div>
  </div>`

  const text = [
    `New Roofing Lead (source: ${lead.source})`,
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    lead.email ? `Email: ${lead.email}` : "",
    lead.address ? `Address: ${lead.address}` : "",
    lead.service ? `Service: ${lead.service}` : "",
    lead.message ? `Message: ${lead.message}` : "",
  ]
    .filter(Boolean)
    .join("\n")

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: LEAD_FROM,
      to: LEAD_TO,
      replyTo: lead.email || undefined,
      subject: `New roofing lead: ${lead.name} — ${lead.phone}`,
      html,
      text,
    })
    if (error) {
      console.log("[v0] Resend send error:", error)
      return false
    }
    return true
  } catch (err) {
    console.log("[v0] sendLeadEmail error:", err)
    return false
  }
}
