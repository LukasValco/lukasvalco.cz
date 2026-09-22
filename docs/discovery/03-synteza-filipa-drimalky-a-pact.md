# Syntéza veřejného obsahu Filipa Dřímalky a systému PACT

- **Účel:** vytěžit dlouhodobé principy pro lukasvalco.cz v2, nikoli kopírovat Filipův web, značku nebo obchodní model
- **Datum rešerše:** 22. 9. 2026
- **Stav:** pracovní discovery dokument k další iteraci
- **Rozsah:** veřejný obsah bez přihlášení, bez registrace a bez odesílání formulářů

## Metodika a pokrytí

Byly porovnány tyto veřejné zdroje:

- `https://drimalka.com/robots.txt`
- `https://drimalka.com/sitemap.xml`
- `https://drimalka.com/llms.txt`
- hlavní web, stránka O mně, Future AI Leader, firemní nabídka, přednášky a příběhy klientů,
- všechny stránky v sekci `inspirace-zdarma` uvedené v sitemapě,
- veřejné Markdown verze článků,
- interaktivní přihláška do Anthropicu,
- oficiální repozitář PACT `https://github.com/nowork-ai/pact-starter`, jeho současná dokumentační větev i starší veřejný starter.

### Ověřené pokrytí

- Sitemap obsahovala **77 veřejných URL**.
- Sekce `inspirace-zdarma` obsahovala **61 článkových, podcastových nebo mediálních stránek**.
- Všech 61 kanonických HTML stránek odpovědělo HTTP 200.
- **41 stránek** mělo funkční veřejnou Markdown verzi s plnohodnotným obsahem.
- U **20 mediálních nebo starších stránek** Markdown verze vracela 404; jejich kanonické HTML stránky byly samostatně ověřeny jako veřejné a živé.
- `robots.txt` dovoluje veřejné procházení celého webu.
- `llms.txt` funguje jako kurátorovaný rozcestník, ne jako úplný seznam všeho obsahu.
- Rekurzivní kontrola interních odkazů našla mimo sitemapu tři živé podstránky programu Future AI Leader, několik starších URL přesměrovaných na nové články a jeden mrtvý odkaz na ZIP archiv; nepřinesla další samostatný článkový korpus.

Výsledky je nutné číst s vědomím, že jde převážně o Filipův vlastní obsah, obchodní prezentaci a zkušenosti jeho klientů. Nejde o nezávislou evaluaci všech tvrzení.

## Co se napříč obsahem skutečně opakuje

Jednotlivé názvy nástrojů se mění. Stabilní jsou následující principy.

### 1. Neurychlovat pouze starou práci, ale přestavovat její podobu

AI-first přístup není jen rychlejší napsání stejného e-mailu nebo dokumentu. Začíná otázkou, zda lze změnit celý pracovní postup, rozdělení rolí, podobu výstupu nebo službu samotnou.

To přímo podporuje Lukášovu reflexi **„disrupt or be disrupted“**: aktivně měnit vlastní roli, nečekat, které její části zmizí.

### 2. Doménová odbornost získává s AI větší dosah

V článcích se opakují příklady architektů, učitelů, lidí z HR, veřejné správy, marketingu nebo technických profesí. Hodnota nevzniká ze znalosti názvů nástrojů. Vzniká tam, kde člověk:

- rozumí reálnému provozu,
- pozná chybu,
- určí, jak vypadá kvalitní výsledek,
- dodá relevantní kontext,
- převezme odpovědnost za použití výsledku.

Pro lukasvalco.cz je proto výchozí identitou **odborník na fotovoltaiku a technickou podporu**, nikoli obecný AI specialista.

### 3. Výstup má větší cenu než slib

Filip opakovaně ukazuje projekty, prototypy, pracovní systémy, přihlášky, reporty nebo automatizace. Ve vztahu k náboru platí jednoduchý princip: konkrétní artefakt dokládá schopnost lépe než seznam adjektiv v CV.

