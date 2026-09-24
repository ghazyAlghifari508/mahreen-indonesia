import React from 'react';
import { 
  ArrowRight01Icon, 
  CheckmarkCircle02Icon, 
  QuoteUpIcon,
} from '@hugeicons/core-free-icons';
import { Icon } from '../components/ui/Icon';
import { WaveDivider } from '../components/ui/WaveDivider';
import { INTERNSHIP_STEPS, ALUMNI_AWARDEES } from '../data/mahreenData';

interface InternshipPageProps {
  onNavigate: (route: string) => void;
  onOpenBatch2Modal: () => void;
}

const DIVISIONS = [
  {
    title: 'Frontend / Fullstack Web Developer',
    iconSrc: '/assets/magang-portfolio-website.webp',
    tag: 'Technology',
    focus: 'React, TypeScript, Tailwind CSS, REST API & Git Workflows',
    deliverables: 'Membangun aplikasi web responsif, integrasi payment gateway, dan dashboard admin klien nyata.',
    requirement: 'Memahami dasar HTML, CSS, JavaScript/TypeScript, dan konsep React Component.',
    slots: '2 Kuota Aktif'
  },
  {
    title: 'Quality Assurance (QA Automation & Manual)',
    iconSrc: '/assets/magang-portfolio-uat.webp',
    tag: 'Testing & QA',
    focus: 'Vitest, Playwright, User Acceptance Testing (UAT), Test Case Matrix',
    deliverables: 'Menyusun test scenario, eksekusi automated regression testing, dan audit keamanan fungsional.',
    requirement: 'Teliti, memahami software testing lifecycle, dan familiar dengan debugging web.',
    slots: '2 Kuota Aktif'
  },
  {
    title: 'Database Engineer & Data Ops',
    iconSrc: '/assets/magang-portfolio-database.webp',
    tag: 'Data Architecture',
    focus: 'PostgreSQL, Supabase, Data Normalization, Indexing & Query Optimization',
    deliverables: 'Merancang skema relasi database relasional, backup pipeline, dan optimasi performa query.',
    requirement: 'Paham SQL queries, ERD design, dan pemodelan data relasional.',
    slots: '1 Kuota Aktif'
  },
  {
    title: 'UI/UX Product Designer',
    iconSrc: '/assets/pillar-mahreen-studio.webp',
    tag: 'Product Design',
    focus: 'Figma, Design System, User Journey Mapping & Usability Testing',
    deliverables: 'Membuat high-fidelity mockup, interactive prototype, dan dokumentasi komponen desain standar industri.',
    requirement: 'Mahir menggunakan Figma, paham autolayout, components, dan prinsip human-centered design.',
    slots: '2 Kuota Aktif'
  },
  {
    title: 'Talent Acquisition & People Development',
    iconSrc: '/assets/pillar-peduli-mahreen.webp',
    tag: 'Human Capital',
    focus: 'Talent Sourcing, Psychometric Assessment, People Engagement & Evaluation',
    deliverables: 'Mengelola alur seleksi pendaftar magang, koordinasi mentoring, dan evaluasi performa bulanan.',
    requirement: 'Komunikatif, teratur, memiliki empati sosial, dan tertarik pada pengembangan talenta.',
    slots: '1 Kuota Aktif'
  },
];

