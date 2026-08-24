import type { ImageMetadata } from 'astro'

/** `astro:assets` accepts these, but Astro doesn't re-export the type. */
export type ImageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

/**
 * Dimensions of the image file *before* EXIF orientation is applied.
 *
 * `gatsby-plugin-sharp` rotated the pixels but sized the layout box from the
 * raw file, so a phone photo tagged "rotate 90°" occupied a landscape box and
 * got cropped by `object-fit: cover`. Astro reports orientation-corrected
 * dimensions, which would make those images occupy a portrait box instead and
 * visibly change the gallery mosaic — so the old behaviour is reproduced here.
 *
 * Only orientations 5–8 swap the axes.
 */
export const rawDimensions = ({ width, height, orientation }: ImageMetadata) =>
  orientation && orientation >= 5 && orientation <= 8
    ? { width: height, height: width }
    : { width, height }
