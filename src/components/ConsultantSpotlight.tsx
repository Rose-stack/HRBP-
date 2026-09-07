import { CheckCircle2, Mail, Phone, MapPin, Award, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ConsultantSpotlightProps {
  onOpenContact: () => void;
}

export default function ConsultantSpotlight({ onOpenContact }: ConsultantSpotlightProps) {
  const commitments = [
    "We combine strategic HR leadership with hands-on operational experience — not advice from a distance.",
    "We build systems designed to be used daily, not policies that sit in a drawer.",
    "We work embedded in your business, on a schedule that fits how you operate.",
    "We ground every recommendation in Kenyan labour law and real compliance requirements."
  ];

  return (
    <section className="py-20 bg-[#1B3A5C] text-white border-b border-[#3E7CB1]/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A45C] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Consultant Bio and Ethos */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C9A45C]">
              <span className="w-6 h-0.5 bg-[#C9A45C] inline-block" />
              <span>WHY CHOOSE US</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              A strategic and operational lens, in one partner.
            </h2>

            <p className="text-base text-slate-200 leading-relaxed">
              At Talent Bridge Global Solutions, we believe human resources is not merely an administrative checkbox — it is the operational engine that protects your margins, shields your company from labour litigation, and unlocks the true potential of African talent.
            </p>

            {/* Commitments checklist from Slide 9 */}
            <div className="space-y-3.5 pt-2">
              {commitments.map((comm, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-[#14293f]/80 p-3.5 rounded-xl border border-[#3E7CB1]/30">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                    {comm}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 bg-[#C9A45C] hover:bg-[#b8934b] text-[#1B3A5C] font-bold px-6 py-3.5 rounded-xl transition-all text-sm cursor-pointer shadow-lg shadow-[#C9A45C]/20"
              >
                <span>Speak With Mercy Karanja</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Certified HRBP and Labour Compliance Specialist</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Consultant Profile Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#14293f] border border-[#3E7CB1]/40 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm text-left relative">
              {/* Profile Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-[#3E7CB1]/30">
                <div className="w-16 h-16 rounded-2xl bg-[#C9A45C] flex items-center justify-center text-[#1B3A5C] font-extrabold text-2xl font-display shadow-md">
                  MK
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    {COMPANY_INFO.consultantName}
                  </h3>
                  <p className="text-[#C9A45C] text-xs font-semibold uppercase tracking-wider">
                    {COMPANY_INFO.consultantRole}
                  </p>
                  <p className="text-slate-300 text-xs mt-0.5">
                    {COMPANY_INFO.name}
                  </p>
                </div>
              </div>

              {/* Bio Details */}
              <div className="py-5 space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed border-b border-[#3E7CB1]/30">
                <p>
                  Senior HR Business Partnering advisor with specialized expertise across healthcare facilities, fast-scaling SMEs, non-profit organizations, and professional service firms.
                </p>
                <p>
                  Deeply versed in the Kenyan Employment Act 2007, statutory compliance remittals (PAYE, SHA, NSSF, AHL, NITA), disciplinary litigation defense, and cross-border African talent mobility.
                </p>
              </div>

              {/* Contact Information and Office Details (From Page 1 and 10) */}
              <div className="pt-5 space-y-2.5 text-xs text-slate-200">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-2.5 hover:text-[#C9A45C] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C9A45C] shrink-0" />
                  <span className="font-mono text-xs">{COMPANY_INFO.email}</span>
                </a>

                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C9A45C] shrink-0" />
                  <span>{COMPANY_INFO.location} • East Africa and Pan-African Hybrid</span>
                </div>

                <div className="flex items-center gap-2.5 text-slate-300">
                  <Award className="w-4 h-4 text-[#C9A45C] shrink-0" />
                  <span>Practical, Embedded Workforce Leadership</span>
                </div>
              </div>

              {/* Direct Note */}
              <div className="mt-6 p-3 rounded-xl bg-[#1B3A5C] border border-[#3E7CB1]/30 text-[11px] text-slate-200 italic">
                "We don't hand you an off-the-shelf policy manual and walk away. We stand shoulder-to-shoulder with your managers until your people systems run smoothly."
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