Na webu se proto mají tvrzení propojovat s důkazy:

- tvrzení nebo schopnost,
- konkrétní situace,
- Lukášova role,
- postup a rozhodnutí,
- výsledek,
- zdroj nebo jiný ověřitelný signál,
- hranice toho, co lze veřejně tvrdit.

### 4. Kontext rozhoduje víc než „dokonalý prompt“

Napříč PACTem i články se vrací živý kontext: cíle, projekty, pracovní profil, předchozí rozhodnutí, zdrojové materiály, příklady kvality a omezení. Bez něj AI vytváří obecné výstupy.

Web může být **veřejnou, kurátorovanou vrstvou kontextu o Lukášovi**, ale nesmí být veřejnou kopií jeho interního druhého mozku.

### 5. Know-how se má měnit v opakovatelný systém

Jednorázový dobrý výstup je méně cenný než postup, který lze znovu použít, zlepšit a bezpečně předat. Filip tento posun popisuje jako compounding systems, workflow, skills, runbooky a handoffy.

Na webu to lze dokazovat případovými studiemi, ve kterých není vidět jen výsledek, ale také způsob, jak Lukáš převádí zkušenost do:

- znalostní báze,
- školení nebo e-learningu,
- kontrolního postupu,
- diagnostického workflow,
- nástroje nebo kalkulátoru,
- opakovatelných instrukcí pro člověka i AI.

### 6. Člověk drží záměr, laťku a odpovědnost

Články často používají myšlenku „what good looks like“. AI může připravit více variant a velkou část realizace, ale zkušený člověk musí určit směr, posoudit kvalitu a vědět, kdy přizvat specialistu.

Pro Lukášovu prezentaci je to silnější než obecná věta „používám AI“. Měl by být vidět jako člověk, který:

- umí práci zadat a rozdělit,
- zná oborový standard,
- kontroluje podklady a výsledek,
- rozpozná, kdy automatizace nestačí,
- neschovává se za doporučení modelu.

### 7. High agency, zvídavost a učení jsou profesní kompetence

V obsahu se opakuje iniciativa, ochota experimentovat, formulace problému, komunikace, rychlé učení a schopnost převzít ownership. To se dobře potkává s Lukášovou kariérní historií: změna oboru, doplňování kvalifikací, vlastní projekty a aktivní hledání lepších cest.

Pro web je důležité tuto vlastnost **ukázat příběhem a výsledkem**, ne pouze napsat „jsem proaktivní“.

### 8. Lidský rozměr s AI neztrácí cenu

Vztahy, empatie, úsudek, bezpečnost, emoce a osobní komunikace se v Dřímalkově obsahu opakovaně vracejí jako oblasti, které nelze redukovat na levnou odpověď modelu.

U Lukáše je tato vrstva ještě konkrétnější:

- vysvětlit technický problém běžnému člověku,
- přizpůsobit způsob komunikace jeho zkušenostem,
- poradit v situaci, kde existuje více trade-offů,
- nabídnout telefonický nebo osobní kontakt,
- v případě potřeby přijet a vidět reálnou situaci na místě.

Právě spojení **odbornosti, AI a fyzické lidské dostupnosti** může být dlouhodobě odlišující.

## PACT: co to skutečně je

PACT znamená:

- **Projects:** aktuální práce, zdroje, rozhodnutí, úkoly a výsledky,
- **Agents:** pravidla, workflow, skills a instrukce, podle kterých AI pracuje,
- **Context:** znovupoužitelné znalosti, profil, komunikační pravidla, ověřená fakta i oddělené raw zdroje,
- **Tools:** skripty, integrace a automatizace, které provádějí konkrétní akce.

Současná veřejná dokumentace přidává důležité provozní principy:

