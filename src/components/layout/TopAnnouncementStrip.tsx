import React, { useState } from 'react';
import { ArrowRight, Sparkles, X } from 'lucide-react';

export interface TopAnnouncementStripProps {
  onOpenBatch2Modal: () => void;
  dismissible?: boolean;
  className?: string;
}

/**
 * Midtrans-compliant Global Announcement Strip (Component #3)
 *
 * Visual specifications:
 * - Solid Electric Azure saturation (`#007FE7`) edge-to-edge container
 * - Zero border-radius (`rounded-none`)
 * - Centered content with badge "BATCH 2"
 * - Informational line: "Pendaftaran Mahreen Indonesia Internship Batch 2 Resmi Dibuka (1 Okt 2026 – 31 Jan 2027) — Remote (WFH/WFA)"
 * - Action trigger "Pelajari Detail & Syarat →" executing onOpenBatch2Modal()
 * - Optional dismissal with persistent state support
 */
export const TopAnnouncementStrip: React.FC<TopAnnouncementStripProps> = ({
  onOpenBatch2Modal,
  dismissible = true,
  className = '',
}) => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return null;
  }

  return (
    <aside
      role="region"
      aria-label="Pengumuman Resmi Batch 2"
      className={`w-full bg-[#007FE7] text-white rounded-none py-2.5 px-4 sm:px-6 relative z-50 border-b border-white/10 ${className}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Centered Content Container */}
        <div className="flex-1 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center text-xs sm:text-[13px] md:text-[14px] font-poppins font-medium leading-normal">
          {/* Badge BATCH 2 */}
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[17px] bg-white/20 border border-white/30 text-white font-bold text-[11px] uppercase tracking-wider shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-white" aria-hidden="true" />
            <span>BATCH 2</span>
          </span>

          {/* Informational Line */}
          <span className="text-white/95">
            Pendaftaran Mahreen Indonesia Internship Batch 2 Resmi Dibuka (1 Okt 2026 – 31 Jan 2027) — Remote (WFH/WFA)
          </span>

          {/* Action Trigger */}
          <button
            type="button"
            onClick={onOpenBatch2Modal}
            className="inline-flex items-center gap-1 font-bold text-white underline underline-offset-4 hover:text-white/80 transition-colors cursor-pointer group ml-1 shrink-0"
          >
            <span>Pelajari Detail &amp; Syarat</span>
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Optional Dismissal Button */}
        {dismissible && (
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            aria-label="Tutup pengumuman"
            className="p-1 rounded-sm text-white/80 hover:text-white hover:bg-white/15 transition-colors cursor-pointer shrink-0 ml-1"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </aside>
  );
};
