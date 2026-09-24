import React, { useState } from 'react';
import { Award01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { Icon } from '../components/ui/Icon';
import { WaveDivider } from '../components/ui/WaveDivider';
import { PROJECTS_DATA, ALUMNI_AWARDEES } from '../data/mahreenData';
import type { ProjectItem } from '../types/mahreen';

interface PortfolioPageProps {
  onNavigate?: (route: string) => void;
  onOpenBatch2Modal: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

const CATEGORIES = ['Semua', 'Website', 'Branding', 'Social Impact', 'Sustainability'];

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onOpenBatch2Modal,
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredProjects = activeCategory === 'Semua'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full bg-white text-[#123049] font-poppins selection:bg-[#007FE7] selection:text-white">
      {/* 01. Banner Home (.row.banner-home.usecase-banner) */}
      <div className="row banner-home usecase-banner relative overflow-hidden bg-[#002855] text-white pt-28 sm:pt-32 pb-64 sm:pb-72 lg:pb-80">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          <div className="content-banner max-w-xl text-white">
            <span className="usecase-banner-title text-xs sm:text-sm font-bold text-[#007FE7] uppercase tracking-[0.2em] block mb-3 font-poppins">
              KARYA NYATA &amp; HASIL TERUJI
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 font-poppins">
              Portofolio Proyek Industri &amp; Rekam Jejak Dampak
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8 font-poppins">
              Setiap proyek yang dirancang di ekosistem Mahreen Indonesia dibangun bersama talenta muda 
              untuk menjawab kebutuhan operasional klien bisnis, institusi pendidikan, dan komunitas sosial.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#proyek"
                className="text-white bg-[#054FBF] hover:bg-[#002855] text-xs font-bold px-7 py-3.5 rounded-full transition-all cursor-pointer shadow-lg uppercase tracking-wider"
              >
                Lihat Galeri Proyek
              </a>

              <button
                type="button"
                onClick={onOpenBatch2Modal}
                className="text-white hover:text-[#002855] hover:bg-white text-xs font-semibold px-7 py-3.5 rounded-full border border-white/40 transition-all cursor-pointer"
              >
                Bergabung di Batch 2
              </button>
            </div>
          </div>

          {/* Grid Image Banner: Sharp Showcase of Live Production Deliverable */}
          <div className="grid-img-banner relative lg:w-[480px] xl:w-[520px] w-full">
            <div className="border border-white/20 shadow-2xl bg-[#001D3D] overflow-hidden">
              <img 
                alt="Website Yayasan Fauzan Adzima Sukajadi" 
                src="/assets/magang-portfolio-03-website-BIAjnDJL.webp" 
                className="w-full h-auto max-h-[380px] object-cover"
              />
              <div className="p-3 bg-[#001D3D]/95 border-t border-white/10 flex items-center justify-between text-xs text-white/80">
                <span className="font-semibold text-[#007FE7]">Yayasan Fauzan Adzima</span>
                <span>Web Platform • Production Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Midtrans Wave Transition: Navy to Light Blue (#F7FCFF) */}
      <WaveDivider type="white" />

      {/* 02. Complete Payment: Category Filter & Project Grid */}
      <div id="proyek" className="relative bg-[#F7FCFF] pt-12 sm:pt-16 pb-36 sm:pb-44 lg:pb-52">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#054FBF] uppercase tracking-widest block mb-2 font-poppins">
              SHOWCASE DELIVERABLES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123049] leading-tight font-poppins">
              Karya Klien Nyata Berbasis Produksi
            </h2>
            <p className="text-sm sm:text-base text-[#7686AB] mt-3 leading-relaxed font-poppins">
              Klik pada proyek untuk memeriksa rincian teknis, tantangan, arsitektur solusi, dan peran tim magang.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer font-poppins ${
                  activeCategory === cat
                    ? 'bg-[#002855] text-white shadow-md shadow-[#002855]/20'
                    : 'bg-white text-[#7686AB] hover:text-[#002855] border border-[#EDF4F9] shadow-sm hover:border-[#002855]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white p-7 sm:p-8 rounded-[16px] shadow-[0_10px_20px_rgba(45,50,55,0.06)] hover:shadow-xl transition-all flex flex-col justify-between cursor-pointer group border border-[#EDF4F9]"
                onClick={() => onSelectProject(project)}
              >
                <div>
                  {/* Clean Sharp Image Preview (Zero Mock, Zero Fake URL) */}
                  <div className="mb-5 overflow-hidden border border-[#EDF4F9] bg-[#F7FCFF] shadow-sm">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#054FBF] bg-[#F7FCFF] px-3 py-1 rounded-full border border-[#D5E9FA] font-poppins">
                      {project.category}
                    </span>
                    <span className="text-xs text-[#7686AB] font-medium font-poppins">
                      {project.clientOrBeneficiary || 'Internal Deliverable'}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#123049] mb-2 font-poppins leading-snug group-hover:text-[#054FBF] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#7686AB] leading-relaxed mb-4 line-clamp-3 font-poppins">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#EDF4F9] mb-4">
                    {project.tags.map((t, i) => (
                      <span key={i} className="text-[11px] bg-[#EDF4F9] text-[#123049] px-2.5 py-1 rounded-md font-medium font-poppins">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EDF4F9]">
                  <span className="font-bold text-xs text-[#054FBF] group-hover:text-[#002855] inline-flex items-center gap-1.5 transition-colors font-poppins">
                    <span>Lihat Detail Studi Kasus</span>
                    <Icon icon={ArrowRight01Icon} size={15} />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Signature Midtrans Wave Transition: White to Grey (#EDF4F9) */}
      <WaveDivider type="grey" />

      {/* 03. Powering Section: Penghargaan & Alumni Awardees (.powering-section.plain-testimony) */}
      <div className="powering-section plain-testimony relative bg-[#EDF4F9] pt-12 sm:pt-16 pb-36 sm:pb-44 lg:pb-52">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#054FBF] uppercase tracking-widest block mb-2 font-poppins">
              PRESTASI &amp; PENGHARGAAN
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123049] leading-tight font-poppins">
              Alumni Berprestasi Mahreen Indonesia
            </h2>
            <p className="text-sm sm:text-base text-[#7686AB] mt-3 leading-relaxed font-poppins">
              Apresiasi kepada talenta muda yang menunjukkan dedikasi luar biasa dalam pengembangan karya digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALUMNI_AWARDEES.map((awardee, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 sm:p-9 rounded-[24px] shadow-sm border border-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#002855] text-[#007FE7] flex items-center justify-center mb-5 shadow-sm">
                    <Icon icon={Award01Icon} size={24} />
                  </div>
                  <span className="text-xs font-bold text-[#054FBF] uppercase tracking-wider block mb-1 font-poppins">
                    {awardee.award}
                  </span>
                  <h3 className="font-bold text-lg text-[#123049] mb-1 font-poppins">
                    {awardee.name}
                  </h3>
                  <div className="text-xs text-[#7686AB] mb-4 font-poppins">
                    {awardee.role} • <span className="font-semibold text-[#123049]">{awardee.division}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#7686AB] leading-relaxed font-poppins">
                    {awardee.citation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
