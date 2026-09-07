import React from 'react';

export interface BrandLogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon-only' | 'badge';
  theme?: 'light' | 'dark' | 'color-on-dark';
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  showTagline?: boolean;
  taglineType?: 'connecting' | 'people';
  className?: string;
}

export default function BrandLogo({
  variant = 'horizontal',
  theme = 'light',
  size = 'md',
  showTagline = true,
  taglineType = 'connecting',
  className = '',
}: BrandLogoProps) {
  // Color tokens matching the best of both designs
  const isDark = theme === 'dark' || theme === 'color-on-dark';
  const navyColor = isDark ? '#FFFFFF' : '#0F2B48';
  const greenColor = '#2EA44F';
  const subtextColor = isDark ? '#94A3B8' : '#334155';
  const globeOutline = isDark ? '#38BDF8' : '#3E7CB1';

  // Sizing mappings
  const getIconDimensions = () => {
    if (typeof size === 'number') return { width: size, height: size };
    switch (size) {
      case 'sm':
        return { width: 34, height: 34 };
      case 'lg':
        return { width: 64, height: 64 };
      case 'xl':
        return { width: 96, height: 96 };
      case 'md':
      default:
        return { width: 46, height: 46 };
    }
  };

  const { width: iconWidth, height: iconHeight } = getIconDimensions();

  // The Master Vector Emblem Icon (Synthesizing Bridge + Globe + 3 Human Figures + Enclosing Arc)
  const renderEmblem = (w: number = iconWidth, h: number = iconHeight) => (
    <svg
      width={w}
      height={h}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-200"
      aria-label="Talent Bridge Global Logo Emblem"
    >
      <defs>
        <linearGradient id="tbgGreenGrad" x1="20" y1="20" x2="180" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="50%" stopColor="#2EA44F" />
          <stop offset="100%" stopColor="#1E7B34" />
        </linearGradient>
        <linearGradient id="tbgNavyGrad" x1="20" y1="90" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isDark ? '#E2E8F0' : '#163353'} />
          <stop offset="100%" stopColor={isDark ? '#94A3B8' : '#0B1D30'} />
        </linearGradient>
      </defs>

      {/* 1. Outer Dynamic Enclosing Arch (Green Growth Arc - Top Half) */}
      <path
        d="M 28,106 C 24,62 58,26 100,24 C 144,22 178,58 174,104"
        stroke="url(#tbgGreenGrad)"
        strokeWidth="11"
        strokeLinecap="round"
      />

      {/* 2. Lower Grounding Arc (Deep Navy Foundation - Bottom Half) */}
      <path
        d="M 28,110 C 32,154 66,182 100,182 C 136,182 170,154 174,110"
        stroke="url(#tbgNavyGrad)"
        strokeWidth="9"
        strokeLinecap="round"
      />

      {/* 3. The Global Sphere (Positioned Under the Central Bridge Arch) */}
      <g opacity={isDark ? 0.95 : 0.85}>
        {/* Globe Base Circle */}
        <circle cx="100" cy="116" r="32" fill={isDark ? '#0F2338' : '#E8F2FA'} stroke={globeOutline} strokeWidth="2.5" />
        
        {/* Globe Graticule (Equator and Meridian coordinate lines) */}
        <ellipse cx="100" cy="116" rx="32" ry="12" fill="none" stroke={globeOutline} strokeWidth="1.2" strokeDasharray="3 2" opacity="0.6" />
        <ellipse cx="100" cy="116" rx="16" ry="32" fill="none" stroke={globeOutline} strokeWidth="1.2" strokeDasharray="3 2" opacity="0.6" />
      </g>

      {/* 4. The Arched Suspension Bridge Structure */}
      {/* Upper Roadway Deck */}
      <path
        d="M 24,108 Q 100,82 176,108"
        stroke={isDark ? '#F8FAFC' : '#0F2B48'}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Lower Bridge Arches (3 Classical Pillar Arches) */}
      {/* Central Majestic Span */}
      <path
        d="M 68,102 C 72,130 128,130 132,102"
        stroke={isDark ? '#CBD5E1' : '#0F2B48'}
        strokeWidth="5"
        fill="none"
      />
      {/* Left Supporting Arch */}
      <path
        d="M 32,107 C 36,124 64,124 68,104"
        stroke={isDark ? '#CBD5E1' : '#0F2B48'}
        strokeWidth="4"
        fill="none"
      />
      {/* Right Supporting Arch */}
      <path
        d="M 132,104 C 136,124 164,124 168,107"
        stroke={isDark ? '#CBD5E1' : '#0F2B48'}
        strokeWidth="4"
        fill="none"
      />

      {/* Bridge Vertical Support Columns */}
      <line x1="68" y1="102" x2="68" y2="135" stroke={isDark ? '#CBD5E1' : '#0F2B48'} strokeWidth="4.5" strokeLinecap="round" />
      <line x1="132" y1="102" x2="132" y2="135" stroke={isDark ? '#CBD5E1' : '#0F2B48'} strokeWidth="4.5" strokeLinecap="round" />

      {/* 5. Three Human Figures Standing Proudly on the Bridge Deck */}
      {/* Left Figure (Navy Partner) */}
      <g>
        <circle cx="76" cy="68" r="7.5" fill={isDark ? '#E2E8F0' : '#0F2B48'} />
        <path
          d="M 66,88 C 66,78 86,78 86,88 L 84,97 C 80,98 72,98 68,97 Z"
          fill={isDark ? '#E2E8F0' : '#0F2B48'}
        />
      </g>

      {/* Central Figure (Growth Green Leader / Distinct Center) */}
      <g>
        <circle cx="100" cy="66" r="7.5" fill={greenColor} />
        <path
          d="M 90,86 C 90,76 110,76 110,86 L 108,95 C 104,96 96,96 92,95 Z"
          fill={greenColor}
        />
      </g>

      {/* Right Figure (Navy Partner) */}
      <g>
        <circle cx="124" cy="68" r="7.5" fill={isDark ? '#E2E8F0' : '#0F2B48'} />
        <path
          d="M 114,88 C 114,78 134,78 134,88 L 132,97 C 128,98 120,98 116,97 Z"
          fill={isDark ? '#E2E8F0' : '#0F2B48'}
        />
      </g>

      {/* Golden Keystone Accent at top */}
      <circle cx="100" cy="24" r="3.5" fill="#C9A45C" />
    </svg>
  );

  // Variant 1: ICON ONLY (Square, circular favicon, avatar, app icon)
  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {renderEmblem()}
      </div>
    );
  }

  // Variant 2: CIRCULAR SEAL / BADGE (For stamps, official letterhead seals, certificates)
  if (variant === 'badge') {
    return (
      <div className={`inline-flex flex-col items-center justify-center p-3 rounded-2xl ${isDark ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-slate-200'} shadow-sm ${className}`}>
        {renderEmblem(72, 72)}
        <div className="mt-2 text-center">
          <div className="text-xs font-black tracking-wider text-[#0F2B48] flex items-center justify-center gap-1">
            <span style={{ color: navyColor }}>TALENT</span>
            <span style={{ color: greenColor }}>BRIDGE</span>
          </div>
          <div className="text-[9px] font-bold tracking-widest text-[#0F2B48] uppercase mt-0.5">
            G L O B A L
          </div>
        </div>
      </div>
    );
  }

  // Variant 3: STACKED (Centered logo for vertical fliers, pitch covers, roll-up banners, posters)
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {renderEmblem(84, 84)}
        
        {/* Main Wordmark */}
        <div className="mt-3">
          <div className="text-2xl sm:text-3xl font-black tracking-tight flex items-center justify-center gap-2">
            <span style={{ color: navyColor }}>TALENT</span>
            <span style={{ color: greenColor }}>BRIDGE</span>
          </div>
          
          {/* Global Rule Row */}
          <div className="flex items-center justify-center gap-3 mt-1.5">
            <div className="w-10 h-0.5" style={{ backgroundColor: greenColor }} />
            <span className="text-xs sm:text-sm font-bold tracking-[0.35em] uppercase" style={{ color: navyColor }}>
              G L O B A L
            </span>
            <div className="w-10 h-0.5" style={{ backgroundColor: greenColor }} />
          </div>

          {/* Tagline */}
          {showTagline && (
            <p className="text-xs sm:text-sm font-medium tracking-wide mt-2" style={{ color: subtextColor }}>
              {taglineType === 'connecting'
                ? 'CONNECTING TALENT. CREATING OPPORTUNITIES.'
                : 'People. Purpose. Possibilities.'}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Variant 4: HORIZONTAL (Standard Primary Header and Email Signature Brandmark)
  return (
    <div className={`inline-flex items-center gap-3 text-left group ${className}`}>
      {renderEmblem()}

      <div className="flex flex-col justify-center">
        {/* Main Company Title */}
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-lg sm:text-xl font-extrabold tracking-tight" style={{ color: navyColor }}>
            TALENT
          </span>
          <span className="text-lg sm:text-xl font-extrabold tracking-tight" style={{ color: greenColor }}>
            BRIDGE
          </span>
        </div>

        {/* Global Subheading with Emerald Horizontal Rules */}
        <div className="flex items-center gap-2 mt-1 leading-none">
          <span className="w-3.5 h-[1.5px]" style={{ backgroundColor: greenColor }} />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase" style={{ color: navyColor }}>
            GLOBAL
          </span>
          <span className="w-3.5 h-[1.5px]" style={{ backgroundColor: greenColor }} />
        </div>

        {/* Optional Secondary Tagline */}
        {showTagline && (
          <div className="text-[9.5px] sm:text-[10px] font-medium tracking-tight mt-1 opacity-80" style={{ color: subtextColor }}>
            {taglineType === 'connecting'
              ? 'Connecting Talent • Creating Opportunities'
              : 'People • Purpose • Possibilities'}
          </div>
        )}
      </div>
    </div>
  );
}
