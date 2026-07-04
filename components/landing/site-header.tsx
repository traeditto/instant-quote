import { Phone } from "lucide-react"
import { C, PHONE, PHONE_HREF } from "./theme"

export function SiteHeader() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(11,26,46,0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <img
            src="/ads-assets/shield-official.png"
            alt="Kingdom Roofing & Gutters logo"
            style={{ width: 44, height: 44, objectFit: "contain" }}
            crossOrigin="anonymous"
          />
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 19, color: C.white, letterSpacing: 0.5 }}>
              KINGDOM
            </span>
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: 10, color: C.gold, letterSpacing: 2 }}>
              ROOFING &amp; GUTTERS
            </span>
          </span>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <a href="#services" style={navLink} className="lp-navlink lp-nav-hide">
            Services
          </a>
          <a href="#why" style={navLink} className="lp-navlink lp-nav-hide">
            Why Us
          </a>
          <a href="#reviews" style={navLink} className="lp-navlink lp-nav-hide">
            Reviews
          </a>
          <a
            href={PHONE_HREF}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 18px",
              background: C.red,
              color: C.white,
              borderRadius: 8,
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: 0.5,
              textDecoration: "none",
            }}
          >
            <Phone style={{ width: 16, height: 16 }} />
            {PHONE}
          </a>
        </nav>
      </div>
      <style>{`
        .lp-navlink:hover { color: ${C.gold} !important; }
        @media (max-width: 720px){ .lp-nav-hide{ display:none !important; } }
      `}</style>
    </header>
  )
}

const navLink = {
  fontFamily: "var(--font-sans)",
  fontSize: 15,
  fontWeight: 600,
  color: "rgba(255,255,255,0.85)",
  textDecoration: "none",
  transition: "color 0.15s",
} as const
