import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Section } from "../components/Section";
import { P } from "../components/Typography";

export const What: React.FC = () => (
  <Section
    id="jake-to-bude"
    title="Jaká Pecka bude?"
    titleColor="text-orange-first"
    bg="bg-yellow-first"
    className="min-h-[30rem] relative"
  >
    <div className="relative z-10">
      <P>
        Přejeme si, abyste na Pecce zažívali prima podporující společenství,
        které bude živé i mimo samotné víkendy. Společenství, ve kterém bude mít
        každý svoje místo a vzájemně si budeme oporou při hledání svého místa
        v církvi. Aby byl na peckových víkendovkách čas na rozvoj dovedností, na
        duchovno i na poznávání sebe sama.
        <br />
        Představujeme si, jak jsme spolu na krásném místě, za zpěvu písní se
        z kuchyně line vůně dobrého jídla a u oběda si potom povídáme a společně
        se smějeme. A jak se během víkendu učíme nové dovednosti a v každém
        z nás se rodí nápady, jak tyto dovednosti zapojovat do své práce
        v církvi. Moc se těšíme na společné modlitby a bohoslužby.
        <br />
        Naším velkým přáním je, aby z peckových víkendovek odjížděl každý
        s načerpáním nové energie a silným zážitkem.
      </P>
    </div>
    <div className="opacity-40 absolute -bottom-4 left-0 right-0">
      <StaticImage src="../images/forest.webp" alt="" />
    </div>
  </Section>
);
