# MAHREEN INDONESIA — FRONTEND DEVELOPER CREATIVE CHALLENGE

## Purpose

Dokumen ini adalah handoff/brief untuk AI coding agent yang akan membantu membuat website untuk Creative Challenge Mahreen Indonesia Internship Batch 2.

**Jangan langsung coding.** Agent wajib memahami brief, meriset Mahreen Indonesia, memahami target audiens, mempelajari referensi desain Midtrans yang diberikan, lalu mengubah hasil riset menjadi konsep UX/UI yang spesifik sebelum implementasi.

---

# 1. NON-NEGOTIABLE TASK CONTEXT

Sumber utama: `Test_Psikotest_MII2.md` (hasil konversi dari brief PDF).

Task yang dikerjakan adalah **Website Development**:

> Buat sebuah website sederhana yang dapat memperkenalkan Mahreen Indonesia kepada generasi muda dengan tema “BERKARYA UNTUK INDONESIA” dengan cara yang menarik, mudah dipahami, dan relevan.

Brief menjelaskan bahwa Mahreen memiliki banyak program, kegiatan, proyek, layanan, dan peluang untuk generasi muda. Tantangan komunikasinya: informasi tersebut belum selalu mudah dikenal, dipahami, dan diikuti oleh generasi muda.

Karya diharapkan dapat membantu Mahreen menjadi lebih dikenal, menarik perhatian generasi muda, meningkatkan interaksi, atau mendorong partisipasi.

### Evaluation criteria from the brief

| Aspek | Bobot |
|---|---:|
| Kreativitas | 30% |
| Kesesuaian Brief | 25% |
| Kualitas Hasil | 25% |
| Komunikasi Ide | 10% |
| Kerapihan | 10% |

Waktu pengerjaan maksimum yang tertulis di brief: **1 × 24 jam**.

AI boleh dipakai sebagai alat bantu ide, eksplorasi, dan proses kerja, tetapi hasil akhir harus tetap menunjukkan pemikiran dan kontribusi peserta.

---

# 2. REQUIRED RESEARCH BEFORE DESIGN/CODING

Agent WAJIB melakukan research terlebih dahulu. Jangan mengandalkan asumsi umum tentang Mahreen Indonesia.

## 2.1 Official Mahreen research

Prioritaskan sumber resmi Mahreen Indonesia untuk fakta tentang organisasi, positioning, program, layanan, portfolio, dan terminology.

Research minimal:

1. Homepage / positioning Mahreen Indonesia.
2. About / profile / history.
3. Ecosystem / business pillars.
4. Mahreen Internship.
5. Mahreen Learning.
6. Tanya Mahreen / business solution.
7. Mahreen Studio.
8. Peduli Mahreen / social impact.
9. Portfolio / projects / collaborations.
10. Official social presence yang dapat diverifikasi.

### Research questions

Agent harus bisa menjawab sebelum coding:

- Mahreen Indonesia itu apa dalam satu kalimat yang sederhana?
- Siapa saja yang ingin mereka layani atau ajak tumbuh?
- Apa hubungan antara kreativitas, digital, bisnis, talent development, community, dan social impact di ekosistem Mahreen?
- Program/layanan apa yang paling relevan untuk generasi muda?
- Apa yang sudah dikatakan Mahreen sendiri tentang “Berkarya untuk Indonesia”?
- Bagaimana Mahreen menjelaskan alur dari pengetahuan/gagasan/karya/dampak?
- Bukti karya/program/proyek apa yang dapat dipakai untuk membuat website terasa nyata?
- Fakta/statistik apa yang benar-benar bisa diverifikasi dari sumber resmi?

### Evidence rule

Jangan mengarang nama program, angka, client, partnership, achievement, quote, testimonial, atau klaim dampak.

Untuk fakta eksternal, gunakan sumber yang bisa diverifikasi. Bila informasi tidak tersedia atau tidak jelas, tulis sebagai unknown dan jangan mengisi dengan asumsi.

---

# 3. CURRENT RESEARCH NOTES — MAHREEN INDONESIA

Hasil web research pada 24 September 2026 menemukan informasi berikut dari situs resmi Mahreen Indonesia:

### Positioning

Homepage Mahreen memposisikan diri sebagai ekosistem kreatif yang memberdayakan bisnis, mahasiswa, komunitas, dan organisasi melalui kreativitas, teknologi, pendidikan, dan kolaborasi.

