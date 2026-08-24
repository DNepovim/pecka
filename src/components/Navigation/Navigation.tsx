import useScrollPosition from '@react-hook/window-scroll'
import { useCallback, useEffect, useState } from 'react'

import { DesktopNavigation } from '@/components/Navigation/DesktopNavigation'
import { MobileNavigation } from '@/components/Navigation/MobileNavigation'

export type NavigationItem = {
  title: string
  link: string
}

type NavigationLogo = {
  src: string
  width: number
  height: number
}

export const Navigation = ({
  items,
  logo,
}: {
  items: NavigationItem[]
  logo: NavigationLogo
}) => {
  const [activeItem, setActiveItem] = useState<string | undefined>()
  const scrollPosition = useScrollPosition()
  const onScrollHandler = useCallback(
    (scrollPossition: number) => {
      if (document.body.scrollHeight - (scrollPossition + window.innerHeight) < 100) {
        setActiveItem(items[items.length - 1]?.link)
        return
      }
      setActiveItem(
        items.slice(0, -1).reduce<string | undefined>((acc, item) => {
          const block = document.getElementById(item.link.substring(2))
          if (!block) {
            return
          }
          const { top } = block.getBoundingClientRect()
          return top < 100 ? item.link : acc
        }, undefined),
      )
    },
    [items],
  )
  useEffect(() => {
    onScrollHandler(scrollPosition)
  }, [onScrollHandler, scrollPosition])
  return (
    <div className="fixed inset-x-0 top-0 z-[100] w-full bg-white py-2">
      <nav className="max-w-container mx-auto flex w-full items-center px-2 md:px-4">
        <div className="my-0 mr-auto ml-0 flex h-full items-center">
          <a
            className="m-0 flex text-4xl transition-opacity duration-500"
            href="#uvod"
            style={{ opacity: activeItem ? 1 : 0 }}
          >
            <img
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt=""
              decoding="async"
            />
          </a>
        </div>
        <div className="ml-auto">
          <span className="max-lg:hidden">
            <DesktopNavigation items={items} activeItem={activeItem} />
          </span>
          <span className="lg:hidden">
            <MobileNavigation items={items} />
          </span>
        </div>
      </nav>
    </div>
  )
}
