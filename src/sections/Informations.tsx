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
      <H4>Termíny</H4>
      <P>
        3.–10.&thinsp;8.&thinsp;2025 – Bílí potok
      </P>
      <H4>Pro koho</H4>
      <P>
        Především pro lidi, kteří jsou na startu aktivní práce s mláděží v ČCE.
        Nezáleží, zda jsi v SOMu, vedeš sborovou mládež nebo třeba připravuješ
        tábory pro mládež.
        <br />
        Cílíme spíš na mladší lidi (do 25 let). Staršími a zkušenějšími lidmi
        budeme doplňovat skupinu, pokud nebude dostatek zájemců. Přihlásit se
        tedy má smysl.
        <br />
        Farářům doporučujeme přihlášení konzultovat s Romanem Mazurem (
        <Link
          className="text-yellow-second underline hover:no-underline"
          to="mailto:mazur@e-cirkev.cz"
        >
          mazur@e-cirkev.cz
        </Link>
        ), který se na přípravě kurzu podílí a dokáže říct, bude-li vám
        přínosem.
        <br />
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
          <li>Aktivní práce s mládeží.</li>
        </ul>
      </P>
      <H4>Přihlašování</H4>
      <P>
        Přihlašování bude probíhat od 22. 3., 8:00 do 15. 5., 23:59  <a href="https://akce.e-cirkev.cz/pecka-2025-kurz-pro-zacinajici-pracovniky-s-mladezi-v-cce" target="_blank">zde</a>.
        <br />
        Kapacita je omezená. V případě většího počtu zájemcu upřednostníme
        mladší a méně zkušené zájemce, na které kurz primárně cílí. Zároveň se
        budeme snažit sestavit co nejpestřejší skupinu. Informace o tvém přijetí
        ti přijde nejpozději <S>31.&thinsp;5.&thinsp;2025</S>.
      </P>
    </div>
  </Section>
);
