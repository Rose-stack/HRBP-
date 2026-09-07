import { Activity, TrendingUp, HeartHandshake, Building2, CheckCircle2 } from 'lucide-react';
import { WHO_WE_WORK_WITH_SECTORS } from '../data/companyData';

interface WhoWeWorkWithProps {
  onSelectSector: (sectorTitle: string) => void;
}

export default function WhoWeWorkWith({ onSelectSector }: WhoWeWorkWithProps) {
  const getSectorIcon = (id: string) => {
    switch (id) {
      case 'healthcare':
        return <Activity className="w-6 h-6 text-[#1B3A5C]" />;
      case 'smes':
        return <TrendingUp className="w-6 h-6 text-[#1B3A5C]" />;
      case 'non-profits':
        return <HeartHandshake className="w-6 h-6 text-[#1B3A5C]" />;
      case 'professional-services':
        return <Building2 className="w-6 h-6 text-[#1B3A5C]" />;
      default:
        return <Building2 className="w-6 h-6 text-[#1B3A5C]" />;
    }
  };

  return (
    <section id="sectors" className="py-20 bg-[#F4F1EA]/60 border-b border-[#3E7CB1]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1B3A5C]">
            <span className="w-6 h-0.5 bg-[#C9A45C] inline-block" />
            <span className="text-[#C9A45C]">WHO WE WORK WITH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B3A5C] tracking-tight font-display">
            Built for organisations that need HR done right, not just done.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We operate where people, daily operations, and compliance are inseparable. Our embedded model flexes to the distinct culture and regulatory demands of your industry.
          </p>
        </div>

        {/* Sectors 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHO_WE_WORK_WITH_SECTORS.map((sector) => (
            <div
              key={sector.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#C9A45C]/60 transition-all flex flex-col justify-between text-left"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F4F1EA] border border-[#C9A45C]/30 flex items-center justify-center mb-4">
                  {getSectorIcon(sector.id)}
                </div>
                <h3 className="text-xl font-bold text-[#1B3A5C] mb-1 font-display">
                  {sector.title}
                </h3>
                <p className="text-xs font-semibold text-[#3E7CB1] mb-3">
                  {sector.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {sector.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Tailored Benefits:
                  </span>
                  {sector.keyBenefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectSector(sector.title)}
                  className="w-full text-center text-xs font-bold text-[#1B3A5C] hover:text-[#C9A45C] bg-[#F4F1EA] hover:bg-[#C9A45C]/15 py-2.5 rounded-lg transition-colors cursor-pointer border border-[#3E7CB1]/20"
                >
                  Consult for {sector.title} &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
