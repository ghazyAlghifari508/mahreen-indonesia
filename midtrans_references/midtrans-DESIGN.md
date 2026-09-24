# Midtrans - Style Reference
> Architectural precision and institutional trust engineered for Southeast Asian digital commerce.
**Theme:** Light with Dark Navy Structural Enclosures

The Midtrans visual language is an authoritative, high-conversion fintech design system balancing enterprise-grade security with accessible digital-native payment workflows. Its identity is anchored by a two-tone blue architecture: an institutional Deep Midnight Navy shell (`rgb(0, 40, 85)`) for navigation and high-intent hero zones, coupled with an active Cerulean Sky Blue (`rgb(0, 127, 231)`) and Royal Cobalt (`rgb(5, 79, 191)`) for operational calls to action and live system alerts. Typography is governed by the geometric clarity of the Poppins family, executing tight hierarchy controls where headline structures employ `Poppins-Bold` and `Poppins-Semibold` across calibrated display scales, paired with high-contrast Slate Navy body text (`rgb(18, 48, 73)`). Unlike generic modern SaaS templates that lean into pillowy, ultra-rounded components, Midtrans demonstrates a deliberate, severe structural duality: core transactional CTAs utilize an ultra-sharp `2px` micro-radius to communicate stability and ledger-like permanence, while feature surfaces and floating overlays utilize soft `8px` to `16px` boundaries with broad, atmospheric light diffusion. Sectional rhythm alternates rigorously between pristine White (`rgb(255, 255, 255)`), Ice Blue tint (`rgb(247, 252, 255)`), and Cool Mist grey-blue (`rgb(237, 244, 249)`), establishing clear transactional zones without heavy dividing borders.

---

## Tokens - Colors

| Name | Value | Token | Role |
| :--- | :--- | :--- | :--- |
| **Midnight Navy** | `rgb(0, 40, 85)` (`#002855`) | `--color-brand-midnight` | Structural headers, dark hero containers, primary authority anchor |
| **Royal Cobalt** | `rgb(5, 79, 191)` (`#054FBF`) | `--color-action-primary` | Primary action CTAs, key interactive states, border highlights |
| **Electric Azure** | `rgb(0, 127, 231)` (`#007FE7`) | `--color-brand-azure` | Update banners, notification strips, active accents, product branding |
| **Slate Navy** | `rgb(18, 48, 73)` (`#123049`) | `--color-text-primary` | Primary editorial headings, section titles, high-emphasis text |
| **Muted Slate Blue**| `rgb(118, 134, 171)` (`#7686AB`)| `--color-text-secondary`| Secondary body copy, meta labels, descriptive captions |
| **Legacy Link Blue** | `rgb(0, 0, 238)` (`#0000EE`) | `--color-text-link` | Utility text links, inline anchors, inline reference actions |
| **Badge Cobalt** | `rgb(56, 96, 190)` (`#3860BE`) | `--color-badge-fill` | Tag backgrounds, subtle pill markers, interactive chip surfaces |
| **Neutral Dark** | `rgb(0, 0, 0)` (`#000000`) | `--color-neutral-black` | Strict high-contrast text overlays, shadow base tones |
| **Pure White** | `rgb(255, 255, 255)` (`#FFFFFF`) | `--color-surface-white` | Primary card panels, dropdown menus, contrast text on dark shell |
| **Ice Tint** | `rgb(247, 252, 255)` (`#F7FCFF`) | `--color-surface-ice` | Subtle alternating section canvas, highlighted content backdrops |
| **Cool Mist** | `rgb(237, 244, 249)` (`#EDF4F9`) | `--color-surface-mist` | Secondary section background, comparative grid base |
| **Subtle Grey** | `rgb(240, 240, 240)` (`#F0F0F0`) | `--color-surface-subtle` | Overlay controls, modal close buttons, subtle button hover backs |
| **Border Neutral** | `rgb(187, 187, 187)` (`#BBBBBB`)| `--color-border-hairline`| Secondary button borders, structural dividers, chip boundaries |
| **Text Muted Neutral**| `rgb(85, 85, 85)` (`#555555`) | `--color-text-tertiary` | (Inferred) Form placeholder, disabled text, low-emphasis subtext |

---

## Tokens - Typography

Midtrans standardizes primarily on the **Poppins** font family, utilizing its geometric proportions and uniform stroke weights to reinforce legibility across technical payment documentation and high-conversion landing pages. Supplementary corporate assets accommodate **Proxima Nova** as an alternate geometric grotesque fallback.

### Typeface Families & Roles
- **Primary Display & Headings:** `Poppins-Bold`, `Poppins-Semibold`, sans-serif. Headings carry crisp geometric construction; letter spacing is maintained at `normal` or strictly constrained to `0.5px` for uppercase micro-labels.
- **Body & Editorial:** `Poppins-Regular`, `Poppins-Medium`, sans-serif. Used for continuous reading, feature list bullets, and dropdown navigation links.
- **Micro-Copy & Actions:** `Poppins-Regular` with explicit font weights of `600` or `700`, rendered at compact scales (`12px` to `13px`) to maintain typographic punch within dense dashboard and checkout preview UI.
- **Fallback Stack:** `Poppins, "Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`.

### Type Scale Hierarchy

