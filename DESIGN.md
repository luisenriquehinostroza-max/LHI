# Vinya design language

A product guide for the marketing site. The fruit in `plates/perfect.jpg` is the brand. The page should read like software a cellar lead and an owner can use on a Tuesday, not a wine magazine and not a generic startup template.

Tokens live in `design-tokens.json`. The specimen is `design-preview.html`.

## Principles

1. **The photograph is the brand.** Color comes from that plate: cellar black, dusty grape, olive leaf. Do not introduce a second accent from a UI kit.
2. **One job on the first screen.** A producer should see the warning. An owner should see the margin. Those are the two product cards.
3. **Two jobs for type.** A book serif for the wordmark and headlines. A sans for everything you scan or click. Sentence case. Left aligned.
4. **Color means a state.** Grape is the product. Leaf and green are “this is paying.” Risk brown is “look today.” Nothing else gets a hue.
5. **Plain words.** Name the lot, the varietal, and the number. Label invented figures as Example.

## Color

Sampled from the 1280×720 plate. Dark pixels dominate the file (`#0b0906`). Grape skin sits around `#3d4651` in the body and `#7d8694` in the bloom. Leaf sits around `#757e36`. Text colors are darkened when the sample fails WCAG AA (4.5:1) for small type on paper.

| Token | Hex | Use |
| --- | --- | --- |
| `--paper` | `#f2ead8` | Page canvas. The straw cream from a working winery site, close to the plaster already in the grape plate. |
| `--paper-2` | `#e3d8c2` | Alternate bands, progress tracks. |
| `--card` | `#fffdf8` | Cards that sit on the photograph. |
| `--ink` | `#171d1a` | Body text and primary buttons. Vine black. 14.3:1 on paper. |
| `--muted` | `#5e584e` | Supporting copy. 5.9:1 on paper. |
| `--line` | `#d9cdb6` | Rules, table borders, the Example pill. |
| `--cellar` | `#171d1a` | Closing band. Same vine black as the ink. |
| `--grape` | `#3d4651` | Brand accent. Buttons on dark, marks, large UI. White type is 9.4:1. |
| `--grape-bloom` | `#7d8694` | Icons and large type on cellar only. Not small text on paper. |
| `--leaf` | `#4e5418` | Positive text and icons. 7.2:1 on paper. |
| `--leaf-fill` | `#757e36` | Fills and large marks, as sampled. Not small text (3.9:1). |
| `--risk` | `#8a4b28` | A late lot or a thin margin. 6.6:1 on card. |
| `--good` | `#1f6b3a` | A line that still pays. 6.4:1 on card. |

Primary buttons are ink on paper, or paper on cellar. Grape is the accent, used once a screen, not as a wash behind every section.

## Type

Casa Carmen’s face is Appareo Extra Light, a worn book serif. The wear is the part that fails in software: at 14px the letters break up, and a margin table becomes a costume. We keep the book voice and drop the distress.

Newsreader (open, built for screens) is the headline face. Weight 500, not Extra Light. It is used for the wordmark, page headlines, a person’s name, and the lot name on a card. Source Sans 3 is used for body, buttons, labels, tables, and numbers. Fallback for the serif is Iowan Old Style, then Georgia. Fallback for the sans is Segoe UI.

| Style | Face | Size | Weight |
| --- | --- | --- | --- |
| Display | Newsreader | `clamp(2.15rem, 4vw, 3.15rem)` | 500 |
| Section | Newsreader | `clamp(1.7rem, 3vw, 2.15rem)` | 500 |
| Lot name | Newsreader | 1.65rem | 500 |
| Title | Source Sans 3 | 1.2rem | 600 |
| Lede | Source Sans 3 | 1.2rem | 400, muted |
| Body | Source Sans 3 | 1.125rem | 400 |
| Label | Source Sans 3 | 0.8rem, uppercase, tracking `0.04em` | 700 |

Display line-height is 1.18. Body is 1.55. Headlines stay left aligned, inside about 16 characters on the first screen. Money in tables stays in the sans so the columns line up.

## Space and layout

An 8px scale: 4, 8, 12, 16, 24, 32, 48, 64, 80. Content width is 1120px. Page gutter is 20px. The layout stacks at 860px: hero, stats, modules, and the two product cards become one column.

The hero is two columns. Copy starts at the top of the column. The cards overlap the bottom of the photograph on wide screens and sit under it on small screens.

## Shape

| Token | Radius | Where |
| --- | --- | --- |
| Control | 2px | Buttons. Nearly square, like a winery site, still a product control. |
| Media | 8px | The photograph |
| Card | 10px | Product cards |
| Pill | full | The Example label only |

One shadow, and only on cards that float over the photograph: `0 10px 28px rgba(28, 25, 22, 0.12)`. Flat sections do not get shadows.

## Components

**Header.** Wordmark and one action, “Get in touch.” No links to sections of the same page.

**Button.** Ink fill, paper text, 2px radius, sans, weight 600. On the cellar band, invert it. Hover darkens the fill to `#2c3833`. Focus is a 2px ink outline, 3px outside the control.

**Product card.** White card, 1px line, 10px radius. A small uppercase label (“In the cellar” or “For the owner”) and an Example pill. One fact in the risk or good color. A caption under it in muted text.

**Table.** Full width of the card. Header row is muted, 0.8rem. Money that is healthy uses `--good`. Money that is thin uses `--risk`.

**Stat.** A number at 1.85rem / 700, then one sentence with the source named.

**Module row.** Name in a fixed column, explanation beside it, divided by hairlines. Not a card grid.

## Voice

Write the way you would brief someone in the cellar.

- “Lot 24-B is 14 days past the usual time.”
- “House red has $1.90 left after fruit, labor, and overhead.”
- “Free pilot. No cost during the pilot.”

Skip “AI,” “operating system,” “unlock,” and “revolutionize.” If a figure is not from a real cellar’s books, the card says Example.

## Motion

The hero plate is the perfect cluster until a video exists. The clip, when it lands, is that same photograph: camera locked, about six seconds, play once, hold the end. People who prefer reduced motion get the still. Do not fake rot with a color filter or a second generated photo.

## Do

- Keep the grape, leaf, and cellar colors next to each other the way they sit in the photo.
- Put the product in the first viewport: one warning, one margin table.
- Use ink for almost all text. Spend grape, leaf, and risk on a state.

## Do not

- Add a second typeface, a purple gradient, or a stock vineyard.
- Turn the header into a table of contents.
- Use `--leaf-fill` or `--grape-bloom` for small text on paper.
- Present example margins as a customer’s numbers.
