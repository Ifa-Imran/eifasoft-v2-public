import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema, generateReviewSchema, generateOrganizationSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'School ERP Software Development Company India | Best School Management System | EifaSoft',
    description: 'Leading school ERP software development company in India. Complete school management system with 25+ modules: Student Information, Fee Management, Attendance, LMS, Transport, Hostel, HR & more. Starting ₹1,99,999. 100+ schools trust us.',
    canonical: '/school-erp-software',
    keywords: [
      'school ERP software', 'school ERP software India', 'school management system',
      'school management software', 'school ERP development company', 'best school ERP',
      'student information system', 'fee management software', 'attendance management system',
      'school LMS', 'online school software', 'education ERP', 'school administration software',
      'student management system', 'academic management software', 'examination management system',
      'school fee collection software', 'transport management software', 'hostel management software',
      'library management system', 'parent portal software', 'teacher portal software',
      'school mobile app', 'school ERP cost India', 'affordable school ERP',
      'cloud school ERP', 'school ERP with mobile app', 'CBSE school software',
      'ICSE school software', 'school software development', 'custom school ERP',
    ],
  });
}

export default function SchoolERPSoftware() {
  // All 25 modules
  const modules = [
    {
      id: 1,
      icon: '👨‍🎓',
      title: 'Student Information System (SIS)',
      features: ['Student admission & enrollment', 'Student profile management', 'Student ID card generation', 'Attendance tracking', 'Disciplinary records', 'Health records', 'Transfer/withdrawal management', 'Alumni management'],
    },
    {
      id: 2,
      icon: '📚',
      title: 'Academic Management',
      features: ['Curriculum planning', 'Syllabus management', 'Lesson planning', 'Timetable/schedule generation', 'Subject management', 'Academic calendar', 'Academic year management', 'Class & section management'],
    },
    {
      id: 3,
      icon: '📝',
      title: 'Examination & Assessment',
      features: ['Exam scheduling', 'Question bank management', 'Exam paper generation', 'Online/offline examination', 'Grading & marking', 'Report card generation', 'GPA/CGPA calculation', 'Transcript generation'],
    },
    {
      id: 4,
      icon: '✅',
      title: 'Attendance Management',
      features: ['Daily attendance (students & staff)', 'Biometric/RFID integration', 'Leave management', 'Attendance reports & analytics', 'SMS/email notifications', 'Late arrival tracking'],
    },
    {
      id: 5,
      icon: '💰',
      title: 'Fee & Financial Management',
      features: ['Fee structure management', 'Online payment gateway', 'Fee reminders & notifications', 'Scholarship management', 'Payroll processing', 'Budget management', 'Expense tracking', 'Financial accounting'],
    },
    {
      id: 6,
      icon: '📖',
      title: 'Library Management',
      features: ['Catalog management', 'Book circulation (issue/return)', 'Barcode/RFID integration', 'E-books & digital resources', 'Fine calculation', 'Library reports', 'Book procurement'],
    },
    {
      id: 7,
      icon: '🚌',
      title: 'Transportation Management',
      features: ['Route planning & optimization', 'Vehicle/fleet management', 'Driver management', 'GPS tracking integration', 'Transport fees', 'Pickup/drop-off scheduling', 'Safety records'],
    },
    {
      id: 8,
      icon: '🏠',
      title: 'Hostel/Residential Management',
      features: ['Room allocation', 'Hostel fees', 'Visitor management', 'Mess/food management', 'Inventory management', 'Discipline records', 'Night attendance'],
    },
    {
      id: 9,
      icon: '👥',
      title: 'Human Resources & Staff',
      features: ['Employee recruitment', 'Profile management', 'Leave management', 'Payroll & salary', 'Performance appraisal', 'Training & development', 'Document management'],
    },
    {
      id: 10,
      icon: '💬',
      title: 'Communication & Collaboration',
      features: ['Internal messaging', 'Email/SMS gateway', 'Notice board/circulars', 'Parent-teacher communication', 'Mobile app for parents', 'Event management', 'Announcements'],
    },
    {
      id: 11,
      icon: '📦',
      title: 'Inventory & Asset Management',
      features: ['Stock management', 'Purchase orders', 'Asset tracking', 'Maintenance scheduling', 'Supplier management', 'Inventory reports', 'Fixed asset depreciation'],
    },
    {
      id: 12,
      icon: '📋',
      title: 'Admission & Enrollment',
      features: ['Online application portal', 'Entrance exam management', 'Merit list generation', 'Document verification', 'Interview scheduling', 'Enrollment confirmation', 'Waiting list management'],
    },
    {
      id: 13,
      icon: '🎓',
      title: 'Learning Management System (LMS)',
      features: ['Online classes (video conferencing)', 'Assignment submission', 'Digital content repository', 'Interactive quizzes', 'Discussion forums', 'Progress tracking', 'E-learning analytics'],
    },
    {
      id: 14,
      icon: '🔐',
      title: 'Biometric & Security',
      features: ['Biometric attendance', 'Access control', 'CCTV integration', 'Visitor management', 'Gate pass management', 'ID card printing'],
    },
    {
      id: 15,
      icon: '🍽️',
      title: 'Canteen/Cafeteria Management',
      features: ['Menu planning', 'Pre-ordering system', 'Payment integration', 'Inventory tracking', 'Nutrition information', 'Feedback system'],
    },
    {
      id: 16,
      icon: '⚽',
      title: 'Sports & Extra-Curricular',
      features: ['Sports equipment management', 'Event scheduling', 'Team management', 'Achievement records', 'Competition tracking', 'Club/activity management'],
    },
    {
      id: 17,
      icon: '🏥',
      title: 'Medical/Health Center',
      features: ['Health records', 'Medical appointments', 'First aid tracking', 'Medical leave records', 'Health checkup scheduling', 'Insurance records'],
    },
    {
      id: 18,
      icon: '🎓',
      title: 'Alumni Management',
      features: ['Alumni database', 'Networking platform', 'Donation management', 'Event invitations', 'Success stories', 'Mentorship programs'],
    },
    {
      id: 19,
      icon: '📊',
      title: 'Reports & Analytics',
      features: ['Custom report builder', 'Dashboard & KPIs', 'Data visualization', 'Predictive analytics', 'Compliance reports', 'Export (PDF, Excel)'],
    },
    {
      id: 20,
      icon: '⚙️',
      title: 'System Administration',
      features: ['User role management', 'Permission & access control', 'Data backup & recovery', 'Audit logs', 'Multi-branch management', 'API integrations'],
    },
    {
      id: 21,
      icon: '👨‍👩‍👧',
      title: 'Parent Portal',
      features: ['Academic progress tracking', 'Fee payment status', 'Attendance tracking', 'Teacher communication', 'Event calendar', 'Online fee payment'],
    },
    {
      id: 22,
      icon: '👨‍🏫',
      title: 'Teacher Portal',
      features: ['Class management', 'Attendance marking', 'Grade entry', 'Lesson planning', 'Assignment creation', 'Student performance tracking'],
    },
    {
      id: 23,
      icon: '📱',
      title: 'Mobile Applications',
      features: ['Parent mobile app', 'Teacher mobile app', 'Student mobile app', 'Admin mobile app', 'Push notifications', 'Offline capabilities'],
    },
    {
      id: 24,
      icon: '🔗',
      title: 'Integration Modules',
      features: ['Payment gateways (Stripe, PayPal)', 'SMS gateways (Twilio)', 'Video conferencing (Zoom, Meet)', 'Cloud storage', 'Accounting software (Tally)', 'Government reporting'],
    },
    {
      id: 25,
      icon: '✨',
      title: 'Specialized Features',
      features: ['Multi-language support', 'Multi-currency support', 'GDPR compliance', 'AI-powered chatbot', 'Document digitalization (OCR)', 'Blockchain certificates'],
    },
  ];

  const packages = [
    {
      name: 'Starter',
      price: '₹1,99,999',
      duration: '8-10 weeks',
      modules: '10 Core Modules',
      features: ['Student Information System', 'Academic Management', 'Fee Management', 'Attendance Management', 'Examination System', 'Library Management', 'Parent Portal', 'Teacher Portal', 'Reports & Analytics', 'Basic Mobile App', '6 Months Support'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Professional',
      price: '₹3,99,999',
      duration: '12-16 weeks',
      modules: '18 Modules',
      features: ['All Starter Modules', 'Transportation Management', 'HR & Staff Management', 'Communication System', 'Inventory Management', 'Admission Portal', 'LMS Integration', 'Biometric Integration', 'Advanced Mobile Apps', 'SMS/Email Gateway', '12 Months Support'],
      color: 'from-purple-500 to-purple-600',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '₹7,99,999+',
      duration: '20-28 weeks',
      modules: 'All 25 Modules',
      features: ['All Professional Modules', 'Hostel Management', 'Canteen Management', 'Sports Management', 'Health Center', 'Alumni Management', 'AI Chatbot', 'Multi-branch Support', 'Custom Integrations', 'White-label Solution', '24 Months Support'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  const faqs = [
    {
      question: 'What is School ERP Software and why do schools need it?',
      answer: 'School ERP (Enterprise Resource Planning) Software is a comprehensive digital platform that integrates all school operations into one system. It manages student information, academics, fees, attendance, transportation, HR, and more. Schools need it to: reduce paperwork by 80%, automate repetitive tasks, improve parent-teacher communication, generate instant reports, ensure data accuracy, enable remote learning, and make data-driven decisions. Modern schools without ERP struggle with inefficiency, data silos, and poor communication.',
    },
    {
      question: 'How much does School ERP Software cost in India?',
      answer: 'School ERP software cost in India varies based on modules and school size: Starter package (10 modules) costs ₹1,99,999 for small schools (up to 500 students), Professional package (18 modules) costs ₹3,99,999 for medium schools (500-2000 students), Enterprise package (all 25 modules) starts at ₹7,99,999 for large schools/chains. Additional costs include: SMS gateway (₹2-5K/month), hosting (₹5-15K/month), biometric devices (₹5-15K each). We offer EMI options and annual maintenance contracts.',
    },
    {
      question: 'Can your School ERP integrate with biometric devices and CCTV?',
      answer: 'Yes, our School ERP supports comprehensive hardware integration: Biometric devices (fingerprint, face recognition) for staff and student attendance, RFID cards for library, transport, and access control, CCTV integration for security monitoring, Barcode scanners for library and inventory, GPS devices for school buses, Smart cards for canteen payments. We support major brands like ZKTeco, eSSL, Hikvision, and can integrate custom hardware via APIs.',
    },
    {
      question: 'Is your School ERP available as mobile app for parents and teachers?',
      answer: 'Yes, we provide native mobile apps for all stakeholders: Parent App - view attendance, grades, fee status, pay fees online, communicate with teachers, track school bus. Teacher App - mark attendance, enter grades, create assignments, communicate with parents. Student App - access study materials, submit assignments, view timetable, check results. Admin App - approve leaves, view reports, send announcements. All apps work offline and sync when connected.',
    },
    {
      question: 'How long does it take to implement School ERP?',
      answer: 'Implementation timeline depends on school size and modules: Starter (10 modules) - 8-10 weeks, Professional (18 modules) - 12-16 weeks, Enterprise (25 modules) - 20-28 weeks. Timeline includes: requirement analysis (1-2 weeks), customization (4-8 weeks), data migration (2-4 weeks), training (1-2 weeks), go-live support (2 weeks). We follow phased implementation - starting with core modules and adding others gradually for smooth adoption.',
    },
    {
      question: 'Can School ERP handle online admissions and fee payments?',
      answer: 'Yes, our School ERP includes complete online admission and payment features: Online admission portal with customizable application forms, Document upload and verification, Entrance exam management, Merit list auto-generation, Multiple payment gateways (Razorpay, PayU, Paytm, bank transfer), Auto fee receipts and reminders, EMI/installment options, Late fee calculation, Scholarship and concession management. Parents can complete entire admission and fee payment from home.',
    },
    {
      question: 'Does School ERP support multiple branches and franchises?',
      answer: 'Yes, our Enterprise package includes multi-branch support: Centralized database with branch-level access control, Consolidated reports across all branches, Inter-branch student transfer, Standardized curriculum across branches, Branch-wise fee structures, Central admin dashboard, Branch performance comparison, Franchise management with revenue sharing. Perfect for school chains, education groups, and franchise models.',
    },
    {
      question: 'What kind of reports can School ERP generate?',
      answer: 'Our School ERP generates 100+ reports across all modules: Academic - report cards, progress reports, class performance, subject analysis. Financial - fee collection, pending dues, expense reports, profit/loss. Attendance - daily, monthly, student-wise, class-wise reports. HR - payroll, leave balance, performance reports. Custom report builder lets you create any report with drag-drop interface. Export to PDF, Excel, or schedule automatic email delivery.',
    },
    {
      question: 'Is the School ERP data secure and compliant with regulations?',
      answer: 'Yes, we implement enterprise-grade security: Data encryption (AES-256) at rest and in transit, Role-based access control, Two-factor authentication, Regular automated backups, GDPR and data privacy compliance, Audit logs for all actions, Secure cloud hosting (AWS/Azure), ISO 27001 compliant practices, Regular security audits. We also provide on-premise deployment option for schools requiring data to stay within premises.',
    },
    {
      question: 'Do you provide training and support after implementation?',
      answer: 'Yes, we provide comprehensive training and support: Initial training - 3-5 days onsite training for all user groups, Video tutorials and user manuals, Dedicated support manager for first 3 months, 24/7 helpdesk support (email, phone, chat), Remote troubleshooting via screen sharing, Annual maintenance contract (AMC) options, Regular software updates and new features, Training for new staff joining school. Support available in Hindi and English.',
    },
  ];

  const serviceSchema = generateServiceSchema(
    'School ERP Software Development Services',
    'Complete school management system development with 25+ modules including Student Information, Fee Management, Attendance, LMS, Transportation, Hostel, HR, and more.'
  );

  const productSchema = generateProductSchema(
    'School ERP Software Package',
    'Comprehensive school ERP solution with student management, fee collection, attendance tracking, examination system, parent-teacher portal, mobile apps, and 25+ integrated modules.',
    '199999'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'School ERP Software', url: '/school-erp-software' },
  ]);

  const howToSchema = generateHowToSchema([
    { name: 'Requirement Analysis', text: 'Understand school processes, identify modules needed, and plan customizations', position: 1 },
    { name: 'System Design', text: 'Design database, user interfaces, and integration architecture', position: 2 },
    { name: 'Development', text: 'Build all selected modules with customizations for your school', position: 3 },
    { name: 'Data Migration', text: 'Import existing student, staff, and academic data into new system', position: 4 },
    { name: 'Training', text: 'Train administrators, teachers, and staff on using the system', position: 5 },
    { name: 'Go-Live & Support', text: 'Launch the system and provide ongoing support', position: 6 },
  ]);

  const reviewSchema = generateReviewSchema([
    { author: 'Rajesh Kumar', rating: 5, reviewBody: 'EifaSoft transformed our school operations. Fee collection is now 90% online and attendance tracking is completely automated. Excellent support team!' },
    { author: 'Sunita Sharma', rating: 5, reviewBody: 'The parent app is a game-changer. Parents love getting real-time updates about their children. Implementation was smooth and on time.' },
    { author: 'Dr. Amit Verma', rating: 5, reviewBody: 'Managing 5 branches is now effortless with their multi-branch ERP. Consolidated reporting saves us hours every week. Highly recommended!' },
  ]);

  const organizationSchema = generateOrganizationSchema();

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, howToSchema, ...reviewSchema, organizationSchema]} />

      <Hero
        title="School ERP Software"
        subtitle="Complete School Management System"
        description="Transform your school with India's most comprehensive ERP solution. 25+ integrated modules, mobile apps for parents & teachers, online fee payment, LMS, and more. Trusted by 100+ schools."
        ctaPrimary={{ text: 'Get Free Demo', href: '#contact' }}
        ctaSecondary={{ text: 'View Modules', href: '#modules' }}
        gradient="purple"
      />

      {/* What is School ERP - AEO Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">What is School ERP Software?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                <strong>School ERP Software</strong> is an integrated digital platform that manages all aspects of school 
                administration, academics, and communication in one unified system. It replaces paper-based processes, 
                Excel sheets, and disconnected software with a single, powerful solution.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">Without School ERP</h3>
                  <ul className="space-y-2 text-red-600">
                    <li>❌ Manual attendance on registers</li>
                    <li>❌ Paper-based fee receipts</li>
                    <li>❌ Excel sheets for marks</li>
                    <li>❌ Phone calls for parent updates</li>
                    <li>❌ Separate software for each task</li>
                    <li>❌ Hours spent on report generation</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">With School ERP</h3>
                  <ul className="space-y-2 text-green-600">
                    <li>✅ Biometric/app-based attendance</li>
                    <li>✅ Online fee payment & receipts</li>
                    <li>✅ Digital gradebook & report cards</li>
                    <li>✅ Instant app notifications</li>
                    <li>✅ All modules in one platform</li>
                    <li>✅ One-click report generation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Schools Choose EifaSoft</h2>
            <p className="text-xl text-purple-200">Trusted by leading schools across India</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">100+</div>
              <p className="text-purple-200">Schools Trust Us</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">25+</div>
              <p className="text-purple-200">Integrated Modules</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">5L+</div>
              <p className="text-purple-200">Students Managed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">99.9%</div>
              <p className="text-purple-200">Uptime Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* All 25 Modules */}
      <section id="modules" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">25+ Comprehensive Modules</h2>
            <p className="text-xl text-gray-600">Everything you need to run a modern school</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <div key={module.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{module.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900">{module.title}</h3>
                </div>
                <ul className="space-y-1">
                  {module.features.slice(0, 6).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {module.features.length > 6 && (
                    <li className="text-sm text-purple-600 font-medium">+{module.features.length - 6} more features</li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Platform Highlights</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile Apps</h3>
              <p className="text-gray-600">Native iOS & Android apps for parents, teachers, students & admin</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">☁️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud Hosted</h3>
              <p className="text-gray-600">Secure AWS/Azure hosting with 99.9% uptime SLA</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Data Security</h3>
              <p className="text-gray-600">AES-256 encryption, GDPR compliant, regular backups</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Multi-Language</h3>
              <p className="text-gray-600">Support for Hindi, English, and regional languages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">School ERP Pricing</h2>
            <p className="text-xl text-gray-600">Flexible packages for schools of all sizes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden ${plan.popular ? 'ring-4 ring-purple-500 transform scale-105' : ''}`}>
                {plan.popular && <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-2 font-semibold">Most Popular</div>}
                <div className={`bg-gradient-to-br ${plan.color} text-white p-8`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">{plan.price}</div>
                  <p className="text-sm opacity-90">{plan.duration} • {plan.modules}</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="#contact" className={`block text-center mt-8 px-6 py-3 rounded-lg font-bold transition-all ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-600">Connect with tools you already use</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Razorpay', 'PayU', 'Paytm', 'Twilio', 'Zoom', 'Google Meet', 'Tally', 'AWS', 'WhatsApp', 'ZKTeco', 'eSSL', 'Hikvision'].map((partner) => (
              <div key={partner} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-all">
                <p className="font-semibold text-gray-700">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section id="contact" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="School ERP Software" />
        </div>
      </section>
    </main>
  );
}
