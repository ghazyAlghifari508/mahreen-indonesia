import React, { useState } from 'react';
import { 
  Compass, 
  Briefcase, 
  Palette, 
  HeartHandshake, 
  TrendingUp,
  GraduationCap,
  Award, 
  ArrowRight, 
  CheckCircle2, 
} from 'lucide-react';
import { PATHFINDER_OPTIONS } from '../../data/mahreenData';
import { calculateRecommendation } from '../../lib/pathfinder';
import { UserGoalId } from '../../types/mahreen';
import Button from '../ui/Button';

interface PathfinderSectionProps {
  onSelectPillar: (pillarId: string) => void;
  onOpenBatch2Modal: () => void;
}

const ICONS_MAP: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
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
        const navHeight = 76;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: 'smooth',
        });
      }
      if (recommendation.pillarId !== 'mahreen-learning') {
        onSelectPillar(recommendation.pillarId);
      }
    }
  };

  return (
    <section 
      id="pathfinder" 
      className="scroll-mt-[100px] bg-[#F7FCFF] py-24 px-6 md:px-12 border-b border-[#EDF4F9]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[12px] font-bold text-[#054FBF] uppercase tracking-[0.2em] block mb-2 font-poppins">
            PANDUAN EKSPLORASI EKOSISTEM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#123049] tracking-tight font-poppins mb-4">
            Temukan Ruangmu di Mahreen
          </h2>
          <p className="text-[#7686AB] text-base md:text-lg leading-relaxed font-poppins">
            Punya gagasan, karya, atau minat yang belum tahu harus disalurkan ke mana? 
            Pilih fokus yang ingin kamu capai, dan sistem akan mencocokkan pilar ekosistem yang paling tepat untukmu.
          </p>
        </div>

        {/* Two-Panel Layout (Midtrans .ui-tabs Inspired) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Goal Selectors */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="text-[11px] font-bold text-[#7686AB] tracking-wider uppercase block mb-2 font-poppins">
              PILIH FOKUS / TUJUAN UTAMA ANDA:
            </span>
            {PATHFINDER_OPTIONS.map((option) => {
              const isSelected = selectedGoal === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedGoal(option.id)}
                  className={`w-full text-left p-4 rounded-[4px] transition-all duration-150 border flex items-center justify-between cursor-pointer group ${
                    isSelected 
                      ? 'bg-white border-[#054FBF] shadow-[0px_4px_12px_rgba(5,79,191,0.08)] ring-1 ring-[#054FBF]' 
                      : 'bg-white/80 hover:bg-white border-[#EDF4F9] hover:border-[#054FBF]/40'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div 
                      className={`w-10 h-10 rounded-[2px] flex items-center justify-center transition-colors shrink-0 ${
                        isSelected 
                          ? 'bg-[#054FBF] text-white' 
                          : 'bg-[#EDF4F9] text-[#123049] group-hover:bg-[#F7FCFF] group-hover:text-[#054FBF]'
                      }`}
                    >
                      {ICONS_MAP[option.iconName] || <Compass className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className={`text-sm md:text-base font-semibold font-poppins ${
                        isSelected ? 'text-[#054FBF]' : 'text-[#123049]'
                      }`}>
                        {option.label}
                      </h4>
                      <p className="text-xs text-[#7686AB] mt-0.5 line-clamp-1 font-poppins">
                        {option.targetPersona}
                      </p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 flex items-center justify-center transition-opacity shrink-0 ${
                    isSelected ? 'opacity-100 text-[#054FBF]' : 'opacity-0 text-slate-400 group-hover:opacity-40'
                  }`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Reactive Recommendation Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[8px] p-6 md:p-8 border border-[#BBBBBB]/30 shadow-[0px_10px_20px_rgba(45,50,55,0.06)] relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#EDF4F9] mb-6">
                <span className="text-[11px] font-bold text-[#7686AB] tracking-wider uppercase font-poppins">
                  REKOMENDASI JALUR EKOSISTEM
                </span>
                <span className="text-[11px] font-bold text-[#054FBF] bg-[#EDF4F9] px-3 py-1 rounded-[2px] border border-[#BBBBBB]/30 uppercase font-poppins">
                  {recommendation.badge}
                </span>
              </div>

              <div className="mb-4">
                <span className="text-xs font-semibold text-[#007FE7] block mb-1 font-poppins">
                  Pilar Dituju: {recommendation.pillarName}
                </span>
                <h3 className="text-2xl font-bold text-[#123049] tracking-tight font-poppins">
                  {recommendation.headline}
                </h3>
              </div>

              <p className="text-[#7686AB] text-sm md:text-base leading-relaxed mb-6 font-poppins">
                {recommendation.whyRelevant}
              </p>

              {/* Roles Available */}
              <div className="mb-6">
                <h4 className="text-[11px] font-bold text-[#123049] uppercase tracking-wider mb-2.5 flex items-center font-poppins">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#054FBF] mr-1.5" />
                  Divisi / Jalur yang Terbuka:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {recommendation.availableRoles.map((role) => (
                    <span 
                      key={role} 
                      className="text-xs font-semibold text-[#123049] bg-[#EDF4F9] px-3 py-1 rounded-[2px] border border-[#BBBBBB]/30 font-poppins"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* First Step: Editorial Midtrans Style (Clean Solid Cool Mist Box, No Neon Alert) */}
              <div className="bg-[#EDF4F9] p-4 rounded-[4px] border border-[#BBBBBB]/20 mb-8">
                <span className="text-[11px] font-bold text-[#7686AB] uppercase tracking-wider block mb-1 font-poppins">
                  LANGKAH PERTAMA
                </span>
                <p className="text-[13px] font-semibold text-[#123049] leading-relaxed font-poppins">
                  {recommendation.firstStep}
                </p>
              </div>

              {/* Action Trigger */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#EDF4F9]">
                <Button 
                  variant="primary" 
                  onClick={handleAction}
                  className="w-full sm:w-auto rounded-[2px] bg-[#054FBF] hover:bg-[#002855] text-white text-xs font-bold px-6 py-3 uppercase tracking-wider"
                >
                  {recommendation.ctaText}
                </Button>
                <button
                  onClick={() => {
                    const el = document.getElementById('ruang-berkarya');
                    if (el) {
                      const navHeight = 76;
                      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
                      window.scrollTo({
                        top: elementPosition - navHeight,
                        behavior: 'smooth',
                      });
                    }
                  }}
                  className="text-xs font-semibold text-[#7686AB] hover:text-[#054FBF] flex items-center transition-colors cursor-pointer font-poppins"
                >
                  Eksplorasi Seluruh 4 Ruang <ArrowRight className="w-3.5 h-3.5 ml-1" />
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