### Core narrative

Halaman About/History memakai narasi:

> “Dari pengetahuan, lahir gagasan. Dari gagasan, lahir karya. Dari karya, tumbuh dampak.”

Mahreen juga menjelaskan dirinya sebagai ruang yang mengembangkan gagasan menjadi karya, pengetahuan menjadi solusi, dan kreativitas menjadi kebermanfaatan.

### Ecosystem currently presented on official site

- Pengembangan Talenta — Mahreen Indonesia Internship
- Solusi Bisnis — Tanya Mahreen
- Studio Kreatif — Mahreen Studio
- Social Impact / Creative Agency — Peduli Mahreen
- Social Impact — Mahreen CSR
- Mahreen Learning — Bootcamp, Workshop, Certification

### Current homepage metrics shown by the official site

- 50+ mitra kampus
- 10+ proyek selesai
- 15+ kolaborasi
- 20+ events/program
- 10+ aktivitas Peduli Mahreen
- 4 business pillar

**Catatan:** angka tersebut adalah angka yang ditampilkan pada situs saat research dilakukan. Agent harus re-check official source before using them as final production copy because live sites can change.

### Portfolio signal

Official portfolio page showcases work across apparel/branding, web development, UI/UX, social impact, education/funding, QA, backend/database, and website development. This supports showing Mahreen as a multi-disciplinary ecosystem rather than a single service company.

---

# 4. CORE DESIGN/UX PROBLEM TO SOLVE

Do NOT interpret the task as “make a company profile website.”

The more useful product problem is:

> A young person discovers Mahreen. Within a few seconds they should understand what Mahreen is, what kinds of opportunities/spaces exist, what may be relevant to them, and what they can do next.

Therefore the website should act as a **translator/discovery experience for young people**, not merely a list of company sections.

The core user journey should feel like:

`Discover Mahreen → Recognize myself → Explore a path → See real work/impact → Take an action`

---

# 5. CONCEPT DIRECTION TO EXPLORE

The strongest starting concept from the current discussion is:

## “DARI IDE MENJADI DAMPAK”

Possible experience structure:

`IDE → BELAJAR → BERKARYA → BERKOLABORASI → BERDAMPAK`

This should NOT automatically become a final design. Agent must validate/refine it against research before implementation.

A possible centerpiece is:

## “Temukan Ruangmu di Mahreen”

Instead of forcing every visitor to understand every business pillar, let users choose a motivation/interest such as:

- Belajar skill baru
- Membuat project
- Mengembangkan bisnis
- Berkreativitas
- Berkolaborasi
- Berkontribusi untuk masyarakat

Then provide an interactive, transparent mapping to relevant Mahreen areas.

This mechanism should be simple, understandable, and useful—not a gimmicky quiz.

---

# 6. PRODUCT PRINCIPLES

## Principle 1 — The website must answer “Why should I care?” first

The hero should communicate a human benefit and connection to “Berkarya untuk Indonesia”, not corporate jargon.

Avoid generic copy such as:

- “We are a leading company...”
- “Empowering the future...” without evidence
- “Innovative solutions for a better tomorrow...”
- Empty motivational slogans disconnected from Mahreen

Copy must be specific to Mahreen's actual ecosystem and target audience.

## Principle 2 — Show, don’t dump

Do not expose all Mahreen programs as a wall of cards.

Use hierarchy, progressive disclosure, interaction, and real examples.

## Principle 3 — Real evidence beats generic decoration

Use verified Mahreen portfolio/project/program data where useful.

A real project, real opportunity, or real pathway is more valuable than decorative gradients and random illustrations.

## Principle 4 — Interaction must serve comprehension

Animations and transitions should communicate relationships or progression.

No animation merely because “modern websites have animations.”

## Principle 5 — Young does not mean childish

The audience can be digital-native without turning the interface into a gaming UI, neon dashboard, or overly playful startup template.

---

# 7. ANTI-GENERIC UI RULES

The agent MUST NOT produce a default AI-generated landing page.

### Explicitly avoid

