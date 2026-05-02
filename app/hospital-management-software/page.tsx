import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema, generateReviewSchema, generateOrganizationSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'MediConnect Hospital Management Software | HMS HMIS for India | EifaSoft',
    description: 'MediConnect – India\'s enterprise-grade Hospital Management Software. Complete HMIS covering OPD, IPD, EMR, OT, ICU, LIS, RIS/PACS, Pharmacy, Billing, TPA, Doctor App, Staff App & Admin Panel. NABH/JCI ready. Ayushman Bharat integrated.',
    canonical: '/hospital-management-software',
    keywords: [
      'hospital management software India',
      'HMS software India',
      'hospital information system',
      'HMIS software India',
      'hospital management system',
      'clinic management software',
      'multi-specialty hospital software',
      'EMR EHR software India',
      'OPD management software',
      'IPD management software',
      'pharmacy management hospital',
      'hospital billing software',
      'NABH compliant hospital software',
      'Ayushman Bharat software integration',
      'ABHA integration hospital',
      'telemedicine platform India',
      'doctor app hospital',
      'laboratory information system India',
      'radiology information system',
      'hospital software Delhi',
      'hospital software Mumbai',
      'hospital software Bangalore',
      'hospital software Hyderabad',
      'hospital management software Chennai',
      'HIMS India',
      'blood bank software',
      'OT management software',
      'ICU management software',
      'TPA insurance hospital software',
      'hospital ERP India',
    ],
  });
}

const faqs = [
  {
    question: 'What is MediConnect Hospital Management Software?',
    answer: 'MediConnect is a comprehensive, cloud-based Hospital Management Information System (HMIS) built for hospitals, clinics, and healthcare networks of all sizes. It covers clinical operations (OPD, IPD, OT, ICU, Emergency), diagnostics (LIS, RIS/PACS), pharmacy, billing, insurance, HR, and analytics — all in a single integrated platform with dedicated Doctor App, Staff App, and Admin Panel.',
  },
  {
    question: 'Is MediConnect NABH and JCI compliant?',
    answer: 'Yes. MediConnect is designed with NABH and JCI accreditation requirements built-in, including incident reporting, clinical audits, infection control surveillance, antibiotic stewardship, and quality KPI dashboards. The Quality Management module guides your hospital through accreditation workflows step by step.',
  },
  {
    question: 'Does it support Ayushman Bharat and ABHA integration?',
    answer: 'Absolutely. MediConnect integrates with Ayushman Bharat PM-JAY for cashless claim processing, ABHA (Ayushman Bharat Health Account) for digital health records linking, CGHS, ECHS, and state government health schemes. HL7 FHIR R4 compliance ensures interoperability with national health registries.',
  },
  {
    question: 'What is the Doctor App and what can doctors do on it?',
    answer: 'The MediConnect Doctor App is a mobile application for doctors to view patient records, write digital prescriptions (e-prescriptions), check OPD queue & appointment schedules, review lab results, approve medication orders, access clinical decision support, conduct teleconsultations, and receive critical value alerts — all from their smartphone.',
  },
  {
    question: 'What does the Staff/Nurse App offer?',
    answer: 'The Staff App enables nurses and paramedical staff to record patient vitals, mark medication administration, document nursing care plans, complete patient safety rounds, record handover notes, manage bed assignments, flag abnormal vitals, and communicate with the clinical team — directly from a mobile device at the bedside.',
  },
  {
    question: 'Can MediConnect handle multi-hospital or multi-branch networks?',
    answer: 'Yes. MediConnect is built on a multi-tenant SaaS architecture. Each hospital or branch has isolated data with customizable branding, configuration, and roles. A central admin panel gives corporate/group management visibility across all facilities with consolidated analytics, while individual hospitals see only their own data.',
  },
  {
    question: 'Does it support cashless insurance and TPA integration?',
    answer: 'MediConnect includes a full Insurance & TPA module supporting pre-authorization workflows, cashless claim approval tracking, e-card verification, claim rejection management, and reimbursement processing. It integrates with major TPAs and government schemes including Ayushman Bharat, CGHS, and ECHS.',
  },
  {
    question: 'Is telemedicine built into the platform?',
    answer: 'Yes. The Telemedicine module supports video, audio, and chat consultations with integrated e-prescriptions, remote patient monitoring, second opinion workflows, an AI-assisted symptom checker, and wearable device integration. Patients can book and attend consultations via the Patient Portal or mobile app.',
  },
  {
    question: 'What technology powers MediConnect?',
    answer: 'MediConnect uses a microservices architecture on Kubernetes, with a React/Next.js frontend, Node.js/Python microservices, PostgreSQL for transactional data, MongoDB for documents, Redis for caching, and ElasticSearch for search. The AI layer uses clinical ML models for diagnostic assistance, no-show prediction, and length-of-stay forecasting.',
  },
  {
    question: 'How do I get started with MediConnect?',
    answer: 'Contact EifaSoft Technologies to schedule a live demo tailored to your hospital type. We offer a phased implementation approach: starting with core modules (Registration, OPD, IPD, Billing, Pharmacy) and expanding to advanced clinical, specialized, and AI modules. Full implementation support, staff training, and data migration are included.',
  },
];

