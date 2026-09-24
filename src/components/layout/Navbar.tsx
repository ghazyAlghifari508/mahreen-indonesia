import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export interface NavbarProps {
  onOpenBatch2Modal: () => void;
  className?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Ekosistem', href: '#ecosystem' },
  { label: 'Temukan Ruangmu', href: '#pathfinder' },
  { label: 'Perjalanan Magang', href: '#journey' },
  { label: 'Portofolio', href: '#portfolio' },
  { label: 'Legalitas', href: '#legalitas' },
];

/**
 * Midtrans-compliant Enterprise Header Navigation Shell (Component #4)
 *
 * Visual specifications:
 * - Solid Midnight Navy background (`#002855`), non-transparent, zero border-bottom or subtle hairline
 * - Fixed/Sticky 76px height (`h-[76px]`)
 * - Mahreen Indonesia logo branding: clean geometric vector mark and typography "MAHREEN INDONESIA" with subtitle "Ecosystem"
 * - Navigation links in Poppins-Medium 15px/16px white, hover state smoothly transitions to Electric Azure (`#007FE7`) in 150ms
 * - Right-aligned conversion CTA: Button "Daftar Internship" with Royal Cobalt fill (`#054FBF`), 2px micro-radius, triggering onOpenBatch2Modal()
 * - Responsive mobile drawer with hamburger toggle and Midnight Navy dropdown
 */
export const Navbar: React.FC<NavbarProps> = ({ onOpenBatch2Modal, className = '' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleCtaClick = () => {
    closeMobileMenu();
    onOpenBatch2Modal();
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-[#002855] border-b border-white/10 shadow-[0_2px_12px_rgba(0,40,85,0.25)] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px]">
          {/* Brand Logo & Typography */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#007FE7] rounded-sm select-none"
            aria-label="Mahreen Indonesia - Beranda"
          >
            {/* Geometric Vector Mark */}
            <div className="w-10 h-10 rounded-[2px] bg-[#054FBF] flex items-center justify-center border border-white/20 shadow-sm shrink-0 transition-transform duration-200 group-hover:scale-105">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 18V6L12 12.5L20 6V18"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12.5" r="2.2" fill="#007FE7" stroke="#FFFFFF" strokeWidth="1.2" />
                <circle cx="4" cy="6" r="1.5" fill="#007FE7" />
                <circle cx="20" cy="6" r="1.5" fill="#007FE7" />
              </svg>
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col text-left">
              <span className="font-poppins font-bold text-white text-[16px] sm:text-[17px] tracking-wide leading-tight group-hover:text-white/90 transition-colors">
                MAHREEN INDONESIA
              </span>
              <span className="font-poppins font-medium text-[#007FE7] text-[10px] sm:text-[11px] tracking-[0.22em] uppercase leading-none mt-1">
                Ecosystem
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden lg:flex items-center gap-7 xl:gap-8 font-poppins font-medium text-[15px]"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-[#007FE7] transition-colors duration-150 py-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007FE7] rounded-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Conversion CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Primary Conversion CTA */}
            <Button
              variant="primary"
              size="md"
              onClick={handleCtaClick}
              className="hidden sm:inline-flex shadow-sm hover:shadow-[0_6px_16px_rgba(5,79,191,0.35)]"
            >
              Daftar Internship
            </Button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 text-white hover:text-[#007FE7] hover:bg-white/10 rounded-[2px] transition-colors focus-visible:outline-2 focus-visible:outline-[#007FE7]"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-label="Menu Navigasi Mobile"
          className="lg:hidden bg-[#002855] border-t border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150 shadow-2xl"
        >
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="block px-3 py-2.5 rounded-[2px] text-white hover:text-[#007FE7] hover:bg-white/5 font-poppins font-medium text-[15px] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10">
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={handleCtaClick}
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="justify-between"
            >
              Daftar Internship
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
