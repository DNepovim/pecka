import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Link } from "../components/Link";
import { Section } from "../components/Section";

export const Credit: React.FC = () => (
  <Section bg="bg-blue-thirdt">
    <div className="flex md:items-center max-md:flex-col max-md:items-start gap-4">
      <StaticImage src="../images/logo_cce.png" alt="Logo ČCE" height={80} />
      <p className="text-left text-white">
        Kurz je pořádán ve spolupráci s 
        <Link
          className="text-clay-first"
          to="https://mladez.evangnet.cz/oddeleni-mladeze/"
        >
          Oddělením mládeže
        </Link>{" "}
        a 
        <Link className="text-clay-first" to="https://mladez.evangnet.cz/com/">
          Celocírkevním odborem mládeže
        </Link>{" "}
        <Link className="text-clay-first" to="https://e-cirkev.cz/">
          Českobratrské církve evangelické
        </Link>{" "}
        a je součástí oficiálního církevního vzdělávání.
      </p>
    </div>
  </Section>
);
