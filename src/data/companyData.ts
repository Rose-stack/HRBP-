import { ServicePillar, CaseStudy, Testimonial, ValuePillar, EngagementTier, AuditQuestion } from '../types';

export const COMPANY_INFO = {
  name: "Talent Bridge Global Solutions Ltd",
  shortName: "Talent Bridge",
  tagline: "Outsourced HR, Policy and Payroll Services",
  subtagline: "Practical HR leadership for businesses that don't need — or can't yet justify — a full in-house HR department.",
  consultantName: "Mercy Karanja",
  consultantRole: "HRBP Consultant and Founder",
  email: "hello@talentbridgesolutions.co.ke",
  phone: "+254 700 000 000",
  location: "Nairobi, Kenya",
  address: "Nairobi, Kenya",
  officeHours: "Monday – Friday: 8:00 AM – 5:30 PM (EAT)",
  stats: [
    { value: "100%", label: "Statutory and Labour Compliance" },
    { value: "0", label: "Statutory Filing Deadlines Missed" },
    { value: "65%+", label: "Cost Savings vs. In-House HR Hire" },
    { value: "48h", label: "Average Response and Rapid Advisory" }
  ]
};

export const MISSION_STATEMENT = {
  title: "OUR MISSION",
  statement: "To connect exceptional African professionals with meaningful opportunities — locally and globally — while providing organizations with the HR expertise they need to build great teams, stay compliant and mitigate litigation."
};

export const VISION_STATEMENT = {
  title: "OUR VISION",
  statement: "A world where African talent is recognized, valued and placed without limits — and where every organization we partner with has the people and the processes to thrive."
};

