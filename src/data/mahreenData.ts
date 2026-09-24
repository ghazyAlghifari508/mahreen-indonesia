import type {
  Pillar,
  ProjectItem,
  AlumniAwardee,
  PathfinderOption,
  InternshipMonth,
  LegalRecord,
  CampusPartner,
  MahreenLearningProgram,
  Batch2Details,
} from '../types/mahreen';

/**
 * 5 Core Ecosystem Pillars of Mahreen Indonesia
 */
export const PILLARS_DATA: Pillar[] = [
  {
    id: 'internship',
    name: 'Mahreen Indonesia Internship',
    category: 'Talent Development',
    tagline: 'Ruang tumbuh talenta kreatif & digital berbasis proyek nyata.',
    description:
      'Program magang terstruktur selama 4 bulan yang menghubungkan mahasiswa dan talenta muda dengan proyek industri nyata, pendampingan mentor ahli, dan skema bagi hasil profesional.',
    highlightMetrics: [
      { label: 'Mitra Kampus', value: '50+' },
      { label: 'Bulan Program', value: '4 Bulan' },
      { label: 'Profit Sharing', value: '30%' },
    ],
    servicesOrFeatures: [
      'Website Development',
      'Graphic Design',
      'Video Editing',
      'Social Media Management',
      'Business Development & Partnership',
    ],
    ctaText: 'Daftar Internship Batch 2',
    ctaAction: 'open-batch2-modal',
    badge: 'Talent Development',
  },
  {
    id: 'tanya-mahreen',
    name: 'Tanya Mahreen',
    category: 'Digital & Business Solutions',
    tagline: 'Solusi digital dan kreatif untuk membantu UMKM & brand bertumbuh.',
    description:
      'Layanan konsultasi dan agensi digital terintegrasi untuk akselerasi bisnis lokal, UMKM, dan brand melalui website profesional, identitas visual terpadu, dan strategi digital marketing.',
    highlightMetrics: [
      { label: 'Proyek Selesai', value: '100+' },
      { label: 'Web Dev Mulai', value: 'Rp1.5jt' },
      { label: 'Branding Mulai', value: 'Rp499rb' },
    ],
    servicesOrFeatures: [
      'Website Development',
      'Logo & Brand Identity',
      'Social Media Management',
      'Digital Marketing & SEO',
      'Business Consultation',
    ],
    startingPrice: 'Rp499.000',
    ctaText: 'Konsultasi Tanya Mahreen',
    ctaAction: 'scroll-consultation',
    badge: 'Business Solutions',
  },
  {
    id: 'mahreen-studio',
    name: 'Mahreen Studio',
    category: 'Creative Lifestyle & Atelier',
    tagline:
      'Creative lifestyle brand yang berfokus pada apparel dan identitas visual modern.',
    description:
      'Eksplorasi estetika kontemporer, produk apparel berkarakter, dan identitas visual berkelas yang memadukan filosofi desain bermakna dengan kultur generasi muda.',
    highlightMetrics: [
      { label: 'Koleksi', value: 'Chapter 01' },
      { label: 'Desain Fokus', value: '6 Pilar Kreatif' },
    ],
    servicesOrFeatures: [
      'Apparel & Merchandise',
      'Visual Branding',
      'Product Development',
      'Creative Campaign',
      'Signature Collection',
    ],
    ctaText: 'Jelajahi Koleksi Studio',
    ctaAction: 'scroll-portfolio',
    badge: 'Creative Lifestyle',
  },
  {
    id: 'peduli-mahreen',
    name: 'Peduli Mahreen',
    category: 'Social Movement',
    tagline:
      'Gerakan kepedulian sosial melalui pendidikan, literasi, dan pemberdayaan inklusif.',
    description:
      'Inisiatif filantropi dan edukasi akar rumput untuk membuka akses literasi dan inspirasi masa depan bagi anak-anak dan generasi muda di daerah prasejahtera.',
    highlightMetrics: [
      { label: 'Target Siswa', value: '500+' },
      { label: 'Sekolah Binaan', value: '15 Sekolah' },
      { label: 'Tenaga Mentor', value: '50 Mentor' },
    ],
    servicesOrFeatures: [
      'Kelas Inspirasi: Menyemai Mimpi',
      'Renovasi Library Hub',
      'Literasi Digital Prasejahtera',
      'Pojok Literasi Komunitas',
    ],
    ctaText: 'Dukung Gerakan Sosial',
    ctaAction: 'scroll-impact',
    badge: 'Social Movement',
  },
  {
    id: 'mahreen-csr',
    name: 'Mahreen CSR',
    category: 'Partnership & Sustainability',
    tagline:
      'Membangun kolaborasi CSR dan keberlanjutan bersama mitra strategis.',
    description:
      'Jembatan kolaborasi strategis antara dunia usaha dengan agenda keberlanjutan lingkungan hidup dan pemberdayaan sosial jangka panjang.',
    highlightMetrics: [
      { label: 'Pohon Endemik', value: '10,000' },
      { label: 'Program CSR', value: '15+' },
      { label: 'Kota Terjangkau', value: '20+' },
    ],
    servicesOrFeatures: [
      'Reboisasi Mahreen Jabar',
      'Mahreen Learning Center',
      'Community Development',
      'Eco-Hub Circular Economy',
    ],
    ctaText: 'Kolaborasi Kemitraan CSR',
    ctaAction: 'scroll-partnership',
    badge: 'Partnership & Sustainability',
  },
];

