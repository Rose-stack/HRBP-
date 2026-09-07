import { ArrowRight, ClipboardCheck, PenTool, Rocket, Repeat, CheckCircle2 } from 'lucide-react';
import { HOW_WE_WORK_STEPS } from '../data/companyData';

export default function ProcessSection() {
  const getStepIcon = (stepNum: string) => {
    switch (stepNum) {
      case '01':
        return <ClipboardCheck className="w-5 h-5 text-[#1B3A5C]" />;
      case '02':
        return <PenTool className="w-5 h-5 text-[#1B3A5C]" />;
      case '03':
        return <Rocket className="w-5 h-5 text-[#1B3A5C]" />;
      case '04':
        return <Repeat className="w-5 h-5 text-[#1B3A5C]" />;
      default:
        return <ClipboardCheck className="w-5 h-5 text-[#1B3A5C]" />;
    }
  };

  return (
    <section id="how-we-work" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="max-w-3xl text-left space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1B3A5C]">
            <span className="w-6 h-0.5 bg-[#C9A45C] inline-block" />
            <span className="text-[#C9A45C]">HOW WE WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B3A5C] tracking-tight font-display">
            A disciplined four-stage process, built for operational speed.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            No administrative inertia or endless discovery decks. We follow an agile four-stage methodology designed to secure early statutory compliance wins while cementing durable operational discipline.
          </p>
        </div>

        {/* 4 Steps Progression Grid */}
        <div className="relative">
          {/* Subtle Horizontal Connector Bar (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-0.5 bg-slate-200 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {HOW_WE_WORK_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-[#F4F1EA]/40 rounded-xl p-6 border border-slate-200/90 hover:border-[#3E7CB1] hover:bg-white hover:shadow-md transition-all flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Step number and icon badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:border-[#C9A45C]/50 transition-all">
                      {getStepIcon(step.step)}
                    </div>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-[#1B3A5C] font-display transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#1B3A5C]/10 text-[#1B3A5C] text-[11px] font-bold mb-2">
                    {step.badge}
                  </div>

                  <h3 className="text-xl font-bold text-[#1B3A5C] mb-1 font-display">
                    {step.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#3E7CB1] uppercase tracking-wider mb-3">
                    {step.tagline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 text-xs text-slate-700">
                  <span className="font-semibold block text-[#1B3A5C] mb-1">Deliverable Focus:</span>
                  <div className="flex items-start gap-1.5 text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span>{step.focus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="bg-[#1B3A5C] text-white rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left border border-[#3E7CB1]/30 shadow-lg">
          <div className="space-y-1.5 max-w-2xl">
            <h4 className="text-lg font-bold font-display text-white">
              Ready to assess your current HR and payroll health?
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              We begin every client relationship with an initial diagnostic conversation to map immediate statutory risks and operational priorities.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#C9A45C] hover:bg-[#b8934b] text-[#1B3A5C] font-bold px-6 py-3 rounded-lg transition-colors text-sm shrink-0 shadow-sm"
          >
            <span>Start Diagnostic Review</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
