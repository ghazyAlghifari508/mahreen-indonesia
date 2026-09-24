# Mahreen Indonesia Ecosystem Navigator — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready, highly polished, responsive React + TypeScript Single Page Application that solves Mahreen Indonesia's Creative Challenge: translating a complex multi-disciplinary ecosystem into an intuitive, interactive discovery experience for young people.

**Architecture:** A component-driven Single Page Application built on React + Vite + TypeScript, styled with Tailwind CSS strictly adhering to the Midtrans Design Language (Midnight Navy `#002855`, Royal Cobalt `#054FBF`, Electric Azure `#007FE7`, Slate Navy `#123049`, sharp 2px micro-radii on CTAs, 8-16px on cards). It features a deterministic Pathfinder engine (`src/lib/pathfinder.ts`), tabbed ecosystem explorer, verified 4-month internship progression, filterable project showcase, and authentic legal records.

**Tech Stack:** React 19/18, TypeScript, Vite, Tailwind CSS, Lucide React, Vitest.

**Spec:** `docs/superpowers/specs/2026-09-24-mahreen-website-design.md`

## Global Constraints
- Primary & outline CTA buttons MUST use sharp `2px` micro-radius (`rounded-[2px]`). No pill CTAs.
- Navbar, Dark Hero Enclosure, and Institutional Footer MUST use Midnight Navy (`#002855`).
- Editorial text and headings on light backgrounds MUST use Slate Navy (`#123049`), never pitch black.
- Google Font Poppins must be the primary typeface.
- Zero fabrication: all metrics, awards, legal numbers, pilar details, and alumni must be 100% sourced from verified research.
- Deterministic Pathfinder in `src/lib/pathfinder.ts`: no random or LLM logic.
- Type-safety: zero `any` types; must pass `tsc --noEmit` and `npm run build`.

---

## File Structure

```
mahreen/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── vitest.config.ts
├── tests/
│   └── pathfinder.test.ts
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── types/
│   │   └── mahreen.ts
│   ├── data/
│   │   └── mahreenData.ts
│   ├── lib/
│   │   └── pathfinder.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TopAnnouncementStrip.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PathfinderSection.tsx
│   │   │   ├── EcosystemSection.tsx
│   │   │   ├── InternshipJourneySection.tsx
│   │   │   ├── PortfolioSection.tsx
│   │   │   ├── TrustAndPartnersSection.tsx
│   │   │   └── CallToActionSection.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Modal.tsx
│   │   └── modals/
│   │       ├── Batch2DetailModal.tsx
│   │       └── ProjectDetailModal.tsx
```

---

### Task 1: Scaffolding, Tooling & Design System Setup

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `vitest.config.ts`
- Create: `index.html`
- Create: `src/index.css`
- Create: `src/main.tsx`

**Interfaces:**
- Produces: Runnable Vite + React + TypeScript environment with Tailwind CSS and Poppins typography.

- [ ] **Step 1: Create `package.json` with dependencies**
Create `package.json` with `react`, `react-dom`, `lucide-react`, `tailwindcss`, `@tailwindcss/vite`, `vite`, `typescript`, `@types/react`, `@types/react-dom`, `vitest`.

- [ ] **Step 2: Create TypeScript configurations (`tsconfig.json`, `tsconfig.node.json`)**
Configure strict type checking, React JSX transform, and ESNext target.

- [ ] **Step 3: Create `vite.config.ts` and `vitest.config.ts`**
Configure Vite with `@tailwindcss/vite` and Vitest for testing.

- [ ] **Step 4: Create `index.html` with Poppins font preconnect**
Include Google Fonts preconnect for `Poppins:wght@400;500;600;700` and responsive viewport meta tags.

- [ ] **Step 5: Create `src/index.css` with Midtrans Design Tokens**
Define CSS Custom Properties:
`--midtrans-navy: #002855`, `--midtrans-blue: #054FBF`, `--midtrans-azure: #007FE7`, `--midtrans-slate: #123049`, `--midtrans-muted: #7686AB`, `--midtrans-ice: #F7FCFF`, `--midtrans-mist: #EDF4F9`, and utility classes `.btn-midtrans-primary`, `.btn-midtrans-outline`.

- [ ] **Step 6: Run `npm install` and verify Vite dev server starts**
Run: `npm install`
Expected: Dependencies installed without errors.

---

### Task 2: TypeScript Domain Interfaces & Verified Data Store