/**
 * Educational programs structured under Mahreen Learning
 */
export const MAHREEN_LEARNING_INFO = {
  title: 'Mahreen Learning',
  headline: 'Payung Edukasi & Akselerasi Karier Generasi Muda',
  description:
    'Program pelatihan terarah dan berbasis kurikulum industri untuk menjembatani kesenjangan antara dunia akademis dan kebutuhan industri digital masa kini.',
  tracks: [
    {
      type: 'Bootcamp',
      duration: '12 Minggu',
      description: 'Program intensif live mentor dengan output proyek riil.',
    },
    {
      type: 'Workshop',
      duration: '1-2 Hari',
      description: 'Pelatihan tematik fokus pada penguasaan tools spesifik.',
    },
    {
      type: 'Sertifikasi',
      duration: 'Uji Kompetensi',
      description: 'Pengujian standar industri dengan sertifikat kredibel.',
    },
  ],
};

export const MAHREEN_LEARNING_PROGRAMS: MahreenLearningProgram[] = [
  {
    id: 'bootcamp-fullstack',
    title: 'Fullstack Web Development Intensive Bootcamp',
    type: 'Bootcamp',
    duration: '12 Minggu (3 Bulan)',
    format: 'Live Online Mentoring & Project Sprint',
    description:
      'Belajar membangun aplikasi web modern end-to-end dengan React, TypeScript, Node.js, dan database arsitektur modern.',
    curriculum: [
      'Frontend Fundamentals & TypeScript',
      'React & Modern Component Architecture',
      'RESTful API & Database Integration',
      'Production Deployment & CI/CD',
    ],
    badge: 'Intensif',
  },
  {
    id: 'workshop-brand-identity',
    title: 'Brand Identity & Visual System Masterclass',
    type: 'Workshop',
    duration: '2 Hari Intensif (Akhir Pekan)',
    format: 'Hands-on Figma Workshop',
    description:
      'Menguasai metodologi perancangan logo sistematis, tipografi identitas, dan penyusunan brand guideline profesional.',
    curriculum: [
      'Brand Audit & Creative Discovery',
      'Logo Crafting & Vector Precision',
      'Color Harmonies & Typography Hierarchy',
      'Exporting Brand Guidelines for Clients',
    ],
    badge: 'Akhir Pekan',
  },
  {
    id: 'sertifikasi-digital-talent',
    title: 'Sertifikasi Kompetensi Talenta Digital Mahreen',
    type: 'Sertifikasi',
    duration: 'Portfolio Review & Assessment',
    format: 'Industry Standard Review',
    description:
      'Validasi independen atas kemampuan praktis talenta muda yang siap direkomendasikan ke jejaring mitra bisnis Mahreen.',
    curriculum: [
      'Real Project Code/Asset Audit',
      'Technical Interview & Case Study',
      'Industry Ethics & Collaboration Assessment',
      'Official Certificate Issuance',
    ],
    badge: 'Kredensial',
  },
];

