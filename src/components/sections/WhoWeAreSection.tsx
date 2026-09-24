import React from 'react';
import { PILLARS_DATA, VISION_MISSION } from '../../data/mahreenData';

interface WhoWeAreSectionProps {
  onSelectPillar?: (pillarId: string) => void;
}

export const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({
  onSelectPillar,
}) => {
  const coreUnits = PILLARS_DATA.filter((p) => p.id !== 'internship');

  const handleUnitClick = (id: string) => {
    const el = document.getElementById('ruang-berkarya');
    if (el) {
      const navHeight = 76;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
    onSelectPillar?.(id);
  };

  return (
    <section 
      id="tentang" 
      className="bg-[#FFFFFF] py-20 px-6 md:px-12 border-b border-[#EDF4F9]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Midtrans-style Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[12px] font-bold text-[#054FBF] uppercase tracking-[0.2em] block mb-2 font-poppins">
            IDENTITAS &amp; FONDASI RESMI
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#123049] tracking-tight font-poppins mb-4">
            WHO WE ARE
          </h2>
          <p className="text-lg font-semibold text-[#007FE7] mb-3 font-poppins">
            Creative • Digital • Social Company
          </p>
          <p className="text-[#7686AB] text-base md:text-lg leading-relaxed font-poppins">
            Mahreen Indonesia hadir sebagai ruang kolaboratif bagi generasi muda untuk bertumbuh, 
            berkarya, dan menciptakan solusi nyata bagi masyarakat Indonesia.
          </p>
        </div>

        {/* Midtrans Exact .grid-payment-home Structure (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coreUnits.map((unit) => (
            <div
              key={unit.id}
              onClick={() => handleUnitClick(unit.id)}
              className="grid-payment-home flex flex-col justify-between cursor-pointer border border-[#EDF4F9] hover:border-[#054FBF] group select-none"
            >
              <div>
                {/* Heading with pure logo & title (Midtrans .heading-payment layout) */}
                <div className="flex items-center space-x-4 mb-5 pb-3 border-b border-[#EDF4F9]">
                  <div className="h-12 w-12 shrink-0 flex items-center justify-center">
                    {unit.logoUrl ? (
                      <img 
                        src={unit.logoUrl} 
                        alt={unit.name} 
                        className="max-h-12 w-auto object-contain group-hover:scale-105 transition-transform" 
                      />
                    ) : (
                      <span className="text-xl font-bold text-[#054FBF]">M</span>
                    )}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#007FE7] uppercase tracking-wider block font-poppins">
                      {unit.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#123049] font-poppins mb-0 group-hover:text-[#054FBF] transition-colors leading-tight">
                      {unit.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-[#7686AB] leading-relaxed mb-6 font-poppins line-clamp-4">
                  {unit.description}
                </p>
              </div>

              <div className="pt-2">
                <span className="btn-link text-xs font-bold text-[#054FBF] font-poppins flex items-center group-hover:underline">
                  Pelajari lebih lanjut &gt;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Vision & Mission (Official Instagram Slide 1 in Clean Midtrans Layout) */}
        <div className="bg-[#002855] text-white rounded-[20px] p-8 md:p-12 shadow-[0px_15px_35px_rgba(0,40,85,0.15)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            {/* Vision */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/15 pb-8 lg:pb-0 lg:pr-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#007FE7] block mb-3 font-poppins">
                VISI KAMI
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-relaxed mb-4 font-poppins">
                "{VISION_MISSION.vision}"
              </h3>
              <p className="text-xs text-[#F7FCFF]/70 leading-relaxed font-poppins">
                Membangun ekosistem berkelanjutan yang mempertemukan ide kreatif, inovasi digital, 
                dan kepedulian sosial demi kebermanfaatan nyata bagi bangsa.
              </p>
            </div>

            {/* 4 Strategic Missions */}
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#007FE7] block mb-3 font-poppins">
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
