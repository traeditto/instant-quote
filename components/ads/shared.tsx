import type { CSSProperties, ReactNode } from "react"
import { Phone } from "lucide-react"

export const COLORS = {
  navy: "#0b1a2e",
  navy2: "#0f223c",
  red: "#cc2027",
  redDark: "#b81b22",
  gold: "#f6a01e",
  white: "#ffffff",
  cream: "#f4efe6",
}

export const SHIELD = "/ads-assets/shield-official.png"

/** Stacked Kingdom wordmark: shield + name. */
export function Wordmark({
  shield = 56,
  name = 22,
  sub = 9,
  color = COLORS.white,
  gap = 12,
}: {
  shield?: number
  name?: number
  sub?: number
  color?: string
  gap?: number
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap }}>
      <img
        src={SHIELD || "/placeholder.svg"}
        alt="Kingdom Roofing & Gutters shield logo"
        style={{ width: shield, height: shield, objectFit: "contain" }}
        crossOrigin="anonymous"
      />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: name,
            letterSpacing: name * 0.04,
            color,
          }}
        >
          KINGDOM
        </span>
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 500,
            fontSize: sub,
            letterSpacing: sub * 0.18,
            color,
            marginTop: sub * 0.4,
          }}
        >
          ROOFING &amp; GUTTERS
        </span>
      </div>
    </div>
  )
}

/** Phone number with circular icon. */
export function PhoneNumber({
  size = 30,
  color = COLORS.white,
  iconColor = COLORS.white,
}: {
  size?: number
  color?: string
  iconColor?: string
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: size * 0.36 }}>
      <Phone style={{ width: size * 0.82, height: size * 0.82, color: iconColor }} fill={iconColor} strokeWidth={0} />
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: size,
          color,
          letterSpacing: size * 0.01,
        }}
      >
        904-846-3238
      </span>
    </div>
  )
}

export function Website({ size = 14, color = COLORS.white }: { size?: number; color?: string }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        fontSize: size,
        letterSpacing: size * 0.06,
        color,
      }}
    >
      KINGDOMROOFINGCO.COM
    </span>
  )
}

/** "Local. Family Owned." script accent with underline. */
export function ScriptTag({ size = 34, color = COLORS.gold }: { size?: number; color?: string }) {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start" }}>
      <span
        style={{
          fontFamily: "var(--font-script)",
          fontWeight: 700,
          fontSize: size,
          color,
          lineHeight: 1,
        }}
      >
        Local. Family Owned.
      </span>
      <span style={{ width: size * 5.2, height: Math.max(2, size * 0.06), background: color, marginTop: size * 0.06 }} />
    </div>
  )
}

/** Feature item: icon + (one or two) label lines. */
export function Feature({
  icon,
  lines,
  iconSize = 30,
  textSize = 15,
  color = COLORS.white,
  iconColor = COLORS.red,
}: {
  icon: ReactNode
  lines: string[]
  iconSize?: number
  textSize?: number
  color?: string
  iconColor?: string
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: textSize * 0.7 }}>
      <span style={{ color: iconColor, display: "flex" }}>{icon}</span>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
        {lines.map((l) => (
          <span
            key={l}
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: textSize,
              letterSpacing: textSize * 0.02,
              color,
            }}
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  )
}

/** Eyebrow that states what the company does: ROOFING • GUTTERS • SIDING • WINDOWS */
export function ServicesTag({
  size = 18,
  color = COLORS.white,
  dotColor = COLORS.red,
  align = "left",
}: {
  size?: number
  color?: string
  dotColor?: string
  align?: "left" | "center"
}) {
  const items = ["ROOFING", "GUTTERS", "SIDING", "WINDOWS"]
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: align === "center" ? "center" : "flex-start",
        flexWrap: "wrap",
        gap: size * 0.6,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: size,
        letterSpacing: size * 0.08,
        color,
      }}
    >
      {items.map((item, i) => (
        <span key={item} style={{ display: "flex", alignItems: "center", gap: size * 0.6 }}>
          {item}
          {i < items.length - 1 && (
            <span style={{ color: dotColor, fontSize: size * 0.9, lineHeight: 1 }}>&bull;</span>
          )}
        </span>
      ))}
    </div>
  )
}

/** The "Jimmy John's Speed. Chick-fil-A Service." brand slogan. */
export function JimmyTag({
  size,
  align = "left",
}: {
  size: number
  align?: "left" | "center"
}) {
  return (
    <div
      style={{
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: size,
        lineHeight: 1.08,
        color: COLORS.white,
        textAlign: align,
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

/** Circular promo seal: "$500 OFF Full Roof Replacement". */
export function OfferBadge({ size = 200, rotate = -8 }: { size?: number; rotate?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        transform: `rotate(${rotate}deg)`,
        background: COLORS.red,
        border: `${size * 0.03}px solid ${COLORS.gold}`,
        boxShadow: "0 10px 26px rgba(0,0,0,0.4)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: COLORS.white,
        lineHeight: 1,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: size * 0.11,
          letterSpacing: size * 0.02,
          color: COLORS.gold,
        }}
      >
        SAVE
      </span>
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: size * 0.34,
          letterSpacing: -size * 0.006,
          marginTop: size * 0.01,
        }}
      >
        $500
      </span>
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: size * 0.13,
          letterSpacing: size * 0.04,
          marginTop: size * 0.005,
          color: COLORS.gold,
        }}
      >
        OFF
      </span>
      <span
        style={{
          width: size * 0.52,
          height: Math.max(2, size * 0.012),
          background: "rgba(255,255,255,0.5)",
          margin: `${size * 0.04}px 0`,
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: size * 0.072,
          letterSpacing: size * 0.01,
          maxWidth: size * 0.72,
        }}
      >
        FULL ROOF
        <br />
        REPLACEMENT
      </span>
    </div>
  )
}

/** A red footer bar with an angled left cut, used across several ads. */
export function AngledRedBar({
  children,
  height,
  style,
}: {
  children: ReactNode
  height: number
  style?: CSSProperties
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height,
        background: COLORS.red,
        clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0 100%)",
        display: "flex",
        alignItems: "center",
        ...style,
      }}
    >
      {children}
    </div>
  )
}