/**
 * 5 Deterministic Pathfinder Exploration Options
 */
export const PATHFINDER_OPTIONS: PathfinderOption[] = [
  {
    id: 'skill-portfolio',
    label: 'Asah Skill & Bangun Portofolio',
    iconName: 'Briefcase',
    description:
      'Mencari pengalaman kerja nyata terstruktur, bimbingan mentor 1-on-1, dan pembagian fee komersial 30%.',
    targetPersona: 'Mahasiswa / Fresh Graduate',
  },
  {
    id: 'business-growth',
    label: 'Kembangkan Bisnis & Solusi Digital',
    iconName: 'TrendingUp',
    description:
      'Mencari solusi pembuatan website profesional, identitas visual brand terpadu, dan strategi digital marketing.',
    targetPersona: 'Founder UMKM & Brand Owner',
  },
  {
    id: 'creative-lifestyle',
    label: 'Eksplorasi Desain & Fashion Lifestyle',
    iconName: 'Palette',
    description:
      'Tertarik dengan apparel kontemporer berkualitas tinggi, eksplorasi estetika, dan merchandise kreatif.',
    targetPersona: 'Kreator & Fashion Enthusiast',
  },
  {
    id: 'social-impact',
    label: 'Kontribusi Sosial & Pemberdayaan',
    iconName: 'HeartHandshake',
    description:
      'Ingin mendedikasikan tenaga dan empati untuk renovasi perpustakaan, kelas inspirasi, atau program kemitraan CSR.',
    targetPersona: 'Relawan & Changemaker',
  },
  {
    id: 'learning-cert',
    label: 'Pendidikan & Sertifikasi Terstruktur',
    iconName: 'GraduationCap',
    description:
      'Ingin mempercepat kesiapan karier melalui kurikulum bootcamp terarah, workshop praktis, atau uji kompetensi.',
    targetPersona: 'Pencari Karier & Talenta Muda',
  },
];