const coreModules = [
  {
    icon: '🏥',
    title: 'Electronic Health Records (EHR/EMR)',
    color: 'blue',
    features: [
      'Patient demographics & complete medical history',
      'SOAP notes & customizable clinical templates',
      'Allergy, medication & drug interaction alerts',
      'Clinical Decision Support System (CDSS)',
      'Voice-to-text documentation',
      'HL7 FHIR & DICOM interoperability',
    ],
  },
  {
    icon: '🩺',
    title: 'OPD & Appointment Management',
    color: 'teal',
    features: [
      'Walk-in, teleconsultation & physical scheduling',
      'Queue management & token system',
      'Doctor availability & roster management',
      'E-prescription & referral management',
      'Camp / outreach clinic management',
      'Patient self-booking portal & app',
    ],
  },
  {
    icon: '🛏️',
    title: 'IPD & Bed Management',
    color: 'indigo',
    features: [
      'Visual bed board & ward allocation',
      'Admission / Discharge / Transfer (ADT)',
      'Patient journey & status tracking',
      'Dietary management & nursing care plans',
      'Round management & handover notes',
      'Discharge summary & medication reconciliation',
    ],
  },
  {
    icon: '🚨',
    title: 'Emergency & Trauma Care',
    color: 'red',
    features: [
      'Color-coded triage management (START/SALT)',
      'Mass casualty incident protocols',
      'Ambulance tracking & pre-hospital care',
      'Fast-track registration for emergencies',
      'Medico-legal case management',
      'Poison control & antidote tracking',
    ],
  },
  {
    icon: '🔬',
    title: 'Operation Theatre (OT)',
    color: 'purple',
    features: [
      'OT scheduling, booking & pre-op checklists',
      'Surgeon & anaesthetist roster',
      'WHO surgical safety checklist',
      'Inventory consumption tracking per surgery',
      'Anesthesia records & post-op recovery',
      'Surgical audit & outcomes tracking',
    ],
  },
  {
    icon: '💉',
    title: 'ICU & Critical Care',
    color: 'orange',
    features: [
      'Critical care flow sheets & vitals monitoring',
      'Ventilator & infusion pump integration',
      'APACHE / SOFA severity scoring',
      'Sepsis monitoring protocols & alerts',
      'Organ donor management workflows',
      'Real-time nursing documentation',
    ],
  },
];

