import { NextResponse } from "next/server"
import { cookies, headers } from "next/headers"
import { sendMetaEvent } from "@/lib/meta-capi"

/**
 * Fires a server-side "PageView" event to the Meta Conversions API.
 *
 * The browser Pixel fires PageView on every visit and passes its eventID here
 * so Meta deduplicates the browser + server events. Request context (IP, user
 * agent, and the _fbp/_fbc cookies) is read server-side to improve match quality.
 *
 * Best-effort: always returns { ok: true } so tracking never affects the page.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      eventId?: string
      eventSourceUrl?: string
    }
    if (!body.eventId) return NextResponse.json({ ok: false }, { status: 400 })

    const hdrs = await headers()
    const cookieStore = await cookies()
    const forwardedFor = hdrs.get("x-forwarded-for") || ""
    const clientIp = forwardedFor.split(",")[0].trim() || hdrs.get("x-real-ip") || null

    await sendMetaEvent({
      eventName: "PageView",
      eventId: body.eventId,
      eventSourceUrl: body.eventSourceUrl,
      clientIp,
      userAgent: hdrs.get("user-agent"),
      fbp: cookieStore.get("_fbp")?.value ?? null,
      fbc: cookieStore.get("_fbc")?.value ?? null,
    })
  } catch (err) {
    console.log("[v0] PageView track route error:", err)
  }
  return NextResponse.json({ ok: true })
}