export const COMPANY_VALUES: ValuePillar[] = [
  {
    id: "integrity",
    title: "Integrity and Transparency",
    description: "We operate with uncompromising honesty across every market. Candidates receive clear, accurate insights on roles, timelines and expectations. Local employers and global enterprises rely on us to maintain total compliance, mitigate risk and protect their institutional reputation.",
    icon: "ShieldCheck"
  },
  {
    id: "standards",
    title: "World-Class Standards",
    description: "We benchmark every deliverable against international best practices — whether auditing local workforce compliance, running cross-border payroll, or executing executive placements. We deliver the same level of precision and rigor regardless of geographic scale.",
    icon: "Award"
  },
  {
    id: "partnership",
    title: "Strategic Partnership",
    description: "We do not operate as a transactional agency. We embed ourselves as long-term advisors to local SMEs, scaling firms and multinational organizations, while guiding candidates through both domestic career growth and international mobility.",
    icon: "Handshake"
  },
  {
    id: "human-centred",
    title: "Human-Centred Leadership",
    description: "Behind every corporate mandate is an organization’s performance culture; behind every resume is a professional’s career trajectory. We navigate local labour realities and global talent standards with equal empathy, ensuring every decision respects the people driving the business.",
    icon: "Users"
  },
  {
    id: "african-talent",
    title: "Advancing African Talent",
    description: "We champion the exceptional capability and competitiveness of African professionals. We connect high-performing local talent with local and international opportunities, ensuring their expertise is recognized and valued on the global stage.",
    icon: "Globe"
  },
  {
    id: "innovation",
    title: "Continuous Innovation",
    description: "Workforce dynamics are shifting rapidly across local and international markets. We continuously integrate global HR frameworks, modern technology and local market intelligence to give our clients and candidates a sustained competitive advantage.",
    icon: "Lightbulb"
  }
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "fractional-hrbp",
    title: "Fractional HR Business Partnering",
    tagline: "Strategic HR leadership sized to your business",
    description: "Ongoing strategic and operational HR leadership for businesses that need high-level HR expertise on a fractional, flexible schedule without carrying the payroll overhead of a full-time executive.",
    iconName: "Briefcase",
    includedItems: [
      "Workforce planning and organizational restructuring",
      "Executive advisory and management consulting",
      "Employee relations and conflict mediation",
      "Culture building, employee engagement and retention systems",
      "Board and leadership team quarterly HR reporting"
    ],
    deliverables: [
      "Quarterly People Strategy Roadmaps",
      "Headcount and Compensation Matrices",
      "Monthly HR Health and Retention Dashboards",
      "Scheduled Onsite Executive Presence"
    ],
    idealFor: "Growing SMEs and institutions (15-250 staff) transitioning from informal management to structured enterprise operations.",
    turnaround: "Ongoing monthly engagement (1 to 4 days/month or weekly)"
  },
  {
    id: "policy-sop",
    title: "Policy and SOP Development",
    tagline: "Customized frameworks that employees actually follow",
    description: "Tailored HR policy manuals, comprehensive employee handbooks, customized employment contracts, and departmental standard operating procedures strictly aligned with the Kenyan Employment Act.",
    iconName: "FileText",
    includedItems: [
      "Comprehensive Employee Handbooks and code of conduct",
      "Employment contracts (probationary, fixed-term, permanent, consultant)",
      "Standard Operating Procedures (SOPs) for daily operations",
      "Remote work, data privacy and equipment policies",
      "Anti-harassment, grievance and disciplinary guidelines"
    ],
    deliverables: [
      "Customized 45+ Page Employee Handbook",
      "Standardized Contract Templates and Offer Letters",
      "Manager Disciplinary Step-by-Step Toolkits",
      "Digital Employee Sign-off and Acknowledgment Workflow"
    ],
    idealFor: "Companies operating with outdated templates, downloaded internet policies, or undocumented workplace guidelines.",
    turnaround: "3 - 5 weeks from initial audit to final sign-off"
  },
  {
    id: "payroll-management",
    title: "Payroll Management and Compliance",
    tagline: "Accurate monthly payroll and zero-penalty statutory filing",
    description: "End-to-end payroll processing, computerized payslips, and seamless statutory deductions remittance (PAYE, NSSF, SHA, NITA, AHL, HELB) guaranteeing you never miss a filing deadline.",
    iconName: "Calculator",
    includedItems: [
      "Monthly gross-to-net salary computation and overtime audits",
      "Statutory deductions: PAYE, NSSF, SHA (formerly NHIF), AHL, NITA, HELB",
      "Encrypted individual employee payslip generation and distribution",
      "KRA iTax return preparation and statutory payment receipts",
      "Annual tax declarations and end-of-year P9 forms generation"
    ],
    deliverables: [
      "Complete Monthly Payroll Master Summaries",
      "Bank Transfer CSV / EFT Payment Schedules",
      "Validated Statutory Filing Receipts (KRA, NSSF, SHA, etc.)",
      "Annual P9 Certificates for all active employees"
    ],
    idealFor: "Organizations seeking to eliminate payroll calculation errors, protect data confidentiality, and eliminate KRA statutory penalties.",
    turnaround: "Monthly delivery on or before the 25th of every month"
  },
  {
    id: "recruitment-onboarding",
    title: "Recruitment and Structured Onboarding",
    tagline: "Connecting high-performing African talent to impactful roles",
    description: "Rigorous talent sourcing, competency-based screening, structured interviews, and comprehensive induction programs that reduce early turnover and build high-performing teams.",
    iconName: "UserCheck",
    includedItems: [
      "Competency-based job descriptions and salary benchmarking",
      "Targeted multi-channel candidate sourcing across Africa",
      "Structured behavioral interviews and technical screening",
      "Candidate background, credentials and reference verification",
      "30-60-90 day induction and onboarding framework"
    ],
    deliverables: [
      "Candidate Shortlist Dossier with Scoring Matrices",
      "Verified Reference and Background Check Reports",
      "Structured Onboarding Checklist and Welcome Toolkit",
      "90-Day New Hire Review Guidance"
    ],
    idealFor: "Firms hiring key functional leaders or expanding teams who require high-caliber talent without the bias of informal hiring.",
    turnaround: "3 - 4 weeks per placement cycle"
  },
  {
    id: "training-performance",
    title: "Training and Performance Management",
    tagline: "Appraisal systems and supervisory leadership coaching",
    description: "Design and implementation of objective appraisal systems, KPI frameworks, supervisor coaching, and frontline staff workshops that turn performance reviews into measurable productivity drivers.",
    iconName: "GraduationCap",
    includedItems: [
      "Objective KPI and OKR performance evaluation frameworks",
      "360-degree appraisal systems and review cycle scheduling",
      "Supervisor and middle-manager people management coaching",
      "Customer service, compliance and operational workplace workshops",
      "Performance Improvement Plans (PIPs) that withstand legal scrutiny"
    ],
    deliverables: [
      "Role-specific KPI and Evaluation Scorecards",
      "Supervisor Performance Appraisal Facilitation Guides",
      "Employee Development Plans and Workshop Toolkits",
      "Legally Enforceable PIP Documentation Templates"
    ],
    idealFor: "Organizations with stagnant appraisal cycles where reviews feel like administrative chores rather than business growth tools.",
    turnaround: "Interactive workshops + 4-week system deployment"
  },
  {
    id: "compliance-risk",
    title: "Compliance and Labour Law Risk Mitigation",
    tagline: "Protecting your institutional reputation and mitigating litigation",
    description: "Comprehensive audits of employment contracts, working hours, leave tracking, and workplace safety ensuring full compliance with the Kenyan Employment Act and industry-specific regulations.",
    iconName: "ShieldAlert",
    includedItems: [
      "Thorough employment contract and statutory documentation audit",
      "Disciplinary hearing procedure guidance and documentation",
      "Redundancy and termination process structuring to avoid litigation",
      "Workplace regulatory licensing and occupational safety alignment",
      "Kenyan labour inspectorate audit readiness preparation"
    ],
    deliverables: [
      "Comprehensive Labour Law Compliance Audit Report",
      "Immediate High-Risk Remediation Checklist",
      "Procedurally Correct Disciplinary and Hearing Templates",
      "Litigation Defense Documentation Archive"
    ],
    idealFor: "Institutions facing staff disputes, undergoing regulatory inspections, or preparing for mergers, acquisitions, or funding rounds.",
    turnaround: "2 - 3 weeks for full institutional audit"
  }
];

