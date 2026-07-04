import type { ReactElement } from "react"
import { OlderRoofs } from "./older-roofs"
import { ProtectKingdom } from "./protect-kingdom"
import { SpeedBanner, ServicesBanner } from "./banners"
import { StormDamage } from "./storm-damage"
import { WeProtect } from "./we-protect"
import { GreaterRisk } from "./greater-risk"
import { Neighborhood } from "./neighborhood"
import { PeaceOfMind } from "./peace-of-mind"

export const AD_COMPONENTS: Record<string, () => ReactElement> = {
  "older-roofs-portrait": () => <OlderRoofs variant="portrait" />,
  "protect-kingdom": () => <ProtectKingdom />,
  "older-roofs-square": () => <OlderRoofs variant="square" />,
  "speed-banner": () => <SpeedBanner />,
  "storm-damage": () => <StormDamage />,
  "we-protect": () => <WeProtect />,
  "greater-risk": () => <GreaterRisk />,
  "neighborhood": () => <Neighborhood />,
  "peace-of-mind": () => <PeaceOfMind />,
  "services-banner": () => <ServicesBanner />,
}
