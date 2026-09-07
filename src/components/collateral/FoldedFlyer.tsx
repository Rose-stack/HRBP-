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
  Layers,
  Sparkles,
  Award,
  Check,
  Building,
  HeartPulse,
  Laptop,
  Briefcase
} from 'lucide-react';
import BrandLogo from '../BrandLogo';
import { COMPANY_INFO, SECTOR_EXPERTISE } from '../../data/companyData';

export default function FoldedFlyer() {
  const [spreadView, setSpreadView] = useState<'inside' | 'outside' | 'paged'>('inside');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 text-left">
      {/* Controls and Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-[#0F2B48] text-white uppercase tracking-wider">
              Folded Flyer / Bi-Fold Leaflet (4-Panel)
            </span>
            <span className="text-xs text-slate-500 font-medium">A4 folded to A5 (Finished size: 148mm × 210mm)</span>
          </div>
          <h3 className="text-lg font-bold text-[#0F2B48] mt-1">
            Executive Bi-Fold Capability Leaflet
          </h3>
          <p className="text-xs text-slate-500">
            A premium 4-page booklet format designed to leave an indelible impression at high-stakes investor and client meetings.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex rounded-lg bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setSpreadView('inside')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                spreadView === 'inside'
                  ? 'bg-white text-[#0F2B48] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F2B48]'
              }`}
            >
              Inside Center Spread (P2 and P3)
            </button>
            <button
              onClick={() => setSpreadView('outside')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                spreadView === 'outside'
                  ? 'bg-white text-[#0F2B48] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F2B48]'
              }`}
            >
              Outside Spread (Back P4 and Front P1)
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 bg-[#0F2B48] hover:bg-[#163353] text-white font-bold px-3.5 py-2 rounded-lg text-xs transition-colors cursor-pointer shadow-sm shrink-0"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Bi-Fold</span>
          </button>
        </div>
      </div>

      {/* Main Preview Container */}
      <div className="bg-slate-100 p-4 sm:p-8 rounded-2xl border border-slate-200 shadow-inner overflow-x-auto">
        
        {/* ==========================================================
            INSIDE SPREAD: Page 2 (Inside Left) + Page 3 (Inside Right)
        ========================================================== */}
        {spreadView === 'inside' && (
          <div className="min-w-[780px] max-w-5xl mx-auto bg-white rounded-xl shadow-2xl border border-slate-300 grid grid-cols-2 divide-x-4 divide-slate-200 overflow-hidden relative">
            {/* Spine Shadow Effect */}
            <div className="absolute inset-y-0 left-1/2 w-4 -ml-2 bg-gradient-to-r from-black/5 via-black/10 to-transparent pointer-events-none z-20" />

            {/* PAGE 2: INSIDE LEFT - Strategic Diagnostic and Core Pillars */}
            <div className="p-8 flex flex-col justify-between space-y-6 bg-[#FAFBFC] text-slate-900">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#3E7CB1]">
                    PAGE 2 • CAPABILITY OVERVIEW
                  </span>
                  <span className="text-xs font-bold text-[#2EA44F]">
                    Strategic HR Architecture
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#0F2B48] leading-snug">
                  The Complete HR and Payroll Stack for Growing African Enterprises
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Most emerging businesses either neglect formal HR or overpay for unneeded permanent departments. Talent Bridge Global provides the calibrated middle ground: high-level executive competence with flexible, measured execution.
                </p>

                {/* Capability 1 */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#2EA44F]/15 text-[#2EA44F] flex items-center justify-center">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-[#0F2B48]">Embedded Fractional HRBP</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    We act as your dedicated Head of People, leading disciplinary hearings, crafting legally enforceable employment contracts, and establishing KPI structures.
                  </p>
                </div>

                {/* Capability 2 */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#0F2B48]/15 text-[#0F2B48] flex items-center justify-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0F2B48]" />
                    </div>
                    <span className="text-xs font-bold text-[#0F2B48]">Zero-Error Statutory Payroll</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Precision processing for PAYE, Social Health Authority (SHA/SHIF), NSSF Tier I and II, and Affordable Housing Levy (AHL) with complete audit defense.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0F2B48] text-white flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider font-bold">Average Client ROI</div>
                  <div className="text-xs font-bold text-[#2EA44F]">65% Payroll Cost Reduction</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider font-bold">Audit Clearance</div>
                  <div className="text-xs font-bold text-white">100% Tax Compliant</div>
                </div>
              </div>
            </div>

            {/* PAGE 3: INSIDE RIGHT - Sector Solutions and Engagement Models */}
            <div className="p-8 flex flex-col justify-between space-y-6 bg-white text-slate-900">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#3E7CB1]">
                    PAGE 3 • SECTORS and ENGAGEMENT
                  </span>
                  <span className="text-xs font-bold text-[#0F2B48]">
                    Proven Delivery
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#0F2B48] leading-snug">
                  Tailored Governance Across High-Stakes Industries
                </h3>

                {/* 4 Industry Cards */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F2B48]">
                      <HeartPulse className="w-3.5 h-3.5 text-rose-500" />
                      <span>Healthcare and Clinics</span>
                    </div>
                    <p className="text-[10px] text-slate-500">
                      Medical staff credentialing, 24/7 shift scheduling, and statutory allowances.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F2B48]">
                      <Building className="w-3.5 h-3.5 text-blue-600" />
                      <span>SMEs and Growth Co.</span>
                    </div>
                    <p className="text-[10px] text-slate-500">
                      Transitioning from founder-led hiring to scalable institutional talent practices.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F2B48]">
                      <Laptop className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Tech and Startups</span>
                    </div>
                    <p className="text-[10px] text-slate-500">
                      Cross-border remote contracts, IP protection covenants, and competitive stock/equity.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F2B48]">
                      <Briefcase className="w-3.5 h-3.5 text-amber-600" />
                      <span>NGOs and Development</span>
                    </div>
                    <p className="text-[10px] text-slate-500">
                      Donor-mandated wage audits, expatriate work permits, and grant compliance.
                    </p>
                  </div>
                </div>

                {/* Engagement Tiers */}
                <div className="pt-2">
                  <div className="text-xs font-black uppercase text-[#0F2B48] mb-2 tracking-wider">
                    How We Work With You
                  </div>
                  <div className="space-y-1.5 text-[11px] text-slate-700">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#2EA44F]" />
                      <span><strong>Monthly Advisory Retainer:</strong> Continuous executive HRBP support.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#2EA44F]" />
                      <span><strong>Project Sprints:</strong> Audit prep, handbook revamps, or restructuring.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#2EA44F]" />
                      <span><strong>Fully Managed Payroll:</strong> Hands-off monthly statutory filing.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-[11px] flex items-center justify-between">
                <span>Have urgent disciplinary or statutory issues?</span>
                <span className="font-bold text-[#0F2B48]">See back cover to book &rarr;</span>
              </div>
            </div>

          </div>
        )}

        {/* ==========================================================
            OUTSIDE SPREAD: Page 4 (Back Cover) + Page 1 (Front Cover)
        ========================================================== */}
        {spreadView === 'outside' && (
          <div className="min-w-[780px] max-w-5xl mx-auto bg-white rounded-xl shadow-2xl border border-slate-300 grid grid-cols-2 divide-x-4 divide-slate-700 overflow-hidden relative">
            
            {/* PAGE 4: BACK COVER (Contact, Office Coordinates, QR and Accreditation) */}
            <div className="p-8 bg-[#0B1D30] text-white flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#3E7CB1]">
                    PAGE 4 • BACK COVER
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#2EA44F]/20 text-[#2EA44F]">
                    HEADQUARTERS
                  </span>
                </div>

                <div className="pt-2">
                  <BrandLogo variant="horizontal" theme="dark" size="sm" showTagline={true} />
                </div>

                <div className="space-y-3 pt-2 text-xs text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#2EA44F] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Physical Address:</strong>
                      <span>{COMPANY_INFO.address}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#2EA44F] shrink-0" />
                    <div>
                      <strong className="text-white block">Direct Telephone:</strong>
                      <span>{COMPANY_INFO.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#2EA44F] shrink-0" />
                    <div>
                      <strong className="text-white block">Advisory Inquiries:</strong>
                      <span>{COMPANY_INFO.email}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-[#2EA44F] shrink-0" />
                    <div>
                      <strong className="text-white block">Official Website:</strong>
                      <span>www.talentbridgeglobal.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Scan Action Box */}
              <div className="bg-white rounded-xl p-4 text-slate-900 flex items-center gap-4 shadow-lg">
                <div className="p-1.5 bg-slate-100 rounded-lg border border-slate-300 shrink-0">
                  <QrCode className="w-12 h-12 text-[#0F2B48]" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase text-[#0F2B48] leading-tight">
                    Schedule HR Audit
                  </div>
                  <p className="text-[10px] text-slate-600 mt-1 leading-snug">
                    Scan to claim a complimentary 30-minute labour compliance diagnostic with our lead consultant.
                  </p>
                </div>
              </div>
            </div>

            {/* PAGE 1: FRONT COVER (Prestige Masthead, Bold Title, Bridge Symbolism) */}
            <div className="p-8 bg-gradient-to-b from-[#081726] to-[#0F2B48] text-white flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-1/3 -right-16 opacity-15 pointer-events-none">
                <BrandLogo variant="icon-only" theme="dark" size={300} />
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#2EA44F]">
                    PAGE 1 • FRONT COVER
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Executive Folio
                  </span>
                </div>

                <div className="pt-3">
                  <BrandLogo variant="stacked" theme="dark" size={72} showTagline={true} />
                </div>

                <div className="w-12 h-1 bg-[#2EA44F] rounded-full" />

                <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Bridging People, Governance and Enterprise Growth.
                </h1>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
                  Strategic Fractional HRBP Leadership, Statutory Labour Compliance, and Executive Headhunting for Visionary Organizations.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-bold text-[#2EA44F]">
                  Talent Bridge Global Solutions
                </span>
                <span className="text-slate-400">Nairobi, Kenya</span>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Finishing and Creasing Specs */}
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <strong className="text-slate-900 block mb-1">Paper and Creasing:</strong>
          <span>250gsm – 300gsm Silk Artboard with machine creasing/scoring along the spine to prevent fiber crack.</span>
        </div>
        <div>
          <strong className="text-slate-900 block mb-1">Coating / Tactile Feel:</strong>
          <span>Velvet soft-touch matte lamination on exterior covers with spot gloss UV over the brand emblem.</span>
        </div>
        <div>
          <strong className="text-slate-900 block mb-1">Distribution Venue:</strong>
          <span>One-on-one executive pitches, RFP tender submissions, investor packs, and bilateral trade summits.</span>
        </div>
      </div>
    </div>
  );
}
