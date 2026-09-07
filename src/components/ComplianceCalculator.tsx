import { useState } from 'react';
import { ShieldAlert, CheckCircle2, AlertTriangle, ArrowRight, RotateCcw, HelpCircle } from 'lucide-react';
import { AUDIT_QUESTIONS } from '../data/companyData';

interface ComplianceCalculatorProps {
  onScheduleAudit: () => void;
}

export default function ComplianceCalculator({ onScheduleAudit }: ComplianceCalculatorProps) {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
  });

  const handleAnswer = (id: string, value: boolean) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const answeredCount = Object.values(answers).filter(v => v !== null).length;
  const isComplete = answeredCount === AUDIT_QUESTIONS.length;

  const yesCount = Object.values(answers).filter(v => v === true).length;
  const complianceScore = Math.round((yesCount / AUDIT_QUESTIONS.length) * 100);

  const resetAudit = () => {
    setAnswers({
      q1: null,
      q2: null,
      q3: null,
      q4: null,
    });
  };

  return (
    <section id="compliance-check" className="py-20 bg-[#F4F1EA]/60 border-b border-[#3E7CB1]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1B3A5C]">
            <span className="w-6 h-0.5 bg-[#C9A45C] inline-block" />
            <span className="text-[#C9A45C]">INTERACTIVE DIAGNOSTIC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B3A5C] tracking-tight font-display">
            60-Second HR and Labour Law Compliance Check
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Answer 4 fundamental questions regarding your current contracts, statutory remittances, and disciplinary workflows to assess your organization's legal and financial exposure under Kenyan labour regulations.
          </p>
        </div>

        {/* Audit Questions Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="pb-4 border-b border-slate-100 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
              <span>Progress: {answeredCount} of {AUDIT_QUESTIONS.length} Questions Answered</span>
              {answeredCount > 0 && (
                <button
                  onClick={resetAudit}
                  className="flex items-center gap-1 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-[#1B3A5C] h-full transition-all duration-300 rounded-full"
                style={{ width: `${(answeredCount / AUDIT_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="space-y-6">
            {AUDIT_QUESTIONS.map((q, idx) => {
              const currentAns = answers[q.id];
              return (
                <div key={q.id} className="p-4 sm:p-5 rounded-xl bg-[#F4F1EA]/40 border border-slate-200/80 space-y-3 hover:border-[#3E7CB1]/50 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#1B3A5C] text-[#C9A45C] text-xs font-bold flex items-center justify-center font-display">
                          {idx + 1}
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#1B3A5C]">
                          {q.lawReference}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-[#1B3A5C] pt-1">
                        {q.question}
                      </p>
                    </div>

                    {/* Yes / No Toggle Buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleAnswer(q.id, true)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          currentAns === true
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => handleAnswer(q.id, false)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          currentAns === false
                            ? 'bg-rose-600 text-white shadow-xs'
                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        No / Unsure
                      </button>
                    </div>
                  </div>

                  {/* Context note */}
                  <div className="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200/60 flex items-start gap-2">
                    <HelpCircle className="w-3.5 h-3.5 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>Statutory Exposure: </strong>{q.riskDescription}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Results Outcome Box */}
          {isComplete && (
            <div className={`mt-8 p-6 rounded-xl border transition-all animate-in fade-in duration-300 ${
              complianceScore === 100
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                : complianceScore >= 50
                ? 'bg-amber-50 border-amber-200 text-amber-950'
                : 'bg-rose-50 border-rose-200 text-rose-950'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-black/10">
                <div>
                  <div className="flex items-center gap-2 font-bold text-sm">
                    {complianceScore === 100 ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    )}
                    <span>Compliance Risk Assessment:</span>
                    <span className="uppercase tracking-wider font-extrabold">
                      {complianceScore === 100 ? 'Low Risk' : complianceScore >= 50 ? 'Moderate Exposure' : 'High Litigation Risk'}
                    </span>
                  </div>
                  <p className="text-xs mt-1 text-slate-700">
                    Your preliminary compliance index: <strong>{complianceScore}% compliant</strong> based on the 4 foundational pillars.
                  </p>
                </div>

                <div className="text-2xl font-black font-display text-slate-900">
                  {complianceScore}%
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {complianceScore === 100
                    ? "Great work! Your foundational statutory processes align with core employment mandates. An ongoing audit ensures you maintain compliance with recent changes in SHIF/SHA and Affordable Housing Levy."
                    : "Caution: Gaps in written contracts, statutory deadlines, or disciplinary documentation can expose directors to personal fines and leave the company defenseless in the Employment and Labour Relations Court."}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={onScheduleAudit}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1B3A5C] hover:bg-[#16314f] text-[#F4F1EA] text-xs font-bold px-5 py-2.5 rounded-lg transition-colors cursor-pointer border border-[#3E7CB1]/40"
                  >
                    <span>Request Full Diagnostic Audit with Mercy Karanja</span>
                    <ArrowRight className="w-4 h-4 text-[#C9A45C]" />
                  </button>
                  <span className="text-xs text-slate-700">Confidential and Non-Disruptive Review</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
