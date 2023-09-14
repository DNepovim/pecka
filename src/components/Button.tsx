import React, { ReactNode } from "react";
import { Link, LinkProps } from "./Link";

export interface ButtonProps extends LinkProps {}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <Link
    className={`rounded-md bg-brown-first font-bold flex items-end gap-2 py-2 px-4 text-yellow-first ${className}`}
    {...props}
  >
    {children}
  </Link>
);