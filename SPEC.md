# MARGINALIA
### A design specification for the portfolio of Fareess — health information × design × operations

> **Design thesis:** Not a machine pretending to be alive — a document that actually is.
> Health information science is the discipline of *records*: keeping them, structuring them,
> making them legible and humane. So the portfolio is not a dashboard. It is a beautifully
> kept, living, annotated record — typeset like a scientific monograph, annotated like a
> designer's notebook, and honest like a lab report.

---

## 0. The teardown — what "Precision Canvas" got right and wrong

### Kill list

| Element | Verdict | Why |
|---|---|---|
| `SYS_STATUS: ACTIVE` + pulsing green dot | ❌ Kill | The most cloned dev-portfolio trope of 2023–2025. Reads as template, not taste. |
| Live UTC ticking clock | ❌ Kill | Decoration pretending to be data. Signals nothing about her. |
| `[STATUS: PROTOTYPED]` telemetry tags | ❌ Kill | Fake system states. Health-data people are exactly the audience that notices fake data. |
| Crosshair / magnetic cursor | ❌ Kill | Awwwards gimmick. Hurts usability, screams 2023, adds JS weight for negative value. |
| "Laser barcode sweep" hover | 🔁 Replace | Right instinct (a marking gesture), wrong genre. Becomes the **eosin stain highlight** (§4.2). |
| Zinc / green-500 / sky-500 palette | ❌ Kill | This is the default Tailwind/shadcn palette. The opposite of curated. |
| Stark `#FAFAFA` white | 🔁 Replace | "Sterile" is the biotech cliché from the *outside*. Warm paper is what considered documents are printed on. |
| Inter for display | 🔁 Replace | Inter is the system font of the entire internet now. Display type is where the editorial voice lives. |
| Mono for real data, dates, figure labels | ✅ Keep | Correct — but *only* for actual data. Mono everywhere is the terminal cliché. |
| Single-folder markdown architecture | ✅ Keep & upgrade | Genuinely right. Formalized in §7 with a validated schema. |
| Grid discipline, restraint, no stock graphics | ✅ Keep | The bones were good. The costume was wrong. |
| Real metrics on cards | ✅ Keep & elevate | Becomes a site-wide constitution: **every number on this site is real** (§1). |

### The deeper problem
Precision Canvas positioned her as a generic systems engineer. She is not one, and she doesn't
need to fake it. Her actual, rare combination: **Health Information Science + CS double degree,
a founder whose brand was featured in British Vogue, a product designer, and a community
operations lead.** The motif must let a glucose-monitoring prototype, a jewelry brand's
analytics, and a hackathon design system sit side-by-side without genre clash. A *document*
does that naturally — everything becomes a case file in one archive. A fake terminal cannot.

---

## 1. The constitution (non-negotiable principles)

1. **Every number on this site is real.** Dates come from the work. "Last revised" comes from
   git. Word counts are computed at build. Metrics in case studies cite their basis. If a
   result was qualitative, it is written qualitatively — never inflated into a fake percentage.
   This principle *is* the portfolio's argument for hiring a data analyst.
2. **Ornament must be information.** No decorative graphics. The only "art" on the site — the
   specimen plates (§5) — is generated deterministically from each project's real metadata.
3. **The document is the metaphor, carried completely.** Section marks (§), figure numbers,
   plates, footnotes, marginalia, an abstract on every study, a colophon. Half-committed
   metaphors read as theme; fully-committed ones read as a world.
4. **Calm motion.** Things settle; nothing bounces, spins, or loops forever. Motion confirms,
   it never performs. `prefers-reduced-motion` is honored everywhere.
5. **Biotech-literate, not biotech-costumed.** No DNA helixes, cells, heartbeats, molecules.
   The bio references are for people who know: the stain palette, the plate numbering, the
   paper anatomy of a case study. Everyone else just sees an unusually elegant editorial site.
6. **Fast is part of sleek.** Static-first, near-zero JS, Lighthouse 100s. A performance
   budget is a design decision (§10).

---

## 2. Palette — "H&E" (Haematoxylin & Eosin)

Borrowed from histology staining — the violet and pink of looking closely at living systems.
To a biotech reviewer it's a knowing wink; to everyone else it's simply a chic, unusual
editorial palette. Two stains only. Discipline is the aesthetic.

### Light mode — "Paper" (default)

