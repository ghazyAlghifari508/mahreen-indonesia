import React from 'react';
import { 
  Building03Icon, 
  JusticeScaleIcon, 
  CheckmarkCircle02Icon, 
  Certificate01Icon,
  Shield02Icon,
} from '@hugeicons/core-free-icons';
import { LEGAL_RECORDS } from '../../data/mahreenData';
import { Icon } from '../ui/Icon';

export const TrustAndPartnersSection: React.FC = () => {
  return (
    <section 
      id="legalitas" 
      className="scroll-mt-[100px] bg-[#F7FCFF] py-24 px-6 md:px-12 relative overflow-hidden border-b border-[#EDF4F9]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Midtrans-style .wrapper-solution 2-Column Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          {/* Left Column: .grid-secure-content (Accountability Narrative) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[12px] font-bold text-[#054FBF] uppercase tracking-[0.2em] block mb-2 font-poppins">
              KEABSAHAN RESMI &amp; TATA KELOLA
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#123049] tracking-tight font-poppins mb-4 leading-tight">
              Keabsahan Hukum &amp; Akuntabilitas Terverifikasi
            </h2>
            <p className="text-[#7686AB] text-sm md:text-base leading-relaxed font-poppins mb-6">
              Mahreen Indonesia beroperasi di bawah legalitas resmi PT Mahreen Indonesia Group 
              dengan pengesahan Kementerian Hukum RI, Nomor Induk Berusaha (NIB), dan perlindungan 
              Hak Kekayaan Intelektual (HAKI) terdaftar.
            </p>

            {/* Official Status Badges (Trusted ✓ Verified ✓ Growing ✓) */}
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-[2px] border border-emerald-200 w-fit mb-6">
              <span>Trusted ✓</span>
              <span>•</span>
              <span>Verified ✓</span>
              <span>•</span>
              <span>Growing ✓</span>
            </div>

            {/* Bulleted Guarantees */}
            <div className="space-y-2.5 text-xs md:text-sm text-[#123049] font-medium font-poppins">
              <div className="flex items-center space-x-2.5">
                <Icon icon={CheckmarkCircle02Icon} size={15} className="text-[#054FBF]" />
                <span>Pengesahan Badan Hukum Menkumham RI</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Icon icon={CheckmarkCircle02Icon} size={15} className="text-[#054FBF]" />
                <span>Perizinan Berusaha Terpadu (NIB Nasional)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Icon icon={CheckmarkCircle02Icon} size={15} className="text-[#054FBF]" />
                <span>Perlindungan Hak Cipta &amp; Merek DJKI</span>
              </div>
            </div>
          </div>

          {/* Right Column: .grid-secure-list (Exactly 3 Cards, Zero Empty Column!) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {LEGAL_RECORDS.map((record, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-[6px] p-5 border border-[#BBBBBB]/30 hover:border-[#054FBF] transition-all flex flex-col justify-between group shadow-2xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-[2px] bg-[#EDF4F9] border border-[#BBBBBB]/20 flex items-center justify-center text-[#054FBF] mb-4 group-hover:scale-105 transition-transform">
                    {idx === 0 ? <Icon icon={JusticeScaleIcon} size={20} /> :
                     idx === 1 ? <Icon icon={Building03Icon} size={20} /> :
                     <Icon icon={Certificate01Icon} size={20} />}
                  </div>

                  <span className="text-[10px] font-bold text-[#7686AB] uppercase tracking-wider block mb-1 font-poppins">
                    {record.label}
                  </span>
                  <h4 className="text-sm font-bold text-[#123049] mb-2 font-poppins leading-snug">
                    {record.title}
                  </h4>
                  <div className="font-mono text-xs font-bold text-[#054FBF] bg-[#F7FCFF] p-2 rounded-[2px] border border-[#BBBBBB]/20 mb-3 break-all select-all">
                    {record.identifier}
                  </div>
                </div>

                <p className="text-[11px] text-[#7686AB] leading-relaxed font-poppins">
                  {record.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Commitment Note on Solid Midnight Navy */}
        <div className="bg-[#002855] text-white p-6 md:p-8 rounded-[6px] flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="w-11 h-11 rounded-[2px] bg-white/10 flex items-center justify-center shrink-0 text-[#007FE7]">
              <Icon icon={Shield02Icon} size={24} color="#007FE7" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-poppins mb-1">
                Jaminan Kemitraan &amp; Profesionalisme Berkelanjutan
              </h4>
              <p className="text-xs text-[#F7FCFF]/80 leading-relaxed font-poppins max-w-2xl">
                Seluruh aktivitas program magang, solusi bisnis UMKM, dan kontribusi sosial Mahreen Indonesia 
                dijalankan dengan standar akuntabilitas korporat yang transparan.
              </p>
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[11px] font-mono text-[#007FE7] uppercase tracking-wider block">
              STATUS KELEMBAGAAN
            </span>
            <span className="text-sm font-bold text-white font-poppins">
              Resmi &amp; Terverifikasi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndPartnersSection;
