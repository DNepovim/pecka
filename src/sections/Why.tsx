import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { C, H3, H4, P, Q } from "../components/Typography";
import { Section } from "../components/Section";

export const Why: React.FC = () => (
  <Section
    id="proc-pecka"
    title="Proč Pecka?"
    titleColor="text-white"
    bg="bg-blue-second"
  >
    <div className="max-w-2xl text-beige-first z-10 relative">
      <P>
        Ptáte s proč takový název? No přece proto, že každý z nás je pecka!
        Vysvětlíme.
      </P>
      <P>
        Představte si krásný košatý strom. Broskvoň. Vrhá stín, úkryt v ní
        nalézá mnoho zvířat, na jaře sladce kvete a voní, mění krajinu. A když
        přijde léto, to se teprve dějí věci. Strom začne plodit lahodné ovoce
        plné šťávy, které má schopnost zasytit hlad a potěšit chuťové buňky. Je
        to boží.
      </P>
      <P>
        No a tím se dostáváme k pointě věci… je to metafora! Každý z nás v sobě
        tuhle pecku, ze který může vyrůst strom úžasného ovoce ducha svatého,
        má. Některý roky plodí obzvlášť hojně, jindy některou sezónu vynechá –
        a tak je to v pořádku.
      </P>
      <P>
        <strong>Přesto:</strong>
        <br />
        Aby se výhonek mohl objevit, potřebuje být pecka v úrodné zemině.
        <li>
          Takové bezpečné a podporující prostředí se na Pecce pokusíme vytvořit.
        </li>
        Aby mohl dál růst, potřebuje k tomu dostatek vláhy.
        <li>
          Takovým odhodláním pramenícím ze studny nových poznání se vás pokusíme
          zalít.
        </li>
        Aby dorostl v úrodný strom, potřebuje paprsky světla, které mu ukáží
        cestu za sluncem.
        <li>
          Věříme, že i Hospodin tam bude s námi, aby naše kroky vedl ve svých
          stopách.
        </li>
      </P>
      <P>
        Tož proto Pecka – abychom spolu povyrostli! „Ovoce Božího Ducha však je
        láska, radost, pokoj, trpělivost, laskavost, dobrota, věrnost, tichost
        a sebeovládání.“ (Z listu Galatským 5,22) No dobře. A taky trochu proto,
        že to prostě BUDE PECKA, DĚCKA!
      </P>
    </div>
    <div className="absolute right-4 bottom-0 opacity-40">
      <StaticImage src="../images/tree.svg" alt="" width={600} />
    </div>
  </Section>
);