- jedna autorita pro každou informaci,
- oddělení projektového stavu od stabilní znalosti,
- Idea File pro přenosný koncept,
- Handoff pro předání rozdělané práce,
- Runbook pro opakovaný proces,
- WORKLOG pro rozhodnutí a checkpointy,
- bezpečnostní potvrzení před publikací, mazáním nebo prací s citlivými údaji.

### Kritické zhodnocení PACTu

PACT není hotový univerzální software ani vědecky ověřená metodika. Je to praktický organizační rámec nad soubory, Markdownem a agentními nástroji.

Veřejná verze je navíc ve vývoji:

- současná hlavní větev je především dokumentační přehled,
- starší starter z března 2026 je zachován jako legacy verze,
- nový veřejný instalační starter zatím není vydaný,
- plnější verze je propojena s placeným programem Future AI Leader,
- k datu rešerše měl repozitář malou veřejnou adopci, takže marketingový pojem „operační systém“ je širší než zatím veřejně doložený ekosystém.

Jeho nejhodnotnější částí proto není značka PACT, ale několik zdravých principů informační architektury: jasný domov informace, zdroj pravdy, oddělení práce od znalosti, dokumentování rozhodnutí, přenositelné handoffy a bezpečnostní hranice.

## Jak PACT vztáhnout k lukasvalco.cz

PACT bychom neměli vystavit jako navigaci webu ani zveřejnit Lukášův interní systém. Může ale ovlivnit způsob, jak bude web vznikat a udržovat se.

### Projects → veřejné důkazy práce

Vybrané projekty nebo případové studie. Ne každý interní či rozpracovaný projekt patří ven. Každý zveřejněný projekt musí mít účel, Lukášův přínos, stav, důkaz a hranice zveřejnění.

### Agents → způsob práce

Na webu není potřeba katalog agentů. Relevantní je doložit, jak Lukáš převádí opakovanou práci do bezpečných postupů a jak odděluje automatizaci od lidského schválení.

### Context → veřejný profesní kontext

Jedna ověřená vrstva obsahující bio, zkušenosti, kvalifikace, profesní teze, veřejné výsledky a odkazy. Z ní mají vycházet člověkem čitelné i strojově čitelné formáty.

### Tools → pouze nástroje s konkrétním přínosem

Seznam technologií sám o sobě nemá velkou hodnotu. Nástroj zmínit tehdy, když vysvětluje schopnost, omezení, výsledek nebo přenositelnost řešení.

## Doporučený strategický směr webu

### Pracovní pozice značky

> Lukáš propojuje hlubokou praxi ve fotovoltaice a technické podpoře s AI, aby znalosti dostal rychleji k lidem — a zůstává osobně dostupný tam, kde samotná digitální odpověď nestačí.

Toto není finální slogan. Je to strategická věta, podle které lze posuzovat budoucí obsah.

### Tři současně obsluhované potřeby

1. **Člověk s konkrétním problémem ve fotovoltaice** potřebuje porozumění, důvěru a možnost spojit se s reálným člověkem.
2. **HR nebo potenciální zaměstnavatel** potřebuje rychle pochopit profesní profil a otevřít si důkazy.
3. **Odborný partner či kolega** potřebuje vidět způsob práce, hloubku zkušeností a potenciál spolupráce.

Web nemusí mít pro každé publikum oddělenou značku. Musí ale nabídnout jasnou vstupní cestu a nesmí všechny potřeby smíchat v jedné dlouhé stránce.

## Pracovní informační architektura k další iteraci

Nejde o finální sitemapu ani návrh designu.

### 1. Domů: porozumění do jedné minuty

- jedna konkrétní profesní teze,
- krátké vysvětlení kombinace FVE + systémy znalostí + AI + lidská pomoc,
- tři až pět nejsilnějších důkazů,
- jasné cesty podle záměru návštěvníka,
- jeden lidský a konkrétní kontakt.

### 2. Jak pracuji

- jak Lukáš řeší problém,
- kde používá AI,
- kde rozhoduje člověk,
- jak ověřuje kvalitu,
- jak zachází s bezpečností a citlivými daty,
- kdy je důležitý telefon, konzultace nebo návštěva na místě.

