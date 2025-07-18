import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Button } from "../components/Button";
import { Section } from "../components/Section";

export const Intro: React.FC = () => (
  <Section
    id="uvod"
    className="grid lg:grid-cols-2 min-h-[calc(100vh-10rem)] items-center box-border"
    bg="bg-brand-second"
  >
    <div className="text-center z-10 relative flex flex-col gap-4 items-center">
      <p className="text-xl">Kurz pro začínající pracovníky s mládeží v ČCE</p>
      <h1 className="font-head text-[45vw] md:text-[14em] font-bold text-brand-first leading-none tracking-[.08em]">
        Pecka
      </h1>
      <p className="px-2 pb-1 font-italic text-xs">
        Ročník 2025 je v běhu...
      </p>
      <p className="px-2 pt-1 mb-2 inline-block bg-yellow-second rounded-md font-semibold">
        Další ročník proběhne nejspíš v srpnu 2026.
      </p>
    </div>
    <div>
      <StaticImage
        src="../images/svestka.svg"
        alt="svestka"
        className="max-lg:opacity-40 max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:top-1/2 max-lg:-translate-y-1/2 select-none"
        width={650}
        height={500}
        sizes="50vw, (min-width: 40rem) calc((100vw - 2rem) / 2),(min-width: 60rem) calc((1200px - 2rem) / 2)"
        breakpoints={[1120, 960, 560, 480, 400, 350, 300, 250, 200, 150]}
      />
    </div>
  </Section>
);
