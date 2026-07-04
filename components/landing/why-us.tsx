import { Clock, HeartHandshake, ClipboardCheck, ShieldCheck } from "lucide-react"
import { C } from "./theme"

const POINTS = [
  {
    icon: Clock,
    title: "Jimmy John's Speed",
    body: "Fast response, fast scheduling, fast cleanup. Most inspections are booked within 24 hours.",
  },
  {
    icon: HeartHandshake,
    title: "Chick-fil-A Service",
    body: "Friendly, honest, my-pleasure service from the first call to the final nail.",
  },
  {
    icon: ClipboardCheck,
    title: "Free Inspections & Estimates",
    body: "Know exactly what your roof needs — with clear, no-pressure pricing and zero surprises.",
  },
  {
    icon: ShieldCheck,
    title: "Local & Family Owned",
    body: "Licensed, insured, and rooted right here in Jacksonville. We treat your home like our own.",
  },
]

export function WhyUs() {
  return (
    <section id="why" style={{ background: C.navy, padding: "80px 24px", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "0.85fr 1.15fr",
          gap: 56,
          alignItems: "center",
        }}
        className="lp-why-grid"
      >
        {/* left: mascot + slogan */}
        <div style={{ textAlign: "center" }}>
          <img
            src="/ads-assets/mascot-cut.png"
            alt="Kingdom lion mascot giving a thumbs up"
            style={{ height: 360, width: "auto", maxWidth: "100%", filter: "drop-shadow(0 18px 30px rgba(0,0,0,0.5))" }}
            crossOrigin="anonymous"
          />
          <div
            style={{
              marginTop: 18,
              display: "inline-flex",
              flexDirection: "column",
              gap: 2,
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: 26,
              color: C.white,
              lineHeight: 1.05,
            }}
          >
            <span>
              JIMMY JOHN&apos;S <span style={{ color: C.red }}>SPEED.</span>
            </span>
            <span>
              CHICK-FIL-A <span style={{ color: C.red }}>SERVICE.</span>
            </span>
          </div>
        </div>

        {/* right: points */}
        <div>
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, letterSpacing: 2, color: C.gold }}>
            THE KINGDOM DIFFERENCE
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 42, color: C.white, margin: "8px 0 32px", textWrap: "balance" }}>
            ROOFING DONE RIGHT — FAST, FRIENDLY, AND FAIR
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }} className="lp-points-grid">
            {POINTS.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.title} style={{ display: "flex", gap: 16 }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      background: "rgba(246,160,30,0.15)",
                      border: `1px solid ${C.gold}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon style={{ width: 24, height: 24, color: C.gold }} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 19, color: C.white, margin: "2px 0 6px" }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: 14.5, lineHeight: 1.5, color: "rgba(255,255,255,0.75)", margin: 0 }}>{p.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px){
          .lp-why-grid{ grid-template-columns: 1fr !important; gap: 40px !important; }
          .lp-points-grid{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