### 3. Projekty a případové studie

Každá silnější ukázka ve formátu:

1. situace nebo problém,
2. pro koho a proč to bylo důležité,
3. Lukášova role,
4. postup a klíčová rozhodnutí,
5. použití AI nebo jiných nástrojů,
6. lidská kontrola a odpovědnost,
7. výsledek či ověřitelný signál,
8. poučení a současný stav.

### 4. Profesní profil / pro HR

- stručné profesní shrnutí,
- hlavní kompetence s odkazy na důkazy,
- vybrané zkušenosti místo pouhé chronologie,
- kariérní příběh „aktivně přestavuji vlastní roli“,
- kvalifikace a certifikace,
- typ prostředí a problémů, kde Lukáš přináší největší hodnotu,
- možnost stáhnout nebo otevřít stručnou strukturovanou verzi.

### 5. Znalosti a obsah

- články založené na skutečné praxi,
- vysvětlení FVE pro běžné lidi,
- odbornější poznatky pro kolegy,
- popsané experimenty s AI ve fotovoltaice,
- transparentní stav: experiment, ověřený postup, názor nebo aktualizovaný zdroj.

### 6. O mně

Lidský příběh, hodnoty a motivace. Nemá opakovat kariérní profil. Má vysvětlit, proč Lukáše baví technická podpora, předávání znalostí a osobní pomoc.

### 7. Kontakt

Ne pouze formulář. Má říci:

- s čím má smysl se ozvat,
- jaký kontakt Lukáš preferuje,
- co lze řešit digitálně,
- kdy může dávat smysl telefon nebo osobní setkání.

## Doporučený model důkazu

Každé důležité tvrzení by mělo mít jednu z následujících opor:

- **ověřená kvalifikace:** certifikát nebo veřejně popsatelná zkušenost,
- **artefakt:** aplikace, kalkulátor, dokumentace, článek, kurz nebo veřejný repozitář,
- **případová studie:** anonymizovaná a schválená situace z praxe,
- **výsledek:** čas, kvalita, snížení chyb, počet uživatelů nebo jiný kontextualizovaný dopad,
- **reference:** konkrétní člověk a vztah k výsledku, pouze se souhlasem,
- **procesní důkaz:** transparentní popis postupu, rozhodnutí a kontroly.

Pokud nelze tvrzení veřejně doložit kvůli důvěrnosti zaměstnavatele, má být formulováno opatrně a bez vymyšlených metrik.

### Stav a čerstvost odborného obsahu

Ve fotovoltaice nestačí pouze datum publikace. U technických článků, kalkulaček a pomůcek má být podle potřeby uvedeno:

- datum poslední odborné kontroly,
- použité zdroje,
- rozsah platnosti a předpoklady,
- autor nebo odborný revizor,
- stav `experiment`, `prototyp`, `pilot`, `ověřeno` nebo `historický obsah`,
- upozornění, pokud se mohly změnit technologie, legislativa, dotační pravidla či metodika.

Tím se odliší rychlý AI experiment od řešení, na které se lze profesionálně spolehnout.

## Napětí, která musí web komunikovat poctivě

Dřímalkův obsah obsahuje několik užitečných protikladů. Nemáme vybrat pouze líbivější polovinu:

- **AI šetří čas × AI zvyšuje kognitivní zátěž:** rychlejší tvorba může vést k více projektům a rozhodování. Hodnotou je také prioritizace a schopnost zastavit.
- **Generalista získává sílu × doménová expertiza je cennější:** vhodná pozice je široký realizátor s hlubokým odborným jádrem, ne člověk, který údajně zvládne všechno.
- **Rychlost experimentu × produkční spolehlivost:** prototyp nebo vibe-coded nástroj není automaticky bezpečné a ověřené řešení.
- **Velkou část udělá AI × člověk odpovídá za výsledek:** nejmenší časový podíl člověka může obsahovat nejdůležitější práci — směr, kritéria, kontrolu a odpovědnost.
- **Viditelný osobní marketing × nedůvěra k naleštěným AI výstupům:** prezentace musí být propojena se zdroji, artefakty a obhajitelnými rozhodnutími.
- **Rychlé učení × první pokusy čas neušetří:** kompetenci dokládá vývoj, iterace a poučení, nikoli obraz okamžité bezchybnosti.

