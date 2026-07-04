import { ShieldCheck, ClipboardCheck } from "lucide-react"
import { COLORS, PhoneNumber, Website, ScriptTag, Feature, ServicesTag } from "./shared"

const MASCOT = "/ads-assets/mascot-cut.png"

export function WeProtect() {
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
          background: "linear-gradient(90deg, rgba(8,18,34,0.95) 36%, rgba(8,18,34,0.7) 58%, rgba(8,18,34,0.35) 100%)",
        }}
      />
      {/* mascot */}
      <img
        src={MASCOT || "/placeholder.svg"}
        alt="Kingdom Roofing lion mascot giving a thumbs up"
        style={{
          position: "absolute",
          right: 30,
          bottom: 70,
          height: 560,
          width: "auto",
          zIndex: 3,
          filter: "drop-shadow(0 10px 22px rgba(0,0,0,0.45))",
        }}
        crossOrigin="anonymous"
      />

      <div style={{ position: "absolute", left: 60, top: 46, right: 440, zIndex: 4 }}>
        <div style={{ marginBottom: 14 }}>
          <ServicesTag size={17} />
        </div>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 62,
            lineHeight: 0.96,
            color: COLORS.white,
            margin: 0,
          }}
        >
          WE PROTECT
          <br />
          WHAT PROTECTS
          <br />
          <span style={{ color: COLORS.gold }}>YOUR KINGDOM.</span>
        </h1>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 22,
            lineHeight: 1.38,
            color: COLORS.white,
            margin: "18px 0 0",
            maxWidth: 470,
          }}
        >
          Your roof is your home&apos;s first line of defense. We inspect,
          repair, and replace it with honest work that&apos;s built to last.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 32, marginTop: 24 }}>
          <Feature icon={<ShieldCheck style={{ width: 40, height: 40 }} strokeWidth={2.2} />} lines={["FREE", "INSPECTIONS"]} textSize={22} iconColor={COLORS.gold} />
          <div style={{ width: 2, height: 56, background: "rgba(255,255,255,0.3)" }} />
          <Feature icon={<ClipboardCheck style={{ width: 40, height: 40 }} strokeWidth={2.2} />} lines={["FREE", "ESTIMATES"]} textSize={22} iconColor={COLORS.gold} />
        </div>

        <div style={{ marginTop: 22 }}>
          <ScriptTag size={40} />
        </div>
      </div>

      {/* footer */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 110,
          zIndex: 5,
          background: COLORS.red,
          clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          paddingTop: 18,
        }}
      >
        <PhoneNumber size={40} />
        <Website size={22} />
      </div>
    </div>
  )
}
