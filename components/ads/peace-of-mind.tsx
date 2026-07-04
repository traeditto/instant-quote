import { ShieldCheck, ClipboardCheck, Users } from "lucide-react"
import { COLORS, Wordmark, PhoneNumber, Website, Feature, JimmyTag, ServicesTag } from "./shared"

const MASCOT = "/ads-assets/mascot-cut.png"

export function PeaceOfMind() {
  return (
    <div style={{ position: "relative", width: 600, height: 1200, overflow: "hidden", background: COLORS.navy }}>
      {/* dusk roofline background */}
      <img
        src="/ads-assets/bg-roof-vertical.png"
        alt="Suburban rooftops at dusk"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        crossOrigin="anonymous"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(8,18,34,0.92) 30%, rgba(8,18,34,0.62) 55%, rgba(8,18,34,0.4) 100%)",
        }}
      />
      {/* mascot */}
      <img
        src={MASCOT || "/placeholder.svg"}
        alt="Kingdom Roofing lion mascot giving a thumbs up"
        style={{
          position: "absolute",
          right: -40,
          bottom: 110,
          height: 600,
          width: "auto",
          zIndex: 3,
          filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.5))",
        }}
        crossOrigin="anonymous"
      />

      <div style={{ position: "absolute", top: 48, left: 44, right: 44, zIndex: 4 }}>
        <div style={{ marginBottom: 16 }}>
          <ServicesTag size={18} />
        </div>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 52,
            lineHeight: 0.98,
            color: COLORS.gold,
            margin: 0,
          }}
        >
          PEACE OF MIND
          <br />
          <span style={{ color: COLORS.white }}>STARTS AT</span>
          <br />
          <span style={{ color: COLORS.white }}>THE TOP.</span>
        </h1>
        <div style={{ width: 110, height: 4, background: COLORS.red, margin: "22px 0 18px" }} />
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 25, lineHeight: 1.35, color: COLORS.white, margin: 0 }}>
          Honest Inspections.
          <br />
          Quality Work.
          <br />
          Built to Last.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 22, marginTop: 40 }}>
          <Feature icon={<ShieldCheck style={{ width: 38, height: 38 }} strokeWidth={2.2} />} lines={["FREE", "INSPECTIONS"]} textSize={22} iconColor={COLORS.gold} />
          <Feature icon={<ClipboardCheck style={{ width: 38, height: 38 }} strokeWidth={2.2} />} lines={["FREE", "ESTIMATES"]} textSize={22} iconColor={COLORS.gold} />
          <Feature icon={<Users style={{ width: 38, height: 38 }} strokeWidth={2.2} />} lines={["LOCAL", "FAMILY OWNED"]} textSize={22} iconColor={COLORS.gold} />
        </div>

        <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 4, alignSelf: "stretch", background: COLORS.red, borderRadius: 2 }} />
          <JimmyTag size={20} />
        </div>
      </div>

      <div style={{ position: "absolute", left: 44, bottom: 200, zIndex: 4 }}>
        <Wordmark shield={56} name={28} sub={10} />
      </div>

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
