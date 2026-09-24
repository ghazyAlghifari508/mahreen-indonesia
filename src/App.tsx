import { useState } from 'react';
import { Compass, ShieldCheck, Building2, Layers } from 'lucide-react';
import { TopAnnouncementStrip } from './components/layout/TopAnnouncementStrip';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { Batch2DetailModal } from './components/modals/Batch2DetailModal';

export default function App() {
  const [isBatch2ModalOpen, setIsBatch2ModalOpen] = useState(false);

  const handleExplorePathfinder = () => {
    const el = document.getElementById('pathfinder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-midtrans-slate flex flex-col">
      {/* Top Announcement Strip */}
      <TopAnnouncementStrip onOpenBatch2Modal={() => setIsBatch2ModalOpen(true)} />

      {/* Navigation Header */}
      <Navbar onOpenBatch2Modal={() => setIsBatch2ModalOpen(true)} />

      {/* Main Content Showcase */}
      <main className="flex-1">
        {/* Section 02: Hero Section (Editorial Split & Value Proposition) */}
        <HeroSection
          onExplorePathfinder={handleExplorePathfinder}
          onOpenBatch2Modal={() => setIsBatch2ModalOpen(true)}
        />

        {/* Design System Verification Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-midtrans-slate">
                Midtrans Design System Verification
              </h2>
              <p className="text-sm text-midtrans-muted mt-2">
                Scaffolding & token test baseline conforming to Midtrans architectural specs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-midtrans-card">
                <div className="w-10 h-10 rounded-sm bg-midtrans-navy text-white flex items-center justify-center mb-4">
                  <Compass size={20} />
                </div>
                <h3 className="font-bold text-lg text-midtrans-slate mb-2">Micro-Radius Architecture</h3>
                <p className="text-sm text-midtrans-muted mb-4">
                  CTAs strictly enforce 2px corner radius for fintech-grade institutional precision.
                </p>
                <button className="btn-midtrans-primary w-full">Primary Action</button>
              </div>

              <div className="p-6 rounded-lg bg-midtrans-ice border border-blue-100 shadow-midtrans-card">
                <div className="w-10 h-10 rounded-sm bg-midtrans-blue text-white flex items-center justify-center mb-4">
                  <Layers size={20} />
                </div>
                <h3 className="font-bold text-lg text-midtrans-slate mb-2">Color Palette Tokens</h3>
                <p className="text-sm text-midtrans-muted mb-4">
                  Midnight Navy, Royal Cobalt, Electric Azure, Slate Navy, and Cool Mist.
                </p>
                <button className="btn-midtrans-outline w-full">Outline Action</button>
              </div>

              <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-midtrans-card">
                <div className="w-10 h-10 rounded-sm bg-emerald-600 text-white flex items-center justify-center mb-4">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="font-bold text-lg text-midtrans-slate mb-2">Strict Type Safety</h3>
                <p className="text-sm text-midtrans-muted mb-4">
                  Zero any types, strict null checks, and Google Fonts Poppins typography.
                </p>
                <div className="text-xs font-semibold text-emerald-600 bg-emerald-50 p-2.5 rounded text-center">
                  TypeScript 5.7+ Strict Ready
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Institutional Footer */}
      <footer className="bg-midtrans-navy text-white border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Building2 size={16} className="text-midtrans-azure" />
            <span className="font-semibold text-white">PT Mahreen Solusi Digital</span>
          </div>
          <p className="text-xs">SK Menkumham RI: AHU-0012345.AH.01.01.TAHUN 2026 | NIB: 1234567890123</p>
          <p className="text-xs mt-2 text-gray-500">© 2026 Mahreen Indonesia. Berkarya Untuk Indonesia.</p>
        </div>
      </footer>

      {/* Batch 2 Verification & Details Modal */}
      <Batch2DetailModal
        isOpen={isBatch2ModalOpen}
        onClose={() => setIsBatch2ModalOpen(false)}
      />
    </div>
  );
}
