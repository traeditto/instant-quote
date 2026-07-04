export type AdMeta = {
  slug: string
  title: string
  width: number
  height: number
  /** filename for the exported PNG */
  file: string
}

export const ADS: AdMeta[] = [
  { slug: "older-roofs-portrait", title: "Older Roofs — Portrait", width: 1080, height: 1350, file: "1080x1350.png" },
  { slug: "protect-kingdom", title: "Protect Your Kingdom", width: 1200, height: 628, file: "protect-1200x628.png" },
  { slug: "older-roofs-square", title: "Older Roofs — Square", width: 1080, height: 1080, file: "1080x1080.png" },
  { slug: "speed-banner", title: "Speed Banner", width: 1200, height: 200, file: "1200x200.png" },
  { slug: "storm-damage", title: "Storm Damage", width: 1200, height: 628, file: "storm-1200x628.png" },
  { slug: "we-protect", title: "We Protect What Protects", width: 1200, height: 628, file: "we-protect-1200x628.png" },
  { slug: "greater-risk", title: "Greater Risk", width: 300, height: 600, file: "300x600.png" },
  { slug: "neighborhood", title: "Neighborhood", width: 600, height: 1200, file: "neighborhood-600x1200.png" },
  { slug: "peace-of-mind", title: "Peace of Mind", width: 600, height: 1200, file: "peace-600x1200.png" },
  { slug: "services-banner", title: "Services Banner", width: 1920, height: 200, file: "1920x200.png" },
]

export const ADS_BY_SLUG: Record<string, AdMeta> = Object.fromEntries(ADS.map((a) => [a.slug, a]))
