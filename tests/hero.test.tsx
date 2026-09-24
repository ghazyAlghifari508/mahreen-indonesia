import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  HeroSection,
  TRANSFORMATION_STAGES,
  HERO_STATS,
} from '../src/components/sections/HeroSection';

/**
 * Traverses a React element tree recursively to locate a node matching predicate
 */
function findInTree(
  node: any,
  predicate: (node: any) => boolean
): any | null {
  if (!node || typeof node !== 'object') return null;
  if (predicate(node)) return node;
  if (node.props && node.props.children) {
    const children = Array.isArray(node.props.children)
      ? node.props.children
      : [node.props.children];
    for (const child of children) {
      const found = findInTree(child, predicate);
      if (found) return found;
    }
  }
  return null;
}

/**
 * Temporary mock React dispatcher to enable hook evaluation in node environment
 */
function withMockHooks<T>(
  callback: (getState: () => any, setState: (val: any) => void) => T,
  initialState = 0
): T {
  const internals = (React as any)
    .__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  const prevH = internals?.H;
  let state = initialState;
  const setState = (val: any) => {
    state = typeof val === 'function' ? val(state) : val;
  };

  try {
    if (internals) {
      internals.H = {
        useState: (init: any) => [
          state !== undefined ? state : init,
          (val: any) => setState(val),
        ],
      };
    }
    return callback(() => state, setState);
  } finally {
    if (internals) {
      internals.H = prevH;
    }
  }
}