| Style Role | Font Family | Weight | Size | Line Height | Letter Spacing | Target Elements / Context |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display (H1)** | Poppins-Bold | 400 (Font: Bold) | 32px | 48px (1.5) | normal | Dark shell hero value proposition, home headline |
| **Section Title (H2)**| Poppins-Bold | 400 (Font: Bold) | 32px | 52.16px (1.63)| normal | Major section headers ("Fitur Unggulan") |
| **Feature Lead (H3)** | Poppins-Semibold | 400 (Font: Semi) | 20px | 28px (1.4) [inferred] | normal | Product feature titles, value proposition cards |
| **Tab / Nav Link** | Poppins-Medium | 400 (Font: Med) | 16px | 24px (1.5) | normal | Top navbar tabs, horizontal segmented controls |
| **Body Primary** | Poppins-Regular | 400 | 16px | 24px (1.5) | normal | Long-form descriptions, feature explanations |
| **Utility Link** | Poppins-Regular | 400 | 16px | 21px (1.31) | normal | Inline text actions, navigational breadcrumbs |
| **Button Text (Std)** | Poppins-Regular | 700 | 12px | 16px (1.33) | 0.5px | Primary action buttons ("Izinkan Semua", "Apply") |
| **Button Text (Alt)** | Poppins-Regular | 600 | 13.008px | 18px (1.38) | normal | Modal actions ("Terima Semua Cookie", "Kelola") |
| **Badge / Caption** | Poppins-Regular | 700 | 12px | 14px (1.16) | normal | Filter chips, metadata labels, status badges |

*Note on Font Weights:* Midtrans compiles specific weight variants into dedicated webfont family names (`Poppins-Bold`, `Poppins-Semibold`, `Poppins-Medium`). While the CSS property `font-weight: 400` is often applied in the scraped DOM due to family-specific `@font-face` bindings, builders implementing variable Poppins must explicitly map these to CSS numeric weights: Bold = `700`, Semibold = `600`, Medium = `500`, and Regular = `400`.

---

## Tokens - Spacing & Shapes

### Grid & Density Scale
Midtrans implements an 8-point base spatial system with a 4-point sub-grid for micro-alignments, buttons, and badges. Vertical section spacing is generous (50px to 120px) to allow white-space contrast against data-dense components.

| Token | Value | Base Unit Equiv | Implementation Usage |
| :--- | :--- | :--- | :--- |
| `--space-1` | 4px | 0.5x | Micro gaps, inline badge padding adjustments |
| `--space-2` | 8px | 1.0x | Icon-to-text spacing, tight stack gutters |
| `--space-3` | 12px | 1.5x | Button vertical padding (`12px`), small card gaps |
| `--space-4` | 16px | 2.0x | Standard internal card margins, form input gutters |
| `--space-5` | 20px | 2.5x | Tab link padding (`20px`), list element separation |
| `--space-6` | 24px | 3.0x | Standard grid column gutters, body paragraph spacing |
| `--space-7` | 26px | 3.25x (Observed) | Feature list indentation and custom bullet offsets |
| `--space-8` | 30px | 3.75x | Button horizontal padding (`30px`) for high-intent actions |
| `--space-9` | 36px | 4.5x | Medium component separation, hero banner inner margins |
| `--space-10` | 50px - 60px | 6.25x - 7.5x | Section header bottom margins (`55px`, `60px`) |
| `--space-11` | 75px - 100px | 9.375x - 12.5x| Standard structural desktop section padding |
| `--space-12` | 120px - 200px| 15x - 25x | Large feature block transitions, background canvas offsets |

### Border Radius System
The system enforces a dual-radius architectural philosophy:
1. **Micro-Radii (`2px` - `4px`):** Reserved exclusively for transactional controls, input containers, and conversion buttons. Communicates institutional rigidity and fintech precision.
2. **Organic Radii (`8px` - `16px`):** Applied to floating UI cards, modal surfaces, and dropdown panels to soften information delivery.
3. **Pill Radii (`15px` - `22px` / `50%`):** Applied to filters, status indicators, counter badges, and avatar circular masks.

| Token | Value | Role / Applied Components |
| :--- | :--- | :--- |
| `--radius-none` | 0px | Structural section rows, full-bleed header bars, divider lines |
| `--radius-action` | 2px | **Primary CTA buttons**, modal action triggers, form submits |
| `--radius-input` | 4px | Text fields, dropdown inputs, interactive selectors [inferred] |
| `--radius-card-sm` | 8px | Service feature tiles, quick-reference widgets |
| `--radius-card-lg` | 16px | Major content cards, pricing containers, testimonial panels |
| `--radius-pill-sm` | 15px | Secondary rounded action buttons, light utility triggers |
| `--radius-pill-md` | 17px - 22px | Categorical filter tags, badge markers, table pills |
| `--radius-full` | 50% | Circular icon avatars, status indicators, pagination dots |

### Elevation & Shadows
Depth is achieved using broad, ambient light shadows rather than dark harsh drop-shadows, creating floating surfaces that rise naturally above the ice-blue and white backdrops.

- **Ambient Flyout Shadow (`--shadow-flyout`):** `0px 1px 40px 0px rgba(0, 0, 0, 0.08)`. Utilized on mega-menu dropdowns, fixed navigation overlays, and high-level dialog sheets.
- **Card Float Shadow (`--shadow-card`):** `0px 10px 20px 0px rgba(45, 50, 55, 0.06)`. Utilized on interactive feature cards, merchant tier panels, and pricing grids to provide subtle hovering tactile depth.
- **Border Elevation Baseline:** Borders are deliberately minimal or absent (`0px none`), relying on surface color distinction (`#FFFFFF` against `#F7FCFF` or `#EDF4F9`) and ambient diffusion rather than heavy outlines.