| Token | Value | Use |
|---|---|---|
| `--paper` | `#FBFAF6` | Page background. Warm ivory — considered, not sterile. |
| `--paper-raised` | `#FFFFFF` | Cards, popovers, code-block chrome. |
| `--ink` | `#1A1815` | Primary text. Warm near-black (never pure `#000`). |
| `--ink-2` | `#6E6A62` | Secondary text: captions, metadata, sidenotes. |
| `--ink-3` | `#A6A199` | Tertiary: figure labels, disabled, hairline icons. |
| `--rule` | `#E8E5DD` | Hairline borders, 1px. The mechanical-drawing line, kept. |
| `--haematoxylin` | `#4F46A3` | The primary stain. Links, active states, focus ring, key data ink. |
| `--haematoxylin-deep` | `#3B3480` | Link hover, pressed states. |
| `--eosin` | `#F3C6CF` | The counter-stain. Highlight sweeps, text selection, marks. **Background-only, never text.** |
| `--eosin-deep` | `#C4677D` | Rare small accents where eosin needs to be legible (e.g., a "new" mark). |

### Dark mode — "Slide" (offered, not default)

Named for the glass slide: the same specimens, backlit.

| Token | Value |
|---|---|
| `--paper` | `#141311` |
| `--paper-raised` | `#1D1B18` |
| `--ink` | `#ECE9E2` |
| `--ink-2` | `#9B968D` |
| `--rule` | `#2A2823` |
| `--haematoxylin` | `#8D85E8` |
| `--eosin` | `#8E4F60` (selection bg) / `#E4A5B4` (accent) |

### Rules of use
- Haematoxylin is **ink**, not paint: text, strokes, focus rings, small fills. Never large
  background washes.
- Eosin appears only as a *marking gesture* — selection, highlight sweep, margin flags. If
  eosin exceeds ~2% of any viewport, something is wrong.
- `::selection { background: var(--eosin); color: var(--ink); }` — site-wide. Selecting text
  literally stains it. This is the cheapest, most-noticed delight on the whole site.
- Contrast: `--ink` on `--paper` ≈ 15:1; `--haematoxylin` on `--paper` ≈ 7.5:1. All text
  combinations must pass WCAG AA; body text passes AAA.

---

## 3. Typography — "The Typeset Record"

Three voices, strictly cast:

| Voice | Face | Role | Source |
|---|---|---|---|
| **Display** | **Fraunces** (variable: optical size + weight + "WONK" axis) | H1/H2, the cover headline, plate titles. The editorial soul. | Google Fonts, free, self-hosted |
| **Text & UI** | **Switzer** | Body, navigation, buttons, captions prose. Neutral, contemporary grotesk — *not* Inter. | Fontshare, free, self-hosted |
| **Data** | **IBM Plex Mono** | Real data only: dates, figure labels, metrics, code, file names. | Google Fonts, free, self-hosted |

(If a budget ever appears: Tiempos Headline / GT Sectra for display, Söhne for text. The
free stack above is ~92% of the effect.)

### Scale & rules
- Modular scale 1.25, base 17px/1.6. Body measure **max 66ch** — the manuscript column.
- Display set tight: `letter-spacing: -0.022em`, Fraunces optical size high, weight 560–620.
  On the cover headline only, ease the WONK axis in at `wght > 600` for a single word — one
  drop of personality, never more.
