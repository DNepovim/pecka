import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Section } from "../components/Section";
import { StaticImage } from "gatsby-plugin-image";
import { Navigation } from "../components/Navigation/Navigation";
import { H2 } from "../components/Typography";
import { Intro } from "../sections/Intro";
import { Pillars } from "../sections/Pillars";
import { Informations } from "../sections/Informations";
import { Why } from "../sections/Why";
import { Team } from "../sections/Team";
import { What } from "../sections/What";
import { Contact } from "../sections/Contact.tsx";
import { Credit } from "../sections/Credit";

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
        <Credit />
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
