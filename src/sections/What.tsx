import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Section } from "../components/Section";
import { Carousel } from "../components/Carousel/Carousel";
import { Article } from "./Article";
import { Button } from "../components/Button";
import { H3 } from "../components/Typography";

const articlesFirst = [
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

const articlesSecond = [
  {
    title: "Jak probíhal Peckový týden v Bílém Potoce?",
    author: "Klára Bubeníková",
    text: "Na cestě do Bílého potoka, kde se letošní Pecka konala, jsem ještě nevěděla, kdo a co mě tento týden čeká, ale teď už vím, že to byl týden plný nejen užitečných a zajímavých informací, ale i přátelství a skvělých zážitků.",
    link: "https://mladez.evangnet.cz/blog/jak-probihal-peckovy-tyden-v-bilem-potoce/",
  },
  {
    title: "Pecka, která klíčí",
    author: "Adéla Rozbořilová",
    text: "Vyrážím na samotný sever České republiky, do Bílého Potoka, nevelké obce ukryté pod úbočím Jizerských hor. Ve dnech 3.–10. srpna se zde totiž koná Pecka, vzdělávací kurz pro pracovníky s mládeží. Dobře skrytá je i chalupa. Abych se k ní dostala, musím se probojovat silniční uzavírkou. Cesta tu vede jen jedna, a tak nezbývá než odstavit auto a táhlý kopec vyšlapat po svých.",
    link: "https://ceskybratr.cz/clanky/pecka-ktera-klici/",
    label: "Celý článek na webu Českého bratra",
  },
];

export const What: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  console.log("isOpened", isOpened);
  return (
    <Section
      id="jake-to-bylo"
      title="Jaké byly předchozí Pecky?"
      titleColor="text-brand-first"
      bg="bg-brand-second"
      className="min-h-[30rem] relative"
      full
    >
      <div className="relative z-10">
        <p className="text-center font-bold mb-8 italic max-w-3xl mx-auto">
          První broskvová na přelomu roků 2023 a 2024 a druhá švestková v létě
          2025. Podívejte se co o nich napsali účastníci.
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
              text: "„Kurz Pecka doporučuji každému, kdo se jakýmkoliv způsobem věnuje mládeži! Ne proto, že by práce s mládeží byla nějaká věda, ale naučíte se zde mnoho věcí, kterými vyparádíte vaši práci s mládeží. Nejvíc si z Pecky odnáším Nenásilnou komunikaci, trvalo mi pár neděl, než se mi podařilo ji nějak aplikovat a mezitím se mi to kolikrát nepovedlo, ale její využívání za tu námahu stálo! :) } Během kurzu jsem měl fůru času na rozhovory s účastníky i organizátory, kteří nám věnovali tolik úsilí, že jsme s rozhovory končili často až někdy ve 3 ráno. :D I díky tomu jsem pochopil, jaká je po práci s mládeží velká poptávka. Nenásilka, atraktivní programy, způsoby práce s Biblí, co mít vždy v kapse..., nejen toto mi dala Pecka. Chop se tak příštího kurzu Pecka a dopřej své mládeži, co si zaslouží! “",
            },
            {
              name: "Vašek P.",
              fullName: "Václav Podrazil",
              text: "„Z Pecky si odnáším hlavně nové přátele. Jestli mi něco dala, byli to hlavně lidi a jejich nové pohledy na věc. Právě častý prostor pro debatu pro mne byl z nemála tím, z čeho jsem si toho odnesl nejvíce.“",
            },
            {
              name: "Dorotka N.",
              fullName: "Dorotea Neumannová",
              text: "Tento mega lákavý text píšu nad vlastnoručně vyrobeným deníčkem z kurzu Pecka. Mám v něm založeno několik materiálů o komunikaci, práci v týmu, o spirituálních temperamentech a o biblických programech všeho druhu. Pár těchto listů už má svou kopii k použití při somákování. Několik stránek deníku nese památku pokusů zachovat si užitečné, motivující, srandovní myšlenky, které během peckových dnů proběhly mezi námi, ve mně. A taky je v něm hodně nepopsaných stránek, které jsou vzpomínkou na všechny ty chvíle, kdy bylo mnohem důležitější a povznášející si povídat, objímat se, sdílet zkušenosti s účastníky a kurzovým týmem. Chceš-li být obohacen takovým deníkem, staň se kurzu Pecka účastníkem!",
            },
            {
              name: "Míša",
              fullName: "Míša Řežábková",
              text: "Pecka je fakt jedinečný časoprostor. Je to spojením her a zábavy, učení se nových dovedností, sdílení zkušeností a aktivní prožívání víry. I když nejsem členka žádného SOMu, stejně pro mě byl program zajímavý a celkem mě nahlodal k tomu, že bych chtěla něco organizovat. Pecku doporučuju všem, i když třeba (zatím) nejste v SOMu.",
            },
            {
              name: "Dorotka S.",
              fullName: "Dorota Stejskalová",
              text: "Na Pecce se mi moc líbilo, že jsem tam potkala skvělou partu lidí, se kterými jsem mohla sdílet své nápady a problémy a kteří mě vždy podporovali. Kromě sdílení jsme se také vzdělávali a dozvěděla jsem se hromadu nových a užitečných věcí. Chodili jsme i na výlety a hráli různé hry, takže atmosféra byla vcelku uvolněná. Pecku bych doporučila úplně všem – jak těm, kdo váhají, jestli se mají do něčeho pustit, nebo jsou bezradní, tak i těm, kteří chtějí svou práci jen zdokonalit.",
            },
            {
              name: "Míri",
              fullName: "Miriam Matušková",
              text: "Díky Pecce jsem prožila čas plný neobyčejných zážitků, obohacujících informací a inspirativních rozhovorů. Setkání s lidmi ze “stejného oboru“, sdílení zkušeností s plánováním akcí a zjišťování jak to mají ostatní, mi dalo motivaci zlepšovat jak naše akce, tak i spolupráci v týmu. Doporučuju každému, protože se dozví, jak organizovat akce, aby fungovaly, dostane spoustu možností poznávat svou víru a objevovat sebe sama v neobvyklých situacích a hrách. A v neposlední řadě bude součástí skvělé party, co umí naslouchat.",
            },
          ]}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4 gap-4 mb-16 max-w-screen-2xl mx-auto">
          <StaticImage
            src="../images/20.jpg"
            alt=""
            width={728}
            height={444}
            className="md:col-span-2 md:row-span-2"
          />
          <StaticImage src="../images/10.jpg" alt="" width={364} height={222} />
          <StaticImage src="../images/13.jpg" alt="" width={364} height={222} />
          <StaticImage src="../images/24.jpg" alt="" width={364} height={222} />
          <StaticImage
            src="../images/11.jpg"
            alt=""
            width={280}
            height={540}
            className="md:row-span-2"
          />
          <StaticImage
            src="../images/16.jpg"
            alt=""
            width={364}
            height={222}
            className={!isOpened ? "max-md:hidden" : ""}
          />
          <StaticImage
            src="../images/18.jpg"
            alt=""
            width={364}
            height={222}
            className={!isOpened ? "max-md:hidden" : ""}
          />
          <StaticImage
            src="../images/14.jpg"
            alt=""
            width={364}
            height={222}
            className={!isOpened ? "max-md:hidden" : ""}
          />
          <StaticImage
            src="../images/19.jpg"
            alt=""
            width={364}
            height={222}
            className="md:col-span-2"
          />
          <StaticImage
            src="../images/21.jpg"
            alt=""
            width={364}
            height={222}
            className={!isOpened ? "max-md:hidden" : ""}
          />
          <StaticImage
            src="../images/22.jpg"
            alt=""
            width={364}
            height={222}
            className={isOpened ? "" : "max-md:hidden"}
          />
          <StaticImage
            src="../images/23.jpg"
            alt=""
            width={364}
            height={222}
            className={isOpened ? "" : "max-md:hidden"}
          />
          <StaticImage
            src="../images/25.jpg"
            alt=""
            width={364}
            height={222}
            className={isOpened ? "" : "max-md:hidden"}
          />
          <StaticImage
            src="../images/26.jpg"
            alt=""
            width={364}
            height={222}
            className={isOpened ? "" : "max-md:hidden"}
          />
          <StaticImage
            src="../images/27.jpg"
            alt=""
            width={364}
            height={222}
            className={isOpened ? "" : "max-md:hidden"}
          />
          <StaticImage
            src="../images/29.jpg"
            alt=""
            width={364}
            height={222}
            className={isOpened ? "" : "max-md:hidden"}
          />
          <StaticImage
            src="../images/31.jpg"
            alt=""
            width={364}
            height={222}
            className={isOpened ? "" : "max-md:hidden"}
          />
          <StaticImage
            src="../images/33.jpg"
            alt=""
            width={364}
            height={222}
            className={isOpened ? "" : "max-md:hidden"}
          />
          <StaticImage
            src="../images/07.jpg"
            alt=""
            width={728}
            height={444}
            className={`md:col-span-2 md:row-span-2 ${isOpened ? "" : "max-md:hidden"}`}
          />
          <StaticImage
            src="../images/01.jpg"
            alt=""
            width={728}
            height={444}
            objectPosition="top"
            className={`md:col-span-2 md:row-span-2 ${isOpened ? "" : "max-md:hidden"}`}
          />
          <StaticImage
            src="../images/08.jpg"
            alt=""
            width={364}
            height={222}
            className={isOpened ? "" : "max-md:hidden"}
          />
          <StaticImage
            src="../images/06.jpg"
            alt=""
            width={364}
            height={222}
            className={isOpened ? "" : "max-md:hidden"}
          />
          <div className="col-span-full justify-center flex">
            <button
              className={`rounded-md w-fit mx-auto bg-brown-first font-bold flex items-end gap-2 py-2 px-8 text-white ${isOpened ? "hidden" : "md:hidden"}`}
              onClick={() => {
                setIsOpened(true);
              }}
            >
              Další fotky
            </button>
            <Button
              to="https://photos.app.goo.gl/ud146RC1DaD5TTHU8"
              className="max-md:hidden"
            >
              Více fotek
            </Button>
            <Button
              to="https://photos.app.goo.gl/ud146RC1DaD5TTHU8"
              className={`${isOpened ? "md:hidden" : "hidden"}`}
            >
              Ještě více fotek
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-8 max-w-screen-2xl mx-auto">
          <div className="col-span-full">
            <H3 className="text-center">Švestkový ročník 2025</H3>
          </div>
          {articlesSecond.map((article) => (
            <Article {...article} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-8 max-w-screen-2xl mx-auto">
          <div className="col-span-full">
            <H3 className="text-center mt-16">Broskvový ročník 2023/24</H3>
          </div>
          {articlesFirst.map((article) => (
            <Article {...article} />
          ))}
        </div>
      </div>
      <div className="opacity-20 absolute -bottom-4 left-0 right-0 z-0">
        <StaticImage src="../images/forest.webp" alt="" />
      </div>
    </Section>
  );
};
