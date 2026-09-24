import React, { useState } from 'react';
import { 
  ArrowRight01Icon, 
  CheckmarkCircle02Icon
} from '@hugeicons/core-free-icons';
import { Icon } from '../components/ui/Icon';
import { WaveDivider } from '../components/ui/WaveDivider';
import { PILLARS_DATA } from '../data/mahreenData';

interface EcosystemPageProps {
  onNavigate: (route: string) => void;
  onOpenBatch2Modal: () => void;
}

export const EcosystemPage: React.FC<EcosystemPageProps> = ({
  onOpenBatch2Modal,
}) => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('studio');

  const activePillar = PILLARS_DATA.find((p) => p.id === selectedPillarId) || PILLARS_DATA[0];

  return (
    <div className="w-full bg-white text-[#123049] font-poppins selection:bg-[#007FE7] selection:text-white">
      {/* 01. Banner Home: Majestic Centered Ecosystem Hero */}
      <div className="row banner-home usecase-banner relative overflow-hidden bg-[#002855] text-white pt-28 sm:pt-36 pb-64 sm:pb-72 lg:pb-80">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 text-center">
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 font-poppins max-w-4xl mx-auto">
            Sinergi Komersial, Inkubasi Talenta &amp; Dampak Sosial
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="#detail-pilar"
              className="text-white bg-[#054FBF] hover:bg-[#002855] text-xs sm:text-sm font-bold px-8 py-4 rounded-full transition-all cursor-pointer shadow-xl uppercase tracking-wider"
            >
              Eksplorasi Detail 5 Pilar
            </a>

            <button
              type="button"
              onClick={onOpenBatch2Modal}
              className="text-white hover:text-[#002855] hover:bg-white text-xs sm:text-sm font-semibold px-8 py-4 rounded-full border border-white/40 transition-all cursor-pointer shadow-sm"
            >
              Daftar Internship Batch 2
            </button>
          </div>
        </div>
      </div>

      {/* Signature Midtrans Wave Transition: Navy to Light Blue (#F7FCFF) */}
      <WaveDivider type="white" />

      {/* 02. Complete Payment: Tab Navigasi & Detail Setiap Pilar */}
      <div id="detail-pilar" className="relative bg-[#F7FCFF] pt-12 sm:pt-16 pb-36 sm:pb-44 lg:pb-52">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#054FBF] uppercase tracking-widest block mb-2 font-poppins">
              ARSITEKTUR LENGKAP
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123049] leading-tight font-poppins">
              Jelajahi Karakteristik Masing-Masing Pilar
            </h2>
            <p className="text-sm sm:text-base text-[#7686AB] mt-3 leading-relaxed font-poppins">
              Pilih pilar di bawah ini untuk melihat ruang lingkup layanan, metrik dampak, dan peran strategisnya.
            </p>
          </div>

          {/* Segmented Pill Selector */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {PILLARS_DATA.map((pillar) => {
              const isSelected = selectedPillarId === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer font-poppins ${
                    isSelected
                      ? 'bg-[#002855] text-white shadow-md shadow-[#002855]/20'
                      : 'bg-white text-[#7686AB] hover:text-[#002855] border border-[#EDF4F9] shadow-sm hover:border-[#002855]/30'
                  }`}
                >
                  {pillar.name}
                </button>
              );
            })}
          </div>

          {/* Active Pillar Showcase */}
          <div className="bg-white rounded-[28px] p-8 sm:p-12 shadow-xl border border-[#EDF4F9] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#F7FCFF] rounded-full border border-[#054FBF]/20">
                <span className="text-xs font-bold text-[#054FBF] uppercase tracking-wider font-poppins">
                  {activePillar.badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123049] font-poppins leading-tight">
                {activePillar.name}
              </h3>

              <p className="text-base text-[#7686AB] leading-relaxed font-poppins">
                {activePillar.description}
              </p>

              <div className="space-y-3.5 pt-2">
                <strong className="text-xs font-bold text-[#123049] uppercase tracking-wider block font-poppins">
                  Fitur &amp; Layanan Utama:
                </strong>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activePillar.servicesOrFeatures.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#123049] font-poppins">
                      <Icon icon={CheckmarkCircle02Icon} size={17} className="text-[#054FBF] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#EDF4F9] flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/6289652647385"
                  target="_blank"
                  rel="noopener"
                  className="px-7 py-3.5 bg-[#054FBF] hover:bg-[#002855] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all inline-flex items-center gap-2 shadow-md shadow-[#054FBF]/20 font-poppins"
                >
                  <span>Konsultasi Pilar Ini</span>
                  <Icon icon={ArrowRight01Icon} size={15} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-[#F7FCFF] p-8 rounded-[24px] border border-[#EDF4F9] text-center shadow-inner">
                <img 
                  alt={activePillar.name} 
                  src={activePillar.logoUrl || '/assets/pillar-mahreen-studio.webp'} 
                  className="w-full h-48 object-contain mb-6 mx-auto"
                />
                <span className="text-xs font-semibold text-[#7686AB] block mb-2 font-poppins">Tagline:</span>
                <p className="text-xs sm:text-sm text-[#123049] font-semibold leading-relaxed font-poppins">
                  "{activePillar.tagline}"
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Signature Midtrans Wave Transition: White to Grey (#EDF4F9) */}
      <WaveDivider type="grey" />

      {/* 03. Interkoneksi 5 Pilar */}
      <div className="relative bg-[#EDF4F9] pt-12 sm:pt-16 pb-36 sm:pb-44 lg:pb-52">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#054FBF] uppercase tracking-widest block mb-2 font-poppins">
              SISTEM SIRKULAR
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123049] leading-tight font-poppins">
              Bagaimana 5 Pilar Saling Bersinergi?
            </h2>
            <p className="text-sm sm:text-base text-[#7686AB] mt-3 leading-relaxed font-poppins">
              Mahreen Indonesia beroperasi bukan sebagai unit terpisah, melainkan ekosistem berputar yang saling memberdayakan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 sm:p-9 rounded-[24px] shadow-sm hover:shadow-md transition-all border border-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#002855] text-white flex items-center justify-center font-bold text-lg mb-5 shadow-sm">
                  01
                </div>
                <h3 className="font-bold text-base sm:text-lg text-[#123049] mb-2 font-poppins">Eksplorasi &amp; Asesmen</h3>
                <p className="text-xs sm:text-sm text-[#7686AB] leading-relaxed font-poppins">
                  Tanya Mahreen memetakan minat dan potensi talenta muda melalui psikotes dan asesmen karir terarah.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 sm:p-9 rounded-[24px] shadow-sm hover:shadow-md transition-all border border-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#054FBF] text-white flex items-center justify-center font-bold text-lg mb-5 shadow-sm">
                  02
                </div>
                <h3 className="font-bold text-base sm:text-lg text-[#123049] mb-2 font-poppins">Inkubasi Proyek Komersial</h3>
                <p className="text-xs sm:text-sm text-[#7686AB] leading-relaxed font-poppins">
                  Mahasiswa magang di Mahreen Internship mengerjakan deliverable real project bersama tim Mahreen Studio.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 sm:p-9 rounded-[24px] shadow-sm hover:shadow-md transition-all border border-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#007FE7] text-white flex items-center justify-center font-bold text-lg mb-5 shadow-sm">
                  03
                </div>
                <h3 className="font-bold text-base sm:text-lg text-[#123049] mb-2 font-poppins">Dampak &amp; Filantropi Sosial</h3>
                <p className="text-xs sm:text-sm text-[#7686AB] leading-relaxed font-poppins">
                  Sebagian surplus ekonomi disalurkan melalui Mahreen CSR dan Peduli Mahreen untuk beasiswa dan bantuan sosial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemPage;
