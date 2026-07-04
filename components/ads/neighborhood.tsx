import { Home, ClipboardCheck } from "lucide-react"
import { COLORS, Wordmark, PhoneNumber, Website, Feature, ServicesTag } from "./shared"

const MASCOT = "/ads-assets/mascot-cut.png"

export function Neighborhood() {
  return (
    <div style={{ position: "relative", width: 600, height: 1200, overflow: "hidden", background: COLORS.navy }}>
      <img
        src="/ads-assets/bg-aerial.png"
        alt="Aerial view of a suburban neighborhood"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        crossOrigin="anonymous"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(8,18,34,0.9) 22%, rgba(8,18,34,0.35) 42%, rgba(8,18,34,0.2) 58%, rgba(8,18,34,0.85) 78%)",
        }}
      />
      {/* mascot */}
      <img
        src={MASCOT || "/placeholder.svg"}
        alt="Kingdom Roofing lion mascot giving a thumbs up"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: 300,
          height: 500,
          width: "auto",
          zIndex: 3,
          filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.5))",
        }}
        crossOrigin="anonymous"
      />

      <div style={{ position: "absolute", top: 48, left: 44, right: 44 }}>
        <div style={{ marginBottom: 16 }}>
          <ServicesTag size={18} />
        </div>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 54,
            lineHeight: 0.98,
            color: COLORS.white,
            margin: 0,
          }}
        >
          WE&apos;RE ALREADY
          <br />
          WORKING IN YOUR
          <br />
          <span style={{ color: COLORS.gold }}>NEIGHBORHOOD.</span>
        </h1>
        <div style={{ width: 110, height: 4, background: COLORS.red, margin: "22px 0 18px" }} />
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 24, lineHeight: 1.4, color: COLORS.white, margin: 0 }}>
          Trusted by homeowners all over Jacksonville for honest inspections
          and roofing work that lasts.
        </p>
      </div>

      {/* wordmark above gold strip */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 248, display: "flex", justifyContent: "center" }}>
        <Wordmark shield={58} name={30} sub={11} />
      </div>

      {/* gold feature strip */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 130,
          height: 92,
          zIndex: 5,
          background: COLORS.gold,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
        }}
      >
        <Feature icon={<Home style={{ width: 34, height: 34 }} strokeWidth={2.2} />} lines={["FREE", "INSPECTIONS"]} textSize={20} color={COLORS.navy} iconColor={COLORS.navy} />
        <div style={{ width: 2, height: 48, background: "rgba(11,26,46,0.3)" }} />
        <Feature icon={<ClipboardCheck style={{ width: 34, height: 34 }} strokeWidth={2.2} />} lines={["FREE", "ESTIMATES"]} textSize={20} color={COLORS.navy} iconColor={COLORS.navy} />
      </div>

      {/* red footer */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 130,
          zIndex: 5,
          background: COLORS.red,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <PhoneNumber size={36} />
        <Website size={18} />
      </div>
    </div>
  )
}
