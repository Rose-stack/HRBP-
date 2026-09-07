import { TrendingDown, ShieldCheck, FileCheck, Compass, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { WHY_OUTSOURCE_POINTS } from '../data/companyData';

interface WhyOutsourceProps {
  onOpenAudit: () => void;
}

export default function WhyOutsource({ onOpenAudit }: WhyOutsourceProps) {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <TrendingDown className="w-5 h-5 text-amber-600" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      case 2:
        return <FileCheck className="w-5 h-5 text-amber-600" />;
      case 3:
        return <Compass className="w-5 h-5 text-amber-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="why-outsource" className="py-20 bg-white border-b border-[#3E7CB1]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1B3A5C]">
            <span className="w-6 h-0.5 bg-[#C9A45C] inline-block" />
            <span className="text-[#C9A45C]">WHY OUTSOURCE HR AND PAYROLL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B3A5C] tracking-tight font-display">
            The cost of getting this wrong is higher than the cost of outsourcing it.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            In Kenya's tightening statutory environment — with evolving regulations around the Employment Act, SHA, NSSF Act 2013, and the Affordable Housing Levy — non-compliance is an existential business risk.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WHY_OUTSOURCE_POINTS.map((point, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#3E7CB1]/50 transition-all flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#F4F1EA] border border-[#C9A45C]/40 flex items-center justify-center text-[#1B3A5C]">
                    {getIcon(idx)}
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-extrabold text-[#C9A45C] font-display block">
                      {point.stat}
                    </span>
                    <span className="text-[11px] text-slate-700 font-medium">
                      {point.statLabel}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#1B3A5C] mb-2 font-display">
                  {point.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {point.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Callout: Full-Time In-House vs Talent Bridge Embedded */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-[#1B3A5C] text-white p-6 sm:p-8">
            <div className="max-w-2xl text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9A45C]">
                Strategic Cost Comparison
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-1 font-display">
                In-House Full-Time Department vs. Talent Bridge Embedded HRBP
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm mt-2">
                Why small, growing, and mid-sized enterprises across Kenya choose our fractional model:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-left">
            {/* The In-House Burden */}
            <div className="p-6 sm:p-8 space-y-4 bg-red-50/30">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>Traditional Full-Time In-House Hire</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>Heavy Overhead:</strong> Executive base salary + 13th month bonus + pension + medical covers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>Single-Point Vulnerability:</strong> If they fall sick or resign, your HR function halts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>Limited Breadth:</strong> One person rarely excels equally at payroll law, recruiting, policy writing, and litigation defense.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>Long-Term Liability:</strong> Difficult and costly to restructure or part ways if performance lags.</span>
                </li>
              </ul>
            </div>

            {/* The Talent Bridge Solution */}
            <div className="p-6 sm:p-8 space-y-4 bg-emerald-50/30">
              <div className="flex items-center gap-2 text-[#1B3A5C] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#C9A45C]" />
                <span>Talent Bridge Embedded Partnership</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#3E7CB1] font-bold">✓</span>
                  <span><strong>Fractional Predictability:</strong> Pay only for the exact days or deliverables you need with zero benefit liability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3E7CB1] font-bold">✓</span>
                  <span><strong>Continuous Institutional Backup:</strong> Uninterrupted payroll and ongoing legal coverage 365 days a year.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3E7CB1] font-bold">✓</span>
                  <span><strong>Multi-Disciplinary Rigor:</strong> Senior HRBP guidance, certified payroll accuracy, and specialist legal audit knowledge.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3E7CB1] font-bold">✓</span>
                  <span><strong>Agile and Flexible:</strong> Scale up days during high-hiring periods, scale down when operations stabilize.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-[#F4F1EA] border-t border-[#3E7CB1]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#1B3A5C] font-medium text-center sm:text-left">
              Unsure if your current payroll and employment contracts are fully compliant?
            </span>
            <button
              onClick={onOpenAudit}
              className="text-xs font-bold text-[#1B3A5C] bg-[#C9A45C] hover:bg-[#b8934b] px-4 py-2 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              Run Instant 60-Second Compliance Audit &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