**Files:**
- Create: `src/types/mahreen.ts`
- Create: `src/data/mahreenData.ts`

**Interfaces:**
- Produces:
  - `Pillar`, `ProjectItem`, `AlumniAwardee`, `PathfinderOption`, `PathfinderRecommendation`, `CampusPartner` types
  - `PILLARS_DATA`, `PROJECTS_DATA`, `ALUMNI_AWARDEES`, `CAMPUS_PARTNERS`, `LEGAL_RECORDS`, `BATCH2_DETAILS` constants

- [ ] **Step 1: Write `src/types/mahreen.ts`**
Define all domain contracts ensuring strict type safety.

- [ ] **Step 2: Write `src/data/mahreenData.ts`**
Populate 100% verified data sourced from official research:
- 5 Pillars (Internship, Tanya Mahreen, Studio, Peduli, CSR) + Mahreen Learning
- 7 Verified Projects (Yayasan Fauzan Adzima, Urban Odyssey, Kopi Selasar, Griya Batik, SehatKu, Pojok Literasi, Eco-Hub)
- 6 Batch 1 Alumni Awardees (Andhika Septiansyah, Akmal Yassar, Chintya Kharisma, Raihan Syahputra, Ikhrom Nur, Athaya Aurellin)
- 20+ Real Campus Partners (ITS, IPB, UGM, UNDIP, Brawijaya, Gunadarma, etc.)
- Official Legal Numbers (SK Menkumham RI 2026, NIB, HAKI)

- [ ] **Step 3: Run `npx tsc --noEmit` to verify type safety**
Expected: 0 errors.

---

### Task 3: Deterministic Pathfinder Logic & Unit Tests (TDD)

**Files:**
- Create: `tests/pathfinder.test.ts`
- Create: `src/lib/pathfinder.ts`

**Interfaces:**
- Consumes: `UserGoalId`, `PathfinderRecommendation` from `src/types/mahreen.ts`
- Produces: `calculateRecommendation(goalId: UserGoalId): PathfinderRecommendation`

- [ ] **Step 1: Write the failing unit tests in `tests/pathfinder.test.ts`**
Test that every goal ID maps to the expected pillar, available roles, and valid call-to-actions.

- [ ] **Step 2: Run test to verify it fails**
Run: `npx vitest run tests/pathfinder.test.ts`
Expected: FAIL (module not found).

- [ ] **Step 3: Implement `src/lib/pathfinder.ts`**
Write deterministic switch-case logic mapping:
- `skill-portfolio` -> `Mahreen Indonesia Internship`
- `business-growth` -> `Tanya Mahreen`
- `creative-lifestyle` -> `Mahreen Studio`
- `social-impact` -> `Peduli Mahreen & CSR`
- `learning-cert` -> `Mahreen Learning`

- [ ] **Step 4: Run test to verify it passes**
Run: `npx vitest run tests/pathfinder.test.ts`
Expected: PASS (all tests pass).

---

### Task 4: Midtrans UI Primitives & Modals

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Badge.tsx`
- Create: `src/components/ui/Modal.tsx`
- Create: `src/components/modals/Batch2DetailModal.tsx`
- Create: `src/components/modals/ProjectDetailModal.tsx`

**Interfaces:**
- Produces:
  - `<Button variant="primary"|"outline"|"ghost"|"dark" size="sm"|"md"|"lg">`
  - `<Badge variant="cobalt"|"azure"|"slate"|"ice">`
  - `<Modal isOpen onClose title>`
  - `<Batch2DetailModal isOpen onClose onSelectGoal>`
  - `<ProjectDetailModal project isOpen onClose>`

- [ ] **Step 1: Implement `Button.tsx` with rigid `2px` micro-radius**
Ensure primary CTA has `#054FBF` background, white text, 12px font size, 700 weight, 30px horizontal padding, and exact `2px` border radius (`rounded-[2px]`).

- [ ] **Step 2: Implement `Badge.tsx` with `17px` pill radius**
Ensure taxonomy chips use compact pill boundaries with appropriate color variants.

- [ ] **Step 3: Implement accessible `Modal.tsx`**
Includes backdrop blur, escape key listener, click-outside dismissal, and flyout elevation shadow (`0px 1px 40px rgba(0,0,0,0.08)`).

