import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Briefcase } from 'lucide-react';
import { Button } from '../ui/Button';

export interface HeroSectionProps {
  onExplorePathfinder?: () => void;
  onOpenBatch2Modal?: () => void;
  className?: string;
}

interface EcosystemPreviewTab {
  id: 'internship' | 'business' | 'social';
  label: string;
  badge: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  highlight: string;
}

const PREVIEW_TABS: EcosystemPreviewTab[] = [
  {
    id: 'internship',
    label: 'Talent Incubation',
    badge: 'Batch 2 Resmi Dibuka',
    title: 'Mahreen Indonesia Internship',
    description: 'Program magang 4 bulan berbasis proyek nyata industri dengan bimbingan mentor 1-on-1 dan skema bagi hasil 30%.',
    metrics: [
      { label: 'Mitra Kampus', value: '50+' },
      { label: 'Sistem Kerja', value: 'Remote WFH' },
      { label: 'Spesialisasi', value: '5 Divisi' },
    ],
    highlight: 'Kurikulum ADAPT, CREATE, DELIVER, IMPACT',
  },
  {
    id: 'business',
    label: 'Digital Solutions',
    badge: 'Solusi UMKM & Brand',
    title: 'Tanya Mahreen Solutions',
    description: 'Layanan terintegrasi pembuatan website, branding identitas, digital marketing, hingga konsultasi bisnis modern.',
    metrics: [
      { label: 'Paket Mulai', value: 'Rp499rb' },
      { label: 'Web Dev Mulai', value: 'Rp1.5jt' },
      { label: 'Proyek Selesai', value: '100+' },
    ],
    highlight: 'Transparan, bergaransi, dan terarah',
  },
  {
    id: 'social',
    label: 'Social Movement',
    badge: 'CARE • SHARE • IMPACT',
    title: 'Peduli Mahreen & CSR',
    description: 'Inisiatif filantropi pendidikan, renovasi perpustakaan (Library Hub), dan pelestarian lingkungan 10.000 pohon endemik.',
    metrics: [
      { label: 'Target Siswa', value: '500+' },
      { label: 'Sekolah Binaan', value: '15 Sekolah' },
      { label: 'Reboisasi Jabar', value: '10.000 Pohon' },
    ],
    highlight: 'Dampak sosial terukur dan berkelanjutan',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePathfinder,
  onOpenBatch2Modal,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<'internship' | 'business' | 'social'>('internship');
  const currentTab = PREVIEW_TABS.find((t) => t.id === activeTab) || PREVIEW_TABS[0];

  return (
    <section
      className={`bg-[#002855] text-white relative overflow-hidden pt-16 md:pt-24 pb-24 md:pb-36 px-6 md:px-12 ${className}`.trim()}
      aria-label="Mahreen Indonesia Hero"
    >
      {/* Midtrans-style Background Floating Capsule Glows */}
      <div
        className="pointer-events-none absolute -top-32 -right-20 w-[550px] h-[550px] rounded-full bg-[#007FE7]/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 -left-20 w-[450px] h-[450px] rounded-full bg-[#054FBF]/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (Editorial & Value Proposition) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Campaign Kicker */}
            <div className="mb-4">
              <span className="text-[12px] font-bold text-[#007FE7] uppercase tracking-[0.2em] block font-poppins">
                BERKARYA UNTUK INDONESIA
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-white leading-[1.15] tracking-tight font-poppins mb-6">
              Satu Ide. Satu Karya. <br className="hidden sm:inline" />
              Satu Dampak.
            </h1>

            {/* Subheadline */}
            <p className="text-[16px] md:text-[18px] leading-[28px] text-[#F7FCFF]/90 font-poppins font-normal max-w-2xl mb-10">
              Ekosistem terintegrasi yang menjembatani gagasan generasi muda dengan
              karya profesional nyata. Dari inkubasi talenta kreatif, agensi digital, 
              studio lifestyle, hingga gerakan sosial bermakna bagi Indonesia.
            </p>

            {/* Dual Sharp 2px Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Button
                variant="primary"
                size="md"
                onClick={onExplorePathfinder}
                icon={<ArrowRight size={14} />}
                iconPosition="right"
                className="shadow-[0_4px_14px_rgba(5,79,191,0.4)]"
              >
                Temukan Ruangmu di Mahreen
              </Button>
              <Button
                variant="outline-light"
                size="md"
                onClick={onOpenBatch2Modal}
              >
                Pelajari Internship Batch 2
              </Button>
            </div>

            {/* High-Trust Fact Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/15 text-xs text-[#F7FCFF]/80">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#007FE7]" />
                <span>SK Kemenkumham RI 2026</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-[#007FE7]" />
                <span>50+ Mitra Kampus Terhubung</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="w-4 h-4 text-[#007FE7]" />
                <span>Profit Sharing 30% Terverifikasi</span>
              </div>
            </div>
          </div>

          {/* Right Column (Midtrans-style Dynamic Ecosystem Showcase) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full bg-white rounded-[8px] p-6 sm:p-7 text-[#123049] shadow-[0px_20px_50px_rgba(0,0,0,0.25)] border border-white/40 relative">
              {/* Card Window Top Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#EDF4F9] mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#007FE7]" />
                  <span className="text-[12px] font-bold uppercase tracking-[0.5px] text-[#123049] font-poppins">
                    EKOSISTEM MAHREEN INDONESIA
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#054FBF] bg-[#EDF4F9] px-2.5 py-0.5 rounded-[2px] border border-[#007FE7]/20 uppercase">
                  Live Showcase
                </span>
              </div>

              {/* Segmented Switcher Tabs */}
              <div className="grid grid-cols-3 gap-1 bg-[#F7FCFF] p-1 rounded-[4px] border border-[#EDF4F9] mb-4">
                {PREVIEW_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-1.5 px-2 text-[11px] font-bold rounded-[2px] transition-all cursor-pointer font-poppins text-center truncate ${
                      activeTab === tab.id
                        ? 'bg-[#054FBF] text-white shadow-xs'
                        : 'text-[#7686AB] hover:text-[#123049]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Team Collaboration Authentic Photo */}
              <div className="relative rounded-[4px] overflow-hidden mb-4 border border-[#EDF4F9] bg-[#002855]">
                <img
                  src="/assets/team-meeting.webp"
                  alt="Sesi Kolaborasi Tim Mahreen Indonesia"
                  className="w-full h-32 sm:h-36 object-cover opacity-90"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002855]/90 via-[#002855]/20 to-transparent flex items-end p-3">
                  <div>
                    <span className="text-[10px] font-bold text-[#007FE7] uppercase tracking-wider block">
                      Dokumentasi Otentik Mahreen
                    </span>
                    <span className="text-[12px] font-semibold text-white leading-tight block">
                      Sesi Kolaborasi Ide &amp; Strategi Proyek Nyata
                    </span>
                  </div>
                </div>
              </div>

              {/* Dynamic Content Details */}
              <div className="bg-[#F7FCFF] p-4 rounded-[4px] border border-[#EDF4F9] mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-sm font-bold text-[#123049] font-poppins">
                    {currentTab.title}
                  </h3>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-[2px] border border-emerald-200">
                    {currentTab.badge}
                  </span>
                </div>
                <p className="text-xs text-[#7686AB] leading-relaxed mb-3 font-poppins">
                  {currentTab.description}
                </p>

                {/* 3 Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-2.5 border-t border-slate-200/60">
                  {currentTab.metrics.map((m, idx) => (
                    <div key={idx}>
                      <span className="text-[10px] text-[#7686AB] block truncate font-poppins">
                        {m.label}
                      </span>
                      <span className="text-xs font-bold text-[#054FBF] font-poppins block truncate">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Highlight Footer */}
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-[11px] font-semibold text-[#123049] flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5" />
                  {currentTab.highlight}
                </span>
                <button
                  onClick={activeTab === 'internship' ? onOpenBatch2Modal : onExplorePathfinder}
                  className="text-[11px] font-bold text-[#054FBF] hover:text-[#002855] underline cursor-pointer"
                >
                  Detail →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Midtrans Signature Organic Curved Wave Bottom Divider */}
      <div 
        className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-20 pointer-events-none"
        aria-hidden="true"
      >
        <svg 
          viewBox="0 0 1440 90" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-10 sm:h-14 md:h-20 text-white block preserve-3d"
        >
          <path 
            d="M0,45 C320,90 1120,90 1440,45 L1440,90 L0,90 Z" 
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
};

HeroSection.displayName = 'HeroSection';

export default HeroSection;
