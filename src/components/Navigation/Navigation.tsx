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

/** Items pointing at a section of the home page, i.e. `/#uvod`. */
const isSectionItem = (item: NavigationItem) => item.link.startsWith('/#')

export const Navigation = ({
  items,
  logo,
  currentPath,
}: {
  items: NavigationItem[]
  logo: NavigationLogo
  /** Set on pages that are not the home page, to highlight their own item. */
  currentPath?: string
}) => {
  const [activeItem, setActiveItem] = useState<string | undefined>(
    currentPath ? items.find((item) => item.link === currentPath)?.link : undefined,
  )
  const scrollPosition = useScrollPosition()
  const onScrollHandler = useCallback(
    (scrollPossition: number) => {
      // Away from the home page there are no sections to spy on, and the
      // current page's item stays highlighted.
      if (currentPath) {
        return
      }
      const sectionItems = items.filter(isSectionItem)
      if (document.body.scrollHeight - (scrollPossition + window.innerHeight) < 100) {
        setActiveItem(sectionItems[sectionItems.length - 1]?.link)
        return
      }
      setActiveItem(
        sectionItems.slice(0, -1).reduce<string | undefined>((acc, item) => {
          const block = document.getElementById(item.link.substring(2))
          if (!block) {
            return
          }
          const { top } = block.getBoundingClientRect()
          return top < 100 ? item.link : acc
        }, undefined),
      )
    },
    [items, currentPath],
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
            href={currentPath ? '/' : '#uvod'}
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