export const HOW_WE_WORK_STEPS = [
  {
    step: "01",
    name: "Assess",
    tagline: "Diagnostic Review",
    description: "A structured, non-disruptive review of your current HR, contracts, policy, and payroll practices to identify immediate legal vulnerabilities, operational gaps, and quick wins.",
    badge: "Days 1 – 7",
    focus: "Contract audits, statutory health check, employee feedback and gap analysis"
  },
  {
    step: "02",
    name: "Design",
    tagline: "Tailored Architecture",
    description: "We develop customized policies, employee handbooks, job descriptions, and payroll workflows designed around how your business actually operates daily, not generic templates.",
    badge: "Weeks 2 – 3",
    focus: "Custom policy manuals, salary structures, SOPs and workflow mapping"
  },
  {
    step: "03",
    name: "Deploy",
    tagline: "Active Rollout and Training",
    description: "Change management, team briefings, and supervisor coaching ensure the new systems are enthusiastically adopted and integrated into the daily culture, not just filed away in a drawer.",
    badge: "Weeks 3 – 4",
    focus: "Staff workshops, manager coaching, digital contract execution and system go-live"
  },
  {
    step: "04",
    name: "Sustain",
    tagline: "Embedded Excellence",
    description: "Ongoing embedded support, monthly payroll execution, regular compliance updates, and quarterly performance reviews keep your HR functions running smoothly as your business scales.",
    badge: "Ongoing Partnership",
    focus: "Monthly payroll filing, fractional HRBP presence, annual policy updates and dispute advisory"
  }
];

