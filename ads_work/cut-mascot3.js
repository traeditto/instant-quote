const sharp = require("sharp")
const path = require("path")

const SRC = "public/ads-assets/mascot-original.png"
const OUT = "public/ads-assets/mascot-cut.png"
const HEAD_OUT = "public/ads-assets/mascot-head-cut.png"

async function main() {
  const img = sharp(SRC).ensureAlpha()
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true })
  const { width: W, height: H, channels: C } = info
  const idx = (x, y) => (y * W + x) * C

  const isBgColor = (x, y) => {
    const i = idx(x, y)
    const r = data[i], g = data[i + 1], b = data[i + 2]
    if (r > 228 && g > 228 && b > 228) return true
    const max = Math.max(r, g, b), min = Math.min(r, g, b)
    // light, low-saturation gray (shadow / anti-aliased edge)
    if (max - min < 26 && min > 170) return true
    return false
  }

  // label: 0 = unvisited, 1 = removed (background)
  const removed = new Uint8Array(W * H)

  // 1) Flood fill from all border pixels that are background -> outer background
  const stack = []
  for (let x = 0; x < W; x++) {
    if (isBgColor(x, 0)) stack.push(x, 0)
    if (isBgColor(x, H - 1)) stack.push(x, H - 1)
  }
  for (let y = 0; y < H; y++) {
    if (isBgColor(0, y)) stack.push(0, y)
    if (isBgColor(W - 1, y)) stack.push(W - 1, y)
  }
  const flood = () => {
    while (stack.length) {
      const y = stack.pop(), x = stack.pop()
      if (x < 0 || y < 0 || x >= W || y >= H) continue
      const p = y * W + x
      if (removed[p]) continue
      if (!isBgColor(x, y)) continue
      removed[p] = 1
      stack.push(x + 1, y, x - 1, y, x, y + 1, x, y - 1)
    }
  }
  flood()

  // 2) Find enclosed background pockets (bg color, not yet removed).
  //    Remove only LARGE pockets (the arm gap), keep small ones (logo strokes).
  const visited = new Uint8Array(W * H)
  const AREA_THRESHOLD = 1200
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const p = y * W + x
      if (visited[p] || removed[p]) continue
      if (!isBgColor(x, y)) continue
      // BFS this pocket
      const comp = []
      const q = [x, y]
      visited[p] = 1
      while (q.length) {
        const cy = q.pop(), cx = q.pop()
        const cp = cy * W + cx
        comp.push(cp)
        const neigh = [cx + 1, cy, cx - 1, cy, cx, cy + 1, cx, cy - 1]
        for (let k = 0; k < neigh.length; k += 2) {
          const nx = neigh[k], ny = neigh[k + 1]
          if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue
          const np = ny * W + nx
          if (visited[np] || removed[np]) continue
          if (!isBgColor(nx, ny)) continue
          visited[np] = 1
          q.push(nx, ny)
        }
      }
      if (comp.length >= AREA_THRESHOLD) {
        for (const cp of comp) removed[cp] = 1
      }
    }
  }

  // 3) Apply alpha
  for (let p = 0; p < W * H; p++) {
    if (removed[p]) data[p * C + 3] = 0
  }

  const cut = sharp(data, { raw: { width: W, height: H, channels: C } }).png()
  const buf = await cut.toBuffer()

  // Trim transparent margins for the full mascot
  await sharp(buf).trim({ threshold: 1 }).toFile(path.resolve(OUT))

  // Head crop: top portion, then trim
  const headH = Math.round(H * 0.42)
  await sharp(buf)
    .extract({ left: 0, top: 0, width: W, height: headH })
    .trim({ threshold: 1 })
    .toFile(path.resolve(HEAD_OUT))

  console.log("done")
}

main()
