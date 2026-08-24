type Article = {
  title: string
  author: string
  text: string
  link: string
  label?: string
}

export const articlesFirst: Article[] = [
  {
    title: 'Jaká byla PECKA? 1. víkend kurzu pro pracovníky s mládeží',
    author: 'Viki Fenclová',
    text: 'Během prodlouženého víkendu 16. – 19. listopadu přijelo do Poděbrad z různých koutů republiky 11 mladých lidí. Po celou dobu jsme byli vystavováni novým způsobům jak pracovat v týmu, sami se sebou i s mládeží v církvi. Ty si pro nás připravil tým převážně mladých nadšenců...',
    link: 'https://mladez.evangnet.cz/blog/jaka-byla-pecka-1-vikend-kurzu-pro-pracovniky-s-mladezi/',
  },
  {
    title: 'Jaký byl druhý víkend Pecky?',
    author: 'Vašek Jelínek',
    text: 'Byl první únorový víkend a nadšenci do práce s mládeží jeli na druhý víkend kurzu Pecka do Prahy-Zbraslavi. Vlaky či busy tam jely tak dlouho, až se člověku zdálo, že už snad není v Praze. Po takové dlouhé cestě nás ve dveřích domu místního skautského oddílu uvítala radostná organizační skupinka Pecky…',
    link: 'https://mladez.evangnet.cz/blog/jaky-byl-druhy-vikend-pecky/',
  },
  {
    title: 'Třetí peckový víkend',
    author: 'Anežka Sabelová',
    text: 'Stejně jako školní rok se i Pecka chýlí ke konci (tohoto ročníku) a 7. června k večeru jsme se sešli na vlakovém nádraží v Kuřimi. Společně jsme se došinuli do parku, kde nás čekala první hra, při níž jsme se nejen smáli, ale i překonávali různé výzvy na pomyslném trhu práce včetně živé pyramidy, ponoření do potoka, skládání ódy na pecku nebo povídání si s nebohými tatínky na zdejším hřišti…',
    link: 'https://mladez.evangnet.cz/blog/treti-peckovy-vikend/',
  },
]

export const articlesSecond: Article[] = [
  {
    title: 'Jak probíhal Peckový týden v Bílém Potoce?',
    author: 'Klára Bubeníková',
    text: 'Na cestě do Bílého potoka, kde se letošní Pecka konala, jsem ještě nevěděla, kdo a co mě tento týden čeká, ale teď už vím, že to byl týden plný nejen užitečných a zajímavých informací, ale i přátelství a skvělých zážitků.',
    link: 'https://mladez.evangnet.cz/blog/jak-probihal-peckovy-tyden-v-bilem-potoce/',
  },
  {
    title: 'Pecka, která klíčí',
    author: 'Adéla Rozbořilová',
    text: 'Vyrážím na samotný sever České republiky, do Bílého Potoka, nevelké obce ukryté pod úbočím Jizerských hor. Ve dnech 3.–10. srpna se zde totiž koná Pecka, vzdělávací kurz pro pracovníky s mládeží. Dobře skrytá je i chalupa. Abych se k ní dostala, musím se probojovat silniční uzavírkou. Cesta tu vede jen jedna, a tak nezbývá než odstavit auto a táhlý kopec vyšlapat po svých.',
    link: 'https://ceskybratr.cz/clanky/pecka-ktera-klici/',
    label: 'Celý článek na webu Českého bratra',
  },
]
