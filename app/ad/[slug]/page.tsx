import { notFound } from "next/navigation"
import { ADS, ADS_BY_SLUG } from "@/lib/ads"
import { AD_COMPONENTS } from "@/components/ads/registry"

export function generateStaticParams() {
  return ADS.map((a) => ({ slug: a.slug }))
}

export default async function AdPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const meta = ADS_BY_SLUG[slug]
  const render = AD_COMPONENTS[slug]
  if (!meta || !render) notFound()

  return (
    <main
      id="ad-canvas"
      style={{
        width: meta.width,
        height: meta.height,
        overflow: "hidden",
        margin: 0,
      }}
    >
      {render()}
    </main>
  )
}
