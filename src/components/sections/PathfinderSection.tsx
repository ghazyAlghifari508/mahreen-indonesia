import React, { useState } from 'react';
import { 
  Compass, 
  Briefcase, 
  Palette, 
  HeartHandshake, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Info
} from 'lucide-react';
import { PATHFINDER_OPTIONS } from '../../data/mahreenData';
import { calculateRecommendation } from '../../lib/pathfinder';
import { UserGoalId } from '../../types/mahreen';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

interface PathfinderSectionProps {
  onSelectPillar: (pillarId: string) => void;
  onOpenBatch2Modal: () => void;
}

const ICONS_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  Award: <Award className="w-5 h-5" />,
};

export const PathfinderSection: React.FC<PathfinderSectionProps> = ({
  onSelectPillar,
  onOpenBatch2Modal,
}) => {
  const [selectedGoal, setSelectedGoal] = useState<UserGoalId>('skill-portfolio');

  const recommendation = calculateRecommendation(selectedGoal);

  const handleAction = () => {
    if (recommendation.ctaType === 'modal') {
      onOpenBatch2Modal();
    } else if (recommendation.ctaType === 'scroll') {
      const el = document.getElementById(recommendation.ctaTarget);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      if (recommendation.pillarId !== 'mahreen-learning') {
        onSelectPillar(recommendation.pillarId);
      }
    }
  };

  return (
    <section 
      id="pathfinder" 
      className="bg-midtrans-ice py-20 px-6 md:px-12 border-b border-midtrans-mist"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[12px] font-bold text-[#007FE7] uppercase tracking-[0.15em] block mb-2 font-poppins">
            PANDUAN EKSPLORASI EKOSISTEM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-midtrans-slate tracking-tight mb-4">
            Temukan Ruangmu di Mahreen
          </h2>
          <p className="text-midtrans-muted text-base md:text-lg leading-relaxed">
            Punya gagasan, karya, atau minat yang belum tahu harus disalurkan ke mana? 
            Pilih fokus yang ingin kamu capai, dan sistem akan mencocokkan pilar ekosistem yang paling tepat untukmu.
          </p>
        </div>

        {/* Two-Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Goal Selectors */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold text-midtrans-muted tracking-wider uppercase block mb-1">
              Pilih Fokus / Tujuan Utama Anda:
            </span>
            {PATHFINDER_OPTIONS.map((option) => {
              const isSelected = selectedGoal === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedGoal(option.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-200 border flex items-center justify-between group ${
                    isSelected 
                      ? 'bg-white border-midtrans-blue shadow-midtrans-card ring-1 ring-midtrans-blue/20' 
                      : 'bg-white/70 hover:bg-white border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div 
                      className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors ${
                        isSelected 
                          ? 'bg-midtrans-blue text-white' 
                          : 'bg-midtrans-mist text-midtrans-slate group-hover:bg-midtrans-ice'
                      }`}
                    >
                      {ICONS_MAP[option.iconName]}
                    </div>
                    <div>
                      <h4 className={`text-sm md:text-base font-semibold ${
                        isSelected ? 'text-midtrans-blue' : 'text-midtrans-slate'
                      }`}>
                        {option.label}
                      </h4>
                      <p className="text-xs text-midtrans-muted mt-0.5 line-clamp-1">
                        {option.targetPersona}
                      </p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-opacity ${
                    isSelected ? 'opacity-100 text-midtrans-blue' : 'opacity-0 text-slate-400 group-hover:opacity-40'
                  }`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Reactive Recommendation Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-midtrans-flyout border border-midtrans-azure/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-midtrans-azure/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-midtrans-mist mb-6">
                <span className="text-xs font-bold text-midtrans-muted tracking-wider uppercase">
                  REKOMENDASI JALUR EKOSISTEM
                </span>
                <Badge variant="cobalt">
                  {recommendation.badge}
                </Badge>
              </div>

              <div className="mb-4">
                <span className="text-sm font-semibold text-midtrans-blue block mb-1">
                  Pilar Dituju: {recommendation.pillarName}
                </span>
                <h3 className="text-2xl font-bold text-midtrans-slate tracking-tight">
                  {recommendation.headline}
                </h3>
              </div>

              <p className="text-midtrans-muted text-base leading-relaxed mb-6">
                {recommendation.whyRelevant}
              </p>

              {/* Roles Available */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-midtrans-slate uppercase tracking-wider mb-2.5 flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-midtrans-blue mr-1.5" />
                  Divisi / Jalur yang Terbuka:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {recommendation.availableRoles.map((role) => (
                    <Badge key={role} variant="slate" className="py-1 px-3">
                      {role}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* First Step Box */}
              <div className="bg-midtrans-ice border border-midtrans-azure/20 rounded p-4 mb-8 flex items-start space-x-3">
                <Info className="w-5 h-5 text-midtrans-blue shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-midtrans-slate uppercase tracking-wider block mb-0.5">
                    Langkah Awal Anda:
                  </span>
                  <p className="text-xs md:text-sm text-midtrans-muted">
                    {recommendation.firstStep}
                  </p>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <Button 
                  variant="primary" 
                  onClick={handleAction}
                  className="w-full sm:w-auto"
                >
                  {recommendation.ctaText}
                </Button>
                <button
                  onClick={() => {
                    const el = document.getElementById('ecosystem');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-semibold text-midtrans-muted hover:text-midtrans-blue flex items-center transition-colors"
                >
                  Eksplorasi Seluruh 5 Pilar <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathfinderSection;