---

## Components

### 1. Primary Action CTA Button
- **Role:** High-conversion conversion driver for merchant onboarding, cookie authorization, and form submissions.
- **Anatomy:** Text label (uppercase/title-case), optional trailing micro-arrow, solid background fill, matching hairline border.
- **Visual Treatment:** Solid Royal Cobalt background with a sharp `2px` micro-radius. Zero drop-shadow; emphasis is delivered entirely through crisp chromatic contrast against white or dark surfaces.
- **Tokens:**
  - Background: `rgb(5, 79, 191)` (`#054FBF`)
  - Border: `1px solid rgb(5, 79, 191)`
  - Radius: `2px`
  - Padding: `12px 30px` (or `12px 10px` in constrained dialog footers)
  - Typography: `Poppins`, Weight `700`, Size `12px`, Line-height `16px`, Letter-spacing `0.5px`
  - Text Color: `rgb(255, 255, 255)`
- **Interaction & States:**
  - *Default:* `#054FBF` background, white text.
  - *Hover:* Background darkens subtly to `rgb(0, 40, 85)` (`#002855`); border synchronizes.
  - *Active:* Downscaled transformation `scale(0.99)`.
  - *Focus-Visible:* `2px` offset outline with `rgb(0, 127, 231)`.
- **Usage Rules:** Never use pill (`9999px`) shapes for primary transaction CTAs. Do not soften border-radius above `4px`.

### 2. Secondary Ghost / Outline Action
- **Role:** Secondary choices in modals (e.g. "Kelola Cookie"), secondary documentation links, low-priority merchant actions.
- **Anatomy:** Transparent/white background, prominent blue text, matching subtle border or zero border.
- **Visual Treatment:** White flat canvas, Royal Cobalt typography, exact same `2px` radius and padding dimensions as the primary CTA for balance.
- **Tokens:**
  - Background: `rgb(255, 255, 255)`
  - Border: `0px none` (or `1px solid rgb(5, 79, 191)` in standalone sections)
  - Radius: `2px`
  - Padding: `12px 20px` (or `12px 0px` for flat link buttons)
  - Typography: `Poppins`, Weight `600`, Size `13.008px`, Line-height `18px`
  - Text Color: `rgb(5, 79, 191)`
- **Usage Rules:** Position alongside Primary CTA in horizontal dialogs, right-aligned or stacked on mobile.

### 3. Global Announcement & Update Strip
- **Role:** Promotes critical product rollouts, regulatory updates (e.g. Bank Indonesia QRIS mandates), and system advisories.
- **Anatomy:** Full-width bar, update indicator badge, informational text line, optional right-aligned text action.
- **Visual Treatment:** Solid Electric Azure saturation spanning edge-to-edge, sitting flush directly above the Midnight Navy header.
- **Tokens:**
  - Background: `rgb(0, 127, 231)` (`#007FE7`)
  - Radius: `0px`
  - Padding: `10px 24px`
  - Typography: `Poppins`, Weight `500`, Size `14px`, Color: `rgb(255, 255, 255)`
  - Anchor Style: Underline on hover or white chevron arrow.

### 4. Enterprise Header Navigation Shell
- **Role:** Fixed or static top navigation housing the Midtrans brand mark, main category dropdowns, language selector, and merchant login portal.
- **Anatomy:** Midnight Navy horizontal container, SVG vector brandmark (White), link list, trailing "Daftar / Masuk" CTAs.
- **Visual Treatment:** Solid Midnight Navy background (`rgb(0, 40, 85)`), non-transparent, zero border-bottom, providing high contrast against the bright page body below.
- **Tokens:**
  - Background: `rgb(0, 40, 85)` (`#002855`)
  - Height: `76px` (inferred from spacing signals)
  - Padding: `0px 40px`
  - Link Typography: `Poppins-Medium`, Weight `500` / `400`, Size `16px`, Color: `rgb(255, 255, 255)`
  - Link Interaction: Text color changes to `rgb(0, 127, 231)` on hover with a smooth 150ms transition.

### 5. Mega-Menu Dropdown Panel
- **Role:** High-density discovery surface for Midtrans multi-product suite (Core API, Snap Checkout, Iris Payouts, Mobile SDK).
- **Anatomy:** Floating card panel, multi-column grid items, title heading, secondary descriptive body text.
- **Visual Treatment:** Crisp pure white canvas floating with a deep atmospheric shadow (`--shadow-flyout`).
- **Tokens:**
  - Background: `rgb(255, 255, 255)`
  - Radius: `8px`
  - Shadow: `0px 1px 40px 0px rgba(0, 0, 0, 0.08)`
  - Padding: `24px 32px`
  - Item Title: `Poppins-Semibold`, 16px, Color: `rgb(18, 48, 73)`
  - Item Description: `Poppins-Regular`, 14px, Line-height: 20px, Color: `rgb(118, 134, 171)`
  - Hover State: Menu item background transitions to `rgb(247, 252, 255)` with an inner `4px` radius.

