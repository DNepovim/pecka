import { Section } from "../components/Section";
import React from "react";

type Props = {};

export const Claim = ({}: Props) => {
  return (
    <Section bg="bg-brand-first" className="text-white text-center text-lg tracking-wider">
      🌱 Pracuješ s mládeží v církvi? Tak tohle je akce pro tebe! 🌱 <br />
       Pecka je kurz, který tě vybaví zkušenostmi, zážitky a partou skvělých lidí.
    </Section>
  );
};
