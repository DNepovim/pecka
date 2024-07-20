import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Link } from "../components/Link";
import { Section } from "../components/Section";

export const Contact: React.FC = () => (
  <Section
    id="kontakt"
    title="Kontakt"
    titleColor="text-blue-first"
    bg="bg-blue-second"
    className="min-h-[300px]"
  >
    <p className="text-white text-center md:text-xl z-10 relative">
      Zajímá vás o kurzu Pecka něco, co jste nenašli na webu?
      <br />
      Napište nám na e-mail{" "}
      <a className="text-blue-first" href="mailto:budeto@kurzpecka.cz">
        budeto@kurzpecka.cz
      </a>{" "}
      (odpoví ti Damka).
    </p>
    <div className="opacity-50 absolute bottom-0 right-0">
      <StaticImage src="../images/pecky.png" alt="" width={600} height={300} />
    </div>
    <p className="absolute bottom-2 right-2 text-beige-first text-xs text-opacity-60">
      Web vypěstoval <Link to="mailto:dominik@semcr.cz">Dominik</Link>
    </p>
  </Section>
);
