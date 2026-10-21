/** Sample an image's four edge colors and return a conic-gradient
 * that extends them outward (ambient light). Each edge's average
 * color sits at its side of the gradient; the blur on the ambient
 * layer softens the transitions.
 *
 * This is the conic-gradient ambient strategy. To swap in a
 * different strategy (e.g. an animated mesh gradient), create a
 * sibling module in this directory and change the import in
 * PaletteBackground.tsx. */
const SAMPLE_EDGE_PX = 256

export function sampleAmbientGradient(url: string): Promise<string | null> {
    return new Promise((resolve) => {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.src = url
        img.onload = () => {
            const canvas = document.createElement('canvas')
            const width = Math.min(img.width, SAMPLE_EDGE_PX)
            const height = Math.min(img.height, SAMPLE_EDGE_PX)
            canvas.width = width
            canvas.height = height
            const ctx = canvas.getContext('2d', { willReadFrequently: true })
            if (!ctx) { resolve(null); return }
            ctx.drawImage(img, 0, 0, width, height)
            const avg = (data: Uint8ClampedArray) => {
                let r = 0, g = 0, b = 0, n = 0
                for (let i = 0; i < data.length; i += 4) {
                    r += data[i]; g += data[i + 1]; b += data[i + 2]; n++
                }
                return `rgb(${Math.round(r / n)} ${Math.round(g / n)} ${Math.round(b / n)})`
            }
            const top = avg(ctx.getImageData(0, 0, width, 1).data)
            const bottom = avg(ctx.getImageData(0, height - 1, width, 1).data)
            const left = avg(ctx.getImageData(0, 0, 1, height).data)
            const right = avg(ctx.getImageData(width - 1, 0, 1, height).data)
            resolve(`conic-gradient(from 0deg at center, ${top}, ${right}, ${bottom}, ${left}, ${top})`)
        }
        img.onerror = () => resolve(null)
    })
}
