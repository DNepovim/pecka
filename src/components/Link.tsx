import React, { ReactNode } from "react"
import { isLinkExternal } from "../utils/isLinkExternal"
import { Link as GatsbyLink } from "gatsby"

export interface LinkProps {
  to?: string
  targetSelf?: boolean
  className?: string
  children?: ReactNode
}

const defaultClassName = "hover-underline-base"

export const Link: React.FC<LinkProps> = ({
  to,
  targetSelf,
  className,
  children,
}) =>
  to ? (
    isLinkExternal(to) ? (
      <a
        className={`${defaultClassName} ${className}`}
        href={to}
        target={targetSelf ? "_self" : "_blank"}
        rel={targetSelf ? "" : "noreferrer noopener"}
      >
        {children}
      </a>
    ) : (
      <GatsbyLink className={`${defaultClassName} ${className}`} to={to}>
        {children}
      </GatsbyLink>
    )
  ) : (
    <span>{children}</span>
  )
