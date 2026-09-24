import React from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Building2, 
  GraduationCap, 
  Scale 
} from 'lucide-react';
import { LEGAL_RECORDS, CAMPUS_PARTNERS } from '../../data/mahreenData';
import Badge from '../ui/Badge';

export const TrustAndPartnersSection: React.FC = () => {
  return (
    <section 
      id="legalitas" 
      className="bg-white py-20 px-6 md:px-12 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="cobalt" className="mb-3">
            <ShieldCheck className="w-3.5 h-3.5 mr-1 inline" />
            KEABSAHAN RESMI & AKUNTABILITAS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-midtrans-slate tracking-tight mb-4">
            Legalitas Terdaftar & Mitra Institusi
          </h2>
          <p className="text-midtrans-muted text-base md:text-lg leading-relaxed">
            Mahreen Indonesia adalah brand resmi berbadan hukum dan bertanggung jawab secara kelembagaan. 
            Berikut catatan resmi yang dapat dipertanggungjawabkan.
          </p>
        </div>

        {/* Legal Records Ledger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {LEGAL_RECORDS.map((record, idx) => (
            <div 
              key={idx}
              className="bg-midtrans-ice/70 rounded-lg p-6 border border-midtrans-azure/20 hover:border-midtrans-blue transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded bg-white border border-midtrans-azure/20 flex items-center justify-center text-midtrans-blue mb-4">
                  {idx === 0 ? <Scale className="w-5 h-5" /> :
                   idx === 1 ? <Building2 className="w-5 h-5" /> :
                   idx === 2 ? <FileText className="w-5 h-5" /> :
                   <ShieldCheck className="w-5 h-5" />}
                </div>
                <span className="text-[11px] font-bold text-midtrans-muted uppercase tracking-wider block mb-1">
                  {record.label}
                </span>
                <h3 className="text-sm font-bold text-midtrans-slate mb-2">
                  {record.title}
                </h3>
                <div className="font-mono text-xs font-bold text-midtrans-blue bg-white p-2 rounded border border-midtrans-azure/10 mb-3 break-all">
                  {record.identifier}
                </div>
              </div>
              <p className="text-xs text-midtrans-muted leading-relaxed">
                {record.description}
              </p>
            </div>
          ))}
        </div>

        {/* Campus Partners Network Grid */}
        <div className="bg-midtrans-mist rounded-lg p-6 md:p-10 border border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-8 pb-4 border-b border-slate-200/80">
            <div>
              <h3 className="text-xl font-bold text-midtrans-slate flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-midtrans-blue" />
                Jaringan Mitra Kampus & Asal Mahasiswa
              </h3>
              <p className="text-xs text-midtrans-muted mt-0.5">
                Talenta dan peserta magang Mahreen terverifikasi berasal dari berbagai perguruan tinggi terkemuka.
              </p>
            </div>
            <Badge variant="azure">50+ Kampus Mitra</Badge>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {CAMPUS_PARTNERS.map((campus, idx) => (
              <div 
                key={idx}
                className="bg-white p-3 rounded border border-slate-200/70 hover:border-midtrans-blue/40 text-center flex flex-col justify-center items-center h-20 transition-colors shadow-2xs"
              >
                <span className="text-xs font-bold text-midtrans-slate line-clamp-2">
                  {campus.abbreviation || campus.name}
                </span>
                <span className="text-[10px] text-midtrans-muted mt-1 truncate max-w-full">
                  {campus.category}
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
