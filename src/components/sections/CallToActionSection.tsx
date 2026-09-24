import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CallToActionSectionProps {
  onOpenBatch2Modal?: () => void;
}

export const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  onOpenBatch2Modal,
}) => {
  return (
    <section className="bg-[#002855] text-white py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Ambient Capsule Glow */}
      <img 
        src="/assets/capsule1.png" 
        alt="" 
        className="pointer-events-none absolute left-0 bottom-0 opacity-20 select-none hidden lg:block"
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-[12px] font-bold text-[#007FE7] uppercase tracking-[0.2em] block mb-4 font-poppins">
          BERKARYA UNTUK INDONESIA • #FromLearningToRealImpact
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-6 font-poppins">
          Satu Ide. Satu Karya. <br className="hidden sm:inline" />
          Satu Dampak Nyata untuk Indonesia.
        </h2>

        <p className="text-[#F7FCFF]/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-poppins">
          Saatnya bergerak dari sekadar pembelajar teori menjadi kreator yang menghasilkan solusi. 
          Pilih ruangmu, kembangkan potensimu, dan hadirkan kontribusi nyata bersama ekosistem Mahreen Indonesia.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('pathfinder');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-started w-full sm:w-auto shadow-[0_4px_16px_rgba(5,79,191,0.4)]"
          >
            <span>Temukan Ruang Berkaryamu</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>

          <button
            type="button"
            onClick={onOpenBatch2Modal}
            className="btn-sales w-full sm:w-auto"
          >
            <span>Pelajari Jalur Kolaborasi</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
