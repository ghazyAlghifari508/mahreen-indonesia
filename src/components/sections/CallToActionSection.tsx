import React from 'react';
import { ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { Icon } from '../ui/Icon';

interface CallToActionSectionProps {
  onOpenBatch2Modal?: () => void;
}

export const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  onOpenBatch2Modal,
}) => {
  return (
    <section className="bg-[#002855] text-white py-16 md:py-20 px-6 md:px-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left Column: Authentic Midtrans .accept-payment Header */}
        <div className="max-w-2xl text-center lg:text-left">
          <span className="text-[11px] font-bold text-[#007FE7] uppercase tracking-[0.2em] block mb-2 font-poppins">
            BERKARYA UNTUK INDONESIA
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-poppins mb-3 tracking-tight">
            Satu Ide. Satu Karya. Satu Dampak.
          </h2>
          <p className="text-sm md:text-base text-[#F7FCFF]/85 font-poppins leading-relaxed">
            Mulai langkah nyatamu sekarang. Pilih ruang berkarya, bangun portofolio profesional, 
            dan hadirkan manfaat nyata bersama ekosistem Mahreen Indonesia.
          </p>
        </div>

        {/* Right Column: Authentic Midtrans .btn-started & .btn-sales Group */}
        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3.5 shrink-0 w-full sm:w-auto">
          <button
            type="button"
            onClick={onOpenBatch2Modal}
            className="btn-started w-full sm:w-auto cursor-pointer"
          >
            <span>Mulai Berkarya di Batch 2</span>
            <Icon icon={ArrowRight01Icon} size={15} className="ml-1.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
