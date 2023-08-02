import React, { ReactNode } from "react";
import { H2 } from "./Typography";

export const Section: React.FC<{
  id?: string;
  children: ReactNode;
  className?: string;
  title?: string;
  titleColor?: string;
  bg?: string;
}> = ({ id, className, title, titleColor, bg, children }) => (
  <section id={id} className={`relative py-8 ${bg}`}>
    {title && <H2 color={titleColor}>{title}</H2>}
    <div className={`container ${className}`}>{children}</div>
  </section>
);
