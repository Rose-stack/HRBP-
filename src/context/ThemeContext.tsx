import React, { createContext, useContext, useState, useEffect } from 'react';
import { DesignThemeConfig, DesignThemeId, HeroLayoutId, RadiusStyle, UiLayoutMode, UiLayoutOption } from '../types';

export const UI_LAYOUT_OPTIONS: UiLayoutOption[] = [
  {
    id: 'classic-web',
    name: 'Corporate Web Experience',
    tagline: 'Full-Scroll Strategic Journey',
    description: 'Traditional premier executive website flow with sticky navigation, deep narrative sections, trust badges, interactive calculators, and full footer.',
    badge: 'Standard Flow',
    iconName: 'Globe',
    idealFor: 'Prospective clients, investors, general public research',
  },
  {
    id: 'portal-dashboard',
    name: 'Enterprise Client Portal',
    tagline: 'App-Style Management Console',
    description: 'High-productivity workspace with persistent left navigation rail, interactive service catalogues, statutory compliance cockpit, and instant consultant desk.',
    badge: 'App Portal',
    iconName: 'LayoutDashboard',
    idealFor: 'Founders, MDs, CFOs seeking structured operational control',
  },
  {
    id: 'pitch-deck',
    name: 'Boardroom Slide Deck',
    tagline: 'Interactive Presentation Mode',
    description: 'Transform the firm portfolio into an 8-slide executive pitch deck. Features slide-by-slide navigation, thumbnail drawer, keyboard arrows, and presenter takeaways.',
    badge: 'Presentation',
    iconName: 'Presentation',
    idealFor: 'Board presentations, partner meetings, executive reviews',
  },
  {
    id: 'bento-showcase',
    name: 'Modular Bento Grid',
    tagline: 'Dense Visual Architecture',
    description: 'Contemporary tech-forward asymmetric grid. High-density cards highlight live compliance metrics, 5 pillars radar, ROI calculators, and client proof points.',
    badge: 'Modern Grid',
    iconName: 'LayoutGrid',
    idealFor: 'Fast-growing tech companies, startups, modern entrepreneurs',
  },
  {
    id: 'consulting-dossier',
    name: 'Strategic Consulting Dossier',
    tagline: 'Editorial Whitepaper Format',
    description: 'Prestigious McKinsey/BCG-style strategic briefing. Sticky numbered table of contents, legal citations (Employment Act 2007), callout boxes, and executive summary.',
    badge: 'Editorial Brief',
    iconName: 'FileText',
    idealFor: 'Legal counsels, compliance directors, institutional partners',
  },
];

