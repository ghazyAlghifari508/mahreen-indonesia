import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Sparkles, 
  Heart, 
  Leaf, 
  ArrowRight, 
  Check, 
  BookOpen
} from 'lucide-react';
import { PILLARS_DATA, MAHREEN_LEARNING_PROGRAMS } from '../../data/mahreenData';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

interface EcosystemSectionProps {
  activePillarId: string;
  onSelectPillar: (pillarId: string) => void;
  onOpenBatch2Modal: () => void;
}

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  'internship': <GraduationCap className="w-5 h-5" />,
  'tanya-mahreen': <Briefcase className="w-5 h-5" />,
  'mahreen-studio': <Sparkles className="w-5 h-5" />,
  'peduli-mahreen': <Heart className="w-5 h-5" />,
  'mahreen-csr': <Leaf className="w-5 h-5" />,
};

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({
  activePillarId,
  onSelectPillar,
  onOpenBatch2Modal,
}) => {
  const currentPillar = PILLARS_DATA.find((p) => p.id === activePillarId) || PILLARS_DATA[0];

  const handlePillarAction = (pillarId: string) => {
    if (pillarId === 'internship') {
      onOpenBatch2Modal();
    } else if (pillarId === 'tanya-mahreen') {
      window.open('https://mahreenindonesia.com/tanya-mahreen', '_blank');
    } else if (pillarId === 'mahreen-studio') {
      window.open('https://mahreenindonesia.com/mahreen-studio', '_blank');
    } else if (pillarId === 'peduli-mahreen') {
      window.open('https://mahreenindonesia.com/peduli-mahreen', '_blank');
    } else if (pillarId === 'mahreen-csr') {
      window.open('https://mahreenindonesia.com/mahreen-csr', '_blank');
    }
  };

  return (
    <section 
      id="ecosystem" 
      className="bg-midtrans-mist py-20 px-6 md:px-12 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[12px] font-bold text-[#054FBF] uppercase tracking-[0.15em] block mb-2 font-poppins">
            ARSITEKTUR EKOSISTEM LENGKAP
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-midtrans-slate tracking-tight mb-4">
            5 Pilar Mahreen Indonesia
          </h2>
          <p className="text-midtrans-muted text-base md:text-lg leading-relaxed">
            Setiap pilar memiliki fokus strategis yang saling mendukung—menghubungkan inkubasi talenta, 
            solusi bisnis terintegrasi, produk kreatif lifestyle, hingga aksi keberlanjutan sosial.
          </p>
        </div>

        {/* Midtrans-style Segmented Tab Navigation */}
        <div className="flex overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center gap-2 mb-8">
          {PILLARS_DATA.map((pillar) => {
            const isActive = pillar.id === currentPillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => onSelectPillar(pillar.id)}
                className={`px-5 py-3.5 text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-150 flex items-center space-x-2 border-b-2 ${
                  isActive
                    ? 'bg-white text-midtrans-blue border-midtrans-blue shadow-sm rounded-t-sm'
                    : 'bg-transparent text-midtrans-slate hover:bg-white/60 border-transparent'
                }`}
              >
                <span className={isActive ? 'text-midtrans-blue' : 'text-midtrans-muted'}>
                  {PILLAR_ICONS[pillar.id]}
                </span>
                <span>{pillar.name}</span>
              </button>
            );
          })}
        </div>

        {/* Focused Detail Panel */}
        <div className="bg-white rounded-lg p-6 md:p-10 shadow-midtrans-card border border-slate-200/60 transition-all duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-4">
                {currentPillar.logoUrl && (
                  <div className="w-16 h-16 rounded-[4px] bg-[#F7FCFF] p-2 border border-[#EDF4F9] flex items-center justify-center shrink-0">
                    <img 
                      src={currentPillar.logoUrl} 
                      alt={currentPillar.name} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                )}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[11px] font-bold text-[#007FE7] uppercase tracking-wider font-poppins">
                      {currentPillar.category}
                    </span>
                    {currentPillar.startingPrice && (
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-[2px] border border-emerald-200">
                        Mulai {currentPillar.startingPrice}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-midtrans-slate tracking-tight">
                    {currentPillar.name}
                  </h3>
                </div>
              </div>

              <p className="text-base text-midtrans-blue font-medium mb-4">
                "{currentPillar.tagline}"
              </p>
              <p className="text-midtrans-muted text-sm md:text-base leading-relaxed mb-6">
                {currentPillar.description}
              </p>

              {/* Feature List with Offset Indent (Midtrans Component #6 Pattern) */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-midtrans-slate uppercase tracking-wider mb-4">
                  Cakupan Layanan / Program Utama:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-[26px]">
                  {currentPillar.servicesOrFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start -ml-[26px] space-x-2.5">
                      <div className="w-5 h-5 rounded-full bg-midtrans-ice border border-midtrans-azure/30 flex items-center justify-center shrink-0 mt-0.5 text-midtrans-blue">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-sm font-medium text-midtrans-slate">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Metrics & Action Box */}
            <div className="lg:col-span-4 bg-midtrans-ice rounded-lg p-6 border border-midtrans-azure/20">
              <h4 className="text-xs font-bold text-midtrans-slate uppercase tracking-wider mb-4">
                Metrik & Fakta Kunci
              </h4>
              <div className="space-y-4 mb-6">
                {currentPillar.highlightMetrics.map((m, idx) => (
                  <div key={idx} className="flex items-center justify-between pb-3 border-b border-slate-200/80">
                    <span className="text-xs font-medium text-midtrans-muted">{m.label}</span>
                    <span className="text-lg font-bold text-midtrans-slate">{m.value}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="primary" 
                onClick={() => handlePillarAction(currentPillar.id)}
                className="w-full flex items-center justify-center"
              >
                <span>{currentPillar.ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mahreen Learning Ecosystem Callout */}
        <div className="mt-12 bg-white rounded-lg p-6 md:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-midtrans-mist">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-md bg-midtrans-mist text-midtrans-blue flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-midtrans-slate">
                  Mahreen Learning — Akselerasi Pendidikan & Sertifikasi
                </h4>
                <p className="text-xs text-midtrans-muted">
                  Jalur pendidikan terstruktur untuk mahasiswa, pemula, dan profesional muda.
                </p>
              </div>
            </div>
            <Badge variant="azure">Program Pendidikan Terbuka</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MAHREEN_LEARNING_PROGRAMS.map((prog, idx) => (
              <div key={idx} className="bg-midtrans-ice/70 p-4 rounded border border-midtrans-azure/10">
                <span className="text-xs font-bold text-midtrans-blue block mb-1">
                  {prog.type} • {prog.duration}
                </span>
                <h5 className="text-base font-bold text-midtrans-slate mb-2">
                  {prog.title}
                </h5>
                <p className="text-xs text-midtrans-muted leading-relaxed mb-3">
                  {prog.description}
                </p>
                <div className="text-xs font-semibold text-slate-700 flex items-center">
                  <Check className="w-3.5 h-3.5 text-midtrans-blue mr-1" />
                  {prog.format}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
