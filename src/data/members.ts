import type { ImageMetadata } from 'astro'

import adela from '@/images/adela.jpg'
import damka from '@/images/damka.png'
import dominik from '@/images/dominik.jpg'
import matous from '@/images/matous.jpeg'
import ondra from '@/images/ondra.jpg'
import peckos from '@/images/peckos.png'
import petra from '@/images/petra.png'
import roman from '@/images/roman.jpg'

type Member = {
  image: ImageMetadata
  name: string
  fullName: string
  text: string
}

export const members: Member[] = [
  {
    image: dominik,
    name: 'Dominik',
    fullName: 'Dominik Bláha',
    text: 'Práci s dětmi a mládeží se věnuji od nepaměti v církvi i mimo ní. Šest let jsem byl v somu, osm v comu, který jsem většinu času vedl. Vedl jsem také skautský oddíl a organizoval několik skautských kurzů. V církvi mi chyběl kurz, který by nakopl lidi, kteří v ní s mládeží pracují. Tak jsem s týmem silných osobností, které vzešli z evangelické mládeže založil Pecku. Kurz, který nejen vzdělává, ale snaží se působit i na osobnost a ducha a to vše za pomoci lidského společenství kurzu.',
  },
  {
    image: ondra,
    name: 'Ondra',
    fullName: 'Ondřej Sabela',
    text: 'Jsem pastorační pracovník pro mládež. Vzdělávání pro mládežníky mi leželo na srdci a vyhledával jsem ho odjakmládežnickyživa. V církvi a na Pecce mě baví spojovat a praskat sociální a myšlenkové bubliny, kombinovat prostředky, styly a formy. Vizuální a duchovní, technické a hudební, kolektivní a osobní, hudební a duchovní, technické a duchovní, kolektivní a vizuální… a tak. A taky mám rád porady.',
  },
  {
    image: adela,
    name: 'Adéla',
    fullName: 'Adéla Bednaříková',
    text: 'Při přípravě Pecky často přemýšlím o tom, jak moc ráda bych Pecku zažila, když mi bylo 16 a začínala jsem být v SOMu. Na Pecce mám ráda hlavně prima lidi, připravování programů a spirituální chvilky. Kromě toho mám moc ráda i povídání, pití čajíčků a kávičky, procházky, kytičky a hledání krásy ve zdánlivě obyčejných věcech. Prošla jsem si SOMem, spoluorganizováním sborové mládeže a prací na Omku. Ve svém studijně-pracovním životě se motám kolem sociální práce a vzdělávání.',
  },
  {
    image: petra,
    name: 'Petra',
    fullName: 'Petra Náhlovská',
    text: 'Ahoj, jsem devátým rokem farářkou v České Lípě. Pecka při mé práci je švestičkou na dortu. Mám ráda tvořivost, poezii a nezdravou kuchyni :-). Zajímáte mě VY, tak doufám, že se na letošní pecce švestce sejdeme a zažijeme společně mnoho dobrého.',
  },
  {
    image: roman,
    name: 'Roman',
    fullName: 'Roman Mazur',
    text: 'Čau lidi, dělat různé křesťanské věci s mládeží je zábavné a užitečné. Zažil jsem to z obou stran, jako účastník i vedoucí, a zásadně mě to ovlivnilo. Tak chci na Pecce přispět k tomu, aby k tomu šikovní mládežníci měli inspiraci a podporu. Aby se to v našich sborech a kostelech hezky omlazovalo. Jinak jsem farářem v Praze – Libni, vedoucím pop-rockového mládežnického pěveckého sboru a členem vedení církve.',
  },
  {
    image: damka,
    name: 'Damaris',
    fullName: 'Damaris Kopecká',
    text: 'Ahoj, jsem Damka a během svého žití v mládeži jsem vyzkoušela různé role. Nejlépe mi bylo tam, kde jsem měla prostor aktivně konat podpořená týmem usměvavých a různěrostlých lidí. Dodnes z těchto zážitků funkčního spolutvoření čerpám i v profesním životě. Jsem proto moc ráda, že se mohu podílet na kurzu, který v takové atmosféře vzniká, a navíc se snaží o to, aby z mládeže odcházelo o takovou zkušenost posilněno co nejvíce lidí. Na pecce mám taky ráda její název, tak ať roste jako z vody a my s ní!',
  },
  {
    image: matous,
    name: 'Matouš',
    fullName: 'Matouš Tkadleček',
    text: 'Ahoj, jsem Matouš. V životě potřebuju pracovat s lidmi, ptát se jich, rozvíjet je. Myslím, že jsem tuto potřebu mohl naplňovat v práci s mládeží a v SOMu. Během mé životní cesty jsem se mohl skrze školu a různé kurzy učit, jak vymýšlet supermegakrutopřísné hry, jak pracovat se zážitkem a jak zážitek převést do reálného života. Všechny tyhle věci zkouším při práci s lidmi zapojovat. Vnímám, že ne každý má tuto základnu a chtěl bych skrze pecku předávat tyto zkušenosti. Čekat ode mě můžete cokoli. Jen ne nudnou přednášku. Těším se na viděnou v létě!',
  },
  {
    image: peckos,
    name: 'Peckos',
    fullName: 'Peckos',
    text: 'Ahoj, oslovuj mě mým uměleckým jménem MC Peckos, na jiné stejně neslyším. Rád o sobě říkám, že jsem trochu tajemný člen týmu. Objevuju se ve chvílích, kdy se mi zdá, že je potřeba naboostovat atmosféru novou energií. Pak zase mizím skládat rapové balady. Na pizzu nedávám ananas, ale avokádo. Traduje se o mě, že se na kurzu nikdy nevyskytuju pohromadě se všemi členy týmu, to je ale fáma. Jsem celkem exhibicionista, libuju si v epických příchodech do místnosti a v moderaci miniher s peckami.',
  },
]