export const THEME_CONFIGS: Record<DesignThemeId, DesignThemeConfig> = {
  executive: {
    id: 'executive',
    name: 'Trusted Navy and Gold',
    tagline: 'Corporate, Credible, Calm • #1B3A5C and #C9A45C',
    description: 'Primary Trusted Navy (#1B3A5C), calming Cerulean Blue (#3E7CB1), and prestigious Gold (#C9A45C) on warm linen (#F4F1EA). Crafted for high-stakes institutional trust, statutory credibility, and executive calm.',
    bestSuitedFor: 'Corporate Boardrooms, Multinational Subsidiaries, Established Commercial SMEs',
    fontDisplay: 'font-display',
    fontFamilyLabel: 'Outfit Display and Plus Jakarta Sans',
    palette: {
      primary: '#1B3A5C',
      secondary: '#3E7CB1',
      accent: '#C9A45C',
      background: '#F4F1EA',
      surface: '#ffffff',
      highlight: '#E6BE72',
      dots: ['#1B3A5C', '#3E7CB1', '#C9A45C', '#F4F1EA'],
    },
    classes: {
      heroBg: 'bg-gradient-to-b from-[#1B3A5C] via-[#163353] to-[#0f2338]',
      accentText: 'text-[#C9A45C]',
      accentBg: 'bg-[#C9A45C]',
      accentBorder: 'border-[#C9A45C]/40',
      badge: 'bg-[#C9A45C]/15 border-[#C9A45C]/40 text-[#C9A45C]',
      primaryButton: 'bg-[#C9A45C] hover:bg-[#b8934b] text-[#1B3A5C] shadow-lg shadow-[#C9A45C]/20 font-bold',
      secondaryButton: 'bg-[#1B3A5C] hover:bg-[#16314f] text-[#F4F1EA] border border-[#3E7CB1]/60 hover:border-[#3E7CB1]',
      navBg: 'bg-[#1B3A5C]',
      cardBorderHover: 'hover:border-[#C9A45C]/50',
      statGlow: 'text-[#C9A45C]',
    },
  },
  panafrican: {
    id: 'panafrican',
    name: 'Pan-African Vanguard',
    tagline: 'Warm Earth, Terracotta and Editorial Heritage',
    description: 'Deep African ebony and rich espresso warmed with radiant terracotta copper and ivory sand. Dignified editorial serif typography celebrating African talent globally.',
    bestSuitedFor: 'Pan-African NGOs, Impact Foundations, Regional Trade Groups, Talent Advocates',
    fontDisplay: 'font-serif',
    fontFamilyLabel: 'Newsreader Editorial Serif and Humanist Sans',
    palette: {
      primary: '#19120e',
      secondary: '#c2410c',
      accent: '#ea580c',
      background: '#140c08',
      surface: '#261711',
      highlight: '#f97316',
      dots: ['#19120e', '#261711', '#ea580c', '#fed7aa'],
    },
    classes: {
      heroBg: 'bg-gradient-to-b from-[#261711] via-[#1c120d] to-[#140c08]',
      accentText: 'text-orange-400',
      accentBg: 'bg-orange-600',
      accentBorder: 'border-orange-500/30',
      badge: 'bg-orange-500/15 border-orange-500/40 text-orange-300',
      primaryButton: 'bg-gradient-to-r from-orange-600 to-amber-700 hover:from-orange-500 hover:to-amber-600 text-white shadow-orange-600/20',
      secondaryButton: 'bg-[#2d1c14] hover:bg-[#3d271c] text-orange-100 border-orange-900/50 hover:border-orange-700/60',
      navBg: 'bg-[#160d09]',
      cardBorderHover: 'hover:border-orange-500/40',
      statGlow: 'text-orange-400',
    },
  },
  'modern-slate': {
    id: 'modern-slate',
    name: 'Modern Enterprise Slate',
    tagline: 'Swiss Minimalist Precision and Electric Sapphire',
    description: 'Crisp architectural steel graphite, razor-clean contrast dividers, and electric cobalt sapphire accents. Built for Silicon Savannah scale and high-precision compliance.',
    bestSuitedFor: 'Tech Startups, FinTechs, Venture Studios, Modern Professional Consultancies',
    fontDisplay: 'font-sans',
    fontFamilyLabel: 'Plus Jakarta Sans and Geometric Architecture',
    palette: {
      primary: '#0a0f1d',
      secondary: '#3E7CB1',
      accent: '#2563eb',
      background: '#060a14',
      surface: '#0f172a',
      highlight: '#60a5fa',
      dots: ['#0a0f1d', '#0f172a', '#2563eb', '#60a5fa'],
    },
    classes: {
      heroBg: 'bg-gradient-to-b from-[#0b1329] via-[#090f1f] to-[#060a14]',
      accentText: 'text-blue-400',
      accentBg: 'bg-blue-600',
      accentBorder: 'border-blue-500/30',
      badge: 'bg-blue-500/15 border-blue-500/30 text-blue-300',
      primaryButton: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-500/25',
      secondaryButton: 'bg-slate-900 hover:bg-slate-800 text-slate-100 border-slate-700 hover:border-slate-600',
      navBg: 'bg-[#060a14]',
      cardBorderHover: 'hover:border-blue-400/40',
      statGlow: 'text-blue-400',
    },
  },
  emerald: {
    id: 'emerald',
    name: 'Emerald Sovereign',
    tagline: 'Institutional Governance, Healthcare and ESG Rigor',
    description: 'Deep botanical forest emerald, soft sage undertones, and polished champagne bronze. Conveys permanent institutional stability and uncompromising clinical compliance.',
    bestSuitedFor: 'Healthcare Facilities, Hospitals, Faith-Based Institutions, ESG and Fiduciary Boards',
    fontDisplay: 'font-display',
    fontFamilyLabel: 'Outfit and Newsreader Classic Dignity',
    palette: {
      primary: '#041b14',
      secondary: '#059669',
      accent: '#10b981',
      background: '#02100c',
      surface: '#08291f',
      highlight: '#34d399',
      dots: ['#041b14', '#08291f', '#10b981', '#facc15'],
    },
    classes: {
      heroBg: 'bg-gradient-to-b from-[#06241b] via-[#041b14] to-[#02100c]',
      accentText: 'text-emerald-400',
      accentBg: 'bg-emerald-600',
      accentBorder: 'border-emerald-500/30',
      badge: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
      primaryButton: 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white shadow-emerald-600/25',
      secondaryButton: 'bg-[#08291f] hover:bg-[#0c382b] text-emerald-100 border-emerald-800/60 hover:border-emerald-700',
      navBg: 'bg-[#02100c]',
      cardBorderHover: 'hover:border-emerald-400/40',
      statGlow: 'text-emerald-400',
    },
  },
};