/**
 * Verified Real Projects Across Ecosystem
 */
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'project-fauzan-adzima',
    title: 'Website Yayasan Fauzan Adzima Sukajadi',
    pillar: 'Mahreen Indonesia Internship',
    category: 'Website',
    year: '2026',
    description:
      'Pengembangan portal profil digital dan sistem donasi interaktif untuk yayasan sosial dan pendidikan Fauzan Adzima di Sukajadi.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Responsive Web', 'Magang Mahreen'],
    deliverables: [
      'UI/UX Design Wireframe',
      'Interactive Donation Portal',
      'CMS Admin Panel',
      'SEO & Speed Optimization',
    ],
    clientOrBeneficiary: 'Yayasan Fauzan Adzima',
  },
  {
    id: 'project-urban-odyssey',
    title: 'Urban Odyssey Apparel Collection',
    pillar: 'Mahreen Studio',
    category: 'Branding',
    year: '2026',
    description:
      'Koleksi busana streetwear Chapter 01 bertema penjelajahan urban modern dengan eksplorasi tipografi futuristik dan material premium.',
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80',
    tags: [
      'Streetwear Design',
      'Art Direction',
      'Packaging Design',
      'Lookbook Production',
    ],
    deliverables: [
      'Signature Noir Hoodie',
      'Minimalist Oversized Tee',
      'Lookbook Campaign',
      'Hangtag & Custom Box',
    ],
    clientOrBeneficiary: 'Mahreen Studio Collection',
  },
  {
    id: 'project-kopi-selasar',
    title: 'Rebranding Visual Identity Kopi Selasar',
    pillar: 'Mahreen Studio',
    category: 'Branding',
    year: '2025',
    description:
      'Revitalisasi identitas visual menyeluruh untuk brand kedai kopi lokal, mencakup logo, color guide, kemasan take-away, dan visual merchandising.',
    image:
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    tags: ['Brand Identity', 'Packaging', 'Brand Guideline', 'Typography'],
    deliverables: [
      'Logo Suite & Iconography',
      'Packaging Cup & Beans',
      'Social Media Templates',
      'Signage Guidelines',
    ],
    clientOrBeneficiary: 'Kopi Selasar Indonesia',
  },
  {
    id: 'project-griya-batik',
    title: 'E-Commerce Platform Griya Batik Nusantara',
    pillar: 'Tanya Mahreen',
    category: 'Website',
    year: '2026',
    description:
      'Platform toko online modern untuk perajin batik tradisional dengan katalog interaktif, checkout praktis, dan integrasi WhatsApp payment.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    tags: ['E-Commerce', 'Next.js', 'Payment Flow', 'UMKM Digital'],
    deliverables: [
      'Katalog Produk Berfilter',
      'WhatsApp Direct Checkout',
      'Mobile Friendly Layout',
      'Inventory Sync Engine',
    ],
    clientOrBeneficiary: 'Griya Batik Nusantara',
  },
  {
    id: 'project-sehatku-app',
    title: 'SehatKu Healthcare Platform UI/UX',
    pillar: 'Tanya Mahreen',
    category: 'Website',
    year: '2025',
    description:
      'Perancangan antarmuka pengguna komprehensif untuk portal booking konsultasi medis terpadu dan rekam medis preventif pasien.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tags: ['UI/UX Design', 'Design System', 'Figma Prototyping', 'Accessibility'],
    deliverables: [
      'Design System 40+ Components',
      'Patient Consultation Flow',
      'Appointment Booking Prototype',
      'WCAG AA Accessibility Audit',
    ],
    clientOrBeneficiary: 'SehatKu Telehealth Indonesia',
  },
  {
    id: 'project-pojok-literasi',
    title: 'Pojok Literasi & Edukasi Cigugur',
    pillar: 'Peduli Mahreen',
    category: 'Social Impact',
    year: '2026',
    description:
      'Pembangunan ruang baca komunitas dan pengadaan 1.200 buku bacaan bergambar untuk anak-anak sekolah dasar di Cigugur, Jawa Barat.',
    image:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    tags: [
      'Pendidikan Inklusif',
      'Donasi Buku',
      'Renovasi Library',
      'Community Hub',
    ],
    deliverables: [
      'Renovasi 1 Unit Perpustakaan Desa',
      'Pengadaan 1.200 Buku Edukasi',
      'Sesi Kelas Inspirasi 4 Minggu',
      'Pelatihan Pengelola Komunitas',
    ],
    clientOrBeneficiary: 'Komunitas Anak Pesisir & Desa Cigugur',
  },
  {
    id: 'project-ecohub-csr',
    title: 'Eco-Hub Circular Economy & Reboisasi',
    pillar: 'Mahreen CSR',
    category: 'Sustainability',
    year: '2026',
    description:
      'Inisiatif kemitraan hijau multi-pihak yang menanam 10.000 bibit pohon endemik dan mendirikan fasilitas pengolahan sampah organik di 5 desa binaan.',
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    tags: ['CSR Partnership', 'Reboisasi', 'Circular Economy', 'ESG Impact'],
    deliverables: [
      'Penanaman 10.000 Pohon Endemik',
      'Fasilitas Kompos Organik Terpadu',
      'Laporan Metrik Dampak ESG',
      'Pemberdayaan 5 Kelompok Tani',
    ],
    clientOrBeneficiary: 'Konsorsium Mitra Hijau Jawa Barat',
  },
];

/**
 * 6 Batch 1 Alumni Awardees (Hall of Fame)
 */