### 6. Feature List Item with Offset Indent
- **Role:** Core selling point row ("Metode pembayaran terlengkap", "Aman dan terpercaya") found in marketing grids.
- **Anatomy:** Leading payment icon/check badge, primary title heading, descriptive paragraph.
- **Visual Treatment:** Left-indented layout with zero outer border, maintaining clean vertical typographic rhythm.
- **Tokens:**
  - Padding: `0px 0px 0px 26px` (Observed DOM signature)
  - Margin: `0px 0px 16px 0px`
  - Title Typography: `Poppins-Semibold`, Weight `600`, Size `20px`, Color: `rgb(18, 48, 73)`
  - Body Typography: `Poppins-Regular`, Weight `400`, Size `16px`, Line-height `24px`, Color: `rgb(118, 134, 171)`
  - Bullet/Icon Offset: Absolutely positioned or flex-aligned within the `26px` gutter.

### 7. Interactive Filter Chip / Pill Badge
- **Role:** Categorical taxonomy filters for documentation, case studies, or developer guides.
- **Anatomy:** Small rounded container, categorical label, optional close/filter icon.
- **Visual Treatment:** Compact, fully-rounded capsule shape utilizing Badge Cobalt fill or neutral border.
- **Tokens:**
  - Background: `rgb(56, 96, 190)` or transparent with border
  - Border: `1px solid rgb(187, 187, 187)`
  - Radius: `17px`
  - Padding: `4px 14px`
  - Typography: `Poppins-Regular`, Weight `700`, Size `12px`, Color: `rgb(255, 255, 255)` or `rgb(85, 85, 85)`

### 8. Segmented Tab Navigation Link
- **Role:** Switching between business segment views ("Startups", "Growing Businesses", "Enterprise").
- **Anatomy:** Horizontal tab bar item with inline text and active indicator underline.
- **Visual Treatment:** Clean text element surrounded by generous internal touch padding (`20px 20px`).
- **Tokens:**
  - Background: Transparent (active state may take `rgb(247, 252, 255)`)
  - Padding: `20px 20px`
  - Typography: `Poppins-Medium`, Weight `500`, Size `16px`, Color: `rgb(18, 48, 73)`
  - Active Indicator: `2px` solid border-bottom in `rgb(5, 79, 191)` (`#054FBF`)

### 9. System Overlay Close Trigger
- **Role:** Floating circular or square dismiss action for full-screen modals, search sheets, and mobile drawers.
- **Anatomy:** Subdued square/circle button with central SVG cross icon.
- **Visual Treatment:** Light grey tinted surface blending softly into the background until hovered.
- **Tokens:**
  - Background: `rgb(240, 240, 240)`
  - Radius: `50%` or `4px`
  - Size: `36px x 36px`
  - Icon Asset: `https://midtrans.com/assets/img/close.svg`
  - Hover State: Background shifts to `rgb(220, 225, 230)` with crisp icon color saturation.

### 10. Hero Value Proposition Container
- **Role:** Above-the-fold conversion module introducing the core payment gateway value proposition.
- **Anatomy:** Full-bleed background shell (or Midnight Navy container), left-aligned headline block, dual CTA button group, right-aligned interface mock/dashboard illustration.
- **Visual Treatment:** Dark navy background canvas (`rgb(0, 40, 85)`) contrasting directly against crisp white display typography (`Poppins-Bold 32px/48px`).
- **Tokens:**
  - Background: `rgb(0, 40, 85)`
  - Padding: `80px 40px` (Desktop)
  - Heading: `Poppins-Bold`, 32px, Line-height: 48px, Color: `rgb(255, 255, 255)`
  - Margin Below Heading: `28px`
  - Subtext: `Poppins-Regular`, 16px, Line-height: 24px, Color: `rgb(247, 252, 255)` with 85% opacity.

---

## Do's and Don'ts
- Do use observed colors, typography, spacing, radius, and surface treatment as the source of truth.
- Do keep UI copy, logos, imagery, and brand names original to the new product.
- Do map every new component to an observed primitive: hero, CTA, card, form, nav, footer, label, or surface.
- Do preserve the detected density: section rhythm, whitespace scale, type hierarchy, and button sizing.
- Do mark inferred tokens clearly when the scrape did not expose a precise value.
- Do test generated UI at mobile and desktop widths before treating the style as matched.
- Don't copy the source brand name, logo, copyrighted assets, product claims, or exact page composition.
- Don't mix unrelated colors, shadows, radii, or fonts that were not observed or safely inferred.
- Don't flatten all typography into one size; keep the observed hierarchy and contrast.
- Don't overuse decorative effects if the reference relies on clean surfaces and restrained depth.
- Don't invent interactive states without tying them to the detected border, color, or elevation model.
- Don't treat sparse extraction as exact truth; keep uncertainty notes visible for manual review.

### Do's
1. **Do honor the rigid 2px radius on CTAs.** Ensure primary action buttons retain their sharp, precision-engineered `2px` border-radius; this is the defining physical characteristic of Midtrans's transactional interface.
2. **Do enforce Midnight Navy (`rgb(0, 40, 85)`) for header containment.** The navigation bar must anchor the page visually with a dark, commanding enclosure rather than a standard washed-out white navbar.
3. **Do use Slate Navy (`rgb(18, 48, 73)`) for light-surface headings.** Never render dark headings as pure black (`#000000`). Slate Navy provides warm, authoritative contrast without ocular fatigue.
4. **Do reserve Electric Azure (`rgb(0, 127, 231)`) for announcements and accents.** Maintain high saturation for promotional strips and badges so they visually detach from the functional Royal Cobalt (`rgb(5, 79, 191)`) CTAs.
5. **Do utilize generous vertical section pacing (`60px` to `120px`).** Provide breathing space around feature matrices and merchant success showcases to convey enterprise maturity.
6. **Do pair Poppins-Bold with explicit numeric weights.** When using variable font weights, ensure headings are rendered at `700` and feature leads at `600`, preventing the browser from synthetic faux-bold degradation.

