import React, { useState } from 'react';
import { 
  ArrowRight01Icon, 
  CheckmarkCircle02Icon, 
  ChevronDownIcon, 
  ChevronUpIcon,
  CodeSquareIcon,
  GitBranchIcon,
  Award01Icon,
  Shield02Icon,
  Briefcase02Icon,
  Location01Icon,
  QuoteUpIcon,
  WhatsappIcon,
} from '@hugeicons/core-free-icons';
import { Icon } from '../components/ui/Icon';
import { WaveDivider } from '../components/ui/WaveDivider';
import HeroSection from '../components/sections/HeroSection';
import PartnerMarqueeSection from '../components/sections/PartnerMarqueeSection';
import PathfinderSection from '../components/sections/PathfinderSection';
import { PILLARS_DATA, ORGANIZATION_META, ALUMNI_AWARDEES } from '../data/mahreenData';

interface HomePageProps {
  onNavigate: (route: string) => void;
  onOpenBatch2Modal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBatch2Modal,
}) => {
  // Accordion state for FAQ support section
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: 'Apa itu Mahreen Indonesia dan PT Mahreen Berkah Berdaya?',
      a: 'Mahreen Indonesia adalah ekosistem navigator karya, digital agency, inkubator talenta, dan dampak sosial yang dinaungi secara resmi oleh badan hukum PT Mahreen Berkah Berdaya (SK Kemenkumham: AHU-A089408.AH.01.30.Tahun 2026, NIB: 1203260152054). Kami menghubungkan generasi muda dengan proyek industri nyata, pengembangan kapasitas teknologi, dan pemberdayaan masyarakat berkelanjutan.'
    },
    {
      q: 'Bagaimana cara mendaftar program Mahreen Internship Batch 2?',
      a: 'Pendaftaran dibuka secara online untuk mahasiswa dan fresh graduate di seluruh Indonesia. Anda dapat mengklik tombol "Daftar Sekarang" pada banner, memilih divisi yang diminati (Web Development, Quality Assurance, Database Engineer, UI/UX Product Design, atau Talent Acquisition), dan melengkapi formulir asesmen portofolio.'
    },
    {
      q: 'Apakah program magang ini dapat dikonversi SKS kampus (MBKM)?',
      a: 'Ya, Mahreen Indonesia telah bermitra dan terhubung dengan lebih dari 50 perguruan tinggi di Indonesia. Sertifikat resmi, logbook terverifikasi, dan laporan penilaian evaluasi kerja magang disesuaikan dengan kebutuhan konversi SKS kurikulum kampus Anda.'
    },
    {
      q: 'Apa saja 5 pilar ekosistem yang dikelola Mahreen Indonesia?',
      a: 'Lima pilar ekosistem kami mencakup: (1) Mahreen Studio sebagai agensi digital komersial, (2) Mahreen Internship sebagai wadah akselerasi talenta muda, (3) Tanya Mahreen sebagai platform asesmen dan edukasi karir, (4) Mahreen CSR & Foundation untuk pemberdayaan sosial, dan (5) Peduli Mahreen untuk inisiatif filantropi dan kepedulian kemanusiaan.'
    }
  ];

  return (
    <div className="w-full bg-white text-[#123049] font-poppins selection:bg-[#007FE7] selection:text-white">
      {/* 01. Hero Banner Section (.row.banner-home) */}
      <HeroSection
        onExplorePathfinder={() => {
          const el = document.getElementById('pathfinder');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenBatch2Modal={onOpenBatch2Modal}
        onNavigate={onNavigate}
      />

      {/* Signature Midtrans Wave Transition: Dark Blue to White (#F7FCFF) */}
      <WaveDivider type="white" />

      {/* 02. Complete Payment: Mitra Kampus & 5 Pilar Ekosistem (.complete-payment) */}
      <div className="relative bg-[#F7FCFF] pt-8 sm:pt-12 pb-36 sm:pb-44 lg:pb-52">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Row Client Home: Marquee Kampus Mitra */}
          <div className="row client-home mb-20 sm:mb-24">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold text-[#007FE7] uppercase tracking-[0.2em] block mb-2 font-poppins">
                MITRA KAMPUS &amp; JARINGAN
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002855] leading-tight font-poppins mb-3">
                Terhubung dengan 50+ Perguruan Tinggi Terkemuka
              </h2>
              <p className="text-sm sm:text-base text-[#7686AB] font-poppins leading-relaxed">
                Mahreen Indonesia aktif berkolaborasi dengan kampus nasional dan institusi strategis 
                untuk standarisasi kurikulum industri dan konversi SKS resmi (MBKM).
              </p>
            </div>

            <PartnerMarqueeSection />
          </div>

          {/* Row Complete Wrapper: 5 Pilar Ekosistem (.grid-payment-home) */}
          <div className="row complete-wrapper pt-6">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold text-[#007FE7] uppercase tracking-widest block mb-2">
                STRUKTUR EKOSISTEM
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123049] leading-snug font-poppins">
                5 Pilar Ekosistem Mahreen Indonesia
              </h2>
              <p className="text-sm sm:text-base text-[#7686AB] mt-3 leading-relaxed font-poppins">
                Setiap pilar dirancang secara terintegrasi untuk menciptakan sinergi antara bisnis profesional, 
                inkubasi talenta, asesmen edukasi, dan tanggung jawab sosial berkelanjutan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PILLARS_DATA.map((pillar) => (
                <div 
                  key={pillar.id}
                  className="grid-payment-home is-payment-home bg-white p-8 sm:p-9 rounded-[24px] shadow-[0_10px_20px_rgba(45,50,55,0.06)] hover:shadow-[0_16px_32px_rgba(45,50,55,0.12)] transition-all flex flex-col justify-between group cursor-pointer"
                  onClick={() => onNavigate('/ekosistem')}
                >
                  <div>
                    <div className="heading-payment flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-[#EDF4F9] p-2.5 flex items-center justify-center shrink-0 border border-[#EDF4F9]">
                        <img 
                          alt={pillar.name} 
                          src={pillar.logoUrl || '/assets/pillar-mahreen-studio.webp'} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#123049] font-poppins leading-snug">
                        {pillar.name}
                      </h3>
                    </div>

                    <p className="text-sm text-[#7686AB] leading-relaxed mb-6 font-poppins min-h-[64px]">
                      {pillar.description}
                    </p>

                    <div className="space-y-3 mb-6 pt-4 border-t border-[#EDF4F9]">
                      {pillar.servicesOrFeatures.slice(0, 2).map((item: string, i: number) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#123049] font-medium">
                          <Icon icon={CheckmarkCircle02Icon} size={16} className="text-[#054FBF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#EDF4F9]">
                    <span className="font-bold text-xs text-[#054FBF] group-hover:text-[#002855] inline-flex items-center gap-1.5 transition-colors font-poppins">
                      <span>Pelajari Pilar</span>
                      <Icon icon={ArrowRight01Icon} size={15} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Signature Midtrans Wave Transition: White to Grey (#EDF4F9) */}
      <WaveDivider type="grey" />

      {/* 03. Payment Solution Home: 3 Fase Inkubasi Talenta (.payment-solution-home with pattern-grey.png & capsules) */}
      <div className="payment-solution-home relative bg-[#EDF4F9] pt-16 sm:pt-20 pb-36 sm:pb-44 lg:pb-52 overflow-hidden">
        <div className="wrapper-solution relative">
          <img src="/assets/capsule1.png" className="capsule-1 absolute left-4 top-10 opacity-30 select-none pointer-events-none hidden lg:block" alt="" />
          <img src="/assets/capsule2.png" className="capsule-2 absolute right-8 bottom-12 opacity-30 select-none pointer-events-none hidden lg:block" alt="" />

          <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="row text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#054FBF] uppercase tracking-widest block mb-2 font-poppins">
                TRAJECTORY PERTUMBUHAN TALENTA
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123049] leading-tight font-poppins">
                Fokus Pembinaan &amp; Karir Nyata<br />untuk Setiap Fase Generasi Muda
              </h2>
              <p className="text-sm sm:text-base text-[#7686AB] mt-3 font-poppins leading-relaxed">
                Kami membangun jalur pembelajaran terstruktur yang mengantarkan mahasiswa dari fondasi teori 
                menuju delivery sistem produksi industri nyata.
              </p>
            </div>

            <div className="grid-pp-wrapper grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Fase 1: Fundamental */}
              <div 
                className="grid-payment-home bg-white p-8 sm:p-9 rounded-[24px] shadow-[0_10px_20px_rgba(45,50,55,0.06)] hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer"
                onClick={() => onNavigate('/internship')}
              >
                <div>
                  <div className="heading-payment flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#054FBF]/10 text-[#054FBF] p-3 flex items-center justify-center shrink-0">
                      <Icon icon={CodeSquareIcon} size={28} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#007FE7] uppercase tracking-wider block font-poppins">Bulan 01</span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#123049] font-poppins leading-snug">Fase Fundamental</h3>
                    </div>
                  </div>

                  <p className="text-sm text-[#7686AB] leading-relaxed mb-6 font-poppins min-h-[64px]">
                    Membangun standardisasi kerja enterprise, penguasaan tools modern, dan arsitektur kode clean.
                  </p>

                  <ul className="space-y-3 text-xs sm:text-[13px] text-[#123049] mb-8 pt-4 border-t border-[#EDF4F9]">
                    <li className="flex items-start gap-2.5">
                      <Icon icon={CheckmarkCircle02Icon} size={16} className="text-[#054FBF] shrink-0 mt-0.5" />
                      <span className="font-medium leading-snug">Onboarding kultur profesional &amp; tata kelola repository Git.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Icon icon={CheckmarkCircle02Icon} size={16} className="text-[#054FBF] shrink-0 mt-0.5" />
                      <span className="font-medium leading-snug">Standardisasi arsitektur kode, linting, dan Scrum sprint.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Icon icon={CheckmarkCircle02Icon} size={16} className="text-[#054FBF] shrink-0 mt-0.5" />
                      <span className="font-medium leading-snug">Mentoring 1-on-1 bersama praktisi industri berpengalaman.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#EDF4F9]">
                  <span className="font-semibold text-sm text-[#054FBF] group-hover:text-[#002855] inline-flex items-center gap-1.5 transition-colors">
                    <span>Lihat Kurikulum &gt;</span>
                  </span>
                </div>
              </div>

              {/* Fase 2: Real Project */}
              <div 
                className="grid-payment-home bg-white p-8 sm:p-9 rounded-[24px] shadow-[0_10px_20px_rgba(45,50,55,0.06)] hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer"
                onClick={() => onNavigate('/portofolio')}
              >
                <div>
                  <div className="heading-payment flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#054FBF]/10 text-[#054FBF] p-3 flex items-center justify-center shrink-0">
                      <Icon icon={GitBranchIcon} size={28} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#007FE7] uppercase tracking-wider block font-poppins">Bulan 02</span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#123049] font-poppins leading-snug">Real Client Project</h3>
                    </div>
                  </div>

                  <p className="text-sm text-[#7686AB] leading-relaxed mb-6 font-poppins min-h-[64px]">
                    Terjun langsung mengerjakan sistem klien aktif dengan workflow lintas divisi (Dev, QA, UI/UX).
                  </p>

                  <ul className="space-y-3 text-xs sm:text-[13px] text-[#123049] mb-8 pt-4 border-t border-[#EDF4F9]">
                    <li className="flex items-start gap-2.5">
                      <Icon icon={CheckmarkCircle02Icon} size={16} className="text-[#054FBF] shrink-0 mt-0.5" />
                      <span className="font-medium leading-snug">Kolaborasi multi-disiplin antar web dev, tester, dan designer.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Icon icon={CheckmarkCircle02Icon} size={16} className="text-[#054FBF] shrink-0 mt-0.5" />
                      <span className="font-medium leading-snug">Implementasi CI/CD automated pipeline &amp; code review harian.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Icon icon={CheckmarkCircle02Icon} size={16} className="text-[#054FBF] shrink-0 mt-0.5" />
                      <span className="font-medium leading-snug">Manajemen ekspektasi klien dan presentasi demo mingguan.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#EDF4F9]">
                  <span className="font-semibold text-sm text-[#054FBF] group-hover:text-[#002855] inline-flex items-center gap-1.5 transition-colors">
                    <span>Eksplorasi Karya &gt;</span>
                  </span>
                </div>
              </div>

              {/* Fase 3: Portfolio & Impact */}
              <div 
                className="grid-payment-home bg-white p-8 sm:p-9 rounded-[24px] shadow-[0_10px_20px_rgba(45,50,55,0.06)] hover:shadow-xl transition-all flex flex-col justify-between group cursor-pointer"
                onClick={onOpenBatch2Modal}
              >
                <div>
                  <div className="heading-payment flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#054FBF]/10 text-[#054FBF] p-3 flex items-center justify-center shrink-0">
                      <Icon icon={Award01Icon} size={28} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#007FE7] uppercase tracking-wider block font-poppins">Bulan 03</span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#123049] font-poppins leading-snug">Portofolio &amp; Dampak</h3>
                    </div>
                  </div>

                  <p className="text-sm text-[#7686AB] leading-relaxed mb-6 font-poppins min-h-[64px]">
                    Peluncuran produksi langsung, portofolio terverifikasi HAKI, dan peluang karir industri.
                  </p>

                  <ul className="space-y-3 text-xs sm:text-[13px] text-[#123049] mb-8 pt-4 border-t border-[#EDF4F9]">
                    <li className="flex items-start gap-2.5">
                      <Icon icon={CheckmarkCircle02Icon} size={16} className="text-[#054FBF] shrink-0 mt-0.5" />
                      <span className="font-medium leading-snug">Penyelesaian UAT (User Acceptance Testing) &amp; live production.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Icon icon={CheckmarkCircle02Icon} size={16} className="text-[#054FBF] shrink-0 mt-0.5" />
                      <span className="font-medium leading-snug">Sertifikat resmi kompetensi industri &amp; rekomendasi karir.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Icon icon={CheckmarkCircle02Icon} size={16} className="text-[#054FBF] shrink-0 mt-0.5" />
                      <span className="font-medium leading-snug">Akses jejaring alumni Mahreen &amp; peluang talent scouting.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#EDF4F9]">
                  <span className="font-semibold text-sm text-[#054FBF] group-hover:text-[#002855] inline-flex items-center gap-1.5 transition-colors">
                    <span>Daftar Batch 2 &gt;</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Midtrans Wave Transition: Grey to Navy Blue (#002855) */}
      <WaveDivider type="blue" />

      {/* 04. Secure Section: Legalitas & Kredensial Resmi (.secure-section) */}
      <div className="secure-section bg-[#002855] text-white pt-0 sm:pt-2 pb-36 sm:pb-44 lg:pb-52 relative">
        <div className="wrapper-secure">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 -mt-12 sm:-mt-16 lg:-mt-20 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold text-[#007FE7] uppercase tracking-[0.2em] block mb-2 font-poppins">
                LEGALITAS &amp; AKUNTABILITAS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight font-poppins mb-4">
                Fondasi Hukum Resmi &amp; Terpercaya
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-poppins">
                PT Mahreen Berkah Berdaya beroperasi dengan kepatuhan hukum penuh, perizinan berusaha resmi Republik Indonesia, 
                serta perlindungan hak kekayaan intelektual (HAKI) terdaftar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-7 hover:bg-white/15 transition-all shadow-lg flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#007FE7]/20 text-[#007FE7] flex items-center justify-center mb-4">
                    <Icon icon={Shield02Icon} size={24} />
                  </div>
                  <div className="text-xs font-bold text-[#007FE7] uppercase tracking-wider mb-1 font-poppins">Kemenkumham RI</div>
                  <h3 className="text-lg font-bold text-white mb-2 font-poppins">AHU-A089408</h3>
                  <p className="text-xs text-white/70 leading-relaxed font-poppins">
                    SK Menteri Hukum &amp; HAM RI No. AHU-A089408.AH.01.30.Tahun 2026.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-7 hover:bg-white/15 transition-all shadow-lg flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#007FE7]/20 text-[#007FE7] flex items-center justify-center mb-4">
                    <Icon icon={Briefcase02Icon} size={24} />
                  </div>
                  <div className="text-xs font-bold text-[#007FE7] uppercase tracking-wider mb-1 font-poppins">Izin Usaha Berkelanjutan</div>
                  <h3 className="text-lg font-bold text-white mb-2 font-poppins">NIB: 1203260152054</h3>
                  <p className="text-xs text-white/70 leading-relaxed font-poppins">
                    Nomor Induk Berusaha resmi BKPM &amp; Kementerian Investasi RI.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-7 hover:bg-white/15 transition-all shadow-lg flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#007FE7]/20 text-[#007FE7] flex items-center justify-center mb-4">
                    <Icon icon={Award01Icon} size={24} />
                  </div>
                  <div className="text-xs font-bold text-[#007FE7] uppercase tracking-wider mb-1 font-poppins">Perlindungan Brand</div>
                  <h3 className="text-lg font-bold text-white mb-2 font-poppins">HAKI: 001180040</h3>
                  <p className="text-xs text-white/70 leading-relaxed font-poppins">
                    Merek terdaftar resmi Direktorat Jenderal Kekayaan Intelektual.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-7 hover:bg-white/15 transition-all shadow-lg flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#007FE7]/20 text-[#007FE7] flex items-center justify-center mb-4">
                    <Icon icon={Location01Icon} size={24} />
                  </div>
                  <div className="text-xs font-bold text-[#007FE7] uppercase tracking-wider mb-1 font-poppins">Kantor Operasional</div>
                  <h3 className="text-lg font-bold text-white mb-2 font-poppins">Kota Cimahi</h3>
                  <p className="text-xs text-white/70 leading-relaxed font-poppins">
                    {ORGANIZATION_META.officeAddress}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <button 
                type="button"
                onClick={() => onNavigate('/tentang')}
                className="cursor-pointer inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#002855] hover:bg-[#007FE7] hover:text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-xl"
              >
                <span>Pelajari Profil Perusahaan &amp; Legalitas Lengkap</span>
                <Icon icon={ArrowRight01Icon} size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Midtrans Wave Transition: Dark Blue to White (#F7FCFF) */}
      <WaveDivider type="white" />

      {/* 05. Powering Section: Testimoni Alumni (.powering-section.plain-testimony) */}
      <div className="powering-section plain-testimony pt-12 sm:pt-16 pb-20 sm:pb-28 bg-[#F7FCFF]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#054FBF] uppercase tracking-widest block mb-2 font-poppins">
              BUKTI NYATA TALENTA
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123049] leading-tight font-poppins">
              Kisah Sukses &amp; Suara Alumni Mahreen Indonesia
            </h2>
            <p className="text-sm sm:text-base text-[#7686AB] mt-3 font-poppins leading-relaxed">
              Mendengar pengalaman langsung mahasiswa alumni magang yang bertumbuh bersama ekosistem Mahreen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALUMNI_AWARDEES.slice(0, 3).map((alumni, idx: number) => {
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

          <div className="text-center mt-14">
            <button
              onClick={() => onNavigate('/internship')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#054FBF] hover:text-[#002855] underline cursor-pointer font-poppins"
            >
              <span>Lihat Seluruh Cerita Alumni Magang Batch 1</span>
              <Icon icon={ArrowRight01Icon} size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* 06. Pathfinder Section: Interactive Discovery */}
      <PathfinderSection
        onSelectPillar={() => onNavigate('/ekosistem')}
        onOpenBatch2Modal={onOpenBatch2Modal}
      />

      {/* Signature Midtrans Wave Transition: Light Blue to Pure White (#FFFFFF) */}
      <WaveDivider type="clear-white" />

      {/* 07. Support Section: FAQ Accordions (.support-section) */}
      <div className="support-section pt-16 sm:pt-20 pb-36 sm:pb-44 lg:pb-52 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Support Info */}
            <div className="grid-content-support lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-[#054FBF] uppercase tracking-widest block font-poppins">
                PUSAT BANTUAN &amp; INFORMASI
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123049] leading-snug font-poppins">
                Selalu Ada untuk Menjawab Kebutuhan Anda
              </h2>
              <p className="text-sm sm:text-base text-[#7686AB] leading-relaxed font-poppins">
                Punya pertanyaan mengenai pendaftaran magang, kriteria penerimaan, kemitraan universitas, 
                atau solusi digital Mahreen Studio? Kami selalu terbuka untuk berdialog.
              </p>

              <div className="pt-4">
                <a 
                  href="https://wa.me/6289652647385" 
                  target="_blank" 
                  rel="noopener"
                  className="inline-flex items-center gap-2.5 text-white bg-[#054FBF] hover:bg-[#002855] text-xs font-bold px-7 py-4 rounded-full transition-all shadow-md shadow-[#054FBF]/20 uppercase tracking-wider font-poppins"
                >
                  <Icon icon={WhatsappIcon} size={18} />
                  <span>Konsultasi via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Accordions */}
            <div className="grid-accordion-support lg:col-span-7 space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div 
                    key={index}
                    className="accordion-support border border-[#EDF4F9] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#123049] hover:text-[#054FBF] transition-colors cursor-pointer"
                    >
                      <span className="leading-snug font-poppins">{faq.q}</span>
                      <Icon 
                        icon={isOpen ? ChevronUpIcon : ChevronDownIcon} 
                        size={20} 
                        className="text-[#054FBF] shrink-0" 
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-sm text-[#7686AB] leading-relaxed border-t border-[#EDF4F9] pt-4 bg-[#F7FCFF] font-poppins">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
