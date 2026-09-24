import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Laptop,
  Coins,
  CheckCircle2,
  ExternalLink,
  FileText,
  Code2,
  Palette,
  Video,
  Share2,
  TrendingUp,
  Layers,
} from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
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
  const [activeTab, setActiveTab] = useState<'divisions' | 'schedule' | 'journey'>('divisions');
  const [selectedDivId, setSelectedDivId] = useState<string>(defaultDivisionId);

  const selectedDivision =
    BATCH2_DETAILS.divisions.find((d) => d.id === selectedDivId) || BATCH2_DETAILS.divisions[0];

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'web-dev':
        return <Code2 size={16} />;
      case 'graphic-design':
        return <Palette size={16} />;
      case 'video-editing':
        return <Video size={16} />;
      case 'social-media':
        return <Share2 size={16} />;
      case 'bizdev-partnership':
        return <TrendingUp size={16} />;
      default:
        return <Layers size={16} />;
    }
  };

  const footerActions = (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3">
      <span className="text-[12px] font-medium text-[#7686AB]">
        Periode Magang: 1 Oktober 2026 – 31 Januari 2027
      </span>
      <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end">
        <Button
          variant="outline"
          size="sm"
          href="https://bit.ly/PedomanMII2"
          target="_blank"
          icon={<FileText size={14} />}
          iconPosition="left"
          className="rounded-[2px]"
        >
          Unduh Pedoman Resmi
        </Button>
        <Button
          variant="primary"
          size="sm"
          href="https://bit.ly/MII-2"
          target="_blank"
          icon={<ExternalLink size={14} />}
          iconPosition="right"
          className="rounded-[2px]"
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
      maxWidth="4xl"
      title="Mahreen Indonesia Internship — Batch 2"
      subtitle="Program Magang Berbasis Proyek Industri & Inkubasi Talenta Muda Periode 2026/2027"
      footer={footerActions}
    >
      <div className="space-y-6">
        {/* 1. 4 Metric Cards in Ice Tint (#F7FCFF) with Hairline Border */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-[#F7FCFF] border border-[#BBBBBB]/30 p-3.5 rounded-[4px] flex items-center gap-3">
            <div className="w-8 h-8 rounded-[2px] bg-white border border-[#BBBBBB]/20 text-[#054FBF] flex items-center justify-center shrink-0">
              <Calendar size={16} />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-[#7686AB] uppercase tracking-wider">
                Periode
              </p>
              <p className="text-[12px] font-bold text-[#123049] leading-snug">
                1 Okt 2026 – 31 Jan 2027
              </p>
            </div>
          </div>

          <div className="bg-[#F7FCFF] border border-[#BBBBBB]/30 p-3.5 rounded-[4px] flex items-center gap-3">
            <div className="w-8 h-8 rounded-[2px] bg-white border border-[#BBBBBB]/20 text-[#054FBF] flex items-center justify-center shrink-0">
              <Laptop size={16} />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-[#7686AB] uppercase tracking-wider">
                Sistem
              </p>
              <p className="text-[12px] font-bold text-[#123049] leading-snug">
                Remote WFH / WFA
              </p>
            </div>
          </div>

          <div className="bg-[#F7FCFF] border border-[#BBBBBB]/30 p-3.5 rounded-[4px] flex items-center gap-3">
            <div className="w-8 h-8 rounded-[2px] bg-white border border-[#BBBBBB]/20 text-[#054FBF] flex items-center justify-center shrink-0">
              <Clock size={16} />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-[#7686AB] uppercase tracking-wider">
                Komitmen
              </p>
              <p className="text-[12px] font-bold text-[#123049] leading-snug">
                4 Bulan Terstruktur
              </p>
            </div>
          </div>

          <div className="bg-[#F7FCFF] border border-[#BBBBBB]/30 p-3.5 rounded-[4px] flex items-center gap-3">
            <div className="w-8 h-8 rounded-[2px] bg-white border border-[#BBBBBB]/20 text-[#054FBF] flex items-center justify-center shrink-0">
              <Coins size={16} />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-[#7686AB] uppercase tracking-wider">
                Bagi Hasil
              </p>
              <p className="text-[12px] font-bold text-[#054FBF] leading-snug">
                30% Profit Sharing Proyek Klien
              </p>
            </div>
          </div>
        </div>

        {/* 2. Midtrans Clean Tab Navigation */}
        <div className="border-b border-[#EDF4F9] flex gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('divisions')}
            className={`pb-2.5 px-3 text-[13px] font-bold transition-all relative cursor-pointer font-poppins ${
              activeTab === 'divisions'
                ? 'text-[#054FBF]'
                : 'text-[#7686AB] hover:text-[#123049]'
            }`}
          >
            5 Divisi Tersedia
            {activeTab === 'divisions' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#054FBF]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('schedule')}
            className={`pb-2.5 px-3 text-[13px] font-bold transition-all relative cursor-pointer font-poppins ${
              activeTab === 'schedule'
                ? 'text-[#054FBF]'
                : 'text-[#7686AB] hover:text-[#123049]'
            }`}
          >
            Weekly Operating System
            {activeTab === 'schedule' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#054FBF]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('journey')}
            className={`pb-2.5 px-3 text-[13px] font-bold transition-all relative cursor-pointer font-poppins ${
              activeTab === 'journey'
                ? 'text-[#054FBF]'
                : 'text-[#7686AB] hover:text-[#123049]'
            }`}
          >
            4-Month Progression Journey
            {activeTab === 'journey' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#054FBF]" />
            )}
          </button>
        </div>

        {/* 3. Tab 1: 5 Divisions (Split Layout: List on Left, Detail Card on Right) */}
        {activeTab === 'divisions' && (
          <div className="flex flex-col md:flex-row gap-5 items-start">
            {/* Left Column: 5 Divisions Vertical Menu */}
            <div className="w-full md:w-60 shrink-0 space-y-1">
              <span className="text-[10px] font-bold text-[#7686AB] uppercase tracking-wider block mb-1.5">
                Pilih Divisi:
              </span>
              {BATCH2_DETAILS.divisions.map((div) => {
                const isSelected = div.id === selectedDivId;
                return (
                  <button
                    key={div.id}
                    type="button"
                    onClick={() => setSelectedDivId(div.id)}
                    className={`w-full text-left px-3.5 py-2.5 text-[12px] font-poppins font-semibold transition-all cursor-pointer flex items-center justify-between rounded-r-[2px] ${
                      isSelected
                        ? 'bg-[#F7FCFF] text-[#054FBF] border-l-2 border-[#054FBF] font-bold shadow-2xs'
                        : 'text-[#123049] hover:bg-[#F7FCFF] border-l-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className={isSelected ? 'text-[#054FBF]' : 'text-[#7686AB]'}>
                        {getDivisionIcon(div.id)}
                      </span>
                      <span className="truncate">{div.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Selected Division Detail */}
            {selectedDivision && (
              <div className="flex-1 w-full bg-[#FFFFFF] border border-[#BBBBBB]/30 rounded-[4px] p-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#EDF4F9] mb-3">
                  <div>
                    <h4 className="font-poppins font-bold text-[15px] text-[#123049]">
                      {selectedDivision.name}
                    </h4>
                    <p className="text-[11px] text-[#7686AB]">
                      Divisi Pelaksana Proyek Mahreen Indonesia Batch 2
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-[#054FBF] bg-[#EDF4F9] px-2.5 py-0.5 rounded-[2px] uppercase">
                    Open Recruitment
                  </span>
                </div>

                <p className="text-[12px] leading-relaxed text-[#123049] mb-4">
                  {selectedDivision.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div className="bg-[#F7FCFF] p-3 rounded-[2px] border border-[#BBBBBB]/20">
                    <h5 className="text-[10px] font-bold text-[#054FBF] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <CheckCircle2 size={13} /> Output Utama
                    </h5>
                    <ul className="space-y-1.5">
                      {selectedDivision.keyOutputs.map((output, idx) => (
                        <li key={idx} className="text-[11px] text-[#123049] flex items-start gap-1.5">
                          <span className="text-[#054FBF] font-bold shrink-0">•</span>
                          <span className="leading-snug">{output}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#F7FCFF] p-3 rounded-[2px] border border-[#BBBBBB]/20">
                    <h5 className="text-[10px] font-bold text-[#054FBF] uppercase tracking-wider mb-2">
                      Tools &amp; Tech Stack
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {selectedDivision.skillsGained.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium bg-white text-[#123049] px-2 py-0.5 rounded-[2px] border border-[#EDF4F9]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 4. Tab 2: Weekly Operating System (Horizontal 5-Day Calendar Grid in Cool Mist #EDF4F9) */}
        {activeTab === 'schedule' && (
          <div>
            <p className="text-[12px] text-[#7686AB] mb-3">
              Ritme mingguan terstruktur (Senin – Jumat) memastikan setiap peserta memiliki arah kerja terarah dan waktu mandiri yang terukur:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
              {BATCH2_DETAILS.weeklyOperatingSystem.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#EDF4F9] border border-white/60 p-3.5 rounded-[4px] flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase text-[#054FBF] font-poppins block mb-1">
                      {item.day}
                    </span>
                    <h5 className="text-[13px] font-semibold text-[#123049] font-poppins mb-1.5 leading-snug">
                      {item.phase}
                    </h5>
                    <p className="text-[11px] text-[#7686AB] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. Tab 3: 4-Month Progression Journey */}
        {activeTab === 'journey' && (
          <div>
            <p className="text-[12px] text-[#7686AB] mb-3">
              Kurikulum bertahap 4 bulan untuk mengakselerasi kompetensi talenta muda hingga menghasilkan portofolio nyata:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {BATCH2_DETAILS.journeyPhases.map((month) => (
                <div
                  key={month.monthNumber}
                  className="bg-[#F7FCFF] border border-[#BBBBBB]/20 p-3.5 rounded-[4px] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold text-[#7686AB] uppercase tracking-wider">
                        Bulan {month.monthNumber} • {month.monthName}
                      </span>
                      <span className="text-[10px] font-bold text-[#054FBF] bg-white px-2 py-0.5 rounded-[2px] border border-[#054FBF]/20 uppercase">
                        {month.phase}
                      </span>
                    </div>

                    <h5 className="font-poppins font-bold text-[13px] text-[#123049] mb-1">
                      {month.title}
                    </h5>
                    <p className="text-[11px] leading-relaxed text-[#7686AB] mb-3">
                      {month.focusDescription}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60">
                    <span className="text-[10px] font-semibold text-[#054FBF] block">
                      Flagship: {month.flagshipProgram}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

Batch2DetailModal.displayName = 'Batch2DetailModal';

export default Batch2DetailModal;
