import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Section } from "../components/Section";
import { P, Q } from "../components/Typography";

export const Team: React.FC = () => (
  <Section
    id="tym"
    title="Kdo za tím stojí?"
    titleColor="text-orange-first"
    bg="bg-beige-first"
    className="grid md:grid-cols-2 gap-8"
  >
    <div className="z-10">
      <P>
        Jsme tým lidí, kterým záleží na práci s mládeží v církvi a chceme
        podporovat ty, kteří se mládeži v církvi věnují. Máme zkušenosti s prací
        s mládeží ze sborového, seniorátního i celocírkevního prostředí, které
        každý z nás propojuje s tím, co načerpal během svého studia, práce nebo
        jiných dobrovolnických aktivit.
        <br />
        Tyto zkušenosti chceme předávat dál a společně objevovat další cesty,
        jak práci s mládeží rozvíjet.
      </P>
      <Q>
        Dominik Bláha, Zuzana Férová, Roman Mazur, Damaris Kopecká, Adéla
        Bednaříková, Petra Náhlovská a Ondřej Sabela.
      </Q>
    </div>
    <div className="overflow-hidden">
      <StaticImage
        src="../images/tym.jpeg"
        alt="Tým"
        height={500}
      />
    </div>
  </Section>
);
