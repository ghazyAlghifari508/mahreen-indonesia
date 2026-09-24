import React from 'react';
import {
  Calendar,
  Layers,
  Building2,
  CheckCircle2,
  Tag,
  ArrowUpRight,
} from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge, BadgeVariant } from '../ui/Badge';
import type { ProjectItem, ProjectCategory } from '../../types/mahreen';

export interface ProjectDetailModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onConsultSimilar?: (project: ProjectItem) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onConsultSimilar,
}) => {
  if (!project) return null;

  const categoryBadgeVariant: Record<ProjectCategory, BadgeVariant> = {
    Website: 'azure',
    Branding: 'cobalt',
    'Social Impact': 'slate',
    Internship: 'cobalt',
    Sustainability: 'ice',
  };

  const footerActions = (
    <div className="flex items-center justify-between w-full gap-3">
      <div className="text-[12px] text-[#7686AB]">
        Pilar: <span className="font-semibold text-[#123049]">{project.pillar}</span>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={onClose}>
          Tutup
        </Button>
        {onConsultSimilar ? (
          <Button
            variant="primary"
            size="sm"
            onClick={() => onConsultSimilar(project)}
            icon={<ArrowUpRight size={14} />}
            iconPosition="right"
          >
            Konsultasikan Proyek Serupa
          </Button>
        ) : (
          <Button
            variant="primary"
            size="sm"
            href="https://bit.ly/MII-2"
            target="_blank"
            icon={<ArrowUpRight size={14} />}
            iconPosition="right"
          >
            Pelajari Program Terkait
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="3xl"
      title={
        <div className="flex flex-wrap items-center gap-2.5">
          <span>{project.title}</span>
          <Badge variant={categoryBadgeVariant[project.category] || 'ice'} size="sm">
            {project.category}
          </Badge>
        </div>
      }
      subtitle={`Dokumentasi & Portofolio Karya • ${project.year}`}
      footer={footerActions}
    >
      <div className="space-y-5">
        {/* Project Visual Feature Banner */}
        {project.image && (
          <div className="relative w-full h-56 sm:h-72 overflow-hidden rounded-[6px] bg-[#EDF4F9] border border-[#EDF4F9]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                // Fallback to placeholder if image link is broken
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
              }}
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <Badge variant="cobalt" size="sm">
                {project.year}
              </Badge>
              <Badge variant="azure" size="sm">
                {project.pillar}
              </Badge>
            </div>
          </div>
        )}

        {/* Project Meta Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-[#F7FCFF] border border-[#EDF4F9] p-3.5 rounded-[6px]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded bg-white text-[#054FBF] shadow-xs shrink-0">
              <Layers size={16} />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-[#7686AB] uppercase tracking-wider">
                Kategori
              </p>
              <p className="text-[12px] font-bold text-[#123049]">{project.category}</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded bg-white text-[#054FBF] shadow-xs shrink-0">
              <Calendar size={16} />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-[#7686AB] uppercase tracking-wider">
                Tahun
              </p>
              <p className="text-[12px] font-bold text-[#123049]">{project.year}</p>
            </div>
          </div>

          {project.clientOrBeneficiary && (
            <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
              <div className="p-2 rounded bg-white text-[#054FBF] shadow-xs shrink-0">
                <Building2 size={16} />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[#7686AB] uppercase tracking-wider">
                  Klien / Mitra
                </p>
                <p className="text-[12px] font-bold text-[#123049] truncate">
                  {project.clientOrBeneficiary}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Description Section */}
        <div>
          <h4 className="text-[13px] font-bold text-[#123049] mb-1.5 font-poppins">
            Deskripsi Proyek
          </h4>
          <p className="text-[13px] leading-relaxed text-[#7686AB]">
            {project.description}
          </p>
        </div>

        {/* Deliverables Section */}
        {project.deliverables && project.deliverables.length > 0 && (
          <div className="bg-[#EDF4F9]/60 p-4 rounded-[6px] border border-[#EDF4F9]">
            <h4 className="text-[11px] font-bold text-[#054FBF] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <CheckCircle2 size={15} /> Deliverables & Ruang Lingkup
            </h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[12px] text-[#123049]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#054FBF]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags Section */}
        {project.tags && project.tags.length > 0 && (
          <div>
            <h4 className="text-[11px] font-bold text-[#7686AB] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Tag size={13} /> Tags & Teknologi
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, idx) => (
                <Badge key={idx} variant="outline" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

ProjectDetailModal.displayName = 'ProjectDetailModal';
