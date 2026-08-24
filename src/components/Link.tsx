import type { ReactNode } from 'react'

import { linkClassName } from '@/components/linkClasses'
import { isLinkExternal } from '@/utils/isLinkExternal'

export type LinkProps = {
  to?: string
  targetSelf?: boolean
  className?: string
  children?: ReactNode
}

/**
 * React counterpart of `Link.astro`, for use inside islands.
 */
export const Link = ({ to, targetSelf, className, children }: LinkProps) => {
  if (!to) {
    return <span>{children}</span>
  }

  const isExternal = isLinkExternal(to)

  return (
    <a
      className={`${linkClassName} ${className ?? ''}`}
      href={to}
      target={isExternal ? (targetSelf ? '_self' : '_blank') : undefined}
      rel={isExternal && !targetSelf ? 'noreferrer noopener' : undefined}
    >
      {children}
    </a>
  )
}
