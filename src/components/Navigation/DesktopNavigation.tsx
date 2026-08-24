import useScrollPosition from '@react-hook/window-scroll'
import { useEffect, useRef, useState } from 'react'

import type { NavigationItem } from '@/components/Navigation/Navigation'

type UnderlineProps = {
  left: number
  width: number
}

const getUnderlineCor = (
  container: HTMLElement | null,
  item: Element | null,
): UnderlineProps | undefined => {
  const navListRect = container?.getBoundingClientRect()
  const activeItemRect = item?.getBoundingClientRect()

  if (!navListRect || !activeItemRect) {
    return
  }

  return {
    left: activeItemRect.left - navListRect.left,
    width: activeItemRect.width,
  }
}

export const DesktopNavigation = ({
  items,
  activeItem,
}: {
  items: NavigationItem[]
  activeItem?: string
}) => {
  const [activeItemCor, setActiveItemCor] = useState<UnderlineProps | undefined>()
  const scrollPosition = useScrollPosition()
  const navListRef = useRef<HTMLUListElement | null>(null)

  const fallbackedActiveItem = activeItem ?? items[0]?.link

  useEffect(() => {
    if (!navListRef.current || !fallbackedActiveItem) {
      return
    }
    const activeNavItem = navListRef.current.querySelector(
      `a[href$='${fallbackedActiveItem}']`,
    )
    setActiveItemCor(getUnderlineCor(navListRef.current, activeNavItem))
    // Intentionally keyed on scroll only, matching the pre-Astro behaviour:
    // the underline follows scrolling, it does not chase `activeItem` on its own.
  }, [scrollPosition])

  return (
    <ul className="align-center relative -mx-2 flex" ref={navListRef}>
      {items.map((item) => (
        <li key={item.link}>
          <a
            className={`text-md block px-2 transition-colors hover:text-brand-first ${
              activeItem === item.link ? 'text-brand-first' : ''
            }`}
            href={item.link}
          >
            {item.title}
          </a>
        </li>
      ))}
      {activeItemCor && (
        <div
          className="absolute -bottom-2 h-[4px] rounded-xs bg-brand-first transition-[width_500ms,left_500ms]"
          style={activeItemCor}
        />
      )}
    </ul>
  )
}
