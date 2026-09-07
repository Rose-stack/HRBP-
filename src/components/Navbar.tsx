import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useTheme } from '../context/ThemeContext';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  onOpenContact: (service?: string) => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentTheme, getRadiusClass } = useTheme();

  const btnRadius = getRadiusClass('btn');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Outsource', href: '#why-outsource' },
    { label: 'How We Work', href: '#how-we-work' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Models', href: '#engagement' },
    { label: 'HR Health Check', href: '#compliance-check' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Advisory Strip */}
      <div className={`${currentTheme.classes.navBg} text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 transition-colors duration-200`}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-slate-300 font-medium">
              Fractional HRBP and Statutory Payroll Leadership for Scaling Businesses
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className={`flex items-center gap-1.5 hover:${currentTheme.classes.accentText} transition-colors`}
            >
              <Mail className={`w-3.5 h-3.5 ${currentTheme.classes.accentText}`} />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="hidden sm:inline text-slate-400">{COMPANY_INFO.location}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-[#1B3A5C]/95 backdrop-blur-md shadow-lg border-b border-[#3E7CB1]/30 py-2.5'
            : 'bg-[#1B3A5C] border-b border-[#3E7CB1]/20 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Vector Brand Logo */}
          <a href="#" className="flex items-center group">
            <BrandLogo variant="horizontal" theme="dark" size="md" showTagline={true} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-5 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors py-1 relative group"
              >
                {link.label}
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full"
                  style={{ backgroundColor: '#2EA44F' }} 
                />
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenContact()}
              className={`inline-flex items-center gap-1.5 ${currentTheme.classes.primaryButton} font-semibold px-4 py-2 ${btnRadius} transition-all duration-200 text-xs sm:text-sm cursor-pointer`}
            >
              <span>Book Consultation</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-200 hover:text-white hover:bg-[#163353] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#14293f] border-b border-[#3E7CB1]/30 px-4 pt-3 pb-5 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className={`w-full py-2.5 ${currentTheme.classes.primaryButton} text-slate-950 font-bold ${btnRadius} text-sm`}
              >
                Book Strategic Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
