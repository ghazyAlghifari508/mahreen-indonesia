import React, { useState } from 'react';
import { Menu01Icon, Cancel01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { Icon } from '../ui/Icon';

interface NavbarProps {
  currentRoute?: string;
  onNavigate?: (route: string) => void;
  onOpenBatch2Modal?: () => void;
  className?: string;
}

export const NAV_ITEMS = [
  { label: 'Beranda', route: '/' },
  { label: 'Tentang Mahreen', route: '/tentang' },
  { label: 'Internship Batch 2', route: '/internship' },
  { label: '5 Pilar Ekosistem', route: '/ekosistem' },
  { label: 'Portofolio & Karya', route: '/portofolio' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute = '/',
  onNavigate = () => {},
  onOpenBatch2Modal,
  className = '',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (route: string) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`row header bg-[#002855] text-white border-b border-white/10 fixed top-0 left-0 right-0 z-[1001] w-full ${className}`}
      itemScope
      itemType="http://www.schema.org/SiteNavigationElement"
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between h-[76px] px-4 sm:px-8 w-full">
        {/* Left Side: Brand Logo & Navigation */}
        <div className="left flex items-center gap-8">
          <a
            className="logos flex items-center py-1 cursor-pointer shrink-0"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/');
            }}
          >
            <img
              alt="Mahreen Indonesia"
              className="logo h-9 md:h-10 w-auto object-contain"
              src="/assets/mahreen-logo-384.webp"
            />
          </a>

          {/* Desktop Navigation Links with generous spacing */}
          <ul className="menu-nav hidden lg:flex items-center gap-6 xl:gap-8 font-poppins text-[14px]">
            {NAV_ITEMS.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <li
                  key={item.route}
                  className={`py-1 cursor-pointer transition-colors ${
                    isActive ? 'text-[#007FE7] font-semibold' : 'text-white/85 hover:text-[#007FE7]'
                  }`}
                >
                  <a
                    href={item.route}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.route);
                    }}
                    className={`block py-1 tracking-normal transition-colors ${
                      isActive ? 'text-[#007FE7]' : 'text-white/85 hover:text-[#007FE7]'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Side: Direct CTAs */}
        <div className="right flex items-center gap-4">
          <span className="btn-started inline-block">
            <a
              href="#daftar"
              onClick={(e) => {
                e.preventDefault();
                if (onOpenBatch2Modal) {
                  onOpenBatch2Modal();
                } else {
                  handleNavClick('/internship');
                }
              }}
              className="text-white bg-[#054FBF] hover:bg-[#002855] text-xs font-semibold px-5 py-2.5 rounded-full transition-all"
            >
              Mulai Berkarya
            </a>
          </span>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#007FE7] focus:outline-none cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          >
            <Icon icon={mobileMenuOpen ? Cancel01Icon : Menu01Icon} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="overlay overlay-slidedown mobile lg:hidden bg-[#002855] border-t border-white/10 px-6 py-6 transition-all duration-200">
          <ul className="menu-mobile flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.route}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.route)}
                  className={`w-full text-left text-base font-poppins py-2 cursor-pointer flex items-center justify-between ${
                    currentRoute === item.route
                      ? 'text-[#007FE7] font-semibold'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <Icon icon={ArrowRight01Icon} size={16} />
                </button>
              </li>
            ))}
          </ul>

          <div className="mobile-login pt-6 mt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#daftar"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                if (onOpenBatch2Modal) {
                  onOpenBatch2Modal();
                } else {
                  handleNavClick('/internship');
                }
              }}
              className="w-full text-center py-3 bg-[#054FBF] hover:bg-[#002855] text-white font-poppins font-semibold text-sm rounded-full transition-all"
            >
              Daftar Internship Batch 2
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