- [ ] **Step 4: Implement `Batch2DetailModal.tsx` and `ProjectDetailModal.tsx`**
Display full verified information (curriculum, weekly operating system, profit sharing 30%, project scope).

- [ ] **Step 5: Verify types with `npx tsc --noEmit`**
Expected: 0 errors.

---

### Task 5: Top Announcement Strip & Header Navigation

**Files:**
- Create: `src/components/layout/TopAnnouncementStrip.tsx`
- Create: `src/components/layout/Navbar.tsx`

**Interfaces:**
- Consumes: `<Button>`
- Produces:
  - `<TopAnnouncementStrip onOpenBatch2Modal>`
  - `<Navbar onOpenBatch2Modal>`

- [ ] **Step 1: Implement `TopAnnouncementStrip.tsx`**
Electric Azure (`#007FE7`) full-bleed bar announcing Batch 2 remote internship with action link.

- [ ] **Step 2: Implement `Navbar.tsx`**
Midnight Navy (`#002855`) container, 76px height, crisp brandmark, desktop links with Electric Azure hover effect, mobile hamburger drawer, and primary `2px` radius CTA.

- [ ] **Step 3: Verify responsive toggling on mobile and desktop**

---

### Task 6: Hero Section (Editorial Split & Value Proposition)

**Files:**
- Create: `src/components/sections/HeroSection.tsx`

**Interfaces:**
- Consumes: `<Button>`, `<Badge>`, `BATCH2_DETAILS`
- Produces: `<HeroSection onExplorePathfinder onOpenBatch2Modal>`

- [ ] **Step 1: Implement `HeroSection.tsx`**
- Left Column: Headline *"Satu Ide. Satu Karya. Satu Dampak."*, theme badge *"BERKARYA UNTUK INDONESIA"*, plain Indonesian human explanation of Mahreen, dual CTAs.
- Right Column: Interactive Ecosystem Transformation Matrix card (visualizing `Ide -> Karya -> Dampak`).
- Bottom Metric Ribbon: 50+ Mitra Kampus, 5 Pilar Ekosistem, 12 Batch, SK Kemenkumham RI 2026.

- [ ] **Step 2: Verify typography and 2px CTA buttons**

---

### Task 7: Interactive Pathfinder Centerpiece ("Temukan Ruangmu di Mahreen")

**Files:**
- Create: `src/components/sections/PathfinderSection.tsx`

**Interfaces:**
- Consumes: `calculateRecommendation` from `src/lib/pathfinder.ts`, `<Button>`, `<Badge>`
- Produces: `<PathfinderSection onSelectPillar onOpenBatch2Modal>`

- [ ] **Step 1: Implement `PathfinderSection.tsx`**
- Two-panel responsive layout on Ice Tint (`#F7FCFF`) background.
- Left Panel: 5 interactive goal selector buttons with clear icons and active states (`#054FBF` border highlight).
- Right Panel: Reactive recommendation card showing pillar match, why it's relevant, concrete first steps, available roles, and action CTA.

- [ ] **Step 2: Verify state changes smoothly when switching goals**

---

### Task 8: Ecosystem Section (5 Pillars Segmented Tabs)

**Files:**
- Create: `src/components/sections/EcosystemSection.tsx`

**Interfaces:**
- Consumes: `PILLARS_DATA`, `<Button>`, `<Badge>`
- Produces: `<EcosystemSection activePillarId onSelectPillar onOpenBatch2Modal>`

- [ ] **Step 1: Implement `EcosystemSection.tsx`**
- Midtrans-inspired horizontal tab navigation on Cool Mist (`#EDF4F9`).
- Deep-dive panel for each pilar:
  1. Mahreen Indonesia Internship
  2. Tanya Mahreen (with transparent service pricing)
  3. Mahreen Studio (with Chapter 01 highlights)
  4. Peduli Mahreen (with 500+ students & 15 schools metrics)
  5. Mahreen CSR (with 10,000 tree reforestation & Learning Center)
- Dedicated banner clarifying Mahreen Learning's role (Bootcamp, Workshop, Certification).

- [ ] **Step 2: Verify tab navigation accessibility and responsive layout**

---

### Task 9: Internship Journey Section (ADAPT | CREATE | DELIVER | IMPACT)

**Files:**
- Create: `src/components/sections/InternshipJourneySection.tsx`

**Interfaces:**
- Consumes: `<Button>`, `<Badge>`
- Produces: `<InternshipJourneySection onOpenBatch2Modal>`

