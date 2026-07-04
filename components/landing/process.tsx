import { C } from "./theme"

const STEPS = [
  {
    n: "1",
    title: "Free Inspection",
    body: "We climb up, document everything with photos, and check for storm and age-related damage — no charge.",
  },
  {
    n: "2",
    title: "Clear Estimate",
    body: "You get a straightforward, written quote and help navigating insurance claims if storm damage is found.",
  },
  {
    n: "3",
    title: "Expert Installation",
    body: "Our crews complete the job fast and clean, then we do a final walkthrough so you have total peace of mind.",
  },
]

export function Process() {
  return (
    <section style={{ background: C.cream, padding: "76px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, letterSpacing: 2, color: C.red }}>
            HOW IT WORKS
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 42, color: C.ink, margin: "8px 0 0", textWrap: "balance" }}>
            FROM CALL TO COMPLETE IN THREE EASY STEPS
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} className="lp-steps-grid">
          {STEPS.map((s) => (
            <div key={s.n} style={{ position: "relative", background: C.white, borderRadius: 14, padding: "34px 26px 28px", border: `1px solid ${C.line}` }}>
              <div
                style={{
                  position: "absolute",
                  top: -22,
                  left: 26,
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: C.red,
                  color: C.white,
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 18px rgba(204,32,39,0.35)",
                }}
              >
                {s.n}
              </div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 22, color: C.ink, margin: "8px 0 10px" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: C.muted, margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 820px){ .lp-steps-grid{ grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </section>
  )
}
