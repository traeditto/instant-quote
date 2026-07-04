import { Phone, Star } from "lucide-react"
import { C, PHONE, PHONE_HREF } from "./theme"
import { LeadForm } from "./lead-form"

export function Hero() {
  return (
    <section id="top" style={{ position: "relative", overflowX: "clip", background: C.navy }}>
      <img
        src="/ads-assets/bg-roof-landscape.png"
        alt=""
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        crossOrigin="anonymous"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, rgba(8,18,34,0.96) 38%, rgba(8,18,34,0.82) 62%, rgba(8,18,34,0.6) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "64px 24px 72px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 48,
          alignItems: "center",
        }}
        className="lp-hero-grid"
      >
        {/* left: copy */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 14px",
              background: "rgba(246,160,30,0.14)",
              border: `1px solid ${C.gold}`,
              borderRadius: 999,
              marginBottom: 22,
            }}
          >
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 13, letterSpacing: 1.5, color: C.gold }}>
              ROOFING · GUTTERS · SIDING · WINDOWS
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: 60,
              lineHeight: 0.98,
              color: C.white,
              margin: 0,
              textWrap: "balance",
            }}
            className="lp-hero-h1"
          >
            WE PROTECT WHAT
            <br />
            PROTECTS <span style={{ color: C.gold }}>YOUR KINGDOM.</span>
          </h1>

          <p style={{ fontSize: 19, lineHeight: 1.5, color: "rgba(255,255,255,0.88)", margin: "20px 0 28px", maxWidth: 520 }}>
            Jacksonville&apos;s trusted, family-owned roofers. From storm damage to aging shingles, we keep your roof
            strong, sealed, and ready for whatever Florida throws at it.
          </p>

          {/* offer + rating row */}
          <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", marginBottom: 28 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 18px",
                background: C.red,
                borderRadius: 10,
                boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
              }}
            >
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 38, color: C.gold, lineHeight: 1 }}>
                $500
              </span>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15, lineHeight: 1.1, color: C.white }}>
                OFF FULL ROOF
                <br />
                REPLACEMENT
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ display: "flex", gap: 2 }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} style={{ width: 18, height: 18, color: C.gold, fill: C.gold }} />
                ))}
              </div>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>5.0 rating on Google</span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <a
              href="#quote"
              style={{
                padding: "16px 26px",
                background: C.gold,
                color: C.navy,
                borderRadius: 8,
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 17,
                letterSpacing: 0.5,
                textDecoration: "none",
              }}
            >
              GET A FREE INSPECTION
            </a>
            <a
              href={PHONE_HREF}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                color: C.white,
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 17,
                textDecoration: "none",
              }}
            >
              <Phone style={{ width: 18, height: 18, color: C.gold }} />
              {PHONE}
            </a>
          </div>
        </div>

        {/* right: form card */}
        <div id="quote" style={{ position: "relative" }}>
          <img
            src="/ads-assets/mascot-cut.png"
            alt="Kingdom lion mascot"
            style={{ position: "absolute", right: -8, top: -118, height: 150, width: "auto", zIndex: 3, pointerEvents: "none" }}
            crossOrigin="anonymous"
            className="lp-hero-mascot"
          />
          <div
            style={{
              position: "relative",
              zIndex: 2,
              background: C.cream,
              borderRadius: 16,
              padding: "28px 26px",
              boxShadow: "0 30px 70px rgba(0,0,0,0.45)",
              border: `1px solid ${C.line}`,
            }}
          >
            <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 26, color: C.ink, margin: "0 0 4px", letterSpacing: 0.3 }}>
              CLAIM YOUR $500 OFF
            </h2>
            <p style={{ fontSize: 14, color: C.muted, margin: "0 0 20px" }}>
              Free, no-obligation inspection &amp; estimate.
            </p>
            <LeadForm source="hero" />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px){
          .lp-hero-grid{ grid-template-columns: 1fr !important; gap: 36px !important; }
          .lp-hero-h1{ font-size: 44px !important; }
          .lp-hero-mascot{ display:none !important; }
        }
      `}</style>
    </section>
  )
}
