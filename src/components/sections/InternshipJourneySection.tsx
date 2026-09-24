import React from 'react';
import { 
  Calendar, 
  Clock, 
  Laptop, 
  Coins, 
  ArrowRight, 
  Compass,
  Hammer,
  Send,
  Trophy
} from 'lucide-react';
import { BATCH2_DETAILS } from '../../data/mahreenData';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

interface InternshipJourneySectionProps {
  onOpenBatch2Modal: () => void;
}

const PHASE_ICONS: Record<string, React.ReactNode> = {
  ADAPT: <Compass className="w-5 h-5" />,
  CREATE: <Hammer className="w-5 h-5" />,
  DELIVER: <Send className="w-5 h-5" />,
  IMPACT: <Trophy className="w-5 h-5" />,
};

export const InternshipJourneySection: React.FC<InternshipJourneySectionProps> = ({
  onOpenBatch2Modal,
}) => {
  return (
    <section 
      id="journey" 
      className="bg-white py-20 px-6 md:px-12 border-b border-midtrans-mist"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[12px] font-bold text-[#007FE7] uppercase tracking-[0.15em] block mb-2 font-poppins">
            PROGRAM INTERNSHIP RESMI BATCH 2
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-midtrans-slate tracking-tight mb-4">
            Perjalanan Magang: Dari Adaptasi Hingga Dampak
          </h2>
          <p className="text-midtrans-muted text-base md:text-lg leading-relaxed">
            Mahreen Indonesia Internship Batch 2 dirancang dengan konsep perjalanan 4 bulan 
            yang terstruktur, terdokumentasi, terukur, dan berkelanjutan.
          </p>
        </div>

        {/* 4-Month Progression Track */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {BATCH2_DETAILS.journeyPhases.map((item) => (
            <div 
              key={item.phase}
              className="bg-midtrans-ice rounded-lg p-6 border border-midtrans-azure/20 hover:border-midtrans-blue hover:shadow-midtrans-card transition-all duration-200 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-midtrans-muted tracking-wider">
                    BULAN {item.monthNumber} ({item.monthName})
                  </span>
                  <div className="w-9 h-9 rounded bg-white border border-midtrans-azure/20 flex items-center justify-center text-midtrans-blue">
                    {PHASE_ICONS[item.phase]}
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="cobalt" className="text-[10px] py-0.5 px-2">
                    {item.phase}
                  </Badge>
                  <span className="text-xs font-semibold text-midtrans-slate">
                    {item.title}
                  </span>
                </div>

                <p className="text-xs text-midtrans-muted leading-relaxed mb-4">
                  {item.focusDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <span className="text-[11px] font-bold text-midtrans-slate uppercase tracking-wider block mb-1">
                  Flagship Event:
                </span>
                <span className="text-xs font-semibold text-midtrans-blue block">
                  {item.flagshipProgram}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Attributes Highlights Grid */}
        <div className="bg-midtrans-mist rounded-lg p-6 md:p-10 border border-slate-200 mb-10">
          <h3 className="text-xl font-bold text-midtrans-slate mb-6 text-center md:text-left">
            Standar Sistem Operasional Mahreen Batch 2
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded border border-slate-200/80">
              <div className="w-8 h-8 rounded bg-midtrans-ice text-midtrans-blue flex items-center justify-center mb-3">
                <Laptop className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-midtrans-slate mb-1">Sistem Kerja Remote</h4>
              <p className="text-xs text-midtrans-muted leading-relaxed">
                Pelaksanaan WFH/WFA fleksibel dengan standar akuntabilitas kerja profesional.
              </p>
            </div>

            <div className="bg-white p-5 rounded border border-slate-200/80">
              <div className="w-8 h-8 rounded bg-midtrans-ice text-midtrans-blue flex items-center justify-center mb-3">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-midtrans-slate mb-1">Weekly Operating System</h4>
              <p className="text-xs text-midtrans-muted leading-relaxed">
                Ritme terarah: Senin Kickoff, Selasa-Rabu Produksi, Kamis Klien, Jumat Review.
              </p>
            </div>

            <div className="bg-white p-5 rounded border border-slate-200/80">
              <div className="w-8 h-8 rounded bg-midtrans-ice text-midtrans-blue flex items-center justify-center mb-3">
                <Coins className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-midtrans-slate mb-1">Profit Sharing 30%</h4>
              <p className="text-xs text-midtrans-muted leading-relaxed">
                Apresiasi fee proyek untuk tim pelaksana atas proyek komersial Mahreen yang berhasil.
              </p>
            </div>

            <div className="bg-white p-5 rounded border border-slate-200/80">
              <div className="w-8 h-8 rounded bg-midtrans-ice text-midtrans-blue flex items-center justify-center mb-3">
                <Calendar className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-midtrans-slate mb-1">5 Divisi Spesialisasi</h4>
              <p className="text-xs text-midtrans-muted leading-relaxed">
                Web Dev, Graphic Design, Video Editor, Sosmed Management, dan BizDev & Partnership.
              </p>
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div className="text-center">
          <Button 
            variant="primary" 
            onClick={onOpenBatch2Modal}
            className="inline-flex items-center space-x-2"
          >
            <span>Pelajari Syarat, Divisi & Daftar Batch 2</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InternshipJourneySection;
