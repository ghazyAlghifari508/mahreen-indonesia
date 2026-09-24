import React from 'react';
import { 
  Building2, 
  GraduationCap, 
  Scale, 
  Check, 
  Target,
  FileCheck2
} from 'lucide-react';
import { LEGAL_RECORDS, CAMPUS_PARTNERS, VISION_MISSION } from '../../data/mahreenData';

export const TrustAndPartnersSection: React.FC = () => {
  return (
    <section 
      id="legalitas" 
      className="bg-white py-20 px-6 md:px-12 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[12px] font-bold text-[#054FBF] uppercase tracking-[0.15em] block mb-2 font-poppins">
            KEABSAHAN RESMI &amp; AKUNTABILITAS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-midtrans-slate tracking-tight mb-4">
            Legalitas Terdaftar &amp; Mitra Institusi
          </h2>
          <p className="text-midtrans-muted text-base md:text-lg leading-relaxed">
            Mahreen Indonesia adalah badan hukum resmi yang berkomitmen pada tata kelola profesional, 
            transparan, dan terverifikasi di bawah Kementerian Hukum RI.
          </p>
        </div>

        {/* Vision & Mission Card (Sourced from Official Instagram Slide) */}
        <div className="bg-[#002855] text-white rounded-[8px] p-8 md:p-12 mb-16 shadow-[0px_10px_30px_rgba(0,40,85,0.15)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#007FE7]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left: Vision */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/15 pb-8 lg:pb-0 lg:pr-10">
              <div className="flex items-center space-x-2 text-[#007FE7] mb-3">
                <Target className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">VISI MAHREEN INDONESIA</span>
              </div>
              <h3 className="text-2xl font-bold text-white leading-snug mb-4">
                "{VISION_MISSION.vision}"
              </h3>
              <p className="text-xs text-[#F7FCFF]/70 leading-relaxed">
                Membangun ekosistem berkelanjutan yang mempertemukan ide kreatif, inovasi digital, 
                dan kepedulian sosial demi kebermanfaatan nyata bagi bangsa.
              </p>
            </div>

            {/* Right: 4 Missions */}
            <div className="lg:col-span-7 space-y-3.5">
              <span className="text-xs font-bold text-[#007FE7] uppercase tracking-[0.2em] block mb-2">
                EMPAT MISI STRATEGIS
              </span>
              {VISION_MISSION.missions.map((misi: string, idx: number) => (
                <div key={idx} className="flex items-start space-x-3 bg-white/5 p-3.5 rounded-[4px] border border-white/10">
                  <span className="text-xs font-bold font-mono text-[#007FE7] bg-white/10 px-2 py-0.5 rounded shrink-0">
                    0{idx + 1}
                  </span>
                  <p className="text-xs md:text-sm text-white/90 leading-relaxed">
                    {misi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Records Ledger */}
        <div className="mb-16">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-6">
            <h3 className="text-lg font-bold text-midtrans-slate uppercase tracking-wider flex items-center">
              <FileCheck2 className="w-5 h-5 mr-2 text-midtrans-blue" />
              Catatan Resmi Kelembagaan
            </h3>
            <div className="flex items-center space-x-3 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-[2px] border border-emerald-200">
              <span>Trusted ✓</span>
              <span>Verified ✓</span>
              <span>Growing ✓</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEGAL_RECORDS.map((record, idx) => (
              <div 
                key={idx}
                className="bg-midtrans-ice/70 rounded-[6px] p-6 border border-midtrans-azure/20 hover:border-midtrans-blue hover:shadow-midtrans-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-[2px] bg-white border border-midtrans-azure/20 flex items-center justify-center text-midtrans-blue mb-4">
                    {idx === 0 ? <Scale className="w-5 h-5" /> :
                     idx === 1 ? <Building2 className="w-5 h-5" /> :
                     idx === 2 ? <FileCheck2 className="w-5 h-5" /> :
                     <Check className="w-5 h-5" />}
                  </div>
                  <span className="text-[11px] font-bold text-midtrans-muted uppercase tracking-wider block mb-1">
                    {record.label}
                  </span>
                  <h4 className="text-sm font-bold text-midtrans-slate mb-2">
                    {record.title}
                  </h4>
                  <div className="font-mono text-xs font-bold text-midtrans-blue bg-white p-2.5 rounded-[2px] border border-midtrans-azure/10 mb-3 break-all select-all">
                    {record.identifier}
                  </div>
                </div>
                <p className="text-xs text-midtrans-muted leading-relaxed">
                  {record.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Midtrans-style Real Partner Logos Grid */}
        <div className="bg-midtrans-mist rounded-[8px] p-6 md:p-10 border border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-8 pb-4 border-b border-slate-200/80">
            <div>
              <h3 className="text-xl font-bold text-midtrans-slate flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-midtrans-blue" />
                Jaringan Mitra Kampus &amp; Kolaborator Resmi
              </h3>
              <p className="text-xs text-midtrans-muted mt-0.5">
                Logo resmi institusi perguruan tinggi dan yayasan mitra asal peserta magang Mahreen Indonesia.
              </p>
            </div>
            <span className="text-xs font-bold text-midtrans-blue bg-white px-3 py-1 rounded-[2px] border border-slate-200">
              50+ Mitra Terhubung
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {CAMPUS_PARTNERS.map((campus, idx) => (
              <div 
                key={idx}
                className="bg-white p-3 rounded-[4px] border border-slate-200/80 hover:border-midtrans-blue hover:shadow-midtrans-card flex flex-col justify-center items-center h-24 transition-all duration-150 group"
                title={`${campus.name} (${campus.category})`}
              >
                {campus.logoUrl ? (
                  <img 
                    src={campus.logoUrl} 
                    alt={campus.name}
                    className="max-h-12 max-w-[85%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-xs font-bold text-midtrans-slate text-center line-clamp-2">
                    {campus.abbreviation || campus.name}
                  </span>
                )}
                <span className="text-[10px] font-semibold text-midtrans-muted mt-2 truncate max-w-full group-hover:text-midtrans-blue transition-colors">
                  {campus.abbreviation || campus.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndPartnersSection;