## Obsah pro člověka i AI

Z Filipova webu má smysl převzít princip více forem stejného zdroje pravdy:

- rychlá webová stránka pro člověka,
- hlubší podklady a odkazy,
- kvalitní HTML s jasnými nadpisy a sémantikou,
- strukturovaná data,
- veřejný `llms.txt` jako rozcestník,
- případně Markdown verze vybraných profesních stránek a případových studií.

Strojová vrstva nesmí zveřejnit nic, co není určeno lidem. Nemá ani obsahovat jiné nebo přehnanější tvrzení než běžný web.

## Co je už na současném webu dobrý základ

Současný web již obsahuje několik správných směrů:

- jasnou doménovou identitu ve fotovoltaice,
- formulaci AI jako násobiče, nikoli náhrady,
- důraz na pomoc konkrétním lidem,
- proaktivitu a průběžné vzdělávání,
- lidský příběh a ochotu komunikovat přímo,
- projekty, certifikace a články jako možné zdroje důkazů.

V2 proto nemusí popřít celý současný obsah. Potřebuje jej zpřesnit, hierarchizovat a převést z převážně deklarativní prezentace na **důkazní a dlouhodobě udržovaný profesní systém**.

## Největší mezery současného webu vůči tomuto směru

- Úvodní tvrzení nejsou dostatečně propojena s konkrétními důkazy.
- Kariérní stránka je hlavně chronologie, nikoli mapa schopností a výsledků.
- Projekty jsou prezentovány především jako odkazy a stav „ve výstavbě“, ne jako případové studie.
- AI vrstva je zatím spíše deklarovaná než doložená konkrétní prací a rozdělením odpovědnosti.
- Není zcela jasně oddělená cesta pro běžného člověka, HR a odborného partnera.
- Chybí veřejná, strojově čitelná profesní vrstva odvozená ze stejného zdroje pravdy.
- Ilustrační prezentace může být příjemná, ale pro důvěru bude potřeba také více autentických artefaktů, reálných fotografií nebo ukázek práce.

## Co z Filipovy prezentace nepřebírat

### 1. Nepřebírat jeho identitu AI evangelisty

Filip prodává vzdělávání a transformaci práce s AI. Lukášova důvěryhodnost stojí primárně na fotovoltaice, technické podpoře, předávání znalostí a lidské pomoci.

### 2. Nezaměnit množství za důkaz

Velká čísla a dlouhé seznamy referencí fungují pouze s kontextem. Pro Lukáše budou silnější tři dobře doložené případy než dvacet povrchních karet.

### 3. Nepoužívat FOMO jako hlavní motivaci

Část Filipova obsahu pracuje s rychlostí změn, rozevírajícími se nůžkami a strachem, že člověku ujede vlak. Pro Lukášovu značku se více hodí klidná připravenost, spolehlivost a praktická pomoc.

### 4. Nekopírovat angloamerický sebepropagační tón

Silná teze je užitečná. Přehnané superlativy nebo tvrzení o revoluci by však mohly oslabit civilní a důvěryhodný charakter Lukášovy komunikace.

### 5. Nevystavovat interní druhý mozek

Veřejný web má být kurátorovaný výstup. Interní kontext, rodinné informace, pracovní podklady, komunikace a data zaměstnavatele musí zůstat oddělené.

### 6. Nedělat z nástrojů hlavní obsah

