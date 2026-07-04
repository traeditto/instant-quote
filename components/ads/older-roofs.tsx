import { ShieldCheck, ClipboardCheck } from "lucide-react"
import { COLORS, Wordmark, PhoneNumber, Website, ScriptTag, Feature, OfferBadge, ServicesTag } from "./shared"

const MASCOT = "/ads-assets/mascot-cut.png"

export function OlderRoofs({ variant }: { variant: "portrait" | "square" }) {
  const portrait = variant === "portrait"
  const W = 1080
  const H = portrait ? 1350 : 1080
  const bg = portrait ? "/ads-assets/bg-storm-portrait.png" : "/ads-assets/bg-storm-square.png"
  const footerH = portrait ? 200 : 170
  const headFont = portrait ? 92 : 84

  return (
    <div style={{ position: "relative", width: W, height: H, overflow: "hidden", background: COLORS.navy }}>
      <img
        src={bg || "/placeholder.svg"}
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
          right: portrait ? -30 : -50,
          bottom: footerH - 20,
          height: portrait ? 940 : 760,
          width: "auto",
          zIndex: 3,
          filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.45))",
        }}
        crossOrigin="anonymous"
      />
      {/* left readability gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: "linear-gradient(90deg, rgba(7,17,32,0.94) 30%, rgba(7,17,32,0.5) 52%, rgba(7,17,32,0) 70%)",
        }}
      />

      <div style={{ position: "absolute", left: 64, top: 56, right: 64, zIndex: 4 }}>
        <div style={{ marginBottom: 20 }}>
          <ServicesTag size={portrait ? 24 : 22} />
        </div>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: headFont,
            lineHeight: 0.96,
            color: COLORS.white,
            margin: 0,
            letterSpacing: 1,
          }}
        >
          OLDER ROOFS
          <br />
          <span style={{ color: COLORS.gold }}>DON&apos;T LAST.</span>
          <br />
          WE DO.
        </h1>
        <div style={{ width: 150, height: 4, background: COLORS.red, margin: "26px 0 24px" }} />
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 30,
            lineHeight: 1.3,
            color: COLORS.white,
            margin: 0,
            maxWidth: 360,
          }}
        >
          Recent storms can cause hidden damage.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 22, marginTop: 40 }}>
          <Feature
            icon={<ShieldCheck style={{ width: 40, height: 40 }} strokeWidth={2.4} />}
            lines={["FREE", "INSPECTIONS"]}
            textSize={26}
          />
          <Feature
            icon={<ClipboardCheck style={{ width: 40, height: 40 }} strokeWidth={2.4} />}
            lines={["FREE", "ESTIMATES"]}
            textSize={26}
          />
        </div>

        {portrait && (
          <div style={{ marginTop: 44 }}>
            <ScriptTag size={52} />
          </div>
        )}
      </div>

      {/* offer badge in open lower-center, clear of mascot face */}
      <div
        style={{
          position: "absolute",
          left: 80,
          bottom: footerH + 36,
          zIndex: 6,
        }}
      >
        <OfferBadge size={portrait ? 250 : 220} />
      </div>

      {/* footer */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: footerH,
          zIndex: 5,
          background: COLORS.red,
          clipPath: "polygon(0 36%, 100% 0, 100% 100%, 0 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 56px",
        }}
      >
        <div style={{ paddingTop: footerH * 0.16 }}>
          <Wordmark shield={64} name={30} sub={11} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 8,
            paddingTop: footerH * 0.16,
          }}
        >
          <PhoneNumber size={42} />
          <Website size={20} />
        </div>
      </div>
    </div>
  )
}
