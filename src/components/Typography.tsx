import React from "react";

export const H2: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color,
}) => (
  <h2
    className={`text-[3.6em] font-head text-center mb-4 font-bold relative z-20 ${color}`}
  >
    {children}
  </h2>
);

export const H3: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color,
}) => (
  <h3 className={`text-[2.4em] font-head font-bold ${color}`}>{children}</h3>
);

export const H4: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h4 className="font-bold">{children}</h4>
);

export const P: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <p className={`mb-4 ${className ?? ""}`}>{children}</p>
);

export const Q: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <blockquote className="italic mb-4 pl-4">{children}</blockquote>
);

export const C: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <cite className="text-right block">{children}</cite>
);

export const S: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <strong className="font-bold">{children}</strong>
);
