import React from 'react';
import { Shield02Icon, UserGroupIcon, Briefcase02Icon } from '@hugeicons/core-free-icons';
import { Icon } from '../ui/Icon';

export interface HeroSectionProps {
  onExplorePathfinder?: () => void;
  onOpenBatch2Modal?: () => void;
  onNavigate?: (route: string) => void;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePathfinder,
  onOpenBatch2Modal,
  onNavigate,
  className = '',
}) => {
  return (
    <div className={`row banner-home relative overflow-hidden bg-[#002855] text-white pt-28 lg:pt-32 pb-64 sm:pb-72 lg:pb-80 ${className}`}>
      {/* Decorative Floating Capsule from Midtrans Asset Set */}
      <img
        src="/assets/capsule1.png"
        alt=""
        className="capsule-1 pointer-events-none absolute right-8 top-16 opacity-30 select-none hidden lg:block z-0"
        aria-hidden="true"
      />

      <div className="container max-w-7xl mx-auto px-4 sm:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Authentic Midtrans .content-banner Structure */}
        <div className="content-banner lg:col-span-7 z-20 text-white space-y-7">
          {/* H1 Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-poppins">
            Satu Ide. Satu Karya. <br className="hidden sm:inline" />
            Satu Dampak.
          </h1>

          {/* Editorial Copy */}
          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-poppins max-w-xl">
            Mahreen Indonesia adalah ekosistem kreatif, digital, dan sosial yang mewadahi generasi muda 
            untuk mentransformasi gagasan menjadi karya profesional dan kebermanfaatan nyata bagi masyarakat.
          </p>

          {/* Generous Spacing for Action Buttons */}
          <div className="flex flex-wrap items-center gap-5 pt-2 pb-2">
            <span className="btn-started inline-block">
              <a
                href="#mulai"
                onClick={(e) => {
                  e.preventDefault();
                  if (onExplorePathfinder) {
                    onExplorePathfinder();
                  } else if (onOpenBatch2Modal) {
                    onOpenBatch2Modal();
                  }
                }}
                className="cursor-pointer text-white bg-[#054FBF] hover:bg-[#002855] text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg inline-block"
              >
                Mulai Eksplorasi
              </a>
            </span>

            <span className="btn-sales inline-block">
              <a
                href="/tentang"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) {
                    onNavigate('/tentang');
                  }
                }}
                className="cursor-pointer text-white hover:text-[#002855] hover:bg-white text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full border border-white/40 transition-all inline-block"
              >
                Pelajari Ruang Kolaborasi
              </a>
            </span>
          </div>

          {/* Verified Statistics and Credentials Badge Strip */}
          <div className="banner-stats flex flex-wrap items-center gap-5 sm:gap-8 pt-8 border-t border-white/15 text-xs sm:text-sm text-white/80 font-poppins">
            <div className="flex items-center gap-2.5">
              <Icon icon={Shield02Icon} size={18} className="text-[#007FE7]" />
              <span className="font-medium">SK Kemenkumham RI 2026</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Icon icon={UserGroupIcon} size={18} className="text-[#007FE7]" />
              <span className="font-medium">50+ Mitra Kampus Terhubung</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Icon icon={Briefcase02Icon} size={18} className="text-[#007FE7]" />
              <span className="font-medium">Ekosistem Terintegrasi</span>
            </div>
          </div>
        </div>

        {/* Right Column: Authentic Mahreen Visual Showcase (Lancip & Clean) */}
        <div className="grid-img-banner lg:col-span-5 relative z-10 flex justify-center">
          <div className="relative w-full max-w-lg border border-white/20 shadow-2xl bg-[#001D3D] overflow-hidden">
            <img
              src="/assets/future-build.webp"
              alt="Kolaborasi Tim Mahreen Indonesia"
              className="w-full h-auto max-h-[380px] object-cover"
              fetchPriority="high"
            />
            <div className="p-3 bg-[#001D3D]/90 border-t border-white/10 flex items-center justify-between text-xs text-white/80">
              <span className="font-semibold text-[#007FE7]">#BerkaryaUntukIndonesia</span>
              <span>Inkubasi Talenta &amp; Solusi Digital</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
