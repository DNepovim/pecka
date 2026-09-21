import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'

import { Button } from '@/components/Button'
import { buttonClassName } from '@/components/linkClasses'

import 'yet-another-react-lightbox/styles.css'

export type GalleryImage = {
  src: string
  srcSet?: string
  width: number
  height: number
}

type GalleryProps = {
  images: GalleryImage[]
  /** Public album with the rest of the photos. Omit to hide the buttons. */
  photosUrl?: string
}

const getImageClasses = (index: number, total: number, isOpened: boolean): string => {
  const classes: string[] = []

  /*
   * Grid span classes based on position. A span only works when enough tiles
   * follow it to fill the rows it stretches into — on a short gallery the
   * stretched tile ends up alone in the last row with a hole beside it.
   */
  if (total - index > 4) {
    if (index === 0) {
      classes.push('md:col-span-2 md:row-span-2')
    } else if (index === 4) {
      classes.push('md:row-span-2')
    } else if (index === 8) {
      classes.push('md:col-span-2')
    } else if (index === 17) {
      classes.push('md:col-span-2 md:row-span-2')
    }
  }

  // Hidden on mobile when gallery is closed (images after index 4, except index 8)
  if (index > 4 && index !== 8 && !isOpened) {
    classes.push('max-md:hidden')
  }

  return classes.join(' ')
}

export const Gallery = ({ images, photosUrl }: GalleryProps) => {
  const [isOpened, setIsOpened] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  return (
    <div className="mx-auto mb-16 grid max-w-screen-2xl grid-cols-1 gap-4 px-4 md:grid-cols-3 lg:grid-cols-4">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`sm:cursor-pointer ${getImageClasses(index, images.length, isOpened)}`}
          onClick={() => {
            if (window.innerWidth >= 640) {
              setLightboxIndex(index)
            }
          }}
        >
          <img
            src={image.src}
            srcSet={image.srcSet}
            sizes="(min-width: 60rem) 25vw, (min-width: 40rem) 33vw, 100vw"
            width={image.width}
            height={image.height}
            alt=""
            loading="lazy"
            decoding="async"
            // Sizes the grid row from the declared box rather than from the
            // decoded bitmap, which EXIF rotation can transpose.
            style={{ aspectRatio: `${image.width} / ${image.height}` }}
            className={`h-full w-full object-cover ${index === 19 ? 'object-top' : ''}`}
          />
        </div>
      ))}
      <div className="col-span-full flex justify-center">
        <button
          type="button"
          className={`${buttonClassName} mx-auto w-fit ${isOpened ? 'hidden' : 'md:hidden'}`}
          onClick={() => {
            setIsOpened(true)
          }}
        >
          Další fotky
        </button>
        {photosUrl && (
          <>
            <Button to={photosUrl} className="max-md:hidden">
              Více fotek
            </Button>
            <Button to={photosUrl} className={isOpened ? 'md:hidden' : 'hidden'}>
              Ještě více fotek
            </Button>
          </>
        )}
      </div>

      <Lightbox
        open={lightboxIndex > -1}
        index={lightboxIndex}
        on={{
          exited: () => {
            setLightboxIndex(-1)
          },
        }}
        slides={images.map((image) => ({
          src: image.src,
          width: image.width,
          height: image.height,
        }))}
        carousel={{ imageFit: 'contain', padding: 50 }}
        controller={{ closeOnBackdropClick: true }}
        styles={{
          container: {
            backgroundColor: 'rgba(139, 90, 43, 0.9)',
            backdropFilter: 'blur(5px)',
          },
        }}
      />
    </div>
  )
}