export const InternshipPage: React.FC<InternshipPageProps> = ({
  onOpenBatch2Modal,
}) => {
  return (
    <div className="w-full bg-white text-[#123049] font-poppins selection:bg-[#007FE7] selection:text-white">
      {/* 01. Banner Home Usecase (.row.banner-home.usecase-banner) */}
      <div className="row banner-home usecase-banner relative overflow-hidden bg-[#002855] text-white pt-28 sm:pt-32 pb-64 sm:pb-72 lg:pb-80">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          <div className="content-banner max-w-xl text-white">
            <span className="usecase-banner-title text-xs sm:text-sm font-bold text-[#007FE7] uppercase tracking-[0.2em] block mb-3 font-poppins">
              MAHREEN INTERNSHIP BATCH 2
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 font-poppins">
              Akselerasi Karir Nyata Bersama Industri Digital
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8 font-poppins">
              Program inkubasi talenta berbasis proyek nyata selama 3 bulan. Dilengkapi mentoring praktisi 1-on-1, 
              lingkungan kerja kolaboratif, konversi SKS resmi (MBKM), dan jalur karir profesional.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                type="button"
                onClick={onOpenBatch2Modal}
                className="text-white bg-[#054FBF] hover:bg-[#002855] text-xs font-bold px-7 py-3.5 rounded-full transition-all cursor-pointer shadow-lg uppercase tracking-wider"
              >
                Daftar Batch 2 Sekarang
              </button>

              <a
                href="#posisi"
                className="text-white hover:text-[#002855] hover:bg-white text-xs font-semibold px-7 py-3.5 rounded-full border border-white/40 transition-all cursor-pointer"
              >
                Lihat 5 Divisi Dibuka
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/15 text-xs text-white/80 font-poppins">
              <div className="flex items-center gap-2">
                <Icon icon={CheckmarkCircle02Icon} size={15} className="text-[#007FE7]" />
                <span><strong>Durasi:</strong> 3 Bulan Penuh</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon={CheckmarkCircle02Icon} size={15} className="text-[#007FE7]" />
                <span><strong>Format:</strong> Hybrid / Remote</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon={CheckmarkCircle02Icon} size={15} className="text-[#007FE7]" />
                <span><strong>Konversi:</strong> Hingga 20 SKS MBKM</span>
              </div>
            </div>
          </div>

          {/* Grid Image Banner: Authentic Development & Mentoring Session */}
          <div className="grid-img-banner relative lg:w-[480px] xl:w-[540px] w-full">
            <div className="border border-white/20 bg-[#001D3D] shadow-2xl overflow-hidden">
              <img 
                src="/assets/magang-portfolio-11-development-BpaKCTZ4.webp"
                alt="Sesi Mentoring & Kolaborasi Proyek Magang Mahreen Indonesia"
                className="w-full h-auto max-h-[340px] object-cover"
              />
              <div className="p-3.5 bg-[#001428] border-t border-white/10 flex items-center justify-between text-xs text-white">
                <span className="font-semibold text-[#007FE7]">#MahreenInternship</span>
                <span className="text-white/70">Live Sprint &amp; Mentoring Industri</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Midtrans Wave Transition: Navy to Light Blue (#F7FCFF) */}
      <WaveDivider type="white" />

      {/* 02. Complete Payment: 5 Divisi Magang Dibuka (.complete-payment) */}
      <div id="posisi" className="complete-payment relative bg-[#F7FCFF] pt-12 sm:pt-16 pb-36 sm:pb-44 lg:pb-52">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#054FBF] uppercase tracking-widest block mb-2 font-poppins">
              PELUANG KARIR BATCH 2
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123049] leading-tight font-poppins">
              5 Divisi Magang yang Terbuka untuk Anda
            </h2>
            <p className="text-sm sm:text-base text-[#7686AB] mt-3 leading-relaxed font-poppins">
              Setiap divisi dibimbing langsung oleh mentor berpengalaman dengan beban tugas terstruktur dan output portofolio terukur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIVISIONS.map((div, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 sm:p-9 rounded-[24px] shadow-[0_10px_20px_rgba(45,50,55,0.06)] hover:shadow-xl transition-all flex flex-col justify-between border border-[#EDF4F9]"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#EDF4F9] p-2.5 flex items-center justify-center shrink-0 border border-[#EDF4F9]">
                      <img alt={div.title} src={div.iconSrc} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#054FBF] bg-[#EDF4F9] px-2.5 py-0.5 rounded-full inline-block mb-1 font-poppins">
                        {div.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#123049] leading-snug font-poppins">
                        {div.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3.5 pt-3 text-xs sm:text-sm text-[#7686AB] font-poppins">
                    <div>
                      <strong className="text-[#123049] block mb-1">Fokus Keahlian:</strong>
                      <span className="leading-relaxed">{div.focus}</span>
                    </div>
                    <div>
                      <strong className="text-[#123049] block mb-1">Tanggung Jawab Output:</strong>
                      <span className="leading-relaxed">{div.deliverables}</span>
                    </div>
                    <div className="pt-3 border-t border-[#EDF4F9]">
                      <strong className="text-[#123049] block mb-1">Persyaratan Kualifikasi:</strong>
                      <span className="text-[#123049]/90 leading-relaxed">{div.requirement}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EDF4F9] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#054FBF] bg-[#F7FCFF] px-3 py-1 rounded-full border border-[#D5E9FA]">
                    {div.slots}
                  </span>
                  <button
                    type="button"
                    onClick={onOpenBatch2Modal}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#054FBF] hover:text-[#002855] transition-colors cursor-pointer font-poppins"
                  >
                    <span>Daftar Divisi Ini</span>
                    <Icon icon={ArrowRight01Icon} size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Signature Midtrans Wave Transition: Light Blue to Navy (#002855) */}
      <WaveDivider type="blue" />

      {/* 03. Usecase Works: Alur & Timeline Magang (.powering-section.usecase-works) */}
      <div className="powering-section usecase-works plain-testimony pt-6 sm:pt-8 lg:pt-10 pb-36 sm:pb-44 lg:pb-52 bg-[#002855] text-white relative">
        <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold text-[#007FE7] uppercase tracking-widest block mb-2 font-poppins">
              TIMELINE &amp; SELEKSI
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight font-poppins">
              Alur Tahapan Program Batch 2
            </h2>
            <p className="text-sm sm:text-base text-white/80 mt-3 leading-relaxed font-poppins">
              Tahapan seleksi objektif dan transparan yang menguji potensi analitis, kesiapan teknis, dan komitmen kolaborasi Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTERNSHIP_STEPS.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white/10 backdrop-blur-md p-7 rounded-[24px] border border-white/15 hover:bg-white/15 transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#007FE7] text-white flex items-center justify-center font-bold text-base mb-5 shadow-md">
                    {idx + 1}
                  </div>
                  <div className="text-xs font-bold text-[#007FE7] uppercase tracking-wider mb-1 font-poppins">{step.subtitle}</div>
                  <h4 className="font-bold text-lg text-white mb-2 font-poppins">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-poppins">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Signature Midtrans Wave Transition: Navy to Light Blue (#F7FCFF) */}
      <WaveDivider type="white" />

      {/* 04. Powering Section: Alumni Testimonials (.powering-section.plain-testimony) */}
      <div className="powering-section plain-testimony pt-16 sm:pt-20 pb-36 sm:pb-44 lg:pb-52 bg-[#F7FCFF]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#054FBF] uppercase tracking-widest block mb-2 font-poppins">
              PENGALAMAN NYATA
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123049] leading-tight font-poppins">
              Cerita Alumni Magang Batch 1
            </h2>
            <p className="text-sm sm:text-base text-[#7686AB] mt-3 leading-relaxed font-poppins">
              Mereka yang telah merasakan akselerasi karir, bimbingan langsung, dan atmosfer profesional di Mahreen Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALUMNI_AWARDEES.map((alumni, idx) => {
              const initials = alumni.name
                .split(' ')
                .map((n) => n[0])
                .slice(0, 2)
                .join('');

              return (
                <div 
                  key={idx}
                  className="bg-white p-8 sm:p-9 rounded-[24px] shadow-[0_10px_20px_rgba(45,50,55,0.06)] hover:shadow-xl transition-all flex flex-col justify-between border border-[#EDF4F9]"
                >
                  <div>
                    <div className="text-[#054FBF]/30 mb-4">
                      <Icon icon={QuoteUpIcon} size={32} />
                    </div>
                    <p className="text-sm text-[#123049] italic leading-relaxed mb-8 font-poppins min-h-[96px]">
                      "{alumni.citation}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-5 border-t border-[#EDF4F9]">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#054FBF] to-[#002855] text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-md shrink-0 border-2 border-white">
                      {initials}
                    </div>
                    <div>
                      <span className="font-bold text-sm sm:text-base text-[#123049] block font-poppins">
                        {alumni.name}
                      </span>
                      <p className="text-xs text-[#7686AB] font-poppins mt-0.5">
                        <span className="text-[#054FBF] font-semibold">{alumni.division}</span> • {alumni.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Banner */}
          <div className="mt-20 text-center bg-[#002855] text-white p-10 sm:p-14 rounded-3xl max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-poppins">
              Ambil Peranmu dalam Transformasi Karya Digital Indonesia
            </h3>
            <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-8 font-poppins leading-relaxed">
              Pendaftaran ditutup saat kuota divisi terpenuhi. Siapkan CV dan tautan portofolio terbaikmu sekarang.
            </p>
            <button
              onClick={onOpenBatch2Modal}
              className="px-8 py-4 bg-[#054FBF] hover:bg-[#002855] text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-xl hover:shadow-2xl cursor-pointer"
            >
              Isi Formulir Pendaftaran Batch 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipPage;

