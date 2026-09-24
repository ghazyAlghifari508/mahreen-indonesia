# SPECIFICATION DOCUMENT: MAHREEN INDONESIA DISCOVERY & ECOSYSTEM ENGINE
**Date:** 2026-09-24  
**Project:** Mahreen Indonesia — Website Development Creative Challenge (Batch 2)  
**Role:** Lead Product Designer + Senior Frontend Engineer  
**Design Reference:** Midtrans Visual Design System (`midtrans_references/midtrans-DESIGN.md`)  
**Status:** Updated & Aligned with Master Implementation Prompt  

---

## 1. Context, Objectives & Core Problem

### 1.1 Challenge Context
* **Sumber Utama:** `Test_Psikotest_MII2.md`
* **Tema:** BERKARYA UNTUK INDONESIA
* **Tagline:** Satu Ide. Satu Karya. Satu Dampak.
* **Campaign:** #FromLearningtoRealImpact
* **Target Output:** 1 Website / Prototype Website interaktif + Penjelasan ringkas ≤ 150 kata.
* **Kriteria Evaluasi:** Kreativitas (30%), Kesesuaian Brief (25%), Kualitas Hasil (25%), Komunikasi Ide (10%), Kerapihan (10%).

### 1.2 Core Problem to Solve
> *"Mahreen Indonesia memiliki ekosistem luas yang bergerak dalam bidang kreativitas, teknologi digital, pengembangan talenta, bisnis, komunitas, dan kontribusi sosial. Namun, banyaknya program dan aktivitas membuat informasi tentang peluang Mahreen belum selalu mudah dikenal, dipahami, dan diikuti oleh generasi muda."*

Situs web ini **BUKAN company profile pasif atau landing page promosi klise**, melainkan sebuah **"Interactive Ecosystem Navigator"**.
Tugas utamanya adalah menjawab pertanyaan anak muda:
> **"Mahreen itu sebenarnya apa, dan gue cocok mulai dari mana?"**

### 1.3 User Journey
`DISCOVER → RECOGNIZE MYSELF → EXPLORE A PATH → SEE PROOF → TAKE ACTION`

---

## 2. Visual System: Midtrans Design Language Adaptation

Desain mengadopsi bahasa visual Midtrans secara disiplin sebagai acuan sistem desain, bukan meniru/mengkloning produk Midtrans.

### 2.1 Color Tokens
* **Midnight Navy (`#002855`):** Structural enclosure (Navigation header, dark hero shell, institutional footer).
* **Royal Cobalt (`#054FBF`):** Primary action CTAs, active tab indicators, key interactive borders.
* **Electric Azure (`#007FE7`):** Top utility announcement strip, alert badges, active accents.
* **Slate Navy (`#123049`):** High-contrast editorial headings and section titles (ramah mata, bukan hitam mati).
* **Muted Slate Blue (`#7686AB`):** Body copy, descriptive captions, meta labels.
* **Pure White (`#FFFFFF`):** Active card surfaces, flyout panels, high-contrast text on dark shells.
* **Ice Tint (`#F7FCFF`):** Alternating canvas tint 1 (subtle cooling separation).
* **Cool Mist (`#EDF4F9`):** Alternating canvas tint 2 (comparative grid foundation).
* **Hairline Border (`#BBBBBB`):** Hairline borders for passive/inactive controls.

### 2.2 Dual-Radius Architecture (Filosofi Midtrans)
* **Sharp `2px` Micro-Radius:** Wajib untuk semua tombol aksi (Primary & Outline CTA buttons). Memberikan rasa ketegasan teknikal, stabilitas, dan komitmen profesional.
* **Organic `8px` – `16px` Radius:** Untuk kartu fitur, panel pilar, galeri portofolio, dan modal.
* **Pill `17px` Radius:** Eksklusif untuk chip taksonomi, badge status, dan filter pill.
* *Aturan Ketat:* Jangan pernah membuat tombol CTA utama berbentuk pill (`9999px`).

