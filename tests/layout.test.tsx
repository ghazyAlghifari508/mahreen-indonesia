import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { TopAnnouncementStrip } from '../src/components/layout/TopAnnouncementStrip';
import { Navbar } from '../src/components/layout/Navbar';

describe('Layout Components Unit Tests', () => {
  describe('TopAnnouncementStrip Component', () => {
    it('renders solid Electric Azure edge-to-edge container with zero border-radius', () => {
      const html = renderToStaticMarkup(
        <TopAnnouncementStrip onOpenBatch2Modal={() => {}} />
      );
      expect(html).toContain('bg-[#007FE7]');
      expect(html).toContain('rounded-none');
    });

    it('renders official ecosystem information text', () => {
      const html = renderToStaticMarkup(
        <TopAnnouncementStrip onOpenBatch2Modal={() => {}} />
      );
      expect(html).toContain('OFFICIAL ECOSYSTEM');
      expect(html).toContain('Selamat Datang di Mahreen Indonesia');
    });

    it('renders accessible dismiss button when dismissible is true', () => {
      const html = renderToStaticMarkup(
        <TopAnnouncementStrip dismissible onOpenBatch2Modal={() => {}} />
      );
      expect(html).toContain('aria-label="Tutup pengumuman"');
    });
  });

  describe('Navbar Component', () => {
    it('renders Midnight Navy solid background and 76px height', () => {
      const html = renderToStaticMarkup(<Navbar onOpenBatch2Modal={() => {}} />);
      expect(html).toContain('bg-[#002855]');
      expect(html).toContain('h-[76px]');
    });

    it('renders Mahreen Indonesia branding with pure transparent logo asset', () => {
      const html = renderToStaticMarkup(<Navbar onOpenBatch2Modal={() => {}} />);
      expect(html).toContain('/assets/mahreen-logo-384.webp');
      expect(html).toContain('alt="Mahreen Indonesia"');
    });

    it('renders primary conversion CTA button with btn-started class', () => {
      const html = renderToStaticMarkup(<Navbar onOpenBatch2Modal={() => {}} />);
      expect(html).toContain('Mulai Berkarya');
      expect(html).toContain('btn-started');
    });
  });
});
