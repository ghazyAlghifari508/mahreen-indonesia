import React from 'react';
import { ArrowRight, ShieldCheck, Users, Briefcase } from 'lucide-react';

export interface HeroSectionProps {
  onExplorePathfinder?: () => void;
  onOpenBatch2Modal?: () => void;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePathfinder,
  onOpenBatch2Modal,
  className = '',
}) => {
  return (
    <section
      className={`banner-home pt-16 md:pt-24 pb-28 md:pb-40 px-6 md:px-12 ${className}`}
      aria-label="Mahreen Indonesia Hero"
    >
      {/* Background Floating Capsule (Direct Midtrans Inspiration) */}
      <img 
        src="/assets/capsule1.png" 
        alt="" 
        className="pointer-events-none absolute right-0 top-10 opacity-30 select-none hidden lg:block"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Midtrans .content-banner Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Theme Kicker */}
            <span className="text-[12px] md:text-[13px] font-bold text-[#007FE7] uppercase tracking-[0.22em] block mb-3 font-poppins">
              BERKARYA UNTUK INDONESIA
            </span>

            {/* H1 Headline */}
            <h1 className="text-[36px] sm:text-[46px] lg:text-[54px] font-bold text-white leading-[1.18] tracking-tight font-poppins mb-6">
              Satu Ide. Satu Karya. <br className="hidden sm:inline" />
              Satu Dampak.
            </h1>

            {/* Supporting Copy */}
            <p className="text-[16px] md:text-[18px] leading-[28px] text-[#F7FCFF]/90 font-poppins font-normal max-w-2xl mb-10">
              Mahreen Indonesia adalah ekosistem kreatif, digital, dan sosial yang mewadahi generasi muda 
              untuk mentransformasi gagasan menjadi karya profesional dan kebermanfaatan nyata bagi masyarakat.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                type="button"
                onClick={onExplorePathfinder}
                className="btn-started shadow-[0_4px_16px_rgba(5,79,191,0.45)]"
              >
                <span>Mulai Eksplorasi</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button
                type="button"
                onClick={onOpenBatch2Modal}
                className="btn-sales"
              >
                <span>Pelajari Ruang Kolaborasi</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/15 text-xs text-[#F7FCFF]/80">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#007FE7]" />
                <span>SK Kemenkumham RI 2026</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-[#007FE7]" />
                <span>50+ Mitra Kampus Terhubung</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="w-4 h-4 text-[#007FE7]" />
                <span>Ekosistem Terintegrasi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composite of Mahreen Ecosystem */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full bg-white rounded-[20px] p-6 text-[#123049] shadow-[0px_20px_50px_rgba(0,0,0,0.3)] border border-white/20 relative overflow-hidden">
              {/* Card Window Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#EDF4F9] mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#007FE7]" />
                  <span className="text-[12px] font-bold uppercase tracking-[0.5px] text-[#123049] font-poppins">
                    EKOSISTEM KREATIF &amp; DIGITAL
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#054FBF] bg-[#EDF4F9] px-2.5 py-0.5 rounded-[2px]">
                  Mahreen Indonesia
                </span>
              </div>

              {/* Team Meeting Real Photo */}
              <div className="relative rounded-[12px] overflow-hidden mb-4 border border-[#EDF4F9] bg-[#002855]">
                <img
                  src="/assets/team-meeting.webp"
                  alt="Sesi Kolaborasi Tim Mahreen Indonesia"
                  className="w-full h-36 sm:h-44 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002855]/90 via-[#002855]/25 to-transparent flex items-end p-3.5">
                  <div>
                    <span className="text-[10px] font-bold text-[#007FE7] uppercase tracking-wider block">
                      Dokumentasi Otentik Mahreen
                    </span>
                    <span className="text-[12px] font-semibold text-white leading-tight block">
                      Kolaborasi Ide, Kreativitas &amp; Proyek Nyata
                    </span>
                  </div>
                </div>
              </div>

              {/* Ecosystem Transformation Steps */}
              <div className="space-y-2.5 mb-2 font-poppins">
                <div className="p-3 rounded-[8px] bg-[#F7FCFF] border border-[#EDF4F9] flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 rounded-full bg-[#054FBF] text-white text-xs font-bold flex items-center justify-center">1</span>
                    <span className="text-xs font-bold text-[#123049]">Gagasan &amp; Pembelajaran</span>
                  </div>
                  <span className="text-[11px] text-[#7686AB]">Eksplorasi Ide</span>
                </div>
                <div className="p-3 rounded-[8px] bg-[#F7FCFF] border border-[#EDF4F9] flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 rounded-full bg-[#007FE7] text-white text-xs font-bold flex items-center justify-center">2</span>
                    <span className="text-xs font-bold text-[#123049]">Produksi &amp; Karya Nyata</span>
                  </div>
                  <span className="text-[11px] text-[#7686AB]">Implementasi</span>
                </div>
                <div className="p-3 rounded-[8px] bg-[#F7FCFF] border border-[#EDF4F9] flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">3</span>
                    <span className="text-xs font-bold text-[#123049]">Kebermanfaatan &amp; Dampak</span>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-bold">Hasil Berkelanjutan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
