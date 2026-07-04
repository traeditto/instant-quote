import { COLORS, Wordmark, PhoneNumber, Website } from "./shared"

const MASCOT = "/ads-assets/mascot-cut.png"

export function GreaterRisk() {
  return (
    <div style={{ position: "relative", width: 300, height: 600, overflow: "hidden", background: COLORS.navy }}>
      {/* dusk roofline background */}
      <img
        src="/ads-assets/bg-roof-narrow.png"
        alt="Suburban rooftops at dusk"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        crossOrigin="anonymous"
      />
      {/* mascot at the bottom */}
      <img
        src={MASCOT || "/placeholder.svg"}
        alt="Kingdom Roofing lion mascot giving a thumbs up"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-48%)",
          bottom: 70,
          height: 232,
          width: "auto",
          zIndex: 3,
          filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.45))",
        }}
        crossOrigin="anonymous"
      />
      {/* top readability gradient (kept above the photo, below the text) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: "linear-gradient(180deg, rgba(8,18,34,0.97) 46%, rgba(8,18,34,0.55) 64%, rgba(8,18,34,0.1) 84%)",
        }}
      />

      <div style={{ position: "absolute", top: 20, left: 0, right: 0, zIndex: 4, display: "flex", justifyContent: "center" }}>
        <Wordmark shield={40} name={19} sub={7} gap={8} />
      </div>

      <div style={{ position: "absolute", top: 86, left: 22, right: 22, zIndex: 4 }}>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 33,
            lineHeight: 0.98,
            color: COLORS.white,
            margin: 0,
          }}
        >
          OLDER ROOFS.
          <br />
          <span style={{ color: COLORS.gold }}>GREATER RISK.</span>
        </h1>
        <div style={{ width: 64, height: 3, background: COLORS.red, margin: "14px 0 14px" }} />
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 15,
            lineHeight: 1.35,
            color: COLORS.white,
            margin: "0 0 16px",
          }}
        >
          Recent storms can cause hidden damage that shortens your roof&apos;s life.
        </p>
        <div style={{ display: "flex", gap: 24 }}>
          <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 17, color: COLORS.white, lineHeight: 1.08 }}>
            FREE
            <br />
            INSPECTIONS
          </div>
          <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 17, color: COLORS.white, lineHeight: 1.08 }}>
            FREE
            <br />
            ESTIMATES
          </div>
        </div>
      </div>

      {/* footer */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 84,
          zIndex: 5,
          background: COLORS.red,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <PhoneNumber size={20} />
        <Website size={11} />
      </div>
    </div>
  )
}