export const ALUMNI_AWARDEES: AlumniAwardee[] = [
  {
    name: 'Andhika Septiansyah',
    role: 'Website Development Intern',
    award: 'Web Innovator Award',
    citation:
      'Berhasil mengembangkan platform digital responsif dan sistem informasi interaktif dengan standar performa dan kebersihan kode industri tinggi.',
    division: 'Website Development',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Akmal Yassar',
    role: 'Graphic Design Intern',
    award: 'Best Intern of the Batch',
    citation:
      'Menunjukkan konsistensi estetika visual kelas agensi tingkat tinggi serta kecepatan eksekusi materi promosi dan branding multikanal.',
    division: 'Graphic Design',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Chintya Kharisma Y.',
    role: 'Graphic Design Intern',
    award: 'Most Outstanding Intern',
    citation:
      'Kepemimpinan kreatif yang luar biasa dalam mendefinisikan identitas brand, kemasan produk, dan harmoni visual lintas platform.',
    division: 'Graphic Design',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Raihan Syahputra F.',
    role: 'Website Development Intern',
    award: 'Most Engaged Intern',
    citation:
      'Dedikasi tinggi dalam penyempurnaan UI/UX interaktif, kolaborasi teknis lintas divisi, dan pemecahan masalah kode yang tangkas.',
    division: 'Website Development',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Ikhrom Nur K.',
    role: 'Social Media Management Intern',
    award: 'Best Content Strategist',
    citation:
      'Meningkatkan interaksi media sosial secara organik dan signifikan melalui copywriting naratif berbasis riset perilaku audiens muda.',
    division: 'Social Media Management',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Athaya Aurellin K.',
    role: 'Video Editor Intern',
    award: 'Creative Editing Award',
    citation:
      'Memproduksi serial video kampanye berdaya jangkau luas dengan ritme editing dinamis dan storytelling emosional yang berbobot.',
    division: 'Video Editing',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
  },
];

/**
 * 20+ Real Campus Partners & Student Bases
 */
export const CAMPUS_PARTNERS: CampusPartner[] = [
  {
    name: 'Institut Teknologi Sepuluh Nopember',
    abbreviation: 'ITS',
    category: 'Institut',
    location: 'Surabaya',
  },
  {
    name: 'IPB University',
    abbreviation: 'IPB',
    category: 'Institut',
    location: 'Bogor',
  },
  {
    name: 'Sekolah Vokasi Universitas Gadjah Mada',
    abbreviation: 'SV UGM',
    category: 'Universitas',
    location: 'Yogyakarta',
  },
  {
    name: 'Universitas Diponegoro',
    abbreviation: 'UNDIP',
    category: 'Universitas',
    location: 'Semarang',
  },
  {
    name: 'Universitas Brawijaya',
    abbreviation: 'UB',
    category: 'Universitas',
    location: 'Malang',
  },
  {
    name: 'Universitas Gunadarma',
    abbreviation: 'UG',
    category: 'Universitas',
    location: 'Depok',
  },
  {
    name: 'Institut Teknologi Harapan Bangsa',
    abbreviation: 'ITHB',
    category: 'Institut',
    location: 'Bandung',
  },
  {
    name: 'Institut Teknologi Bacharuddin Jusuf Habibie',
    abbreviation: 'ITBJ Habibie',
    category: 'Institut',
    location: 'Parepare',
  },
  {
    name: 'UIN Sayyid Ali Rahmatullah',
    abbreviation: 'UIN SATU',
    category: 'Universitas',
    location: 'Tulungagung',
  },
  {
    name: 'Universitas Bina Sarana Informatika',
    abbreviation: 'UBSI',
    category: 'Universitas',
    location: 'Jakarta',
  },
  {
    name: 'Universitas Muhammadiyah Surakarta',
    abbreviation: 'UMS',
    category: 'Universitas',
    location: 'Surakarta',
  },
  {
    name: 'Politeknik Negeri Padang',
    abbreviation: 'PNP',
    category: 'Politeknik',
    location: 'Padang',
  },
  {
    name: 'Universitas Pakuan',
    abbreviation: 'UNPAK',
    category: 'Universitas',
    location: 'Bogor',
  },
  {
    name: 'Universitas Teknologi Bandung',
    abbreviation: 'UTB',
    category: 'Universitas',
    location: 'Bandung',
  },
  {
    name: 'Politeknik Negeri Bandung',
    abbreviation: 'POLBAN',
    category: 'Politeknik',
    location: 'Bandung',
  },
  {
    name: 'Universitas Padjadjaran',
    abbreviation: 'UNPAD',
    category: 'Universitas',
    location: 'Jatinangor',
  },
  {
    name: 'Universitas Pendidikan Indonesia',
    abbreviation: 'UPI',
    category: 'Universitas',
    location: 'Bandung',
  },
  {
    name: 'Universitas Telkom',
    abbreviation: 'Telkom University',
    category: 'Universitas',
    location: 'Bandung',
  },
  {
    name: 'Universitas Sebelas Maret',
    abbreviation: 'UNS',
    category: 'Universitas',
    location: 'Surakarta',
  },
  {
    name: 'Politeknik Elektronika Negeri Surabaya',
    abbreviation: 'PENS',
    category: 'Politeknik',
    location: 'Surabaya',
  },
  {
    name: 'Universitas Negeri Jakarta',
    abbreviation: 'UNJ',
    category: 'Universitas',
    location: 'Jakarta',
  },
  {
    name: 'Politeknik Negeri Jakarta',
    abbreviation: 'PNJ',
    category: 'Politeknik',
    location: 'Jakarta',
  },
  {
    name: 'Lembaga Mitra Komunitas Mahasiswa Indonesia',
    abbreviation: 'LMKMI',
    category: 'Lembaga Mitra',
    location: 'Nasional',
  },
];

