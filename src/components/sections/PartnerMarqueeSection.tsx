import React from 'react';
import { CAMPUS_PARTNERS } from '../../data/mahreenData';

export const PartnerMarqueeSection: React.FC = () => {
  const partnersWithLogos = CAMPUS_PARTNERS.filter((p) => Boolean(p.logoUrl));
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...partnersWithLogos, ...partnersWithLogos];

  return (
    <div className="relative w-full py-4 overflow-hidden bg-transparent">
      {/* Real Infinite Smooth Scrolling Marquee */}
      <div className="relative w-full overflow-hidden flex items-center py-2">
        {/* Soft edge gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F7FCFF] via-[#F7FCFF]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F7FCFF] via-[#F7FCFF]/90 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-smooth flex items-center gap-12 sm:gap-16 md:gap-20">
          {marqueeItems.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="flex items-center justify-center shrink-0 cursor-default group"
              title={`${partner.name} (${partner.category})`}
            >
              {/* Pure Transparent Logo, Large & Clearly Visible */}
              <img
                src={`${partner.logoUrl}?v=2`}
                alt={`Logo ${partner.name}`}
                className="h-10 sm:h-12 md:h-14 w-auto max-w-[160px] object-contain opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
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
