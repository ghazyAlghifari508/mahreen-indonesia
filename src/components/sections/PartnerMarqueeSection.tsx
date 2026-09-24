import React from 'react';
import { CAMPUS_PARTNERS } from '../../data/mahreenData';

export const PartnerMarqueeSection: React.FC = () => {
  // Take partners with logos
  const partnersWithLogos = CAMPUS_PARTNERS.filter((p) => Boolean(p.logoUrl));

  return (
    <div className="bg-[#FFFFFF] border-b border-[#EDF4F9] py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#7686AB] font-poppins">
          MITRA KAMPUS &amp; KOLABORATOR TERVERIFIKASI
        </span>
        <span className="text-[12px] font-semibold text-[#054FBF]">
          50+ Perguruan Tinggi &amp; Institusi Terhubung
        </span>
      </div>

      {/* Marquee track */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Subtle Edge Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 items-center animate-none overflow-x-auto scrollbar-none px-6 py-2">
          {partnersWithLogos.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E2E8F0] hover:border-[#054FBF] rounded-[4px] px-4 py-2 flex items-center justify-center h-14 min-w-[140px] shrink-0 transition-all duration-150 hover:shadow-xs group cursor-default"
              title={`${partner.name} (${partner.category})`}
            >
              <img
                src={partner.logoUrl}
                alt={`Logo ${partner.name}`}
                className="max-h-9 max-w-[110px] object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200"
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
