import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MissionVisionValues from '../components/MissionVisionValues';
import ServicesSection from '../components/ServicesSection';
import WhyOutsource from '../components/WhyOutsource';
import ProcessSection from '../components/ProcessSection';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import ProjectGallery from '../components/ProjectGallery';
import TestimonialsSection from '../components/TestimonialsSection';
import EngagementModels from '../components/EngagementModels';
import ComplianceCalculator from '../components/ComplianceCalculator';
import ConsultantSpotlight from '../components/ConsultantSpotlight';
import ContactLeadForm from '../components/ContactLeadForm';
import Footer from '../components/Footer';

interface ClassicWebLayoutProps {
  onOpenContact: (service?: string) => void;
  onSelectService: (service: string) => void;
  onSelectModel: (model: string) => void;
  onSelectSector: (sector: string) => void;
  onInquireProject: (project: string) => void;
  onOpenAudit: () => void;
  selectedService: string;
  selectedModel: string;
  selectedSector: string;
}

export default function ClassicWebLayout({
  onOpenContact,
  onSelectService,
  onSelectModel,
  onSelectSector,
  onInquireProject,
  onOpenAudit,
  selectedService,
  selectedModel,
  selectedSector,
}: ClassicWebLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header Navigation */}
      <Navbar onOpenContact={onOpenContact} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero 
          onOpenContact={onOpenContact} 
          onOpenAudit={onOpenAudit} 
        />

        {/* 2. Mission, Vision and Core Values */}
        <MissionVisionValues />

        {/* 3. Five Service Pillars and Service Matrix */}
        <ServicesSection onSelectService={onSelectService} />

        {/* 4. Why Outsource HR and Payroll */}
        <WhyOutsource onOpenAudit={onOpenAudit} />

        {/* 5. How We Work (4-Step Process) */}
        <ProcessSection />

        {/* 6. Who We Work With (Industry Sectors) */}
        <WhoWeWorkWith onSelectSector={onSelectSector} />

        {/* 7. Project Gallery and Case Studies */}
        <ProjectGallery onInquireProject={onInquireProject} />

        {/* 8. Executive Testimonials Section */}
        <TestimonialsSection />

        {/* 9. Flexible Engagement Models */}
        <EngagementModels onSelectModel={onSelectModel} />

        {/* 10. Interactive 60-Second Compliance Audit */}
        <ComplianceCalculator onScheduleAudit={() => onOpenContact('Full Labour Compliance Audit')} />

        {/* 11. Lead Consultant Spotlight */}
        <ConsultantSpotlight onOpenContact={onOpenContact} />

        {/* 12. Contact Form for Lead Generation */}
        <ContactLeadForm 
          preselectedService={selectedService}
          preselectedModel={selectedModel}
          preselectedSector={selectedSector}
        />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
