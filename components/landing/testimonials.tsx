import { Star } from "lucide-react"
import { C } from "./theme"

const REVIEWS = [
  {
    quote:
      "After a storm took half our shingles, Kingdom had an inspector out the next morning and a new roof on within the week. Incredibly fast and professional.",
    name: "Marcus T.",
    place: "Riverside, Jacksonville",
  },
  {
    quote:
      "The free inspection was genuinely no-pressure. They walked me through every photo and the estimate came in fair. The $500 off didn't hurt either!",
    name: "Dana R.",
    place: "Mandarin, Jacksonville",
  },
  {
    quote:
      "Friendliest crew I've ever had at my house. They cleaned up so well you'd never know they were here — except for the beautiful new roof.",
    name: "Felipe G.",
    place: "San Marco, Jacksonville",
  },
]

export function Testimonials() {
  return (
    <section id="reviews" style={{ background: C.navy2, padding: "76px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, letterSpacing: 2, color: C.gold }}>
            FROM YOUR NEIGHBORS
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 42, color: C.white, margin: "8px 0 0", textWrap: "balance" }}>
            TRUSTED ACROSS JACKSONVILLE
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="lp-reviews-grid">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              style={{
                margin: 0,
                background: C.navy,
                borderRadius: 14,
                padding: "28px 26px",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div style={{ display: "flex", gap: 2 }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} style={{ width: 18, height: 18, color: C.gold, fill: C.gold }} />
                ))}
              </div>
              <blockquote style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "rgba(255,255,255,0.9)" }}>
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption style={{ marginTop: "auto" }}>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16, color: C.gold }}>{r.name}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{r.place}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 880px){ .lp-reviews-grid{ grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}
