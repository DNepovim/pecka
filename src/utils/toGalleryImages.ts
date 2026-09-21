import type { ImageMetadata } from 'astro'
import { getImage } from 'astro:assets'

import type { GalleryImage } from '@/components/Gallery'
import { rawDimensions } from '@/utils/imageDimensions'

const WIDTH = 1920
const WIDTHS = [400, 640, 960, 1280, WIDTH]

/**
 * Astro's image pipeline only runs on the server, so the gallery island
 * receives already resolved `src`/`srcSet` values.
 */
export const toGalleryImages = (images: ImageMetadata[]): Promise<GalleryImage[]> =>
  Promise.all(
    images.map(async (image) => {
      const resolved = await getImage({ src: image, width: WIDTH, widths: WIDTHS })
      const raw = rawDimensions(image)

      return {
        src: resolved.src,
        srcSet: resolved.srcSet.attribute || undefined,
        width: WIDTH,
        height: Math.round((raw.height / raw.width) * WIDTH),
      }
    }),
  )
