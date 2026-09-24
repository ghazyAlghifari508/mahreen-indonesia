import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

export interface TransformationStage {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  phaseLabel: string;
  outcome: string;
  primaryMetric: string;
  metricLabel: string;
  deliverablesSummary: string;
}

export const TRANSFORMATION_STAGES: TransformationStage[] = [
  {
    id: 'ide',
    stepNumber: '01',
    title: 'IDE & GAGASAN',
    description: 'Eksplorasi minat & penajaman konsep awal',
    phaseLabel: 'FASE 01 • INKUBASI GAGASAN',
    outcome:
      'Pemetaan potensi talenta, riset kebutuhan nyata, dan perumusan kerangka konsep inovatif.',
    primaryMetric: '50+ Mitra Kampus',
    metricLabel: 'Jejaring Kampus & Talenta',
    deliverablesSummary: 'Assessment Talenta & MIOS Induction',
  },
  {
    id: 'karya',
    stepNumber: '02',
    title: 'KARYA NYATA',
    description: 'Produksi proyek klien & bimbingan mentor praktisi',
    phaseLabel: 'FASE 02 • PRODUKSI INDUSTRI',
    outcome:
      'Eksekusi proyek klien komersial nyata di bawah supervisi mentor ahli dengan standar agensi.',
    primaryMetric: '30% Profit Sharing',
    metricLabel: 'Bagi Hasil Tim Pelaksana',
    deliverablesSummary: 'Web Modern, Branding & Konten Video',
  },
  {
    id: 'dampak',
    stepNumber: '03',
    title: 'DAMPAK BERMAKNA',
    description: 'Kontribusi nyata bagi UMKM & masyarakat Indonesia',
    phaseLabel: 'FASE 03 • DAMPAK KEBERMANFAATAN',
    outcome:
      'Digitalisasi UMKM lokal, kelas inspirasi sosial, dan portofolio profesional berdaya saing tinggi.',
    primaryMetric: '100% Legalitas Resmi',
    metricLabel: 'Kemenkumham & Portofolio Kerja',
    deliverablesSummary: '100+ Proyek Selesai & Wisuda Magang',
  },
];

export interface HeroStatItem {
  value: string;
  label: string;
}

export const HERO_STATS: HeroStatItem[] = [
  {
    value: '50+',
    label: 'Mitra Kampus di Seluruh Indonesia',
  },
  {
    value: '5',
    label: 'Pilar Ekosistem Terkoneksi',
  },
  {
    value: '12',
    label: 'Batch Berjalan',
  },
  {
    value: '100%',
    label: 'Terdaftar Resmi (SK Kemenkumham RI 2026)',
  },
];

export interface HeroSectionProps {
  onExplorePathfinder?: () => void;
  onOpenBatch2Modal?: () => void;
  activeStage?: number;
  defaultStage?: number;
  onStageChange?: (stageIndex: number) => void;
  className?: string;
}

/**
 * Midtrans-Styled Hero Section
 *
 * Implements authoritative dark shell enclosure, editorial split,
 * interactive 3-stage talent transformation preview card, and
 * verified high-contrast institutional metric ribbon.
 */
