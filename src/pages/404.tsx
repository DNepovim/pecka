import { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { navItems } from ".";
import { Link } from "../components/Link";
import { Navigation } from "../components/Navigation/Navigation";
import { Section } from "../components/Section";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navigation items={navItems} />
      <main className="pt-10 bg-yellow-first min-h-screen">
        <Section
          id="uvod"
          className="grid lg:grid-cols-2 m-0 items-center box-border min-h-[90vh]"
        >
          <div className="text-center z-10 relative">
            <p className="text-xl">Stránka nenalezena</p>
            <h1 className="font-head text-6xl font-bold text-orange-first leading-none tracking-[.08em]">
              Tady nic není
            </h1>
            <p className="px-2 py-1 inline-block">
              Zkus jít na{" "}
              <Link className="underline text-orange-first" to="/">
                úvodní stránku
              </Link>
              .
            </p>
          </div>
          <div>
            <StaticImage
              src="../images/broskev.svg"
              alt="Broskev"
              className="max-lg:opacity-40 max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:top-1/2 max-lg:-translate-y-1/2"
              width={650}
              height={500}
              sizes="50vw, (min-width: 40rem) calc((100vw - 2rem) / 2),(min-width: 60rem) calc((1200px - 2rem) / 2)"
              breakpoints={[1120, 960, 560, 480, 400, 350, 300, 250, 200, 150]}
            />
          </div>
        </Section>
      </main>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => (
  <title>Pecka – kurz pro pracovníky s mládeží v ČCE</title>
);
