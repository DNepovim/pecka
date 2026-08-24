import type { ReactNode } from 'react'

import {
  citeClassName,
  h3ClassName,
  quoteClassName,
} from '@/components/typographyClasses'

/**
 * React mirrors of the `.astro` typography components, for use inside islands
 * where rich markup has to be authored in TSX (see `PillarsCarousel.tsx`).
 */

export const H3 = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => <h3 className={`${h3ClassName} ${className ?? ''}`}>{children}</h3>

export const Q = ({ children }: { children: ReactNode }) => (
  <blockquote className={quoteClassName}>{children}</blockquote>
)

export const C = ({ children }: { children: ReactNode }) => (
  <cite className={citeClassName}>{children}</cite>
)
