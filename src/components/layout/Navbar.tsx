import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBatch2Modal?: () => void;
  className?: string;
}

const NAV_ITEMS = [
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Ruang Berkarya', href: '#ruang-berkarya' },
  { label: 'Solusi Talenta', href: '#solusi-talenta' },
  { label: 'Karya Nyata', href: '#karya-nyata' },
  { label: 'Legalitas', href: '#legalitas' },
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBatch2Modal,
  className = '',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#002855] border-b border-white/10 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px]">
          {/* Pure Logo (Zero Box, Zero Border, Transparent PNG) */}
          <a
            href="#"
            className="flex items-center py-2 focus:outline-none"
            aria-label="Mahreen Indonesia - Beranda"
          >
            <img
              src="/assets/mahreen-logo-384.webp"
              alt="Mahreen Indonesia"
              className="h-10 md:h-11 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden lg:flex items-center gap-8 font-poppins font-medium text-[15px]"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-[#007FE7] transition-colors py-1.5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Midtrans-style CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center space-x-2 text-xs font-semibold text-white/80 border-r border-white/20 pr-4">
              <span className="text-[#007FE7]">ID</span>
              <span className="text-white/40">|</span>
              <span className="text-white/60">EN</span>
            </div>

            <button
              onClick={onOpenBatch2Modal}
              className="btn-started hidden sm:inline-flex"
            >
              Mulai Berkarya
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
              className="lg:hidden p-2 text-white hover:text-[#007FE7] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#002855] border-t border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 font-poppins text-[15px]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#007FE7] py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBatch2Modal?.();
              }}
              className="btn-started w-full justify-center"
            >
              <span>Mulai Berkarya</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
