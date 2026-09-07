import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  Copy, 
  Check, 
  CreditCard, 
  FileText, 
  Share2, 
  Printer, 
  QrCode, 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  Sparkles,
  ShieldCheck,
  Users,
  CheckCircle2,
  BookOpen,
  Layout,
  Layers,
  Image as ImageIcon
} from 'lucide-react';
import BrandLogo from './BrandLogo';
import { COMPANY_INFO } from '../data/companyData';
import TriFoldBrochure from './collateral/TriFoldBrochure';
import ExecutivePoster from './collateral/ExecutivePoster';
import PromotionalFlier from './collateral/PromotionalFlier';
import FoldedFlyer from './collateral/FoldedFlyer';

export type CollateralTab = 
  | 'brochures' 
  | 'posters' 
  | 'fliers' 
  | 'folded-flyers' 
  | 'logos' 
  | 'business-card' 
  | 'social';

interface BrandAssetsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: CollateralTab;
}

export default function BrandAssetsModal({ isOpen, onClose, initialTab = 'brochures' }: BrandAssetsModalProps) {
  const [activeTab, setActiveTab] = useState<CollateralTab>(initialTab);
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, isOpen]);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, formatName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(formatName);
    setTimeout(() => setCopiedFormat(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  // SVG Source Code generator for instant export
  const getSvgSource = (type: 'horizontal' | 'icon' | 'stacked') => {
    if (type === 'icon') {
      return `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M 28,106 C 24,62 58,26 100,24 C 144,22 178,58 174,104" stroke="#2EA44F" stroke-width="11" stroke-linecap="round"/>
  <path d="M 28,110 C 32,154 66,182 100,182 C 136,182 170,154 174,110" stroke="#0F2B48" stroke-width="9" stroke-linecap="round"/>
  <circle cx="100" cy="116" r="32" fill="#E8F2FA" stroke="#3E7CB1" stroke-width="2.5"/>
  <ellipse cx="100" cy="116" rx="32" ry="12" fill="none" stroke="#3E7CB1" stroke-width="1.2" stroke-dasharray="3 2" opacity="0.6"/>
  <ellipse cx="100" cy="116" rx="16" ry="32" fill="none" stroke="#3E7CB1" stroke-width="1.2" stroke-dasharray="3 2" opacity="0.6"/>
  <path d="M 24,108 Q 100,82 176,108" stroke="#0F2B48" stroke-width="6" stroke-linecap="round" fill="none"/>
  <path d="M 68,102 C 72,130 128,130 132,102" stroke="#0F2B48" stroke-width="5" fill="none"/>
  <path d="M 32,107 C 36,124 64,124 68,104" stroke="#0F2B48" stroke-width="4" fill="none"/>
  <path d="M 132,104 C 136,124 164,124 168,107" stroke="#0F2B48" stroke-width="4" fill="none"/>
  <line x1="68" y1="102" x2="68" y2="135" stroke="#0F2B48" stroke-width="4.5" stroke-linecap="round"/>
  <line x1="132" y1="102" x2="132" y2="135" stroke="#0F2B48" stroke-width="4.5" stroke-linecap="round"/>
  <circle cx="76" cy="68" r="7.5" fill="#0F2B48"/>
  <path d="M 66,88 C 66,78 86,78 86,88 L 84,97 C 80,98 72,98 68,97 Z" fill="#0F2B48"/>
  <circle cx="100" cy="66" r="7.5" fill="#2EA44F"/>
  <path d="M 90,86 C 90,76 110,76 110,86 L 108,95 C 104,96 96,96 92,95 Z" fill="#2EA44F"/>
  <circle cx="124" cy="68" r="7.5" fill="#0F2B48"/>
  <path d="M 114,88 C 114,78 134,78 134,88 L 132,97 C 128,98 120,98 116,97 Z" fill="#0F2B48"/>
  <circle cx="100" cy="24" r="3.5" fill="#C9A45C"/>
</svg>`;
    }

    return `<svg width="420" height="90" viewBox="0 0 420 90" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(10, 5) scale(0.4)">
    ${getSvgSource('icon')}
  </g>
  <text x="105" y="44" font-family="system-ui, sans-serif" font-weight="900" font-size="24" fill="#0F2B48">TALENT <tspan fill="#2EA44F">BRIDGE</tspan></text>
  <line x1="105" y1="56" x2="140" y2="56" stroke="#2EA44F" stroke-width="2"/>
  <text x="148" y="60" font-family="system-ui, sans-serif" font-weight="700" font-size="11" letter-spacing="4" fill="#0F2B48">GLOBAL</text>
  <line x1="218" y1="56" x2="253" y2="56" stroke="#2EA44F" stroke-width="2"/>
  <text x="105" y="76" font-family="system-ui, sans-serif" font-weight="500" font-size="9" fill="#64748B">Connecting Talent • Creating Opportunities</text>
</svg>`;
  };

  const downloadSvgFile = (filename: string, svgContent: string) => {
    const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div className="bg-white w-full max-w-6xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[94vh]">
        
        {/* Modal Header */}
        <div className="bg-[#0F2B48] text-white px-6 py-4 flex items-center justify-between border-b border-[#3E7CB1]/30 shrink-0">
          <div className="flex items-center gap-3">
            <BrandLogo variant="icon-only" theme="dark" size={34} />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white leading-tight">
                  Talent Bridge Global • Print and Advertising Media Suite
                </h2>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-[#2EA44F]/20 text-[#2EA44F] border border-[#2EA44F]/40 text-[10px] font-extrabold uppercase">
                  Press Ready (CMYK)
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Official Brochures, Posters, Fliers, Folded Flyers, Logos and Executive Stationery
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Extended Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 sm:px-6 gap-1 sm:gap-2 overflow-x-auto shrink-0 scrollbar-none">
          
          {/* 1. Brochures (Tri-Fold) */}
          <button
            onClick={() => setActiveTab('brochures')}
            className={`py-3.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'brochures'
                ? 'border-[#2EA44F] text-[#0F2B48] bg-white'
                : 'border-transparent text-slate-600 hover:text-[#0F2B48]'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#2EA44F]" />
            <span>Brochures (Tri-Fold)</span>
          </button>

          {/* 2. Posters (Roll-Up and Wall) */}
          <button
            onClick={() => setActiveTab('posters')}
            className={`py-3.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'posters'
                ? 'border-[#2EA44F] text-[#0F2B48] bg-white'
                : 'border-transparent text-slate-600 hover:text-[#0F2B48]'
            }`}
          >
            <Layout className="w-4 h-4 text-[#2EA44F]" />
            <span>Posters (Roll-Up and A3)</span>
          </button>

          {/* 3. Fliers (Campaign One-Pagers) */}
          <button
            onClick={() => setActiveTab('fliers')}
            className={`py-3.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'fliers'
                ? 'border-[#2EA44F] text-[#0F2B48] bg-white'
                : 'border-transparent text-slate-600 hover:text-[#0F2B48]'
            }`}
          >
            <FileText className="w-4 h-4 text-[#2EA44F]" />
            <span>Fliers (A4 and A5)</span>
          </button>

          {/* 4. Folded Flyers (Bi-Fold) */}
          <button
            onClick={() => setActiveTab('folded-flyers')}
            className={`py-3.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'folded-flyers'
                ? 'border-[#2EA44F] text-[#0F2B48] bg-white'
                : 'border-transparent text-slate-600 hover:text-[#0F2B48]'
            }`}
          >
            <Layers className="w-4 h-4 text-[#2EA44F]" />
            <span>Folded Flyers (Bi-Fold)</span>
          </button>

          {/* 5. Brand Logos and SVG */}
          <button
            onClick={() => setActiveTab('logos')}
            className={`py-3.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'logos'
                ? 'border-[#2EA44F] text-[#0F2B48] bg-white'
                : 'border-transparent text-slate-600 hover:text-[#0F2B48]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#2EA44F]" />
            <span>Brand Logos and SVG</span>
          </button>

          {/* 6. Business Cards */}
          <button
            onClick={() => setActiveTab('business-card')}
            className={`py-3.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'business-card'
                ? 'border-[#2EA44F] text-[#0F2B48] bg-white'
                : 'border-transparent text-slate-600 hover:text-[#0F2B48]'
            }`}
          >
            <CreditCard className="w-4 h-4 text-[#2EA44F]" />
            <span>Business Cards</span>
          </button>

          {/* 7. Social and Email Signature */}
          <button
            onClick={() => setActiveTab('social')}
            className={`py-3.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'social'
                ? 'border-[#2EA44F] text-[#0F2B48] bg-white'
                : 'border-transparent text-slate-600 hover:text-[#0F2B48]'
            }`}
          >
            <Share2 className="w-4 h-4 text-[#2EA44F]" />
            <span>Digital and Signature</span>
          </button>

        </div>

        {/* Tab Content Container */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-grow space-y-6">

          {/* 1. BROCHURES (TRI-FOLD 6-PANEL) */}
          {activeTab === 'brochures' && <TriFoldBrochure />}

          {/* 2. POSTERS (ROLL-UP BANNER and A3 WALL) */}
          {activeTab === 'posters' && <ExecutivePoster />}

          {/* 3. CAMPAIGN FLIERS (A4 and A5) */}
          {activeTab === 'fliers' && <PromotionalFlier />}

          {/* 4. FOLDED FLYERS (BI-FOLD 4-PAGE) */}
          {activeTab === 'folded-flyers' && <FoldedFlyer />}

          {/* 5. BRAND LOGOS and VECTOR SUITE */}
          {activeTab === 'logos' && (
            <div className="space-y-6 text-left">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-900 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Synthesized Official Brand Identity:</strong> Blending the circular dynamic arch and human connection with the architectural bridge and global scope. Crisp vector SVG ensures infinite scaling for billboards, business cards, and websites.
                </div>
              </div>

              {/* Logo Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Logo 1: Primary Horizontal */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Primary Horizontal (Web and Letterheads)
                      </span>
                      <span className="text-[11px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                        Standard
                      </span>
                    </div>
                    
                    <div className="h-28 bg-[#F4F1EA]/40 rounded-lg border border-slate-200/60 flex items-center justify-center p-4">
                      <BrandLogo variant="horizontal" size="lg" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => copyToClipboard(getSvgSource('horizontal'), 'horizontal')}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      {copiedFormat === 'horizontal' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedFormat === 'horizontal' ? 'Copied!' : 'Copy SVG'}</span>
                    </button>
                    <button
                      onClick={() => downloadSvgFile('talent-bridge-global-horizontal.svg', getSvgSource('horizontal'))}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#0F2B48] text-white text-xs font-semibold hover:bg-[#163353] transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download SVG</span>
                    </button>
                  </div>
                </div>

                {/* Logo 2: Circular Emblem / Favicon */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Circular Emblem (App Icon, Stamp, Favicon)
                      </span>
                      <span className="text-[11px] font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                        Icon Only
                      </span>
                    </div>

                    <div className="h-28 bg-[#F4F1EA]/40 rounded-lg border border-slate-200/60 flex items-center justify-center p-4 gap-6">
                      <BrandLogo variant="icon-only" size={64} />
                      <BrandLogo variant="icon-only" size={42} />
                      <BrandLogo variant="icon-only" size={28} />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => copyToClipboard(getSvgSource('icon'), 'icon')}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      {copiedFormat === 'icon' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedFormat === 'icon' ? 'Copied!' : 'Copy SVG'}</span>
                    </button>
                    <button
                      onClick={() => downloadSvgFile('talent-bridge-global-icon.svg', getSvgSource('icon'))}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#0F2B48] text-white text-xs font-semibold hover:bg-[#163353] transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download SVG</span>
                    </button>
                  </div>
                </div>

                {/* Logo 3: Stacked Vertical */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Stacked Vertical (Posters and Banners)
                      </span>
                      <span className="text-[11px] font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                        Vertical
                      </span>
                    </div>

                    <div className="h-44 bg-[#F4F1EA]/40 rounded-lg border border-slate-200/60 flex items-center justify-center p-4">
                      <BrandLogo variant="stacked" size={54} showTagline={true} />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => copyToClipboard(getSvgSource('horizontal'), 'stacked')}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      {copiedFormat === 'stacked' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedFormat === 'stacked' ? 'Copied!' : 'Copy SVG'}</span>
                    </button>
                    <button
                      onClick={() => downloadSvgFile('talent-bridge-global-stacked.svg', getSvgSource('horizontal'))}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#0F2B48] text-white text-xs font-semibold hover:bg-[#163353] transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download SVG</span>
                    </button>
                  </div>
                </div>

                {/* Logo 4: Inverted Dark Mode */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Inverted Brandmark (Dark Navy Backgrounds)
                      </span>
                      <span className="text-[11px] font-semibold bg-slate-800 text-slate-200 px-2 py-0.5 rounded">
                        Dark Mode
                      </span>
                    </div>

                    <div className="h-44 bg-[#0F2B48] rounded-lg border border-slate-800 flex items-center justify-center p-4">
                      <BrandLogo variant="horizontal" theme="dark" size="lg" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => copyToClipboard(getSvgSource('horizontal'), 'inverted')}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      {copiedFormat === 'inverted' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedFormat === 'inverted' ? 'Copied!' : 'Copy SVG'}</span>
                    </button>
                    <button
                      onClick={() => downloadSvgFile('talent-bridge-global-dark.svg', getSvgSource('horizontal'))}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#0F2B48] text-white text-xs font-semibold hover:bg-[#163353] transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download SVG</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Brand Color Palettes Summary */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Official Brand Color Standards (RGB / HEX / CMYK Equivalent)
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#0F2B48] shadow-xs shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Deep Navy</div>
                      <div className="text-[11px] text-slate-500 font-mono">#0F2B48</div>
                      <div className="text-[9px] text-slate-400">C:100 M:80 Y:40 K:50</div>
                    </div>
                  </div>

                  <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#2EA44F] shadow-xs shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Growth Green</div>
                      <div className="text-[11px] text-slate-500 font-mono">#2EA44F</div>
                      <div className="text-[9px] text-slate-400">C:75 M:0 Y:85 K:0</div>
                    </div>
                  </div>

                  <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#3E7CB1] shadow-xs shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Global Steel</div>
                      <div className="text-[11px] text-slate-500 font-mono">#3E7CB1</div>
                      <div className="text-[9px] text-slate-400">C:70 M:35 Y:5 K:0</div>
                    </div>
                  </div>

                  <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#C9A45C] shadow-xs shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Executive Gold</div>
                      <div className="text-[11px] text-slate-500 font-mono">#C9A45C</div>
                      <div className="text-[9px] text-slate-400">C:20 M:30 Y:75 K:5</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 6. BUSINESS CARDS */}
          {activeTab === 'business-card' && (
            <div className="space-y-6 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-[#0F2B48]">
                    Executive Business Card Template (3.5" × 2.0" Standard)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Dual-sided corporate card layout with QR code for quick mobile scanning and lead capture.
                  </p>
                </div>
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 bg-[#0F2B48] hover:bg-[#163353] text-white font-bold px-4 py-2 rounded-lg text-xs transition-colors shrink-0 shadow-sm cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print / Save as PDF</span>
                </button>
              </div>

              {/* Business Card Preview Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center max-w-4xl mx-auto">
                
                {/* Front Side */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Side A: Executive Front (Navy and Gold Accent)
                  </span>
                  <div className="w-full aspect-[7/4] bg-[#0F2B48] rounded-xl p-6 shadow-xl border border-[#3E7CB1]/30 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                      <BrandLogo variant="icon-only" theme="dark" size={180} />
                    </div>

                    <div className="flex items-start justify-between relative z-10">
                      <BrandLogo variant="horizontal" theme="dark" size="sm" showTagline={false} />
                      <div className="w-8 h-8 rounded bg-[#C9A45C]/20 border border-[#C9A45C]/40 flex items-center justify-center">
                        <QrCode className="w-5 h-5 text-[#C9A45C]" />
                      </div>
                    </div>

                    <div className="space-y-3 relative z-10">
                      <div>
                        <div className="text-lg font-extrabold text-white tracking-tight">
                          {COMPANY_INFO.consultantName}
                        </div>
                        <div className="text-xs font-semibold text-[#2EA44F] tracking-wide uppercase">
                          {COMPANY_INFO.consultantRole}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300 pt-2 border-t border-slate-700/80">
                        <div className="flex items-center gap-1.5">
                          <Phone className="w-3 h-3 text-[#C9A45C]" />
                          <span>{COMPANY_INFO.phone}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Mail className="w-3 h-3 text-[#C9A45C]" />
                          <span>{COMPANY_INFO.email}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Globe className="w-3 h-3 text-[#C9A45C]" />
                          <span>talentbridgeglobal.com</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-[#C9A45C]" />
                          <span>Nairobi, Kenya</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Side B: Reverse Identity (White / Linen)
                  </span>
                  <div className="w-full aspect-[7/4] bg-[#F4F1EA] rounded-xl p-6 shadow-xl border border-slate-300 text-slate-900 flex flex-col items-center justify-center text-center relative overflow-hidden">
                    <BrandLogo variant="stacked" size={48} showTagline={true} />
                    
                    <div className="mt-4 pt-3 border-t border-slate-300 w-full flex items-center justify-around text-[9.5px] font-bold text-[#0F2B48] uppercase tracking-wider">
                      <span>• Fractional HR</span>
                      <span>• Statutory Payroll</span>
                      <span>• Headhunting</span>
                    </div>

                    <div className="mt-2 text-[8.5px] text-slate-500 tracking-wider">
                      PEOPLE • PURPOSE • POSSIBILITIES
                    </div>
                  </div>
                </div>

              </div>

              {/* Print Guidelines */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <strong className="text-slate-900 block mb-1">Stock Recommendation:</strong>
                  <span>350gsm – 400gsm Premium Matte Cotton or Linen Cardstock with soft-touch lamination.</span>
                </div>
                <div>
                  <strong className="text-slate-900 block mb-1">Finishing Options:</strong>
                  <span>Raised Spot UV on the bridge arch; metallic gold foil on "GLOBAL" and telephone coordinates.</span>
                </div>
                <div>
                  <strong className="text-slate-900 block mb-1">Bleed and Safe Area:</strong>
                  <span>3mm bleed on all four sides. Trim size: 88.9mm × 50.8mm (3.5" × 2.0").</span>
                </div>
              </div>
            </div>
          )}

          {/* 7. DIGITAL and SOCIAL ASSETS */}
          {activeTab === 'social' && (
            <div className="space-y-6 text-left">
              <div>
                <h3 className="text-base font-bold text-[#0F2B48]">
                  Digital Marketing and Social Media Profiles
                </h3>
                <p className="text-xs text-slate-500">
                  Optimized image dimensions for LinkedIn Company Pages, WhatsApp Business, and Executive Email Signatures.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* LinkedIn / Social Media Header Banner (1200 x 630) */}
                <div className="space-y-2 md:col-span-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      LinkedIn and Twitter Banner (1200 × 630 px)
                    </span>
                    <span className="text-[11px] text-slate-400">Social Cover</span>
                  </div>

                  <div className="w-full aspect-[24/8] bg-gradient-to-r from-[#0F2B48] via-[#163353] to-[#0F2B48] rounded-xl p-6 sm:p-8 flex items-center justify-between text-white border border-[#3E7CB1]/30 shadow-lg relative overflow-hidden">
                    <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 flex items-center justify-center pointer-events-none">
                      <BrandLogo variant="icon-only" theme="dark" size={300} />
                    </div>

                    <div className="space-y-2 z-10 max-w-xl">
                      <BrandLogo variant="horizontal" theme="dark" size="md" showTagline={false} />
                      <h4 className="text-lg sm:text-xl font-black text-white leading-tight mt-2">
                        Connecting African Talent to Global and Regional Opportunities.
                      </h4>
                      <p className="text-xs text-slate-300 hidden sm:block">
                        Fractional HR Business Partnering • Statutory Payroll Compliance • Executive Placement
                      </p>
                    </div>

                    <div className="hidden lg:flex flex-col items-end text-right z-10 shrink-0">
                      <span className="text-xs font-bold text-[#2EA44F] uppercase tracking-wider">Advisory Firm</span>
                      <span className="text-sm font-semibold text-white">Nairobi, Kenya</span>
                      <span className="text-xs text-slate-400 mt-1">talentbridgeglobal.com</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp / Square Avatar */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Profile Avatar / WhatsApp Business (400 × 400 px)
                  </span>
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex items-center justify-center gap-6">
                    <div className="w-28 h-28 rounded-full bg-[#0F2B48] p-3 shadow-md flex items-center justify-center border-2 border-[#2EA44F]">
                      <BrandLogo variant="icon-only" theme="dark" size={80} />
                    </div>
                    <div className="w-24 h-24 rounded-2xl bg-[#0F2B48] p-3 shadow-md flex items-center justify-center border-2 border-[#3E7CB1]">
                      <BrandLogo variant="icon-only" theme="dark" size={70} />
                    </div>
                  </div>
                </div>

                {/* Brand Guidelines Quick Card */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Typography Pairing
                  </span>
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
                    <div>
                      <div className="text-xs font-bold text-[#0F2B48]">Display and Headings:</div>
                      <div className="text-sm font-black text-slate-800">Plus Jakarta Sans / Inter / Montserrat</div>
                      <p className="text-[11px] text-slate-500">Used in Bold / Black 800-900 weights for authority.</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0F2B48]">Body and Editorial:</div>
                      <div className="text-sm font-medium text-slate-800">Inter / System Sans-Serif</div>
                      <p className="text-[11px] text-slate-500">Used for legibility in policies, handbooks and contracts.</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Email Signature HTML Generator */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Official Executive Email Signature
                  </span>
                  <button
                    onClick={() => copyToClipboard(`
Rose Chege | Lead Consultant and HR Business Partner
Talent Bridge Global Solutions
Direct: ${COMPANY_INFO.phone} | Email: ${COMPANY_INFO.email}
Website: https://talentbridgeglobal.com
Nairobi, Kenya • "Connecting Talent. Creating Opportunities."
                    `.trim(), 'email-sig')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0F2B48] hover:bg-[#163353] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    {copiedFormat === 'email-sig' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedFormat === 'email-sig' ? 'Copied Signature!' : 'Copy Text Signature'}</span>
                  </button>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <BrandLogo variant="icon-only" size={54} />
                  <div className="border-l-2 border-[#2EA44F] pl-4 space-y-0.5">
                    <div className="font-extrabold text-[#0F2B48] text-sm">{COMPANY_INFO.consultantName}</div>
                    <div className="text-xs font-semibold text-[#2EA44F] uppercase">{COMPANY_INFO.consultantRole}</div>
                    <div className="text-slate-600 font-medium">Talent Bridge Global Solutions</div>
                    <div className="text-[11px] text-slate-500 pt-1 flex flex-wrap items-center gap-3">
                      <span>Tel: {COMPANY_INFO.phone}</span>
                      <span>•</span>
                      <span>Email: {COMPANY_INFO.email}</span>
                      <span>•</span>
                      <span>Nairobi, Kenya</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#0F2B48]">Talent Bridge Global Solutions</span>
            <span>•</span>
            <span>Print, Signage and Collateral Architecture</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 font-bold text-slate-800 transition-colors cursor-pointer"
          >
            Close Suite
          </button>
        </div>

      </div>
    </div>
  );
}