export const WHO_WE_WORK_WITH_SECTORS = [
  {
    id: "healthcare",
    title: "Healthcare Facilities",
    subtitle: "Hospitals, clinics, diagnostic centers and specialized health practices",
    description: "Managing clinical and non-clinical workforces with complex 24/7 shift rotations, medical council licensing compliance, strict confidentiality, and high-stress operational demands.",
    icon: "Activity",
    keyBenefits: [
      "Clinical vs. administrative shift and overtime compliance",
      "Healthcare licensing and statutory registration verification",
      "Empathetic dispute resolution for high-pressure medical environments"
    ]
  },
  {
    id: "smes",
    title: "SMEs and Growing Businesses",
    subtitle: "Founders, tech scale-ups, commercial enterprises and trading firms",
    description: "Supporting companies scaling past the point where informal, ad-hoc HR still works. We install enterprise-grade structures so founders can focus on revenue and product expansion.",
    icon: "TrendingUp",
    keyBenefits: [
      "Executive HR capability without the salary burden of a full-time Director",
      "Standardized hiring and onboarding to scale teams rapidly",
      "Clean HR governance that satisfies investors and financiers"
    ]
  },
  {
    id: "non-profits",
    title: "Faith-Based and Non-Profit Organisations",
    subtitle: "NGOs, foundations, mission-driven institutions and charities",
    description: "Mission-driven organizations requiring sound, transparent HR governance, grant compliance, and ethical workforce practices without ballooning administrative overhead.",
    icon: "HeartHandshake",
    keyBenefits: [
      "Donor-compliant compensation and project-based contracting",
      "Value-aligned recruitment and mission-centric employee handbooks",
      "Clean statutory audits preserving non-profit institutional reputation"
    ]
  },
  {
    id: "professional-services",
    title: "Professional Service Firms",
    subtitle: "Legal, engineering, architectural, accounting and consultancies",
    description: "Knowledge-driven firms where human talent is the primary balance-sheet asset, client delivery depends on staff retention, and billable hour performance must be nurtured.",
    icon: "Building2",
    keyBenefits: [
      "High-retention incentive structures and career progression pathways",
      "Performance appraisal metrics tied to billable client outcomes",
      "Rigorous non-disclosure and intellectual property protections"
    ]
  }
];

export const SECTOR_EXPERTISE = WHO_WE_WORK_WITH_SECTORS;

