import { Home, Droplets, Layers, AppWindow } from "lucide-react"
import { C } from "./theme"

const SERVICES = [
  {
    icon: Home,
    title: "Roofing",
    body: "Full replacements, repairs, and re-roofs in shingle, metal, and tile — built to handle Florida storms.",
  },
  {
    icon: Droplets,
    title: "Gutters",
    body: "Seamless gutters and guards that channel water away and protect your foundation, fascia, and landscaping.",
  },
  {
    icon: Layers,
    title: "Siding",
    body: "Durable, weather-tight siding that boosts curb appeal and seals your home against wind and moisture.",
  },
  {
    icon: AppWindow,
    title: "Windows",
    body: "Energy-efficient, impact-rated windows that lower your bills and stand up to hurricane-season weather.",
  },
]

export function Services() {
  return (
    <section id="services" style={{ background: C.cream, padding: "76px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, letterSpacing: 2, color: C.red }}>
            WHAT WE DO
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 42, color: C.ink, margin: "8px 0 0", textWrap: "balance" }}>
            ONE LOCAL TEAM FOR YOUR WHOLE EXTERIOR
          </h2>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}
          className="lp-services-grid"
        >
          {SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                style={{
                  background: C.white,
                  borderRadius: 14,
                  padding: "28px 24px",
                  border: `1px solid ${C.line}`,
                  boxShadow: "0 8px 24px rgba(19,32,47,0.06)",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 12,
                    background: C.navy,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  <Icon style={{ width: 28, height: 28, color: C.gold }} strokeWidth={2} />
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 23, color: C.ink, margin: "0 0 10px" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: C.muted, margin: 0 }}>{s.body}</p>
              </div>
            )
          })}
        </div>
      </div>
      <style>{`@media (max-width: 880px){ .lp-services-grid{ grid-template-columns: repeat(2,1fr) !important; } } @media (max-width: 480px){ .lp-services-grid{ grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}
