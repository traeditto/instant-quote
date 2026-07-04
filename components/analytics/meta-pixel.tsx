"use client"

import { useEffect } from "react"

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & {
      queue?: unknown[]
      loaded?: boolean
      version?: string
      callMethod?: (...args: unknown[]) => void
      push?: (...args: unknown[]) => void
    }
    _fbq?: unknown
  }
}

/**
 * Loads the Meta (Facebook) Pixel and fires PageView.
 *
 * The pixel bootstrap runs inside useEffect rather than via <Script> inline
 * children: in the App Router, inline next/script children are serialized into
 * the RSC payload and are not reliably executed after hydration, which leaves
 * window.fbq undefined. Injecting from useEffect guarantees the snippet runs in
 * the browser exactly once after mount.
 *
 * Renders nothing (and does nothing) if NEXT_PUBLIC_META_PIXEL_ID is not set,
 * so the site works fine before the pixel is configured.
 */
export function MetaPixel() {
  useEffect(() => {
    if (!PIXEL_ID) return
    if (window.fbq) return

    /* eslint-disable */
    // Standard Meta Pixel bootstrap (defines window.fbq and loads fbevents.js).
    ;(function (f: any, b: any, e: string, v: string) {
      if (f.fbq) return
      const n: any = (f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      })
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = true
      n.version = "2.0"
      n.queue = []
      const t = b.createElement(e)
      t.async = true
      t.src = v
      const s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")
    /* eslint-enable */

    window.fbq!("init", PIXEL_ID)

    // Shared event ID lets Meta dedupe the browser PageView against the
    // server-side CAPI PageView fired from /api/track/pageview.
    const eventId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`

    window.fbq!("track", "PageView", {}, { eventID: eventId })

    // Fire the matching server-side PageView. A short delay lets the pixel
    // write its _fbp/_fbc cookies first so the server can include them.
    const t = setTimeout(() => {
      fetch("/api/track/pageview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId, eventSourceUrl: window.location.href }),
        keepalive: true,
      }).catch(() => {})
    }, 800)

    return () => clearTimeout(t)
  }, [])

  if (!PIXEL_ID) return null

  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  )
}

/**
 * Fires a browser-side Pixel event with a shared eventID so Meta can
 * deduplicate it against the matching server-side CAPI event.
 */
export function trackPixel(event: string, eventId: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return
  if (!window.fbq) return
  window.fbq("track", event, params ?? {}, { eventID: eventId })
}
