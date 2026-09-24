import React from 'react';
import { 
  InstagramIcon, 
  Mail01Icon, 
  Call02Icon,
  ArrowUp01Icon 
} from '@hugeicons/core-free-icons';
import { Icon } from '../ui/Icon';
import { WaveDivider } from '../ui/WaveDivider';
import { ORGANIZATION_META } from '../../data/mahreenData';

interface FooterProps {
  onNavigate: (route: string) => void;
  onOpenBatch2Modal: () => void;
  onSelectPillar?: (pillarId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBatch2Modal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer relative bg-[#191E24] text-white pt-10 pb-12 font-poppins">
      <WaveDivider type="footer" />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="row upper-footer flex flex-col lg:flex-row justify-between gap-12 pb-12 border-b border-white/10">
          
          {/* Address & Organization Info */}
          <div id="newsletterBox" className="address-footer max-w-md space-y-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              className="inline-block cursor-pointer"
            >
              <img
                alt="Mahreen Indonesia"
                src="/assets/mahreen-logo-384.webp"
                className="h-10 w-auto object-contain"
              />
            </a>

            <h4 className="text-lg font-bold text-white tracking-tight">
              PT Mahreen Berkah Berdaya
            </h4>

            <p className="text-xs text-white/70 leading-relaxed space-y-1">
              <span className="block font-medium text-white/90">Ecosystem Navigator Indonesia</span>
              <span>{ORGANIZATION_META.officeAddress}</span>
              <br />
              <span>SK Kemenkumham: {ORGANIZATION_META.skKemenkumham}</span>
              <br />
              <span>NIB: {ORGANIZATION_META.nib} | HAKI ID: {ORGANIZATION_META.haki}</span>
            </p>

            <ul className="sosmed-footer flex items-center gap-3 pt-2">
              <li>
                <a
                  href="https://www.instagram.com/mahreenindonesia/"
                  target="_blank"
                  rel="noopener"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#007FE7] flex items-center justify-center text-white transition-colors"
                  aria-label="Instagram Resmi Mahreen Indonesia"
                >
                  <Icon icon={InstagramIcon} size={18} />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6289652647385"
                  target="_blank"
                  rel="noopener"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#007FE7] flex items-center justify-center text-white transition-colors"
                  aria-label="WhatsApp Official Mahreen"
                >
                  <Icon icon={Call02Icon} size={18} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mahreenindonesia.com"
                  target="_blank"
                  rel="noopener"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#007FE7] flex items-center justify-center text-white transition-colors"
                  aria-label="Email Resmi Mahreen"
                >
                  <Icon icon={Mail01Icon} size={18} />
                </a>
              </li>
            </ul>
          </div>

          {/* Menus Grid */}
          <div className="row menu-footer flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Column 1: Navigasi */}
            <ul className="space-y-2.5">
              <li>
                <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                  Navigasi
                </h4>
              </li>
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/');
                  }}
                  className="text-xs text-white/75 hover:text-[#007FE7] transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/tentang"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/tentang');
                  }}
                  className="text-xs text-white/75 hover:text-[#007FE7] transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="/internship"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/internship');
                  }}
                  className="text-xs text-white/75 hover:text-[#007FE7] transition-colors"
                >
                  Internship Batch 2
                </a>
              </li>
              <li>
                <a
                  href="/ekosistem"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/ekosistem');
                  }}
                  className="text-xs text-white/75 hover:text-[#007FE7] transition-colors"
                >
                  5 Pilar Ekosistem
                </a>
              </li>
              <li>
                <a
                  href="/portofolio"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/portofolio');
                  }}
                  className="text-xs text-white/75 hover:text-[#007FE7] transition-colors"
                >
                  Portofolio &amp; Karya
                </a>
              </li>
            </ul>

            {/* Column 2: 5 Pilar */}
            <ul className="space-y-2.5">
              <li>
                <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                  5 Pilar
                </h4>
              </li>
              <li>
                <a
                  href="/ekosistem"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/ekosistem');
                  }}
                  className="text-xs text-white/75 hover:text-[#007FE7] transition-colors"
                >
                  Mahreen Studio
                </a>
              </li>
              <li>
                <a
                  href="/internship"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/internship');
                  }}
                  className="text-xs text-white/75 hover:text-[#007FE7] transition-colors"
                >
                  Mahreen Internship
                </a>
              </li>
              <li>
                <a
                  href="/ekosistem"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/ekosistem');
                  }}
                  className="text-xs text-white/75 hover:text-[#007FE7] transition-colors"
                >
                  Tanya Mahreen
                </a>
              </li>
              <li>
                <a
                  href="/ekosistem"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/ekosistem');
                  }}
                  className="text-xs text-white/75 hover:text-[#007FE7] transition-colors"
                >
                  Mahreen CSR
                </a>
              </li>
              <li>
                <a
                  href="/ekosistem"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/ekosistem');
                  }}
                  className="text-xs text-white/75 hover:text-[#007FE7] transition-colors"
                >
                  Peduli Mahreen
                </a>
              </li>
            </ul>

            {/* Column 3: Karir & Magang */}
            <ul className="space-y-2.5">
              <li>
                <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                  Batch 2 Divisi
                </h4>
              </li>
              <li>
                <a
                  href="/internship"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/internship');
                  }}
                  className="text-xs text-white/75 hover:text-[#007FE7] transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="/internship"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/internship');
                  }}
                  className="text-xs text-white/75 hover:text-[#007FE7] transition-colors"
                >
                  Quality Assurance (QA)
                </a>
              </li>
              <li>
                <a
                  href="/internship"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/internship');
                  }}
                  className="text-xs text-white/75 hover:text-[#007FE7] transition-colors"
                >
                  Database Engineer
                </a>
              </li>
              <li>
                <a
                  href="/internship"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/internship');
                  }}
                  className="text-xs text-white/75 hover:text-[#007FE7] transition-colors"
                >
                  Product Design UI/UX
                </a>
              </li>
              <li>
                <a
                  href="/internship"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/internship');
                  }}
                  className="text-xs text-white/75 hover:text-[#007FE7] transition-colors"
                >
                  Talent Acquisition
                </a>
              </li>
            </ul>

            {/* Column 4: Kontak & Bantuan */}
            <ul className="space-y-2.5">
              <li>
                <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                  Bantuan &amp; Kontak
                </h4>
              </li>
              <li>
                <a
                  href="https://wa.me/6289652647385"
                  target="_blank"
                  rel="noopener"
                  className="text-xs text-white/75 hover:text-[#007FE7] transition-colors"
                >
                  Chat WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mahreenindonesia.com"
                  target="_blank"
                  rel="noopener"
                  className="text-xs text-white/75 hover:text-[#007FE7] transition-colors"
                >
                  info@mahreenindonesia.com
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenBatch2Modal}
                  className="text-xs text-[#007FE7] hover:underline cursor-pointer font-medium"
                >
                  Daftar Online Batch 2
                </button>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white cursor-pointer bg-white/10 px-3 py-1.5 rounded-full"
                >
                  <Icon icon={ArrowUp01Icon} size={14} />
                  <span>Kembali ke Atas</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Entity Row */}
        <div className="row copyright flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-white/60 gap-4">
          <div className="left flex items-center gap-2">
            <span className="gojek-logo">
              bagian dari ekosistem <strong className="text-white">PT Mahreen Berkah Berdaya</strong>
            </span>
          </div>
          <div className="right">
            <h4>© 2026 PT Mahreen Berkah Berdaya. Hak Cipta Dilindungi Undang-Undang.</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
