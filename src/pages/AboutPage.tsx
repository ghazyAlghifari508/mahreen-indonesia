import React from 'react';
import { 
  Shield02Icon,
  CheckmarkCircle02Icon
} from '@hugeicons/core-free-icons';
import { Icon } from '../components/ui/Icon';
import { WaveDivider } from '../components/ui/WaveDivider';
import { ORGANIZATION_META } from '../data/mahreenData';

interface AboutPageProps {
  onNavigate: (route: string) => void;
  onOpenBatch2Modal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenBatch2Modal,
}) => {
  return (
    <div className="w-full bg-white text-[#123049] font-poppins selection:bg-[#007FE7] selection:text-white">
      {/* 01. Banner Home: Usecase Banner (.row.banner-home.usecase-banner) */}
      <div className="row banner-home usecase-banner relative overflow-hidden bg-[#002855] text-white pt-28 sm:pt-32 pb-64 sm:pb-72 lg:pb-80">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Content Banner */}
          <div className="content-banner max-w-xl text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 font-poppins">
              Membangun Ekosistem Kolaboratif untuk Generasi Berdaya
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8 font-poppins">
              Didirikan resmi di Kota Cimahi pada 18 Mei 2024, PT Mahreen Berkah Berdaya adalah ekosistem terpadu 
              yang mempertemukan talenta muda, industri bisnis, dan kepedulian sosial melalui 5 pilar strategis.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <span className="btn-started inline-block">
                <a
                  href="#legalitas"
                  className="text-white bg-[#054FBF] hover:bg-[#002855] text-xs font-semibold px-6 py-3.5 rounded-full transition-all cursor-pointer shadow-lg uppercase tracking-wider"
                >
                  Verifikasi Legalitas Resmi
                </a>
              </span>

              <span className="btn-sales inline-block">
                <a
                  href="/ekosistem"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/ekosistem');
                  }}
                  className="text-white hover:text-[#002855] hover:bg-white text-xs font-semibold px-6 py-3.5 rounded-full border border-white/40 transition-all cursor-pointer"
                >
                  Jelajahi 5 Pilar
                </a>
              </span>
            </div>
          </div>

          {/* Grid Image Banner: Authentic Leadership Duo (Founder & CEO) */}
          <div className="grid-img-banner relative lg:w-[480px] xl:w-[520px] w-full">
            <div className="grid grid-cols-2 gap-4">
              {/* Founder Card */}
              <div className="border border-white/20 bg-[#001D3D] shadow-2xl overflow-hidden group">
                <div className="h-64 sm:h-72 overflow-hidden bg-[#0A192F]">
                  <img 
                    src="/assets/profile-founder.webp" 
                    alt="Mohamad Dzikri Arfiansyah, S.T. - Founder Mahreen Indonesia"
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="p-3 bg-[#001428] border-t border-white/10 text-white">
                  <span className="text-[10px] font-bold text-[#007FE7] uppercase tracking-wider block">FOUNDER</span>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-poppins truncate">Mohamad Dzikri A., S.T.</h4>
                  <p className="text-[11px] text-white/70">Founder Mahreen Indonesia</p>
                </div>
              </div>

              {/* CEO Card */}
              <div className="border border-white/20 bg-[#001D3D] shadow-2xl overflow-hidden group">
                <div className="h-64 sm:h-72 overflow-hidden bg-[#0A192F]">
                  <img 
                    src="/assets/profile-ceo.webp" 
                    alt="Tania Restiani Fajar - Chief Executive Officer Mahreen Indonesia"
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="p-3 bg-[#001428] border-t border-white/10 text-white">
                  <span className="text-[10px] font-bold text-[#27C93F] uppercase tracking-wider block">CHIEF EXECUTIVE OFFICER</span>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-poppins truncate">Tania Restiani Fajar</h4>
                  <p className="text-[11px] text-white/70">CEO Mahreen Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Midtrans Wave Transition: Navy to Light Blue (#F7FCFF) */}
      <WaveDivider type="white" />

      {/* 02. Visi, Misi & 4 Pilar Eksekusi */}
      <div className="relative bg-[#F7FCFF] pt-12 sm:pt-16 pb-36 sm:pb-44 lg:pb-52">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
          
          {/* Row 1: Visi & Fondasi */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#054FBF] uppercase tracking-widest block font-poppins">
                VISI KAMI
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123049] leading-snug font-poppins">
                Menjadi Ekosistem Karya &amp; Pemberdayaan Talenta Terdepan di Indonesia
              </h2>
              <p className="text-sm sm:text-base text-[#7686AB] leading-relaxed font-poppins">
                Kami meyakini bahwa generasi muda Indonesia memiliki kapasitas kreasi dan intelektual kelas dunia 
                apabila diberikan ruang inkubasi yang terstandardisasi industri, bimbingan terarah, dan kesempatan 
                mengerjakan sistem nyata.
              </p>

              <div className="space-y-4 pt-2 font-poppins">
                <div className="flex items-start gap-3.5 text-sm text-[#123049]">
                  <Icon icon={CheckmarkCircle02Icon} size={20} className="text-[#054FBF] shrink-0 mt-0.5" />
                  <span><strong>Menjembatani Kesenjangan Akademik &amp; Industri:</strong> Menyiapkan mahasiswa dengan standar kerja profesional software enterprise.</span>
                </div>
                <div className="flex items-start gap-3.5 text-sm text-[#123049]">
                  <Icon icon={CheckmarkCircle02Icon} size={20} className="text-[#054FBF] shrink-0 mt-0.5" />
                  <span><strong>Kemandirian Melalui Karya Nyata:</strong> Mendorong setiap gagasan melahirkan output produk digital fungsional dan teruji.</span>
                </div>
                <div className="flex items-start gap-3.5 text-sm text-[#123049]">
                  <Icon icon={CheckmarkCircle02Icon} size={20} className="text-[#054FBF] shrink-0 mt-0.5" />
                  <span><strong>Sinergi Berkelanjutan:</strong> Mengembalikan sebagian nilai ekonomi industri untuk filantropi sosial melalui Peduli Mahreen dan CSR.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-[24px] shadow-lg border border-[#EDF4F9] flex items-center justify-center">
                <img 
                  alt="Visi Mahreen Indonesia" 
                  src="/assets/pillar-mahreen-studio.webp" 
                  className="w-full h-auto max-h-[280px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Misi Strategis */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-16 border-t border-[#EDF4F9]">
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-[24px] shadow-lg border border-[#EDF4F9] flex items-center justify-center">
                <img 
                  alt="Misi Mahreen Indonesia" 
                  src="/assets/pillar-internship.webp" 
                  className="w-full h-auto max-h-[280px] object-contain"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-bold text-[#054FBF] uppercase tracking-widest block font-poppins">
                MISI STRATEGIS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123049] leading-snug font-poppins">
                4 Pilar Eksekusi Mahreen Indonesia
              </h2>
              <p className="text-sm sm:text-base text-[#7686AB] leading-relaxed font-poppins">
                Empat fokus aksi nyata yang kami jalankan setiap hari untuk memastikan dampak yang terukur bagi talenta dan masyarakat:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="bg-white p-6 rounded-2xl border border-[#EDF4F9] shadow-sm">
                  <div className="text-xs font-bold text-[#054FBF] uppercase mb-1 font-poppins">01. Inkubasi</div>
                  <h4 className="font-bold text-sm sm:text-base text-[#123049] mb-1.5 font-poppins">Skill Berstandar Industri</h4>
                  <p className="text-xs text-[#7686AB] font-poppins leading-relaxed">Pelatihan teknis intensif web development, QA automation, database, dan product design.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#EDF4F9] shadow-sm">
                  <div className="text-xs font-bold text-[#054FBF] uppercase mb-1 font-poppins">02. Kemitraan</div>
                  <h4 className="font-bold text-sm sm:text-base text-[#123049] mb-1.5 font-poppins">Jejaring Kampus &amp; Korporasi</h4>
                  <p className="text-xs text-[#7686AB] font-poppins leading-relaxed">Kolaborasi dengan lebih dari 50 perguruan tinggi dan mitra industri nasional.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#EDF4F9] shadow-sm">
                  <div className="text-xs font-bold text-[#054FBF] uppercase mb-1 font-poppins">03. Layanan Digital</div>
                  <h4 className="font-bold text-sm sm:text-base text-[#123049] mb-1.5 font-poppins">Delivery Solusi Komersial</h4>
                  <p className="text-xs text-[#7686AB] font-poppins leading-relaxed">Mahreen Studio menghasilkan produk digital fungsional untuk klien UMKM hingga korporasi.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#EDF4F9] shadow-sm">
                  <div className="text-xs font-bold text-[#054FBF] uppercase mb-1 font-poppins">04. Kebermaknaan</div>
                  <h4 className="font-bold text-sm sm:text-base text-[#123049] mb-1.5 font-poppins">Dampak Sosial Nyata</h4>
                  <p className="text-xs text-[#7686AB] font-poppins leading-relaxed">Pemberdayaan sosial inklusif dan aksi kemanusiaan melalui alokasi dana berkelanjutan.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Signature Midtrans Wave Transition: White to Grey (#EDF4F9) */}
      <WaveDivider type="grey" />

      {/* 03. Legalitas Formal & Akuntabilitas */}
      <div className="relative bg-[#EDF4F9] pt-12 sm:pt-16 pb-36 sm:pb-44 lg:pb-52">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#054FBF] uppercase tracking-widest block font-poppins">
                DOKUMEN RESMI NEGARA
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123049] leading-snug font-poppins">
                Legalitas Berbadan Hukum Resmi Republik Indonesia
              </h3>
              <p className="text-sm sm:text-base text-[#7686AB] leading-relaxed font-poppins">
                Operasional Mahreen Indonesia dijalankan di bawah naungan PT Mahreen Berkah Berdaya yang sah, 
                terdaftar di Kemenkumham RI, memiliki Nomor Induk Berusaha (NIB), dan kepemilikan merek (HAKI).
              </p>

              <div className="bg-white p-7 sm:p-8 rounded-[24px] border border-white shadow-sm space-y-4 font-poppins">
                <div className="flex items-start justify-between py-2 border-b border-[#EDF4F9]">
                  <span className="text-xs font-semibold text-[#7686AB]">Nama Badan Usaha:</span>
                  <span className="text-xs sm:text-sm font-bold text-[#123049] text-right">{ORGANIZATION_META.legalName}</span>
                </div>
                <div className="flex items-start justify-between py-2 border-b border-[#EDF4F9]">
                  <span className="text-xs font-semibold text-[#7686AB]">Keputusan Kemenkumham:</span>
                  <span className="text-xs sm:text-sm font-bold text-[#123049] text-right">{ORGANIZATION_META.skKemenkumham}</span>
                </div>
                <div className="flex items-start justify-between py-2 border-b border-[#EDF4F9]">
                  <span className="text-xs font-semibold text-[#7686AB]">Nomor Induk Berusaha (NIB):</span>
                  <span className="text-xs sm:text-sm font-bold text-[#123049] text-right">{ORGANIZATION_META.nib}</span>
                </div>
                <div className="flex items-start justify-between py-2 border-b border-[#EDF4F9]">
                  <span className="text-xs font-semibold text-[#7686AB]">Sertifikat Merek (HAKI):</span>
                  <span className="text-xs sm:text-sm font-bold text-[#123049] text-right">{ORGANIZATION_META.haki}</span>
                </div>
                <div className="flex items-start justify-between py-2 border-b border-[#EDF4F9]">
                  <span className="text-xs font-semibold text-[#7686AB]">Tanggal Pendirian Resmi:</span>
                  <span className="text-xs sm:text-sm font-bold text-[#123049] text-right">18 Mei 2024</span>
                </div>
                <div className="flex items-start justify-between py-2">
                  <span className="text-xs font-semibold text-[#7686AB]">Alamat Kantor Terdaftar:</span>
                  <span className="text-xs sm:text-sm font-bold text-[#123049] text-right max-w-sm">{ORGANIZATION_META.officeAddress}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-white p-8 sm:p-10 rounded-[28px] shadow-xl border border-white text-center max-w-md w-full">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-[#002855] text-white flex items-center justify-center mb-6 shadow-md">
                  <Icon icon={Shield02Icon} size={36} className="text-[#007FE7]" />
                </div>
                <h4 className="font-bold text-xl text-[#123049] mb-3 font-poppins">Terverifikasi &amp; Amanah</h4>
                <p className="text-xs sm:text-sm text-[#7686AB] leading-relaxed mb-8 font-poppins">
                  Semua transaksi, kontrak kerjasama mitra universitas, dan pengelolaan program talenta berada di bawah pengawasan hukum resmi.
                </p>
                <a
                  href="https://wa.me/6289652647385"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center w-full py-4 bg-[#054FBF] hover:bg-[#002855] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-md shadow-[#054FBF]/20 font-poppins"
                >
                  Verifikasi Dokumen via WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Signature Midtrans Wave Transition: Grey to Pure White (#FFFFFF) */}
      <WaveDivider type="clear-white" />

      {/* 04. Call to Action Strip */}
      <div className="relative bg-white pt-12 sm:pt-16 pb-36 sm:pb-44 lg:pb-52">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-bold text-[#054FBF] uppercase tracking-widest block mb-2 font-poppins">
            MULAI BERSAMA KAMI
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123049] leading-snug font-poppins mb-4">
            Siap Bertumbuh &amp; Berkolaborasi Bersama Mahreen?
          </h2>
          <p className="text-sm sm:text-base text-[#7686AB] leading-relaxed mb-8 font-poppins max-w-2xl mx-auto">
            Apakah Anda mahasiswa yang ingin mengasah skill industri di Batch 2, atau perguruan tinggi yang mencari mitra MBKM resmi, pintu kolaborasi kami selalu terbuka.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenBatch2Modal}
              className="text-white bg-[#054FBF] hover:bg-[#002855] text-xs font-bold px-8 py-4 rounded-full transition-all cursor-pointer shadow-lg shadow-[#054FBF]/20 uppercase tracking-wider font-poppins"
            >
              Daftar Internship Batch 2
            </button>
            <a
              href="https://wa.me/6289652647385"
              target="_blank"
              rel="noopener"
              className="text-[#054FBF] bg-[#F7FCFF] hover:bg-[#EDF4F9] text-xs font-bold px-8 py-4 rounded-full border border-[#D5E9FA] transition-all uppercase tracking-wider font-poppins"
            >
              Hubungi Kami via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
