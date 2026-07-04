import { Phone, Check } from "lucide-react"
import { C, PHONE, PHONE_HREF } from "./theme"
import { LeadForm } from "./lead-form"

const BULLETS = ["$500 off full roof replacement", "Free inspection & written estimate", "Insurance claim help", "Fast, friendly, local crews"]

export function FinalCta() {
  return (
    <section id="quote-bottom" style={{ position: "relative", overflow: "hidden", background: C.navy }}>
      <img
        src="/ads-assets/bg-storm-landscape.png"
        alt=""
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        crossOrigin="anonymous"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, rgba(8,18,34,0.95) 40%, rgba(8,18,34,0.8) 70%, rgba(8,18,34,0.6) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1100,
          margin: "0 auto",
          padding: "72px 24px",
          display: "grid",
          gridTemplateColumns: "1fr 0.85fr",
          gap: 48,
          alignItems: "center",
        }}
        className="lp-cta-grid"
      >
        <div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 46, lineHeight: 1, color: C.white, margin: "0 0 18px", textWrap: "balance" }}>
            PEACE OF MIND STARTS <span style={{ color: C.gold }}>AT THE TOP.</span>
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: "rgba(255,255,255,0.88)", margin: "0 0 26px", maxWidth: 480 }}>
            Book your free inspection today and lock in $500 off your full roof replacement. Don&apos;t wait for the
            next storm to find the damage.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "grid", gap: 12 }}>
            {BULLETS.map((b) => (
              <li key={b} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 16, color: C.white }}>
                <span
                  style={{
                    flexShrink: 0,
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: C.gold,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Check style={{ width: 15, height: 15, color: C.navy }} strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <a
            href={PHONE_HREF}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: 26,
              color: C.white,
              textDecoration: "none",
            }}
          >
            <Phone style={{ width: 24, height: 24, color: C.gold }} />
            {PHONE}
          </a>
        </div>

        <div
          style={{
            background: C.cream,
            borderRadius: 16,
            padding: "28px 26px",
            boxShadow: "0 30px 70px rgba(0,0,0,0.45)",
            border: `1px solid ${C.line}`,
          }}
        >
          <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 24, color: C.ink, margin: "0 0 4px" }}>
            REQUEST YOUR FREE QUOTE
          </h3>
          <p style={{ fontSize: 14, color: C.muted, margin: "0 0 20px" }}>Takes less than a minute.</p>
          <LeadForm source="final-cta" />
        </div>
      </div>
      <style>{`@media (max-width: 880px){ .lp-cta-grid{ grid-template-columns: 1fr !important; gap: 36px !important; } }`}</style>
    </section>
  )
}