/**
 * Official Legal Records & Institutional Verification
 */
export const LEGAL_RECORDS: LegalRecord[] = [
  {
    title: 'Keputusan Menteri Hukum Republik Indonesia',
    identifier: 'AHU-A089408.AH.01.30.Tahun 2026',
    label: 'SK Kemenkumham RI',
    description:
      'Pengesahan Pendirian Badan Hukum Perseroan Terbatas PT Mahreen Indonesia Group secara resmi oleh Kemenkumham RI.',
  },
  {
    title: 'Nomor Induk Berusaha (NIB)',
    identifier: '1203260152054',
    label: 'NIB Berusaha',
    description:
      'Registrasi Legalitas Operasional & Perizinan Berusaha Terpadu Berbasis Risiko Republik Indonesia.',
  },
  {
    title: 'Hak Atas Kekayaan Intelektual (HAKI)',
    identifier: '001180040 (Permohonan EC002026042583)',
    label: 'Sertifikat Merek & Karya Cipta',
    description:
      'Pendaftaran Perlindungan Merek Dagang & Hak Cipta Ekosistem Mahreen Indonesia di DJKI Kemenkumham RI.',
  },
];

/**
 * Internship 4-Month Curriculum Phases
 */
export const INTERNSHIP_JOURNEY_MONTHS: InternshipMonth[] = [
  {
    monthNumber: 1,
    monthName: 'Oktober 2026',
    phase: 'ADAPT',
    title: 'Adaptasi & Orientasi Sistem MIOS',
    focusDescription:
      'Orientasi mendalam sistem kerja Mahreen Internship Operating System (MIOS), pengenalan divisi, pelatihan tools profesional, dan pengerjaan sprint awal.',
    flagshipProgram: 'Opening & Industry Orientation',
    keyOutputs: [
      'Pemahaman Komprehensif Workflow MIOS',
      'Setup Production & Development Environment',
      'Mini Project Kolaborasi Antardivisi',
      'Pembentukan Ritme Kerja & Akuntabilitas',
    ],
  },
  {
    monthNumber: 2,
    monthName: 'November 2026',
    phase: 'CREATE',
    title: 'Produksi Internal & Sinergi Lintas Tim',
    focusDescription:
      'Fokus pada produksi aset internal Mahreen Studio, penerbitan konten terpadu, dan pengembangan fondasi produk digital terintegrasi.',
    flagshipProgram: 'Digital Business Forum',
    keyOutputs: [
      'Katalog Produk Studio Chapter 01',
      'Serial Kampanye Media Sosial Multikanal',
      'Penyusunan Desain Sistem UI / UX',
      'Penjajakan Kemitraan Strategis',
    ],
  },
  {
    monthNumber: 3,
    monthName: 'Desember 2026',
    phase: 'DELIVER',
    title: 'Keterlibatan Real Client Project & Standar Industri',
    focusDescription:
      'Penerjunan langsung pada proyek klien komersial nyata di bawah supervisi mentor, memenuhi tenggat waktu riil, dan pembagian kompensasi hasil.',
    flagshipProgram: 'Mahreen Champions League',
    keyOutputs: [
      'Eksekusi Proyek Klien Nyata Berstandar Industri',
      'Komunikasi Langsung & Presentasi Klien',
      'Hak Profit Sharing 30% atas Proyek Komersial',
      'Pengujian Kualitas & Refinement Aset',
    ],
  },
  {
    monthNumber: 4,
    monthName: 'Januari 2027',
    phase: 'IMPACT',
    title: 'Final Showcase, Portofolio & Kelulusan',
    focusDescription:
      'Finalisasi seluruh deliverables proyek, penyusunan studi kasus portofolio profesional untuk melamar kerja, pameran hasil karya, dan wisuda alumni.',
    flagshipProgram: 'Final Project Showcase & Graduation',
    keyOutputs: [
      'Portofolio Komersial Siap Melamar Kerja',
      'Sertifikat Resmi & Surat Rekomendasi Magang',
      'Evaluasi Kinerja Individu 360 Derajat',
      'Akses Jejaring Alumni Mahreen Indonesia',
    ],
  },
];

