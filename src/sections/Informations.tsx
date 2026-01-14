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
      <P>
        26. 7. – 2. 8. 2026 – chata{" "}
        <Link
          className="underline hover:no-underline"
          to="https://drevomorka.skauting.cz"
        >
          Dřevomorka
        </Link>{" "}
        v&nbsp;Lužických horách.
      </P>
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
        <br />(<Link to="https://www.semcr.cz">SEM</Link> za své členy celou
        částku hradí)
      </P>
      <H4>Podmínky účasti</H4>
      <P>
        <ul>
          <li>Věk alepsoň 15 let v době konání kurzu.</li>
          <li>Účast na celé délce kurzu.</li>
        </ul>
        Pokud některou podmínku nemůžeš splnit, ale o účast stojíš, napiš nám na{" "}
        <Link to="mailto:budeto@kurzpecka.cz">budeto@kurzpecka.cz</Link> a
        uvidíme, co se s tím dá dělat.
      </P>
      <H4>Přihlašování</H4>
      <P>
        Přihlásit se můžeš do 20. 4. 2026{" "}
        <Link to="https://akce.e-cirkev.cz/register/204">zde</Link>.{" "}
      </P>
    </div>
  </Section>
);
