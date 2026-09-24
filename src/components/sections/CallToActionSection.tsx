import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

interface CallToActionSectionProps {
  onOpenBatch2Modal: () => void;
}

export const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  onOpenBatch2Modal,
}) => {
  return (
    <section className="bg-midtrans-navy text-white py-20 px-6 md:px-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-midtrans-blue/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Badge variant="azure" className="mb-4 inline-flex items-center">
          <Sparkles className="w-3.5 h-3.5 mr-1.5" />
          KAMPANYE RESMI: #FromLearningToRealImpact
        </Badge>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-6">
          Satu Ide. Satu Karya. <br className="hidden md:inline" />
          Satu Dampak Nyata untuk Indonesia.
        </h2>

        <p className="text-midtrans-ice/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Saatnya bergerak dari sekadar pembelajar teori menjadi kreator yang menghasilkan solusi. 
          Pilih ruangmu, bangun portofoliomu, dan berkaryalah bersama ekosistem Mahreen Indonesia.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="primary" 
            size="lg"
            onClick={onOpenBatch2Modal}
            className="w-full sm:w-auto"
          >
            <span>Daftar Internship Batch 2</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <Button 
            variant="outline-light" 
            size="lg"
            onClick={() => {
              const el = document.getElementById('pathfinder');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto"
          >
            <span>Temukan Ruangmu Dulu</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
