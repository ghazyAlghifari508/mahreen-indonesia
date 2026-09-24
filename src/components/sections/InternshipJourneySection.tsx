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
  Layers
} from 'lucide-react';
import { BATCH2_DETAILS } from '../../data/mahreenData';

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
      className="scroll-mt-[100px] bg-[#FFFFFF] py-24 px-6 md:px-12 relative overflow-hidden border-b border-[#EDF4F9]"
    >
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

        {/* Midtrans-style .ui-tabs Horizontal Tabs Navigation */}
        <div className="mb-12">
          {/* Tab Selector Links */}
          <div className="flex border-b border-[#EDF4F9] mb-8 overflow-x-auto scrollbar-none justify-start md:justify-center">
            {BATCH2_DETAILS.journeyPhases.map((phase, idx) => {
              const isSelected = selectedPhaseIndex === idx;
              return (
                <button
                  key={phase.phase}
                  onClick={() => setSelectedPhaseIndex(idx)}
                  className={`pb-3.5 px-4 sm:px-8 text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-all relative font-poppins whitespace-nowrap cursor-pointer flex items-center space-x-2 ${
                    isSelected ? 'text-[#054FBF]' : 'text-[#7686AB] hover:text-[#123049]'
                  }`}
                >
                  <span className={isSelected ? 'text-[#054FBF]' : 'text-[#7686AB]'}>
                    {PHASE_ICONS[idx]}
                  </span>
                  <span>0{phase.monthNumber}. {phase.phase}</span>
                  {isSelected && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#054FBF]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Deep Phase Inspector Surface (Midtrans Double-Bezel Architecture) */}
          <div className="bg-[#F7FCFF] rounded-[8px] p-6 sm:p-8 md:p-10 border border-[#BBBBBB]/30 relative overflow-hidden transition-all duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Phase Focus & Narrative */}
              <div className="lg:col-span-7">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-xs font-bold text-[#054FBF] uppercase tracking-wider bg-white px-3 py-1 rounded-[2px] border border-[#BBBBBB]/30 font-poppins">
                    Bulan {activePhase.monthNumber} • {activePhase.monthName}
                  </span>
                  <span className="text-xs font-semibold text-[#7686AB] font-poppins">
                    Fokus: {activePhase.title}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#123049] tracking-tight font-poppins mb-3">
                  Tahap {activePhase.phase}: {activePhase.title}
                </h3>

                <p className="text-sm md:text-base text-[#7686AB] leading-relaxed mb-6 font-poppins">
                  {activePhase.focusDescription}
                </p>

                {/* Key Outputs Checklist (Midtrans-style hairline rows) */}
                <div className="mb-6">
                  <span className="text-[11px] font-bold text-[#123049] uppercase tracking-wider block mb-3 font-poppins">
                    Target Capaian &amp; Luaran Kerja:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activePhase.keyOutputs.map((out, oIdx) => (
                      <div key={oIdx} className="flex items-center space-x-2 text-xs text-[#123049] font-medium bg-white p-3 rounded-[2px] border border-slate-200/70 font-poppins">
                        <CheckCircle2 className="w-4 h-4 text-[#054FBF] shrink-0" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Flagship Program Banner */}
                <div className="bg-white p-4 rounded-[4px] border border-[#BBBBBB]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#7686AB] uppercase tracking-wider block font-poppins">
                      Program Unggulan Bulan Ini:
                    </span>
                    <span className="text-sm font-bold text-[#002855] font-poppins">
                      {activePhase.flagshipProgram}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-[#054FBF] bg-[#EDF4F9] px-2.5 py-1 rounded-[2px] uppercase font-poppins">
                    Flagship Agenda
                  </span>
                </div>
              </div>

              {/* Right Column: Weekly System Rhythm Card (Midtrans Dark Container) */}
              <div className="lg:col-span-5 bg-[#002855] text-white p-6 md:p-7 rounded-[6px] border border-white/10 shadow-sm">
                <span className="text-[11px] font-bold text-[#007FE7] uppercase tracking-wider block mb-2 font-poppins">
                  SISTEM OPERASIONAL MINGGUAN (MIOS)
                </span>
                <h4 className="text-lg font-bold text-white font-poppins mb-4">
                  Weekly Operating Rhythm
                </h4>
                <div className="space-y-3 text-xs font-poppins">
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                    <span className="font-bold text-[#007FE7] uppercase">Senin</span>
                    <span className="text-white/90">Weekly Kickoff &amp; Pembagian Task</span>
                  </div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                    <span className="font-bold text-[#007FE7] uppercase">Selasa</span>
                    <span className="text-white/90">Production Day (Fokus Divisi)</span>
                  </div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                    <span className="font-bold text-[#007FE7] uppercase">Rabu</span>
                    <span className="text-white/90">Collaboration Day (Lintas Tim)</span>
                  </div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                    <span className="font-bold text-[#007FE7] uppercase">Kamis</span>
                    <span className="text-white/90">Project &amp; Client Delivery Day</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#007FE7] uppercase">Jumat</span>
                    <span className="text-white/90">Review, Mentoring &amp; Learning Day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars of the Internship System (Grid in Cool Mist) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#EDF4F9] p-6 rounded-[4px] border border-[#BBBBBB]/30">
            <div className="w-9 h-9 rounded-[2px] bg-white text-[#054FBF] flex items-center justify-center mb-4 border border-[#BBBBBB]/20">
              <Laptop className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-[#123049] mb-1 font-poppins">Remote WFH / WFA</h4>
            <p className="text-xs text-[#7686AB] leading-relaxed font-poppins">
              Fleksibel dari kampus atau rumah dengan pengawasan kemajuan transparan di platform MIOS.
            </p>
          </div>

          <div className="bg-[#EDF4F9] p-6 rounded-[4px] border border-[#BBBBBB]/30">
            <div className="w-9 h-9 rounded-[2px] bg-white text-[#054FBF] flex items-center justify-center mb-4 border border-[#BBBBBB]/20">
              <Coins className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-[#123049] mb-1 font-poppins">Fee Project 30%</h4>
            <p className="text-xs text-[#7686AB] leading-relaxed font-poppins">
              Skema profit sharing komersial 30% bersih untuk tim pelaksana proyek klien yang berhasil.
            </p>
          </div>

          <div className="bg-[#EDF4F9] p-6 rounded-[4px] border border-[#BBBBBB]/30">
            <div className="w-9 h-9 rounded-[2px] bg-white text-[#054FBF] flex items-center justify-center mb-4 border border-[#BBBBBB]/20">
              <Calendar className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-[#123049] mb-1 font-poppins">4 Bulan Terstruktur</h4>
            <p className="text-xs text-[#7686AB] leading-relaxed font-poppins">
              Periode resmi 1 Oktober 2026 – 31 Januari 2027 dengan evaluasi berkala dan wisuda akhir.
            </p>
          </div>

          <div className="bg-[#EDF4F9] p-6 rounded-[4px] border border-[#BBBBBB]/30">
            <div className="w-9 h-9 rounded-[2px] bg-white text-[#054FBF] flex items-center justify-center mb-4 border border-[#BBBBBB]/20">
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
          <button 
            onClick={onOpenBatch2Modal}
            className="btn-started inline-flex items-center space-x-2"
          >
            <span>Pelajari Pedoman Lengkap &amp; Syarat Batch 2</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InternshipJourneySection;