- Generic centered hero + gradient blob + two buttons
- Excessive rounded 20–32px cards everywhere
- Glassmorphism by default
- Purple/indigo SaaS gradients
- Random 3D shapes with no meaning
- “Trusted by” section invented without verified partners
- Fake testimonials
- Fake statistics
- Fake user avatars
- Generic stock-style illustrations
- Repeated identical cards with different icons
- 10-section landing page generated from a template
- Overuse of pills
- Copy that sounds like an AI-generated startup pitch
- Decorative motion that has no UX purpose

### Required

Every major section must have a reason to exist connected to the brief's problem.

Every interaction must answer one of these:

- What is Mahreen?
- Why is it relevant to me?
- What can I do here?
- What proof is there that this ecosystem is real?
- How do I participate?

---

# 8. MIDTRANS DESIGN DIRECTION

The user explicitly chose the **Midtrans visual language as the design reference**.

Source of truth: `midtrans-DESIGN.md` and `midtrans.html` provided with this brief.

Agent MUST read the complete `midtrans-DESIGN.md` before styling.

## Important: style reference, not a copy

Use Midtrans as a **design-system reference**, not as a page/template to clone.

Do NOT copy:

- Midtrans logo
- Midtrans brand name in UI copy
- Midtrans product claims
- Midtrans exact page composition
- Midtrans proprietary assets
- Exact source page content

Create an original Mahreen experience using the visual principles.

## Key visual characteristics from the reference

### Colors

- Midnight Navy: `#002855`
- Royal Cobalt: `#054FBF`
- Electric Azure: `#007FE7`
- Slate Navy: `#123049`
- Muted Slate Blue: `#7686AB`
- White: `#FFFFFF`
- Ice: `#F7FCFF`
- Cool Mist: `#EDF4F9`

### Typography

Primary family: **Poppins**.

- Headings: Bold / 700
- Feature titles: Semibold / 600
- Body: Regular / 400
- Buttons / micro-copy: 600–700 as appropriate

### Shape language

The reference deliberately uses a dual-radius system:

- Sharp ~2px radius for primary CTAs and transactional/precision controls
- 8–16px for feature cards and floating surfaces
- Pills only where they have a semantic reason such as filters or badges

Do not convert every element into a pill.

### Surfaces

Prefer tonal layering and whitespace over heavy borders:

`White → Ice → Mist → Midnight`

### Shadow language

Use restrained ambient shadows rather than dark generic drop shadows.

### Layout

- Desktop content envelope around 1200px is a useful reference.
- 12-column responsive grid.
- Generous vertical section spacing.
- Clear structural hierarchy.

### Navigation

A dark Midnight Navy header is a defining structural element in the reference.

### Hero

Reference pattern: dark shell + strong typographic hierarchy + supporting visual on the right.

Adapt this to Mahreen. Do not simply duplicate a fintech hero layout.

---

# 9. SUGGESTED INFORMATION ARCHITECTURE

This is a starting hypothesis, not an instruction to blindly implement.

## Section 01 — Hero

Theme: BERKARYA UNTUK INDONESIA

Question answered: “Kenapa gue harus peduli?”

Potential direction:

> Satu ide. Satu karya. Satu dampak.

Then communicate that Mahreen is a place where young people can learn, create, connect, and contribute.

Primary CTA should be action-oriented and specific.

## Section 02 — What is Mahreen?

Question answered: “Mahreen itu sebenarnya apa?”

Explain the ecosystem in plain Indonesian.

## Section 03 — Find Your Space

Question answered: “Gue bisa masuk dari mana?”

Interactive selection based on motivations/interests.

## Section 04 — The Mahreen Ecosystem

Question answered: “Apa saja yang tersedia?”

Present the ecosystem with hierarchy rather than a generic card grid.

## Section 05 — Real Work / Real Impact

Question answered: “Mahreen benar-benar ngapain?”

Use verified portfolio/program/project examples.

## Section 06 — From Learning to Real Impact

Connect learning, creation, collaboration, and impact.

## Section 07 — CTA

Question answered: “Sekarang gue harus ngapain?”

Give one clear next action.

The site can be a one-page experience, but interactions can make it feel deeper than a static landing page.

---

# 10. COPYWRITING RULES

Copywriting is a first-class deliverable.

## Voice

- Bahasa Indonesia natural
- Clear
- Confident
- Warm but not childish
- Youth-oriented without slang overload
- Concrete rather than abstract

## Prefer

“Punya ide yang belum tahu harus dibawa ke mana?”

over:

