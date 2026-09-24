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
  });

  it('renders verified statistics and credentials', () => {
    const html = renderToStaticMarkup(<HeroSection />);
    expect(html).toContain('SK Kemenkumham RI 2026');
    expect(html).toContain('50+ Mitra Kampus Terhubung');
    expect(html).toContain('Profit Sharing 30% Terverifikasi');
  });

  it('renders organic curved wave divider at bottom', () => {
    const html = renderToStaticMarkup(<HeroSection />);
    expect(html).toContain('d="M0,45 C320,90 1120,90 1440,45 L1440,90 L0,90 Z"');
  });

  it('renders authentic team photo', () => {
    const html = renderToStaticMarkup(<HeroSection />);
    expect(html).toContain('/assets/team-meeting.webp');
    expect(html).toContain('Sesi Kolaborasi Tim Mahreen Indonesia');
  });
});