export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePathfinder,
  onOpenBatch2Modal,
  activeStage,
  defaultStage = 0,
  onStageChange,
  className = '',
}) => {
  const [internalStage, setInternalStage] = useState(defaultStage);
  const currentStageIndex =
    activeStage !== undefined ? activeStage : internalStage;
  const activeStageData =
    TRANSFORMATION_STAGES[currentStageIndex] || TRANSFORMATION_STAGES[0];

  const handleSelectStage = (index: number) => {
    if (activeStage === undefined) {
      setInternalStage(index);
    }
    onStageChange?.(index);
  };

  return (
    <section
      className={`bg-[#002855] text-white relative overflow-hidden py-16 md:py-24 px-6 md:px-12 border-b border-white/10 ${className}`.trim()}
      aria-label="Mahreen Indonesia Hero"
    >
      {/* Ambient background illumination */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-[#007FE7]/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-10 w-[400px] h-[400px] bg-[#054FBF]/15 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (Editorial & Value Proposition) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Campaign Tag */}
            <div className="mb-3">
              <span className="text-[12px] font-bold text-[#007FE7] uppercase tracking-[0.18em] block font-poppins">
                BERKARYA UNTUK INDONESIA
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-[32px] sm:text-[38px] lg:text-[44px] font-bold text-white leading-[1.25] tracking-tight font-poppins mb-4">
              Satu Ide. Satu Karya. Satu Dampak.
            </h1>

            {/* Subheadline */}
            <p className="text-[16px] leading-[26px] text-[#F7FCFF]/85 font-poppins font-normal max-w-2xl mb-8">
              Ruang kolaboratif yang menghubungkan gagasan generasi muda dengan
              karya nyata. Melalui pengembangan talenta, solusi digital, studio
              kreatif, dan kontribusi sosial—kami hadir agar setiap ide tumbuh
              menjadi kebermanfaatan.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={onExplorePathfinder}
                icon={<ArrowRight size={14} />}
                iconPosition="right"
              >
                Temukan Ruangmu di Mahreen
              </Button>
              <Button
                variant="outline-light"
                size="md"
                onClick={onOpenBatch2Modal}
              >
                Pelajari Internship Batch 2
              </Button>
            </div>
          </div>

          {/* Right Column (Interactive Transformation Preview Card) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full bg-[#FFFFFF] rounded-[8px] p-6 sm:p-7 text-[#123049] shadow-[0px_1px_40px_rgba(0,0,0,0.1)] border border-white/20 relative">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#EDF4F9] mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#007FE7]" />
                  <h2 className="text-[12px] font-bold uppercase tracking-[0.5px] text-[#123049] font-poppins">
                    ALUR PERJALANAN TALENTA
                  </h2>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#054FBF] bg-[#EDF4F9] px-2.5 py-0.5 rounded-[2px] border border-[#007FE7]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#007FE7]" />
                  Ekosistem Terintegrasi
                </span>
              </div>

              {/* Authentic Photo Context */}
              <div className="relative rounded-[4px] overflow-hidden mb-3 border border-[#EDF4F9]">
                <img 
                  src="/assets/team-meeting.webp" 
                  alt="Sesi Kolaborasi Ide Mahreen Indonesia" 
                  className="w-full h-28 sm:h-32 object-cover" 
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002855]/80 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[11px] font-medium text-white/95 leading-tight">
                    Sesi Kolaborasi &amp; Perancangan Ide Mahreen Indonesia
                  </span>
                </div>
              </div>

              {/* 3-Stage Transformation Stepper */}
              <div className="space-y-3" role="tablist" aria-label="Tahapan Transformasi Talenta">
                {TRANSFORMATION_STAGES.map((stage, index) => {
                  const isActive = currentStageIndex === index;
                  return (
                    <button
                      key={stage.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`stage-panel-${stage.id}`}
                      data-stage-index={index}
                      data-stage-id={stage.id}
                      onClick={() => handleSelectStage(index)}
                      onMouseEnter={() => handleSelectStage(index)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-[6px] border transition-all duration-200 cursor-pointer flex items-start gap-3.5 select-none ${
                        isActive
                          ? 'bg-[#F7FCFF] border-[#054FBF] shadow-[0_2px_8px_rgba(5,79,191,0.12)] ring-1 ring-[#054FBF]'
                          : 'bg-white border-[#E2E8F0] hover:bg-[#F7FCFF]/60 hover:border-[#054FBF]/40'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-[4px] flex items-center justify-center font-poppins font-bold text-[12px] shrink-0 transition-colors ${
                          isActive
                            ? 'bg-[#054FBF] text-white shadow-sm'
                            : 'bg-[#EDF4F9] text-[#7686AB]'
                        }`}
                      >
                        {stage.stepNumber}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <h3
                            className={`font-poppins font-bold text-[13px] tracking-[0.3px] uppercase ${
                              isActive ? 'text-[#054FBF]' : 'text-[#123049]'
                            }`}
                          >
                            {stage.title}
                          </h3>
                          {isActive && (
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#054FBF] bg-[#054FBF]/10 px-2 py-0.5 rounded-[12px]">
                              Aktif
                            </span>
                          )}
                        </div>
                        <p
                          className={`text-[12px] leading-[18px] font-poppins line-clamp-2 ${
                            isActive
                              ? 'text-[#123049] font-medium'
                              : 'text-[#7686AB]'
                          }`}
                        >
                          {stage.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Verified Outcome Panel */}
              <div
                id={`stage-panel-${activeStageData.id}`}
                role="tabpanel"
                className="mt-4 pt-4 border-t border-[#EDF4F9]"
              >
                <div className="bg-[#EDF4F9]/70 rounded-[6px] p-4 border border-[#007FE7]/20 transition-all duration-200">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5px] text-[#054FBF] font-poppins">
                      {activeStageData.phaseLabel}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                      <CheckCircle2 size={11} className="text-emerald-600" />
                      Terverifikasi
                    </span>
                  </div>
                  <p className="text-[12px] leading-[18px] text-[#123049] font-medium mb-3">
                    {activeStageData.outcome}
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2.5 border-t border-slate-200/80">
                    <div>
                      <span className="block text-[10px] font-semibold uppercase text-[#7686AB] tracking-wider mb-0.5">
                        Metrik Kunci
                      </span>
                      <span className="text-[12px] font-bold text-[#054FBF] font-poppins block truncate">
                        {activeStageData.primaryMetric}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold uppercase text-[#7686AB] tracking-wider mb-0.5">
                        Hasil Teruji
                      </span>
                      <span className="text-[12px] font-semibold text-[#123049] font-poppins block truncate">
                        {activeStageData.deliverablesSummary}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metric Ribbon */}
        <div className="border-t border-white/10 mt-14 sm:mt-16 lg:mt-20 pt-10 sm:pt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {HERO_STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#007FE7] mb-1" />
                </div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F7FCFF]/90 font-poppins mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.displayName = 'HeroSection';

export default HeroSection;
