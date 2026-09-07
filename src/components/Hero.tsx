import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Users, 
  FileCheck, 
  Landmark, 
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useTheme } from '../context/ThemeContext';
import BrandLogo from './BrandLogo';

interface HeroProps {
  onOpenContact: (service?: string) => void;
  onOpenAudit: () => void;
}

export default function Hero({ onOpenContact, onOpenAudit }: HeroProps) {
  const { currentTheme, getRadiusClass } = useTheme();

  const cardRadius = getRadiusClass('card');
  const btnRadius = getRadiusClass('btn');
  const badgeRadius = getRadiusClass('badge');

  return (
    <section className={`relative overflow-hidden ${currentTheme.classes.heroBg} text-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800 transition-colors duration-300`}>
      {/* Background Accent Glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl" 
          style={{ backgroundColor: currentTheme.palette.accent }} 
        />
        <div className="absolute top-1/2 -left-24 w-96 h-96 rounded-full bg-slate-700 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline Badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${badgeRadius} ${currentTheme.classes.badge} text-xs sm:text-sm font-semibold tracking-wide border`}>
              <Sparkles className="w-4 h-4" />
              <span>FRACTIONAL HRBP • OUTSOURCED HR and PAYROLL</span>
            </div>

            {/* Main Headline */}
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight ${currentTheme.fontDisplay}`}>
              Hands-on HR and payroll expertise,{' '}
              <span className={currentTheme.classes.accentText}>
                without the overhead of a full-time hire.
              </span>
            </h1>

            {/* Sub-headline / Mission Alignment */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
              Practical HR leadership for businesses that don't need — or can't yet justify — a full in-house HR department. We connect exceptional African talent with meaningful opportunities while ensuring your organization stays compliant, culturally cohesive, and protected from costly litigation.
            </p>

            {/* 3 Core Grounding Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className={`bg-[#163353]/80 border border-[#3E7CB1]/30 ${cardRadius} p-3.5 hover:border-[#3E7CB1]/60 transition-colors`}>
                <div className={`flex items-center gap-2 ${currentTheme.classes.accentText} font-semibold text-xs sm:text-sm`}>
                  <Users className="w-4 h-4" />
                  <span>Embedded, Not Remote</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  We work inside your business on a schedule that fits your operations.
                </p>
              </div>

              <div className={`bg-[#163353]/80 border border-[#3E7CB1]/30 ${cardRadius} p-3.5 hover:border-[#3E7CB1]/60 transition-colors`}>
                <div className={`flex items-center gap-2 ${currentTheme.classes.accentText} font-semibold text-xs sm:text-sm`}>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Compliance-First</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Every policy and contract is rigorously verified against statutory mandates.
                </p>
              </div>

              <div className={`bg-[#163353]/80 border border-[#3E7CB1]/30 ${cardRadius} p-3.5 hover:border-[#3E7CB1]/60 transition-colors`}>
                <div className={`flex items-center gap-2 ${currentTheme.classes.accentText} font-semibold text-xs sm:text-sm`}>
                  <FileCheck className="w-4 h-4" />
                  <span>Outcomes Driven</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Systems judged by measurable results: zero filing delays and audit pass rates.
                </p>
              </div>
            </div>

            {/* Primary Action Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onOpenContact()}
                className={`inline-flex items-center justify-center gap-2 ${currentTheme.classes.primaryButton} font-bold px-6 py-3.5 ${btnRadius} transition-all cursor-pointer text-base`}
              >
                <span>Book Strategic Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenAudit}
                className={`inline-flex items-center justify-center gap-2 ${currentTheme.classes.secondaryButton} font-semibold px-5 py-3.5 ${btnRadius} transition-all cursor-pointer text-sm border`}
              >
                <Landmark className={`w-4 h-4 ${currentTheme.classes.accentText}`} />
                <span>Take 60s HR Health Check</span>
              </button>
            </div>

            {/* Trust Quote */}
            <div className="pt-2 text-xs text-slate-300 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Advising SMEs, healthcare institutions, and multinationals across East Africa.</span>
            </div>
          </div>

          {/* Right Column: Key Metrics and Executive Brief Card */}
          <div className="lg:col-span-5">
            <div className={`bg-[#14293f]/95 border border-[#3E7CB1]/40 ${cardRadius} p-6 sm:p-8 shadow-2xl backdrop-blur-sm relative text-left`}>
              <div className="flex items-center justify-between pb-5 border-b border-[#3E7CB1]/30">
                <BrandLogo variant="horizontal" theme="dark" size="sm" showTagline={false} />
                <div className="hidden sm:inline-flex items-center px-2.5 py-1 rounded bg-[#2EA44F]/15 text-[#2EA44F] border border-[#2EA44F]/30 text-[10px] font-bold tracking-wider uppercase">
                  VERIFIED ADVISORY
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 py-5 border-b border-[#3E7CB1]/30">
                {COMPANY_INFO.stats.map((stat, idx) => (
                  <div key={idx} className={`bg-[#1B3A5C]/60 ${btnRadius} p-3 border border-[#3E7CB1]/30`}>
                    <div className={`text-xl sm:text-2xl font-extrabold ${currentTheme.classes.accentText} ${currentTheme.fontDisplay}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Line Fast List */}
              <div className="pt-5 space-y-2.5">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Comprehensive Service Lines:
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Fractional HR Business Partnering (Retainer)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Custom Policy Manuals and Employment Handbooks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Payroll Processing and Statutory Returns (PAYE, SHA, NSSF, AHL)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Executive Search and Structured Onboarding Induction</span>
                  </div>
                </div>

                {/* Consultant signature line */}
                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div>
                    <span className="text-slate-200 font-semibold block">{COMPANY_INFO.consultantName}</span>
                    <span className="text-slate-400 text-[11px]">{COMPANY_INFO.consultantRole}</span>
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className={`${currentTheme.classes.accentText} hover:underline font-medium transition-colors`}
                  >
                    Direct Email &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
