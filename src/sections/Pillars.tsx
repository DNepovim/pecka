import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { C, H3, P, Q } from "../components/Typography";
import { Section } from "../components/Section";

export const Pillars: React.FC = () => (
  <Section
    id="pilire"
    title="Na čem stavíme?"
    titleColor="text-brand-first"
    bg="bg-beige-first"
  >
    <div className="text-center mb-16">
      <Q>
        Duch, osobnost, dovednosti. To jsou tři pilíře, na kterých jsme se
        rozhodli Pecku postavit. Proč?
      </Q>
    </div>
    <div className="grid lg:grid-cols-[1fr,2fr] gap-8">
      <StaticImage
        src="../images/personality.webp"
        alt="Osobnost"
        objectFit="contain"
        className="h-44"
      />
      <div>
        <H3 color="text-brand-first">Osobnost</H3>
        <P>
          HÁDANKA: „Každý z nás má alespoň jeden (ale spíš víc), co to je?“
          <br />
          No přeci talent! Něco, v čem jsme opravdu dobří. Každý z nás je
          jedinečné boží dítě. Každý z nás má své silné a slabé stránky, každý
          z nás má své potřeby, každý z nás má své zdroje, kterými může
          doplňovat energii. Každý z nás trochu jinak, jinde, jindy. Důležité
          však je, že každý z nás má potenciál svůj talent rozvíjet a nechávat
          si všemi silami pomáhat k dobrému. Každý z nás by měl znát svou cenu.
        </P>
        <Q>
          „Nikdo není tak silný, aby nepotřeboval druhé. A nikdo není tak slabý,
          aby neměl druhým co dát.“
          <C>Zpráva Synodní rady (1. zasedání 36. synodu ČCE)</C>
        </Q>
        <P>
          Je dobré poznávat sám sebe a své talenty, skrze které můžeme naplnit
          svůj život. A stejně tak je dobré vědět, kdy na něco sami nestačíme
          a&nbsp;potřebujeme pomoc. Je dobré, že jsme v tom spolu a na Pecce si
          můžeme vzájemně poradit kudy na to.
        </P>
        <P>
          SPOILER ALERT: Hospodin nás přijímá se všemi našimi nedokonalostmi
          a chybami. Tak neboj.
        </P>
      </div>
    </div>
    <div className="grid lg:grid-cols-[1fr,2fr] gap-8">
      <StaticImage
        src="../images/spirituality.png"
        alt="Spiritualita"
        objectFit="contain"
        className="h-44"
      />
      <div>
        <H3 color="text-brand-first">Spiritualita</H3>
        <P>
          Jako křesťané máme velikou kliku. Můžeme se spolehnout, že s námi
          životem kráčí Hospodin, který nás vede za ruku a v nejtěžších chvílích
          nese na svých ramenou. Nejsme a nikdy v tom nebudeme sami. Je to
          úžasná jistota, která má schopnost naplnit naše srdce pokojem a teplým
          světlem. Nekonečný zdroj naděje a síly.
        </P>
        <Q>
          Jenže někdy tápeme a ona jistota se nezdá být tak jistá: „Co to
          vlastně znamená věřit? Žít život s Bohem? Být křesťan? A jak do toho
          zapadají pochybnosti či neúspěchy? Má to cenu?“
        </Q>
        <P>
          Věříme, že má. Věříme, že se Boha vyplatí do svého života zvát
          a nevzdávat to. A k tomu bychom vás na Pecce chtěli povzbudit.
          K hledání vlastního vztahu s Bohem. K hledání formy spirituality,
          která vám bude dávat smysl. Věříme, že víra je cesta, po které se
          vyplatí jít.
          <br />
          Na Pecce ji můžeme chvíli hledat spolu. Kdo ví, třeba i něco ujdeme
          a do batohu si trochu té jistoty uložíme na později – to bychom si moc
          přáli.
        </P>
      </div>
    </div>
    <div className="grid lg:grid-cols-[1fr,2fr] gap-8">
      <StaticImage
        src="../images/knowledge.webp"
        alt="Dovednosti"
        objectFit="contain"
        className="h-44"
      />
      <div>
        <H3 color="text-brand-first">Dovednosti a znalosti</H3>
        <Q>Žádný učený z nebe nespadl aneb teď trochu nohama na zem.</Q>
        <P>
          Jako pracovníci s mládeží potřebujeme oba předešlé pilíře, abychom
          mohli inspirovat další a měli pro svou práci dostatek sil. Stejně tak
          však mnohdy potřebujeme prostě jen hafo praktických dovedností či
          informací. Třeba proto, aby se mládežníci vůbec měli kde potkat.
        </P>
        <P>
          Na Pecce máme prostor i pro řešení základních věcí, jako je: struktura
          církve a místo SOMů v ní, tvorba akcí (her, pobožností) a jejich
          propagace, práce v týmu (vedení porad, týmové role) nebo sdílení
          důležitých kontaktů „kam se obrátit, když“. Klademe si otázku, co je
          vlastně hlavním úkolem pracovníků s mládeží, nebo jaká jsou naše práva
          a povinnosti. Pokud máte nějaký tips and tricks, vezměte je s sebou!
        </P>
      </div>
    </div>
  </Section>
);
