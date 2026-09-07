import { useState } from 'react';
import { 
  Briefcase, 
  ExternalLink, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Building, 
  Users, 
  Quote, 
  Sparkles,
  Filter
} from 'lucide-react';
import { CASE_STUDIES } from '../data/companyData';
import { CaseStudy } from '../types';

interface ProjectGalleryProps {
  onInquireProject: (projectTitle: string) => void;
}

export default function ProjectGallery({ onInquireProject }: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const categories = ['All', 'Healthcare', 'Tech and SMEs', 'Logistics and Supply Chain', 'Non-Profit and Development', 'Professional Services'];

  const filteredProjects = activeFilter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(cs => cs.clientSector.toLowerCase().includes(activeFilter.toLowerCase()) || cs.clientSector === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl text-left space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1B3A5C]">
              <span className="w-6 h-0.5 bg-[#C9A45C] inline-block" />
              <span className="text-[#C9A45C]">PROJECT GALLERY AND CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B3A5C] tracking-tight font-display">
              Proven impact across African institutions.
            </h2>
            <p className="text-base text-slate-600">
              Explore how our embedded HRBP leadership, computerized payroll overhaul, and statutory compliance frameworks protect businesses and drive performance.
            </p>
          </div>

          <div className="text-xs text-[#1B3A5C] font-medium bg-[#F4F1EA] border border-[#3E7CB1]/30 px-3 py-2 rounded-lg self-start md:self-end">
            Real outcomes benchmarked against Statutory and Global Standards
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#1B3A5C] text-[#C9A45C] shadow-sm'
                  : 'bg-[#F4F1EA] hover:bg-slate-200 text-slate-700 hover:text-[#1B3A5C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#F4F1EA]/30 rounded-2xl border border-slate-200/90 overflow-hidden hover:border-[#3E7CB1]/50 hover:shadow-lg transition-all flex flex-col justify-between text-left group"
            >
              <div className="p-6 space-y-4">
                {/* Sector and Scale Badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#F4F1EA] text-[#1B3A5C] border border-[#3E7CB1]/20 text-[11px] font-bold tracking-wide">
                    {project.clientSector}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-700 font-medium">
                    <Users className="w-3.5 h-3.5 text-[#3E7CB1]" />
                    <span>{project.organizationSize.split(' ')[0]} Staff</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#1B3A5C] font-display leading-snug group-hover:text-[#3E7CB1] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-700 font-medium flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  <span>{project.clientType}</span>
                </p>

                {/* Challenge Snapshot */}
                <div className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  <strong className="text-[#1B3A5C]">The Challenge: </strong>
                  {project.challenge}
                </div>

                {/* Metrics Highlight Pills */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200/80">
                  {project.results.slice(0, 2).map((res, rIdx) => (
                    <div key={rIdx} className="bg-white rounded-lg p-2 border border-[#3E7CB1]/20">
                      <div className="text-base font-extrabold text-[#C9A45C] font-display">
                        {res.metric}
                      </div>
                      <div className="text-[10px] text-slate-700 leading-tight">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-6 py-3.5 bg-[#F4F1EA]/60 border-t border-slate-200/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCaseStudy(project)}
                  className="text-xs font-bold text-[#1B3A5C] hover:text-[#3E7CB1] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>View Full Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C9A45C]" />
                </button>
                <span className="text-[11px] text-slate-500">Verified Client Case</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Deep Case Study Review */}
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8 text-left">
              {/* Modal Header */}
              <div className="bg-[#1B3A5C] text-white p-6 sm:p-8 relative">
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-[#14293f] hover:bg-[#1f3f61] text-[#C9A45C] hover:text-white transition-colors cursor-pointer"
                  aria-label="Close Case Study"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#C9A45C] text-[#1B3A5C] text-xs font-bold">
                    {selectedCaseStudy.clientSector}
                  </span>
                  <span className="text-xs text-slate-300">
                    {selectedCaseStudy.organizationSize}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white pr-8">
                  {selectedCaseStudy.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#C9A45C] font-medium mt-1">
                  Client Profile: {selectedCaseStudy.clientType}
                </p>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                {/* Challenge and Solution */}
                <div className="space-y-4">
                  <div className="bg-red-50/50 border border-red-100 rounded-xl p-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-1">
                      The Operational and Statutory Challenge
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {selectedCaseStudy.challenge}
                    </p>
                  </div>

                  <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                      The Talent Bridge Solution
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {selectedCaseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Tangible Deliverables List */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Key Deliverables Deployed
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedCaseStudy.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results Metrics */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Quantified Outcomes
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {selectedCaseStudy.results.map((res, rIdx) => (
                      <div key={rIdx} className="bg-amber-50/70 border border-amber-200 rounded-xl p-3 text-center">
                        <div className="text-lg sm:text-xl font-extrabold text-amber-700 font-display">
                          {res.metric}
                        </div>
                        <div className="text-[11px] text-slate-600 mt-0.5 font-medium leading-tight">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Endorsement Quote */}
                {selectedCaseStudy.quote && (
                  <div className="bg-slate-50 border-l-4 border-amber-500 rounded-r-xl p-4 italic text-xs sm:text-sm text-slate-700 relative">
                    <Quote className="w-5 h-5 text-amber-400 absolute top-2 right-2 opacity-30" />
                    <p className="mb-2">"{selectedCaseStudy.quote.text}"</p>
                    <div className="not-italic text-xs font-bold text-slate-900">
                      — {selectedCaseStudy.quote.author}, <span className="text-slate-500 font-normal">{selectedCaseStudy.quote.role}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer Controls */}
              <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-4 py-2 cursor-pointer"
                >
                  Close Case Study
                </button>
                <button
                  onClick={() => {
                    const title = selectedCaseStudy.title;
                    setSelectedCaseStudy(null);
                    onInquireProject(title);
                  }}
                  className="inline-flex items-center gap-2 bg-[#C9A45C] hover:bg-[#b8934b] text-[#1B3A5C] font-bold px-5 py-2.5 rounded-xl transition-colors text-xs sm:text-sm cursor-pointer shadow-md shadow-[#C9A45C]/20"
                >
                  <span>Request Similar Project Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
