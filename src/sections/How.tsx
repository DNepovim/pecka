import React from "react";
import { H3, P, Q } from "../components/Typography";
import { Section } from "../components/Section";

export const How: React.FC = () => (
  <Section
    id="obsah"
    titleColor="text-brand-first"
    bg="bg-brand-second"
    title="Jak toho chceme dosáhnout?"
  >
    <div className="text-center max-w-xl mx-auto">
      <Q>
        Není možné za jeden týden obsáhnout celou škálu dovedností práce s
        mládeží. Jak tedy volíme, jaké téma do Pecky zahrneme a jaké ne?
        <br /> Snažíme se obsáhnout témata, která splňují tři věci:
        <ol>
          <li>1. Lidé, kteří s mládeží pracují o ně stojí.</li>
          <li>2. Naše církev má zájem o prohlubování takového tématu.</li>
          <li>3. Dokážeme ho kvalitně předat.</li>
        </ol>
        Tady je ochutnávka toho, s čím se na Pecce setkáte:
      </Q>
    </div>
    <div className="grid md:grid-cols-3 gap-4">
      <article className="col-span-full md:col-span-2">
        <H3>Kultura na kurzu </H3>
        Na Pecce se snažíme vytvářet otevřené a respektující prostředí. Jako
        jednu z nejcennějších hodnot vnímáme vzájemné sdílení a podporu. Na
        takovou výměnu zkušeností jsou zaměřeny jak konkrétní programy kurzu,
        tak prostory volna či tzv. pousteven, během kterých účastníky zveme k
        osobním rozvorům, projeví-li o ně zájem. O pastoraci mohou účastníci
        kdykoliv během kurzu požádat naše faráře. Podporujeme účastníky v
        hledání jejich autentické cesty službou. K tomu nám slouží například
        reflexivní psaní deníků či pobožnosti, ve kterých se snažíme ukázat své
        jedinečné zkušenosti s vírou a jejím prožíváním (včetně nejistoty,
        chybování, radosti a vděčnosti).
      </article>

      <article className="col-span-full md:col-start-2 md:col-span-2">
        <H3>Inspirativní programy</H3>
        Chceme, aby účastníci byli inspirováni přímo aktivitami, které na Pecce
        sami zažijí a mohli je znovu použít na svých akcích. Například:
        <br />
        <div className="pl-8">
          <strong>Hry</strong> &#x279E; K těm jednoduchým nepotřebuješ žádné
          pomůcky, můžeš je vytáhnout podle potřeby, a vylepšit jimi běžné
          aktivity na akcích (např. seznamovací kolečko), uvolnit nervózní
          atmosféru (např. obíhačka), a zažít díky ním s mládežníky něco
          akčního. Setkáš se také se složitějšími hrami, u nichž je zážitkovou
          formou předávána nějaká hlubší myšlenka.
          <br />
          <strong>Formy</strong> &#x279E; Každá mládežnická akce je jiná a proto
          chceme na Pecku přinést širokou paletu forem, do kterých jednotlivé
          programy napasováváme. Budeme často venku, v pohybu. Využíváme také
          různé formy interakce a komunikace: obrázky, deník, vyrábění, hry,
          skupinky, procházky, diskuze, rozhovory. Seznámíš se s různými formami
          duchovního programu: studijní, diskuzní, induktivní, i zážitkové čtení
          Bible, zpěvy z Taizé, hudba zamýšlecí, chválící i liturgická.
        </div>
      </article>

      <article className="col-span-2">
        <H3>Vzdělávací programy</H3>
        <div className="pl-8">
          <strong>Nenásilná komunikace</strong> &#x279E; Mezilidská komunikace
          je často zanešená doměnkami a předsudky. Kolika nedorozumění a
          nepochopení bychom předešli, kdybychom dokázali jasně formulovat své
          pocity a potřeby a zároveň je dokázali chápat u druhých. Na tom právě
          je postaven koncept Nenásilné komunikace Marshalla Rosenberga. A
          protože komunikace je klíčovou dovedností každého, kdo pracuje s
          lidmi, budeme se jít na Pecce věnovat celé jedno dopoledne.
          <br />
          <strong>Simply the Story</strong> &#x279E; Nedílnou součástí
          evangelických akcí je práce s biblickýcmi příběhy. Často si při
          přípravě programů na toto téma vystačíme s vlastní kreativitou. Občas
          nám ale může pomoct osvědčená metoda. Pár takových vám na Pecce
          nabídneme. Například{" "}
          <a href="https://www.simplythestory.org/" target="_blank">
            Simply the Story
          </a>
          . Je to metda, která vám pomůže naučit se a dobře vyprávět biblický
          příběh, najít v něm poklady a formulovat a klást k němu otázky.
          <br /> <strong>Práce v týmu</strong> &#x279E; Málo kdo připravuje akce
          sám a hladce fungující tým vede nejen k lepším akcím, ale i k lepšímu
          pocitu z jejich příprav. Pro dobré fungování v týmu je třeba umět
          dobře komunikovat, pracovat se svou rolí v něm, uvědomovat si své
          silné a slabé stránky a řadu dalších dovedností. Na Pecce budeme práci
          v týmu věnovat víc jak půlden. Nejprve si ve hře samotnou práci v týmu
          vyzkoušíme a na této zkušenosti pak budeme dál stavět.
        </div>
      </article>
    </div>
  </Section>
);
