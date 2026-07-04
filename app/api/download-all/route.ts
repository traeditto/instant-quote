import { readFile } from "node:fs/promises"
import path from "node:path"
import JSZip from "jszip"
import { ADS } from "@/lib/ads"

export async function GET() {
  const zip = new JSZip()
  const folder = zip.folder("kingdom-ads")!

  for (const ad of ADS) {
    const filePath = path.join(process.cwd(), "public", "ads", ad.file)
    try {
      const data = await readFile(filePath)
      folder.file(ad.file, data)
    } catch {
      // skip any missing file rather than failing the whole archive
    }
  }

  const buffer = await zip.generateAsync({ type: "nodebuffer" })

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": 'attachment; filename="kingdom-ads.zip"',
      "Cache-Control": "no-store",
    },
  })
}
