import { describe, it, expect } from 'vitest';
import { calculateRecommendation } from '../src/lib/pathfinder';
import type { UserGoalId } from '../src/types/mahreen';

describe('calculateRecommendation (Pathfinder Engine)', () => {
  it('should recommend internship for "skill-portfolio"', () => {
    const rec = calculateRecommendation('skill-portfolio');

    expect(rec.pillarId).toBe('internship');
    expect(rec.pillarName).toBe('Mahreen Indonesia Internship');
    expect(rec.badge).toBe('Talent Development');
    expect(rec.availableRoles).toContain('Website Development');
    expect(rec.ctaTarget).toBe('batch2-modal');
    expect(rec.ctaType).toBe('modal');
    expect(rec.headline).toBeTruthy();
    expect(rec.whyRelevant).toBeTruthy();
    expect(rec.firstStep).toBeTruthy();
    expect(rec.ctaText).toBeTruthy();
  });

  it('should recommend tanya-mahreen for "business-growth"', () => {
    const rec = calculateRecommendation('business-growth');

    expect(rec.pillarId).toBe('tanya-mahreen');
    expect(rec.pillarName).toBe('Tanya Mahreen');
    expect(rec.badge).toBe('Digital & Business Solutions');
    expect(rec.ctaTarget).toBe('ecosystem-section');
    expect(rec.ctaType).toBe('scroll');
    expect(rec.availableRoles.length).toBeGreaterThan(0);
    expect(rec.headline).toBeTruthy();
    expect(rec.whyRelevant).toBeTruthy();
    expect(rec.firstStep).toBeTruthy();
    expect(rec.ctaText).toBeTruthy();
  });

  it('should recommend mahreen-studio for "creative-lifestyle"', () => {
    const rec = calculateRecommendation('creative-lifestyle');

    expect(rec.pillarId).toBe('mahreen-studio');
    expect(rec.pillarName).toBe('Mahreen Studio');
    expect(rec.badge).toBe('Creative Lifestyle & Atelier');
    expect(rec.ctaTarget).toBe('portfolio-section');
    expect(rec.ctaType).toBe('scroll');
    expect(rec.availableRoles.length).toBeGreaterThan(0);
    expect(rec.headline).toBeTruthy();
    expect(rec.whyRelevant).toBeTruthy();
    expect(rec.firstStep).toBeTruthy();
    expect(rec.ctaText).toBeTruthy();
  });

  it('should recommend peduli-mahreen for "social-impact"', () => {
    const rec = calculateRecommendation('social-impact');

    expect(rec.pillarId).toBe('peduli-mahreen');
    expect(rec.pillarName).toBe('Peduli Mahreen & CSR');
    expect(rec.badge).toBe('Social Movement & Sustainability');
    expect(rec.ctaTarget).toBe('ecosystem-section');
    expect(rec.ctaType).toBe('scroll');
    expect(rec.availableRoles.length).toBeGreaterThan(0);
    expect(rec.headline).toBeTruthy();
    expect(rec.whyRelevant).toBeTruthy();
    expect(rec.firstStep).toBeTruthy();
    expect(rec.ctaText).toBeTruthy();
  });

  it('should recommend mahreen-learning for "learning-cert"', () => {
    const rec = calculateRecommendation('learning-cert');

    expect(rec.pillarId).toBe('mahreen-learning');
    expect(rec.pillarName).toBe('Mahreen Learning');
    expect(rec.badge).toBe('Structured Education');
    expect(rec.ctaTarget).toBe('ecosystem-section');
    expect(rec.ctaType).toBe('scroll');
    expect(rec.availableRoles.length).toBeGreaterThan(0);
    expect(rec.headline).toBeTruthy();
    expect(rec.whyRelevant).toBeTruthy();
    expect(rec.firstStep).toBeTruthy();
    expect(rec.ctaText).toBeTruthy();
  });

  it('should return sensible default (internship recommendation) for invalid or unknown goalId', () => {
    const rec = calculateRecommendation('unknown-goal' as UserGoalId);

    expect(rec).toBeDefined();
    expect(rec.pillarId).toBe('internship');
    expect(rec.badge).toBe('Talent Development');
    expect(rec.ctaTarget).toBe('batch2-modal');
  });
});
