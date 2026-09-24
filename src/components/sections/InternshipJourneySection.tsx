import React, { useState } from 'react';
import { 
  Calendar, 
  Laptop, 
  Coins, 
  ArrowRight, 
  CheckCircle2,
  Compass,
  Hammer,
  Send,
  Trophy,
  Layers,
  ChevronRight
} from 'lucide-react';
import { BATCH2_DETAILS } from '../../data/mahreenData';
import Button from '../ui/Button';

interface InternshipJourneySectionProps {
  onOpenBatch2Modal: () => void;
}

const PHASE_ICONS = [
  <Compass className="w-5 h-5" />,
  <Hammer className="w-5 h-5" />,
  <Send className="w-5 h-5" />,
  <Trophy className="w-5 h-5" />,
];

export const InternshipJourneySection: React.FC<InternshipJourneySectionProps> = ({
  onOpenBatch2Modal,
}) => {
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState(0);
  const activePhase = BATCH2_DETAILS.journeyPhases[selectedPhaseIndex];

  return (
    <section 
      id="solusi-talenta" 
      className="bg-[#FFFFFF] py-24 px-6 md:px-12 relative overflow-hidden border-b border-[#EDF4F9]"
    >
      {/* Midtrans Background Capsule Shape */}
      <div 
        className="pointer-events-none absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#007FE7]/5 blur-3xl"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[12px] font-bold text-[#054FBF] uppercase tracking-[0.2em] block mb-2 font-poppins">
            KURIKULUM &amp; SIKLUS PENGEMBANGAN TALENTA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#123049] tracking-tight font-poppins mb-4">
            Perjalanan Magang: ADAPT ke IMPACT
          </h2>
          <p className="text-[#7686AB] text-base md:text-lg leading-relaxed font-poppins">
            Bukan magang administratif biasa. Mahreen Indonesia Internship Batch 2 menerapkan 
            tahapan perkembangan 4 bulan yang terarah, terdokumentasi, dan berbasis hasil nyata.
          </p>
        </div>

        {/* Interactive Milestone Progression Bar (Anti-Slop Architecture) */}
        <div className="mb-12">
          {/* Step Selector Pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
            {BATCH2_DETAILS.journeyPhases.map((phase, idx) => {
              const isSelected = selectedPhaseIndex === idx;
              return (
                <button
                  key={phase.phase}
                  onClick={() => setSelectedPhaseIndex(idx)}
                  className={`p-4 rounded-[6px] text-left transition-all duration-200 border cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#002855] text-white border-[#002855] shadow-[0_8px_20px_rgba(0,40,85,0.25)]'
                      : 'bg-[#F7FCFF] hover:bg-white text-[#123049] border-[#EDF4F9] hover:border-[#054FBF]/40'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div 
                      className={`w-9 h-9 rounded-[4px] flex items-center justify-center shrink-0 transition-colors ${
                        isSelected 
                          ? 'bg-[#054FBF] text-white' 
                          : 'bg-white text-[#054FBF] border border-[#EDF4F9]'
                      }`}
                    >
                      {PHASE_ICONS[idx]}
                    </div>
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                        isSelected ? 'text-[#007FE7]' : 'text-[#7686AB]'
                      }`}>
                        Bulan 0{phase.monthNumber}
                      </span>
                      <h4 className="text-sm font-bold font-poppins">
                        {phase.phase}
                      </h4>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-[#007FE7] translate-x-0.5' : 'text-slate-400 opacity-50 group-hover:opacity-100'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Deep Phase Inspector Surface (Double-Bezel Architecture) */}
          <div className="bg-[#F7FCFF] rounded-[8px] p-6 sm:p-8 md:p-10 border border-[#EDF4F9] shadow-[0px_10px_30px_rgba(45,50,55,0.06)] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Phase Focus & Narrative */}
              <div className="lg:col-span-7">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-xs font-bold text-[#054FBF] uppercase tracking-wider bg-white px-3 py-1 rounded-[2px] border border-[#054FBF]/20">
                    Bulan {activePhase.monthNumber} • {activePhase.monthName} 2026
                  </span>
                  <span className="text-xs font-semibold text-[#7686AB]">
                    Fokus: {activePhase.title}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#123049] tracking-tight font-poppins mb-4">
                  Tahap {activePhase.phase}: {activePhase.title}
                </h3>

                <p className="text-sm md:text-base text-[#7686AB] leading-relaxed mb-6 font-poppins">
                  {activePhase.focusDescription}
                </p>

                {/* Key Outputs Checklist */}
                <div className="mb-6">
                  <h5 className="text-xs font-bold text-[#123049] uppercase tracking-wider mb-3">
                    Target Capaian &amp; Luaran:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activePhase.keyOutputs.map((out, oIdx) => (
                      <div key={oIdx} className="flex items-center space-x-2 text-xs text-[#123049] font-medium bg-white p-2.5 rounded-[4px] border border-[#EDF4F9]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Flagship Program Banner */}
                <div className="bg-white p-4 rounded-[4px] border-l-4 border-l-[#054FBF] border border-[#EDF4F9] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#7686AB] uppercase tracking-wider block">
                      Program Unggulan Bulan Ini:
                    </span>
                    <span className="text-sm font-bold text-[#002855] font-poppins">
                      {activePhase.flagshipProgram}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#054FBF] bg-[#EDF4F9] px-2.5 py-1 rounded-[2px]">
                    Wajib Diikuti
                  </span>
                </div>
              </div>

              {/* Right Column: Weekly System Rhythm Card */}
              <div className="lg:col-span-5 bg-[#002855] text-white p-6 rounded-[6px] shadow-sm border border-white/10">
                <span className="text-[11px] font-bold text-[#007FE7] uppercase tracking-wider block mb-2 font-poppins">
                  SISTEM OPERASIONAL MINGGUAN (MIOS)
                </span>
                <h4 className="text-lg font-bold text-white font-poppins mb-4">
                  Weekly Operating Rhythm
                </h4>
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="font-bold text-[#007FE7]">Senin</span>
                    <span className="text-white/80">Weekly Kickoff &amp; Pembagian Task</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="font-bold text-[#007FE7]">Selasa</span>
                    <span className="text-white/80">Production Day (Fokus Pengerjaan Divisi)</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="font-bold text-[#007FE7]">Rabu</span>
                    <span className="text-white/80">Collaboration Day (Lintas Divisi)</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="font-bold text-[#007FE7]">Kamis</span>
                    <span className="text-white/80">Project &amp; Client Delivery Day</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#007FE7]">Jumat</span>
                    <span className="text-white/80">Review, Mentoring &amp; Learning Day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars of the Internship System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-[6px] border border-[#EDF4F9] hover:border-[#054FBF]/30 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-[4px] bg-[#F7FCFF] text-[#054FBF] flex items-center justify-center mb-4 border border-[#EDF4F9]">
              <Laptop className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-[#123049] mb-1 font-poppins">Remote WFH / WFA</h4>
            <p className="text-xs text-[#7686AB] leading-relaxed font-poppins">
              Fleksibel dari kampus atau rumah dengan pengawasan kemajuan transparan di platform MIOS.
            </p>
          </div>

          <div className="bg-white p-6 rounded-[6px] border border-[#EDF4F9] hover:border-[#054FBF]/30 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-[4px] bg-[#F7FCFF] text-[#054FBF] flex items-center justify-center mb-4 border border-[#EDF4F9]">
              <Coins className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-[#123049] mb-1 font-poppins">Fee Project 30%</h4>
            <p className="text-xs text-[#7686AB] leading-relaxed font-poppins">
              Skema profit sharing komersial 30% bersih untuk tim pelaksana proyek klien yang berhasil.
            </p>
          </div>

          <div className="bg-white p-6 rounded-[6px] border border-[#EDF4F9] hover:border-[#054FBF]/30 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-[4px] bg-[#F7FCFF] text-[#054FBF] flex items-center justify-center mb-4 border border-[#EDF4F9]">
              <Calendar className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-[#123049] mb-1 font-poppins">4 Bulan Terukur</h4>
            <p className="text-xs text-[#7686AB] leading-relaxed font-poppins">
              Periode resmi 1 Oktober 2026 – 31 Januari 2027 dengan evaluasi berkala dan wisuda akhir.
            </p>
          </div>

          <div className="bg-white p-6 rounded-[6px] border border-[#EDF4F9] hover:border-[#054FBF]/30 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-[4px] bg-[#F7FCFF] text-[#054FBF] flex items-center justify-center mb-4 border border-[#EDF4F9]">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-[#123049] mb-1 font-poppins">5 Divisi Pilihan</h4>
            <p className="text-xs text-[#7686AB] leading-relaxed font-poppins">
              Website Dev, Graphic Design, Video Editor, Social Media, serta Business Development.
            </p>
          </div>
        </div>

        {/* CTA Trigger */}
        <div className="text-center">
          <Button 
            variant="primary" 
            onClick={onOpenBatch2Modal}
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Pelajari Pedoman Lengkap &amp; Syarat Batch 2
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InternshipJourneySection;
