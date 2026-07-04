import { ShieldCheck, ClipboardCheck, AlertTriangle } from "lucide-react"
import { COLORS, Wordmark, PhoneNumber, Website, Feature, OfferBadge, ServicesTag } from "./shared"

const BULLETS = ["High Winds", "Hail Impacts", "Missing Shingles", "Granule Loss"]
const MASCOT = "/ads-assets/mascot-cut.png"

export function StormDamage() {
  return (
    <div style={{ position: "relative", width: 1200, height: 628, overflow: "hidden", background: COLORS.navy }}>
      <img
        src="/ads-assets/bg-storm-landscape.png"
        alt="Stormy night sky over a damaged roof"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        crossOrigin="anonymous"
      />
      {/* mascot */}
      <img
        src={MASCOT || "/placeholder.svg"}
        alt="Kingdom Roofing lion mascot giving a thumbs up"
        style={{
          position: "absolute",
          right: -10,
          bottom: 96,
          height: 540,
          width: "auto",
          zIndex: 3,
          filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.45))",
        }}
        crossOrigin="anonymous"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: "linear-gradient(90deg, rgba(7,17,32,0.95) 40%, rgba(7,17,32,0.55) 60%, rgba(7,17,32,0) 78%)",
        }}
      />

      {/* offer badge in lower-right, clear of mascot face */}
      <div style={{ position: "absolute", bottom: 132, right: 24, zIndex: 6 }}>
        <OfferBadge size={150} />
      </div>

      <div style={{ position: "absolute", left: 56, top: 34, right: 460, zIndex: 4 }}>
        <div style={{ marginBottom: 12 }}>
          <ServicesTag size={17} />
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
          STORM DAMAGE
          <br />
          <span style={{ color: COLORS.gold }}>CAN BE SNEAKY.</span>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: 24,
            color: COLORS.white,
            margin: "14px 0 0",
            lineHeight: 1.1,
          }}
        >
          WE&apos;LL FIND WHAT
          <br />
          OTHERS MISS.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 11, marginTop: 22 }}>
          {BULLETS.map((b) => (
            <div key={b} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <AlertTriangle style={{ width: 24, height: 24, color: COLORS.red }} fill={COLORS.red} strokeWidth={0} />
              <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 24, color: COLORS.white }}>{b}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 22 }}>
          <Wordmark shield={48} name={24} sub={9} />
        </div>
      </div>

      {/* footer */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 116,
          zIndex: 5,
          background: COLORS.red,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 48px",
        }}
      >
        <div style={{ display: "flex", gap: 40 }}>
          <Feature icon={<ShieldCheck style={{ width: 34, height: 34 }} strokeWidth={2.4} />} lines={["FREE", "INSPECTIONS"]} textSize={20} iconColor={COLORS.white} />
          <Feature icon={<ClipboardCheck style={{ width: 34, height: 34 }} strokeWidth={2.4} />} lines={["FREE", "ESTIMATES"]} textSize={20} iconColor={COLORS.white} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
          <PhoneNumber size={34} />
          <Website size={17} />
        </div>
      </div>
    </div>
  )
}
