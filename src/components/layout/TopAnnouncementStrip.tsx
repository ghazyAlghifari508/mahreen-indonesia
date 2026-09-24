import React, { useState } from 'react';
import { ArrowRight01Icon, Cancel01Icon } from '@hugeicons/core-free-icons';
import { Icon } from '../ui/Icon';

export interface TopAnnouncementStripProps {
  onOpenBatch2Modal: () => void;
  onNavigate?: (route: string) => void;
  dismissible?: boolean;
  className?: string;
  isDismissed?: boolean;
  onDismiss?: () => void;
}

export const TopAnnouncementStrip: React.FC<TopAnnouncementStripProps> = ({
  onOpenBatch2Modal,
  onNavigate,
  dismissible = true,
  className = '',
  isDismissed: controlledDismissed,
  onDismiss,
}) => {
  const [localDismissed, setLocalDismissed] = useState(false);
  const isDismissed = controlledDismissed !== undefined ? controlledDismissed : localDismissed;

  const handleDismiss = () => {
    setLocalDismissed(true);
    if (onDismiss) {
      onDismiss();
    }
  };

  if (isDismissed) {
    return <div className="row update-section closed" style={{ display: 'none' }} />;
  }

  return (
    <div
      role="region"
      aria-label="Pengumuman Resmi Batch 2"
      className={`row update-section w-full bg-[#007FE7] text-white rounded-none fixed top-0 left-0 right-0 z-[1002] h-[50px] flex items-center justify-between px-4 sm:px-8 border-b border-white/10 ${className}`}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between w-full">
        {/* Centered Content Container */}
        <div className="flex-1 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center text-xs sm:text-[13px] font-poppins font-medium leading-normal">
          {/* Informational Line */}
          <span className="text-white/95">
            Selamat Datang di Mahreen Indonesia - Ekosistem Kreatif, Digital, dan Sosial Generasi Muda
          </span>

          {/* Action Trigger */}
          <button
            onClick={() => {
              if (onNavigate) {
                onNavigate('/internship');
              } else {
                onOpenBatch2Modal();
              }
            }}
            className="inline-flex items-center gap-1 font-bold text-white underline underline-offset-4 hover:text-white/85 transition-colors cursor-pointer group ml-1 shrink-0"
          >
            <span>Pelajari Detail &amp; Syarat</span>
            <Icon
              icon={ArrowRight01Icon}
              size={13}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </button>
        </div>

        {/* Dismiss Button */}
        {dismissible && (
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Tutup pengumuman"
            className="text-white/80 hover:text-white p-1 ml-2 transition-colors cursor-pointer shrink-0"
          >
            <Icon icon={Cancel01Icon} size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TopAnnouncementStrip;