interface ThemeContextType {
  themeId: DesignThemeId;
  currentTheme: DesignThemeConfig;
  heroLayout: HeroLayoutId;
  radiusStyle: RadiusStyle;
  uiLayoutMode: UiLayoutMode;
  isDesignStudioOpen: boolean;
  setThemeId: (id: DesignThemeId) => void;
  setHeroLayout: (layout: HeroLayoutId) => void;
  setRadiusStyle: (radius: RadiusStyle) => void;
  setUiLayoutMode: (mode: UiLayoutMode) => void;
  setIsDesignStudioOpen: (open: boolean) => void;
  getRadiusClass: (type?: 'card' | 'btn' | 'badge') => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY_THEME = 'talentbridge_theme_id';
const STORAGE_KEY_LAYOUT = 'talentbridge_hero_layout';
const STORAGE_KEY_RADIUS = 'talentbridge_radius_style';
const STORAGE_KEY_UIMODE = 'talentbridge_ui_layout_mode';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeId, setThemeIdState] = useState<DesignThemeId>('executive');
  const [heroLayout, setHeroLayoutState] = useState<HeroLayoutId>('split');
  const [radiusStyle, setRadiusStyleState] = useState<RadiusStyle>('modern');
  const [uiLayoutMode, setUiLayoutModeState] = useState<UiLayoutMode>('classic-web');
  const [isDesignStudioOpen, setIsDesignStudioOpen] = useState(false);

  // Initialize from localStorage safely
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEY_THEME) as DesignThemeId;
      if (savedTheme && THEME_CONFIGS[savedTheme]) {
        setThemeIdState(savedTheme);
      }
      const savedLayout = localStorage.getItem(STORAGE_KEY_LAYOUT) as HeroLayoutId;
      if (savedLayout && ['split', 'centered', 'matrix'].includes(savedLayout)) {
        setHeroLayoutState(savedLayout);
      }
      const savedRadius = localStorage.getItem(STORAGE_KEY_RADIUS) as RadiusStyle;
      if (savedRadius && ['modern', 'sharp', 'soft'].includes(savedRadius)) {
        setRadiusStyleState(savedRadius);
      }
      const savedUiMode = localStorage.getItem(STORAGE_KEY_UIMODE) as UiLayoutMode;
      if (savedUiMode && ['classic-web', 'portal-dashboard', 'pitch-deck', 'bento-showcase', 'consulting-dossier'].includes(savedUiMode)) {
        setUiLayoutModeState(savedUiMode);
      }
    } catch {
      // Storage access blocked or unavailable
    }
  }, []);

  const setThemeId = (id: DesignThemeId) => {
    setThemeIdState(id);
    try {
      localStorage.setItem(STORAGE_KEY_THEME, id);
    } catch {}
  };

  const setHeroLayout = (layout: HeroLayoutId) => {
    setHeroLayoutState(layout);
    try {
      localStorage.setItem(STORAGE_KEY_LAYOUT, layout);
    } catch {}
  };

  const setRadiusStyle = (radius: RadiusStyle) => {
    setRadiusStyleState(radius);
    try {
      localStorage.setItem(STORAGE_KEY_RADIUS, radius);
    } catch {}
  };

  const setUiLayoutMode = (mode: UiLayoutMode) => {
    setUiLayoutModeState(mode);
    try {
      localStorage.setItem(STORAGE_KEY_UIMODE, mode);
    } catch {}
  };

  const getRadiusClass = (type: 'card' | 'btn' | 'badge' = 'card') => {
    if (radiusStyle === 'sharp') {
      return type === 'btn' ? 'rounded-md' : type === 'badge' ? 'rounded-sm' : 'rounded-lg';
    }
    if (radiusStyle === 'soft') {
      return type === 'btn' ? 'rounded-full' : type === 'badge' ? 'rounded-full' : 'rounded-3xl';
    }
    // Default 'modern'
    return type === 'btn' ? 'rounded-xl' : type === 'badge' ? 'rounded-full' : 'rounded-2xl';
  };

  const currentTheme = THEME_CONFIGS[themeId] || THEME_CONFIGS.executive;

  return (
    <ThemeContext.Provider
      value={{
        themeId,
        currentTheme,
        heroLayout,
        radiusStyle,
        uiLayoutMode,
        isDesignStudioOpen,
        setThemeId,
        setHeroLayout,
        setRadiusStyle,
        setUiLayoutMode,
        setIsDesignStudioOpen,
        getRadiusClass,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
