import React from 'react';
import {
  Calendar03Icon,
  Layers01Icon,
  Building03Icon,
  CheckmarkCircle02Icon,
  ArrowRight01Icon,
} from '@hugeicons/core-free-icons';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import type { ProjectItem } from '../../types/mahreen';

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

  const footerActions = (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3">
      <div className="text-[12px] text-[#7686AB]">
        Pilar: <span className="font-semibold text-[#123049]">{project.pillar}</span>
      </div>
      <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
        <Button variant="ghost" size="sm" onClick={onClose} className="rounded-[2px]">
          Tutup
        </Button>
        {onConsultSimilar ? (
          <Button
            variant="primary"
            size="sm"
            onClick={() => onConsultSimilar(project)}
            icon={<Icon icon={ArrowRight01Icon} size={14} />}
            iconPosition="right"
            className="rounded-[2px] bg-[#054FBF] hover:bg-[#002855] text-white text-[12px] font-bold px-6 py-2.5"
          >
            Konsultasikan Proyek Serupa
          </Button>
        ) : (
          <Button
            variant="primary"
            size="sm"
            href="https://bit.ly/MII-2"
            target="_blank"
            icon={<Icon icon={ArrowRight01Icon} size={14} />}
            iconPosition="right"
            className="rounded-[2px] bg-[#054FBF] hover:bg-[#002855] text-white text-[12px] font-bold px-6 py-2.5"
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
          <span className="font-poppins font-bold text-[#123049] text-lg sm:text-xl">
            {project.title}
          </span>
          <span className="text-[11px] font-poppins font-medium text-[#123049] bg-[#EDF4F9] border border-[#BBBBBB]/30 px-2 py-0.5 rounded-[2px]">
            {project.category}
          </span>
        </div>
      }
      subtitle={`Dokumentasi & Portofolio Karya • ${project.year}`}
      footer={footerActions}
    >
      <div className="space-y-5">
        {/* 1. Clean Project Image Showcase */}
        {project.image && (
          <div className="w-full bg-[#123049] p-2 border border-[#EDF4F9] shadow-sm">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-80 object-cover object-top"
              loading="lazy"
            />
          </div>
        )}

        {/* 2. Project Meta Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-[#F7FCFF] border border-[#BBBBBB]/30 p-3.5 rounded-[4px]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-[2px] bg-white border border-[#BBBBBB]/20 text-[#054FBF] shrink-0">
              <Icon icon={Layers01Icon} size={16} />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-[#7686AB] uppercase tracking-wider">
                Kategori
              </p>
              <p className="text-[12px] font-bold text-[#123049]">{project.category}</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-[2px] bg-white border border-[#BBBBBB]/20 text-[#054FBF] shrink-0">
              <Icon icon={Calendar03Icon} size={16} />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-[#7686AB] uppercase tracking-wider">
                Tahun
              </p>
              <p className="text-[12px] font-bold text-[#123049]">{project.year}</p>
            </div>
          </div>

          {project.clientOrBeneficiary && (
            <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
              <div className="p-1.5 rounded-[2px] bg-white border border-[#BBBBBB]/20 text-[#054FBF] shrink-0">
                <Icon icon={Building03Icon} size={16} />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-[#7686AB] uppercase tracking-wider">
                  Klien / Mitra
                </p>
                <p className="text-[12px] font-bold text-[#123049] truncate">
                  {project.clientOrBeneficiary}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 3. Description Section */}
        <div>
          <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#123049] mb-1 font-poppins">
            Deskripsi Proyek
          </h4>
          <p className="text-[13px] leading-relaxed text-[#7686AB] font-poppins">
            {project.description}
          </p>
        </div>

        {/* 4. Deliverables Section (Hairline dividers, no bullet dots) */}
        {project.deliverables && project.deliverables.length > 0 && (
          <div>
            <h4 className="text-[11px] font-bold text-[#054FBF] uppercase tracking-wider mb-2 font-poppins">
              Ruang Lingkup &amp; Deliverables
            </h4>
            <div className="border-t border-[#EDF4F9]">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 border-b border-[#EDF4F9] py-2 text-[12px] text-[#123049] font-poppins"
                >
                  <Icon icon={CheckmarkCircle02Icon} size={14} className="text-[#054FBF] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. Tags Section (Sharp 2px Micro-Chips) */}
        {project.tags && project.tags.length > 0 && (
          <div>
            <h4 className="text-[11px] font-bold text-[#7686AB] uppercase tracking-wider mb-2 font-poppins">
              Tags &amp; Teknologi
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-medium font-poppins text-[#123049] bg-[#EDF4F9] border border-[#BBBBBB]/30 px-2.5 py-0.5 rounded-[2px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

ProjectDetailModal.displayName = 'ProjectDetailModal';

export default ProjectDetailModal;