### Don'ts
1. **Don't apply pill (`9999px`) shapes to primary buttons.** Rounded pills are reserved strictly for taxonomy chips and filter badges (`17px` radius). Never turn the primary payment CTA into a pill.
2. **Don't use generic grey borders on cards.** Avoid dark, heavy borders (`#CCCCCC` or `#999999`). Rely on surface color stepping (e.g. White `#FFFFFF` against Mist `#EDF4F9`) and soft ambient shadows (`rgba(45, 50, 55, 0.06)`).
3. **Don't lighten heading weights to thin variations.** Never render H1 or H2 headings in `300` or `400` weights. The Midtrans design voice depends on solid, confident geometric strokes.
4. **Don't use saturated primary blue for editorial text.** Keep `rgb(5, 79, 191)` locked to actionable, interactive triggers. Long-form copy must remain in Muted Slate Blue (`#7686AB`) or Slate Navy (`#123049`).
5. **Don't introduce arbitrary neon accents or pastel gradients.** Do not use purple, emerald, or orange accents outside of certified external payment partner logos (e.g., GoPay, ShopeePay, OVO).
6. **Don't float navigation without the Midnight Navy bedrock.** Floating transparent navigation over light hero sections disrupts the institutional hierarchy established by the dark header shell.

---

## Surfaces

| Level | Name | Color Value | Purpose & Architectural Usage |
| :--- | :--- | :--- | :--- |
| **Surface 0** | Canvas Base (White) | `rgb(255, 255, 255)` | Default background for editorial sections, API doc specs, and primary cards |
| **Surface 1** | Alternating Tint (Ice) | `rgb(247, 252, 255)` | Primary alternating section container; delivers subtle cooling separation |
| **Surface 2** | Section Tint (Mist) | `rgb(237, 244, 249)` | Secondary alternating section; houses multi-column feature grids and comparison tables |
| **Surface 3** | Control Subtle | `rgb(240, 240, 240)` | Interactive trigger backdrops, modal close circles, disabled form inputs |
| **Surface 4** | Midnight Enclosure | `rgb(0, 40, 85)` | High-authority navigation header, dark hero modules, enterprise checkout footers |
| **Surface 5** | Azure Utility | `rgb(0, 127, 231)` | Top-of-page notification ribbon, real-time alert banners |

---

## Elevation

Midtrans relies on a clean, atmospheric depth model designed to simulate soft daylight diffused through clean glass, avoiding muddy or high-opacity shadows.

```
+-----------------------------------------------------------+
| Level 3: Modal & Mega-Menu Flyout                         |
| rgba(0, 0, 0, 0.08) 0px 1px 40px 0px                     |
+-----------------------------------------------------------+
       |
       v
+-----------------------------------------------------------+
| Level 2: Interactive Floating Cards                       |
| rgba(45, 50, 55, 0.06) 0px 10px 20px 0px                  |
+-----------------------------------------------------------+
       |
       v
+-----------------------------------------------------------+
| Level 1: Flat Raised Panels                               |
| 1px solid rgb(237, 244, 249) / 0px none (Color stepping)  |
+-----------------------------------------------------------+
       |
       v
+-----------------------------------------------------------+
| Level 0: Canvas Base (rgb(255, 255, 255) / #F7FCFF)       |
+-----------------------------------------------------------+
```

### Depth Interaction Model
- **Card Hover Elevation:** Resting feature cards sit at Level 1 (flat against Mist background) or Level 2. On hover, cards transition their shadow from `0px 10px 20px rgba(45, 50, 55, 0.06)` to `0px 15px 30px rgba(45, 50, 55, 0.12)` with a subtle `-2px` Y-axis translation.
- **Borders & Elevation Separation:** Where shadows are omitted, elevation is achieved exclusively via tonal stepping: White (`#FFFFFF`) containers placed on Ice Blue (`#F7FCFF`) or Cool Mist (`#EDF4F9`) foundations. Hairline borders (`rgb(187, 187, 187)`) are strictly reserved for inactive interactive controls such as unselected filter chips.

---

## Imagery & Media Architecture

### Image Style & Composition
- **Payment Method Ecosystem Ribbons:** Midtrans showcases its expansive payment acceptance capabilities through clean, organized badge grids featuring official payment rails (GoPay, QRIS, BCA KlikPay, Mandiri Bill, Visa, Mastercard, Indomaret). Partner logos are enclosed in uniform white rectangular cards (`radius: 4px`, `border: 1px solid rgb(240, 240, 240)`) to maintain brand neutrality.
- **Product UI Mockups:** Screenshots of the Midtrans MAP (Merchant Administration Portal) and Snap checkout pop-ups are displayed in isometric or frontal perspective with crisp `8px` rounded corners and ambient Level 2 drop-shadows.
- **Hero Visual Composition:** Headings sit on the left, counter-balanced on the right by clean 3D isometric or vector-composed digital transaction scenes (e.g. mobile smartphones processing GoPay QRIS codes, payment checkout cards sliding into pos terminals).

