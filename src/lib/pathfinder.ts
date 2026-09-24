import type { UserGoalId, PathfinderRecommendation } from '../types/mahreen';

/**
 * Deterministic Pathfinder recommendation engine.
 * Maps user aspirational goals directly into ecosystem pillars,
 * actionable roles, and verified CTAs without stochastic or external LLM dependencies.
 */
export function calculateRecommendation(goalId: UserGoalId): PathfinderRecommendation {
  switch (goalId) {
    case 'skill-portfolio':
      return {
        pillarId: 'internship',
        pillarName: 'Mahreen Indonesia Internship',
        badge: 'Talent Development',
        headline: 'Jalur Pengasahan Skill & Portofolio Proyek Nyata',
        whyRelevant:
          'Membekali Anda dengan pengalaman kerja remote (WFH) terstruktur, bimbingan mentor 1-on-1, keterlibatan di proyek klien nyata, dan hak profit sharing 30%.',
        availableRoles: [
          'Website Development',
          'Graphic Design',
          'Video Editor',
          'Social Media Management',
          'Business Development & Partnership',
        ],
        firstStep:
          'Pelajari kurikulum 4 bulan (ADAPT, CREATE, DELIVER, IMPACT) dan daftarkan diri pada Batch 2.',
        ctaText: 'Pelajari Detail Batch 2',
        ctaType: 'modal',
        ctaTarget: 'batch2-modal',
      };

    case 'business-growth':
      return {
        pillarId: 'tanya-mahreen',
        pillarName: 'Tanya Mahreen',
        badge: 'Digital & Business Solutions',
        headline: 'Solusi Digital & Pertumbuhan Bisnis Modern',
        whyRelevant:
          'Membantu UMKM, brand, dan organisasi tumbuh melalui pembuatan website profesional, strategi branding, pemasaran digital, dan konsultasi bisnis terarah.',
        availableRoles: [
          'Website Solutions',
          'Branding & Creative',
          'Social Media Management',
          'Digital Marketing',
          'Business Consultation',
        ],
        firstStep:
          'Konsultasikan tantangan bisnis Anda untuk mendapatkan rekomendasi solusi dan estimasi transparan.',
        ctaText: 'Eksplorasi Tanya Mahreen',
        ctaType: 'scroll',
        ctaTarget: 'ecosystem-section',
      };

    case 'creative-lifestyle':
      return {
        pillarId: 'mahreen-studio',
        pillarName: 'Mahreen Studio',
        badge: 'Creative Lifestyle & Atelier',
        headline: 'Eksplorasi Karya Visual, Apparel, dan Identitas Kreatif',
        whyRelevant:
          'Ruang kreasi yang menggabungkan estetika modern, desain streetwear berkelas, dan storytelling visual inovatif.',
        availableRoles: [
          'Apparel & Merchandise',
          'Visual Branding',
          'Product Development',
          'Creative Campaign',
        ],
        firstStep:
          'Lihat katalog karya kreatif Chapter 01 dan portofolio identitas visual.',
        ctaText: 'Lihat Koleksi Studio',
        ctaType: 'scroll',
        ctaTarget: 'portfolio-section',
      };

    case 'social-impact':
      return {
        pillarId: 'peduli-mahreen',
        pillarName: 'Peduli Mahreen & CSR',
        badge: 'Social Movement & Sustainability',
        headline: 'Gerakan Keberdayaan & Dampak Nyata untuk Masyarakat',
        whyRelevant:
          'Wadah bagi mereka yang ingin mendedikasikan ide dan tenaga untuk peningkatan literasi anak prasejahtera, renovasi perpustakaan, dan pelestarian lingkungan.',
        availableRoles: [
          'Mentor Kelas Inspirasi',
          'Relawan Pendidikan',
          'CSR Campaign Coordinator',
          'Community Facilitator',
        ],
        firstStep:
          'Pelajari inisiatif Pojok Literasi dan target dampak sosial 500+ siswa.',
        ctaText: 'Pelajari Program Sosial',
        ctaType: 'scroll',
        ctaTarget: 'ecosystem-section',
      };

    case 'learning-cert':
      return {
        pillarId: 'mahreen-learning',
        pillarName: 'Mahreen Learning',
        badge: 'Structured Education',
        headline: 'Akselerasi Karier melalui Pendidikan Terstruktur',
        whyRelevant:
          'Program pembelajaran intensif berstandar industri dengan kurikulum berbasis proyek praktis.',
        availableRoles: [
          'Bootcamp 12 Minggu',
          'Workshop Intensif 1-2 Hari',
          'Program Sertifikasi Mitra',
        ],
        firstStep:
          'Pilih format belajar yang sesuai dengan ketersediaan waktu dan kebutuhan keahlian Anda.',
        ctaText: 'Lihat Jalur Belajar',
        ctaType: 'scroll',
        ctaTarget: 'ecosystem-section',
      };

    default:
      // Sensible fallback for unknown or invalid inputs
      return {
        pillarId: 'internship',
        pillarName: 'Mahreen Indonesia Internship',
        badge: 'Talent Development',
        headline: 'Jalur Pengasahan Skill & Portofolio Proyek Nyata',
        whyRelevant:
          'Membekali Anda dengan pengalaman kerja remote (WFH) terstruktur, bimbingan mentor 1-on-1, keterlibatan di proyek klien nyata, dan hak profit sharing 30%.',
        availableRoles: [
          'Website Development',
          'Graphic Design',
          'Video Editor',
          'Social Media Management',
          'Business Development & Partnership',
        ],
        firstStep:
          'Pelajari kurikulum 4 bulan (ADAPT, CREATE, DELIVER, IMPACT) dan daftarkan diri pada Batch 2.',
        ctaText: 'Pelajari Detail Batch 2',
        ctaType: 'modal',
        ctaTarget: 'batch2-modal',
      };
  }
}