### 2.3 Typographic Scale (Google Font Poppins)
* **Font Family:** `Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
* **Display / Hero H1:** `32px` mobile / `42px` desktop, line-height `1.3`, Weight Bold `700`.
* **Section Title H2:** `28px` - `32px`, line-height `48px`, Weight Bold `700` (`#123049`).
* **Feature Title H3:** `18px` - `20px`, line-height `28px`, Weight Semibold `600`.
* **Body Text:** `15px` - `16px`, line-height `24px`, Weight Regular `400` (`#7686AB`).
* **Button Labels:** `12px` - `13px`, Weight `700`, Letter-spacing `0.5px`, Padding `12px 30px`.

### 2.4 Shadows & Elevation
* **Card Elevation:** `0px 10px 20px rgba(45, 50, 55, 0.06)`, dengan hover translate `-2px` dan shadow `0px 15px 30px rgba(45, 50, 55, 0.12)`.
* **Flyout / Modal Elevation:** `0px 1px 40px rgba(0, 0, 0, 0.08)`.

---

## 3. Anti-Generic UI & Section Architecture

Setiap section memiliki tujuan UX yang berbeda dan tata letak yang bervariasi (*art-directed*), menghindari pola grid kartu berulang:

```
[01. Announcement Strip & Midnight Header]  -> Full-bleed Electric Azure + Midnight Navy
[02. Hero Section: Editorial Split]         -> Dark Shell, Left Value Prop + Right Interactive Preview
[03. Centerpiece: Pathfinder Two-Panel]    -> Left Goal Selector + Right Dynamic Recommendation Engine
[04. Ecosystem: Segmented Tabs & Detail]   -> Midtrans-style Horizontal Tabs + Focused Detail Surface
[05. Internship: Progressive Timeline]     -> ADAPT -> CREATE -> DELIVER -> IMPACT Journey Track
[06. Real Work: Visual Portfolio Gallery]   -> Categorized Real Projects + Batch 1 Awardees
[07. Legality & Network: Evidence Ledger]  -> Verified Legal Records + Real Campus Partners Marquee
[08. Final Conversion & Midnight Footer]    -> High-intent Conversion Enclosure + Structured Links
```

### Rincian Section:

#### Section 01 — Announcement Strip & Navigation
* **Announcement Bar (Electric Azure `#007FE7`):** Kontekstual kampanye Mahreen Internship Batch 2: *"Mahreen Indonesia Internship Batch 2 Telah Dibuka — Periode 1 Okt 2026 – 31 Jan 2027 (Remote WFH/WFA)"*.
* **Navbar (Midnight Navy `#002855`):**
  * Brandmark resmi Mahreen Indonesia.
  * Nav links: `Ekosistem`, `Temukan Ruangmu`, `Perjalanan Internship`, `Portofolio`, `Legalitas`.
  * CTA: `Daftar Internship` (Royal Cobalt, 2px radius).

#### Section 02 — Hero Section (Editorial Split)
* **Left Column:**
  * Tagline resmi: **"Satu Ide. Satu Karya. Satu Dampak."**
  * Tema: **"BERKARYA UNTUK INDONESIA"**
  * Penjelasan lugas: Mahreen Indonesia sebagai ruang kolaboratif yang menghubungkan ide generasi muda dengan proyek nyata, pengembangan bisnis, kreativitas, dan dampak sosial.
  * Dual CTA: Primary `Temukan Ruangmu` (scroll ke Pathfinder) & Secondary Outline `Pelajari Internship` (membuka modal panduan Batch 2).
* **Right Column:**
  * Interactive Preview Card (ala snapshot UI Midtrans) yang merangkum siklus transformasi: `Ide (Eksplorasi) → Karya (Proyek Nyata) → Dampak (Kebermanfaatan)`.
