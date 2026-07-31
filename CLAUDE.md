# CLAUDE.md — kontext projektu a provozní řád

Technická dokumentace AstroWind frameworku je v [AGENTS.md](./AGENTS.md).
Tento soubor říká **kdo, co a proč** — přečti ho před jakoukoli prací na projektu.

---

## Vlastník a účel webu

**Lukáš Valčo** (`lukasvalco.cz`) — osobní web a znalostní platforma.

Lukáš je Senior Specialista Technické Podpory pro solární systémy (E.ON CZ),
elektrotechnik, certifikovaný Fotovoltaický Expert (ČFA) a Energetický poradce.
Pracuje v Českých Budějovicích.

**Záměr webu:** Být místem, kam lidé přijdou pro pomoc — s FV systémy, energetikou,
AI nástroji, kariérou. Ne výčet pozic a titulů, ale životní cesta člověka,
který aktivně sdílí znalosti a pomáhá druhým.

**Osobní brand:** proaktivita, otevřené sdílení know-how, empatie, odbornost.

---

## Fázový plán

### Fáze 1 — osobní hub ✅ hotovo

- Bio / O mně
- Kariéra / Timeline
- Certifikáty a vzdělání
- Kontakt
- Blog (6 článků, viz `src/data/post/`)
- Přehled služeb (konzultace, PV\*SOL simulace)

### Fáze 2 — obsah a nástroje (právě běží)

- Blog roste (témata: FV, AI, drony, osobní rozvoj, kariéra)
- Znalostní báze (Markdown, Content Collections)
- Kalkulačky a nástroje (React islands v Astro):
  - Výpočet výnosnosti virtuální baterie
  - Srovnání výkupu vs. spotřeby
  - Diagnostika výroby FVE

### Fáze 3 — digitální dvojče

- AI chatbot / poradna (Claude API nebo podobné)
- Vložen jako widget, nezávislý na Astro

---

## Technický stack

- **Framework:** Astro v6 + Tailwind CSS v4
- **Hosting:** Cloudflare Pages (auto-deploy z GitHub `main`)
- **Doména:** lukasvalco.cz (WEDOS registrace, DNS na Cloudflare)
- **Repo:** github.com/LukasValco/lukasvalco.cz
- **Lokální dev:** `npm run dev` → localhost:4321

---

## Obsah — kde ho najdeš

> ⚠️ **Atlas už osobní obsah neobsahuje.** Původní cesty (`wiki/personal/lukas-valco.md`,
> `raw/personal/certifikaty/`, `ops/personal-web.md`) zanikly při přestavbě Atlasu
> v červenci 2026. Dnešní Atlas (`D:\projects\atlas`) drží jen složky `pages/`,
> `denik/` a `sources/` — o Lukášově biografii tam není nic.

**Zdrojem pravdy o obsahu je dnes tenhle repozitář.** Konkrétně:

| Co                     | Kde v repu                                                         |
| ---------------------- | ------------------------------------------------------------------ |
| Bio, hodnoty, cesta    | `src/pages/o-mne.astro`                                            |
| Kariéra / timeline     | `src/pages/kariera.astro`                                          |
| Certifikáty (data)     | `src/pages/certifikaty.astro` (pole `expertModules`, `otherCerts`) |
| Služby                 | `src/pages/sluzby.astro`                                           |
| Blog                   | `src/data/post/`                                                   |
| SEO strukturovaná data | `src/utils/schema.ts`                                              |

**Fakta nevymýšlej.** Když něco chybí, zeptej se Lukáše — nedoplňuj z domněnek.

---

## Assety (vizuály) — průběžně doplňujeme

Assety přibývají postupně. **Pokud soubor ještě neexistuje, označ místo jako placeholder a pokračuj** — neblokuj práci.

| Asset                      | Kam patří v repu                                                      |
| -------------------------- | --------------------------------------------------------------------- |
| Fotky — portrét            | `src/assets/images/portrait/`                                         |
| Fotky — pracovní           | `src/assets/images/work/` (dron, FV panely, termovize, pracovní stůl) |
| Fotky — lifestyle          | `src/assets/images/lifestyle/` (zahrada, dům s FV, dron pro přírodu)  |
| PDF certifikáty ke stažení | `public/certifikaty/`                                                 |
| Logo ČFA                   | `public/logo-cfa.png` (Lukáš má oprávnění používat jako FV expert)    |

**Kam navigovat Lukáše s fotkami:** fotky chodí z OneDrive → uložit do příslušné podsložky `src/assets/images/{portrait,work,lifestyle}/`. PDF certifikátů → `public/certifikaty/`.

