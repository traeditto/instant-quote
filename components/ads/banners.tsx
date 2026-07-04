import { COLORS, Wordmark, PhoneNumber, Website } from "./shared"

const LION = "/ads-assets/mascot-head-cut.png"

function JimmyText({ size }: { size: number }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: size,
        lineHeight: 1.06,
        color: COLORS.white,
        whiteSpace: "nowrap",
      }}
    >
      <div>
        JIMMY JOHN&apos;S <span style={{ color: COLORS.red }}>SPEED.</span>
      </div>
      <div>
        CHICK-FIL-A <span style={{ color: COLORS.red }}>SERVICE.</span>
      </div>
    </div>
  )
}

function LocalFamily({ size }: { size: number }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: size,
        lineHeight: 1.05,
        color: COLORS.navy,
        textAlign: "center",
        whiteSpace: "nowrap",
      }}
    >
      LOCAL.
      <br />
      FAMILY OWNED.
    </div>
  )
}

export function SpeedBanner() {
  // 1200 x 200
  return (
    <div style={{ position: "relative", width: 1200, height: 200, overflow: "hidden", background: COLORS.navy }}>
      {/* gold parallelogram */}
      <div
        style={{
          position: "absolute",
          left: 300,
          top: 0,
          width: 230,
          height: 200,
          background: COLORS.gold,
          clipPath: "polygon(14% 0, 100% 0, 86% 100%, 0 100%)",
        }}
      />
      {/* red right wedge */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 250,
          height: 200,
          background: COLORS.red,
          clipPath: "polygon(24% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* logo */}
      <div style={{ position: "absolute", left: 30, top: 0, height: 200, display: "flex", alignItems: "center" }}>
        <Wordmark shield={64} name={30} sub={11} />
      </div>

      {/* local / family owned on gold */}
      <div
        style={{
          position: "absolute",
          left: 318,
          top: 0,
          width: 196,
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LocalFamily size={25} />
      </div>

      {/* jimmy / chick-fil-a */}
      <div style={{ position: "absolute", left: 545, top: 0, height: 200, display: "flex", alignItems: "center" }}>
        <JimmyText size={20} />
      </div>

      {/* lion (cut-out, sits over navy/red boundary) */}
      <img
        src={LION || "/placeholder.svg"}
        alt="Kingdom lion mascot"
        style={{ position: "absolute", right: 196, top: "50%", transform: "translateY(-50%)", height: 180, width: "auto", zIndex: 5 }}
        crossOrigin="anonymous"
      />

      {/* phone + website on red wedge */}
      <div
        style={{
          position: "absolute",
          right: 20,
          top: 0,
          height: 200,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 6,
          zIndex: 6,
        }}
      >
        <PhoneNumber size={25} />
        <Website size={13} color={COLORS.gold} />
      </div>
    </div>
  )
}

export function ServicesBanner() {
  // 1920 x 200
  return (
    <div style={{ position: "relative", width: 1920, height: 200, overflow: "hidden", background: COLORS.navy }}>
      {/* gold parallelogram */}
      <div
        style={{
          position: "absolute",
          left: 980,
          top: 0,
          width: 240,
          height: 200,
          background: COLORS.gold,
          clipPath: "polygon(14% 0, 100% 0, 86% 100%, 0 100%)",
        }}
      />
      {/* red right wedge */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 250,
          height: 200,
          background: COLORS.red,
          clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* logo */}
      <div style={{ position: "absolute", left: 44, top: 0, height: 200, display: "flex", alignItems: "center" }}>
        <Wordmark shield={72} name={36} sub={13} />
      </div>

      {/* services list */}
      <div style={{ position: "absolute", left: 332, top: 0, height: 200, display: "flex", alignItems: "center" }}>
        <div style={{ width: 2, height: 74, background: "rgba(255,255,255,0.35)", marginRight: 30 }} />
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: 27,
            letterSpacing: 1,
            color: COLORS.white,
            display: "flex",
            alignItems: "center",
            gap: 16,
            whiteSpace: "nowrap",
          }}
        >
          <span>ROOFING</span>
          <span style={{ color: COLORS.red }}>•</span>
          <span>GUTTERS</span>
          <span style={{ color: COLORS.red }}>•</span>
          <span>SIDING</span>
          <span style={{ color: COLORS.red }}>•</span>
          <span>WINDOWS</span>
        </div>
      </div>

      {/* local / family owned on gold */}
      <div
        style={{
          position: "absolute",
          left: 998,
          top: 0,
          width: 210,
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LocalFamily size={26} />
      </div>

      {/* jimmy / chick-fil-a */}
      <div style={{ position: "absolute", left: 1208, top: 0, height: 200, display: "flex", alignItems: "center" }}>
        <JimmyText size={22} />
      </div>

      {/* lion (cut-out) */}
      <img
        src={LION || "/placeholder.svg"}
        alt="Kingdom lion mascot"
        style={{ position: "absolute", right: 118, top: "50%", transform: "translateY(-50%)", height: 150, width: "auto", zIndex: 5 }}
        crossOrigin="anonymous"
      />

      {/* phone + website on red wedge */}
      <div
        style={{
          position: "absolute",
          right: 24,
          top: 0,
          height: 200,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 7,
          zIndex: 6,
        }}
      >
        <PhoneNumber size={30} />
        <Website size={15} color={COLORS.gold} />
      </div>
    </div>
  )
}
