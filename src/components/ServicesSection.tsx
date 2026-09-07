import { useState } from 'react';
import { 
  Briefcase, 
  FileText, 
  Calculator, 
  UserCheck, 
  GraduationCap, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers,
  Table as TableIcon
} from 'lucide-react';
import { SERVICE_PILLARS } from '../data/companyData';
import { ServicePillar } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICE_PILLARS[0].id);
  const [viewMode, setViewMode] = useState<'cards' | 'matrix'>('cards');

  const getServiceIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-[#C9A45C]" };
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase {...props} />;
      case 'FileText':
        return <FileText {...props} />;
      case 'Calculator':
        return <Calculator {...props} />;
      case 'UserCheck':
        return <UserCheck {...props} />;
      case 'GraduationCap':
        return <GraduationCap {...props} />;
      case 'ShieldAlert':
        return <ShieldAlert {...props} />;
      default:
        return <Briefcase {...props} />;
    }
  };

  const activeService = SERVICE_PILLARS.find(s => s.id === selectedServiceId) || SERVICE_PILLARS[0];

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl text-left space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1B3A5C]">
              <span className="w-6 h-0.5 bg-[#C9A45C] inline-block" />
              <span className="text-[#C9A45C]">WHAT WE DO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B3A5C] tracking-tight font-display">
              Five service pillars, one accountable partner.
            </h2>
            <p className="text-base text-slate-600">
              Practical, compliant, and outcome-oriented HR services tailored to your organizational scale and sector realities.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-[#F4F1EA] p-1 rounded-xl border border-[#3E7CB1]/20 self-start md:self-end">
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-white text-[#1B3A5C] shadow-xs'
                  : 'text-slate-600 hover:text-[#1B3A5C]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Interactive Explorer</span>
            </button>
            <button
              onClick={() => setViewMode('matrix')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'matrix'
                  ? 'bg-white text-[#1B3A5C] shadow-xs'
                  : 'text-slate-600 hover:text-[#1B3A5C]'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Detailed Service Matrix</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Interactive Explorer */}
        {viewMode === 'cards' ? (
          <div className="space-y-8">
            {/* Pillar Selector Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
              {SERVICE_PILLARS.map((pillar) => {
                const isSelected = pillar.id === selectedServiceId;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setSelectedServiceId(pillar.id)}
                    className={`flex flex-col items-start p-3.5 rounded-xl border transition-all text-left cursor-pointer ${
                      isSelected
                        ? 'bg-[#1B3A5C] text-[#C9A45C] border-[#1B3A5C] shadow-md ring-2 ring-[#C9A45C]/50'
                        : 'bg-[#F4F1EA]/40 hover:bg-[#F4F1EA] border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="mb-2 p-1.5 rounded-md bg-[#C9A45C]/15 inline-block text-[#C9A45C]">
                      {getServiceIcon(pillar.iconName)}
                    </div>
                    <span className="font-bold text-xs sm:text-sm line-clamp-2 leading-snug font-display">
                      {pillar.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Detailed Selected Pillar Presentation */}
            <div className="bg-[#1B3A5C] text-white rounded-2xl p-6 sm:p-8 border border-[#3E7CB1]/30 shadow-xl relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Summary and Scope */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C9A45C]/20 border border-[#C9A45C]/30 text-[#C9A45C] text-xs font-semibold">
                      <Sparkles className="w-3 h-3" />
                      {activeService.tagline}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                      {activeService.title}
                    </h3>
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                      {activeService.description}
                    </p>
                  </div>

                  {/* Included components */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A45C]">
                      What's Included in this Service:
                    </h4>
                    <ul className="space-y-2.5">
                      {activeService.includedItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4 items-center">
                    <button
                      onClick={() => onSelectService(activeService.title)}
                      className="inline-flex items-center gap-2 bg-[#C9A45C] hover:bg-[#b8934b] text-[#1B3A5C] font-bold px-5 py-2.5 rounded-xl transition-all text-sm cursor-pointer shadow-sm shadow-[#C9A45C]/20"
                    >
                      <span>Inquire About {activeService.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    {activeService.turnaround && (
                      <span className="text-xs text-slate-300">
                        Typical Timeline: <strong className="text-white">{activeService.turnaround}</strong>
                      </span>
                    )}
                  </div>
                </div>

                {/* Right: Deliverables and Target Audience Card */}
                <div className="lg:col-span-5 bg-[#14293f] border border-[#3E7CB1]/30 rounded-xl p-5 sm:p-6 space-y-5 text-left">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A45C] mb-3">
                      Tangible Deliverables
                    </h4>
                    <div className="space-y-2">
                      {activeService.deliverables.map((deliv, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-[#1B3A5C]/70 border border-[#3E7CB1]/30 text-xs sm:text-sm text-slate-200 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] shrink-0" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#3E7CB1]/30">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1">
                      Who It's Ideal For:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {activeService.idealFor}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ) : (
          /* View Mode 2: Detailed Service Matrix (From Slide 5) */
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1B3A5C] text-white text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold w-1/4">Service Line</th>
                  <th className="py-4 px-6 font-bold w-2/4">What's Included</th>
                  <th className="py-4 px-6 font-bold w-1/4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {SERVICE_PILLARS.map((service, index) => (
                  <tr
                    key={service.id}
                    className={`hover:bg-[#F4F1EA]/60 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'
                    }`}
                  >
                    <td className="py-4 px-6 align-top">
                      <div className="font-bold text-[#1B3A5C] font-display">
                        {service.title}
                      </div>
                      <div className="text-xs text-slate-600 mt-0.5">
                        {service.tagline}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {service.includedItems.join(' • ')}
                    </td>
                    <td className="py-4 px-6 text-right align-middle">
                      <button
                        onClick={() => onSelectService(service.title)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B3A5C] hover:text-[#1B3A5C] bg-[#C9A45C]/20 hover:bg-[#C9A45C]/35 px-3 py-1.5 rounded-lg transition-colors cursor-pointer border border-[#C9A45C]/40"
                      >
                        <span>Select</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
}
