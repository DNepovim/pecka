import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Section } from "../components/Section";
import { StaticImage } from "gatsby-plugin-image";
import { Navigation } from "../components/Navigation/Navigation";
import { H2 } from "../components/Typography";
import { Intro } from "../sections/Intro";
import { Pillars } from "../sections/Pillars";
import { Informations } from "../sections/Informations";
import { Why } from "../sections/Why";
import { Team } from "../sections/Team";
import { What } from "../sections/What";
import { Contact } from "../sections/Contact";
import { Credit } from "../sections/Credit";
export const navItems = [
  { title: "Úvod", link: "/#uvod" },
  { title: "Pilíře", link: "/#pilire" },
  { title: "Proč Pecka?", link: "/#proc-pecka" },
  { title: "Jaké to bylo?", link: "/#jake-to-bylo" },
  { title: "Tým", link: "/#tym" },
  { title: "Kontakt", link: "/#kontakt" },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navigation items={navItems} />
      <main className="pt-10 bg-brand-second">
        <Intro />
        <Credit />
        <Pillars />
        <Why />
        <What />
        <Team
          members={[
            {
              image: (
                <StaticImage
                  src="../images/dominik.jpg"
                  alt=""
                  width={200}
                  height={200}
                  className="rounded-full float-left mr-4 mb-4 shape-outside"
                />
              ),
              text: "Práci s dětmi a mládeží se věnuji od nepaměti v církvi i mimo ní. Šest let jsem byl v somu, osm v comu, který jsem většinu času vedl. Vedl jsem také skautský oddíl a organizoval několik skautských kurzů. V církvi mi chyběl kurz, který by nakopl lidi, kteří v ní s mládeží pracují. Tak jsem s týmem silných osobností, které vzešli z evangelické mládeže založil Pecku. Kurz, který nejen vzdělává, ale snaží se působit i na osobnost a ducha a to vše za pomoci lidského společenství kurzu.",
              name: "Dominik",
            },
            {
              image: (
                <StaticImage
                  src="../images/ondra.jpg"
                  alt=""
                  width={200}
                  height={200}
                  className="rounded-full float-left mr-4 mb-4 shape-outside"
                />
              ),
              text: "Jsem pastorační pracovník pro mládež (<- volitelné). Vzdělávání pro mládežníky mi leželo na srdci a vyhledával jsem ho odjakmládežnickyživa. V církvi a na Pecce mě baví spojovat a praskat sociální a myšlenkové bubliny, kombinovat prostředky, styly a formy. (bonus:) Vizuální a duchovní, technické a hudební, kolektivní a osobní, hudební a duchovní, technické a duchovní, kolektivní a vizuální… a tak.",
              name: "Ondra",
            },
            {
              image: (
                <StaticImage
                  src="../images/adela.jpg"
                  alt=""
                  width={200}
                  height={200}
                  className="rounded-full float-left mr-4 mb-4 shape-outside"
                />
              ),
              text: "Při přípravě Pecky často přemýšlím o tom, jak moc ráda bych Pecku zažila, když mi bylo 16 a začínala jsem být v SOMu. Na Pecce mám ráda hlavně prima lidi, připravování programů a spirituální chvilky. Kromě toho mám moc ráda i povídání, pití čajíčků a kávičky, procházky, kytičky a hledání krásy ve zdánlivě obyčejných věcech. Prošla jsem si SOMem, spoluorganizováním sborové mládeže a prací na Omku. Ve svém studijně-pracovním životě se motám kolem sociální práce a vzdělávání.",
              name: "Adéla",
            },
            {
              image: (
                <StaticImage
                  src="../images/petra.png"
                  alt=""
                  width={200}
                  height={200}
                  className="rounded-full float-left mr-4 mb-4 shape-outside"
                />
              ),
              text: "Ahoj, jsem devátým rokem farářkou v České Lípě. Pecka při mé práci je švestičkou na dortu. Mám ráda tvořivost, poezii a nezdravou kuchyni :-). Zajímáte mě VY, tak doufám, že se na letošní pecce švestce sejdeme a zažijeme společně mnoho dobrého.",
              name: "Petra",
            },
            {
              image: (
                <StaticImage
                  src="../images/roman.jpg"
                  alt=""
                  width={200}
                  height={200}
                  className="rounded-full float-left mr-4 mb-4 shape-outside"
                />
              ),
              text: "Čau lidi, dělat různé křesťanské věci s mládeží je zábavné a užitečné. Zažil jsem to z obou stran, jako účastník i vedoucí, a zásadně mě to ovlivnilo. Tak chci na Pecce přispět k tomu, aby k tomu šikovní mládežníci měli inspiraci a podporu. Aby se to v našich sborech a kostelech hezky omlazovalo. Jinak jsem farářem v Praze – Libni, vedoucím pop-rockového mládežnického pěveckého sboru a členem vedení církve.",
              name: "Roman",
            },
            {
              image: (
                <StaticImage
                  src="../images/damka.png"
                  alt=""
                  width={200}
                  height={200}
                  className="rounded-full float-left mr-4 mb-4 shape-outside"
                />
              ),
              text: "Ahoj, jsem Damka a během svého žití v mládeži jsem vyzkoušela různé role. Nejlépe mi bylo tam, kde jsem měla prostor aktivně konat podpořená týmem usměvavých a různěrostlých lidí. Dodnes z těchto zážitků funkčního spolutvoření čerpám i v profesním životě. Jsem proto moc ráda, že se mohu podílet na kurzu, který v takové atmosféře vzniká, a navíc se snaží o to, aby z mládeže odcházelo o takovou zkušenost posilněno co nejvíce lidí. Na pecce mám taky ráda její název, tak ať roste jako z vody a my s ní!",
              name: "Damaris",
            },
          ]}
        />
        <Contact />
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Pecka – kurz pro pracovníky s mládeží v ČCE</title>
);
