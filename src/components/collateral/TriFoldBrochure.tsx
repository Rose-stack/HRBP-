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
  Check
} from 'lucide-react';
import BrandLogo from '../BrandLogo';
import { COMPANY_INFO, SERVICE_PILLARS, SECTOR_EXPERTISE } from '../../data/companyData';

export default function TriFoldBrochure() {
  const [activeSide, setActiveSide] = useState<'outside' | 'inside'>('outside');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 text-left">
      {/* Header and Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-[#2EA44F]/15 text-[#2EA44F] border border-[#2EA44F]/30 uppercase tracking-wider">
              Standard Tri-Fold (A4 6-Panel)
            </span>
            <span className="text-xs text-slate-500 font-medium">Trim: 297mm × 210mm (Flat)</span>
          </div>
          <h3 className="text-lg font-bold text-[#0F2B48] mt-1">
            Corporate Capability Brochure (Tri-Fold)
          </h3>
          <p className="text-xs text-slate-500">
            Designed for executive meetings, board packets, diplomatic forums, and investor networking.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Side Toggle */}
          <div className="inline-flex rounded-lg bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setActiveSide('outside')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                activeSide === 'outside'
                  ? 'bg-white text-[#0F2B48] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F2B48]'
              }`}
            >
              Outside Spread (Flap • Back • Front Cover)
            </button>
            <button
              onClick={() => setActiveSide('inside')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                activeSide === 'inside'
                  ? 'bg-white text-[#0F2B48] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F2B48]'
              }`}
            >
              Inside Spread (3-Panel Panorama)
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 bg-[#0F2B48] hover:bg-[#163353] text-white font-bold px-3.5 py-2 rounded-lg text-xs transition-colors cursor-pointer shadow-sm shrink-0"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Brochure</span>
          </button>
        </div>
      </div>

      {/* Tri-Fold Visual Container */}
      <div className="bg-slate-100 p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-inner overflow-x-auto">
        
        {/* ==========================================================
            OUTSIDE SPREAD: Panel 5 (Inside Flap) | Panel 6 (Back Cover) | Panel 1 (Front Cover)
        ========================================================== */}
        {activeSide === 'outside' && (
          <div className="min-w-[760px] max-w-5xl mx-auto bg-white rounded-xl shadow-xl border border-slate-300 grid grid-cols-3 divide-x-2 divide-dashed divide-slate-300 overflow-hidden relative">
            
            {/* PANEL 5: INSIDE FLAP (Introduction and Strategic Value) */}
            <div className="p-6 bg-[#F8FAFC] flex flex-col justify-between space-y-4 text-slate-800">
              <div className="space-y-3">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#3E7CB1]">
                  PANEL 5 • INSIDE FLAP
                </div>
                <div className="w-8 h-1 bg-[#2EA44F] rounded-full" />
                
                <h4 className="text-base font-black text-[#0F2B48] leading-snug">
                  Strategic Human Capital for Growing Enterprises
                </h4>
                
                <p className="text-xs text-slate-600 leading-relaxed">
                  As your organization scales, people operations quickly outgrow ad-hoc spreadsheets and administrative quick-fixes.
                </p>

                <div className="bg-white p-3.5 rounded-lg border border-slate-200/80 shadow-xs space-y-2">
                  <div className="text-xs font-bold text-[#0F2B48]">Why Fractional HR?</div>
                  <ul className="text-[11px] text-slate-600 space-y-1.5">
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#2EA44F] shrink-0 mt-0.5" />
                      <span>Executive HR expertise at <strong>30-40% of the cost</strong> of a full-time executive.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#2EA44F] shrink-0 mt-0.5" />
                      <span>Immediate protection against costly Labour Court disputes and statutory penalties.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#2EA44F] shrink-0 mt-0.5" />
                      <span>Institutional payroll rigor ensuring 100% on-time filings.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#0F2B48] text-white space-y-1">
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#2EA44F]">
                  Our Promise
                </div>
                <p className="text-[11px] text-slate-200 leading-relaxed italic">
                  "Connecting exceptional African talent with purposeful growth opportunities while safeguarding employer compliance."
                </p>
              </div>
            </div>

            {/* PANEL 6: BACK COVER (Contact, Office Coordinates, QR Scan) */}
            <div className="p-6 bg-[#0F2B48] text-white flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#3E7CB1]">
                    PANEL 6 • BACK COVER
                  </span>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-[#2EA44F]/20 text-[#2EA44F] border border-[#2EA44F]/40">
                    GET IN TOUCH
                  </span>
                </div>

                <div className="pt-2">
                  <BrandLogo variant="horizontal" theme="dark" size="sm" showTagline={false} />
                </div>

                <div className="space-y-2.5 pt-2 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#2EA44F] shrink-0 mt-0.5" />
                    <span>{COMPANY_INFO.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#2EA44F] shrink-0" />
                    <span>{COMPANY_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#2EA44F] shrink-0" />
                    <span>{COMPANY_INFO.email}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-[#2EA44F] shrink-0" />
                    <span>www.talentbridgeglobal.com</span>
                  </div>
                </div>

                {/* Statutory Badges */}
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1 text-[10px] text-slate-300">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2EA44F]" />
                    <span>Accreditation and Standards</span>
                  </div>
                  <div>Certified IHRM Compliance • Registered Kenya Labour Law Advisors • Privacy Certified</div>
                </div>
              </div>

              {/* QR Code Booking Box */}
              <div className="bg-white p-3.5 rounded-xl text-slate-900 flex items-center gap-3">
                <div className="p-1 rounded-lg bg-slate-100 border border-slate-200 shrink-0">
                  <QrCode className="w-11 h-11 text-[#0F2B48]" />
                </div>
                <div>
                  <div className="text-[11px] font-black text-[#0F2B48] uppercase leading-tight">
                    Free 30-Min HR Audit
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">
                    Scan with any smartphone camera to schedule a confidential diagnostic session.
                  </p>
                </div>
              </div>
            </div>

            {/* PANEL 1: FRONT COVER (Brand Hero and Prime Value Proposition) */}
            <div className="p-6 bg-gradient-to-b from-[#0B1D30] to-[#0F2B48] text-white flex flex-col justify-between space-y-6 relative overflow-hidden">
              {/* Subtle architectural background line */}
              <div className="absolute -right-12 -top-12 opacity-15 pointer-events-none">
                <BrandLogo variant="icon-only" theme="dark" size={240} />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#2EA44F]">
                  PANEL 1 • FRONT COVER
                </div>

                <div className="pt-2">
                  <BrandLogo variant="stacked" theme="dark" size={68} showTagline={true} />
                </div>

                <div className="w-12 h-1 bg-[#2EA44F] rounded-full mt-4" />

                <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  High-Impact HR Leadership and Statutory Payroll Solutions
                </h2>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Tailored outsourced people operations, compliance auditing, and senior advisory for scaling businesses and healthcare institutions across Africa.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-slate-700/80 flex items-center justify-between text-[11px]">
                <span className="font-bold text-[#2EA44F] uppercase tracking-wider">
                  Corporate Capability Profile
                </span>
                <span className="text-slate-400">2026 Edition</span>
              </div>
            </div>

          </div>
        )}

        {/* ==========================================================
            INSIDE SPREAD: 3-Panel Seamless Panoramic Layout
            Panel 2: Core HRBP and Advisory | Panel 3: Payroll and Compliance | Panel 4: Executive Search and Retainers
        ========================================================== */}
        {activeSide === 'inside' && (
          <div className="min-w-[760px] max-w-5xl mx-auto bg-white rounded-xl shadow-xl border border-slate-300 grid grid-cols-3 divide-x-2 divide-dashed divide-slate-200 overflow-hidden">
            
            {/* PANEL 2: FRACTIONAL HR BUSINESS PARTNERING */}
            <div className="p-6 flex flex-col justify-between space-y-4 bg-white text-slate-900">
              <div className="space-y-3">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#3E7CB1]">
                  PANEL 2 • PILLAR ONE
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#2EA44F]/10 border border-[#2EA44F]/30 flex items-center justify-center text-[#2EA44F]">
                    <Users className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-black text-[#0F2B48] leading-tight">
                    Fractional HR Business Partnering
                  </h4>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Embed dedicated senior HR leaders directly into your executive leadership team without committing to full-time executive payroll.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-[#0F2B48]">Key Capabilities:</div>
                  <ul className="text-[11px] text-slate-600 space-y-1.5">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2EA44F] shrink-0 mt-0.5" />
                      <span>Compliant employment contracts and offer letters</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2EA44F] shrink-0 mt-0.5" />
                      <span>Staff handbooks, Disciplinary and Grievance Codes</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2EA44F] shrink-0 mt-0.5" />
                      <span>Performance management KPIs and appraisals</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2EA44F] shrink-0 mt-0.5" />
                      <span>Organizational structuring and role clarity</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#F4F1EA] border border-slate-200 text-[10px] text-slate-700">
                <strong>Ideal For:</strong> Scaling SMEs (10-150 staff) needing professional HR governance without executive headcount costs.
              </div>
            </div>

            {/* PANEL 3: ZERO-ERROR STATUTORY PAYROLL */}
            <div className="p-6 flex flex-col justify-between space-y-4 bg-slate-50/70 text-slate-900">
              <div className="space-y-3">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#3E7CB1]">
                  PANEL 3 • PILLAR TWO
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0F2B48]/10 border border-[#0F2B48]/30 flex items-center justify-center text-[#0F2B48]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-black text-[#0F2B48] leading-tight">
                    Statutory Payroll and Audit Defence
                  </h4>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Eliminate calculation vulnerabilities and ensure 100% on-time statutory remittances across all Kenyan and East African regulatory bodies.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <div className="text-[11px] font-bold text-[#0F2B48]">Statutory Covered:</div>
                  <div className="grid grid-cols-2 gap-1.5 text-[10px] font-semibold text-slate-700">
                    <div className="p-1.5 bg-white rounded border border-slate-200 text-center">PAYE / KRA Returns</div>
                    <div className="p-1.5 bg-white rounded border border-slate-200 text-center">SHA / SHIF Health</div>
                    <div className="p-1.5 bg-white rounded border border-slate-200 text-center">NSSF Tier I and II</div>
                    <div className="p-1.5 bg-white rounded border border-slate-200 text-center">Affordable Housing (AHL)</div>
                    <div className="p-1.5 bg-white rounded border border-slate-200 text-center">NITA Training Levy</div>
                    <div className="p-1.5 bg-white rounded border border-slate-200 text-center">Confidential Payslips</div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#0F2B48] text-white text-[10px]">
                <div className="font-bold text-[#2EA44F]">Audit Guarantee:</div>
                <div className="text-slate-300 mt-0.5">We represent and defend all payroll submissions directly with tax authorities during audits.</div>
              </div>
            </div>

            {/* PANEL 4: EXECUTIVE SEARCH and ENGAGEMENT MODELS */}
            <div className="p-6 flex flex-col justify-between space-y-4 bg-white text-slate-900">
              <div className="space-y-3">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#3E7CB1]">
                  PANEL 4 • PILLAR THREE
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#C9A45C]/15 border border-[#C9A45C]/40 flex items-center justify-center text-[#0F2B48]">
                    <Award className="w-4 h-4 text-[#C9A45C]" />
                  </div>
                  <h4 className="text-base font-black text-[#0F2B48] leading-tight">
                    Executive Search and Flexible Models
                  </h4>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Targeted leadership headhunting connecting African talent with global opportunities, backed by structured engagement tiers.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-[#0F2B48]">Flexible Engagement:</div>
                  <div className="space-y-1.5 text-[11px] text-slate-600">
                    <div className="p-2 rounded bg-slate-50 border border-slate-200">
                      <strong className="text-[#0F2B48]">Monthly Retainer:</strong> 2 to 4 days/month of hands-on embedded executive advisory.
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200">
                      <strong className="text-[#0F2B48]">Project Sprint:</strong> Rapid 4-8 week policy overhaul, audit cleanup, or restructuring.
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200">
                      <strong className="text-[#0F2B48]">Ad-Hoc Advisory:</strong> On-call guidance for disciplinary hearings and terminations.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#2EA44F]/15 border border-[#2EA44F]/30 text-[10px] text-slate-900">
                <strong>Next Step:</strong> Contact our senior partner today to map your compliance score and custom retainer package.
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Production and Folding Guide */}
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <strong className="text-slate-900 block mb-1">Paper and Stock:</strong>
          <span>170gsm – 200gsm Silk / Matt coated art paper with matte aqueous lamination.</span>
        </div>
        <div>
          <strong className="text-slate-900 block mb-1">Fold Mechanics:</strong>
          <span>Roll Fold or Z-Fold (A4 to DL size: 99mm × 210mm folded finished dimensions).</span>
        </div>
        <div>
          <strong className="text-slate-900 block mb-1">Color and Finishing:</strong>
          <span>Full CMYK with spot UV varnish on the Talent Bridge bridge emblem and front title.</span>
        </div>
      </div>
    </div>
  );
}
