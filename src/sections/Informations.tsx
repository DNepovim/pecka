import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { H4, P, S } from "../components/Typography";
import { Section } from "../components/Section";
import { Link } from "../components/Link";

export const Informations: React.FC = () => (
  <Section
    id="prakticke-informace"
    title="Praktické informace"
    titleColor="text-beige-first"
    bg="bg-brand-first"
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
      <H4>Termín a místo</H4>
      <P>3.–10.&thinsp;8.&thinsp;2025 – Bílý potok</P>
      <H4>Pro koho</H4>
      <P>
        Především pro lidi, kteří jsou na startu aktivní práce s mládeží v ČCE.
        Tedy pro SOMáky, vedoucí sborových mládeží či letních táborů, nebo pro
        ty, kteří po podobné službě pokukují a potřebují si dodat odvahy.
        <br />
        Cílíme spíš na mladší lidi (do 25 let). Staršími a zkušenějšími lidmi
        budeme doplňovat skupinu, pokud nebude dostatek zájemců. Přihlásit se
        tedy má smysl.
      </P>
      <H4>Cena</H4>
      <P>
        <S>1000,-</S>
      </P>
      <H4>Podmínky účasti</H4>
      <P>
        <ul>
          <li>Věk alepsoň 15 let v době konání kurzu.</li>
          <li>Účast na celé délce kurzu.</li>
        </ul>
      </P>
      <H4>Přihlašování</H4>
      <P>
        Přihlašování bude probíhat{" "}
        <S>od 22.&thinsp;3. 8:00 do 15.&thinsp;5. 23:59</S>{" "}
        <a
          href="https://akce.e-cirkev.cz/register/154"
          target="_blank"
        >
          zde
        </a>
        .
        <br />
        Kapacita je omezená. V případě většího počtu zájemcu upřednostníme
        mladší a méně zkušené zájemce, na které kurz primárně cílí. Zároveň se
        budeme snažit sestavit co nejpestřejší skupinu. Informace o tvém přijetí
        ti přijde nejpozději <S>31.&thinsp;5.&thinsp;2025</S>.
      </P>
    </div>
  </Section>
);
