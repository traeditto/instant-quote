import { Phone, Mail, MapPin } from "lucide-react"
import { C, PHONE, PHONE_HREF, EMAIL, AREA } from "./theme"

export function SiteFooter() {
  return (
    <footer style={{ background: "#07111f", padding: "48px 24px 32px" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr 1fr",
          gap: 32,
        }}
        className="lp-footer-grid"
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <img
              src="/ads-assets/shield-official.png"
              alt="Kingdom Roofing & Gutters logo"
              style={{ width: 48, height: 48, objectFit: "contain" }}
              crossOrigin="anonymous"
            />
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 20, color: C.white, letterSpacing: 0.5 }}>
                KINGDOM
              </span>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: 10, color: C.gold, letterSpacing: 2 }}>
                ROOFING &amp; GUTTERS
              </span>
            </span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.6)", margin: 0, maxWidth: 320 }}>
            Family-owned roofing, gutters, siding, and windows. Protecting Jacksonville homes with speed and a smile.
          </p>
        </div>

        <div>
          <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15, letterSpacing: 1.5, color: C.gold, margin: "0 0 16px" }}>
            CONTACT
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li>
              <a href={PHONE_HREF} style={footLink}>
                <Phone style={{ width: 16, height: 16, color: C.gold }} />
                {PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} style={footLink}>
                <Mail style={{ width: 16, height: 16, color: C.gold }} />
                {EMAIL}
              </a>
            </li>
            <li style={{ ...footLink, cursor: "default" }}>
              <MapPin style={{ width: 16, height: 16, color: C.gold }} />
              {AREA}
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15, letterSpacing: 1.5, color: C.gold, margin: "0 0 16px" }}>
            SERVICES
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
            {["Roof Replacement", "Roof Repair", "Seamless Gutters", "Siding & Windows"].map((s) => (
              <li key={s} style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "32px auto 0",
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          fontSize: 13,
          color: "rgba(255,255,255,0.5)",
        }}
      >
        <span>© {new Date().getFullYear()} Kingdom Roofing &amp; Gutters. Licensed &amp; insured.</span>
        <a href="/gallery" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
          Ad creative gallery
        </a>
      </div>
      <style>{`@media (max-width: 720px){ .lp-footer-grid{ grid-template-columns: 1fr !important; gap: 28px !important; } }`}</style>
    </footer>
  )
}

const footLink = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  fontSize: 14,
  color: "rgba(255,255,255,0.7)",
  textDecoration: "none",
} as const
