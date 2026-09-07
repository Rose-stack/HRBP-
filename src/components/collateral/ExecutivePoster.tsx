import React, { useState } from 'react';
import { 
  Printer, 
  CheckCircle2, 
  QrCode, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Sparkles,
  Award,
  ArrowRight
} from 'lucide-react';
import BrandLogo from '../BrandLogo';
import { COMPANY_INFO } from '../../data/companyData';

export default function ExecutivePoster() {
  const [posterType, setPosterType] = useState<'rollup' | 'wall'>('rollup');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 text-left">
      {/* Header and Format Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-[#0F2B48] text-white uppercase tracking-wider">
              Display and Exhibition Posters
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {posterType === 'rollup' ? 'Roll-Up Pull Banner (850mm × 2000mm)' : 'A3 / A2 Wall Display Poster (297mm × 420mm)'}
            </span>
          </div>
          <h3 className="text-lg font-bold text-[#0F2B48] mt-1">
            Corporate Presentation Posters
          </h3>
          <p className="text-xs text-slate-500">
            High-contrast visual posters optimized for trade summits, career expos, client lobbies, and conferences.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex rounded-lg bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setPosterType('rollup')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                posterType === 'rollup'
                  ? 'bg-white text-[#0F2B48] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F2B48]'
              }`}
            >
              Roll-Up Banner (850×2000mm)
            </button>
            <button
              onClick={() => setPosterType('wall')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                posterType === 'wall'
                  ? 'bg-white text-[#0F2B48] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F2B48]'
              }`}
            >
              A3 / A2 Display Poster
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 bg-[#0F2B48] hover:bg-[#163353] text-white font-bold px-3.5 py-2 rounded-lg text-xs transition-colors cursor-pointer shadow-sm shrink-0"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Poster</span>
          </button>
        </div>
      </div>

      {/* Main Preview Frame */}
      <div className="bg-slate-100 p-4 sm:p-8 rounded-2xl border border-slate-200 shadow-inner flex justify-center overflow-x-auto">
        
        {/* ==========================================================
            FORMAT 1: ROLL-UP PULL BANNER (850mm x 2000mm proportion: tall display)
        ========================================================== */}
        {posterType === 'rollup' && (
          <div className="w-[360px] sm:w-[420px] bg-gradient-to-b from-[#081726] via-[#0F2B48] to-[#081726] text-white rounded-2xl shadow-2xl border-4 border-slate-700/60 overflow-hidden flex flex-col justify-between relative p-6 sm:p-8 min-h-[960px]">
            {/* Ambient Graphic Accent */}
            <div className="absolute top-1/4 -right-20 opacity-10 pointer-events-none">
              <BrandLogo variant="icon-only" theme="dark" size={360} />
            </div>

            {/* Banner Top / Masthead */}
            <div className="space-y-6 relative z-10 border-b border-white/15 pb-6">
              <div className="flex justify-center">
                <BrandLogo variant="stacked" theme="dark" size={80} showTagline={true} />
              </div>
              <div className="text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-[#2EA44F]/20 text-[#2EA44F] border border-[#2EA44F]/40 text-xs font-black tracking-widest uppercase">
                  LEADERSHIP • COMPLIANCE • GROWTH
                </span>
              </div>
            </div>

            {/* Banner Center: Bold Value Proposition */}
            <div className="space-y-6 my-auto py-8 relative z-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Scale Your Business with <span className="text-[#2EA44F]">Executive HR Leadership</span> Without the Full-Time Overhead
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xs mx-auto leading-relaxed">
                Empowering businesses and healthcare organizations across Africa with battle-tested fractional HRBP, statutory payroll precision, and executive recruitment.
              </p>

              {/* 3 Core Capability Pillars */}
              <div className="space-y-3 text-left pt-2">
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#2EA44F] text-white shrink-0 mt-0.5">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-white uppercase tracking-wide">
                      Fractional HR Business Partnering
                    </div>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                      Senior HR guidance embedded directly into your C-suite (2-4 days/month).
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#3E7CB1] text-white shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-white uppercase tracking-wide">
                      Zero-Error Statutory Payroll and Audit
                    </div>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                      Guaranteed compliance across PAYE, SHIF, NSSF Tier I and II, and Housing Levies.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#C9A45C] text-[#0F2B48] shrink-0 mt-0.5">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-white uppercase tracking-wide">
                      Global and Regional Executive Placement
                    </div>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                      Connecting exceptional African professionals with visionary local and global firms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat callouts */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#2EA44F]/15 border border-[#2EA44F]/30 text-center">
                  <div className="text-2xl font-black text-[#2EA44F]">65%</div>
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider font-bold">Cost Reduction vs Full-Time HR</div>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-center">
                  <div className="text-2xl font-black text-white">100%</div>
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider font-bold">Statutory Compliance Guarantee</div>
                </div>
              </div>
            </div>

            {/* Banner Bottom: Call to Action and Contact Footnote */}
            <div className="pt-6 border-t border-white/20 space-y-4 relative z-10 bg-black/20 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 sm:p-8 rounded-b-xl">
              {/* QR and Scan Box */}
              <div className="bg-white rounded-xl p-4 text-slate-900 flex items-center justify-between shadow-lg">
                <div className="space-y-0.5">
                  <div className="text-xs font-black text-[#0F2B48] uppercase tracking-wider">
                    Book Free 30-Min HR Diagnostic
                  </div>
                  <div className="text-[11px] text-slate-600">
                    Scan now with your smartphone camera
                  </div>
                  <div className="text-[11px] font-bold text-[#2EA44F] pt-1">
                    www.talentbridgeglobal.com
                  </div>
                </div>
                <div className="p-1.5 bg-slate-100 rounded-lg border border-slate-300 shrink-0">
                  <QrCode className="w-12 h-12 text-[#0F2B48]" />
                </div>
              </div>

              {/* Direct coordinates */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 pt-1">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#2EA44F]" />
                  <span>{COMPANY_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#2EA44F]" />
                  <span>{COMPANY_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==========================================================
            FORMAT 2: A3 / A2 DISPLAY POSTER (297mm x 420mm proportion: wall placard)
        ========================================================== */}
        {posterType === 'wall' && (
          <div className="w-[520px] bg-white rounded-2xl shadow-2xl border border-slate-300 overflow-hidden flex flex-col justify-between text-slate-900 relative p-8">
            
            {/* Top Corporate Masthead */}
            <div className="flex items-center justify-between pb-6 border-b-2 border-slate-100">
              <BrandLogo variant="horizontal" theme="light" size="md" showTagline={true} />
              <div className="text-right">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#0F2B48] block">
                  ADVISORY DIRECTIVE
                </span>
                <span className="text-xs font-bold text-[#2EA44F]">
                  2026 Executive Series
                </span>
              </div>
            </div>

            {/* Center Main Punchline */}
            <div className="py-6 space-y-5">
              <div className="inline-block px-3 py-1 rounded-full bg-[#2EA44F]/10 text-[#2EA44F] border border-[#2EA44F]/25 text-xs font-black tracking-widest uppercase">
                STRATEGIC HUMAN CAPITAL ADVISORY
              </div>

              <h1 className="text-3xl font-black text-[#0F2B48] leading-tight tracking-tight">
                Don't Let Labour Compliance Stifle Your Enterprise's Potential.
              </h1>

              <p className="text-xs text-slate-600 leading-relaxed">
                Talent Bridge Global delivers seasoned HR Director guidance, institutional labour audit defence, and flawless payroll management on a flexible fractional retainer.
              </p>

              {/* 2x2 Bento Matrix */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0F2B48]">
                    <Users className="w-4 h-4 text-[#2EA44F]" />
                    <span>Fractional HRBP</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Disciplinary hearings, employment contracts, and employee engagement frameworks.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0F2B48]">
                    <ShieldCheck className="w-4 h-4 text-[#0F2B48]" />
                    <span>Statutory Payroll</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Automated remittances for PAYE, SHIF/SHA, NSSF, AHL, and KRA audits.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0F2B48]">
                    <TrendingUp className="w-4 h-4 text-[#C9A45C]" />
                    <span>Cost Optimization</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Save up to 65% compared to hiring a full in-house HR Director and payroll team.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0F2B48]">
                    <Award className="w-4 h-4 text-[#2EA44F]" />
                    <span>Talent Sourcing</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Executive headhunting connecting top African tier-1 professionals with elite firms.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Callout and Footer Bar */}
            <div className="pt-6 border-t-2 border-slate-100 flex items-center justify-between gap-4">
              <div className="space-y-1 text-xs text-slate-600">
                <div className="font-bold text-[#0F2B48]">Nairobi Headquarters and Global Reach</div>
                <div>{COMPANY_INFO.address}</div>
                <div className="font-semibold text-slate-800">{COMPANY_INFO.phone} • {COMPANY_INFO.email}</div>
              </div>

              <div className="flex items-center gap-3 bg-[#0F2B48] text-white p-3 rounded-xl shrink-0">
                <div className="space-y-0.5 text-right">
                  <div className="text-[10px] font-black uppercase text-[#2EA44F] tracking-wider">
                    SCAN TO CONNECT
                  </div>
                  <div className="text-[9px] text-slate-300">
                    Instant Schedule
                  </div>
                </div>
                <div className="p-1 bg-white rounded-lg">
                  <QrCode className="w-9 h-9 text-[#0F2B48]" />
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Poster Print Specs */}
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <strong className="text-slate-900 block mb-1">Roll-Up Material:</strong>
          <span>450gsm anti-curl polyester film with satin grey-back blockout backing and aluminium cassette.</span>
        </div>
        <div>
          <strong className="text-slate-900 block mb-1">Wall Poster Material:</strong>
          <span>250gsm Premium Gloss/Silk artboard, suitable for framing or glass wall adhesive mounting.</span>
        </div>
        <div>
          <strong className="text-slate-900 block mb-1">Viewing Distance:</strong>
          <span>1.5m – 4m. High-contrast typography designed for immediate legibility across conference halls.</span>
        </div>
      </div>
    </div>
  );
}