“Unlock your potential with innovative opportunities.”

Prefer:

“Belajar lewat proyek. Bangun portofolio. Temukan ruang untuk berkembang.”

when the statement is actually supported by the relevant Mahreen program.

## Never invent

- Testimonials
- Personal stories
- Numerical achievements
- Partner logos
- Quotes attributed to people
- Program promises
- Outcomes that Mahreen does not document

## CTA examples to explore

Not final copy; agent should refine after research:

- Temukan Ruangmu
- Jelajahi Ekosistem
- Lihat Karya Nyata
- Mulai Berkarya
- Kenali Mahreen

CTA labels should describe the actual destination/action.

---

# 11. FRONTEND QUALITY BAR

The result should visibly demonstrate frontend capability, not just styling.

At minimum evaluate:

- Responsive desktop/tablet/mobile behavior
- Semantic HTML
- Keyboard accessibility for interactive elements
- Visible focus states
- Good contrast
- Motion that respects `prefers-reduced-motion`
- Clean component architecture
- Reusable tokens/components
- No layout shift from media
- Fast initial render
- No broken states
- Empty/error/disabled states where relevant
- Hover/touch behavior that works on both pointer and touch devices

---

# 12. RESEARCH → CONCEPT → IMPLEMENTATION WORKFLOW

## Phase 0 — Inspect

Read:

1. `Test_Psikotest_MII2.md`
2. `midtrans-DESIGN.md`
3. `midtrans.html` if implementation-level style verification is useful

Do not code before this.

## Phase 1 — Research Mahreen

Create a concise research memo covering:

- Who Mahreen is
- Current positioning
- Target audiences
- Ecosystem pillars
- Youth-relevant opportunities
- Portfolio proof
- Language/terminology used by Mahreen
- Visual/brand observations
- Facts that are safe to use
- Facts that are uncertain and should be excluded

Use official Mahreen sources as the primary evidence.

## Phase 2 — Concept validation

Before coding, define:

- Core user problem
- Target user
- Desired user feeling
- One-sentence concept
- Main user journey
- Information architecture
- Key interaction
- Why the concept fits “BERKARYA UNTUK INDONESIA”
- Why it helps with Mahreen's stated communication problem

The concept must be original. Do not accept the first generic landing-page idea.

## Phase 3 — Wireframe/content model

Define actual section hierarchy and copy direction.

Do not use lorem ipsum.

## Phase 4 — Visual system

Translate Midtrans design principles into an original Mahreen design system.

## Phase 5 — Build

Implement the validated concept.

## Phase 6 — Quality review

Review the result specifically against:

- Brief fit
- Creativity
- Clarity
- Relevance to young people
- Visual originality
- Copy quality
- Responsive behavior
- Accessibility
- Lack of fabricated claims
- Lack of generic AI-template patterns

---

# 13. FINAL AGENT SELF-CHECK

Before considering the work complete, ask internally:

1. Could this website be mistaken for a random AI-generated SaaS landing page?
2. Does the first viewport make Mahreen understandable?
3. Does the user know what they can actually do next?
4. Is there a meaningful interaction rather than decorative animation?
5. Does the concept solve the exact communication problem in the challenge brief?
6. Can every factual Mahreen claim be traced to a source?
7. Does the visual language clearly reflect the Midtrans reference without copying it?
8. Does the copy sound like a human wrote it specifically for Mahreen?
9. Are the sections intentionally designed rather than generated from a standard landing-page recipe?
10. Does the final product visibly demonstrate frontend thinking?

If several answers are “no”, revise before presenting the result.

---

# 14. SOURCES USED FOR THIS BRIEF

## Official Mahreen Indonesia

- Homepage: https://mahreenindonesia.com/
- About: https://mahreenindonesia.com/tentang?section=profil-sejarah
- Ecosystem / homepage sections: https://mahreenindonesia.com/?section=ecosystem
- Internship: https://mahreenindonesia.com/internship
- Tanya Mahreen: https://mahreenindonesia.com/tanya-mahreen
- Portfolio: https://www.mahreenindonesia.com/portofolio
- Peduli Mahreen: https://mahreenindonesia.com/peduli-mahreen

## Local source files

- `Test_Psikotest_MII2.md`
- `midtrans-DESIGN.md`
- `midtrans.html`

**Research date:** 24 September 2026.
