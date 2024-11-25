import React, { ReactNode } from "react";
import { Link, LinkProps } from "./Link";

export interface ButtonProps extends LinkProps {}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <Link
    className={`rounded-md bg-brown-first font-bold flex items-end gap-2 py-2 px-8 text-white ${className}`}
    {...props}
  >
    {children}
  </Link>
);
