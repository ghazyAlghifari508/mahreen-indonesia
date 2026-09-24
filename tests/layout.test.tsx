import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { TopAnnouncementStrip } from '../src/components/layout/TopAnnouncementStrip';
import { Navbar, NAV_ITEMS } from '../src/components/layout/Navbar';

describe('Layout Components Unit Tests (Task 5)', () => {
  describe('TopAnnouncementStrip Component', () => {
    it('renders solid Electric Azure edge-to-edge container with zero border-radius', () => {
      const html = renderToStaticMarkup(
        <TopAnnouncementStrip onOpenBatch2Modal={() => {}} />
      );
      expect(html).toContain('bg-[#007FE7]');
      expect(html).toContain('rounded-none');
      expect(html).toContain('role="region"');
    });

    it('renders BATCH 2 badge and verified campaign informational text', () => {
      const html = renderToStaticMarkup(
        <TopAnnouncementStrip onOpenBatch2Modal={() => {}} />
      );
      expect(html).toContain('BATCH 2');
      expect(html).toContain(
        'Pendaftaran Mahreen Indonesia Internship Batch 2 Resmi Dibuka (1 Okt 2026 – 31 Jan 2027) — Remote (WFH/WFA)'
      );
    });

    it('renders action link to inspect details and requirements', () => {
      const html = renderToStaticMarkup(
        <TopAnnouncementStrip onOpenBatch2Modal={() => {}} />
      );
      expect(html).toContain('Pelajari Detail &amp; Syarat');
    });

    it('renders accessible dismiss button when dismissible is true', () => {
      const html = renderToStaticMarkup(
        <TopAnnouncementStrip onOpenBatch2Modal={() => {}} dismissible={true} />
      );
      expect(html).toContain('aria-label="Tutup pengumuman"');
    });

    it('omits dismiss button when dismissible is false', () => {
      const html = renderToStaticMarkup(
        <TopAnnouncementStrip onOpenBatch2Modal={() => {}} dismissible={false} />
      );
      expect(html).not.toContain('aria-label="Tutup pengumuman"');
    });
  });

  describe('Navbar Component', () => {
    it('renders Midnight Navy solid background and 76px height', () => {
      const html = renderToStaticMarkup(<Navbar onOpenBatch2Modal={() => {}} />);
      expect(html).toContain('bg-[#002855]');
      expect(html).toContain('h-[76px]');
    });

    it('renders Mahreen Indonesia branding with official logo asset', () => {
      const html = renderToStaticMarkup(<Navbar onOpenBatch2Modal={() => {}} />);
      expect(html).toContain('/assets/mahreen-logo-192.webp');
      expect(html).toContain('alt="Mahreen Indonesia"');
    });

    it('renders all 5 verified navigation items with correct hash anchors', () => {
      const html = renderToStaticMarkup(<Navbar onOpenBatch2Modal={() => {}} />);
      expect(NAV_ITEMS).toHaveLength(5);

      expect(html).toContain('href="#ecosystem"');
      expect(html).toContain('Ekosistem');

      expect(html).toContain('href="#pathfinder"');
      expect(html).toContain('Temukan Ruangmu');

      expect(html).toContain('href="#journey"');
      expect(html).toContain('Perjalanan Magang');

      expect(html).toContain('href="#portfolio"');
      expect(html).toContain('Portofolio');

      expect(html).toContain('href="#legalitas"');
      expect(html).toContain('Legalitas');
    });

    it('renders primary conversion CTA button with 2px micro-radius and Royal Cobalt fill', () => {
      const html = renderToStaticMarkup(<Navbar onOpenBatch2Modal={() => {}} />);
      expect(html).toContain('Daftar Internship');
      expect(html).toContain('rounded-[2px]');
      expect(html).toContain('bg-[#054FBF]');
    });

    it('renders mobile hamburger toggle button with accessible aria attributes', () => {
      const html = renderToStaticMarkup(<Navbar onOpenBatch2Modal={() => {}} />);
      expect(html).toContain('aria-label="Buka navigasi"');
      expect(html).toContain('aria-expanded="false"');
    });
  });
});
