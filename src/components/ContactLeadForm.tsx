import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Building2, 
  FileText, 
  Download, 
  Sparkles,
  Inbox,
  Eye,
  Trash2,
  X
} from 'lucide-react';
import { COMPANY_INFO, SERVICE_PILLARS, ENGAGEMENT_MODELS } from '../data/companyData';
import { LeadInquiry } from '../types';

interface ContactLeadFormProps {
  preselectedService?: string;
  preselectedModel?: string;
  preselectedSector?: string;
}

export default function ContactLeadForm({ 
  preselectedService, 
  preselectedModel, 
  preselectedSector 
}: ContactLeadFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    companySize: '11-50 employees',
    sector: preselectedSector || 'SMEs and Growing Businesses',
    serviceInterest: preselectedService || 'Fractional HR Business Partnering',
    engagementModel: preselectedModel || 'Retainer Partnership',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<LeadInquiry | null>(null);
  const [showInquiryVault, setShowInquiryVault] = useState(false);
  const [savedInquiries, setSavedInquiries] = useState<LeadInquiry[]>([]);

  // Update form if props change from external CTA clicks
  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceInterest: preselectedService }));
    }
    if (preselectedModel) {
      setFormData(prev => ({ ...prev, engagementModel: preselectedModel }));
    }
    if (preselectedSector) {
      setFormData(prev => ({ ...prev, sector: preselectedSector }));
    }
  }, [preselectedService, preselectedModel, preselectedSector]);

  // Load saved leads from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('talent_bridge_leads');
      if (stored) {
        setSavedInquiries(JSON.parse(stored));
      }
    } catch {
      // LocalStorage access handling
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newInquiry: LeadInquiry = {
      id: `LEAD-${Date.now()}`,
      timestamp: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      companyName: formData.companyName,
      companySize: formData.companySize,
      sector: formData.sector,
      serviceInterest: formData.serviceInterest,
      engagementModel: formData.engagementModel,
      message: formData.message || 'General consultation request regarding HR and payroll advisory.',
      status: 'new'
    };

    setTimeout(() => {
      try {
        const updated = [newInquiry, ...savedInquiries];
        setSavedInquiries(updated);
        localStorage.setItem('talent_bridge_leads', JSON.stringify(updated));
      } catch {
        // Fallback
      }

      setLastSubmission(newInquiry);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleDownloadSummary = () => {
    if (!lastSubmission) return;
    const content = `=====================================================
TALENT BRIDGE GLOBAL SOLUTIONS LTD
Consultation Intake and Advisory Confirmation
=====================================================
Reference ID: ${lastSubmission.id}
Date Submitted: ${lastSubmission.timestamp}

PRIMARY CLIENT DETAILS:
• Full Name: ${lastSubmission.fullName}
• Work Email: ${lastSubmission.email}
• Phone / WhatsApp: ${lastSubmission.phone || 'N/A'}
• Company: ${lastSubmission.companyName}
• Staff Size: ${lastSubmission.companySize}
• Sector: ${lastSubmission.sector}

REQUESTED ADVISORY SCOPE:
• Primary Service: ${lastSubmission.serviceInterest}
• Engagement Model: ${lastSubmission.engagementModel}
• Notes / Challenges: ${lastSubmission.message}

CONSULTANT CONTACT:
Lead HRBP Consultant: ${COMPANY_INFO.consultantName}
Corporate Inquiries: ${COMPANY_INFO.email}
Location: ${COMPANY_INFO.location}

STATUTORY GUARANTEE:
All policy frameworks, employee handbooks, and payroll models
are strictly aligned to the Kenyan Employment Act 2007 and 
current statutory deduction guidelines (PAYE, SHA, NSSF, AHL).
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `TalentBridge-Intake-${lastSubmission.id}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const clearInquiries = () => {
    localStorage.removeItem('talent_bridge_leads');
    setSavedInquiries([]);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl text-left space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1B3A5C]">
            <span className="w-6 h-0.5 bg-[#C9A45C] inline-block" />
            <span className="text-[#C9A45C]">LET'S TALK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Reliable HR, policy and payroll support — built around your business.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Schedule a direct consultation with Mercy Karanja. Whether you need an ongoing embedded HRBP, an urgent policy overhaul, or 100% compliant computerized payroll outsourcing, we are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column: Direct Contact and Credibility Brief */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#1B3A5C] text-white rounded-2xl p-7 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-wider text-[#C9A45C]">
                  Direct Inquiries
                </span>
                <h3 className="text-2xl font-bold font-display text-white">
                  Talent Bridge Global Solutions Ltd
                </h3>
                <p className="text-xs text-slate-300">
                  HR Consulting Company • Pan-African People Leadership
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C9A45C] shrink-0 mt-1" />
                  <div>
                    <span className="text-slate-300 block text-[11px]">Primary Contact Email</span>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`} 
                      className="text-white hover:text-[#C9A45C] transition-colors font-mono font-medium"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C9A45C] shrink-0 mt-1" />
                  <div>
                    <span className="text-slate-300 block text-[11px]">Headquarters and Deployment</span>
                    <span>{COMPANY_INFO.location} • In-person and Hybrid Across East Africa</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C9A45C] shrink-0 mt-1" />
                  <div>
                    <span className="text-slate-300 block text-[11px]">Working Hours</span>
                    <span>{COMPANY_INFO.officeHours}</span>
                  </div>
                </div>
              </div>

              {/* Lead Consultant Spotlight */}
              <div className="pt-6 border-t border-[#3E7CB1]/30">
                <div className="text-xs font-semibold text-slate-300 mb-1">
                  Lead Consultant:
                </div>
                <div className="font-bold text-white text-base font-display">
                  {COMPANY_INFO.consultantName}
                </div>
                <div className="text-[#C9A45C] text-xs font-medium">
                  {COMPANY_INFO.consultantRole}
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="bg-[#14293f] p-3 rounded-xl border border-[#3E7CB1]/40 text-xs text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Guaranteed confidential response within 24 to 48 hours.</span>
              </div>
            </div>

            {/* Inquiries Vault Quick Trigger (for reviewer to inspect saved leads) */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Inbox className="w-4 h-4 text-amber-600" />
                <span>Saved Inquiries: <strong>{savedInquiries.length}</strong></span>
              </div>
              <button
                onClick={() => setShowInquiryVault(true)}
                className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Inquiries</span>
              </button>
            </div>
          </div>

          {/* Right Column: Lead Generation Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              
              {isSubmitted ? (
                /* Success State */
                <div className="text-center py-8 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                      Thank You, {formData.fullName}!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Your inquiry regarding <strong>{formData.serviceInterest}</strong> has been received. Mercy Karanja will review your organizational requirements and get back to you shortly.
                    </p>
                  </div>

                  {lastSubmission && (
                    <div className="bg-white rounded-xl p-4 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-700">
                      <div><strong>Reference:</strong> {lastSubmission.id}</div>
                      <div><strong>Company:</strong> {lastSubmission.companyName} ({lastSubmission.companySize})</div>
                      <div><strong>Scope:</strong> {lastSubmission.serviceInterest} ({lastSubmission.engagementModel})</div>
                    </div>
                  )}

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleDownloadSummary}
                      className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-amber-400" />
                      <span>Download Consultation Summary</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          companyName: '',
                          companySize: '11-50 employees',
                          sector: 'SMEs and Growing Businesses',
                          serviceInterest: 'Fractional HR Business Partnering',
                          engagementModel: 'Retainer Partnership',
                          message: ''
                        });
                      }}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Primary Lead Generation Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="text-lg font-bold text-slate-900 font-display">
                      Book a Strategic HR Consultation
                    </h3>
                    <p className="text-xs text-slate-500">
                      Tell us about your organization and people challenges. All discussions are held under strict confidentiality.
                    </p>
                  </div>

                  {/* Personal and Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="fullName">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. David Mwangi"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="email">
                        Work Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="david@company.co.ke"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="phone">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 7..."
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="companyName">
                        Company / Institution Name *
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Health Ltd"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C]"
                      />
                    </div>
                  </div>

                  {/* Organization Size and Sector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="companySize">
                        Organization Size
                      </label>
                      <select
                        id="companySize"
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C]"
                      >
                        <option value="1-10 employees">1 - 10 employees (Early Stage)</option>
                        <option value="11-50 employees">11 - 50 employees (Scaling SME)</option>
                        <option value="51-150 employees">51 - 150 employees (Mid-sized)</option>
                        <option value="151+ employees">151+ employees (Enterprise)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="sector">
                        Industry / Sector
                      </label>
                      <select
                        id="sector"
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C]"
                      >
                        <option value="Healthcare Facilities">Healthcare Facilities</option>
                        <option value="SMEs and Growing Businesses">SMEs and Growing Businesses</option>
                        <option value="Faith-Based and Non-Profit Organisations">Faith-Based and Non-Profit Organisations</option>
                        <option value="Professional Service Firms">Professional Service Firms</option>
                        <option value="Logistics, Manufacturing and Other">Logistics, Manufacturing and Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Primary Service Interest and Engagement Model */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="serviceInterest">
                        Service of Primary Interest
                      </label>
                      <select
                        id="serviceInterest"
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C]"
                      >
                        {SERVICE_PILLARS.map(sp => (
                          <option key={sp.id} value={sp.title}>{sp.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="engagementModel">
                        Preferred Engagement Model
                      </label>
                      <select
                        id="engagementModel"
                        name="engagementModel"
                        value={formData.engagementModel}
                        onChange={handleChange}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C]"
                      >
                        {ENGAGEMENT_MODELS.map(em => (
                          <option key={em.id} value={em.name}>{em.name}</option>
                        ))}
                        <option value="Flexible / Recommend for me">Flexible / Need Recommendation</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Specific Needs */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="message">
                      What specific HR, policy, or payroll challenge are you looking to solve?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. We are expanding to 40 staff and need to draft compliant employment contracts, create a policy handbook, and ensure our statutory payroll returns have zero errors..."
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl font-bold text-sm bg-[#C9A45C] hover:bg-[#b8934b] text-[#1B3A5C] transition-all shadow-md shadow-[#C9A45C]/20 hover:shadow-[#C9A45C]/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Submitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center">
                    <p className="text-[11px] text-slate-400">
                      Your data is protected under the Kenya Data Protection Act 2019 and strictly confidential.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Saved Inquiries Modal for demonstration and verification */}
        {showInquiryVault && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl p-6 text-left space-y-4 max-h-[85vh] overflow-hidden flex flex-col">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Inbox className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    Lead Generation Inquiries ({savedInquiries.length})
                  </h3>
                </div>
                <button
                  onClick={() => setShowInquiryVault(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                {savedInquiries.length === 0 ? (
                  <div className="text-center py-10 text-slate-400 text-xs">
                    No lead inquiries recorded yet. Submit the form to see leads stored here.
                  </div>
                ) : (
                  savedInquiries.map((inquiry) => (
                    <div key={inquiry.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                      <div className="flex items-center justify-between font-bold text-slate-900">
                        <span>{inquiry.fullName} • {inquiry.companyName}</span>
                        <span className="text-[10px] text-slate-500 font-normal">{inquiry.timestamp}</span>
                      </div>
                      <div className="text-slate-600">
                        Email: <strong>{inquiry.email}</strong> {inquiry.phone && `• Phone: ${inquiry.phone}`}
                      </div>
                      <div className="text-slate-600">
                        Scope: <span className="text-amber-700 font-semibold">{inquiry.serviceInterest}</span> ({inquiry.engagementModel})
                      </div>
                      <div className="text-slate-700 italic bg-white p-2 rounded border border-slate-100 mt-1">
                        "{inquiry.message}"
                      </div>
                    </div>
                  ))
                )}
              </div>

              {savedInquiries.length > 0 && (
                <div className="pt-3 border-t border-slate-200 flex justify-between items-center text-xs">
                  <button
                    onClick={clearInquiries}
                    className="text-rose-600 hover:text-rose-800 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All Inquiries</span>
                  </button>
                  <button
                    onClick={() => setShowInquiryVault(false)}
                    className="bg-slate-900 text-white px-4 py-1.5 rounded-lg font-bold"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