/**
 * Mahreen Indonesia Internship Batch 2 Comprehensive Structure
 */
export const BATCH2_DETAILS: Batch2Details = {
  title: 'Mahreen Indonesia Internship Batch 2',
  batchNumber: 2,
  period: '1 Oktober 2026 – 31 Januari 2027',
  workSystem: 'Remote WFH / WFA (Work From Anywhere)',
  commitment: '4 Bulan — Terjadwal & Terstruktur',
  feeScheme:
    'Profit Sharing 30% untuk Tim Pelaksana atas Proyek Komersial Mahreen yang Menghasilkan Pendapatan',
  weeklyOperatingSystem: [
    {
      day: 'Senin',
      phase: 'Kickoff & Sprint Planning',
      description:
        'Penetapan target mingguan divisi, pembagian task, dan sinkronisasi prioritas tim.',
    },
    {
      day: 'Selasa',
      phase: 'Independent Production',
      description:
        'Fokus eksekusi mandiri materi visual, kode aplikasi, dan riset konten.',
    },
    {
      day: 'Rabu',
      phase: 'Cross-Division Collaboration',
      description:
        'Penyelarasan antar tim: Web Dev, Graphic Design, SMM, Video Editor, & Partnership.',
    },
    {
      day: 'Kamis',
      phase: 'Client Project & Feedback Loop',
      description:
        'Review berkala bersama mentor industri dan pemenuhan standar klien.',
    },
    {
      day: 'Jumat',
      phase: 'Weekly Review & Upskilling Session',
      description:
        'Evaluasi capaian sprint, sesi sharing pengetahuan, dan apresiasi tim.',
    },
  ],
  divisions: [
    {
      id: 'web-dev',
      name: 'Website Development',
      description:
        'Membangun antarmuka web modern responsif, portal interaktif, dan arsitektur platform digital yang handal.',
      keyOutputs: [
        'Landing Page Responsif Berstandar Industri',
        'Web Applications & Frontend Architecture',
        'Clean Code, Performance, & Accessibility (WCAG)',
        'Integrasi API & Dokumentasi Teknis',
      ],
      skillsGained: [
        'React & TypeScript',
        'Tailwind CSS & Component Architecture',
        'Vite & Modern Build Tools',
        'Git Workflow & GitHub Collaboration',
      ],
    },
    {
      id: 'graphic-design',
      name: 'Graphic Design',
      description:
        'Menciptakan identitas visual brand, aset promosi kelas agensi, dan desain kemasan produk berkualitas tinggi.',
      keyOutputs: [
        'Brand Identity Guidelines & Logo Suite',
        'Social Media Feed & Campaign Visuals',
        'Merchandise Artwork & Product Packaging',
        'Marketing Collateral & Pitch Presentations',
      ],
      skillsGained: [
        'Figma & UI Layout',
        'Adobe Illustrator & Photoshop',
        'Typography & Color Systems',
        'Visual Storytelling',
      ],
    },
    {
      id: 'video-editing',
      name: 'Video Editor',
      description:
        'Mengolah konten audio-visual gerak cepat, motion graphics, dan narasi video kampanye yang memikat audiens.',
      keyOutputs: [
        'Reels / TikTok Narrative Short Videos',
        'Corporate Project Showcase Videos',
        'Motion Graphics & Title Animations',
        'Audio Post-Production & Sound Design',
      ],
      skillsGained: [
        'Premiere Pro & After Effects',
        'Visual Pacing & Dynamic Editing',
        'Color Grading & Audio Mastering',
        'Social Content Hook Optimization',
      ],
    },
    {
      id: 'social-media',
      name: 'Social Media Management',
      description:
        'Merancang strategi distribusi konten mingguan, narasi copywriting persuasif, dan membangun engagement audiens muda.',
      keyOutputs: [
        '7-Day Editorial Content Calendar',
        'Hook-Driven Narrative Copywriting',
        'Community Interaction & DM Handling Plan',
        'Social Growth Analytics Report',
      ],
      skillsGained: [
        'Content Strategy & Research',
        'Copywriting & Narrative Tone of Voice',
        'Audience Insight Analytics',
        'Trend Jacking & Viral Strategy',
      ],
    },
    {
      id: 'bizdev-partnership',
      name: 'Business Development & Partnership',
      description:
        'Merumuskan proposal kemitraan institusi, memperluas jaringan sponsor, dan mengakuisisi proyek komersial baru.',
      keyOutputs: [
        'Partnership Concept Paper',
        'Institutional Sponsorship Deck',
        'Client Prospecting & Pipeline Sheet',
        'Memorandum of Understanding (MOU) Framework',
      ],
      skillsGained: [
        'B2B Communication & Pitching',
        'Commercial Negotiation Strategy',
        'Business Proposal Authoring',
        'Strategic Stakeholder Networking',
      ],
    },
  ],
  journeyPhases: INTERNSHIP_JOURNEY_MONTHS,
};

