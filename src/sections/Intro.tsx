import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Button } from "../components/Button";
import { Link } from "../components/Link";
import { Section } from "../components/Section";

export const Intro: React.FC = () => (
  <Section
    id="uvod"
    className="grid lg:grid-cols-2 min-h-[calc(100vh-10rem)] items-center box-border"
    bg="bg-yellow-first"
  >
    <div className="text-center z-10 relative flex flex-col gap-4 items-center">
      <p className="text-xl">Kurz pro začínající pracovníky s mládeží v ČCE</p>
      <h1 className="font-head text-[45vw] md:text-[14em] font-bold text-orange-first leading-none tracking-[.08em]">
        Pecka
      </h1>
      <p className="px-2 py-1 inline-block bg-yellow-second rounded-md font-semibold">
        Přihlašujte se do 15.&thinsp;10.&thinsp;2023
      </p>
      <Button
        to="https://akce.e-cirkev.cz/pecka-kurz-pro-pracovniky-s-mladezi-v-cce"
        className="group"
      >
        Chci se přihlásit
        <StaticImage
          alt=""
          src="../images/hand.svg"
          className="group-hover:animate-swing origin-bottom"
        />
      </Button>
      <p className="text-xs">
        Nejse si jistí, jeli kurz pro vás?
        <br />
        Koukněte do aktulaizovaných{" "}
        <Link
          className="text-orange-first underline hover:no-underline"
          to="/#prakticke-informace"
        >
          praktických informací
        </Link>
        .
      </p>
    </div>
    <div>
      <StaticImage
        src="../images/broskev.svg"
        alt="Broskev"
        className="max-lg:opacity-40 max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:top-1/2 max-lg:-translate-y-1/2"
        width={650}
        height={500}
        sizes="50vw, (min-width: 40rem) calc((100vw - 2rem) / 2),(min-width: 60rem) calc((1200px - 2rem) / 2)"
        breakpoints={[1120, 960, 560, 480, 400, 350, 300, 250, 200, 150]}
      />
    </div>
  </Section>
);
