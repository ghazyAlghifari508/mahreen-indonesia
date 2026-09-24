import React from 'react';
import { CAMPUS_PARTNERS } from '../../data/mahreenData';

export const PartnerMarqueeSection: React.FC = () => {
  const partnersWithLogos = CAMPUS_PARTNERS.filter((p) => Boolean(p.logoUrl));
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...partnersWithLogos, ...partnersWithLogos];

  return (
    <div className="relative bg-[#FFFFFF] pt-2 pb-14 overflow-hidden border-b border-[#EDF4F9]">
      {/* Midtrans Signature Curved Wave Transition Pattern */}
      <div 
        className="w-full h-16 sm:h-24 md:h-28 bg-[url('/assets/pattern-white.png')] bg-no-repeat bg-[length:100%_100%] -mt-16 sm:-mt-24 md:-mt-28 relative z-20 pointer-events-none"
        aria-hidden="true" 
      />

      {/* Header Label */}
      <div className="max-w-7xl mx-auto px-6 pt-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-2 relative z-10">
        <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#7686AB] font-poppins">
          MITRA KAMPUS &amp; KOLABORATOR TERVERIFIKASI
        </span>
        <span className="text-[13px] font-semibold text-[#054FBF] font-poppins">
          50+ Perguruan Tinggi &amp; Institusi di Seluruh Indonesia
        </span>
      </div>

      {/* Real Infinite Smooth Scrolling Marquee */}
      <div className="relative w-full overflow-hidden flex items-center py-2">
        {/* Soft edge gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-28 md:w-44 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 md:w-44 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-smooth flex items-center gap-14 sm:gap-16 md:gap-20">
          {marqueeItems.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="flex items-center justify-center shrink-0 cursor-default group"
              title={`${partner.name} (${partner.category})`}
            >
              {/* Pure Transparent Logo, Large & Clearly Visible */}
              <img
                src={partner.logoUrl}
                alt={`Logo ${partner.name}`}
                className="h-12 sm:h-14 md:h-16 w-auto max-w-[170px] object-contain opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200"
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
