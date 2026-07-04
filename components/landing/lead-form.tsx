"use client"

import { useState, type CSSProperties } from "react"
import { Check, Loader2 } from "lucide-react"
import { C } from "./theme"
import { submitLead } from "@/app/actions/leads"
import { trackPixel } from "@/components/analytics/meta-pixel"

const SERVICES = ["Roofing", "Gutters", "Siding", "Windows", "Storm Damage", "Not sure yet"]

export function LeadForm({ variant = "light", source = "landing-page" }: { variant?: "light" | "dark"; source?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle")
  const [error, setError] = useState<string | null>(null)
  const dark = variant === "dark"

  const labelColor = dark ? "rgba(255,255,255,0.85)" : C.ink
  const inputStyle: CSSProperties = {
    width: "100%",
    boxSizing: "border-box",
    padding: "13px 14px",
    fontSize: 15,
    fontFamily: "var(--font-sans)",
    color: dark ? C.white : C.ink,
    background: dark ? "rgba(255,255,255,0.08)" : C.white,
    border: `1px solid ${dark ? "rgba(255,255,255,0.18)" : C.line}`,
    borderRadius: 8,
    outline: "none",
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setStatus("submitting")
    const formData = new FormData(e.currentTarget)
    formData.set("source", source)

    // Shared event ID lets Meta dedupe the browser Pixel event against the
    // server-side CAPI event fired from the action.
    const eventId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`
    formData.set("eventId", eventId)
    formData.set("eventSourceUrl", window.location.href)
    trackPixel("Lead", eventId, { content_name: source })

    try {
      const result = await submitLead(formData)
      if (result.ok) {
        setStatus("done")
      } else {
        setError(result.error)
        setStatus("idle")
      }
    } catch {
      setError("Something went wrong. Please call us at (904) 846-3238.")
      setStatus("idle")
    }
  }

  if (status === "done") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 12,
          padding: "32px 24px",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: C.gold,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Check style={{ width: 30, height: 30, color: C.navy }} strokeWidth={3} />
        </div>
        <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 24, color: dark ? C.white : C.ink, margin: 0 }}>
          REQUEST RECEIVED!
        </h3>
        <p style={{ fontSize: 15, lineHeight: 1.5, color: dark ? "rgba(255,255,255,0.8)" : C.muted, margin: 0, maxWidth: 340 }}>
          Thanks! A Kingdom roofing specialist will call you within one business hour to schedule your free inspection.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <label style={{ flex: "1 1 140px", display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontWeight: 600, color: labelColor }}>
          Full name
          <input style={inputStyle} type="text" name="name" required placeholder="Jane Smith" autoComplete="name" />
        </label>
        <label style={{ flex: "1 1 140px", display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontWeight: 600, color: labelColor }}>
          Phone
          <input style={inputStyle} type="tel" name="phone" required placeholder="(904) 555-0123" autoComplete="tel" />
        </label>
      </div>
      <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontWeight: 600, color: labelColor }}>
        Email
        <input style={inputStyle} type="email" name="email" placeholder="jane@email.com" autoComplete="email" />
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontWeight: 600, color: labelColor }}>
        Address
        <input style={inputStyle} type="text" name="address" required placeholder="123 Main St, Jacksonville, FL" autoComplete="street-address" />
      </label>
      {/* honeypot: hidden from humans, bots tend to fill it */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />
      <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, fontWeight: 600, color: labelColor }}>
        What do you need?
        <select style={{ ...inputStyle, appearance: "none" }} name="service" defaultValue="Roofing">
          {SERVICES.map((s) => (
            <option key={s} value={s} style={{ color: C.ink }}>
              {s}
            </option>
          ))}
        </select>
      </label>
      {error && (
        <p
          role="alert"
          style={{
            margin: 0,
            fontSize: 13,
            fontWeight: 600,
            color: dark ? "#ffb3b3" : C.red,
            background: dark ? "rgba(204,32,39,0.15)" : "rgba(204,32,39,0.08)",
            border: `1px solid ${dark ? "rgba(255,179,179,0.3)" : "rgba(204,32,39,0.25)"}`,
            borderRadius: 8,
            padding: "10px 12px",
          }}
        >
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        style={{
          marginTop: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          width: "100%",
          padding: "16px 20px",
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: 17,
          letterSpacing: 0.5,
          color: C.white,
          background: C.red,
          border: "none",
          borderRadius: 8,
          cursor: status === "submitting" ? "wait" : "pointer",
          boxShadow: "0 8px 20px rgba(204,32,39,0.35)",
        }}
      >
        {status === "submitting" ? (
          <>
            <Loader2 style={{ width: 18, height: 18, animation: "spin 1s linear infinite" }} />
            SENDING...
          </>
        ) : (
          "GET MY FREE INSPECTION"
        )}
      </button>
      <p style={{ fontSize: 12, lineHeight: 1.4, textAlign: "center", color: dark ? "rgba(255,255,255,0.6)" : C.muted, margin: 0 }}>
        No obligation. We respond within one business hour.
      </p>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </form>
  )
}
