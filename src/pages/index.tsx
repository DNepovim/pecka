import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Section } from "../components/Section";
import { StaticImage } from "gatsby-plugin-image";
import { Navigation } from "../components/Navigation/Navigation";
import { H2 } from "../components/Typography";
import { Intro } from "../sections/01Intro";
import { Pillars } from "../sections/02Pillars";
import { Informations } from "../sections/03Informations";
import { Why } from "../sections/04Why";
import { Team } from "../sections/05Team";
import { What } from "../sections/06What";
import { Contact } from "../sections/07Contact.tsx";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navigation
        items={[
          { title: "Úvod", link: "#uvod" },
          { title: "Pilíře", link: "#pilire" },
          { title: "Praktické informace", link: "#prakticke-informace" },
          { title: "Proč Pecka?", link: "#proc-pecka" },
          { title: "Tým", link: "#tym" },
          { title: "Jaké to bude?", link: "#jake-to-bude" },
          { title: "Kontakt", link: "#kontakt" },
        ]}
      />
      <main className="pt-10">
        <Intro />
        <Pillars />
        <Informations />
        <Why />
        <Team />
        <What />
        <Contact />
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Pecka – kurz pro pracovníky s mládeží v ČCE</title>
);
