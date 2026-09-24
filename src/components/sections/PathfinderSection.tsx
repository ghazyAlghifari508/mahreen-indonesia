import React, { useState } from 'react';
import { 
  CompassIcon, 
  Briefcase02Icon, 
  PaintBoardIcon, 
  FavouriteIcon, 
  TradeUpIcon,
  GraduationCapIcon,
  Award01Icon, 
  ArrowRight01Icon, 
  CheckmarkCircle02Icon, 
} from '@hugeicons/core-free-icons';
import { PATHFINDER_OPTIONS } from '../../data/mahreenData';
import { calculateRecommendation } from '../../lib/pathfinder';
import { UserGoalId } from '../../types/mahreen';
import Button from '../ui/Button';
import { Icon } from '../ui/Icon';

interface PathfinderSectionProps {
  onSelectPillar: (pillarId: string) => void;
  onOpenBatch2Modal: () => void;
}

export const PathfinderSection: React.FC<PathfinderSectionProps> = ({
  onSelectPillar,
  onOpenBatch2Modal,
}) => {
  const [selectedGoal, setSelectedGoal] = useState<UserGoalId>('skill-portfolio');

  const recommendation = calculateRecommendation(selectedGoal);

  const getGoalIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Icon icon={Briefcase02Icon} size={20} />;
      case 'TrendingUp':
        return <Icon icon={TradeUpIcon} size={20} />;
      case 'Palette':
        return <Icon icon={PaintBoardIcon} size={20} />;
      case 'HeartHandshake':
        return <Icon icon={FavouriteIcon} size={20} />;
      case 'GraduationCap':
        return <Icon icon={GraduationCapIcon} size={20} />;
      case 'Award':
        return <Icon icon={Award01Icon} size={20} />;
      default:
        return <Icon icon={CompassIcon} size={20} />;
    }
  };

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
      className="scroll-mt-[100px] bg-[#F7FCFF] pt-20 pb-36 sm:pb-44 lg:pb-52 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#054FBF] uppercase tracking-[0.2em] block mb-2 font-poppins">
            PANDUAN EKSPLORASI EKOSISTEM
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#123049] tracking-tight font-poppins mb-4">
            Temukan Ruangmu di Mahreen
          </h2>
          <p className="text-[#7686AB] text-sm md:text-base leading-relaxed font-poppins">
            Punya gagasan, karya, atau minat yang belum tahu harus disalurkan ke mana? 
            Pilih fokus yang ingin kamu capai, dan sistem akan mencocokkan pilar ekosistem yang paling tepat untukmu.
          </p>
        </div>

        {/* Two-Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Goal Selectors */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold text-[#7686AB] tracking-wider uppercase block mb-3 font-poppins">
              PILIH FOKUS / TUJUAN UTAMA ANDA:
            </span>
            {PATHFINDER_OPTIONS.map((option) => {
              const isSelected = selectedGoal === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedGoal(option.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-200 border flex items-center justify-between cursor-pointer group ${
                    isSelected 
                      ? 'bg-white border-[#054FBF] shadow-[0px_8px_20px_rgba(5,79,191,0.1)] ring-2 ring-[#054FBF]/20' 
                      : 'bg-white/80 hover:bg-white border-[#EDF4F9] hover:border-[#054FBF]/30 shadow-sm'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div 
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                        isSelected 
                          ? 'bg-[#054FBF] text-white shadow-md shadow-[#054FBF]/30' 
                          : 'bg-[#EDF4F9] text-[#123049] group-hover:bg-[#054FBF]/10 group-hover:text-[#054FBF]'
                      }`}
                    >
                      {getGoalIcon(option.iconName)}
                    </div>
                    <div>
                      <h4 className={`text-sm md:text-base font-bold font-poppins ${
                        isSelected ? 'text-[#054FBF]' : 'text-[#123049]'
                      }`}>
                        {option.label}
                      </h4>
                      <p className="text-xs text-[#7686AB] mt-0.5 line-clamp-1 font-poppins">
                        {option.targetPersona}
                      </p>
                    </div>
                  </div>
                  <div className={`w-6 h-6 flex items-center justify-center transition-opacity shrink-0 ${
                    isSelected ? 'opacity-100 text-[#054FBF]' : 'opacity-0 text-slate-300 group-hover:opacity-60'
                  }`}>
                    <Icon icon={ArrowRight01Icon} size={18} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Reactive Recommendation Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[24px] p-8 md:p-10 border border-[#EDF4F9] shadow-[0px_10px_30px_rgba(18,48,73,0.06)] relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#EDF4F9] mb-6">
                <span className="text-xs font-bold text-[#7686AB] tracking-wider uppercase font-poppins">
                  REKOMENDASI JALUR EKOSISTEM
                </span>
                <span className="text-xs font-bold text-[#054FBF] bg-[#EDF4F9] px-4 py-1.5 rounded-full border border-[#D5E9FA] uppercase font-poppins">
                  {recommendation.badge}
                </span>
              </div>

              <div className="mb-4">
                <span className="text-xs font-semibold text-[#007FE7] block mb-1 font-poppins uppercase tracking-wider">
                  Pilar Dituju: {recommendation.pillarName}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#123049] tracking-tight font-poppins">
                  {recommendation.headline}
                </h3>
              </div>

              <p className="text-[#7686AB] text-sm md:text-base leading-relaxed mb-6 font-poppins">
                {recommendation.whyRelevant}
              </p>

              {/* Roles Available */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-[#123049] uppercase tracking-wider mb-3 flex items-center gap-2 font-poppins">
                  <Icon icon={CheckmarkCircle02Icon} size={16} className="text-[#054FBF]" />
                  <span>Divisi / Jalur yang Terbuka:</span>
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {recommendation.availableRoles.map((role) => (
                    <span 
                      key={role} 
                      className="text-xs font-semibold text-[#123049] bg-[#F7FCFF] px-3.5 py-1.5 rounded-lg border border-[#EDF4F9] font-poppins"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* First Step */}
              <div className="bg-[#F0F7FD] p-5 rounded-2xl border border-[#D5E9FA] mb-8">
                <span className="text-xs font-bold text-[#054FBF] uppercase tracking-wider block mb-1 font-poppins">
                  LANGKAH PERTAMA
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#123049] leading-relaxed font-poppins">
                  {recommendation.firstStep}
                </p>
              </div>

              {/* Action Trigger */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#EDF4F9]">
                <Button 
                  variant="primary" 
                  onClick={handleAction}
                  className="w-full sm:w-auto rounded-full bg-[#054FBF] hover:bg-[#002855] text-white text-xs font-bold px-7 py-3.5 uppercase tracking-wider shadow-md shadow-[#054FBF]/20"
                >
                  {recommendation.ctaText}
                </Button>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('ecosystem');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-xs font-semibold text-[#7686AB] hover:text-[#054FBF] flex items-center gap-1.5 transition-colors cursor-pointer font-poppins"
                >
                  <span>Eksplorasi Seluruh 5 Ruang</span>
                  <Icon icon={ArrowRight01Icon} size={14} />
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
