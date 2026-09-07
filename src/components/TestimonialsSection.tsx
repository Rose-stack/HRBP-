import { Star, Quote, ShieldCheck, Building2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/companyData';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-[#F4F1EA]/50 border-b border-[#3E7CB1]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1B3A5C]">
            <span className="w-6 h-0.5 bg-[#C9A45C] inline-block" />
            <span className="text-[#C9A45C]">EXECUTIVE ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B3A5C] tracking-tight font-display">
            Trusted by founders, board directors, and executive teams.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Here is what organizational leaders say about our embedded partnership, payroll accuracy, and strategic people leadership across Kenya.
          </p>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#3E7CB1]/40 transition-all flex flex-col justify-between text-left relative group"
            >
              <div>
                {/* Top Rating and Sector Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C9A45C]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C9A45C]" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F4F1EA] text-[#1B3A5C] text-[11px] font-semibold flex items-center gap-1 border border-[#3E7CB1]/20">
                    <Building2 className="w-3 h-3 text-[#3E7CB1]" />
                    <span>{testimonial.sector}</span>
                  </span>
                </div>

                {/* Highlight Tag */}
                <div className="inline-block text-xs font-bold text-[#1B3A5C] bg-[#F4F1EA] border border-[#C9A45C]/40 px-2.5 py-1 rounded-md mb-3">
                  "{testimonial.highlight}"
                </div>

                {/* Quote Content */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author Attribution */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1B3A5C] text-[#C9A45C] flex items-center justify-center font-bold text-sm font-display shadow-xs">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1B3A5C] font-display">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {testimonial.role} • <strong className="text-slate-700">{testimonial.organization}</strong>
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statutory Standards Note */}
        <div className="p-4 bg-[#F4F1EA] border border-[#3E7CB1]/30 rounded-xl text-xs text-[#1B3A5C] flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C9A45C] shrink-0" />
            <span>
              All client contracts and payroll workflows are benchmarked against the <strong>Kenyan Employment Act 2007</strong> and updated statutory revisions.
            </span>
          </div>
          <span className="font-semibold text-[#1B3A5C] shrink-0">100% Client Retention Rate</span>
        </div>

      </div>
    </section>
  );
}
