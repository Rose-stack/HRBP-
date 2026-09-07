import { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ClassicWebLayout from './layouts/ClassicWebLayout';
import { MessageSquare } from 'lucide-react';

function AppContent() {
  const [selectedService, setSelectedService] = useState<string>('Fractional HR Business Partnering');
  const [selectedModel, setSelectedModel] = useState<string>('Retainer Partnership');
  const [selectedSector, setSelectedSector] = useState<string>('SMEs and Growing Businesses');
  
  const { currentTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    scrollToSection('contact');
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToSection('contact');
  };

  const handleSelectModel = (modelName: string) => {
    setSelectedModel(modelName);
    scrollToSection('contact');
  };

  const handleSelectSector = (sectorTitle: string) => {
    setSelectedSector(sectorTitle);
    scrollToSection('contact');
  };

  const handleInquireProject = (projectTitle: string) => {
    setSelectedService(`Case Study Advisory: ${projectTitle}`);
    scrollToSection('contact');
  };

  const handleOpenAudit = () => {
    scrollToSection('compliance-check');
  };

  return (
    <div className="min-h-screen text-slate-900 flex flex-col font-sans transition-colors duration-300">
      {/* Standard Corporate Flow */}
      <ClassicWebLayout
        onOpenContact={handleOpenContact}
        onSelectService={handleSelectService}
        onSelectModel={handleSelectModel}
        onSelectSector={handleSelectSector}
        onInquireProject={handleInquireProject}
        onOpenAudit={handleOpenAudit}
        selectedService={selectedService}
        selectedModel={selectedModel}
        selectedSector={selectedSector}
      />

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-4 sm:bottom-8 sm:right-6 z-30 flex flex-col items-end gap-2.5">
        {/* Instant Consultation Button */}
        <button
          onClick={() => handleOpenContact()}
          className={`${currentTheme.classes.primaryButton} font-bold px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 transition-all hover:scale-105 cursor-pointer text-xs sm:text-sm border border-white/20`}
          aria-label="Book Consultation"
        >
          <MessageSquare className="w-4 h-4 text-slate-950" />
          <span className="hidden sm:inline text-slate-950 font-bold">Book Strategic Consultation</span>
          <span className="sm:hidden text-slate-950 font-bold">Consult</span>
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