### Iconography Style
- **Line & Duotone Vector Assets:** Midtrans utilizes minimal line icons with uniform 1.5px to 2px stroke weights. Primary icons are tinted in Royal Cobalt (`#054FBF`) or Azure Blue (`#007FE7`), frequently hosted inside soft circular or squircle backdrops tinted in `rgb(247, 252, 255)`.
- **System Icons:** Utility actions (such as dropdown chevrons and modal dismiss buttons) rely on geometric SVGs (`close.svg`, `logo-blue.svg`) styled cleanly at 16px to 24px bounding boxes.

---

## Layout Rules & Rhythm

### Structural Breakpoints & Widths
- **Max Content Width:** Container bounds constrain page content to a centered `1200px` (or `1280px` full-desktop envelope).
- **Edge Gutters:** Fluid horizontal padding: `16px` on mobile (< 640px), `32px` on tablet (< 1024px), and `40px` to `60px` on desktop containers.
- **Grid Architecture:** 12-column responsive layout with standardized `24px` gutters (`--space-6`) expanding to `32px` on enterprise display sections.

### Sectional Cadence
The landing page design strictly rotates surface backgrounds to prevent visual monotony while demarcating distinct logical segments:
1. **Utility Strip:** Full-bleed Electric Azure (`#007FE7`).
2. **Global Navigation:** Full-bleed Midnight Navy (`#002855`).
3. **Hero Module:** Dark Midnight Navy container (`#002855`) or Pure White with dual-pane layout.
4. **Partner Marquee:** Clean Pure White (`#FFFFFF`) row with subdued partner logos.
5. **Core Feature Grid:** Alternating Ice Tint (`#F7FCFF`) with 3-column feature cards.
6. **Business Segmentation Tabs:** Cool Mist (`#EDF4F9`) section with tabbed interactive switchers.
7. **Social Proof & Stats:** Pure White (`#FFFFFF`) with high-contrast typography metrics.
8. **Institutional Footer:** Midnight Navy (`#002855`) returning to the dark structural enclosure.

---

## Agent Prompt Guide

### Quick Color Reference

- **Midnight Navy (Header / Deep Foundation):** `rgb(0, 40, 85)` / `#002855`
- **Royal Cobalt (Action CTA / Primary Interactive):** `rgb(5, 79, 191)` / `#054FBF`
- **Electric Azure (Alerts / Product Identity):** `rgb(0, 127, 231)` / `#007FE7`
- **Slate Navy (Primary Typography):** `rgb(18, 48, 73)` / `#123049`
- **Muted Slate Blue (Secondary Typography):** `rgb(118, 134, 171)` / `#7686AB`
- **Pure White (Card Surfaces / Dark Shell Text):** `rgb(255, 255, 255)` / `#FFFFFF`
- **Ice Canvas (Alternating Light Backdrop):** `rgb(247, 252, 255)` / `#F7FCFF`
- **Cool Mist (Secondary Section Canvas):** `rgb(237, 244, 249)` / `#EDF4F9`
- **Subtle Grey (Overlay Triggers):** `rgb(240, 240, 240)` / `#F0F0F0`

---

### Example Component Prompts

#### Prompt 1: High-Conversion Fintech Hero Section
> "Create a production-grade responsive hero section for Midtrans payment gateway using Tailwind CSS. The background must be solid Midnight Navy (`#002855`). On the left side, include an H1 heading in Poppins Bold, 32px size (desktop 44px), 48px line-height in pure white: 'Payment Gateway Indonesia Terlengkap untuk Bisnis Anda'. Below it, add a subtitle in Poppins Regular 16px with Muted Ice text (`#F7FCFF` with 85% opacity) explaining instant multi-channel payments. Place two buttons below: a Primary CTA with solid Royal Cobalt background (`#054FBF`), white text, font-size 12px, font-weight 700, padding 12px 30px, and an exact 2px border radius; and a secondary white outline button with 2px radius and 12px 30px padding. On the right side, construct a floating preview card showing an active Snap checkout payment modal with GoPay and QRIS options over a soft white panel with an ambient shadow `0px 1px 40px rgba(0,0,0,0.08)`."

#### Prompt 2: Product Feature Matrix Card
> "Generate a 3-column feature section on an Ice Blue background (`#F7FCFF`). The section header must use Slate Navy text (`#123049`), Poppins Bold, 32px with 52px line-height, titled 'Fitur Unggulan'. Each feature card must have a pure white background (`#FFFFFF`), an 8px border radius, no border, and a resting shadow of `0px 10px 20px rgba(45, 50, 55, 0.06)`. Inside each card, include an Electric Azure icon container (`#007FE7` at 10% opacity) housing a crisp blue payment icon, followed by an H3 title in Poppins Semibold 20px (`#123049`), and a description in Poppins Regular 16px (`#7686AB`) with 24px line-height. Add a left padding of 26px to the feature list bullets to match Midtrans's measured layout pattern."

#### Prompt 3: Mega-Menu Navigation Dropdown
> "Build a desktop mega-menu dropdown panel for the 'Produk' navigation link in Midtrans. The flyout panel must be pure white (`#FFFFFF`), floating with an elevation shadow of `0px 1px 40px 0px rgba(0, 0, 0, 0.08)`, and an 8px border radius. Structure the menu into a two-column grid. Column 1 must detail 'Online Payments' with links for Snap Checkout, Core API, and Mobile SDK; Column 2 must detail 'Disbursement & Risk' featuring Iris Payouts and Aegis Fraud Detection. Every item must have a Poppins Semibold 16px title in Slate Navy (`#123049`) and a subtext description in Muted Slate Blue (`#7686AB`) 14px. On hover, the menu item background should smoothly transition to `#F7FCFF` with a 4px corner radius."

