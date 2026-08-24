import { Link, type LinkProps } from '@/components/Link'
import { buttonClassName } from '@/components/linkClasses'

/**
 * React counterpart of `Button.astro`, for use inside islands.
 */
export const Button = ({ children, className, ...props }: LinkProps) => (
  <Link className={`${buttonClassName} ${className ?? ''}`} {...props}>
    {children}
  </Link>
)