const diagnosticModules = [
  {
    icon: '🧪',
    title: 'Laboratory (LIS)',
    color: 'green',
    features: [
      'Test ordering & sample scheduling',
      'Barcode / RFID sample tracking',
      'Analyzer integration (HL7/ASTM)',
      'Quality control & delta checks',
      'Critical value alerts to clinicians',
      'Report delivery via SMS/email/app',
    ],
  },
  {
    icon: '🩻',
    title: 'Radiology (RIS + PACS)',
    color: 'cyan',
    features: [
      'Imaging order management & worklist',
      'DICOM viewer & cloud PACS storage',
      'AI-powered preliminary image reads',
      'Peer review & e-learning system',
      'Radiation dose tracking',
      'Teleradiology support',
    ],
  },
  {
    icon: '💊',
    title: 'Pharmacy Management',
    color: 'emerald',
    features: [
      'Inventory with batch/lot/expiry tracking',
      'Drug-drug interaction & allergy alerts',
      'Narcotics & controlled substance log',
      'Compounding & hospital formulary',
      'Online pharmacy & home delivery',
      'Generic substitution suggestions',
    ],
  },
  {
    icon: '🩸',
    title: 'Blood Bank',
    color: 'rose',
    features: [
      'Donor registration & health screening',
      'Blood component processing & inventory',
      'Cross-matching & compatibility tests',
      'Transfusion reaction reporting',
      'Rare blood group registry',
      'Donor app for camps & appointments',
    ],
  },
];

const adminModules = [
  {
    icon: '🪪',
    title: 'Patient Registration & MPI',
    color: 'blue',
    features: [
      'Unique Master Patient Index (MPI)',
      'Biometric & Aadhaar integration',
      'Real-time insurance verification',
      'Family linking & corporate contracts',
      'ABHA health account linking',
      'Patient portal & mobile app access',
    ],
  },
  {
    icon: '💰',
    title: 'Billing & Revenue Cycle',
    color: 'amber',
    features: [
      'Package & procedure-based billing',
      'TPA & insurance claim management',
      'Cashless & reimbursement processing',
      'Ayushman Bharat / CGHS / ECHS',
      'Medical tourism billing (forex)',
      'Estimation & deposit management',
    ],
  },
  {
    icon: '📦',
    title: 'Materials & Supply Chain',
    color: 'slate',
    features: [
      'Medical & non-medical inventory',
      'Vendor management & e-procurement',
      'Purchase orders & GRN processing',
      'Consumption tracking per procedure',
      'Expiry management (FEFO)',
      'Implant tracking (UDI compliance)',
    ],
  },
  {
    icon: '👥',
    title: 'HRM & Payroll',
    color: 'violet',
    features: [
      'Doctor & staff rostering management',
      'Payroll with PF / ESI / PT compliance',
      'Credentialing & privileging workflows',
      'CME tracking & performance appraisals',
      'Locum staff management',
      'Leave management & attendance',
    ],
  },
];

