import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Section } from "../components/Section";
import { H3, P } from "../components/Typography";

export const What: React.FC = () => (
  <Section
    id="jake-to-bylo"
    title="Jaká Pecka byla?"
    titleColor="text-brand-first"
    bg="bg-brand-second"
    className="min-h-[30rem] relative"
  >
    <div className="relative z-10">
      <div className="flex justify-center gap-8 mb-16 items-center">
        <p className="max-w-96 text-center italic">
          „Kurz Pecka mě naučil nejen jak lépe pracovat s mládeží, ale také jak
          pracovat sama se sebou, jak pracovat v týmu a vést ho a v neposlední
          řadě i jak nenásilně komunikovat se svým okolím. Určitě bych ho
          doporučila všem, kteří pracují s mládeží, ať už mají zkušenosti
          jakékoliv.“
          <strong className="block mt-8">Viki</strong>
        </p>
        <p className="max-w-96 text-center italic">
          „Z Pecky si odnáším hlavně nové přátele. Jestli mi něco dala, byli to
          hlavně lidi a jejich nové pohledy na věc. Právě častý prostor pro
          debatu pro mne byl z nemála tím, z čeho jsem si toho odnesl nejvíce.“
          <strong className="block mt-8">Vašek</strong>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
        <StaticImage src="../images/01.jpg" alt="" width={364} height={222} />
        <StaticImage src="../images/02.jpg" alt="" width={364} height={222} />
        <StaticImage src="../images/03.jpg" alt="" width={364} height={222} />
        <StaticImage src="../images/04.jpg" alt="" width={364} height={222} />
        <StaticImage src="../images/05.jpg" alt="" width={364} height={222} />
        <StaticImage src="../images/06.jpg" alt="" width={364} height={222} />
        <StaticImage src="../images/07.jpg" alt="" width={364} height={222} />
        <StaticImage src="../images/08.jpg" alt="" width={364} height={222} />
        <StaticImage src="../images/09.jpg" alt="" width={364} height={222} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article>
          <H3 color="text-brand-first">
            <a
              href="https://mladez.evangnet.cz/blog/jaka-byla-pecka-1-vikend-kurzu-pro-pracovniky-s-mladezi/"
              target="_blank"
            >
              Jaká byla PECKA? 1. víkend kurzu pro pracovníky s mládeží
            </a>
          </H3>
          <p className="italic">Viki Fenclová</p>
          <p>
            Během prodlouženého víkendu 16. – 19. listopadu přijelo do Poděbrad
            z různých koutů republiky 11 mladých lidí. Po celou dobu jsme byli
            vystavováni novým způsobům jak pracovat v týmu, sami se sebou
            i s mládeží v církvi. Ty si pro nás připravil tým převážně mladých
            nadšenců...
          </p>
          <div className="text-right">
            <a
              href="https://mladez.evangnet.cz/blog/jaka-byla-pecka-1-vikend-kurzu-pro-pracovniky-s-mladezi/"
              target="_blank"
              className="text-brand-first hover:underline font-bold"
            >
              Celý článek{" >"}
            </a>
          </div>
        </article>
        <article>
          <H3 color="text-brand-first">
            <a
              href="https://mladez.evangnet.cz/blog/jaky-byl-druhy-vikend-pecky/"
              target="_blank"
            >
              Jaký byl druhý víkend Pecky?
            </a>
          </H3>
          <p className="italic">Vašek Jelínek</p>
          <p>
            Byl první únorový víkend a nadšenci do práce s mládeží jeli na druhý
            víkend kurzu Pecka do Prahy-Zbraslavi. Vlaky či busy tam jely tak
            dlouho, až se člověku zdálo, že už snad není v Praze. Po takové
            dlouhé cestě nás ve dveřích domu místního skautského oddílu uvítala
            radostná organizační skupinka Pecky…
          </p>
          <div className="text-right">
            <a
              href="https://mladez.evangnet.cz/blog/jaky-byl-druhy-vikend-pecky/"
              target="_blank"
              className="text-brand-first hover:underline font-bold"
            >
              Celý článek{" >"}
            </a>
          </div>
        </article>
        <article>
          <H3 color="text-brand-first">
            <a
              href="https://mladez.evangnet.cz/blog/treti-peckovy-vikend/"
              target="_blank"
            >
              Třetí peckový víkend
            </a>
          </H3>
          <p className="italic">Anežka Sabelová</p>
          <p>
            Stejně jako školní rok se i Pecka chýlí ke konci (tohoto ročníku) a
            7. června k večeru jsme se sešli na vlakovém nádraží v Kuřimi.
            Společně jsme se došinuli do parku, kde nás čekala první hra, při
            níž jsme se nejen smáli, ale i překonávali různé výzvy na pomyslném
            trhu práce včetně živé pyramidy, ponoření do potoka, skládání ódy na
            pecku nebo povídání si s nebohými tatínky na zdejším hřišti…
          </p>
          <div className="text-right">
            <a
              href="https://mladez.evangnet.cz/blog/treti-peckovy-vikend/"
              target="_blank"
              className="text-brand-first hover:underline font-bold"
            >
              Celý článek{" >"}
            </a>
          </div>
        </article>
      </div>
    </div>
    <div className="opacity-20 absolute -bottom-4 left-0 right-0 z-0">
      <StaticImage src="../images/forest.webp" alt="" />
    </div>
  </Section>
);
