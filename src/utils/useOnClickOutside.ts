import { useEffect, useRef, type RefObject } from 'react'

/**
 * Calls `handler` when a `mousedown` or `touchstart` lands outside `ref`.
 *
 * Replaces the `use-onclickoutside` package: its default export does not
 * survive Node's CommonJS interop during SSR, and it has no maintained ESM
 * entry point that Vite can bundle in both `astro dev` and `astro build`.
 */
export const useOnClickOutside = (
  ref: RefObject<HTMLElement | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
) => {
  const handlerRef = useRef(handler)

  useEffect(() => {
    handlerRef.current = handler
  })

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const { target } = event
      if (!ref.current || !(target instanceof Node) || ref.current.contains(target)) {
        return
      }
      handlerRef.current(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener, { passive: true })

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref])
}