describe('HeroSection Component Unit Tests (Task 6)', () => {
  describe('Editorial Split & Brand Positioning', () => {
    it('renders official challenge tagline "Satu Ide. Satu Karya. Satu Dampak."', () => {
      const html = renderToStaticMarkup(<HeroSection />);
      expect(html).toContain('Satu Ide. Satu Karya. Satu Dampak.');
      // Check for Poppins Bold H1 headline styling
      expect(html).toContain('text-[32px]');
      expect(html).toContain('lg:text-[44px]');
      expect(html).toContain('font-bold');
      expect(html).toContain('text-white');
    });

    it('renders campaign theme "BERKARYA UNTUK INDONESIA"', () => {
      const html = renderToStaticMarkup(<HeroSection />);
      expect(html).toContain('BERKARYA UNTUK INDONESIA');
      // Sourced from Azure badge token
      expect(html).toContain('bg-[#007FE7]');
      expect(html).toContain('rounded-[17px]');
    });

    it('renders verified human value proposition subheadline in Muted Ice color', () => {
      const html = renderToStaticMarkup(<HeroSection />);
      expect(html).toContain(
        'Ruang kolaboratif yang menghubungkan gagasan generasi muda dengan karya nyata.'
      );
      expect(html).toContain(
        'Melalui pengembangan talenta, solusi digital, studio kreatif, dan kontribusi sosial—kami hadir agar setiap ide tumbuh menjadi kebermanfaatan.'
      );
      expect(html).toContain('text-[#F7FCFF]/85');
    });

    it('encloses hero in full-width Midnight Navy dark shell with proper padding', () => {
      const html = renderToStaticMarkup(<HeroSection />);
      expect(html).toContain('bg-[#002855]');
      expect(html).toContain('text-white');
      expect(html).toContain('py-16');
      expect(html).toContain('md:py-24');
      expect(html).toContain('px-6');
      expect(html).toContain('md:px-12');
      expect(html).toContain('border-b');
      expect(html).toContain('border-white/10');
    });
  });

  describe('Call to Action (CTA) Buttons & Interactions', () => {
    it('renders primary CTA button with Royal Cobalt fill and 2px micro-radius', () => {
      const html = renderToStaticMarkup(<HeroSection />);
      expect(html).toContain('Temukan Ruangmu di Mahreen');
      expect(html).toContain('bg-[#054FBF]');
      expect(html).toContain('rounded-[2px]');
    });

    it('renders secondary CTA button with outline-light and 2px micro-radius', () => {
      const html = renderToStaticMarkup(<HeroSection />);
      expect(html).toContain('Pelajari Internship Batch 2');
      expect(html).toContain('rounded-[2px]');
      expect(html).toContain('border-white/40');
    });

    it('invokes onExplorePathfinder callback when primary CTA is clicked', () => {
      const onExplorePathfinder = vi.fn();
      withMockHooks(() => {
        const tree = HeroSection({ onExplorePathfinder });
        const btn = findInTree(
          tree,
          (n) =>
            n?.props?.children === 'Temukan Ruangmu di Mahreen' ||
            (Array.isArray(n?.props?.children) &&
              n.props.children.includes('Temukan Ruangmu di Mahreen'))
        );
        expect(btn).toBeDefined();
        expect(btn?.props?.onClick).toBeDefined();
        btn.props.onClick();
        expect(onExplorePathfinder).toHaveBeenCalledTimes(1);
      });
    });

    it('invokes onOpenBatch2Modal callback when secondary CTA is clicked', () => {
      const onOpenBatch2Modal = vi.fn();
      withMockHooks(() => {
        const tree = HeroSection({ onOpenBatch2Modal });
        const btn = findInTree(
          tree,
          (n) =>
            n?.props?.children === 'Pelajari Internship Batch 2' ||
            (Array.isArray(n?.props?.children) &&
              n.props.children.includes('Pelajari Internship Batch 2'))
        );
        expect(btn).toBeDefined();
        expect(btn?.props?.onClick).toBeDefined();
        btn.props.onClick();
        expect(onOpenBatch2Modal).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Interactive Transformation Preview Card & Stepper', () => {
    it('renders floating card with white background, 8px radius, and flyout shadow', () => {
      const html = renderToStaticMarkup(<HeroSection />);
      expect(html).toContain('bg-[#FFFFFF]');
      expect(html).toContain('rounded-[8px]');
      expect(html).toContain('shadow-[0px_1px_40px_rgba(0,0,0,0.1)]');
      expect(html).toContain('ALUR PERJALANAN TALENTA');
      expect(html).toContain('Ekosistem Terintegrasi');
    });

    it('renders all 3 required transformation stages with official copy', () => {
      const html = renderToStaticMarkup(<HeroSection />);
      expect(TRANSFORMATION_STAGES).toHaveLength(3);

      // Stage 1: IDE & GAGASAN
      expect(html).toContain('IDE &amp; GAGASAN');
      expect(html).toContain('Eksplorasi minat &amp; penajaman konsep awal');

      // Stage 2: KARYA NYATA
      expect(html).toContain('KARYA NYATA');
      expect(html).toContain('Produksi proyek klien &amp; bimbingan mentor praktisi');

      // Stage 3: DAMPAK BERMAKNA
      expect(html).toContain('DAMPAK BERMAKNA');
      expect(html).toContain('Kontribusi nyata bagi UMKM &amp; masyarakat Indonesia');
    });

    it('switches active stage when activeStage prop changes', () => {
      // Stage 0 active
      const html0 = renderToStaticMarkup(<HeroSection activeStage={0} />);
      expect(html0).toContain('FASE 01 • INKUBASI GAGASAN');
      expect(html0).toContain('50+ Mitra Kampus');
      expect(html0).toContain('Assessment Talenta &amp; MIOS Induction');

      // Stage 1 active
      const html1 = renderToStaticMarkup(<HeroSection activeStage={1} />);
      expect(html1).toContain('FASE 02 • PRODUKSI INDUSTRI');
      expect(html1).toContain('30% Profit Sharing');
      expect(html1).toContain('Web Modern, Branding &amp; Konten Video');

      // Stage 2 active
      const html2 = renderToStaticMarkup(<HeroSection activeStage={2} />);
      expect(html2).toContain('FASE 03 • DAMPAK KEBERMANFAATAN');
      expect(html2).toContain('100% Legalitas Resmi');
      expect(html2).toContain('100+ Proyek Selesai &amp; Wisuda Magang');
    });

    it('triggers onStageChange and updates state on stage button click and mouse enter', () => {
      const onStageChange = vi.fn();
      withMockHooks((getState) => {
        const tree = HeroSection({ onStageChange });

        // Click stage index 1 (KARYA NYATA)
        const stage1Btn = findInTree(
          tree,
          (n) => n?.props?.['data-stage-index'] === 1
        );
        expect(stage1Btn).toBeDefined();
        stage1Btn.props.onClick();
        expect(getState()).toBe(1);
        expect(onStageChange).toHaveBeenCalledWith(1);

        // Hover stage index 2 (DAMPAK BERMAKNA)
        const stage2Btn = findInTree(
          tree,
          (n) => n?.props?.['data-stage-index'] === 2
        );
        expect(stage2Btn).toBeDefined();
        stage2Btn.props.onMouseEnter();
        expect(getState()).toBe(2);
        expect(onStageChange).toHaveBeenCalledWith(2);
      }, 0);
    });
  });

  describe('Bottom Metric Ribbon', () => {
    it('renders all 4 verified high-contrast statistics with Electric Azure dots and white/10 divider', () => {
      const html = renderToStaticMarkup(<HeroSection />);
      expect(HERO_STATS).toHaveLength(4);

      // Stat 1
      expect(html).toContain('50+');
      expect(html).toContain('Mitra Kampus di Seluruh Indonesia');

      // Stat 2
      expect(html).toContain('5');
      expect(html).toContain('Pilar Ekosistem Terkoneksi');

      // Stat 3
      expect(html).toContain('12');
      expect(html).toContain('Batch Berjalan');

      // Stat 4
      expect(html).toContain('100%');
      expect(html).toContain('Terdaftar Resmi (SK Kemenkumham RI 2026)');

      // Divider & Azure token
      expect(html).toContain('border-white/10');
      expect(html).toContain('bg-[#007FE7]');
    });
  });
});
