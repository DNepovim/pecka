import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Section } from "../components/Section";
import { H3, P } from "../components/Typography";
import { Carousel } from "../components/Carousel/Carousel";
import { Article } from "./Article";

const articles = [
  {
    title: "Jaká byla PECKA? 1. víkend kurzu pro pracovníky s mládeží",
    author: "Viki Fenclová",
    text: "Během prodlouženého víkendu 16. – 19. listopadu přijelo do Poděbrad z různých koutů republiky 11 mladých lidí. Po celou dobu jsme byli vystavováni novým způsobům jak pracovat v týmu, sami se sebou i s mládeží v církvi. Ty si pro nás připravil tým převážně mladých nadšenců...",
    link: "https://mladez.evangnet.cz/blog/jaka-byla-pecka-1-vikend-kurzu-pro-pracovniky-s-mladezi/",
  },
  {
    title: "Jaký byl druhý víkend Pecky?",
    author: "Vašek Jelínek",
    text: "Byl první únorový víkend a nadšenci do práce s mládeží jeli na druhý víkend kurzu Pecka do Prahy-Zbraslavi. Vlaky či busy tam jely tak dlouho, až se člověku zdálo, že už snad není v Praze. Po takové dlouhé cestě nás ve dveřích domu místního skautského oddílu uvítala radostná organizační skupinka Pecky…",
    link: "https://mladez.evangnet.cz/blog/jaky-byl-druhy-vikend-pecky/",
  },
  {
    title: "Třetí peckový víkend",
    author: "Anežka Sabelová",
    text: "Stejně jako školní rok se i Pecka chýlí ke konci (tohoto ročníku) a 7. června k večeru jsme se sešli na vlakovém nádraží v Kuřimi. Společně jsme se došinuli do parku, kde nás čekala první hra, při níž jsme se nejen smáli, ale i překonávali různé výzvy na pomyslném trhu práce včetně živé pyramidy, ponoření do potoka, skládání ódy na pecku nebo povídání si s nebohými tatínky na zdejším hřišti…",
    link: "https://mladez.evangnet.cz/blog/treti-peckovy-vikend/",
  },
];

export const What: React.FC = () => (
  <Section
    id="jake-to-bylo"
    title="Jaká Pecka byla?"
    titleColor="text-brand-first"
    bg="bg-brand-second"
    className="min-h-[30rem] relative"
    full
  >
    <div className="relative z-10">
      <p className="text-center font-bold mb-8 italic max-w-3xl mx-auto">
        První broskvový ročník kurzu Pecka proběhl formou tří víkendových
        setkání během školního roku 2023/24. Sešli jsme se spolu v Poděbradech,
        Zbraslavi a Kuřimi. Vždy jsme z Pecky odjížděli obohacení o nové pohledy
        na téma víry a jejího osobního prožívání, o praktické tipy a metody,
        které lze při práci s mládeží využít, a také s novými úhly pohledu na
        sebe samé a vztahy s druhými lidmi. Z každé víkendovky rovněž vznikla
        zpráva, která podrobněji popisuje, čím byl náš čas naplněn. Odkazy na ně
        najdete níže. Jejich autory*kami jsou účastníci kurzu. Někteří z nich
        nám sem na web přispěli také recenzí na celý kurz. Budeme rádi, pokud si
        jejich dojmy přečtete a na další ročník vyrazíte s námi.
      </p>
      <Carousel
        isCenterd
        items={[
          {
            name: "Viki",
            fullName: "Viki Fenclová",
            text: "„Kurz Pecka mě naučil nejen jak lépe pracovat s mládeží, ale také jak pracovat sama se sebou, jak pracovat v týmu a vést ho a v neposlední řadě i jak nenásilně komunikovat se svým okolím. Určitě bych ho doporučila všem, kteří pracují s mládeží, ať už mají zkušenosti jakékoliv.“",
          },
          {
            name: "Vašek J.",
            fullName: "Václav Jelínek",
            text: "„Kurz Pecka doporučuji každému, kdo se jakýmkoliv způsobem věnuje mládeži! Ne proto, že by práce s mládeží byla nějaká věda, ale naučíte se zde mnoho věcí, kterými vyparádíte vaši práci s mládeží. Nejvíc si z Pecky odnáším Nenásilnou komunikaci, trvalo mi pár neděl, než se mi podařilo ji nějak aplikovat a mezitím se mi to kolikrát nepovedlo, ale její využívání za tu námahu stálo! :) Během kurzu jsem měl fůru času na rozhovory s účastníky i organizátory, kteří nám věnovali tolik úsilí, že jsme s rozhovory končili často až někdy ve 3 ráno. :D I díky tomu jsem pochopil, jaká je po práci s mládeží velká poptávka. Nenásilka, atraktivní programy, způsoby práce s Biblí, co mít vždy v kapse..., nejen toto mi dala Pecka. Chop se tak příštího kurzu Pecka a dopřej své mládeži, co si zaslouží! “",
          },
          {
            name: "Vašek P.",
            fullName: "Václav Podrazil",
            text: "„Z Pecky si odnáším hlavně nové přátele. Jestli mi něco dala, byli to hlavně lidi a jejich nové pohledy na věc. Právě častý prostor pro debatu pro mne byl z nemála tím, z čeho jsem si toho odnesl nejvíce.“",
          },
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4 gap-4 mb-16 max-w-screen-2xl mx-auto">
        <StaticImage
          src="../images/07.jpg"
          alt=""
          width={728}
          height={444}
          className="md:col-span-2"
        />
        <StaticImage src="../images/04.jpg" alt="" width={364} height={222} />
        <StaticImage src="../images/05.jpg" alt="" width={364} height={222} />
        <StaticImage src="../images/03.jpg" alt="" width={364} height={222} />
        <StaticImage src="../images/02.jpg" alt="" width={364} height={222} />
        <StaticImage
          src="../images/01.jpg"
          alt=""
          width={728}
          height={444}
          objectPosition="top"
          className="md:col-span-2 md:row-span-2"
        />
        <StaticImage src="../images/08.jpg" alt="" width={364} height={222} />
        <StaticImage src="../images/06.jpg" alt="" width={364} height={222} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-8 max-w-screen-2xl mx-auto">
        {articles.map((article) => (
          <Article {...article} />
        ))}
      </div>
    </div>
    <div className="opacity-20 absolute -bottom-4 left-0 right-0 z-0">
      <StaticImage src="../images/forest.webp" alt="" />
    </div>
  </Section>
);
