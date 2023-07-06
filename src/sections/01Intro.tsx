import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Section } from "../components/Section";

export const Intro: React.FC = () => (
  <Section
    id="uvod"
    className="grid lg:grid-cols-2 min-h-[calc(100vh-8rem)] items-center box-border"
    bg="bg-yellow-first"
  >
    <div className="text-center z-10 relative">
      <p className="text-xl">Kurz pro pracovníky s mládeží v ČCE</p>
      <h1 className="font-head text-[45vw] md:text-[14em] font-bold text-orange-first leading-none tracking-[.08em]">
        Pecka
      </h1>
      <p className="bg-yellow-second px-2 py-1 inline-block rounded-md font-semibold">
        Přihlašování vypukne 15.&thinsp;9.&thinsp;2023
      </p>
    </div>
    <div>
      <StaticImage
        src="../images/broskev.svg"
        alt="Broskev"
        className="max-lg:opacity-40 max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:top-1/2 max-lg:-translate-y-1/2"
        width={650}
        height={500}
      />
    </div>
  </Section>
);