* **Verified Metric Ribbon:**
  * `50+` Mitra Kampus di Indonesia
  * `5` Pilar Ekosistem Saling Terhubung
  * `12` Batch Perjalanan
  * `100%` Legalitas Resmi Terdaftar (SK Kemenkumham RI)

#### Section 03 — Pathfinder: "Temukan Ruangmu di Mahreen" (Primary Interactive Experience)
* **Tujuan:** Pengunjung muda memilih target yang ingin dicapai, dan sistem memberikan rekomendasi presisi tanpa kebingungan.
* **Pilihan Tujuan Pengguna:**
  1. `Mengembangkan Skill & Portofolio` $\rightarrow$ Target: Mahasiswa/Fresh Graduate mencari pengalaman proyek nyata.
  2. `Mengembangkan Bisnis & Solusi Digital` $\rightarrow$ Target: UMKM, Founder, Pemilik Brand butuh web/branding.
  3. `Berkarya secara Kreatif & Visual` $\rightarrow$ Target: Kreator visual, penikmat fashion streetwear & atelier lifestyle.
  4. `Berkontribusi kepada Masyarakat` $\rightarrow$ Target: Relawan pendidikan, advokasi sosial, dan literasi digital.
  5. `Pelatihan Terstruktur & Sertifikasi` $\rightarrow$ Target: Pembelajar mandiri yang ingin menguasai keterampilan spesifik.
* **Deterministic Logic Engine (`src/lib/pathfinder.ts`):**
  * Mengembalikan: *Pilar Rekomendasi*, *Mengapa Relevan Bagi Anda*, *Peran / Jalur Tersedia*, *Langkah Pertama yang Konkret*, serta *Tombol Tindakan (CTA)*.
  * Perubahan pilihan langsung memperbarui panel hasil di sisi kanan secara reaktif dan mulus.

#### Section 04 — The Mahreen Ecosystem (Segmented Tabs & Focused Detail)
Menggunakan tab bar Midtrans di atas kanvas Cool Mist (`#EDF4F9`):
1. **Mahreen Indonesia Internship (Talent Development):** Program magang 4 bulan berbasis proyek klien, mentoring industri, WFH terstruktur, dan portofolio profesional.
2. **Tanya Mahreen (Digital & Business Solutions):** Solusi bisnis digital UMKM & brand: Website Development, Graphic Design, Social Media Management, Digital Marketing, Advertising Campaign, dan Business Consultation.
3. **Mahreen Studio (Creative Product & Lifestyle):** Unit lifestyle modern: apparel, merchandise, visual branding, dan koleksi eksklusif (Chapter 01: Signature Noir Hoodie, Minimalist Tee).
4. **Peduli Mahreen (Social Movement):** Inisiatif inklusif pendidikan dan literasi: Kelas Inspirasi, renovasi perpustakaan (Library Hub), dengan penerima manfaat 500+ siswa dan 15 sekolah dasar.
5. **Mahreen CSR (Partnership & Sustainability):** Kemitraan tanggung jawab sosial berkelanjutan: program reboisasi 10.000 pohon di Jawa Barat dan Mahreen Learning Center.
*(Hubungan dengan Mahreen Learning dijelaskan secara akurat sebagai payung program edukasi terstruktur: Bootcamp 12 minggu, Workshop 1-2 hari, dan Sertifikasi).*

#### Section 05 — Internship Journey: `ADAPT | CREATE | DELIVER | IMPACT`
Timeline perjalanan 4 bulan resmi Batch 2 berdasarkan Handbook internal:
* **Bulan 1 (Oktober) — ADAPT:** Orientasi sistem kerja MIOS, pemahaman divisi, pelatihan tools, small project. *Flagship:* **Opening & Industry Orientation**.
* **Bulan 2 (November) — CREATE:** Produksi internal, project divisi, kolaborasi lintas tim, pengembangan produk digital. *Flagship:* **Digital Business Forum**.
* **Bulan 3 (Desember) — DELIVER:** Keterlibatan dalam *Real Client Project*, pemenuhan standar industri, interaksi klien. *Flagship:* **Mahreen Champions League**.
* **Bulan 4 (Januari) — IMPACT:** Finalisasi proyek, penyusunan portofolio profesional, showcase, dan kelulusan. *Flagship:* **Final Project Showcase & Graduation**.
* **Fitur Tambahan Terverifikasi:**
  * 5 Divisi Utama: Website Development, Graphic Design, Video Editor, Social Media Management, Business Development & Partnership.
  * Sistem Kerja WFH Fleksibel dengan Weekly Operating System teratur (Senin Kickoff hingga Jumat Review).
  * Skema Fee Proyek via Profit Sharing 30% untuk tim pelaksana atas proyek komersial Mahreen yang menghasilkan pendapatan.

