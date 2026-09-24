/**
 * Mahreen Indonesia Ecosystem Domain Types & Contracts
 * 
 * Sourced from official Mahreen Indonesia Handbooks, Legal Documentation,
 * and Internship Batch 2 Master Specifications.
 */

export interface HighlightMetric {
  label: string;
  value: string;
}

export interface Pillar {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  highlightMetrics: HighlightMetric[];
  servicesOrFeatures: string[];
  startingPrice?: string;
  ctaText: string;
  ctaAction: string;
  badge: string;
  logoUrl?: string;
}

export type ProjectCategory =
  | 'Website'
  | 'Branding'
  | 'Social Impact'
  | 'Internship'
  | 'Sustainability';

export interface ProjectItem {
  id: string;
  title: string;
  pillar: string;
  category: ProjectCategory;
  year: string;
  description: string;
  image: string;
  tags: string[];
  deliverables?: string[];
  clientOrBeneficiary?: string;
}

export interface AlumniAwardee {
  name: string;
  role: string;
  award: string;
  citation: string;
  division: string;
  avatar?: string;
}

export type UserGoalId =
  | 'skill-portfolio'
  | 'business-growth'
  | 'creative-lifestyle'
  | 'social-impact'
  | 'learning-cert';

export interface PathfinderOption {
  id: UserGoalId;
  label: string;
  iconName: string;
  description: string;
  targetPersona: string;
}

export interface PathfinderRecommendation {
  pillarId: string;
  pillarName: string;
  badge: string;
  headline: string;
  whyRelevant: string;
  availableRoles: string[];
  firstStep: string;
  ctaText: string;
  ctaType: 'modal' | 'scroll' | 'external';
  ctaTarget: string;
}

export type InternshipPhase = 'ADAPT' | 'CREATE' | 'DELIVER' | 'IMPACT';

export interface InternshipMonth {
  monthNumber: number;
  monthName: string;
  phase: InternshipPhase;
  title: string;
  focusDescription: string;
  flagshipProgram: string;
  keyOutputs: string[];
}

export interface VisionMission {
  vision: string;
  missions: string[];
}

export interface LegalRecord {
  title: string;
  identifier: string;
  label: string;
  description: string;
}

export type CampusCategory =
  | 'Universitas'
  | 'Institut'
  | 'Politeknik'
  | 'Lembaga Mitra';

export interface CampusPartner {
  name: string;
  abbreviation?: string;
  category: CampusCategory;
  location?: string;
  logoUrl?: string;
}

export interface MahreenLearningProgram {
  id: string;
  title: string;
  type: 'Bootcamp' | 'Workshop' | 'Sertifikasi';
  duration: string;
  format: string;
  description: string;
  curriculum: string[];
  badge: string;
}

export interface InternshipDivision {
  id: string;
  name: string;
  description: string;
  keyOutputs: string[];
  skillsGained: string[];
}

export interface WeeklyScheduleDay {
  day: string;
  phase: string;
  description: string;
}

export interface Batch2Details {
  title: string;
  batchNumber: number;
  period: string;
  workSystem: string;
  commitment: string;
  feeScheme: string;
  weeklyOperatingSystem: WeeklyScheduleDay[];
  divisions: InternshipDivision[];
  journeyPhases: InternshipMonth[];
}
