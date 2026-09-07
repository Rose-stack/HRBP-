import React from 'react';
import { Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, SERVICE_PILLARS } from '../data/companyData';
import { useTheme } from '../context/ThemeContext';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const { currentTheme, getRadiusClass } = useTheme();
  const btnRadius = getRadiusClass('btn');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${currentTheme.classes.navBg} text-slate-300 text-xs border-t border-[#3E7CB1]/30 transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3E7CB1]/20 text-left">
          
          {/* Col 1: Brand and Ethos */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="horizontal" theme="dark" size="md" showTagline={true} />
            
            <p className="text-slate-300 text-xs leading-relaxed">
              Practical HR leadership for businesses that don't need — or can't yet justify — a full in-house HR department. We connect exceptional African professionals with meaningful opportunities locally and globally.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[11px]">
              <ShieldCheck className={`w-4 h-4 ${currentTheme.classes.accentText}`} />
              <span className={currentTheme.classes.accentText}>Grounded in Labour Law and Global HR Standards</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Five Service Pillars
            </h4>
            <ul className="space-y-2">
              {SERVICE_PILLARS.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors block text-xs"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company and Governance */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">Our Mission and Vision</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">Values and Ethos</a>
              </li>
              <li>
                <a href="#why-outsource" className="hover:text-white transition-colors">Why Outsource</a>
              </li>
              <li>
                <a href="#how-we-work" className="hover:text-white transition-colors">How We Work (4 Steps)</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Project Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#engagement" className="hover:text-white transition-colors">Engagement Models</a>
              </li>
              <li>
                <a href="#compliance-check" className="hover:text-white transition-colors">HR Health Check</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact and Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Consultant Office
            </h4>
            <div className="space-y-2 text-xs">
              <div className="text-slate-300 font-semibold">
                {COMPANY_INFO.consultantName}
              </div>
              <div className={`text-[11px] ${currentTheme.classes.accentText}`}>
                {COMPANY_INFO.consultantRole}
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Mail className={`w-3.5 h-3.5 ${currentTheme.classes.accentText} shrink-0`} />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:underline font-mono">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className={`w-3.5 h-3.5 ${currentTheme.classes.accentText} shrink-0`} />
                <span>{COMPANY_INFO.location}</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="#contact"
                className={`inline-block w-full text-center ${currentTheme.classes.primaryButton} font-bold py-2 ${btnRadius} transition-colors text-xs`}
              >
                Book Strategic Consultation
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Employment Act 2007 Compliant</span>
            <span>•</span>
            <span>Data Protection Act 2019</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
