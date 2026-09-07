import React from 'react';
import { 
  BookOpen, 
  Layout, 
  FileText, 
  Layers, 
  Printer, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  Download
} from 'lucide-react';
import { CollateralTab } from './BrandAssetsModal';
import BrandLogo from './BrandLogo';

interface PrintCollateralSectionProps {
  onOpenCollateral: (tab: CollateralTab) => void;
}

export default function PrintCollateralSection({ onOpenCollateral }: PrintCollateralSectionProps) {
  const collateralCards = [
    {
      id: 'brochures' as CollateralTab,
      title: 'Corporate Capability Brochure',
      category: 'Tri-Fold (A4 6-Panel)',
      description: 'Standard 6-panel panoramic brochure designed for investor meetings, international embassies, and C-suite briefings.',
      specs: 'A4 flat (297×210mm) • DL folded (99×210mm) • 170gsm Silk',
      icon: BookOpen,
      badge: 'Panels and Panorama',
      accentColor: 'border-emerald-500/30 hover:border-emerald-500',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      id: 'posters' as CollateralTab,
      title: 'Exhibition and Display Posters',
      category: 'Roll-Up Banner and A3 Wall',
      description: 'Bold, high-visibility presentation graphics for trade expos, career summits, reception lobbies, and boardroom walls.',
      specs: 'Roll-Up: 850×2000mm • Wall: A3 (297×420mm) • High-Contrast',
      icon: Layout,
      badge: 'Exhibition and Summits',
      accentColor: 'border-blue-500/30 hover:border-blue-500',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      id: 'fliers' as CollateralTab,
      title: 'Promotional Campaign Fliers',
      category: 'A4 One-Pager and A5 Direct',
      description: 'Direct-response business development fliers highlighting cost-savings ROI, statutory compliance, and booking QR code.',
      specs: 'A4 Corporate One-Pager and A5 Handbill • 150gsm Gloss',
      icon: FileText,
      badge: 'Direct Marketing',
      accentColor: 'border-amber-500/30 hover:border-amber-500',
      tagColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      id: 'folded-flyers' as CollateralTab,
      title: 'Folded Flyer / Bi-Fold Leaflet',
      category: 'Bi-Fold (4-Page Folio)',
      description: 'Tactile 4-page executive booklet format balancing depth, sector solutions, and governance for high-stakes tenders.',
      specs: 'A4 folded to A5 (148×210mm) • 250gsm Matt Artboard',
      icon: Layers,
      badge: 'Executive Folio',
      accentColor: 'border-purple-500/30 hover:purple-500',
      tagColor: 'bg-purple-50 text-purple-700 border-purple-200'
    }
  ];

  return (
    <section id="collateral" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Architectural Accent */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 opacity-5 pointer-events-none">
        <BrandLogo variant="icon-only" theme="dark" size={600} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2EA44F]/20 text-[#2EA44F] border border-[#2EA44F]/40 text-xs font-black uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Publications and Media Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Brochures, Posters, Fliers and Folded Flyers
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Every publication is mathematically calibrated in official corporate colors (Deep Navy, Growth Green, Global Steel, and Executive Gold) with dual-sided previews, print dimensions, and one-click PDF generation.
          </p>
        </div>

        {/* 4-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collateralCards.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="bg-[#14293f] rounded-2xl p-6 border border-slate-700/80 hover:border-[#2EA44F]/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#0F2B48] border border-white/10 flex items-center justify-center text-[#2EA44F] group-hover:bg-[#2EA44F] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-slate-300 border border-white/15">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-[#2EA44F] uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 group-hover:text-[#2EA44F] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-slate-700/60 text-[11px] text-slate-400 font-mono">
                    {item.specs}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-700/60">
                  <button
                    onClick={() => onOpenCollateral(item.id)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-[#2EA44F] text-white text-xs font-bold transition-all cursor-pointer group-hover:shadow-md"
                  >
                    <span>View and Print</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Studio Banner Action */}
        <div className="mt-12 bg-gradient-to-r from-[#0F2B48] via-[#163353] to-[#0F2B48] rounded-2xl p-6 sm:p-8 border border-[#3E7CB1]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#2EA44F] shrink-0">
              <Printer className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                Need High-Resolution Vector Assets for Commercial Printers?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Access vector SVG brandmarks, CMYK color profiles, business card cut-sheets, and digital email signatures.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenCollateral('brochures')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#2EA44F] hover:bg-[#248840] text-white font-bold text-xs sm:text-sm transition-all shadow-lg hover:scale-105 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Launch Collateral Center</span>
            </button>
            <button
              onClick={() => onOpenCollateral('logos')}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-all border border-white/20 cursor-pointer"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Vector Logos</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
