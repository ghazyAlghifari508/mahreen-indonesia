import React from 'react';
import { CAMPUS_PARTNERS } from '../../data/mahreenData';

export const PartnerMarqueeSection: React.FC = () => {
  const partnersWithLogos = CAMPUS_PARTNERS.filter((p) => Boolean(p.logoUrl));

  return (
    <div className="relative bg-[#FFFFFF] pb-12">
      {/* Midtrans Signature Curved Wave Transition Pattern */}
      <div 
        className="w-full h-16 sm:h-24 md:h-28 bg-[url('/assets/pattern-white.png')] bg-no-repeat bg-[length:100%_100%] -mt-16 sm:-mt-24 md:-mt-28 relative z-20 pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 pt-6 mb-6 flex flex-col sm:flex-row items-center justify-between gap-2 relative z-10">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7686AB] font-poppins">
          MITRA KAMPUS &amp; KOLABORATOR TERVERIFIKASI
        </span>
        <span className="text-[12px] font-semibold text-[#054FBF] font-poppins">
          50+ Perguruan Tinggi &amp; Institusi di Seluruh Indonesia
        </span>
      </div>

      {/* Floating Logo Slider with Soft Edge Fade */}
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-10 items-center overflow-x-auto scrollbar-none px-8 py-3">
          {partnersWithLogos.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-14 min-w-[130px] shrink-0 transition-all duration-200 group cursor-default"
              title={`${partner.name} (${partner.category})`}
            >
              <img
                src={partner.logoUrl}
                alt={`Logo ${partner.name}`}
                className="max-h-11 max-w-[120px] object-contain filter grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerMarqueeSection;
