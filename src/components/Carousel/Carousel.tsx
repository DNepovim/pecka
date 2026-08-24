import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { Carousel as CarouselLib } from 'react-responsive-carousel'
import { useWindowSize } from 'rooks'

import { H3 } from '@/components/Typography'

import '@/styles/carousel.css'

export type CarouselImage = {
  src: string
  srcSet?: string
  sizes?: string
  width: number
  height: number
  alt: string
  className?: string
}

type CarouselItem = {
  image?: CarouselImage
  name: string
  text: ReactNode
  fullName?: string
}

type CarouselProps = {
  isCenterd?: boolean
  indicatorsVerticalPosition?: 'top' | 'bottom'
  items: CarouselItem[]
}

export const Carousel = ({
  isCenterd,
  indicatorsVerticalPosition,
  items,
}: CarouselProps) => {
  const { innerWidth } = useWindowSize()
  const activeIndicatorRef = useRef<HTMLButtonElement>(null)
  const [indicatorPosition, setIndicatorPosition] = useState<number | null>(null)
  const [selectedItem, setSelectedItem] = useState(Math.floor(items.length / 2))

  useEffect(() => {
    const activeIndicatorItemRec = activeIndicatorRef.current?.getBoundingClientRect()
    const indicatorContainerRect =
      activeIndicatorRef.current?.parentElement?.getBoundingClientRect()
    if (innerWidth && activeIndicatorItemRec && indicatorContainerRect) {
      const activeIndicatorItemLeft = activeIndicatorItemRec.left
      const activeIndicatorItemWidth = activeIndicatorItemRec.width
      const indicatorContainerLeft = indicatorContainerRect.left

      setIndicatorPosition(
        innerWidth / 2 -
          (activeIndicatorItemLeft -
            indicatorContainerLeft +
            activeIndicatorItemWidth / 2),
      )
    }
  }, [innerWidth, selectedItem])

  const indicatorsPosition = indicatorsVerticalPosition ?? 'bottom'

  return (
    <div
      className={`pecka-carousel pecka-carousel--indicators-${indicatorsPosition}`}
      style={{ '--indicator-offset': `${indicatorPosition ?? 0}px` } as CSSProperties}
    >
      <CarouselLib
        selectedItem={selectedItem}
        onChange={setSelectedItem}
        onClickItem={setSelectedItem}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={(innerWidth ?? 501) < 500}
        transitionTime={600}
        emulateTouch
        renderIndicator={(onClick, isSelected, index) => (
          <>
            <button
              type="button"
              className="pecka-carousel-name"
              data-selected={isSelected}
              ref={isSelected ? activeIndicatorRef : undefined}
              onClick={onClick}
            >
              {items[index]?.name}
            </button>
            {index < items.length - 1 && '–'}
          </>
        )}
        preventMovementUntilSwipeScrollTolerance
      >
        {items.map(({ text, name, image, fullName }, index) => (
          <div
            className={`${isCenterd ? 'text-center' : 'text-left'} select-none ${
              selectedItem === index
                ? 'cursor-ew-resize'
                : selectedItem < index
                  ? 'cursor-e-resize'
                  : 'cursor-w-resize'
            } max-md:flex max-md:flex-col max-md:items-center`}
            key={name}
          >
            {image && (
              <img
                src={image.src}
                srcSet={image.srcSet}
                sizes={image.sizes}
                width={image.width}
                height={image.height}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className={image.className}
              />
            )}
            {fullName && <H3>{fullName}</H3>}
            {text}
          </div>
        ))}
      </CarouselLib>
    </div>
  )
}
