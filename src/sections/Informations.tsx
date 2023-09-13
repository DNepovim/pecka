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
      <H4>Termíny</H4>
      <P>
        16.–19.&thinsp;11.&thinsp;2023 – Poděbrady
        <br />
        2.–4.&thinsp;2.&thinsp;2024
        <br />
        7.–9.&thinsp;6.&thinsp;2024
      </P>
      <H4>Pro koho</H4>
      <P>
        Především pro lidi, kteří jsou na startu aktivní práce s mláděží v ČCE.
        Nezáleží, zda jsi v SOMu, vedeš sborovou mládež nebo třeba připravuješ
        tábory pro mládež.
        <br />
        Cílíme spíš na mladší lidí (do 25 let). Staršími a zkušenějšími lidmi
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
      </P>
      <H4>Cena</H4>
      <P>
        <S>1000,-</S> za všechny tři víkendy.
      </P>
      <H4>Podmínky účasti</H4>
      <P>
        <ul>
          <li>Věk alepsoň 15 let v době konání kurzu.</li>
          <li>Účast na všech třech víkendech.</li>
          <li>Aktivní práce s mládeží v průběhu kurzu.</li>
        </ul>
      </P>
      <H4>Přihlašování</H4>
      <P>
        Přihlašovat se můžete do <S>15.&nbsp;10.&nbsp;2023</S>{" "}
        <Link
          className="underline hover:no-underline text-yellow-second"
          to="https://akce.e-cirkev.cz/pecka-kurz-pro-pracovniky-s-mladezi-v-cce"
        >
          zde
        </Link>
        .<br />
        Kapacita je omezená a však na pořadí nezáleží. V případě většího počtu
        zájemcu upřednostníme mladší a méně zkušené zájemce, na které kurz
        primárně cílí. Zároveň se budeme snažit sestavit co nejpestřejší
        skupinu. Informace o tvém přijetí ti přijde nejpozději{" "}
        <S>20.&thinsp;10.&thinsp;2023</S>.
      </P>
    </div>
  </Section>
);