- [ ] **Step 1: Implement `InternshipJourneySection.tsx`**
- 4-Month progression timeline:
  - Bulan 1: ADAPT (Opening & Industry Orientation)
  - Bulan 2: CREATE (Digital Business Forum)
  - Bulan 3: DELIVER (Mahreen Champions League)
  - Bulan 4: IMPACT (Final Showcase & Graduation)
- Verified Features Grid: WFH Flexible System, 5 Divisions, 30% Profit Sharing fee scheme, Weekly Operating System (Senin Kickoff s/d Jumat Review).

- [ ] **Step 2: Verify timeline renders cleanly on mobile and desktop**

---

### Task 10: Real Work & Verified Impact Section (Portfolio & Alumni)

**Files:**
- Create: `src/components/sections/PortfolioSection.tsx`

**Interfaces:**
- Consumes: `PROJECTS_DATA`, `ALUMNI_AWARDEES`, `<Button>`, `<Badge>`
- Produces: `<PortfolioSection onSelectProject>`

- [ ] **Step 1: Implement `PortfolioSection.tsx`**
- Category filter pills (`17px` radius): Semua, Website & Digital, Branding & Creative, Social Impact, Magang Mahreen.
- Real project cards with tags, deliverables, and trigger for detail modal.
- "Hall of Fame — Alumni Batch 1" carousel/grid highlighting real award winners (Andhika, Akmal, Chintya, etc.).

- [ ] **Step 2: Verify filtering logic works reliably**

---

### Task 11: Institutional Trust, Legal Records & Campus Marquee

**Files:**
- Create: `src/components/sections/TrustAndPartnersSection.tsx`

**Interfaces:**
- Consumes: `CAMPUS_PARTNERS`, `LEGAL_RECORDS`, `<Badge>`
- Produces: `<TrustAndPartnersSection />`

- [ ] **Step 1: Implement `TrustAndPartnersSection.tsx`**
- Evidence Ledger: SK Menkumham `AHU-A089408.AH.01.30.Tahun 2026`, NIB `1203260152054`, HAKI `001180040`.
- Campus Partner Grid / Marquee: ITS, IPB, UGM, UNDIP, Brawijaya, Gunadarma, etc.
- Copy tone: factual and authoritative ("Catatan Keabsahan & Mitra Kolaborasi").

- [ ] **Step 2: Verify responsive grid formatting**

---

### Task 12: Final Conversion Section & Institutional Footer

**Files:**
- Create: `src/components/sections/CallToActionSection.tsx`
- Create: `src/components/layout/Footer.tsx`

**Interfaces:**
- Consumes: `<Button>`, `<Badge>`
- Produces:
  - `<CallToActionSection onOpenBatch2Modal>`
  - `<Footer onOpenBatch2Modal>`

- [ ] **Step 1: Implement `CallToActionSection.tsx`**
Midnight Navy high-intent conversion enclosure connecting back to "BERKARYA UNTUK INDONESIA" with dual action paths.

- [ ] **Step 2: Implement `Footer.tsx`**
Comprehensive footer with 5 pilar links, legal info, official social links (Instagram `@mahreenindonesia`, Canva Template, Twibbonize, YouTube, TikTok), and copyright 2026.

---

### Task 13: Full Integration, Modal Wiring & Production Verification

**Files:**
- Modify: `src/App.tsx`
- Modify: `README.md` (if needed for build/start commands)

**Interfaces:**
- Integrates all components, manages active modal state and scroll anchors.

- [ ] **Step 1: Assemble all sections in `src/App.tsx`**
Wire states:
- `activeModal`: `'batch2' | null`
- `selectedProject`: `ProjectItem | null`
- Smooth scrolling to anchor IDs (`#ecosystem`, `#pathfinder`, `#journey`, `#portfolio`, `#legalitas`).

- [ ] **Step 2: Run TypeScript check**
Run: `npx tsc --noEmit`
Expected: 0 errors.

- [ ] **Step 3: Run Vitest unit tests**
Run: `npx vitest run`
Expected: All tests pass.

- [ ] **Step 4: Run production build**
Run: `npm run build`
Expected: Successful build output in `dist/`.

- [ ] **Step 5: Visual and Responsive Audit in Chrome DevTools**
Preview the built application on Desktop (1280px) and Mobile (375px) to verify spacing, typography, contrast, and interactive states.
