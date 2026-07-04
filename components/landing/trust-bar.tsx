import { C } from "./theme"

const STATS = [
  { value: "15+", label: "Years in Jacksonville" },
  { value: "1,000+", label: "Roofs protected" },
  { value: "$0", label: "Inspections & estimates" },
  { value: "A+", label: "BBB accredited" },
]

export function TrustBar() {
  return (
    <section style={{ background: C.gold }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "26px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
        }}
        className="lp-stats-grid"
      >
        {STATS.map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 38, color: C.navy, lineHeight: 1 }}>
              {s.value}
            </div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: C.navy, marginTop: 6 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
      <style>{`@media (max-width: 720px){ .lp-stats-grid{ grid-template-columns: repeat(2,1fr) !important; gap: 24px !important; } }`}</style>
    </section>
  )
}