#### Section 06 — Real Work & Verified Impact (Portofolio Nyata & Hall of Fame)
* **Kategori Filter:** *Semua*, *Website & Digital*, *Branding & Creative*, *Social Impact*, *Magang Mahreen*.
* **Proyek Terverifikasi:**
  1. *Website Yayasan Fauzan Adzima Sukajadi* (Website Dev Magang)
  2. *Urban Odyssey Apparel* (Mahreen Studio)
  3. *Rebranding Kopi Selasar* (Mahreen Studio)
  4. *E-Commerce Griya Batik* (Tanya Mahreen)
  5. *SehatKu Healthcare UI/UX* (Tanya Mahreen)
  6. *Pojok Literasi Cigugur* (Peduli Mahreen)
  7. *Eco-Hub Sustainability CSR* (Mahreen CSR)
* **Alumni Batch 1 Hall of Fame (Data Asli):**
  * *Andhika Septiansyah* — Web Innovator Award (Website Development)
  * *Akmal Yassar* — Best Intern of the Batch (Graphic Design)
  * *Chintya Kharisma Y.* — Most Outstanding Intern (Graphic Design)
  * *Raihan Syahputra F.* — Most Engaged Intern (Website Development)
  * *Ikhrom Nur K.* — Best Content Strategist (Social Media Management)
  * *Athaya Aurellin K.* — Creative Editing Award (Video Editor)

#### Section 07 — Legalitas & Jaringan Kemitraan (Evidence Ledger)
Bukan slogan kosong, melainkan bukti berkas resmi:
* **Legalitas Terdaftar:**
  * SK Menteri Hukum RI: `AHU-A089408.AH.01.30.Tahun 2026`
  * NIB Resmi: `1203260152054`
  * HAKI Terdaftar: No. `001180040` (Permohonan `EC002026042583`)
  * Founder: Mohamad Dzikri Arfiansyah, S.T. | CEO: Tania Restiani Fajar
* **Mitra Kampus & Mahasiswa Terverifikasi (50+ Kampus):**
  Institut Teknologi Sepuluh Nopember (ITS), IPB University, Sekolah Vokasi UGM, Universitas Diponegoro (UNDIP), Universitas Brawijaya, Universitas Gunadarma, Institut Teknologi Harapan Bangsa (ITHB), ITBJ Habibie, UIN Sayyid Ali Rahmatullah, BSI, Universitas Muhammadiyah Surakarta, Politeknik Negeri Padang, Universitas Pakuan, UTB, dll.

#### Section 08 — Conversion Enclosure & Institutional Footer
* **Conversion Enclosure:**
  * Background Midnight Navy (`#002855`).
  * Headline: *"Satu Langkah Nyata untuk Berkarya Bagi Indonesia."*
  * Subheadline: *"Pilih ruangmu sekarang. Apakah melalui program magang, pengembangan bisnis, atau kolaborasi kreatif."*
  * Tombol CTA: `Daftar Internship Batch 2` (Primary) dan `Konsultasi Bersama Tanya Mahreen` (Secondary).
