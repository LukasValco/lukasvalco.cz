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

### Fáze 1 — osobní hub (právě stavíme)

- Bio / O mně
- Kariéra / Timeline
- Certifikáty a vzdělání
- Kontakt
- Blog (prázdný, infrastruktura připravená)
- Přehled služeb (konzultace, PV\*SOL simulace)

### Fáze 2 — obsah a nástroje

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

Reálný obsah pro web je v **Atlasu** (`D:\projects\atlas`):

| Co                    | Kde v Atlasu                                       |
| --------------------- | -------------------------------------------------- |
| Bio, kariéra, hodnoty | `wiki/personal/lukas-valco.md`                     |
| Certifikáty (seznam)  | `raw/personal/certifikaty/index.md`                |
| Certifikáty (PDF)     | `raw/personal/certifikaty/`                        |
| Osobní brand, záměr   | `raw/personal/2026-06-12-osobni-brand-myslenky.md` |
| Plán webu             | `ops/personal-web.md`                              |

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
- **Obsah:** vždy čerpat z Atlasu, nevymýšlet fakta
- **Styl:** osobní, přístupný, odborný — žádný korporátní jazyk
- **Blog posty:** `src/data/post/RRRR-MM-DD-nazev.md`
- **Obrázky:** `src/assets/images/`

---

## Aktuální priorita

Nahradit ukázkový obsah AstroWind za reálný obsah Lukáše Valčo.
Začínáme od `src/config.yaml` a hlavní homepage (`src/pages/index.astro`).
