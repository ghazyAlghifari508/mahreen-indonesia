import React from 'react';
import { Check } from 'lucide-react';
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
      className="scroll-mt-[100px] bg-[#FFFFFF] py-20 px-6 md:px-12 border-b border-[#EDF4F9]"
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
                  <div className="h-14 w-14 shrink-0 flex items-center justify-center">
                    {unit.logoUrl ? (
                      <img 
                        src={`${unit.logoUrl}?v=2`} 
                        alt={unit.name} 
                        className="max-h-14 w-auto object-contain group-hover:scale-105 transition-transform" 
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

        {/* Vision & Mission (Midtrans-enterprises.html Editorial Split on Cool Mist #EDF4F9) */}
        <div className="bg-[#EDF4F9] rounded-[20px] p-8 md:p-12 border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Visi & 4 Misi Strategis */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#054FBF] block mb-2 font-poppins">
                VISI &amp; MISI STRATEGIS
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#123049] leading-snug font-poppins mb-3">
                Inovasi Nyata untuk Generasi Muda &amp; Kemajuan Indonesia
              </h3>
              <p className="text-[15px] font-semibold text-[#007FE7] mb-3 font-poppins italic">
                "{VISION_MISSION.vision}"
              </p>
              <p className="text-xs md:text-sm text-[#7686AB] leading-relaxed mb-6 font-poppins">
                Berangkat dari riset dan observasi sejak 2024, Mahreen Indonesia diresmikan sebagai entitas berbadan hukum pada 2026. Kami meyakini bahwa kemajuan dibangun melalui ilmu yang diterapkan, nilai yang dijaga, dan manfaat yang ditinggalkan.
              </p>

              {/* 4 Missions with Midtrans-style checklist */}
              <div className="space-y-2.5">
                {VISION_MISSION.missions.map((misi, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start space-x-3 bg-white p-3 rounded-[4px] border border-slate-200/70"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#EDF4F9] text-[#054FBF] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <p className="text-xs md:text-sm text-[#123049] font-medium leading-relaxed font-poppins">
                      {misi}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Authentic Editorial Photo Mockup */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="w-full bg-white rounded-[12px] overflow-hidden border border-slate-200/80 shadow-sm">
                <div className="h-7 bg-slate-100 border-b border-slate-200 px-3 flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <span className="text-[10px] text-slate-500 font-mono ml-2">mahreenindonesia.com/tentang</span>
                </div>
                <img
                  src="/assets/team-meeting.webp"
                  alt="Sesi Kolaborasi Visi & Strategi Mahreen Indonesia"
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <div className="p-4 bg-white border-t border-slate-100">
                  <span className="text-[11px] font-bold text-[#054FBF] uppercase tracking-wider block font-poppins">
                    DOKUMENTASI KARYA
                  </span>
                  <p className="text-xs text-[#7686AB] font-poppins mt-0.5">
                    Proses pengembangan ide, riset, dan strategi berkelanjutan tim Mahreen Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
