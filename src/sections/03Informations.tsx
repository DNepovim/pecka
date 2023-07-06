import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { H4, P } from "../components/Typography";
import { Section } from "../components/Section";

export const Informations: React.FC = () => (
  <Section
    id="prakticke-informace"
    title="Praktické informace"
    titleColor="text-beige-first"
    bg="bg-orange-first"
    className="grid lg:grid-cols-[1fr,2fr] gap-8"
  >
    <StaticImage
      src="../images/calendar.svg"
      alt=""
      objectFit="contain"
      className="max-lg:hidden h-36"
      width={200}
    />
    <div className="text-beige-first">
      <H4>Přihlašování</H4>
      <P>15.&thinsp;9.&thinsp;–&thinsp;15.&thinsp;10.&thinsp;2023</P>
      <H4>Termíny</H4>
      <P>
        16.–19.&thinsp;11.&thinsp;2023
        <br />
        2.–4.&thinsp;2.&thinsp;2024
        <br />
        7.–9.&thinsp;6.&thinsp;2024
      </P>
      <H4>Pro koho</H4>
      <P>
        Pro lidi, kteří aktivně pracují s mládeží v ČCE. Nezáleží, zda jsi
        v SOMu, vedeš sborovou mládež nebo třeba připravuješ tábory pro mládež.
      </P>
      <H4>Cena</H4>
      <P>Rozpočet ještě ladíme. Určitě se vejdeme do 1000,- za celý kurz.</P>
      <H4>Podmínky účasti</H4>
      <ul>
        <li>Věk alepsoň 15 let v době konání kurzu.</li>
        <li>Účast na všech třech víkendech.</li>
        <li>Aktivní práce s mládeží v průběhu kurzu.</li>
      </ul>
    </div>
  </Section>
);
