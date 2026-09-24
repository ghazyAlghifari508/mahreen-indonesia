import React from 'react';
import { 
  Building2, 
  Scale, 
  Check, 
  FileCheck2,
  ShieldCheck,
  Award
} from 'lucide-react';
import { LEGAL_RECORDS } from '../../data/mahreenData';

export const TrustAndPartnersSection: React.FC = () => {
  return (
    <section 
      id="legalitas" 
      className="bg-[#F7FCFF] py-24 px-6 md:px-12 relative overflow-hidden border-b border-[#EDF4F9]"
    >
      {/* Background ambient decorative shapes */}
      <div 
        className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#054FBF]/5 blur-3xl"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[12px] font-bold text-[#054FBF] uppercase tracking-[0.2em] block mb-2 font-poppins">
            AKUNTABILITAS &amp; STATUS RESMI
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#123049] tracking-tight font-poppins mb-4">
            OFFICIAL LEGAL ENTITY
          </h2>
          <p className="text-[#7686AB] text-base md:text-lg leading-relaxed font-poppins">
            Bukan sekadar entitas informal. Mahreen Indonesia adalah badan hukum terdaftar resmi 
            yang beroperasi di bawah payung PT Mahreen Indonesia Group dan Keputusan Menteri Hukum RI.
          </p>
        </div>

        {/* Certificate Ledger Showcase Card */}
        <div className="bg-white rounded-[8px] p-8 md:p-12 shadow-[0px_10px_35px_rgba(0,40,85,0.06)] border border-[#EDF4F9] mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#EDF4F9] mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-[4px] bg-[#EDF4F9] text-[#054FBF] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#123049] font-poppins">
                  Keputusan Menteri Hukum Republik Indonesia
                </h3>
                <span className="text-xs font-semibold text-[#7686AB] font-poppins">
                  Pengesahan Pendirian Badan Hukum PT Mahreen Indonesia Group
                </span>
              </div>
            </div>

            {/* Official Instagram Status Badges (Trusted ✓ Verified ✓ Growing ✓) */}
            <div className="flex items-center space-x-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-[2px] border border-emerald-200">
              <span>Trusted ✓</span>
              <span>•</span>
              <span>Verified ✓</span>
              <span>•</span>
              <span>Growing ✓</span>
            </div>
          </div>

          {/* 4 Official Legal Numbers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEGAL_RECORDS.map((record, idx) => (
              <div 
                key={idx}
                className="bg-[#F7FCFF] rounded-[6px] p-6 border border-[#EDF4F9] hover:border-[#054FBF] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-[4px] bg-white border border-[#EDF4F9] flex items-center justify-center text-[#054FBF] mb-4 group-hover:scale-105 transition-transform shadow-2xs">
                    {idx === 0 ? <Scale className="w-5 h-5" /> :
                     idx === 1 ? <Building2 className="w-5 h-5" /> :
                     idx === 2 ? <FileCheck2 className="w-5 h-5" /> :
                     <Award className="w-5 h-5" />}
                  </div>

                  <span className="text-[10px] font-bold text-[#7686AB] uppercase tracking-wider block mb-1">
                    {record.label}
                  </span>
                  <h4 className="text-sm font-bold text-[#123049] mb-2 font-poppins">
                    {record.title}
                  </h4>
                  <div className="font-mono text-xs font-bold text-[#054FBF] bg-white p-2.5 rounded-[2px] border border-[#007FE7]/20 mb-3 break-all select-all shadow-2xs">
                    {record.identifier}
                  </div>
                </div>

                <p className="text-xs text-[#7686AB] leading-relaxed font-poppins">
                  {record.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Commitment Note */}
        <div className="bg-[#002855] text-white p-6 md:p-8 rounded-[8px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-[4px] bg-white/10 flex items-center justify-center shrink-0 text-[#007FE7]">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-poppins mb-1">
                Jaminan Kemitraan Aman &amp; Akuntabel
              </h4>
              <p className="text-xs text-[#F7FCFF]/80 leading-relaxed font-poppins max-w-2xl">
                Seluruh aktivitas proyek magang, kemitraan bisnis UMKM, dan kegiatan sosial Peduli Mahreen 
                dijalankan dengan transparansi hukum serta perlindungan hak kekayaan intelektual (HAKI) terdaftar.
              </p>
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[11px] font-mono text-[#007FE7] uppercase tracking-wider block">
              STATUS KELEMBAGAAN
            </span>
            <span className="text-sm font-bold text-white font-poppins">
              Resmi &amp; Terverifikasi 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndPartnersSection;