---

## Pracovní workflow

Web se upravuje třemi nástroji — všechny pracují se stejnými soubory:

- **Claude Cowork** — plánování, obsah, koordinace, generování souborů
- **Claude Code** (terminál) — větší refaktory, práce s více soubory najednou
- **Cursor** — editace souborů, inline AI návrhy

Nástroje se přepínají plynule (např. podle usage limitů). Kontext přenáší tento soubor.

### Jak nasadit změny

```bash
git add .
git commit -m "popis změny"
git push
```

Cloudflare Pages automaticky nasadí do ~60 sekund.

---

## Konvence

- **Jazyk webu:** čeština primárně, angličtina sekundárně (připravit pro obě)
- **Obsah:** nevymýšlet fakta — zdroje viz sekce „Obsah — kde ho najdeš“
- **Styl:** osobní, přístupný, odborný — žádný korporátní jazyk
- **Blog posty:** `src/data/post/RRRR-MM-DD-nazev.md` — datum v názvu je jen kvůli
  řazení, z URL ho odstraňuje `src/utils/blog.ts` (URL je `/blog/nazev`)
- **Obrázky:** `src/assets/images/`
- **Žádná angličtina v UI.** AstroWind má výchozí texty anglicky — při použití
  nového widgetu vždy zkontroluj, jestli nepropašoval „View all posts“ apod.

---

## Aktuální priorita

**Fáze 1 nasazena na lukasvalco.cz. Stav k 31. 7. 2026.**

Hotovo:

- Všechny stránky Fáze 1 + redesign (Solar Contrast paleta, hero gradient)
- Kreslené ilustrace ve všech sekcích (orientační náhrada za budoucí fotky)
- 8 PDF certifikátů ke stažení, logo ČFA, favicon, OG image
- Projekty slunora.cz a renora.cz v patičce
- SEO: JSON-LD (Person, WebSite, ProfessionalService), skip link, metadata per stránka
- Blog: 6 článků (FV, energetika, termovize, AI, kariéra) s vlastní grafikou
- Ochrana soukromí a Podmínky užití — vlastní české texty (ne demo šablony)
- Čisté URL článků bez datumového prefixu

Zbývá:

- Revize textů Lukášem (průběžně)
- Reálné fotografie místo kreslených ilustrací
- PDF certifikátu Energetického poradce (po obdržení)
- Telefonní kontakt na `/kontakt` — stránka tvrdí „telefon mám raději než e-mail“,
  ale číslo tam není
- **Doplnit dva tokeny do `src/config.yaml`** (viz sekce Analytika níže) —
  dokud jsou `null`, neměří se nic a Search Console web nezná

**Fáze 2 — obsah a nástroje** (další krok):

- Blog roste dál
- Projekty slunora.cz + renora.cz — rozšíření sekcí
- První kalkulačka (React island)

## Analytika a Search Console

Obojí je v kódu zapojené a čeká jen na token v `src/config.yaml`.
Dokud je hodnota `null` / `''`, skript se do HTML vůbec nevloží.

| Co                       | Klíč v `config.yaml`                             | Kde token vzít                                                        |
| ------------------------ | ------------------------------------------------ | --------------------------------------------------------------------- |
| Cloudflare Web Analytics | `analytics.vendors.cloudflareWebAnalytics.token` | Cloudflare dashboard → Analytics & Logs → Web Analytics → Manage site |
| Google Search Console    | `site.googleSiteVerificationId`                  | Search Console → přidat zdroj → „Předpona URL“ → ověření HTML tagem   |

**Cookieless záměrně.** Cloudflare Web Analytics neukládá cookies, takže web
nepotřebuje souhlasovou lištu. Kdyby se někdy přidalo GA4, je nutné zároveň
doprogramovat souhlas a přepsat `/privacy` — dnešní text výslovně říká,
že web cookies nepoužívá.

## Generátor ikon

Skript `scripts/generate-icons.mjs` generuje:

- `src/assets/favicons/favicon.ico` (16/32/48/64px)
- `src/assets/favicons/apple-touch-icon.png` (180×180)
- `src/assets/images/og-image.png` (1200×630, s portrétem)

Zdrojem je `src/assets/favicons/favicon.svg` + `portrait-business.png`. Spuštění:

```bash
node scripts/generate-icons.mjs
```

> Pozn.: shell na tomto Windows nepodporuje sandbox (`workspace_readwrite`) — příkazy spouštět mimo sandbox.
