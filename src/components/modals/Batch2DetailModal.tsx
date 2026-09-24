import React, { useState } from 'react';
import {
  Calendar03Icon,
  ComputerIcon,
  Coins01Icon,
  LinkSquare02Icon,
  File02Icon,
  DeveloperIcon,
  PaintBoardIcon,
  Video01Icon,
  Share08Icon,
  TradeUpIcon,
  Layers01Icon,
} from '@hugeicons/core-free-icons';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { BATCH2_DETAILS } from '../../data/mahreenData';

export interface Batch2DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDivisionId?: string;
}

export const Batch2DetailModal: React.FC<Batch2DetailModalProps> = ({
  isOpen,
  onClose,
  defaultDivisionId = 'web-dev',
}) => {
  const [selectedDivId, setSelectedDivId] = useState<string>(defaultDivisionId);

  const selectedDivision =
    BATCH2_DETAILS.divisions.find((d) => d.id === selectedDivId) || BATCH2_DETAILS.divisions[0];

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'web-dev':
        return <Icon icon={DeveloperIcon} size={15} />;
      case 'graphic-design':
        return <Icon icon={PaintBoardIcon} size={15} />;
      case 'video-editing':
        return <Icon icon={Video01Icon} size={15} />;
      case 'social-media':
        return <Icon icon={Share08Icon} size={15} />;
      case 'bizdev-partnership':
        return <Icon icon={TradeUpIcon} size={15} />;
      default:
        return <Icon icon={Layers01Icon} size={15} />;
    }
  };

  const footerActions = (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3">
      <span className="text-xs text-[#7686AB]">
        Periode: 1 Okt 2026 – 31 Jan 2027
      </span>
      <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
        <Button
          variant="outline"
          size="sm"
          href="https://bit.ly/PedomanMII2"
          target="_blank"
          icon={<Icon icon={File02Icon} size={14} />}
          iconPosition="left"
          className="rounded-full text-xs"
        >
          Unduh Pedoman Resmi
        </Button>
        <Button
          variant="primary"
          size="sm"
          href="https://bit.ly/MII-2"
          target="_blank"
          icon={<Icon icon={LinkSquare02Icon} size={14} />}
          iconPosition="right"
          className="rounded-full text-xs"
        >
          Buka Form Pendaftaran
        </Button>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="2xl"
      title="Mahreen Indonesia Internship - Batch 2"
      subtitle="Program Magang Berbasis Proyek Industri & Inkubasi Talenta Muda Periode 2026/2027"
      footer={footerActions}
    >
      <div className="space-y-5">
        {/* Compact Info Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F7FCFF] border border-[#EDF4F9] px-4 py-2.5 rounded-xl text-xs text-[#123049]">
          <div className="flex items-center gap-2 font-medium">
            <Icon icon={Calendar03Icon} size={15} className="text-[#054FBF]" />
            <span>1 Okt 2026 – 31 Jan 2027</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <Icon icon={ComputerIcon} size={15} className="text-[#054FBF]" />
            <span>Remote WFH / WFA</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <Icon icon={Coins01Icon} size={15} className="text-[#054FBF]" />
            <span className="text-[#054FBF] font-semibold">30% Profit Sharing</span>
          </div>
        </div>

        {/* Division Selector Grid */}
        <div className="space-y-2.5">
          <span className="text-xs font-bold text-[#7686AB] uppercase tracking-wider block font-poppins">
            Pilih Divisi Magang:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {BATCH2_DETAILS.divisions.map((div) => {
              const isSelected = div.id === selectedDivId;
              return (
                <button
                  key={div.id}
                  type="button"
                  onClick={() => setSelectedDivId(div.id)}
                  className={`px-3 py-2.5 text-xs font-semibold rounded-xl border transition-all text-left flex items-center gap-2.5 cursor-pointer font-poppins ${
                    isSelected
                      ? 'bg-[#002855] text-white border-[#002855] shadow-sm'
                      : 'bg-white text-[#123049] border-[#EDF4F9] hover:bg-[#F7FCFF]'
                  }`}
                >
                  <span className={isSelected ? 'text-[#007FE7]' : 'text-[#054FBF]'}>
                    {getDivisionIcon(div.id)}
                  </span>
                  <span className="truncate">{div.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Division Concise Detail Card */}
        {selectedDivision && (
          <div className="bg-[#FFFFFF] border border-[#EDF4F9] rounded-xl p-4 sm:p-5 shadow-sm space-y-3.5">
            <div className="flex items-center justify-between pb-2.5 border-b border-[#EDF4F9]">
              <div>
                <h4 className="font-poppins font-bold text-sm sm:text-base text-[#123049]">
                  {selectedDivision.name}
                </h4>
                <p className="text-[11px] text-[#7686AB]">
                  Inkubasi Proyek Industri &amp; Mentoring Praktisi
                </p>
              </div>
              <span className="text-[10px] font-bold text-[#054FBF] bg-[#EDF4F9] px-2.5 py-1 rounded-full uppercase tracking-wider">
                Open Recruitment
              </span>
            </div>

            <p className="text-xs sm:text-[13px] leading-relaxed text-[#123049]/90 font-poppins">
              {selectedDivision.description}
            </p>

            <div className="pt-2 border-t border-[#EDF4F9]">
              <span className="text-xs font-semibold text-[#123049] block mb-2 font-poppins">
                Tools &amp; Tech Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedDivision.skillsGained.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium bg-[#F7FCFF] text-[#054FBF] px-2.5 py-1 rounded-md border border-[#EDF4F9]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Batch2DetailModal;
