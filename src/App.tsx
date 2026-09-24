import { useState } from 'react';
import { Compass, ShieldCheck, Building2, Layers } from 'lucide-react';
import { TopAnnouncementStrip } from './components/layout/TopAnnouncementStrip';
import { Navbar } from './components/layout/Navbar';
import { Batch2DetailModal } from './components/modals/Batch2DetailModal';

export default function App() {
  const [isBatch2ModalOpen, setIsBatch2ModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-midtrans-slate flex flex-col">
      {/* Top Announcement Strip */}
      <TopAnnouncementStrip onOpenBatch2Modal={() => setIsBatch2ModalOpen(true)} />

      {/* Navigation Header */}
      <Navbar onOpenBatch2Modal={() => setIsBatch2ModalOpen(true)} />

      {/* Main Content Showcase */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-midtrans-navy text-white py-20 lg:py-28 relative overflow-hidden border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-midtrans-azure border border-white/15 text-xs font-semibold uppercase tracking-wider rounded-[2px]">
                  #FromLearningtoRealImpact
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  BERKARYA UNTUK INDONESIA
                </h1>
                <p className="text-xl font-medium text-midtrans-azure">
                  Satu Ide. Satu Karya. Satu Dampak.
                </p>
                <p className="text-base text-gray-300 max-w-2xl leading-relaxed">
                  Ekosistem kolaboratif yang menghubungkan potensi generasi muda Indonesia dengan proyek industri nyata, solusi transformasi digital, ekspresi kreatif, dan pemberdayaan sosial.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button className="btn-midtrans-primary">
                    Temukan Ruangmu
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsBatch2ModalOpen(true)}
                    className="btn-midtrans-outline-light"
                  >
                    Pelajari Internship
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-white rounded-lg p-6 text-midtrans-slate shadow-midtrans-flyout border border-white/20">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-midtrans-muted">Transformation Cycle</span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Verified
                    </span>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="p-3 bg-midtrans-ice border border-blue-100 rounded-md">
                      <div className="text-xs font-bold text-midtrans-blue uppercase">01. Eksplorasi Ide</div>
                      <div className="text-sm font-semibold text-midtrans-slate mt-0.5">Pemetaan Minat & Talenta</div>
                    </div>
                    <div className="p-3 bg-midtrans-mist border border-gray-200 rounded-md">
                      <div className="text-xs font-bold text-midtrans-blue uppercase">02. Eksekusi Karya</div>
                      <div className="text-sm font-semibold text-midtrans-slate mt-0.5">Proyek Riil & Mentoring Industri</div>
                    </div>
                    <div className="p-3 bg-white border-2 border-midtrans-blue rounded-md shadow-sm">
                      <div className="text-xs font-bold text-midtrans-blue uppercase">03. Real Impact</div>
                      <div className="text-sm font-semibold text-midtrans-slate mt-0.5">Portofolio Teruji & Dampak Sosial</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Verified Stats Strip */}
        <section className="bg-midtrans-ice border-b border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-midtrans-slate">50+</div>
                <div className="text-xs text-midtrans-muted mt-1 uppercase font-semibold">Mitra Kampus Nasional</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-midtrans-slate">5</div>
                <div className="text-xs text-midtrans-muted mt-1 uppercase font-semibold">Pilar Ekosistem Terpadu</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-midtrans-slate">12</div>
                <div className="text-xs text-midtrans-muted mt-1 uppercase font-semibold">Batch Perjalanan Teruji</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-midtrans-blue">100%</div>
                <div className="text-xs text-midtrans-muted mt-1 uppercase font-semibold">Resmi SK Kemenkumham RI</div>
              </div>
            </div>
          </div>
        </section>

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