const targetCities = [
  'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad',
  'Jaipur', 'Lucknow', 'Noida', 'Gurgaon', 'Chandigarh', 'Indore', 'Bhopal', 'Nagpur',
  'Kota', 'Agra', 'Varanasi', 'Patna', 'Surat', 'Coimbatore', 'Madurai', 'Vishakhapatnam',
  'Thiruvananthapuram', 'Bhubaneswar', 'Raipur', 'Ranchi', 'Guwahati', 'Moradabad',
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue:    { bg: 'bg-blue-50',    text: 'text-blue-600',    border: 'border-blue-200' },
  teal:    { bg: 'bg-teal-50',    text: 'text-teal-600',    border: 'border-teal-200' },
  indigo:  { bg: 'bg-indigo-50',  text: 'text-indigo-600',  border: 'border-indigo-200' },
  red:     { bg: 'bg-red-50',     text: 'text-red-600',     border: 'border-red-200' },
  purple:  { bg: 'bg-purple-50',  text: 'text-purple-600',  border: 'border-purple-200' },
  orange:  { bg: 'bg-orange-50',  text: 'text-orange-600',  border: 'border-orange-200' },
  green:   { bg: 'bg-green-50',   text: 'text-green-600',   border: 'border-green-200' },
  cyan:    { bg: 'bg-cyan-50',    text: 'text-cyan-600',    border: 'border-cyan-200' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200' },
  rose:    { bg: 'bg-rose-50',    text: 'text-rose-600',    border: 'border-rose-200' },
  amber:   { bg: 'bg-amber-50',   text: 'text-amber-600',   border: 'border-amber-200' },
  slate:   { bg: 'bg-slate-50',   text: 'text-slate-600',   border: 'border-slate-200' },
  violet:  { bg: 'bg-violet-50',  text: 'text-violet-600',  border: 'border-violet-200' },
};

export default function HospitalManagementSoftwarePage() {
  const serviceSchema = generateServiceSchema(
    'MediConnect - Hospital Management Software',
    'Enterprise-grade HMIS for hospitals, clinics, and healthcare networks. Covers OPD, IPD, EMR, OT, ICU, LIS, RIS/PACS, Pharmacy, Billing, TPA, Doctor App, Staff App, and Admin Panel. NABH/JCI ready with Ayushman Bharat integration.'
  );

  const productSchema = generateProductSchema(
    'MediConnect Hospital Management Software',
    'Complete hospital information system (HMIS) with 38+ modules including clinical, diagnostic, administrative, digital health, and AI-powered analytics. Multi-tenant SaaS platform with dedicated mobile apps for doctors and staff.',
    '₹2,50,000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/services' },
    { name: 'Hospital Management Software', url: '/hospital-management-software' },
  ]);

  const howToSchema = generateHowToSchema([
    { name: 'MVP Phase', text: 'Deploy Registration, OPD, IPD, Basic EHR, Billing & Pharmacy modules for core hospital operations', position: 1 },
    { name: 'Phase 2', text: 'Add LIS, RIS/PACS, OT Management, ICU, Insurance & TPA integration', position: 2 },
    { name: 'Phase 3', text: 'Implement Advanced EHR, Telemedicine, Patient App, Doctor App, AI features', position: 3 },
    { name: 'Phase 4', text: 'Deploy specialized departments, advanced analytics, research & trials modules', position: 4 },
    { name: 'Training & Go-Live', text: 'Comprehensive staff training, data migration, and 24/7 go-live support', position: 5 },
    { name: 'Ongoing Support', text: 'Continuous optimization, updates, and dedicated support for hospital operations', position: 6 },
  ]);

  const reviewSchema = generateReviewSchema([
    { author: 'Dr. Sanjay Kumar', rating: 5, reviewBody: 'MediConnect transformed our 300-bed hospital. The Doctor App gives us real-time patient data. Ayushman Bharat integration works flawlessly!' },
    { author: 'Priya Menon', rating: 5, reviewBody: 'NABH accreditation became much easier with MediConnect. The built-in quality modules, incident reporting, and audit trails are exceptional.' },
    { author: 'Dr. Ahmad Raza', rating: 5, reviewBody: 'Managing our hospital chain of 5 facilities is now seamless. The multi-tenant architecture with centralized reporting is exactly what we needed.' },
  ]);

  const organizationSchema = generateOrganizationSchema();

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, howToSchema, ...reviewSchema, organizationSchema]} />

      <Hero
        title="MediConnect: Hospital Management Software"
        subtitle="Enterprise HMIS for Modern Healthcare"
        description="Run your entire hospital from one intelligent platform. OPD, IPD, EMR, OT, ICU, LIS, Pharmacy, Billing, TPA, Telemedicine & AI Analytics. Dedicated Doctor App, Staff App & Admin Panel. NABH/JCI ready with full Ayushman Bharat & ABHA integration."
        ctaPrimary={{ text: 'Request Free Demo', href: '/contact' }}
        ctaSecondary={{ text: 'Explore Modules', href: '#modules' }}
      />

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-blue-900 to-teal-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '38+', label: 'Clinical & Admin Modules' },
              { value: '3', label: 'Dedicated Mobile Apps' },
              { value: 'NABH/JCI', label: 'Accreditation Ready' },
              { value: 'ABDM', label: 'Ayushman Bharat Integrated' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-teal-300 mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MediConnect */}
      <section className="py-20 bg-white" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
              WHY MEDICONNECT?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything Your Hospital Needs in One Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stop managing clinical, billing, and administrative operations in silos. MediConnect brings all departments together on a single, intelligent system — so your staff can focus on patients, not paperwork.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🩺', title: 'End-to-End Clinical', desc: 'From emergency triage to discharge, every clinical touchpoint — OPD, IPD, OT, ICU, labs, pharmacy — is fully connected.' },
              { icon: '📱', title: 'Doctor & Staff Apps', desc: 'Dedicated mobile apps for doctors, nurses, and admin staff so the right information reaches the right person at the right time.' },
              { icon: '🏛️', title: 'Government Compliance', desc: 'Built-in Ayushman Bharat PM-JAY, ABHA, CGHS, ECHS, and state scheme integrations. FHIR R4 interoperability out of the box.' },
              { icon: '🤖', title: 'AI-Powered Intelligence', desc: 'Clinical AI for diagnostic assistance, radiology reads, no-show prediction, length-of-stay forecasting, and automated coding.' },
              { icon: '🔒', title: 'Security & Compliance', desc: 'HIPAA, GDPR, and DPDP Act compliance. End-to-end encryption, RBAC, MFA, tamper-proof audit trails, and disaster recovery.' },
              { icon: '🌐', title: 'Multi-Hospital Ready', desc: 'Multi-tenant SaaS architecture supports hospital chains, networks, and franchise models with central oversight and local autonomy.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow bg-gray-50">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Clinical Modules */}
      <section className="py-20 bg-gray-50" id="modules">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              CLINICAL MODULES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Clinical Operations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From first contact to discharge, every clinical workflow is automated and connected.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {coreModules.map((mod) => {
              const colors = colorMap[mod.color] ?? colorMap.blue;
              return (
                <div key={mod.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 ${colors.bg} ${colors.border} border rounded-xl flex items-center justify-center text-2xl mb-4`}>
                    {mod.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{mod.title}</h3>
                  <ul className="space-y-1.5">
                    {mod.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')} flex-shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diagnostic Modules */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              DIAGNOSTIC MODULES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lab, Radiology, Pharmacy & Blood Bank
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Integrated diagnostic workflows with real-time alerts, analyzer interfaces, and PACS-grade imaging.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {diagnosticModules.map((mod) => {
              const colors = colorMap[mod.color] ?? colorMap.green;
              return (
                <div key={mod.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 ${colors.bg} ${colors.border} border rounded-xl flex items-center justify-center text-2xl mb-4`}>
                    {mod.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{mod.title}</h3>
                  <ul className="space-y-1.5">
                    {mod.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')} flex-shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Administrative Modules */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              ADMINISTRATIVE & FINANCIAL
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Billing, Insurance, Inventory & HR
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end revenue cycle management, supply chain, and human resource operations in one place.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {adminModules.map((mod) => {
              const colors = colorMap[mod.color] ?? colorMap.amber;
              return (
                <div key={mod.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 ${colors.bg} ${colors.border} border rounded-xl flex items-center justify-center text-2xl mb-4`}>
                    {mod.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{mod.title}</h3>
                  <ul className="space-y-1.5">
                    {mod.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')} flex-shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctor App */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-teal-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-white/10 text-teal-200 rounded-full text-sm font-semibold mb-6">DOCTOR APP</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Empower Doctors at the Point of Care</h2>
              <p className="text-blue-100 text-lg mb-8">The MediConnect Doctor App puts patient records, e-prescription, lab results, and CDSS in every doctor&apos;s pocket.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'View complete patient EHR & history',
                  'Write digital e-prescriptions',
                  'Check OPD queue & appointments',
                  'Review lab & radiology reports',
                  'Approve medication & discharge orders',
                  'Conduct video teleconsultations',
                  'Receive critical value & allergy alerts',
                  'Clinical decision support (CDSS)',
                  'Voice-to-text note dictation',
                  'Manage referrals & second opinions',
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-2 text-sm text-blue-100">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-teal-400 text-blue-900 flex items-center justify-center text-xs flex-shrink-0">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-block px-6 py-3 bg-teal-400 text-blue-900 font-semibold rounded-xl hover:bg-teal-300 transition-colors">Request Doctor App Demo</Link>
            </div>
            <div className="bg-white/10 rounded-3xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">Doctor Dashboard Highlights</h3>
              {[
                { label: "Today's OPD Queue", value: 'Real-time token status' },
                { label: 'Pending Lab Results', value: 'Color-coded priority alerts' },
                { label: 'Active IPD Patients', value: 'Ward-wise patient list' },
                { label: 'Upcoming Surgeries', value: 'OT schedule & checklists' },
                { label: 'Teleconsult Requests', value: 'One-tap video call launch' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                  <span className="text-blue-100 text-sm">{item.label}</span>
                  <span className="text-teal-300 text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Staff / Nurse App */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-teal-50 rounded-3xl p-8 border border-teal-100 order-2 lg:order-1">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Staff App Capabilities</h3>
              <div className="space-y-3">
                {[
                  { icon: '🩺', label: 'Vital Signs Recording', desc: 'BP, pulse, temp, SpO2 at bedside' },
                  { icon: '💊', label: 'Medication Administration', desc: 'Scan barcode, mark given/withheld' },
                  { icon: '📋', label: 'Nursing Care Plans', desc: 'Create, update, and handover notes' },
                  { icon: '🚶', label: 'Patient Safety Rounds', desc: 'Fall risk, pressure ulcer checklists' },
                  { icon: '🛏️', label: 'Bed Management', desc: 'Real-time bed status & transfers' },
                  { icon: '📣', label: 'Team Communication', desc: 'Alerts, escalations & handover chat' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-3 bg-white rounded-xl">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{item.label}</div>
                      <div className="text-gray-500 text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">STAFF &amp; NURSE APP</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Bedside Care &mdash; Digitized</h2>
              <p className="text-gray-600 text-lg mb-6">MediConnect Staff App puts clinical workflows in the hands of nurses and ward staff &mdash; reducing errors and saving hours of paperwork every shift.</p>
              <ul className="space-y-3">
                {[
                  'Nursing documentation at the bedside',
                  'Instant alerts for abnormal vitals',
                  'Shift handover with digital notes',
                  'Fall risk & pressure ulcer tracking',
                  'Infection control checklists',
                  'Link directly to EHR & medication orders',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Panel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">ADMIN PANEL</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Administrative Control</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Total visibility and control from a single login for hospital management and group administrators.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📊', title: 'Real-Time Cockpit Dashboard', desc: 'Live metrics: bed occupancy, OPD load, revenue, outstanding, lab TAT, and staff attendance all in one view.' },
              { icon: '🏢', title: 'Multi-Hospital Management', desc: 'Multiple hospitals with tenant isolation, custom branding per facility, and consolidated group reporting.' },
              { icon: '🔑', title: 'Role-Based Access Control', desc: 'Granular permissions for every role — doctor, nurse, billing, pharmacy, admin — with module-level controls.' },
              { icon: '📈', title: 'Business Intelligence & Analytics', desc: 'Predictive analytics for readmissions, financial accounting, clinical outcomes benchmarking, AI demand forecasting.' },
              { icon: '⚙️', title: 'System Configuration', desc: 'Configure fee structures, bed categories, doctor schedules, package rates, insurance tariffs, and formulary.' },
              { icon: '🛡️', title: 'Audit Trail & Compliance', desc: 'Tamper-proof audit logs, NABH templates, incident reports, and accreditation compliance tracking.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Departments */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">SPECIALIZED DEPARTMENTS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Purpose-Built for Every Specialty</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: '👶', title: 'Maternity & Neonatal', features: 'Antenatal care, labor room, NICU, newborn screening, immunization' },
              { icon: '🧒', title: 'Pediatrics', features: 'Growth charts, vaccination (UIP+), developmental milestones' },
              { icon: '🫀', title: 'Oncology', features: 'Chemo protocols, radiation planning, tumor board, clinical trials' },
              { icon: '❤️', title: 'Cardiology', features: 'Cath lab, ECG/echo reporting, cardiac rehab, pacemaker clinic' },
              { icon: '🫘', title: 'Nephrology & Dialysis', features: 'Dialysis scheduling, water quality, vascular access, transplant' },
              { icon: '🧠', title: 'Mental Health', features: 'Mental status exams, therapy sessions, de-addiction, telepsychiatry' },
              { icon: '🦷', title: 'Dental & Ophthalmology', features: 'Dental charting, vision testing, optical shop, LASIK planning' },
              { icon: '🔄', title: 'Organ Transplant', features: 'NOTTO integration, donor-recipient matching, immunosuppression' },
              { icon: '🏃', title: 'Rehabilitation & Therapy', features: 'Physiotherapy, occupational therapy, speech therapy, home exercise' },
              { icon: '📱', title: 'Telemedicine', features: 'Video consultations, remote monitoring, AI symptom checker' },
              { icon: '🏠', title: 'Home Healthcare', features: 'Home visits, remote monitoring, home nursing, medicine delivery' },
              { icon: '💪', title: 'Preventive & Wellness', features: 'Health checkup packages, corporate wellness, lifestyle programs' },
            ].map((dept) => (
              <div key={dept.title} className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                <div className="text-2xl mb-2">{dept.icon}</div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{dept.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{dept.features}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Health & AI */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">DIGITAL HEALTH</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Patient Portal, Telemedicine &amp; AI</h2>
              <p className="text-gray-600 text-lg mb-6">Give patients 24/7 access from appointment booking and reports to video consultations and wearable monitoring.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  '📅 Online appointment booking',
                  '🧾 Lab reports & imaging access',
                  '💬 Video / audio / chat consultation',
                  '📋 Digital prescription refills',
                  '🔗 ABHA health account linking',
                  '⌚ Wearable device integration',
                  '⭐ Feedback & ratings portal',
                  '🏃 Health trackers & reminders',
                ].map((f) => (
                  <div key={f} className="text-sm text-gray-700 bg-white rounded-lg px-4 py-2 border border-gray-100">{f}</div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">AI/ML Intelligence Layer</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Clinical AI', desc: 'Diagnostic assistance, radiology AI reads, pathology AI' },
                    { label: 'Operational AI', desc: 'No-show prediction, length-of-stay, staffing optimization' },
                    { label: 'Conversational AI', desc: 'Appointment chatbots, symptom checker' },
                    { label: 'Document AI', desc: 'Automated ICD coding, report generation' },
                  ].map((ai) => (
                    <div key={ai.label} className="flex gap-3">
                      <span className="w-2 h-2 mt-2 rounded-full bg-teal-500 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-900 text-sm">{ai.label}: </span>
                        <span className="text-gray-600 text-sm">{ai.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Integration Ecosystem</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['ABHA / ABDM', 'HL7 FHIR R4', 'DICOM', 'Razorpay / UPI', 'Aadhaar KYC', 'SAP / Tally ERP', 'Apple Health / Fit', 'Ambulance GPS'].map((it) => (
                    <div key={it} className="text-xs text-gray-600 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">{it}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">QUALITY &amp; COMPLIANCE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">NABH, JCI &amp; Government Scheme Ready</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏅', title: 'NABH / JCI Accreditation', items: ['Incident reporting & RCA workflows', 'Clinical audit & peer reviews', 'Infection control surveillance', 'Antibiotic stewardship module', 'Mortality & morbidity reviews', 'Patient safety round tracking'] },
              { icon: '🇮🇳', title: 'Indian Government Compliance', items: ['Ayushman Bharat PM-JAY integration', 'ABHA health account linking', 'CGHS / ECHS claim management', 'DigiLocker document verification', 'Jan Aushadhi medicine integration', 'Regional language support (12+ languages)'] },
              { icon: '🔒', title: 'Security & Data Protection', items: ['HIPAA / GDPR / DPDP Act compliance', 'End-to-end encryption at rest & transit', 'Role-based access control (RBAC)', 'Multi-factor authentication (MFA)', 'Tamper-proof audit trails', 'Penetration testing & vulnerability mgmt'] },
            ].map((card) => (
              <div key={card.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-4">{card.title}</h3>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEO Targeting */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">PAN-INDIA AVAILABILITY</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hospital Management Software Across India</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {targetCities.map((city) => (
              <span key={city} className="px-4 py-2 bg-white rounded-full border border-blue-100 text-gray-700 text-sm hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors cursor-default">
                Hospital Software {city}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { icon: '🏥', title: 'Multi-Specialty Hospitals', desc: 'Complete HMIS for 100–1000+ bed hospitals with all specialties.' },
              { icon: '🧪', title: 'Diagnostic & Imaging Centers', desc: 'LIS, RIS/PACS, and lab workflows for standalone centers.' },
              { icon: '🏠', title: 'Nursing Homes & Clinics', desc: 'Scaled-down deployment for clinics, nursing homes, polyclinics.' },
              { icon: '🌐', title: 'Hospital Chains & Groups', desc: 'Multi-tenant for hospital groups managing 5 to 50+ facilities.' },
            ].map((type) => (
              <div key={type.title} className="text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3">{type.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">PRICING</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Modular Pricing &mdash; Pay for What You Need</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Clinic / Nursing Home', price: '₹2,50,000', period: 'one-time', color: 'border-gray-200', btnClass: 'bg-gray-900 text-white hover:bg-gray-700', badge: '', modules: ['OPD & Appointment Management', 'Patient Registration & MPI', 'Basic Billing & Invoicing', 'Pharmacy Management', 'Staff & HR Module', 'Basic Reports & Dashboard'] },
              { name: 'Hospital Standard', price: '₹7,50,000', period: 'one-time', color: 'border-teal-500', badge: 'Most Popular', btnClass: 'bg-teal-600 text-white hover:bg-teal-700', modules: ['All Clinic plan modules', 'IPD & Bed Management', 'OT & ICU Management', 'Laboratory (LIS)', 'Radiology (RIS/PACS)', 'Insurance & TPA', 'Doctor & Staff Apps', 'Telemedicine & Patient Portal'] },
              { name: 'Enterprise / Chain', price: 'Custom', period: 'contact for pricing', color: 'border-indigo-500', badge: '', btnClass: 'bg-indigo-600 text-white hover:bg-indigo-700', modules: ['All Hospital Standard modules', 'Multi-tenant multi-hospital', 'AI/ML Intelligence Layer', 'Advanced Analytics & BI', 'All Specialized Departments', 'Custom Integrations (SAP etc.)', 'White-labeling & custom domain', 'Dedicated support & SLA'] },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl border-2 ${plan.color} p-8 relative`}>
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-teal-500 text-white text-xs font-bold rounded-full">{plan.badge}</span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <div className="text-3xl font-bold text-gray-900 mb-1">{plan.price}</div>
                <div className="text-gray-500 text-sm mb-6">{plan.period}</div>
                <ul className="space-y-2 mb-8">
                  {plan.modules.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1 w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs flex-shrink-0">✓</span>
                      {m}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`block w-full py-3 rounded-xl text-center font-semibold transition-colors ${plan.btnClass}`}>Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">IMPLEMENTATION ROADMAP</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Go Live in 4 Phases</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { phase: '01', title: 'MVP — 6 Months', color: 'bg-blue-600', modules: 'Registration, OPD, IPD, Basic EHR, Billing & Pharmacy' },
              { phase: '02', title: 'Phase 2 — +6 Months', color: 'bg-teal-600', modules: 'LIS, RIS/PACS, OT Management, ICU, Insurance & TPA' },
              { phase: '03', title: 'Phase 3 — +6 Months', color: 'bg-indigo-600', modules: 'Advanced EHR, Telemedicine, Patient App, Doctor App, AI' },
              { phase: '04', title: 'Phase 4 — +12 Months', color: 'bg-purple-600', modules: 'Specialized departments, Analytics, Research & Trials' },
            ].map((p) => (
              <div key={p.phase} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className={`w-12 h-12 ${p.color} text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4`}>{p.phase}</div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.modules}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold mb-4">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">MediConnect HMS FAQs</h2>
          </div>
          <FAQSection faqs={faqs} className="bg-transparent py-0" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Digitise Your Hospital?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join hospitals across India using MediConnect HMS for better patient care, faster claims, and smarter administration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-teal-400 text-blue-900 rounded-xl font-bold text-lg hover:bg-teal-300 transition-colors">Request Free Demo</Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-white/40 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">Talk to a Healthcare Consultant</Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Book a Free MediConnect Demo</h2>
              <p className="text-lg text-gray-600">Our team will schedule a live demo tailored to your hospital type within 24 hours.</p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: '🏥', label: 'Hospital & clinic demos available' },
                  { icon: '⏱️', label: 'Response within 24 business hours' },
                  { icon: '🎓', label: 'Staff training & data migration included' },
                  { icon: '🇮🇳', label: 'Serving hospitals across India' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-gray-700">
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
