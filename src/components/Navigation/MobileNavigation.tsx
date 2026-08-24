import hamburgerReact from 'hamburger-react'
import { useRef, useState } from 'react'

import type { NavigationItem } from '@/components/Navigation/Navigation'
import { useOnClickOutside } from '@/utils/useOnClickOutside'

/*
 * `hamburger-react` only publishes a CommonJS entry point. Node's ESM interop
 * ignores its `__esModule` marker and hands back the whole module namespace, so
 * during SSR the default import is an object rather than the component. When
 * the module is bundled instead, the same import is already the component —
 * hence the unwrap that tolerates both.
 */
const Hamburger =
  (hamburgerReact as unknown as { default?: typeof hamburgerReact }).default ??
  hamburgerReact

export const MobileNavigation = ({ items }: { items: NavigationItem[] }) => {
  const [isOpened, setIsOpened] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, () => {
    setIsOpened(false)
  })

  return (
    <div className="flex items-center gap-8" ref={ref}>
      <ul
        className="absolute top-full right-0 m-0 bg-white py-0 pt-0 pb-2"
        style={{ transform: `translateX(${isOpened ? 0 : 100}%)` }}
        onClick={() => {
          setIsOpened(false)
        }}
      >
        {items.map((item) => (
          <li key={item.link}>
            <a className="block px-4 py-2 text-xl" href={item.link}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <Hamburger
        color="black"
        toggled={isOpened}
        onToggle={() => {
          setIsOpened(!isOpened)
        }}
      />
    </div>
  )
}