Modely a aplikace rychle zastarávají. Web má stavět na problémech, principech, výsledcích a odpovědnosti.

### 7. Nepřidávat AI funkce bez skutečného užitku

Chatbot, tlačítko „Open in AI“ nebo interaktivní prezentace mají smysl jen tehdy, když návštěvníkovi prokazatelně pomohou. Nemají být povinným symbolem modernosti.

## Dlouhodobý obsahový systém

Web by měl fungovat jako publikovaná vrstva jednoho zdroje pravdy. Obsah má pokud možno vznikat jako vedlejší produkt skutečné odborné práce, ne jako samostatná továrna na obecné články o AI:

1. Reálný dotaz, technický případ nebo experiment vytvoří interní poznatek.
2. Zkontroluje se důvěrnost, původ, datum a možnost zveřejnění.
3. Rozhodne se, zda jde o stabilní znalost, aktuální projektový stav, názor, experiment nebo veřejný důkaz.
4. Z jednoho schváleného podkladu vznikne webová stránka, stručná karta a případně strojově čitelná varianta.
5. Zastaralé údaje se označí nebo aktualizují; nevytvářejí se paralelní kopie pravdy.

Tím lze princip PACTu využít bez toho, aby se PACT stal produktem nebo tématem webu.

## Pracovní návrh hlavního odlišení

Ne jako finální slogan, ale jako rozhodovací filtr:

> **AI zpřístupní odpověď. Lukáš dodá kontext, odborný úsudek, odpovědnost a lidský kontakt.**

Druhá vrstva:

> **Nečeká, jak AI změní jeho práci. Aktivně s ní přestavuje způsob, jak se odborné znalosti dostávají k lidem.**

Tento směr spojuje oba dříve probrané články, širší Dřímalkovu tvorbu, PACT i Lukášovu vlastní reflexi.

## Co ještě potřebujeme ověřit před finální podobou webu

- Jaké jsou tři až pět nejsilnějších veřejně použitelných důkazů práce?
- Co lze zveřejnit z pracovního kontextu bez porušení důvěrnosti a pravidel zaměstnavatele?
- Má být hlavní prioritou běžný člověk s FVE problémem, budoucí profesní příležitost, nebo vyvážená kombinace?
- Jaké typy osobní pomoci chce Lukáš skutečně dlouhodobě nabízet?
- Které projekty jsou už připravené jako důkaz a které zatím zůstanou laboratoří?
- Které výsledky lze měřit nebo doložit bez marketingového přehánění?
- Jak má vypadat hranice mezi osobním webem, Slunorou, případnými službami a profesním profilem?

Dokud tyto otázky neprojdou dalšími zdroji a společnou diskuzí, dokument není finální specifikací webu.

## Hlavní zdroje

- https://drimalka.com/
- https://drimalka.com/o-mne
- https://drimalka.com/future-ai-leader
- https://drimalka.com/pribehy
- https://drimalka.com/inspirace-zdarma
- https://drimalka.com/inspirace-zdarma/ai-native-work
- https://drimalka.com/inspirace-zdarma/co-jsou-ai-agenti
- https://drimalka.com/inspirace-zdarma/ai-first-hiring-aibility-anthropic
- https://drimalka.com/inspirace-zdarma/matej-stavi-ai-ktera-mu-mozna-vezme-praci
- https://drimalka.com/inspirace-zdarma/what-good-looks-like
- https://drimalka.com/inspirace-zdarma/superschopnosti-budoucnosti
- https://drimalka.com/inspirace-zdarma/superschopnosti-tvurci
- https://drimalka.com/inspirace-zdarma/paralelni-svety
- https://drimalka.com/inspirace-zdarma/sedm-ai-trendu
- https://drimalka.com/inspirace-zdarma/martin-jan-rosa
- https://drimalka.com/inspirace-zdarma/nejdulezitejsi-princip-ai
- https://github.com/nowork-ai/pact-starter
- https://drimalka.vercel.app/anthropic/
