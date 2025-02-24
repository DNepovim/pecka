import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { C, H3, P, Q } from "../components/Typography";
import { Section } from "../components/Section";
import { Carousel } from "../components/Carousel/Carousel";

export const Pillars: React.FC = () => (
  <Section
    id="kmeny"
    title="Na čem stavíme?"
    titleColor="text-brand-first"
    bg="bg-beige-first"
    full
  >
    <div className="text-center">
      <Q>
        Duch, osobnost, dovednosti.
        <br /> To jsou tři kmeny stromu, který se v létě obsype švestkami. Proč?
      </Q>
    </div>
    <Carousel
      indicatorsVerticalPosition="top"
      items={[
        {
          name: "Osobnost",
          fullName: "Osobnost",
          text: (
            <>
              <Q>„Miluj bližního svého jako sám sebe.” (Marek 12, 31)</Q> Často,
              když tuto část dvojího přikázání lásky čteme, slyšíme především
              výzvu k milování druhých. Přitom jako nejvyšší konstantu srovnání
              zde Ježíš používá vztah k sobě samému - nejdůležitější vztah,
              který můžeme v životě rozvíjet, protože z něho vycházejí všechny
              naše vztahy ostatní. Je proto dobré poznávat sám sebe a pěstovat
              si citlivost k tomu, jak se cítím, protože pokud tu nejsem pro
              sebe sama, nemůžu tu být dlouhodobě ani pro druhé.
              <br />
              <br /> Každý z nás je jedinečné boží dítě. Každý z nás má své
              silné a slabé stránky, každý z nás má své potřeby, každý z nás má
              své zdroje, kterými může doplňovat energii. Každý z nás má
              množství talentů, skrze které může naplnit svůj život. Každý z nás
              by měl znát svou cenu.
              <br />
              <br />
              <Q>
                „Nikdo není tak silný, aby nepotřeboval druhé. A nikdo není tak
                slabý, aby neměl druhým co dát.“
                <C>Zpráva Synodní rady (1. zasedání 36. synodu ČCE)</C>
              </Q>
              Být k sobě laskavý, důvěřovat si, rozvíjet svá obdarování a
              nechávat si všemi silami pomáhat k dobrému. Není to vždy snadné,
              ale jsme v tom spolu a na Pecce si můžeme vzájemně poradit, kudy
              na to.
              <br />
              <br /> SPOILER ALERT: Hospodin nás přijímá se všemi našimi
              nedokonalostmi a chybami. Tak nebojte. :)
            </>
          ),
          image: (
            <StaticImage
              src="../images/osobnost.png"
              alt="Dovednosti"
              objectFit="contain"
              width={400}
              height={400}
              className="float-left mr-4 mb-4 h-48 w-48 shape-outside"
            />
          ),
        },
        {
          name: "Spiritualita",
          fullName: "Spiritualita",
          text: (
            <>
              Jako křesťané máme velikou kliku. Můžeme se spolehnout, že s námi
              životem kráčí Hospodin, který nás vede za ruku a v nejtěžších
              chvílích nese na svých ramenou. Nejsme a nikdy v tom nebudeme
              sami. Je to úžasná jistota, která má schopnost naplnit naše srdce
              pokojem a teplým světlem. Nekonečný zdroj naděje a síly.
              <br />
              <br />
              <Q>
                Jenže někdy tápeme a ona jistota se nezdá být tak jistá: „Co to
                vlastně znamená věřit? Žít život s Bohem? Být křesťan? A jak do
                toho zapadají pochybnosti či neúspěchy? Má to cenu?“
              </Q>
              Věříme, že má. Věříme, že se Boha vyplatí do svého života zvát
              a nevzdávat to. A k tomu bychom vás na Pecce chtěli povzbudit.
              K hledání vlastního vztahu s Bohem. K hledání formy spirituality,
              která vám bude dávat smysl. Věříme, že víra je cesta, po které se
              vyplatí jít.
              <br />
              <br />
              Na Pecce ji můžeme chvíli hledat spolu. Kdo ví, třeba i něco
              ujdeme a do batohu si trochu té jistoty uložíme na později – to
              bychom si moc přáli.
            </>
          ),
          image: (
            <StaticImage
              src="../images/spiritualita.svg"
              alt="Dovednosti"
              objectFit="contain"
              width={400}
              height={400}
              className="float-left mr-4 mb-4 h-48 w-48 shape-outside"
            />
          ),
        },
        {
          name: "Dovednosti a znalosti",
          fullName: "Dovednosti a znalosti",
          text: (
            <>
              <Q>Žádný učený z nebe nespadl aneb teď trochu nohama na zem.</Q>
              Jako pracovníci s mládeží potřebujeme oba předešlé pilíře, abychom
              mohli inspirovat další a měli pro svou práci dostatek sil. Stejně
              tak však mnohdy potřebujeme prostě jen hafo praktických dovedností
              či informací. Třeba proto, aby se mládežníci vůbec měli kde
              potkat.
              <br />
              <br />
              Na Pecce máme prostor i pro řešení základních věcí, jako je:
              struktura církve a místo SOMů v ní, tvorba akcí (her, pobožností)
              a jejich propagace, práce v týmu (vedení porad, týmové role) nebo
              sdílení důležitých kontaktů „kam se obrátit, když“. Klademe si
              otázku, co je vlastně hlavním úkolem pracovníků s mládeží, nebo
              jaká jsou naše práva a povinnosti. Pokud máte nějaký tips and
              tricks, vezměte je s sebou!
            </>
          ),
          image: (
            <StaticImage
              src="../images/dovednosti.png"
              alt="Dovednosti"
              width={842}
              height={791}
              objectFit="contain"
              className="float-left mr-4 mb-4 h-48 w-48 shape-outside"
            />
          ),
        },
      ]}
    />
  </Section>
);
