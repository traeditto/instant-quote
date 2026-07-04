import Link from "next/link"
import { ADS } from "@/lib/ads"
import { AD_COMPONENTS } from "@/components/ads/registry"

export default function Gallery() {
  return (
    <main style={{ minHeight: "100vh", background: "#0b1a2e", padding: "48px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 20,
            marginBottom: 40,
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 40,
                color: "#fff",
                letterSpacing: 1,
                margin: "0 0 8px",
              }}
            >
              KINGDOM AD SET
            </h1>
            <p style={{ color: "#9fb3c8", fontSize: 15, margin: 0, maxWidth: 560 }}>
              {ADS.length} ad templates, each rendered crisp at its exact pixel size. Click any to open the full-size
              render.
            </p>
          </div>

          <a
            href="/api/download-all"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#c1121f",
              color: "#fff",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: 0.5,
              textDecoration: "none",
              padding: "14px 22px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
              whiteSpace: "nowrap",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            DOWNLOAD ALL ({ADS.length})
          </a>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "flex-start" }}>
          {ADS.map((ad) => {
            const previewW = Math.min(ad.width, 360)
            const scale = previewW / ad.width
            return (
              <div key={ad.slug} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Link
                  href={`/ad/${ad.slug}`}
                  style={{
                    display: "block",
                    width: previewW,
                    height: ad.height * scale,
                    overflow: "hidden",
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
                  }}
                >
                  <div style={{ width: ad.width, height: ad.height, transform: `scale(${scale})`, transformOrigin: "top left" }}>
                    {AD_COMPONENTS[ad.slug]()}
                  </div>
                </Link>
                <div style={{ display: "flex", justifyContent: "space-between", width: previewW }}>
                  <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{ad.title}</span>
                  <span style={{ color: "#9fb3c8", fontSize: 12, fontFamily: "var(--font-mono)" }}>
                    {ad.width}×{ad.height}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
