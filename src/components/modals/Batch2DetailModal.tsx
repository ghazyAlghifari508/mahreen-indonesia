import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Laptop,
  Coins,
  CheckCircle2,
  ExternalLink,
  FileText,
  Layers,
  Code2,
  Palette,
  Video,
  Share2,
  TrendingUp,
} from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
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
  const [activeTab, setActiveTab] = useState<'divisions' | 'journey' | 'schedule'>('divisions');
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
      <div className="flex items-center gap-2 text-[12px] text-[#7686AB]">
        <span className="font-medium">Pendaftaran Batch 2 Sedang Dibuka</span>
      </div>
      <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end">
        <Button
          variant="outline"
          size="sm"
          href="https://bit.ly/PedomanMII2"
          target="_blank"
          icon={<FileText size={14} />}
          iconPosition="left"
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
      title={
        <div className="flex flex-wrap items-center gap-2.5">
          <span>{BATCH2_DETAILS.title}</span>
          <Badge variant="azure" size="sm">
            Batch 2
          </Badge>
        </div>
      }
      subtitle="Program Magang Industri Terstruktur & Profesional Mahreen Indonesia Periode 2026/2027"
      footer={footerActions}
    >
      <div className="space-y-6">
        {/* Core Specs Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-[#F7FCFF] border border-[#007FE7]/20 p-4 rounded-[6px]">
          <div className="flex items-start gap-2.5">
            <div className="p-2 rounded bg-white text-[#054FBF] shadow-xs shrink-0">
              <Calendar size={18} />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-[#7686AB] uppercase tracking-wider">
                Periode
              </p>
              <p className="text-[12px] font-bold text-[#123049] leading-snug">
                {BATCH2_DETAILS.period}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="p-2 rounded bg-white text-[#054FBF] shadow-xs shrink-0">
              <Laptop size={18} />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-[#7686AB] uppercase tracking-wider">
                Sistem Kerja
              </p>
              <p className="text-[12px] font-bold text-[#123049] leading-snug">
                Remote WFH / WFA
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="p-2 rounded bg-white text-[#054FBF] shadow-xs shrink-0">
              <Clock size={18} />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-[#7686AB] uppercase tracking-wider">
                Komitmen
              </p>
              <p className="text-[12px] font-bold text-[#123049] leading-snug">
                4 Bulan Terstruktur
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="p-2 rounded bg-white text-[#054FBF] shadow-xs shrink-0">
              <Coins size={18} />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-[#7686AB] uppercase tracking-wider">
                Skema Fee
              </p>
              <p className="text-[12px] font-bold text-[#054FBF] leading-snug">
                Profit Sharing 30%
              </p>
            </div>
          </div>
        </div>

        {/* Verified Fee Scheme Callout */}
        <div className="bg-[#EDF4F9] border-l-4 border-[#054FBF] p-3.5 rounded-r-[4px]">
          <div className="text-[12px] text-[#123049] leading-relaxed">
            <span className="font-bold">Skema Kompensasi Terverifikasi: </span>
            {BATCH2_DETAILS.feeScheme}. Seluruh anggota tim pelaksana yang terlibat langsung
            dalam delivery klien komersial berhak memperoleh bagi hasil transparan.
          </div>
        </div>

        {/* Tab Controls */}
        <div className="border-b border-[#EDF4F9] flex gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('divisions')}
            className={`pb-2.5 px-3 text-[13px] font-bold transition-all relative cursor-pointer ${
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
            onClick={() => setActiveTab('journey')}
            className={`pb-2.5 px-3 text-[13px] font-bold transition-all relative cursor-pointer ${
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

          <button
            type="button"
            onClick={() => setActiveTab('schedule')}
            className={`pb-2.5 px-3 text-[13px] font-bold transition-all relative cursor-pointer ${
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
        </div>

        {/* Tab 1: 5 Divisions */}
        {activeTab === 'divisions' && (
          <div className="space-y-4">
            {/* Division Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {BATCH2_DETAILS.divisions.map((div) => {
                const isSelected = div.id === selectedDivId;
                return (
                  <button
                    key={div.id}
                    type="button"
                    onClick={() => setSelectedDivId(div.id)}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[17px] text-[12px] font-semibold transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-[#054FBF] text-white border-[#054FBF] shadow-xs'
                        : 'bg-[#F7FCFF] text-[#123049] border-[#EDF4F9] hover:border-[#007FE7]/30'
                    }`}
                  >
                    {getDivisionIcon(div.id)}
                    <span>{div.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Division Card */}
            {selectedDivision && (
              <div className="bg-white border border-[#EDF4F9] rounded-[6px] p-5 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EDF4F9] pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded bg-[#EDF4F9] text-[#054FBF]">
                      {getDivisionIcon(selectedDivision.id)}
                    </div>
                    <div>
                      <h3 className="font-poppins font-bold text-[16px] text-[#123049]">
                        {selectedDivision.name}
                      </h3>
                      <p className="text-[12px] text-[#7686AB]">
                        Divisi Pelaksana Proyek Mahreen Indonesia Batch 2
                      </p>
                    </div>
                  </div>
                  <Badge variant="cobalt" size="sm">
                    Open Recruitment
                  </Badge>
                </div>

                <p className="text-[13px] leading-relaxed text-[#123049] mb-5">
                  {selectedDivision.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#F7FCFF] p-3.5 rounded-[4px] border border-[#EDF4F9]">
                    <h4 className="text-[11px] font-bold text-[#054FBF] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <CheckCircle2 size={14} /> Output Kunci yang Dihasilkan
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedDivision.keyOutputs.map((output, idx) => (
                        <li
                          key={idx}
                          className="text-[12px] text-[#123049] flex items-start gap-2"
                        >
                          <span className="text-[#054FBF] font-bold">•</span>
                          <span>{output}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#F7FCFF] p-3.5 rounded-[4px] border border-[#EDF4F9]">
                    <h4 className="text-[11px] font-bold text-[#054FBF] uppercase tracking-wider mb-2.5">
                      Keterampilan &amp; Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedDivision.skillsGained.map((skill, idx) => (
                        <Badge key={idx} variant="slate" size="sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: 4-Month Progression Journey */}
        {activeTab === 'journey' && (
          <div className="space-y-4">
            <p className="text-[13px] text-[#7686AB]">
              Kurikulum magang berbasis akselerasi 4 bulan: Dari adaptasi budaya kerja hingga dampak
              dan portofolio terverifikasi.
            </p>

            <div className="grid sm:grid-cols-2 gap-3.5">
              {BATCH2_DETAILS.journeyPhases.map((month) => {
                const phaseBadges: Record<string, 'slate' | 'azure' | 'cobalt' | 'ice'> = {
                  ADAPT: 'slate',
                  CREATE: 'azure',
                  DELIVER: 'cobalt',
                  IMPACT: 'azure',
                };

                return (
                  <div
                    key={month.monthNumber}
                    className="p-4 bg-white border border-[#EDF4F9] rounded-[6px] shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold text-[#7686AB] uppercase tracking-wider">
                          Bulan {month.monthNumber} • {month.monthName}
                        </span>
                        <Badge variant={phaseBadges[month.phase] || 'ice'} size="sm">
                          Fase {month.phase}
                        </Badge>
                      </div>

                      <h4 className="font-poppins font-bold text-[14px] text-[#123049] mb-1.5">
                        {month.title}
                      </h4>
                      <p className="text-[12px] leading-relaxed text-[#7686AB] mb-3">
                        {month.focusDescription}
                      </p>
                    </div>

                    <div className="border-t border-[#EDF4F9] pt-2.5 mt-2 bg-[#F7FCFF] -mx-4 -mb-4 p-3 rounded-b-[6px]">
                      <p className="text-[11px] font-semibold text-[#054FBF]">
                        Flagship: {month.flagshipProgram}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: Weekly Operating System */}
        {activeTab === 'schedule' && (
          <div className="space-y-4">
            <p className="text-[13px] text-[#7686AB]">
              Ritme operasional mingguan (Senin – Jumat) menjamin koordinasi sinkron dan waktu kerja
              mandiri yang fleksibel.
            </p>

            <div className="space-y-2.5">
              {BATCH2_DETAILS.weeklyOperatingSystem.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 bg-white border border-[#EDF4F9] rounded-[4px] gap-2 sm:gap-4 hover:border-[#007FE7]/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-16 px-2.5 py-1 text-center bg-[#EDF4F9] text-[#123049] font-poppins font-bold text-[12px] rounded-[2px]">
                      {item.day}
                    </span>
                    <span className="font-poppins font-semibold text-[13px] text-[#123049]">
                      {item.phase}
                    </span>
                  </div>
                  <span className="text-[12px] text-[#7686AB] sm:text-right">
                    {item.description}
                  </span>
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
