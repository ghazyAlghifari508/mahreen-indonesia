import React from 'react';
import { Target, ArrowRight } from 'lucide-react';
import { PILLARS_DATA, VISION_MISSION } from '../../data/mahreenData';

interface WhoWeAreSectionProps {
  onSelectPillar: (pillarId: string) => void;
}

export const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({
  onSelectPillar,
}) => {
  // 4 Core Units from the Instagram slide
  const coreUnits = PILLARS_DATA.filter((p) => p.id !== 'internship');

  return (
    <section 
      id="tentang" 
      className="bg-white py-24 px-6 md:px-12 relative overflow-hidden border-b border-[#EDF4F9]"
    >
      {/* Subtle background ambient glow */}
      <div 
        className="pointer-events-none absolute top-10 right-0 w-[450px] h-[450px] bg-[#007FE7]/5 rounded-full blur-3xl"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[12px] font-bold text-[#054FBF] uppercase tracking-[0.2em] block mb-2 font-poppins">
            IDENTITAS &amp; FONDASI KAMI
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#123049] tracking-tight font-poppins mb-4">
            WHO WE ARE
          </h2>
          <p className="text-lg md:text-xl font-semibold text-[#007FE7] mb-4 font-poppins">
            Creative • Digital • Social Company
          </p>
          <p className="text-[#7686AB] text-base md:text-lg leading-relaxed font-poppins">
            Mahreen Indonesia hadir sebagai perusahaan kreatif, digital, bisnis, dan sosial yang dibangun 
            melalui inovasi, kreativitas, serta semangat untuk menghadirkan karya dan kontribusi yang 
            berdampak bagi masyarakat Indonesia.
          </p>
        </div>

        {/* 4 Core Units Grid (Directly from Instagram Slide 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {coreUnits.map((unit) => (
            <div
              key={unit.id}
              onClick={() => {
                const el = document.getElementById('ecosystem');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                onSelectPillar(unit.id);
              }}
              className="bg-[#F7FCFF] hover:bg-white rounded-[8px] p-6 border border-[#EDF4F9] hover:border-[#054FBF] shadow-xs hover:shadow-[0px_10px_25px_rgba(5,79,191,0.08)] hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Official Pillar Logo */}
                <div className="w-14 h-14 rounded-[4px] bg-white p-2 border border-[#EDF4F9] flex items-center justify-center mb-5 group-hover:border-[#054FBF]/30 transition-colors shadow-2xs">
                  {unit.logoUrl ? (
                    <img 
                      src={unit.logoUrl} 
                      alt={`Logo ${unit.name}`} 
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="font-bold text-[#054FBF] text-lg">M</span>
                  )}
                </div>

                <span className="text-[11px] font-bold text-[#007FE7] uppercase tracking-wider block mb-1">
                  {unit.category}
                </span>
                <h3 className="text-lg font-bold text-[#123049] group-hover:text-[#054FBF] transition-colors mb-2 font-poppins">
                  {unit.name}
                </h3>
                <p className="text-xs text-[#7686AB] leading-relaxed line-clamp-3 mb-4 font-poppins">
                  {unit.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#054FBF]">
                <span>Eksplorasi Solusi</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Vision & Mission (Directly from Instagram Slide 1) */}
        <div className="bg-[#002855] text-white rounded-[12px] p-8 md:p-12 shadow-[0px_15px_35px_rgba(0,40,85,0.2)] relative overflow-hidden">
          {/* Subtle curved background overlay */}
          <div 
            className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 bg-[#007FE7]/15 rounded-full blur-3xl"
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            {/* Vision Column */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/15 pb-8 lg:pb-0 lg:pr-10">
              <div className="flex items-center space-x-2 text-[#007FE7] mb-3">
                <Target className="w-5 h-5 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">VISI MAHREEN INDONESIA</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-4 font-poppins">
                "{VISION_MISSION.vision}"
              </h3>
              <p className="text-xs text-[#F7FCFF]/70 leading-relaxed font-poppins">
                Didirikan berangkat dari proses riset dan observasi sejak 2024, Mahreen bertransformasi menjadi 
                entitas berbadan hukum resmi pada 2026 untuk menghadirkan kebermanfaatan jangka panjang.
              </p>
            </div>

            {/* Mission Column */}
            <div className="lg:col-span-7 space-y-3.5">
              <span className="text-xs font-bold text-[#007FE7] uppercase tracking-[0.2em] block mb-3 font-poppins">
                EMPAT MISI STRATEGIS
              </span>
              {VISION_MISSION.missions.map((misi, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start space-x-3.5 bg-white/5 hover:bg-white/10 p-3.5 rounded-[4px] border border-white/10 transition-colors"
                >
                  <span className="text-xs font-bold font-mono text-[#007FE7] bg-white/10 px-2 py-0.5 rounded-[2px] shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <p className="text-xs md:text-sm text-white/95 leading-relaxed font-poppins">
                    {misi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