/**
 * Organization Metadata & Official Links
 */
export const ORGANIZATION_META = {
  legalName: 'PT Mahreen Indonesia Group',
  brandName: 'Mahreen Indonesia',
  tagline: 'Satu Ide. Satu Karya. Satu Dampak.',
  theme: 'BERKARYA UNTUK INDONESIA',
  campaign: '#From Learning to Real Impact',
  description:
    'Ekosistem kreatif yang memberdayakan bisnis, mahasiswa, komunitas, dan generasi muda Indonesia melalui kreativitas, teknologi, pendidikan, dan kolaborasi nyata.',
  leadership: {
    founder: 'Mohamad Dzikri Arfiansyah, S.T.',
    ceo: 'Tania Restiani Fajar',
  },
  socials: {
    instagram: '@mahreenindonesia',
    instagramUrl: 'https://instagram.com/mahreenindonesia',
    email: 'halo@mahreen.id',
    twibbonUrl: 'https://twibbonize.com/mii-batch2',
    formSubmissionUrl: 'https://bit.ly/FormTaskMII2',
  },
  statsOverview: [
    { label: 'Mitra Kampus', value: '50+' },
    { label: 'Proyek Selesai', value: '100+' },
    { label: 'Pohon Tertanam', value: '10,000' },
    { label: 'Siswa Terdampak', value: '500+' },
  ],
};