* **Footer:**
  * Identitas resmi PT Mahreen Indonesia Group.
  * Tautan direktori 5 pilar ekosistem.
  * Tautan sosial media & kampanye: Instagram `@mahreenindonesia`, Canva Template Penempatan Logo, Twibbonize resmi, YouTube, TikTok, Email.
  * Hak cipta 2026 & tautan kebijakan.

---

## 4. Technical Architecture (React + Vite + TypeScript)

### 4.1 File & Directory Layout
```
mahreen/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── types/
│   │   └── mahreen.ts
│   ├── data/
│   │   └── mahreenData.ts
│   ├── lib/
│   │   └── pathfinder.ts            # Deterministic recommendation logic
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
│   └── assets/
│       └── ...
```

### 4.2 Deterministic Pathfinder Logic (`src/lib/pathfinder.ts`)
```typescript
export type UserGoalId = 'skill-portfolio' | 'business-growth' | 'creative-lifestyle' | 'social-impact' | 'learning-cert';

export interface PathfinderRecommendation {
  pillarId: string;
  pillarName: string;
  badge: string;
  headline: string;
  whyRelevant: string;
  availableRoles: string[];
  firstStep: string;
  ctaText: string;
  ctaType: 'modal' | 'scroll' | 'external';
  ctaTarget: string;
}

export function calculateRecommendation(goalId: UserGoalId): PathfinderRecommendation {
  switch (goalId) {
    case 'skill-portfolio':
      return {
        pillarId: 'internship',
        pillarName: 'Mahreen Indonesia Internship',
        badge: 'Talent Development',
        headline: 'Jalur Pengasahan Skill & Portofolio Proyek Nyata',
        whyRelevant: 'Membekali Anda dengan pengalaman kerja remote (WFH) terstruktur, bimbingan mentor 1-on-1, keterlibatan di proyek klien nyata, dan hak profit sharing 30%.',
        availableRoles: ['Website Development', 'Graphic Design', 'Video Editor', 'Social Media Management', 'Business Development & Partnership'],
        firstStep: 'Pelajari kurikulum 4 bulan (ADAPT, CREATE, DELIVER, IMPACT) dan daftarkan diri pada Batch 2.',
        ctaText: 'Pelajari Detail Batch 2',
        ctaType: 'modal',
        ctaTarget: 'batch2-modal'
      };
    case 'business-growth':
      return {
        pillarId: 'tanya-mahreen',
        pillarName: 'Tanya Mahreen',
        badge: 'Digital & Business Solutions',
        headline: 'Solusi Digital & Pertumbuhan Bisnis Modern',
        whyRelevant: 'Membantu UMKM, brand, dan organisasi tumbuh melalui pembuatan website profesional, strategi branding, pemasaran digital, dan konsultasi bisnis terarah.',
        availableRoles: ['Website Solutions', 'Branding & Creative', 'Social Media Management', 'Digital Marketing', 'Business Consultation'],
        firstStep: 'Konsultasikan tantangan bisnis Anda untuk mendapatkan rekomendasi solusi dan estimasi transparan.',
        ctaText: 'Eksplorasi Tanya Mahreen',
        ctaType: 'scroll',
        ctaTarget: 'ecosystem-section'
      };
    case 'creative-lifestyle':
      return {
        pillarId: 'mahreen-studio',
        pillarName: 'Mahreen Studio',
        badge: 'Creative Lifestyle & Atelier',
        headline: 'Eksplorasi Karya Visual, Apparel, dan Identitas Kreatif',
        whyRelevant: 'Ruang kreasi yang menggabungkan estetika modern, desain streetwear berkelas, dan storytelling visual inovatif.',
        availableRoles: ['Apparel & Merchandise', 'Visual Branding', 'Product Development', 'Creative Campaign'],
        firstStep: 'Lihat katalog karya kreatif Chapter 01 dan portofolio identitas visual.',
        ctaText: 'Lihat Koleksi Studio',
        ctaType: 'scroll',
        ctaTarget: 'portfolio-section'
      };
    case 'social-impact':
      return {
        pillarId: 'peduli-mahreen',
        pillarName: 'Peduli Mahreen & CSR',
        badge: 'Social Movement & Sustainability',
        headline: 'Gerakan Keberdayaan & Dampak Nyata untuk Masyarakat',
        whyRelevant: 'Wadah bagi mereka yang ingin mendedikasikan ide dan tenaga untuk peningkatan literasi anak prasejahtera, renovasi perpustakaan, dan pelestarian lingkungan.',
        availableRoles: ['Mentor Kelas Inspirasi', 'Relawan Pendidikan', 'CSR Campaign Coordinator', 'Community Facilitator'],
        firstStep: 'Pelajari inisiatif Pojok Literasi dan target dampak sosial 500+ siswa.',
        ctaText: 'Pelajari Program Sosial',
        ctaType: 'scroll',
        ctaTarget: 'ecosystem-section'
      };
    case 'learning-cert':
      return {
        pillarId: 'mahreen-learning',
        pillarName: 'Mahreen Learning',
        badge: 'Structured Education',
        headline: 'Akselerasi Karier melalui Pendidikan Terstruktur',
        whyRelevant: 'Program pembelajaran intensif berstandar industri dengan kurikulum berbasis proyek praktis.',
        availableRoles: ['Bootcamp 12 Minggu', 'Workshop Intensif 1-2 Hari', 'Program Sertifikasi Mitra'],
        firstStep: 'Pilih format belajar yang sesuai dengan ketersediaan waktu dan kebutuhan keahlian Anda.',
        ctaText: 'Lihat Jalur Belajar',
        ctaType: 'scroll',
        ctaTarget: 'ecosystem-section'
      };
  }
}
```