- Mono always small-caps-adjacent: `font-size: 0.8125rem; letter-spacing: 0.04em;
  font-feature-settings: "zero" 1;` (slashed zero — a data person's tell).
- Numerals: `font-variant-numeric: tabular-nums` anywhere numbers align (tables, metrics,
  the archive index).
- Section furniture is a fixed idiom: `§ 02 · WORK` — section mark in mono `--ink-3`,
  never decorated further.

---

## 4. The interaction language — "Annotation, not simulation"

Every interactive behavior is a gesture a careful reader makes on a document. This is the
no-photos strategy: the *reading experience itself* is the spectacle.

### 4.1 Underlines that draw
Links carry a 1px underline that draws left→right on hover (180ms, `cubic-bezier(0.2,0,0,1)`),
ink-colored, offset 3px. External links get a mono `↗` glyph. No color-swap-only links, ever.

### 4.2 The eosin stain sweep *(signature interaction)*
Hovering a project title or index row sweeps a soft eosin highlight across the text,
left→right, 240ms — a highlighter pass over a manuscript line, replacing the "laser barcode"
idea with a gesture native to the motif. Implementation: `background-image:
linear-gradient(var(--eosin), var(--eosin))` with `background-size` animated 0%→100%;
zero JS.

### 4.3 Marginalia *(signature element)*
Case studies use Tufte-style sidenotes. Small numbered marks in the text (`◦¹` in mono,
haematoxylin); the note sits in the right margin rail on desktop and "inks in" (opacity +
2px rise, 200ms) when its mark is hovered or scrolled into range. On mobile, tapping the
mark expands the note inline. Sidenotes carry the voice — asides, honest caveats, wit.
This is where personality lives without a single photo.

### 4.4 Figure discipline
Every visual artifact is numbered and captioned: `PLATE III` / `FIG. 2.1 — Auth flow, revised`
in mono `--ink-2`, hairline rule above the caption. Consistency here is what makes the whole
site feel *curated* rather than decorated.

### 4.5 The plates develop *(signature load animation)*
Specimen plates (§5) don't fade in — they **develop**, like a stain spreading through tissue:
elements appear in a radial stagger from a seed point (SVG opacity stagger, 25ms steps,
600ms total, ease-out). Page text then rises 8px and settles. Under
`prefers-reduced-motion`, everything appears instantly at full opacity.

### 4.6 Reading rule
On case studies, a 1px haematoxylin rule in the left margin fills top→bottom with scroll
progress — a burette reading, not a progress bar. Margin-thin, ignorable, precise.

### 4.7 The grid reveal *(easter egg)*
Press `G`: the baseline grid, column edges, and margin rails fade in as faint ruled lines —
graph paper under the manuscript. Press again to dismiss. Costs ~15 lines of code; wins the
heart of every design-literate reviewer who finds it. (Discoverable via the colophon.)

### 4.8 The index *(keyboard command)*
Press `/` or `⌘K`: a small typeset palette — "INDEX" — for jumping to any section or study.
Custom-built (~2KB), styled as a floating card on `--paper-raised` with hairline rules. Not
a cmdk clone with icons; a table of contents that appears.

### 4.9 Footnote popovers
True footnotes in case studies render at document end *and* preview in a small hover-card
popover at the reference mark. HTML `<sup>` + a native popover — cheap, delightful, on-motif.

### 4.11 The Living Field *(v2 — homepage signature)*
Beneath the cover headline sits a full-width **live specimen field**: a canvas of ink dots
seeded from today's date (the caption says so — honesty preserved). Moving the pointer
through it *stains* it — dots near the cursor displace gently and take up haematoxylin,
then settle and fade back as the stain washes out. Clicking re-seeds the field. It is the
site's handshake: the first thing a visitor touches proves the whole motif is alive.
Reduced-motion renders it as a static plate.

### 4.12 The Loupe *(v2 — case-study signature)*
Hovering a case study's hero plate summons a circular **magnifying loupe** that follows
the cursor, showing the plate's pattern at 2.2×. Examining the specimen — literally. Pure
CSS transform on a cloned SVG; ~30 lines of JS.

### 4.13 The stain-drop theme toggle *(v2)*
Switching Paper ↔ Slide mode is a **circular stain reveal**: the new mode spreads from the
toggle button outward like a drop of stain hitting glass (View Transitions API,
`clip-path: circle()`; instant swap under reduced motion or older browsers).

### 4.14 Archive with live margin previews *(v2)*
On `/work`, hovering any index row develops that project's plate in a sticky margin rail —
the archive behaves like flipping through a specimen tray.

### 4.15 Seeded 404 *(v2)*
The 404 plate is generated client-side from the *bad URL itself* — every mistyped path
produces a unique misfiled specimen.

### 4.10 What is deliberately absent
Custom cursors. Parallax. Scroll-jacking. Preloaders. Marquees. Sound. Chat widgets.
Infinite anything. The restraint is legible and is itself the flex.

---

## 5. Specimen plates — the no-photo strategy, solved honestly

Each project gets a **plate**: an abstract generative SVG composition derived
*deterministically* from the project's real metadata. Hash the frontmatter
(`title + dates + tags`) → seed a PRNG → generate the composition. Same project, same plate,
forever; every project unique. The hero images are literally *visualizations of the work's
metadata* — ornament that is information (Constitution §1.2).

### Algorithm sketch (build-time, inline SVG, no canvas, no runtime JS)
```
seed        = fnv1a(slug + startDate + tags.join(","))
rng         = mulberry32(seed)
family      = tags → visual family:
              design-led   → contour field (smooth quadratic isolines)
              data-led     → dot lattice (grid of circles, radius ∝ rng, sparse dropout)
              ops/community→ network mesh (poisson-disc points, short edges by proximity)
palette     = ink dots on paper; 8–12% of elements stained haematoxylin;
              exactly one element eosin-marked (the "finding")
density     = mapped from project duration (months → point count, clamped)
composition = plate margin 12%, hairline frame, caption slot beneath:
              "PLATE IV — seeded from metadata · n=340"
```
The caption admits the trick — `seeded from metadata` — because honesty is the brand.

### Where plates appear
- Homepage TOC: 64px thumbnails beside each entry, developing on first scroll-into-view.
- Archive (`/work`): hover a row → its plate previews in the fixed margin rail.
- Case study: full-width plate as the hero, `PLATE n` caption.
- OG/social images: the plate + title, generated at build (satori or astro-og). Even her
  link previews in a recruiter's Slack look designed.

---

## 6. Information architecture & page-by-page spec

```
/            Cover & Table of Contents
/work        The Archive (full index)
/work/[slug] Case Study
/about       Author's Note
/colophon    Colophon
/resume      Typeset résumé (HTML + print/PDF)
/404         "Specimen not found"
```

### 6.1 `/` — Cover & Table of Contents *(the novel move)*
No hero-and-card-grid. The homepage **is a beautifully typeset cover + table of contents** —
because a great TOC is exactly what a health-information/ops candidate should be judged on.

Anatomy, top to bottom:
1. **Running header** (all pages): name-mark `FAREESS` (mono, letterspaced) · left; nav
   `Work · About · Colophon · Résumé` · right; 1px `--rule` beneath. Sticky, backdrop-blurred
   on scroll.
2. **Cover block**: Fraunces display, ~clamp(2.6rem, 7vw, 5.2rem):
   > *Health information, made legible.*
   Sub-line, Switzer, `--ink-2`, one sentence positioning (see §9 for options). Below, a
   single mono metadata line — real data only:
   `B.Sc. HEALTH INFORMATION SCIENCE + CS · UVIC '27 · VICTORIA, BC`
3. **Table of contents**: numbered entries, each a full-bleed row with hairline rules:
   ```
   01   Glucose Monitoring Prototype        Product design · Health informatics   2024   →
   02   Hush Jewels                          Founder · Analytics · Operations      2020–  →
   03   WECS Community Operations            Events · Ops · Community              2024–  →
   04   Black Wings Hackathon                Design systems                        2023   →
   ```
   Number in mono `--ink-3`; title Fraunces text-size; tags mono `--ink-2`; plate thumbnail
   develops in at left on scroll. Hover: eosin sweep across the title + row's `→` translates
   3px. Entire row is the link target.
4. **Brief author's note**: 2–3 sentences, serif, ending with an inline link to `/about`.
5. **Footer** (all pages, all real data):
   `Last revised 2026-07-02 (git) · 6,412 words · Set in Fraunces, Switzer & Plex Mono · Victoria, BC`
   plus links: GitHub · LinkedIn · Email · RSS.

### 6.2 `/work` — The Archive
A dense, sortable index table of *everything* (case studies + linked-only projects), tabular
numerals, mono metadata. Filter by tag as typeset toggles (`[ all ]  design  data  ops`),
no dropdowns. Rows with case studies link internally; link-only projects (small GitHub
repos) point straight out with `↗` — this satisfies "showcase case studies OR link to
projects" in one surface. Fixed right margin rail previews the hovered row's plate.

### 6.3 `/work/[slug]` — Case Study *(the core artifact)*
Layout: manuscript column (66ch) + right margin rail (sidenotes, on ≥1100px).

Fixed anatomy — the paper structure a health-info audience trusts instinctively:
1. **Plate** (full-width hero, develops in) + `PLATE n` caption.
2. **Title block**: Fraunces title; mono metadata grid — `ROLE / TIMEFRAME / ORG / TOOLS /
   LINKS` — hairline-ruled like a specimen label.
3. **Abstract**: 3–4 sentence summary in larger serif, eosin-ruled left border 2px. A
   recruiter who reads only this still gets the whole story.
4. **Context** — the problem, the stakes, who it was for.
5. **Constraints** — always present. Ops and clinical people fall in love with candidates
   who name constraints honestly.
6. **Method** — what she actually did; figures numbered; process shown.
7. **Findings / Outcome** — `<Stat>` blocks for real numbers *with their basis stated*
   ("measured by…", "n=…", or explicitly "qualitative: …"). The honesty is the flex.
8. **Reflection** — 2–3 sentences of genuine hindsight. Sidenotes welcome throughout.
9. **Bottom nav**: `← PLATE II · Hush Jewels    PLATE IV · Black Wings →`

Markdown rendering requirements: Shiki code highlighting with a custom H&E theme
(haematoxylin keywords, eosin-deep strings, ink text on `--paper-raised`); styled tables,
blockquotes (hairline left rule, serif italic), task lists; `<Figure>`, `<Sidenote>`,
`<Stat>`, `<Callout kind="method|finding|constraint">`, `<Timeline>` MDX components.
**A print stylesheet that makes every study print as a beautiful typeset document** —
margins set, rail notes become footnotes, ink on white. Health orgs print things. A small
`PRINT THIS STUDY` mono link in the title block. Quietly devastating in interviews.

### 6.4 `/about` — Author's Note
Prose-first, serif, warm, first person. The narrative spine: *jewelry founder → taught
herself analytics to run it → chose health information science to do the same for systems
that matter more.* One margin-rail block of real facts (mono): degree, expected 2027,
Honour Roll 2020–23, Alexander Rutherford Scholarship, British Vogue feature, ACSA /
ColorStack / Rewriting the Code. The Vogue feature is *rare social proof* — one elegant
sidenote, not a banner.

### 6.5 `/colophon`
The intentionality page — a page about how the record is kept: type choices and why, the
H&E palette story, the plate algorithm (with her actual seed values), the honesty
constitution, real build stats (build time, total page weight, JS bytes shipped, commit
hash), and a note that the grid is visible on `G`. Recruiters rarely see a colophon.
Designers and engineers *never* forget one.

### 6.6 `/resume`
The résumé retype-set in the site's system (not an embedded PDF) + a `DOWNLOAD PDF` link
(the print stylesheet *is* the PDF — one source of truth).

### 6.7 `/404`
`SPECIMEN NOT FOUND` in mono; one line — "This record may have been misfiled." — a single
scattered-dots plate seeded from the bad URL, and a link to the Index. Delight in failure
states is the cheapest signal of care.

---

## 7. Content architecture — one folder, validated

Astro **content collections**: every project is one `.mdx` file in a single folder, schema
enforced with zod at build time (a malformed record fails the build — very on-brand).

```
src/content/work/
  glucose-monitoring.mdx
  hush-jewels.mdx
  wecs-community-ops.mdx
  black-wings.mdx
  frozen-guessing-game.mdx
  planted-souls.mdx
```

### Frontmatter schema
```yaml
---
title: "Glucose Monitoring Prototype"
summary: >
  A prototype for humane glucose tracking: auth flows and data
  visualization designed to clinical-accessibility standards.
org: "Independent / coursework"
role: "Product designer"
dates: { start: 2024-01, end: 2024-04 }     # real dates, drive the plate + sorting
tags: [design, health-informatics]           # drive plate family + archive filters
tools: [Figma, HCI, Data flows]
links:
  github: "https://github.com/..."
  figma: "https://..."
kind: study            # "study" = full case page · "link" = archive row only
featured: true         # appears in homepage TOC
order: 1
outcomes:
  - metric: "Navigation clarity"
    value: "Qualitative"
    basis: "5 moderated walkthroughs; all users completed core flow unaided"
draft: false
---
```
Schema rules encode the constitution: `outcomes[].basis` is **required** whenever
`value` is quantitative. No basis, no build.

`kind: link` entries need only frontmatter — they render as archive rows pointing at
GitHub. Adding a project = dropping one file in one folder. Everything else (TOC, archive,
plate, OG image, RSS) derives automatically.

---

## 8. Motion doctrine (complete)

| Property | Rule |
|---|---|
| Durations | 120ms (state), 180–240ms (hover/reveal), ≤600ms (plate development only) |
| Easing | `cubic-bezier(0.2, 0, 0, 1)` — fast out, settle in. Nothing bounces. |
| Travel | 8px maximum. Elements settle into place; they never fly. |
| Stagger | 25–40ms between siblings; max 8 staggered items. |
| Scroll | Native. No smooth-scroll hijack, no parallax, no pinning. |
| Loops | None. Nothing animates forever. (No pulsing dots.) |
| Reduced motion | `prefers-reduced-motion: reduce` → opacity-only, durations →0. Site fully equivalent. |
| Implementation | CSS transitions + one ~30-line IntersectionObserver for reveals. No motion library. |

---

## 9. Voice & positioning

### Cover headline — choose one
1. **"Health information, made legible."** — the strongest: her field, her skill, six words.
2. "Clear records. Humane systems." — punchier, slightly more ops.
3. "I make systems people can trust with their health." — warmer, first-person.

### Sub-line
> Designer and analyst working where health data meets the people it belongs to —
> B.Sc. Health Information Science & Computer Science, UVic.

### Voice rules
- First person, plain, warm, precise. Sidenotes may be witty; body text never jokes twice
  per page.
- Verbs of a practitioner: *structured, traced, reconciled, typeset, measured, ran.*
- Never "passionate," "results-driven," "detail-oriented" — the site must *demonstrate*
  those or the words are false.
- Numbers always carry their basis. Qualitative results stated proudly as qualitative.

---

## 10. Technical specification

| Concern | Decision |
|---|---|
| Framework | **Astro 5** + MDX. Content collections = the single-folder architecture, natively. Ships ~0 JS by default. |
| Styling | Vanilla CSS with custom properties (the tokens in §2) or Tailwind v4 mapped to those tokens. No component library. |
| Fonts | Self-hosted (`@fontsource` / Fontshare files), `font-display: swap`, variable where available, subset latin. ≤160KB total. |
| Code blocks | Shiki, custom H&E theme (build-time — zero runtime cost). |
| Plates | Build-time SVG generation (one ~150-line util: fnv1a + mulberry32 + three family renderers). Inlined into HTML. |
| OG images | Per-page at build (plate + title), via `satori` or `astro-og-canvas`. |
| Interactivity | `/` index palette + sidenote toggles as tiny vanilla islands. **JS budget: <30KB total.** |
| Search/analytics | None, or Plausible/Fathom only (privacy-respecting — on-brand for health). No cookie banner needed. |
| Hosting | Vercel or Netlify; custom domain (`fareess.com` / `.ca`). |
| Perf budget | Lighthouse 100/100/100/100 · LCP <1.2s · CLS 0 · page weight <350KB with fonts. |
| A11y | WCAG AA minimum (body AAA); visible haematoxylin focus ring (2px, offset 2px); semantic landmarks; skip-link; full keyboard nav; plates get meaningful `aria-label`s ("Generative plate for Hush Jewels, seeded from project metadata"). Accessibility literacy is itself a health-industry hiring signal — mention it in the colophon. |
| RSS | Yes — `/rss.xml` from the same collection. The record is subscribable. |

---

## 11. Build order

**Phase 0 — Foundation.** Astro scaffold, tokens, fonts, layout shell (header/footer/rules),
content collection + schema, one seeded project file.
**Phase 1 — The record.** Case-study template with full anatomy + MDX components; homepage
cover & TOC; archive; about; résumé page.
**Phase 2 — The stain.** Plate generator (three families) + development animation; eosin
sweep; selection color; sidenotes; underline draws; reading rule; OG images.
**Phase 3 — The details.** Colophon with real build stats; print stylesheet; footnote
popovers; `/` index palette; `G` grid reveal; 404; RSS; dark "Slide" mode.

Each phase ships a complete, presentable site. Phase 1 alone already beats 95% of
candidate portfolios; Phases 2–3 are what make it *unforgettable*.

---

## 12. Why this wins, per audience

- **Biotech / health informatics:** The paper anatomy (abstract, method, constraints,
  findings), the honesty constitution, the H&E palette, accessibility rigor, and a print
  stylesheet — this candidate thinks in records, evidence, and standards. Nothing is
  cosplay; everything is literate.
- **Data / analyst roles:** Every number carries its basis; the archive is a clean dataset;
  even the artwork is deterministic data visualization. The portfolio *is* a data-integrity
  argument.
- **Design / startups:** Fraunces + Switzer, hairline discipline, eosin micro-interactions,
  a colophon, an easter egg — unmistakable taste, executed with restraint.
- **Operations:** One folder, one schema, one source of truth; builds fail on malformed
  records; résumé and PDF from a single source. The site's own operations are the exhibit.
