import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Section } from "../components/Section";
import { Button } from "../components/Button";

export const Intro: React.FC = () => (
  <Section
    id="uvod"
    className="grid lg:grid-cols-2 min-h-[calc(100vh-10rem)] items-center box-border"
    bg="bg-brand-second"
  >
    <div className="text-center z-10 relative flex flex-col gap-4 items-center">
      <p className="text-xl">Kurz pro pracovníky s mládeží v ČCE</p>
      <h1 className="font-head text-[45vw] md:text-[14em] font-bold text-brand-first leading-none tracking-[.08em]">
        Pecka
      </h1>
      <p className="px-2 pt-1 mb-0 inline-block text-sm">
        další ročník proběhne
        <br />{" "}
        <span className="bg-yellow-second rounded-md text-xl font-semibold">
          26. 7. – 2. 8. 2026
        </span>
        <br />
        a přihlásit se na něj budeš moct od
        <br />{" "}
        <span className="rounded-md text-xl font-semibold">14. 1. 2026</span>
      </p>
      <Button to="https://docs.google.com/forms/d/e/1FAIpQLSdz9QuW5O-HNEEYGhkO2wlzYsKMLff0uFyapTvmBmO-yEq8sg/viewform?usp=sf_link">
        Dejte mi vědět
      </Button>
      <p className="px-2 py-1 inline-block font-italic text-xs max-w-80">
        Sleduj{" "}
        <strong>
          <a
            className="text-brand-first hover:underline"
            href="https://mladez.evangnet.cz/"
            target="_blank"
          >
            web
          </a>
        </strong>{" "}
        nebo{" "}
        <strong>
          <a
            className="text-brand-first hover:underline"
            href="https://www.facebook.com/evangelickamladez"
            target="_blank"
          >
            facebook
          </a>
        </strong>{" "}
        evangelické mládeže, nebo nám dej svůj e-mail a mi ti napíšeme.
      </p>
    </div>
    <StaticImage
      src="../images/30.jpg"
      alt=""
      className="!absolute inset-0 opacity-40"
      transformOptions={{ fit: "cover" }}
      width={2000}
      height={2000}
      sizes="100vw"
      breakpoints={[2000, 1500, 1120, 960, 560, 480, 400]}
    />
    <StaticImage
      src="../images/visen.png"
      alt="svestka"
      className="max-lg:opacity-40 max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:top-1/2 max-lg:-translate-y-1/2 select-none"
      transformOptions={{ fit: "contain" }}
      width={1000}
      height={1000}
      sizes="50vw, (min-width: 40rem) calc((100vw - 2rem) / 2),(min-width: 60rem) calc((1200px - 2rem) / 2)"
      breakpoints={[1120, 960, 560, 480, 400, 350, 300, 250, 200, 150]}
    />
  </Section>
);
