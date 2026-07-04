import { Home, ClipboardCheck, Users } from "lucide-react"
import { COLORS, Wordmark, PhoneNumber, Website, Feature, ScriptTag, ServicesTag } from "./shared"

const MASCOT = "/ads-assets/mascot-cut.png"

export function ProtectKingdom() {
  return (
    <div style={{ position: "relative", width: 1200, height: 628, overflow: "hidden", background: COLORS.navy }}>
      {/* dusk roofline background */}
      <img
        src="/ads-assets/bg-roof-landscape.png"
        alt="Suburban rooftops at dusk"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        crossOrigin="anonymous"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, rgba(8,18,34,0.94) 30%, rgba(8,18,34,0.72) 55%, rgba(8,18,34,0.4) 100%)",
        }}
      />
      {/* red diagonal wedge on the right */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 520,
          height: 628,
          background: COLORS.red,
          clipPath: "polygon(34% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />
      {/* mascot over the wedge */}
      <img
        src={MASCOT || "/placeholder.svg"}
        alt="Kingdom Roofing lion mascot giving a thumbs up"
        style={{
          position: "absolute",
          right: 20,
          bottom: -10,
          height: 560,
          width: "auto",
          zIndex: 3,
          filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.4))",
        }}
        crossOrigin="anonymous"
      />

      {/* header */}
      <div style={{ position: "absolute", top: 44, left: 56, display: "flex", alignItems: "center", gap: 28, zIndex: 4 }}>
        <Wordmark shield={70} name={36} sub={13} />
        <div style={{ width: 2, height: 70, background: "rgba(255,255,255,0.35)" }} />
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 46,
            lineHeight: 0.98,
            color: COLORS.white,
            margin: 0,
          }}
        >
          PROTECT YOUR
          <br />
          <span style={{ color: COLORS.gold }}>KINGDOM.</span>
        </h1>
      </div>

      {/* body column */}
      <div style={{ position: "absolute", top: 166, left: 56, right: 470, zIndex: 4 }}>
        <div style={{ marginBottom: 14 }}>
          <ServicesTag size={17} />
        </div>
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: 30,
            color: COLORS.gold,
            margin: 0,
            letterSpacing: 0.5,
          }}
        >
          WE&apos;LL PROTECT YOUR HOME.
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 22,
            lineHeight: 1.4,
            color: COLORS.white,
            margin: "14px 0 0",
            maxWidth: 470,
          }}
        >
          From storm damage to aging shingles, our team keeps your roof
          strong, sealed, and ready for whatever Florida weather brings.
        </p>

        {/* feature row */}
        <div style={{ display: "flex", gap: 44, marginTop: 26 }}>
          <Feature icon={<Home style={{ width: 36, height: 36 }} strokeWidth={2.2} />} lines={["FREE", "INSPECTIONS"]} textSize={21} />
          <Feature icon={<ClipboardCheck style={{ width: 36, height: 36 }} strokeWidth={2.2} />} lines={["FREE", "ESTIMATES"]} textSize={21} />
          <Feature icon={<Users style={{ width: 36, height: 36 }} strokeWidth={2.2} />} lines={["LOCAL", "FAMILY OWNED"]} textSize={21} />
        </div>

        <div style={{ marginTop: 24 }}>
          <ScriptTag size={38} />
        </div>
      </div>

      {/* phone + site bottom left (clear of mascot) */}
      <div
        style={{
          position: "absolute",
          left: 56,
          bottom: 40,
          zIndex: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 8,
        }}
      >
        <PhoneNumber size={38} />
        <Website size={19} color={COLORS.gold} />
      </div>
    </div>
  )
}
