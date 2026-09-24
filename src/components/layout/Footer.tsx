import React from 'react';
import { 
  Instagram, 
  Youtube, 
  Mail, 
  ExternalLink, 
  ArrowUp
} from 'lucide-react';
import { PILLARS_DATA } from '../../data/mahreenData';

interface FooterProps {
  onOpenBatch2Modal: () => void;
  onSelectPillar: (pillarId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBatch2Modal,
  onSelectPillar,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-midtrans-navy text-white pt-16 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info (2 Columns on large) */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/assets/mahreen-logo-192.webp" 
                alt="Mahreen Indonesia" 
                className="h-10 w-auto object-contain brightness-0 invert opacity-95" 
              />
            </div>
            <p className="text-xs text-midtrans-ice/70 leading-relaxed mb-4 max-w-sm">
              Ekosistem kreatif yang memberdayakan bisnis, mahasiswa, talenta muda, komunitas, 
              dan organisasi melalui kreativitas, teknologi digital, pendidikan, dan aksi sosial bermakna.
            </p>
            <div className="text-[11px] text-midtrans-ice/60 space-y-1">
              <div><strong>Badan Hukum:</strong> PT Mahreen Indonesia Group</div>
              <div><strong>Keputusan Menkumham RI:</strong> AHU-A089408.AH.01.30.Tahun 2026</div>
              <div><strong>NIB:</strong> 1203260152054 | <strong>HAKI:</strong> 001180040</div>
              <div><strong>Kantor:</strong> Cimahi, Jawa Barat, Indonesia</div>
            </div>
          </div>

          {/* 5 Pillars Directory */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              5 Pilar Ekosistem
            </h4>
            <ul className="space-y-2.5 text-xs text-midtrans-ice/75">
              {PILLARS_DATA.map((pillar) => (
                <li key={pillar.id}>
                  <button
                    onClick={() => {
                      const el = document.getElementById('ecosystem');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      onSelectPillar(pillar.id);
                    }}
                    className="hover:text-midtrans-azure transition-colors text-left"
                  >
                    {pillar.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('ecosystem');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-midtrans-azure transition-colors text-left"
                >
                  Mahreen Learning
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-xs text-midtrans-ice/75">
              <li>
                <a href="#pathfinder" className="hover:text-midtrans-azure transition-colors">
                  Temukan Ruangmu
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-midtrans-azure transition-colors">
                  Perjalanan Internship (Batch 2)
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-midtrans-azure transition-colors">
                  Portofolio & Hall of Fame
                </a>
              </li>
              <li>
                <a href="#legalitas" className="hover:text-midtrans-azure transition-colors">
                  Legalitas & Mitra Kampus
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenBatch2Modal}
                  className="hover:text-midtrans-azure transition-colors text-left font-semibold text-midtrans-azure"
                >
                  Pedoman & Syarat Magang →
                </button>
              </li>
            </ul>
          </div>

          {/* Official Campaign & Social Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Kampanye & Media Resmi
            </h4>
            <ul className="space-y-2.5 text-xs text-midtrans-ice/75 mb-6">
              <li>
                <a 
                  href="https://canva.link/vp26f672ldxojgs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-midtrans-azure transition-colors flex items-center"
                >
                  Template Logo Canva <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://twb.nz/miinternshipb2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-midtrans-azure transition-colors flex items-center"
                >
                  Twibbon Resmi Batch 2 <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://bit.ly/FormTaskMII2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-midtrans-azure transition-colors flex items-center text-amber-300 font-semibold"
                >
                  Form Pengumpulan Task <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/mahreenindonesia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-midtrans-blue text-white transition-colors"
                aria-label="Instagram @mahreenindonesia"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com/@officialmahreenindonesia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-midtrans-blue text-white transition-colors"
                aria-label="YouTube Official Mahreen Indonesia"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="mailto:info@mahreenindonesia.com" 
                className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-midtrans-blue text-white transition-colors"
                aria-label="Email Mahreen Indonesia"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-midtrans-ice/60 gap-4">
          <div>
            © 2026 PT Mahreen Indonesia Group. Seluruh hak cipta dilindungi undang-undang.
          </div>
          <div className="flex items-center space-x-4">
            <span>Satu Ide. Satu Karya. Satu Dampak.</span>
            <button 
              onClick={scrollToTop}
              className="p-2 rounded bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