export const WHY_OUTSOURCE_POINTS = [
  {
    title: "Lower cost than a full-time hire",
    detail: "Access senior HRBP and payroll leadership at a fraction of the cost of an internal department, with zero long-term employment liability or executive benefit overhead.",
    stat: "Up to 65%",
    statLabel: "Cost savings vs full-time HR Director"
  },
  {
    title: "Compliance confidence",
    detail: "Stay 100% current with the Employment Act, statutory deduction overhauls (PAYE, SHA, NSSF, AHL), and licensing mandates without having to track volatile legislation yourself.",
    stat: "Zero",
    statLabel: "Statutory late filing fines or penalties"
  },
  {
    title: "Systems that actually get used",
    detail: "Policies and standard operating procedures crafted specifically for how your business operates on the ground — not generic internet templates that sit unread in dusty binders.",
    stat: "100%",
    statLabel: "Tailored to your daily operational reality"
  },
  {
    title: "Freedom to focus on the business",
    detail: "Reclaim your working hours for strategy, customer acquisition, and business growth while people operations, dispute mitigation, and payroll run reliably in the background.",
    stat: "15+ Hrs",
    statLabel: "Weekly leadership time saved"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "healthcare-transformation",
    title: "Complete Clinical Workforce Restructure and Statutory Compliance",
    clientSector: "Healthcare",
    clientType: "Multi-Specialty Private Hospital",
    organizationSize: "145 Employees (Clinical and Support)",
    challenge: "The facility faced recurring payroll deductions disputes, expired employee contracts, informal shift scheduling leading to burnout, and an impending Ministry of Labour statutory audit with potential shutdown fines.",
    solution: "Deployed an embedded Fractional HRBP for 6 months. Standardized clinical and non-clinical contracts compliant with Kenyan Employment Act, streamlined overtime tracking, and audited all historic statutory remittances (PAYE, NHIF/SHA, NSSF).",
    deliverables: [
      "Updated 52-page Healthcare Staff Policy Manual and Shift SOPs",
      "Standardized clinical employment contracts with liability clauses",
      "Fully audited payroll migration with computerized shift logs",
      "Department head supervisory coaching program for 12 Nurse Managers"
    ],
    results: [
      { metric: "100%", label: "Pass rate on Ministry of Labour audit" },
      { metric: "38%", label: "Reduction in clinical nurse turnover" },
      { metric: "KES 0", label: "Incurred penalties or tribunal claims" }
    ],
    quote: {
      text: "Talent Bridge gave our hospital an ironclad compliance shield. Their embedded approach meant they understood the intensity of our emergency room and wards, creating policies our doctors and nurses actually respect.",
      author: "Dr. Anthony M.",
      role: "Medical Director and Hospital Board Member"
    }
  },
  {
    id: "fintech-scaleup",
    title: "Investor-Grade HR Foundation and Employee Handbook for Scaling FinTech",
    clientSector: "Tech and SMEs",
    clientType: "Fast-Growing Payments and Lending Startup",
    organizationSize: "Scaling from 14 to 68 Staff across 2 East African markets",
    challenge: "Preparing for a Series A institutional investment round, the company lacked formal HR policies, clear equity and IP assignment documentation, transparent compensation bands, and structured hiring pipelines.",
    solution: "Implemented a complete HR architecture within 45 days: developed an institutional Employee Handbook, standard offer letters with IP protections, defined 5-tier salary bands, and rolled out a 90-day onboarding workflow.",
    deliverables: [
      "Modern Company Handbook with remote-work and IP clauses",
      "Competency framework and structured technical interview rubrics",
      "Regional compensation and salary banding model",
      "Automated digital onboarding and offboarding checklist"
    ],
    results: [
      { metric: "45 Days", label: "End-to-end HR deployment timeline" },
      { metric: "100%", label: "Due diligence compliance clearance for Series A" },
      { metric: "50%", label: "Drop in new-hire ramp-up training time" }
    ],
    quote: {
      text: "Mercy Karanja brought executive-level wisdom that impressed our venture capital investors during institutional due diligence. She turned what could have been chaotic growth into structured excellence.",
      author: "David K.",
      role: "Co-Founder and Chief Technology Officer"
    }
  },
  {
    id: "logistics-payroll",
    title: "Zero-Error Payroll Outsourcing and Statutory Migration",
    clientSector: "Logistics and Supply Chain",
    clientType: "Regional Freight and Logistics Enterprise",
    organizationSize: "92 Full-Time and Contract Staff",
    challenge: "The internal accounting team was overwhelmed by the shifting Kenyan statutory landscape (new Housing Levy AHL deductions, NSSF Act rates, SHA health contributions), suffering repeated KRA reconciliation penalties.",
    solution: "Transitioned to our end-to-end Payroll Outsourcing service. Conducted a historical 2-year statutory audit, set up automated gross-to-net computation, and took full accountability for remittances before the 9th of every month.",
    deliverables: [
      "Secure monthly payroll processing with dual-authorization protocol",
      "Direct automated employee payslip delivery via encrypted PDF",
      "Statutory returns filing: PAYE, NSSF, SHA, NITA, and Housing Levy",
      "Annual tax return P9 generation for all 92 staff members"
    ],
    results: [
      { metric: "24 Mo", label: "Consecutive cycles with zero errors or delays" },
      { metric: "KES 1.8M", label: "Saved in avoided statutory fines and tax surcharges" },
      { metric: "25th", label: "Guaranteed monthly payslip distribution day" }
    ],
    quote: {
      text: "We used to lose days every single month agonizing over payroll calculations and shifting tax deductions. Talent Bridge took the entire burden off our shoulders with total professionalism.",
      author: "Faith Wambui",
      role: "Chief Operating Officer, Logistics"
    }
  },
  {
    id: "ngo-executive-search",
    title: "Pan-African Executive Placement and Performance Governance",
    clientSector: "Non-Profit and Development",
    clientType: "International Sustainable Agriculture Foundation",
    organizationSize: "55 Personnel across East Africa",
    challenge: "The foundation needed to place three key senior program directors with specialized knowledge of African drylands farming while restructuring their staff appraisal system to meet strict donor grant requirements.",
    solution: "Conducted competency-based executive headhunting across Kenya, Uganda, and Tanzania. Designed an OKR-aligned performance management system linked directly to grant deliverables and community impact milestones.",
    deliverables: [
      "Rigorous executive headhunting, competency testing and reference vetting",
      "Donor-compliant grant performance appraisal rubric",
      "Supervisor training on objective evaluation and feedback culture",
      "Contractual mobility and expatriate tax advisory"
    ],
    results: [
      { metric: "3/3", label: "Executive roles placed within 38 days" },
      { metric: "100%", label: "Executive retention rate at 2-year anniversary" },
      { metric: "A+", label: "Donor governance audit evaluation score" }
    ],
    quote: {
      text: "Talent Bridge understands that human-centred leadership is not just a buzzword. They found us leaders whose values mirrored our mission, and built systems that our teams genuinely appreciate.",
      author: "Sr. Christine N.",
      role: "Country Representative and Executive Secretary"
    }
  },
  {
    id: "engineering-dispute",
    title: "Employment Relations Overhaul and Disciplinary SOP Implementation",
    clientSector: "Professional Services",
    clientType: "Commercial Civil and MEP Engineering Firm",
    organizationSize: "80 Engineers, Technicians and Project Managers",
    challenge: "High friction between site supervisors and technical crews had triggered two employee tribunal summonses regarding unfair termination claims under Section 45 of the Employment Act.",
    solution: "Instituted a bulletproof Disciplinary and Grievance Standard Operating Procedure, mediated the active disputes, and conducted mandatory 2-day workshops for all site managers on procedural fairness.",
    deliverables: [
      "Compliant Disciplinary SOP with statutory notice templates",
      "Hearing panel facilitation manuals and minute-taking guidelines",
      "Manager conflict de-escalation toolkit",
      "Comprehensive employee contract refresh"
    ],
    results: [
      { metric: "100%", label: "Out-of-court dispute resolution achieved" },
      { metric: "0", label: "Subsequent labour tribunal claims over 18 months" },
      { metric: "92%", label: "Manager confidence in handling staff issues" }
    ],
    quote: {
      text: "Mercy's deep understanding of Kenyan labour litigation saved us from costly legal battles. She restructured our management habits so fairness is now built directly into our operations.",
      author: "Eng. Peter O.",
      role: "Managing Partner"
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Anthony M.",
    role: "Medical Director and Board Member",
    organization: "Apex Care Hospital and Clinics",
    sector: "Healthcare",
    content: "Talent Bridge transformed our clinical and administrative workforce management. Having Mercy and her team as embedded partners gave us bulletproof compliance with Kenyan labour regulations and complete peace of mind. We passed our health ministry audits without a single discrepancy.",
    rating: 5,
    highlight: "Bulletproof compliance and peace of mind"
  },
  {
    id: "t2",
    name: "Faith Wambui",
    role: "Chief Operating Officer",
    organization: "Mara Logistics East Africa",
    sector: "Logistics and Supply Chain",
    content: "Transitioning our 90-employee payroll and statutory deductions to Talent Bridge Global Solutions was the best operational decision we made last year. Zero calculation errors, zero KRA penalties, and payslips are issued like clockwork on the 25th.",
    rating: 5,
    highlight: "Zero calculation errors, issued like clockwork"
  },
  {
    id: "t3",
    name: "David K.",
    role: "Founder and CEO",
    organization: "Horizon Technologies Ltd",
    sector: "Technology Scale-Up",
    content: "As an SME growing from 12 to 60+ engineers, we couldn't justify a full-time HR executive salary. Talent Bridge's fractional HRBP model provided the exact strategic caliber, employment handbook, and investor-ready governance we needed to close our Series A funding.",
    rating: 5,
    highlight: "Investor-ready HR governance for Series A"
  },
  {
    id: "t4",
    name: "Sr. Christine N.",
    role: "Executive Secretary",
    organization: "Hope Community Development Foundation",
    sector: "Faith-Based and Non-Profit",
    content: "Their human-centred approach and deep respect for non-profit operational realities make them an invaluable partner. They treat our staff with authentic dignity while keeping our contracts and donor-reporting governance pristine.",
    rating: 5,
    highlight: "Authentic dignity paired with pristine governance"
  }
];

export const ENGAGEMENT_MODELS: EngagementTier[] = [
  {
    id: "retainer",
    name: "Retainer Partnership",
    badge: "Most Popular for Scaling Firms",
    tagline: "Ongoing Embedded HR Business Partner Support",
    description: "Ideal for businesses that want continuous, accountable HR leadership on a fixed number of days per week or month, without the overhead of a full-time executive.",
    features: [
      "Designated Senior HRBP with regular onsite and virtual presence",
      "Ongoing executive advisory to leadership and department heads",
      "Workforce planning, recruitment screening and onboarding",
      "Employee relations, grievance handling and disciplinary management",
      "Quarterly compliance reviews and employee engagement audits",
      "Priority advisory access for urgent workplace emergencies"
    ],
    timeline: "Ongoing 6 or 12-month renewable engagement",
    recommendedFor: "SMEs, healthcare facilities and institutions with 20 to 150 employees",
    isPopular: true
  },
  {
    id: "project-based",
    name: "Project-Based Engagement",
    badge: "Targeted Scope and Fast Turnaround",
    tagline: "Defined Deliverables on Fixed Timeline and Fee",
    description: "A clearly defined scope of work delivered on a predictable schedule — such as building your complete HR policy manual, structuring recruitment pipelines, or auditing compliance.",
    features: [
      "Tailored Employee Handbook and Company Policy Manual",
      "Standardized employment contracts (permanent, fixed, locum, casual)",
      "Organizational chart, grading matrix and job descriptions",
      "Complete statutory compliance diagnostic and remediation audit",
      "Manager and supervisor rollout briefing workshops",
      "Full digital and print-ready documentation handoff"
    ],
    timeline: "3 to 6 weeks from kickoff to sign-off",
    recommendedFor: "Companies seeking a rapid HR foundation or fixing identified compliance gaps",
    isPopular: false
  },
  {
    id: "payroll-only",
    name: "Payroll-Only Outsourcing",
    badge: "100% Guaranteed On-Time Filing",
    tagline: "End-to-End Payroll and Statutory Remittances",
    description: "Complete monthly payroll processing and statutory deductions handled end-to-end so your business never misses a filing deadline or suffers avoidable penalties.",
    features: [
      "Accurate monthly gross-to-net salary and overtime computation",
      "Statutory deductions management (PAYE, NSSF, SHA, AHL, NITA, HELB)",
      "Encrypted individual employee PDF payslips delivered directly",
      "Bank transfer schedule (EFT/RTGS CSV formats) generation",
      "Filing and remittance confirmation receipts archive",
      "Annual employee P9 tax forms prepared automatically"
    ],
    timeline: "Monthly cycle with delivery on/before 25th",
    recommendedFor: "Any business wanting error-free payroll without distracting internal teams",
    isPopular: false
  }
];

export const AUDIT_QUESTIONS: AuditQuestion[] = [
  {
    id: "q1",
    category: "contracts",
    question: "Do all employees have signed, up-to-date written employment contracts detailing job descriptions, notice periods, and leave entitlements?",
    riskDescription: "Under Section 9 of the Employment Act 2007, an employer must provide a written statement of particulars within 2 months of employment. Failure exposes you to labour officer sanctions and tribunal liability.",
    lawReference: "Employment Act 2007, Section 9 and 10"
  },
  {
    id: "q2",
    category: "payroll",
    question: "Are all monthly statutory remittances (PAYE, NSSF, SHA, Housing Levy AHL, and NITA) filed and remitted strictly on or before the 9th of each month?",
    riskDescription: "Statutory bodies impose heavy monthly penalties (5% - 25% compound interest) plus potential personal liability for directors on unremitted deductions.",
    lawReference: "Income Tax Act, NSSF Act 2013, SHIF Act 2023, Affordable Housing Act 2024"
  },
  {
    id: "q3",
    category: "policy",
    question: "Does your company have an approved Employee Handbook or Policy Manual covering harassment, remote work, data privacy, and grievance handling?",
    riskDescription: "Without written, acknowledged policies, disciplinary actions and terminations can be deemed unfair or unlawful by the Employment and Labour Relations Court.",
    lawReference: "Employment Act 2007, Section 41 and 45"
  },
  {
    id: "q4",
    category: "disciplinary",
    question: "Before any termination or disciplinary action, do you conduct a documented hearing with notice and the right to be accompanied by a colleague?",
    riskDescription: "Section 41 mandates explanation of reasons in a language understood, hearing representations, and allowing accompaniment. Procedural flaws invalidate even justified terminations.",
    lawReference: "Employment Act 2007, Section 41"
  }
];

// Export aliases for multi-layout system compatibility
export const ENGAGEMENT_TIERS = ENGAGEMENT_MODELS;
export const PROCESS_STEPS = HOW_WE_WORK_STEPS;
export const SECTORS_SERVED = WHO_WE_WORK_WITH_SECTORS;