#### Prompt 4: Segmented Business Tab Switcher
> "Implement an interactive business segment switcher on a Cool Mist surface (`#EDF4F9`). Above the content, place a horizontal tab bar containing three tabs: 'Startups & Early Businesses', 'Growing Businesses', and 'Enterprise'. Each tab should have 20px vertical and horizontal padding, with Poppins Medium 16px text in Slate Navy (`#123049`). The active tab must display an active underline border of 2px solid Royal Cobalt (`#054FBF`) and a crisp white background. Below the tabs, render a split-content container displaying bulleted points indented by 26px, showcasing zero setup fees, automated payout APIs, and dedicated account management, with a sharp 2px radius CTA button reading 'Mulai Sekarang'."

#### Prompt 5: Top Notification Banner & System Shell
> "Construct the top-level site announcement banner and navigation header bar for Midtrans. The top announcement strip must have an Electric Azure background (`#007FE7`), zero border-radius, and centered white Poppins Medium 14px text stating 'Informasi Terkini: Penyesuaian Biaya Transaksi QRIS Sesuai Regulasi Bank Indonesia' with an inline underline text link. Immediately below, render the primary navigation header in solid Midnight Navy (`#002855`) at 76px height. Include the white SVG Midtrans logo on the left, center navigation links in Poppins Medium 16px white with 20px padding that turn Electric Azure on hover, and right-aligned action buttons including a login link and a Royal Cobalt CTA button ('Daftar Sekarang') with 12px 30px padding and a 2px border radius."

---

## Similar Brands

1. **Xendit (xendit.co):** Direct Indonesian payment infrastructure competitor. Shares the authoritative deep blue foundation, though Xendit leans more heavily into monochromatic modern SaaS layouts with standard 6px to 8px button radii, whereas Midtrans preserves the distinct 2px micro-radius.
2. **Stripe (stripe.com):** Global payment benchmark. Midtrans shares Stripe's meticulous typography scaling, clean feature list indentation, and multi-tier surface elevation, while Midtrans replaces Stripe's complex animated mesh gradients with grounded solid blues and white space.
3. **DOKU (doku.com):** Legacy Indonesian payment gateway. Employs a related enterprise blue-and-red financial color logic, but lacks Midtrans's clean geometric Poppins type hierarchy and modern ambient floating shadows.
4. **GoTo Financial / GoPay Merchant (gopay.co.id):** Parent group ecosystem design system. Shares consumer blue-and-green trust accents and payment rail integration aesthetics, while Midtrans functions as the dedicated, developer-centric enterprise backbone.

---

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Brand & Interactive Colors */
  --midtrans-navy-deep: rgb(0, 40, 85);       /* #002855 */
  --midtrans-blue-primary: rgb(5, 79, 191);    /* #054FBF */
  --midtrans-blue-azure: rgb(0, 127, 231);     /* #007FE7 */
  --midtrans-blue-badge: rgb(56, 96, 190);     /* #3860BE */
  --midtrans-blue-link: rgb(0, 0, 238);        /* #0000EE */

  /* Text & Editorial Colors */
  --midtrans-text-headline: rgb(18, 48, 73);   /* #123049 */
  --midtrans-text-body: rgb(118, 134, 171);    /* #7686AB */
  --midtrans-text-dark: rgb(0, 0, 0);          /* #000000 */
  --midtrans-text-light: rgb(255, 255, 255);   /* #FFFFFF */

  /* Surface & Canvas System */
  --midtrans-surface-white: rgb(255, 255, 255);
  --midtrans-surface-ice: rgb(247, 252, 255);   /* #F7FCFF */
  --midtrans-surface-mist: rgb(237, 244, 249);  /* #EDF4F9 */
  --midtrans-surface-subtle: rgb(240, 240, 240);/* #F0F0F0 */
  --midtrans-border-hairline: rgb(187, 187, 187);

  /* Typography */
  --font-midtrans: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Strict Radii Tokens */
  --radius-action-cta: 2px;
  --radius-input-field: 4px;
  --radius-card-surface: 8px;
  --radius-panel-raised: 16px;
  --radius-pill-badge: 17px;
  --radius-circle: 50%;

  /* Elevation Shadows */
  --shadow-ambient-flyout: 0px 1px 40px 0px rgba(0, 0, 0, 0.08);
  --shadow-floating-card: 0px 10px 20px 0px rgba(45, 50, 55, 0.06);

  /* Spacing Scale */
  --spacing-btn-v: 12px;
  --spacing-btn-h: 30px;
  --spacing-tab-pad: 20px;
  --spacing-bullet-indent: 26px;
}

/* Micro-Utility Classes */
.btn-midtrans-primary {
  font-family: var(--font-midtrans);
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: var(--midtrans-text-light);
  background-color: var(--midtrans-blue-primary);
  border: 1px solid var(--midtrans-blue-primary);
  border-radius: var(--radius-action-cta);
  padding: var(--spacing-btn-v) var(--spacing-btn-h);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 150ms ease, border-color 150ms ease;
  cursor: pointer;
}

