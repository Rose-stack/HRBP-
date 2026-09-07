import { CheckCircle2, ArrowRight, Sparkles, Shield, Clock } from 'lucide-react';
import { ENGAGEMENT_MODELS } from '../data/companyData';

interface EngagementModelsProps {
  onSelectModel: (modelName: string) => void;
}

export default function EngagementModels({ onSelectModel }: EngagementModelsProps) {
  return (
    <section id="engagement" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1B3A5C]">
            <span className="w-6 h-0.5 bg-[#C9A45C] inline-block" />
            <span className="text-[#C9A45C]">ENGAGEMENT MODELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B3A5C] tracking-tight font-display">
            Flexible ways to work together.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose the engagement structure that aligns with your operational cadence, budget predictability, and immediate strategic priorities.
          </p>
        </div>

        {/* 3 Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {ENGAGEMENT_MODELS.map((model) => (
            <div
              key={model.id}
              className={`rounded-2xl p-7 flex flex-col justify-between text-left transition-all relative ${
                model.isPopular
                  ? 'bg-[#1B3A5C] text-white border-2 border-[#C9A45C] shadow-xl lg:-translate-y-2'
                  : 'bg-white text-slate-900 border border-slate-200/90 hover:border-[#3E7CB1]/50 shadow-sm'
              }`}
            >
              {/* Popular Pill */}
              {model.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#C9A45C] text-[#1B3A5C] font-extrabold text-[11px] uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{model.badge}</span>
                </div>
              )}

              <div>
                {!model.isPopular && (
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#3E7CB1] block mb-2">
                    {model.badge}
                  </span>
                )}

                <h3 className={`text-2xl font-bold font-display mb-1 ${model.isPopular ? 'text-white' : 'text-[#1B3A5C]'}`}>
                  {model.name}
                </h3>
                
                <p className={`text-xs font-semibold mb-4 ${model.isPopular ? 'text-[#C9A45C]' : 'text-[#3E7CB1]'}`}>
                  {model.tagline}
                </p>

                <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${model.isPopular ? 'text-slate-200' : 'text-slate-600'}`}>
                  {model.description}
                </p>

                {/* Timeline badge */}
                <div className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg mb-6 ${
                  model.isPopular ? 'bg-[#14293f] text-slate-200' : 'bg-[#F4F1EA] text-[#1B3A5C] border border-[#3E7CB1]/20'
                }`}>
                  <Clock className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                  <span>Cadence: <strong>{model.timeline}</strong></span>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 pt-2 border-t border-slate-700/30">
                  <span className={`text-[11px] font-bold uppercase tracking-wider block ${
                    model.isPopular ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                    Scope and Features:
                  </span>
                  <ul className="space-y-2.5">
                    {model.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          model.isPopular ? 'text-[#C9A45C]' : 'text-emerald-600'
                        }`} />
                        <span className={model.isPopular ? 'text-slate-200' : 'text-slate-700'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Target Audience and Button */}
              <div className="pt-6 mt-6 border-t border-slate-700/30 space-y-4">
                <div className="text-xs">
                  <span className={`block font-semibold ${model.isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                    Recommended For:
                  </span>
                  <p className={model.isPopular ? 'text-slate-300' : 'text-slate-600'}>
                    {model.recommendedFor}
                  </p>
                </div>

                <button
                  onClick={() => onSelectModel(model.name)}
                  className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    model.isPopular
                      ? 'bg-[#C9A45C] hover:bg-[#b8934b] text-[#1B3A5C] shadow-md shadow-[#C9A45C]/20'
                      : 'bg-[#1B3A5C] hover:bg-[#16314f] text-[#F4F1EA] border border-[#3E7CB1]/30'
                  }`}
                >
                  <span>Select {model.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
