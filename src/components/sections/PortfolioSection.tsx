import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Trophy
} from 'lucide-react';
import { PROJECTS_DATA, ALUMNI_AWARDEES } from '../../data/mahreenData';
import { ProjectItem } from '../../types/mahreen';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

type CategoryFilter = 'Semua' | 'Website' | 'Branding' | 'Social Impact' | 'Internship' | 'Sustainability';

const CATEGORIES: CategoryFilter[] = ['Semua', 'Website', 'Branding', 'Social Impact', 'Internship', 'Sustainability'];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('Semua');

  const filteredProjects = activeCategory === 'Semua'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section 
      id="karya-nyata" 
      className="bg-midtrans-ice py-20 px-6 md:px-12 border-b border-midtrans-mist"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[12px] font-bold text-[#007FE7] uppercase tracking-[0.15em] block mb-2 font-poppins">
            BUKTI KARYA &amp; DAMPAK NYATA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-midtrans-slate tracking-tight mb-4">
            Portofolio Proyek Terverifikasi
          </h2>
          <p className="text-midtrans-muted text-base md:text-lg leading-relaxed">
            Karya otentik yang dihasilkan dari berbagai pilar ekosistem Mahreen—dari implementasi 
            sistem website, perancangan identitas brand, hingga inisiatif kebermanfaatan sosial.
          </p>
        </div>

        {/* Category Filter Pills (17px Pill Radius) */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-[17px] transition-all duration-150 border ${
                  isActive
                    ? 'bg-midtrans-blue text-white border-midtrans-blue shadow-sm'
                    : 'bg-white text-midtrans-muted hover:text-midtrans-slate border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bg-white rounded-[6px] border border-slate-200/80 overflow-hidden shadow-midtrans-card hover:shadow-midtrans-hover hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex space-x-1.5">
                    <span className="text-[10px] font-bold bg-[#002855] text-white px-2 py-0.5 rounded-[2px]">
                      {project.pillar}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] font-bold bg-black/70 text-white px-2 py-0.5 rounded-[2px]">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="text-[11px] font-bold text-midtrans-azure uppercase tracking-wider mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-lg font-bold text-midtrans-slate group-hover:text-midtrans-blue transition-colors mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-midtrans-muted leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-medium bg-midtrans-mist text-slate-700 px-2 py-0.5 rounded-[2px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-midtrans-blue">
                <span>Lihat Detail Proyek</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Hall of Fame: Alumni Batch 1 Awardees with Real Photos */}
        <div className="bg-white rounded-[8px] p-6 md:p-10 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-8 pb-4 border-b border-midtrans-mist">
            <div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <h3 className="text-xl md:text-2xl font-bold text-midtrans-slate">
                  Hall of Fame — Alumni Berprestasi Batch 1
                </h3>
              </div>
              <p className="text-xs md:text-sm text-midtrans-muted mt-1">
                Bukti capaian nyata yang diverifikasi langsung dari sesi penganugerahan Best Intern Awards Mahreen Indonesia.
              </p>
            </div>
            <span className="text-xs font-bold text-[#054FBF] bg-midtrans-ice px-3 py-1 rounded-[2px] border border-midtrans-azure/20">
              Dokumentasi Resmi Batch 1
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ALUMNI_AWARDEES.map((alumni, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-[6px] border border-slate-200/80 overflow-hidden hover:border-midtrans-blue hover:shadow-midtrans-card transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Real Award Poster Photo */}
                  <div className="relative aspect-square bg-slate-900 overflow-hidden">
                    <img 
                      src={alumni.avatar} 
                      alt={`Dokumentasi Penghargaan ${alumni.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                      <span className="text-[10px] font-bold bg-[#002855]/90 text-white px-2 py-0.5 rounded-[2px] backdrop-blur-xs">
                        {alumni.award}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <span className="text-[10px] font-bold text-[#007FE7] uppercase tracking-wider block mb-1">
                      {alumni.role}
                    </span>
                    <h4 className="text-sm font-bold text-midtrans-slate mb-2 line-clamp-1">
                      {alumni.name}
                    </h4>
                    <p className="text-[11px] text-midtrans-muted leading-relaxed italic line-clamp-3">
                      "{alumni.citation}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
