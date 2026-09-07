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
  Check,
  AlertTriangle,
  Zap,
  Clock
} from 'lucide-react';
import BrandLogo from '../BrandLogo';
import { COMPANY_INFO } from '../../data/companyData';

export default function PromotionalFlier() {
  const [flierFormat, setFlierFormat] = useState<'a4' | 'a5-front' | 'a5-back'>('a4');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 text-left">
      {/* Controls and Format Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-extrabold bg-[#2EA44F]/15 text-[#2EA44F] border border-[#2EA44F]/30 uppercase tracking-wider">
              Promotional Campaign Fliers
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {flierFormat === 'a4' ? 'A4 Executive One-Pager (210mm × 297mm)' : 'A5 Direct Handbill (148mm × 210mm)'}
            </span>
          </div>
          <h3 className="text-lg font-bold text-[#0F2B48] mt-1">
            Business Development Fliers and Leaflets
          </h3>
          <p className="text-xs text-slate-500">
            High-converting marketing fliers engineered for direct sales outreach, business summits, and door drops.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex rounded-lg bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setFlierFormat('a4')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                flierFormat === 'a4'
                  ? 'bg-white text-[#0F2B48] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F2B48]'
              }`}
            >
              A4 Corporate One-Pager
            </button>
            <button
              onClick={() => setFlierFormat('a5-front')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                flierFormat === 'a5-front'
                  ? 'bg-white text-[#0F2B48] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F2B48]'
              }`}
            >
              A5 Flyer (Side A)
            </button>
            <button
              onClick={() => setFlierFormat('a5-back')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                flierFormat === 'a5-back'
                  ? 'bg-white text-[#0F2B48] shadow-xs'
                  : 'text-slate-600 hover:text-[#0F2B48]'
              }`}
            >
              A5 Flyer (Side B)
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 bg-[#0F2B48] hover:bg-[#163353] text-white font-bold px-3.5 py-2 rounded-lg text-xs transition-colors cursor-pointer shadow-sm shrink-0"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Flier</span>
          </button>
        </div>
      </div>

      {/* Flier Visual Canvas */}
      <div className="bg-slate-100 p-4 sm:p-8 rounded-2xl border border-slate-200 shadow-inner flex justify-center overflow-x-auto">
        
        {/* ==========================================================
            A4 EXECUTIVE ONE-PAGER (Comprehensive capability overview)
        ========================================================== */}
        {flierFormat === 'a4' && (
          <div className="w-[620px] bg-white rounded-2xl shadow-2xl border border-slate-300 overflow-hidden flex flex-col justify-between text-slate-900 p-8 relative">
            
            {/* Top Masthead */}
            <div className="flex items-center justify-between pb-5 border-b-2 border-[#0F2B48]">
              <BrandLogo variant="horizontal" theme="light" size="md" showTagline={true} />
              <div className="text-right">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                  CAPABILITY BRIEFING
                </span>
                <span className="text-xs font-bold text-[#2EA44F]">
                  Kenya and East Africa
                </span>
              </div>
            </div>

            {/* Pain Point Callout Ribbon */}
            <div className="my-5 p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500 text-white shrink-0">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div className="text-xs text-amber-900">
                <strong>Growing without formal HR?</strong> 78% of SME labour disputes and KRA payroll penalties stem from outdated contracts, informal disciplinary steps, or statutory calculation errors.
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2 mb-4">
              <div className="text-[11px] font-black uppercase tracking-widest text-[#2EA44F]">
                THE FRACTIONAL HR ADVANTAGE
              </div>
              <h2 className="text-2xl font-black text-[#0F2B48] leading-tight">
                Senior HR Director Expertise and Flawless Payroll — At a Fraction of Full-Time Cost.
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Talent Bridge Global gives your leadership team hands-on HR governance, ironclad employment policies, and zero-error statutory payroll without the commitment of a heavy permanent overhead.
              </p>
            </div>

            {/* 3 Solution Columns */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-7 h-7 rounded-lg bg-[#2EA44F]/15 flex items-center justify-center text-[#2EA44F]">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-xs font-black text-[#0F2B48]">Fractional HRBP</div>
                <ul className="text-[10px] text-slate-600 space-y-1">
                  <li>• Custom Employment Contracts</li>
                  <li>• Grievance and Disciplinary Hearings</li>
                  <li>• Staff Handbooks and Policies</li>
                  <li>• KPI Appraisal Frameworks</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-7 h-7 rounded-lg bg-[#0F2B48]/15 flex items-center justify-center text-[#0F2B48]">
                  <ShieldCheck className="w-4 h-4 text-[#0F2B48]" />
                </div>
                <div className="text-xs font-black text-[#0F2B48]">Statutory Payroll</div>
                <ul className="text-[10px] text-slate-600 space-y-1">
                  <li>• Zero-Error Monthly Payroll</li>
                  <li>• PAYE, SHIF/SHA, NSSF Filings</li>
                  <li>• Housing Levy (AHL) and NITA</li>
                  <li>• KRA Audit Defense and Clearance</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-7 h-7 rounded-lg bg-[#C9A45C]/20 flex items-center justify-center text-[#0F2B48]">
                  <TrendingUp className="w-4 h-4 text-[#C9A45C]" />
                </div>
                <div className="text-xs font-black text-[#0F2B48]">Executive Placement</div>
                <ul className="text-[10px] text-slate-600 space-y-1">
                  <li>• Leadership Headhunting</li>
                  <li>• Rigorous Competency Vetting</li>
                  <li>• African Talent for Global Roles</li>
                  <li>• Structured Retainer Terms</li>
                </ul>
              </div>
            </div>

            {/* Proof and Quantified Results Bar */}
            <div className="bg-[#0F2B48] text-white p-4 rounded-xl flex items-center justify-around text-center mb-5">
              <div>
                <div className="text-xl font-black text-[#2EA44F]">65%</div>
                <div className="text-[10px] text-slate-300 uppercase">Cost Savings</div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div>
                <div className="text-xl font-black text-white">100%</div>
                <div className="text-[10px] text-slate-300 uppercase">On-Time Remittances</div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div>
                <div className="text-xl font-black text-[#C9A45C]">0</div>
                <div className="text-[10px] text-slate-300 uppercase">Labour Penalties</div>
              </div>
            </div>

            {/* Bottom Contact and Booking Footnote */}
            <div className="pt-4 border-t-2 border-slate-100 flex items-center justify-between">
              <div className="space-y-1 text-xs text-slate-600">
                <div className="font-bold text-[#0F2B48] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#2EA44F]" />
                  <span>{COMPANY_INFO.address}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <span className="flex items-center gap-1 font-semibold">
                    <Phone className="w-3.5 h-3.5 text-[#2EA44F]" /> {COMPANY_INFO.phone}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-[#2EA44F]" /> {COMPANY_INFO.email}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-[#F8FAFC] border border-slate-200 p-2 rounded-xl">
                <div className="p-1 bg-white rounded border border-slate-200">
                  <QrCode className="w-9 h-9 text-[#0F2B48]" />
                </div>
                <div className="text-[10px] leading-tight">
                  <div className="font-bold text-[#0F2B48]">Scan for 30-Min</div>
                  <div className="text-[#2EA44F] font-semibold">Diagnostic Audit</div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ==========================================================
            A5 PROMOTIONAL FLYER: SIDE A (FRONT - Bold Catchy Callout)
        ========================================================== */}
        {flierFormat === 'a5-front' && (
          <div className="w-[440px] bg-gradient-to-b from-[#0F2B48] via-[#14293f] to-[#0B1D30] text-white rounded-2xl shadow-2xl border-2 border-slate-700 overflow-hidden flex flex-col justify-between p-7 relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/15">
              <BrandLogo variant="horizontal" theme="dark" size="sm" showTagline={false} />
              <span className="px-2 py-0.5 rounded bg-[#2EA44F]/20 text-[#2EA44F] border border-[#2EA44F]/40 text-[10px] font-black tracking-wider uppercase">
                DIRECT FLYER
              </span>
            </div>

            <div className="space-y-4 my-auto py-6 text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold border border-white/15">
                <Zap className="w-3.5 h-3.5 text-[#2EA44F]" />
                <span>Fractional Human Resources For Scaling SMEs</span>
              </div>

              <h2 className="text-2xl font-black text-white leading-snug">
                Is Your Business Legally Protected Against Costly Employee Disputes?
              </h2>

              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Get senior HR leadership on your side without hiring a full-time department. Clean policies, disciplined processes, and on-time statutory remittances.
              </p>

              <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/15 text-left space-y-2">
                <div className="text-xs font-bold text-[#2EA44F] uppercase tracking-wider">What We Handle For You:</div>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-200">
                  <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#2EA44F]" /> Employment Contracts</div>
                  <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#2EA44F]" /> Disciplinary Codes</div>
                  <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#2EA44F]" /> Monthly Payroll</div>
                  <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#2EA44F]" /> KRA/SHIF Remittances</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/15 flex items-center justify-between bg-black/20 -mx-7 -mb-7 p-5 rounded-b-2xl">
              <div>
                <div className="text-xs font-bold text-white">Talent Bridge Global Solutions</div>
                <div className="text-[11px] text-slate-300">{COMPANY_INFO.phone} • {COMPANY_INFO.email}</div>
              </div>
              <div className="px-3 py-1.5 bg-[#2EA44F] text-white rounded-lg text-xs font-black uppercase">
                Flip For Rates →
              </div>
            </div>
          </div>
        )}

        {/* ==========================================================
            A5 PROMOTIONAL FLYER: SIDE B (BACK - Engagement Tiers and QR)
        ========================================================== */}
        {flierFormat === 'a5-back' && (
          <div className="w-[440px] bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-300 overflow-hidden flex flex-col justify-between p-7 relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="text-xs font-black uppercase tracking-widest text-[#0F2B48]">
                ENGAGEMENT OPTIONS and TIERS
              </div>
              <span className="text-xs text-[#2EA44F] font-bold">Flexible Plans</span>
            </div>

            <div className="space-y-3 my-auto py-4">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black text-[#0F2B48]">1. Monthly Advisory Retainer</span>
                  <span className="text-[10px] font-bold text-[#2EA44F] bg-[#2EA44F]/10 px-2 py-0.5 rounded">Most Popular</span>
                </div>
                <p className="text-[11px] text-slate-600">
                  2-4 days per month of dedicated executive HRBP leadership, board reporting, and continuous staff oversight.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black text-[#0F2B48]">2. Rapid Compliance Sprint</span>
                  <span className="text-[10px] font-bold text-slate-500">4-8 Weeks</span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Total overhaul of existing contracts, handbooks, job descriptions, and salary benchmarking.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black text-[#0F2B48]">3. Outsourced Statutory Payroll</span>
                  <span className="text-[10px] font-bold text-slate-500">Per Employee/Mo</span>
                </div>
                <p className="text-[11px] text-slate-600">
                  End-to-end payslip generation, KRA, SHA/SHIF, NSSF, and Housing Levy filing with audit defense.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 bg-[#0F2B48] text-white -mx-7 -mb-7 p-5 rounded-b-2xl flex items-center justify-between">
              <div>
                <div className="text-xs font-black uppercase text-[#2EA44F]">Book Your Free Audit</div>
                <div className="text-[11px] text-slate-300">Call {COMPANY_INFO.phone}</div>
                <div className="text-[10px] text-slate-400">www.talentbridgeglobal.com</div>
              </div>
              <div className="p-1 bg-white rounded-lg">
                <QrCode className="w-10 h-10 text-[#0F2B48]" />
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Printing Guidelines */}
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <strong className="text-slate-900 block mb-1">Recommended Stock:</strong>
          <span>150gsm – 170gsm Gloss or Silk finish for vibrant color rendering and tactile weight.</span>
        </div>
        <div>
          <strong className="text-slate-900 block mb-1">Print Batch Quantities:</strong>
          <span>Runs of 500 – 2,500 units for networking breakfasts, career summits, and corporate drop-ins.</span>
        </div>
        <div>
          <strong className="text-slate-900 block mb-1">Lead Time and Finishing:</strong>
          <span>24-48 hours standard digital or offset print turnaround with precision guillotine trimming.</span>
        </div>
      </div>
    </div>
  );
}
