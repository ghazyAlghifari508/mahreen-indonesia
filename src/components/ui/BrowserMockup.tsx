import React from 'react';

interface BrowserMockupProps {
  url?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'clean' | 'default';
}

/**
 * Minimalist Browser Window Frame Mockup
 *
 * Replaces raw, uncropped screengrabs (like raw Google Meet controls)
 * with an agency-grade, clean browser viewport.
 */
export const BrowserMockup: React.FC<BrowserMockupProps> = ({
  url = 'mahreenindonesia.com',
  children,
  className = '',
}) => {
  return (
    <div
      className={`overflow-hidden rounded-[8px] bg-white border border-[#EDF4F9] shadow-[0_10px_25px_rgba(18,48,73,0.08)] ${className}`}
    >
      {/* Browser Window Header */}
      <div className="bg-[#EDF4F9] px-4 py-2.5 border-b border-[#EDF4F9] flex items-center justify-between select-none">
        {/* 3 OS Window Dots */}
        <div className="flex items-center space-x-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
        </div>

        {/* Minimal Address Bar */}
        <div className="mx-3 flex-1 max-w-xs sm:max-w-md bg-white/80 rounded-[3px] py-1 px-3 text-[11px] text-[#7686AB] font-mono tracking-tight truncate text-center border border-white">
          {url.startsWith('http') ? url : `https://${url}`}
        </div>

        {/* Placeholder balance spacer */}
        <div className="w-8 shrink-0 hidden sm:block" />
      </div>

      {/* Screen Content */}
      <div className="relative w-full bg-[#F7FCFF] overflow-hidden">{children}</div>
    </div>
  );
};

export default BrowserMockup;
