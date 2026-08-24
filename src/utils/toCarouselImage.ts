import type { ImageMetadata } from 'astro'
import { getImage } from 'astro:assets'

import type { CarouselImage } from '@/components/Carousel/Carousel'
import type { ImageFit } from '@/utils/imageDimensions'

type Options = {
  src: ImageMetadata
  alt: string
  width: number
  height: number
  fit?: ImageFit
  widths?: number[]
  sizes?: string
  className?: string
}

/**
 * Astro's image pipeline only runs on the server, so islands receive already
 * resolved `src`/`srcSet` values instead of an `ImageMetadata` object.
 */
export const toCarouselImage = async ({
  src,
  alt,
  width,
  height,
  fit,
  widths,
  sizes,
  className,
}: Options): Promise<CarouselImage> => {
  const image = await getImage({ src, width, height, fit, widths })

  return {
    src: image.src,
    srcSet: image.srcSet.attribute || undefined,
    sizes,
    width,
    height,
    alt,
    className,
  }
}