.btn-midtrans-primary:hover {
  background-color: var(--midtrans-navy-deep);
  border-color: var(--midtrans-navy-deep);
}

.heading-section-midtrans {
  font-family: var(--font-midtrans);
  font-size: 32px;
  font-weight: 700;
  line-height: 52.16px;
  color: var(--midtrans-text-headline);
  margin-bottom: 55px;
}
```

---

### Tailwind v4

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-midtrans-navy: #002855;
  --color-midtrans-blue: #054FBF;
  --color-midtrans-azure: #007FE7;
  --color-midtrans-slate: #123049;
  --color-midtrans-muted: #7686AB;
  --color-midtrans-badge: #3860BE;
  --color-midtrans-ice: #F7FCFF;
  --color-midtrans-mist: #EDF4F9;
  --color-midtrans-subtle: #F0F0F0;
  --color-midtrans-hairline: #BBBBBB;

  /* Font Families */
  --font-poppins: Poppins, "Proxima Nova", system-ui, sans-serif;

  /* Border Radii */
  --radius-midtrans-cta: 2px;
  --radius-midtrans-card: 8px;
  --radius-midtrans-panel: 16px;
  --radius-midtrans-badge: 17px;

  /* Box Shadows */
  --shadow-midtrans-flyout: 0px 1px 40px 0px rgba(0, 0, 0, 0.08);
  --shadow-midtrans-card: 0px 10px 20px 0px rgba(45, 50, 55, 0.06);
}

/* Layer Base Overrides */
@layer base {
  body {
    font-family: var(--font-poppins);
    color: var(--color-midtrans-slate);
    background-color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-poppins);
    font-weight: 700;
    color: var(--color-midtrans-slate);
  }
}
```

```html
<!-- Example: Midtrans Standard Conversion Banner with Measured Tokens -->
<section class="bg-midtrans-navy text-white py-16 px-6 md:px-12">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
    <div class="max-w-xl">
      <span class="text-midtrans-azure text-xs font-bold tracking-wider uppercase mb-2 block">
        Solusi Terpercaya
      </span>
      <h2 class="text-3xl md:text-4xl font-bold leading-tight mb-4 text-white">
        Payment Gateway Indonesia Terlengkap untuk Bisnis Anda
      </h2>
      <p class="text-midtrans-ice/80 text-base leading-relaxed mb-6">
        Hubungkan bisnis Anda dengan 25+ metode pembayaran otomatis, verifikasi instan, dan perlindungan fraud kelas perbankan.
      </p>
      <div class="flex flex-wrap items-center gap-4">
        <!-- Exact Primary CTA Token Implementation -->
        <a 
          href="/register" 
          class="bg-midtrans-blue border border-midtrans-blue text-white text-xs font-bold px-[30px] py-3 rounded-[2px] hover:bg-black hover:border-black transition-colors"
        >
          Daftar Sekarang
        </a>
        <a 
          href="/contact" 
          class="bg-white/10 border border-white/20 text-white text-xs font-bold px-[30px] py-3 rounded-[2px] hover:bg-white hover:text-midtrans-navy transition-colors"
        >
          Hubungi Sales
        </a>
      </div>
    </div>
    
    <!-- Floating Payment Matrix Preview -->
    <div class="w-full md:w-96 bg-white p-6 rounded-lg shadow-midtrans-flyout text-midtrans-slate">
      <div class="flex items-center justify-between pb-4 border-b border-midtrans-subtle">
        <span class="text-xs font-bold text-midtrans-muted">TOTAL PEMBAYARAN</span>
        <span class="text-lg font-bold text-midtrans-slate">Rp 450.000</span>
      </div>
      <div class="py-4 space-y-3">
        <div class="p-3 bg-midtrans-ice rounded border border-midtrans-azure/20 flex items-center justify-between">
          <span class="text-sm font-semibold">GoPay / QRIS</span>
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
        </div>
        <div class="p-3 bg-white rounded border border-midtrans-subtle flex items-center justify-between">
          <span class="text-sm font-semibold">Virtual Account BCA</span>
          <span class="text-xs text-midtrans-muted">Otomatis</span>
        </div>
      </div>
      <button class="w-full bg-midtrans-blue text-white text-xs font-bold py-3 rounded-[2px] mt-2">
        Bayar Sekarang
      </button>
    </div>
  </div>
</section>
```

---

## Limitations & Confidence Notes

- **Pages Analyzed:** Primary landing page (`https://midtrans.com/`) during current release extraction cycle.
- **Deep Dashboard Views:** The Merchant Administration Portal (MAP) operates behind enterprise authentication and was not indexed in this public audit. While landing page components utilize `2px` micro-radii and strict blue hierarchies, dashboard tables and analytics forms may employ denser tabular grids.
- **Font Face Compilation:** Font weights in raw extraction were bound via separate `@font-face` family declarations (e.g. `Poppins-Bold`, `Poppins-Semibold`) accompanied by standard `400` weights in computed CSS. The values have been normalized here to their genuine graphic weights (`700`, `600`, `500`, `400`) to guarantee correct display fidelity in modern Tailwind and CSS environments.
- **Confidence Rating:** **0.85 (High Confidence)**. Key conversion surfaces, color tokens, button paddings (`12px 30px`), headline line-heights (`52.16px`), and elevation shadows were extracted directly from live DOM nodes and are fully verified.