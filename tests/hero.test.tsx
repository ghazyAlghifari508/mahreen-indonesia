import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { HeroSection } from '../src/components/sections/HeroSection';

describe('HeroSection Component Tests', () => {
  it('renders official challenge headline "Satu Ide. Satu Karya. Satu Dampak."', () => {
    const html = renderToStaticMarkup(<HeroSection />);
    expect(html).toContain('Satu Ide. Satu Karya.');
    expect(html).toContain('Satu Dampak.');
  });

  it('renders campaign theme "BERKARYA UNTUK INDONESIA"', () => {
    const html = renderToStaticMarkup(<HeroSection />);
    expect(html).toContain('BERKARYA UNTUK INDONESIA');
    expect(html).toContain('text-[#007FE7]');
  });

  it('renders primary CTA button with btn-started class', () => {
    const html = renderToStaticMarkup(<HeroSection />);
    expect(html).toContain('Mulai Eksplorasi');
    expect(html).toContain('btn-started');
  });

  it('renders secondary CTA button with btn-sales class', () => {
    const html = renderToStaticMarkup(<HeroSection />);
    expect(html).toContain('Pelajari Ruang Kolaborasi');
    expect(html).toContain('btn-sales');
  });

  it('renders verified statistics and credentials', () => {
    const html = renderToStaticMarkup(<HeroSection />);
    expect(html).toContain('SK Kemenkumham RI 2026');
    expect(html).toContain('50+ Mitra Kampus Terhubung');
    expect(html).toContain('Ekosistem Terintegrasi');
  });

  it('renders authentic team photo', () => {
    const html = renderToStaticMarkup(<HeroSection />);
    expect(html).toContain('/assets/team-meeting.webp');
    expect(html).toContain('Sesi Kolaborasi Tim Mahreen Indonesia');
  });
});
