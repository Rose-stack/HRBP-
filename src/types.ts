export interface ServicePillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  includedItems: string[];
  deliverables: string[];
  idealFor: string;
  turnaround?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientSector: string;
  clientType: string;
  organizationSize: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  results: {
    metric: string;
    label: string;
  }[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  sector: string;
  content: string;
  rating: number;
  highlight: string;
}

export interface ValuePillar {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface EngagementTier {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  features: string[];
  timeline: string;
  recommendedFor: string;
  isPopular?: boolean;
}

export interface LeadInquiry {
  id: string;
  timestamp: string;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  companySize: string;
  sector: string;
  serviceInterest: string;
  engagementModel: string;
  message: string;
  status: 'new' | 'contacted' | 'scheduled';
}

export interface AuditQuestion {
  id: string;
  question: string;
  category: 'contracts' | 'payroll' | 'policy' | 'disciplinary';
  riskDescription: string;
  lawReference: string;
}

export type DesignThemeId = 'executive' | 'panafrican' | 'modern-slate' | 'emerald';
export type HeroLayoutId = 'split' | 'centered' | 'matrix';
export type RadiusStyle = 'modern' | 'sharp' | 'soft';
export type UiLayoutMode = 'classic-web' | 'portal-dashboard' | 'pitch-deck' | 'bento-showcase' | 'consulting-dossier';

export interface UiLayoutOption {
  id: UiLayoutMode;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  iconName: string;
  idealFor: string;
}

export interface DesignThemeConfig {
  id: DesignThemeId;
  name: string;
  tagline: string;
  description: string;
  bestSuitedFor: string;
  fontDisplay: string; // CSS font class
  fontFamilyLabel: string;
  palette: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    highlight: string;
    dots: string[];
  };
  classes: {
    heroBg: string;
    accentText: string;
    accentBg: string;
    accentBorder: string;
    badge: string;
    primaryButton: string;
    secondaryButton: string;
    navBg: string;
    cardBorderHover: string;
    statGlow: string;
  };
}
