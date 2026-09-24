import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { PILLARS_DATA } from '../../data/mahreenData';

interface EcosystemSectionProps {
  activePillarId?: string;
  onSelectPillar?: (pillarId: string) => void;
  onOpenBatch2Modal?: () => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({
  onOpenBatch2Modal,
}) => {
  const [selectedUnit, setSelectedUnit] = useState(PILLARS_DATA[0].id);
  const currentPillar = PILLARS_DATA.find((p) => p.id === selectedUnit) || PILLARS_DATA[0];

  return (
    <section 
      id="ruang-berkarya" 
      className="scroll-mt-[100px] bg-[#F7FCFF] py-24 px-6 md:px-12 relative overflow-hidden border-b border-[#EDF4F9]"
    >
      {/* Background Floating Capsule */}
      <img 
        src="/assets/capsule2.png" 
        alt="" 
        className="pointer-events-none absolute left-0 bottom-0 opacity-40 select-none hidden lg:block"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Midtrans-style Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[12px] font-bold text-[#054FBF] uppercase tracking-[0.2em] block mb-2 font-poppins">
            RUANG KREATIVITAS &amp; INOVASI
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#123049] tracking-tight font-poppins mb-4">
            Ruang Berkarya untuk Indonesia
          </h2>
          <p className="text-[#7686AB] text-base md:text-lg leading-relaxed font-poppins">
            Mahreen Indonesia menghadirkan berbagai ruang kolaboratif yang terintegrasi 
            untuk memberdayakan potensi talenta muda, bisnis lokal, dan kontribusi sosial.
          </p>
        </div>

        {/* 4 Feature Cards (Midtrans .grid-payment-home Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PILLARS_DATA.filter(p => p.id !== 'internship').map((pillar) => {
            const isSelected = selectedUnit === pillar.id;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedUnit(pillar.id)}
                className={`grid-payment-home flex flex-col justify-between cursor-pointer border transition-all ${
                  isSelected 
                    ? 'border-[#054FBF] ring-2 ring-[#054FBF]/20 shadow-[0_16px_32px_rgba(5,79,191,0.12)]' 
                    : 'border-[#EDF4F9] hover:border-[#054FBF]/40'
                }`}
              >
                <div>
                  {/* Pure Pillar Logo (Zero Box, No Border) */}
                  <div className="h-14 mb-5 flex items-center">
                    {pillar.logoUrl ? (
                      <img 
                        src={`${pillar.logoUrl}?v=2`} 
                        alt={pillar.name} 
                        className="max-h-14 w-auto object-contain group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-xl font-bold text-[#054FBF] font-poppins">M</span>
                    )}
                  </div>

                  <span className="text-[11px] font-bold text-[#007FE7] uppercase tracking-wider block mb-1">
                    {pillar.category}
                  </span>
                  <h3 className="font-poppins">{pillar.name}</h3>
                  <p className="font-poppins line-clamp-3">{pillar.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#054FBF] font-poppins flex items-center group">
                    <span>Lihat Detail Ruang</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Unit Deep-Dive Showcase (Midtrans .payment-solution-home Layout) */}
        <div className="bg-white rounded-[20px] p-8 md:p-12 border border-[#EDF4F9] shadow-[0px_10px_30px_rgba(45,50,55,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-[11px] font-bold text-[#054FBF] bg-[#EDF4F9] px-3 py-1 rounded-[2px] uppercase">
                  {currentPillar.category}
                </span>
                {currentPillar.startingPrice && (
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-[2px] border border-emerald-200">
                    Mulai {currentPillar.startingPrice}
                  </span>
                )}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#123049] tracking-tight font-poppins mb-2">
                {currentPillar.name}
              </h3>
              <p className="text-base text-[#054FBF] font-semibold mb-4 font-poppins">
                "{currentPillar.tagline}"
              </p>
              <p className="text-sm md:text-base text-[#7686AB] leading-relaxed mb-6 font-poppins">
                {currentPillar.description}
              </p>

              {/* Offset 26px Bullet List (Midtrans Component #6 Pattern) */}
              <div className="mb-6">
                <span className="text-xs font-bold text-[#123049] uppercase tracking-wider block mb-3 font-poppins">
                  Cakupan Ruang &amp; Layanan Utama:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-[26px]">
                  {currentPillar.servicesOrFeatures.map((svc, idx) => (
                    <div key={idx} className="flex items-center -ml-[26px] space-x-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#EDF4F9] flex items-center justify-center shrink-0 text-[#054FBF]">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-[#123049] font-poppins">
                        {svc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Metrics Box */}
            <div className="lg:col-span-5 bg-[#F7FCFF] rounded-[16px] p-6 sm:p-8 border border-[#EDF4F9]">
              <span className="text-[11px] font-bold text-[#7686AB] uppercase tracking-wider block mb-4 font-poppins">
                FAKTA &amp; METRIK UTAMA
              </span>
              <div className="space-y-4 mb-6">
                {currentPillar.highlightMetrics.map((m, idx) => (
                  <div key={idx} className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                    <span className="text-xs font-medium text-[#7686AB] font-poppins">{m.label}</span>
                    <span className="text-lg font-bold text-[#002855] font-poppins">{m.value}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={currentPillar.id === 'internship' ? onOpenBatch2Modal : undefined}
                className="btn-started w-full justify-center shadow-xs"
              >
                <span>{currentPillar.ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