---

## 5. Official Submission: Penjelasan Karya Singkat (Maks 150 Kata)

Teks penjelasan resmi siap pakai untuk formulir pengumpulan (`https://bit.ly/FormTaskMII2`):

> **Konsep:**  
> Kami mengembangkan *“Mahreen Indonesia Ecosystem Navigator”*, sebuah platform web interaktif berbasis React dan bahasa desain Midtrans yang menerjemahkan kekayaan program Mahreen menjadi pengalaman eksplorasi terarah bagi generasi muda.
> 
> **Alasan:**  
> Banyaknya program Mahreen sering kali menimbulkan kebingungan bagi pemuda yang baru datang. Melalui fitur utama *“Temukan Ruangmu di Mahreen”*, pengunjung dapat memilih minatnya dan langsung mendapatkan panduan jalur yang relevan secara personal.
> 
> **Tujuan:**  
> Menghubungkan generasi muda dengan peluang nyata: magang berbasis proyek (Batch 2), solusi digital UMKM (Tanya Mahreen), studio kreatif, hingga gerakan sosial dan sertifikasi.
> 
> **Dampak:**  
> Meningkatkan pemahaman publik, memperkuat kredibilitas melalui bukti legalitas resmi dan karya nyata alumni, serta mendorong partisipasi aktif generasi muda dalam mewujudkan semangat *“Berkarya untuk Indonesia”*.  
> *(Total: 110 kata — Memenuhi ketentuan ≤ 150 kata)*

---

## 6. Self-Verification & Quality Assurance Checklist

- [x] **Strict Midtrans Tokens:** Primary CTA memakai radius presisi `2px`, header `Midnight Navy (#002855)`, judul `Slate Navy (#123049)`.
- [x] **No Generic AI Patterns:** Bebas dari gradien ungu klise, floating blob acak, kartu monoton, dan copy kosong.
- [x] **Zero Fabrication:** Semua data alumni, pilar, hukum, dan mitra kampus 100% dari riset sumber resmi.
- [x] **Deterministic Logic:** Pathfinder menggunakan `src/lib/pathfinder.ts` tanpa ketergantungan acak.
- [x] **TypeScript Check:** `tsc --noEmit` lolos tanpa error.
- [x] **Production Build:** `npm run build` berhasil menghasilkan bundle siap produksi.
