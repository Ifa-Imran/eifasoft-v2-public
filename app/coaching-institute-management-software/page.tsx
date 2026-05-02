import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema, generateReviewSchema, generateOrganizationSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Coaching Institute Management Software | ERP for Coaching Centers | EifaSoft',
    description: 'CoachERP – India\'s complete ERP for coaching institutes & tuition centers. Student management, fee collection with GST, WhatsApp alerts, attendance, timetable, test marks & reports. Multi-branch ready. Razorpay & Paytm integrated.',
    canonical: '/coaching-institute-management-software',
    keywords: [
      'coaching institute management software',
      'coaching institute ERP',
      'coaching center management software India',
      'tuition center software',
      'academy management software',
      'student management system for coaching',
      'fee management software coaching',
      'attendance management coaching institute',
      'timetable management software',
      'coaching institute software Kota',
      'coaching institute software Delhi',
      'coaching center ERP India',
      'test and marks management software',
      'WhatsApp fee reminder coaching',
      'multi-branch coaching software',
      'GST fee invoice coaching',
      'online fee collection coaching',
      'coaching ERP Razorpay',
      'CoachERP ERP',
      'CoachERP software India',
    ],
  });
}

const faqs = [
  {
    question: 'What is CoachERP?',
    answer: 'CoachERP (CoachERP) is a complete cloud-based ERP software built specifically for coaching institutes, tuition centers, and academies. It covers student admissions, batch & timetable management, fee collection with GST, WhatsApp/SMS/email communication, attendance tracking, test & marks management, staff/salary management, and detailed reports – all in one platform.',
  },
  {
    question: 'Does it support multi-branch coaching institutes?',
    answer: 'Yes, CoachERP is built with full multi-branch support. Each branch has its own students, batches, employees, fee plans, and settings. Super Admins can view and manage all branches with a consolidated dashboard, while branch managers see only their branch data. You can add unlimited branches.',
  },
  {
    question: 'Can I send WhatsApp messages to students and parents?',
    answer: 'Yes, the built-in Communication module supports WhatsApp (via Meta WhatsApp Business API), SMS, and Email. You can send fee reminders, attendance alerts, test results, announcements, and holiday notices. Messages can be sent to individual students, entire batches, or all students in a course. Scheduling and template management are also included.',
  },
  {
    question: 'Is fee management GST-compliant?',
    answer: 'Absolutely. CoachERP supports GST-enabled fee plans with configurable GST rates per fee line. It generates proper GST invoices and receipts, tracks outstanding dues, and provides a full fee collection report. Online payment collection is supported via Razorpay and Paytm integrations.',
  },
  {
    question: 'How does attendance management work?',
    answer: 'Attendance is linked directly to the timetable. Teachers can mark student attendance class-by-class. The system provides daily, weekly, and monthly attendance reports with percentage calculations. You can also track teacher attendance separately. Attendance data can be exported to Excel.',
  },
  {
    question: 'Can I manage tests and student marks?',
    answer: 'Yes. The Tests module lets you create tests with subjects, max marks, and test dates for specific batches. Marks and grades can be entered for each student, and detailed student performance analysis is available showing test-wise scores, percentages, and grade history. Results can be exported to Excel.',
  },
  {
    question: 'What reports are available?',
    answer: 'CoachERP includes 7+ built-in reports: Attendance Report, Batch Report, Course Revenue Report, Fee Collection Report, Outstanding Report, Student Analysis Report, and a comprehensive Dashboard. All reports support branch-wise and date-range filtering with Excel export.',
  },
  {
    question: 'Does it support timetable management?',
    answer: 'Yes, a complete timetable module is included. You can schedule classes by batch, subject, teacher, room, date, and time. A weekly view shows all scheduled classes. Upcoming classes appear on the dashboard so teachers and admins always know what\'s next.',
  },
  {
    question: 'Can I manage teacher salaries?',
    answer: 'Yes. The Salary module allows you to define salary structures, generate monthly salaries for employees, view payslips, and maintain salary history. Payslips can be printed or shared with staff.',
  },
  {
    question: 'How do I get started with CoachERP?',
    answer: 'Contact EifaSoft Technologies to request a demo or purchase. We provide a fully guided installation, database setup, and initial configuration. The web-based software runs on your own hosting or our managed servers. Training is provided for admin and staff users.',
  },
];

const modules = [
  {
    icon: '🎓',
    title: 'Student Management',
    color: 'blue',
    features: [
      'Student admissions with all details',
      'Roll number & admission number',
      'Batch enrollment & transfers',
      'Discontinue & reactivate students',
      'Parent WhatsApp contact',
      'Student profile view',
    ],
  },
  {
    icon: '📚',
    title: 'Batch & Course Management',
    color: 'indigo',
    features: [
      'Unlimited courses & subjects',
      'Batch creation with capacity',
      'Course-wise fee plan linking',
      'Room & timing allocation',
      'Active/inactive batch control',
      'Batch-wise student listing',
    ],
  },
  {
    icon: '⏰',
    title: 'Timetable Management',
    color: 'purple',
    features: [
      'Class scheduling by batch/subject',
      'Teacher & room assignment',
      'Weekly timetable view',
      'Dashboard upcoming classes',
      'Edit & cancel classes',
      'Date & time-wise filtering',
    ],
  },
  {
    icon: '✅',
    title: 'Attendance Management',
    color: 'green',
    features: [
      'Class-by-class student attendance',
      'Teacher attendance tracking',
      'Present/Absent/Late status',
      'Attendance % calculation',
      'Monthly attendance reports',
      'Excel export support',
    ],
  },
  {
    icon: '💰',
    title: 'Fee Management',
    color: 'yellow',
    features: [
      'Flexible fee plan creation',
      'GST-enabled fee lines',
      'Auto invoice generation',
      'Online payment (Razorpay/Paytm)',
      'Receipt printing & download',
      'Outstanding dues tracking',
    ],
  },
  {
    icon: '📝',
    title: 'Tests & Marks',
    color: 'orange',
    features: [
      'Create tests by batch/subject',
      'Marks & grade entry',
      'Student performance analysis',
      'Test results percentage',
      'Grade history & remarks',
      'Excel result export',
    ],
  },
  {
    icon: '📲',
    title: 'Communication',
    color: 'teal',
    features: [
      'WhatsApp (Meta Business API)',
      'SMS gateway integration',
      'Email (SMTP) support',
      'Message templates library',
      'Bulk & individual messaging',
      'Scheduled message delivery',
    ],
  },
  {
    icon: '👨‍💼',
    title: 'Employee Management',
    color: 'red',
    features: [
      'Teacher & staff profiles',
      'Designation & department',
      'Employee number tracking',
      'Active/inactive control',
      'User account linking',
      'Upcoming class count',
    ],
  },
  {
    icon: '💵',
    title: 'Salary Management',
    color: 'pink',
    features: [
      'Salary structure definition',
      'Monthly salary generation',
      'Payslip creation & print',
      'Salary payment history',
      'Employee-wise salary view',
      'Period-wise salary reports',
    ],
  },
  {
    icon: '🔄',
    title: 'Student Promotion',
    color: 'cyan',
    features: [
      'Bulk student promotion',
      'Batch-to-batch transfer',
      'Academic year progression',
      'Promotion history log',
      'Roll-back support',
      'Promotion status tracking',
    ],
  },
  {
    icon: '📊',
    title: 'Reports & Analytics',
    color: 'violet',
    features: [
      'Attendance & batch reports',
      'Fee collection analytics',
      'Course revenue breakdown',
      'Outstanding dues report',
      'Student performance analysis',
      'Branch-wise filtering',
    ],
  },
  {
    icon: '⚙️',
    title: 'Settings & Administration',
    color: 'gray',
    features: [
      'Multi-branch configuration',
      'Academic year management',
      'Courses & subjects setup',
      'Room management',
      'Role-based user access',
      'GST & payment settings',
    ],
  },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 border-blue-100 text-blue-600',
  indigo: 'bg-indigo-50 border-indigo-100 text-indigo-600',
  purple: 'bg-purple-50 border-purple-100 text-purple-600',
  green: 'bg-green-50 border-green-100 text-green-600',
  yellow: 'bg-yellow-50 border-yellow-100 text-yellow-600',
  orange: 'bg-orange-50 border-orange-100 text-orange-600',
  teal: 'bg-teal-50 border-teal-100 text-teal-600',
  red: 'bg-red-50 border-red-100 text-red-600',
  pink: 'bg-pink-50 border-pink-100 text-pink-600',
  cyan: 'bg-cyan-50 border-cyan-100 text-cyan-600',
  violet: 'bg-violet-50 border-violet-100 text-violet-600',
  gray: 'bg-gray-50 border-gray-200 text-gray-600',
};

const targetCities = [
  'Kota', 'Delhi', 'Mumbai', 'Hyderabad', 'Bangalore', 'Chennai', 'Kolkata',
  'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Allahabad', 'Kanpur', 'Agra',
  'Indore', 'Bhopal', 'Chandigarh', 'Patna', 'Moradabad', 'Dehradun',
  'Nagpur', 'Surat', 'Vadodara', 'Noida', 'Gurgaon',
];

export default function CoachingInstituteERPPage() {
  const serviceSchema = generateServiceSchema(
    'CoachERP - Coaching Institute Management Software',
    'Complete ERP for coaching institutes and tuition centers. Student management, fee collection with GST, WhatsApp communication, attendance, timetable, test marks, staff salary, multi-branch support.'
  );

  const productSchema = generateProductSchema(
    'CoachERP - Coaching Institute ERP',
    'Cloud-based coaching institute management software with student admissions, batch management, GST fee invoicing, online payments, WhatsApp alerts, attendance, timetable, marks & comprehensive reports.',
    '₹12,000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/services' },
    { name: 'Coaching Institute Management Software', url: '/coaching-institute-management-software' },
  ]);

  const howToSchema = generateHowToSchema([
    { name: 'Admission', text: 'Register student with personal details, parent info, address, admission number, and roll number', position: 1 },
    { name: 'Batch Enrollment', text: 'Enroll in one or multiple batches. Link to fee plans and generate the first invoice', position: 2 },
    { name: 'Timetable & Attendance', text: 'Student attends scheduled classes. Attendance is marked and tracked with percentage reports', position: 3 },
    { name: 'Tests & Performance', text: 'Appear in tests. Marks are entered and student performance analysis is auto-generated', position: 4 },
    { name: 'Fee Collection', text: 'Monthly/quarterly invoices are generated. Parents receive WhatsApp reminders for due fees', position: 5 },
    { name: 'Promotion / Completion', text: 'Student is promoted to next batch or course. Full history is maintained for reference', position: 6 },
  ]);

  const reviewSchema = generateReviewSchema([
    { author: 'Rakesh Sharma', rating: 5, reviewBody: 'CoachERP transformed our coaching institute operations. Fee collection is now 95% on-time with WhatsApp reminders. Excellent support team!' },
    { author: 'Dr. Meera Gupta', rating: 5, reviewBody: 'Managing 3 branches with 2000+ students is now effortless. The multi-branch dashboard and consolidated reports save us hours every week.' },
    { author: 'Vikas Kumar', rating: 5, reviewBody: 'The GST-compliant fee invoicing and Razorpay integration made fee collection seamless. Parents love the online payment option.' },
  ]);

  const organizationSchema = generateOrganizationSchema();

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, howToSchema, ...reviewSchema, organizationSchema]} />

      <Hero
        title="CoachERP: Coaching Institute ERP"
        subtitle="Complete Management Software for Coaching Centers"
        description="Run your entire coaching institute from one platform. Student admissions, batch scheduling, GST fee invoicing, WhatsApp alerts, attendance, test marks, staff salaries & 7+ reports. Multi-branch ready."
        ctaPrimary={{ text: 'Request Free Demo', href: '/contact' }}
        ctaSecondary={{ text: 'Explore Modules', href: '#modules' }}
        gradient="blue"
      />

      {/* Stats Bar */}
      <section className="py-8 bg-gradient-to-r from-gray-900 via-teal-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-teal-400">12+</div>
              <div className="text-gray-400 text-sm">Modules</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400">∞</div>
              <div className="text-gray-400 text-sm">Students</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400">GST</div>
              <div className="text-gray-400 text-sm">Fee Invoicing</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">📲</div>
              <div className="text-gray-400 text-sm">WhatsApp Alerts</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-pink-400">Multi</div>
              <div className="text-gray-400 text-sm">Branch Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why CoachERP */}
      <section className="py-20 bg-white" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
              WHY CoachERP?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything Your Coaching Institute Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stop managing students on spreadsheets and WhatsApp groups. CoachERP gives you a
              single, powerful platform to manage every aspect of your coaching business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏫', title: 'Built for Coaching', desc: 'Designed specifically for coaching institutes, tuition centers, test prep academies, music & sports schools.' },
              { icon: '💸', title: 'GST Fee Invoicing', desc: 'Generate proper GST invoices, collect fees online via Razorpay/Paytm, and track outstanding dues automatically.' },
              { icon: '📲', title: 'WhatsApp Automation', desc: 'Send fee reminders, attendance alerts, test results and announcements directly to parents on WhatsApp.' },
              { icon: '🏢', title: 'Multi-Branch Ready', desc: 'Manage all your branches from one login. Separate data per branch with consolidated super-admin view.' },
              { icon: '📅', title: 'Smart Timetable', desc: 'Schedule classes by batch, teacher, room and time. Dashboard shows upcoming classes in real time.' },
              { icon: '📊', title: '7+ Reports', desc: 'Fee collection, outstanding, attendance, batch performance, course revenue, and student analysis reports.' },
              { icon: '🔐', title: 'Role-Based Access', desc: 'Super Admin, Admin, and Staff roles with granular permission control per module.' },
              { icon: '☁️', title: 'Cloud-Based', desc: 'Web application – works on any device, any browser. No installation required. Access from anywhere.' },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-6 border border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-gray-50" id="modules">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              12 POWERFUL MODULES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Coaching Institute ERP
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every module is designed to work together seamlessly — from admissions to alumni, from fee collection to salary payslips.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((mod, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 border hover:shadow-xl transition-all`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 border ${colorMap[mod.color]}`}>
                  {mod.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{mod.title}</h3>
                <ul className="space-y-1.5">
                  {mod.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Lifecycle */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              STUDENT LIFECYCLE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Manage Every Stage of a Student&apos;s Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From first inquiry to course completion — track every student interaction, attendance, test performance, and fee payment in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Admission', desc: 'Register student with personal details, parent info, address, admission number, and roll number.' },
                  { step: '2', title: 'Batch Enrollment', desc: 'Enroll in one or multiple batches. Link to fee plans and generate the first invoice.' },
                  { step: '3', title: 'Timetable & Attendance', desc: 'Student attends scheduled classes. Attendance is marked and tracked with percentage reports.' },
                  { step: '4', title: 'Tests & Performance', desc: 'Appear in tests. Marks are entered and student performance analysis is auto-generated.' },
                  { step: '5', title: 'Fee Collection', desc: 'Monthly/quarterly invoices are generated. Parents receive WhatsApp reminders for due fees.' },
                  { step: '6', title: 'Promotion / Completion', desc: 'Student is promoted to next batch or course. Full history is maintained for reference.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🆔', title: 'Unique Admission No.', desc: 'Auto-generated admission numbers for each student' },
                { icon: '📋', title: 'Multi-Batch Enroll', desc: 'One student can be in multiple batches simultaneously' },
                { icon: '🔴', title: 'Discontinue & Revive', desc: 'Mark students as discontinued with reason, reactivate anytime' },
                { icon: '👨‍👩‍👧', title: 'Parent Connect', desc: 'Parent name and WhatsApp stored for direct communication' },
                { icon: '📱', title: 'Search & Filter', desc: 'Find students by name, admission no., batch or parent number' },
                { icon: '📅', title: 'Academic Year Tagging', desc: 'Students are tagged to academic years for year-wise reporting' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Management Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-4">
              FEE MANAGEMENT
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              GST-Compliant Fee Collection
            </h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              Generate professional GST invoices, collect fees online, send payment reminders on WhatsApp,
              and never lose track of a single rupee.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '📄', title: 'Flexible Fee Plans', desc: 'Create monthly, quarterly, or custom fee plans per course. Define multiple fee heads with individual GST rates.' },
              { icon: '🧾', title: 'GST Invoices', desc: 'Auto-generate GST-compliant invoices. Print or download professional fee invoices with GSTIN details.' },
              { icon: '💳', title: 'Online Payments', desc: 'Students & parents can pay online via Razorpay or Paytm. Payment status auto-updates in the system.' },
              { icon: '🧾', title: 'Fee Receipts', desc: 'Instant receipt generation on fee collection. Download and print for students.' },
              { icon: '⚠️', title: 'Outstanding Tracker', desc: 'See all pending dues at a glance. Export outstanding list batch-wise or course-wise.' },
              { icon: '📊', title: 'Collection Reports', desc: 'Daily, monthly fee collection reports. Course-wise revenue analysis and financial insights.' },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition-all">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-green-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Supported Payment Methods</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Razorpay (UPI / Cards / Net Banking)', 'Paytm Gateway', 'Cash Collection', 'Cheque / DD Recording'].map((method, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/10 rounded-xl p-3">
                  <svg className="w-5 h-5 text-green-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{method}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Communication Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-900 text-green-300 rounded-full text-sm font-semibold mb-4">
              COMMUNICATION HUB
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              WhatsApp · SMS · Email
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Keep parents and students informed in real-time. Send fee reminders, attendance updates,
              test results, and important announcements on the channels they actually use.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 rounded-2xl p-8 border border-green-800">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-green-400 mb-3">WhatsApp</h3>
              <p className="text-gray-400 mb-4">Connect via Meta WhatsApp Business API. Send rich text messages to parents and students directly from the system.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Fee due reminders</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Attendance alerts</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Test result notifications</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Holiday announcements</li>
                <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Scheduled delivery</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 border border-blue-800">
              <div className="text-5xl mb-4">📨</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-3">SMS</h3>
              <p className="text-gray-400 mb-4">Send SMS to any mobile number via your preferred SMS gateway. Reach parents even without smartphones.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> SMS gateway integration</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Batch-wise bulk SMS</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Course-wise bulk SMS</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Individual SMS</li>
                <li className="flex items-center gap-2"><span className="text-blue-400">✓</span> Message queue & history</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 border border-purple-800">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-3">Email</h3>
              <p className="text-gray-400 mb-4">Send emails via SMTP for formal communication, receipts, notices, and newsletters to students and parents.</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> SMTP configuration</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> HTML email templates</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Bulk email sending</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Delivery queue management</li>
                <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Template management</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6">
            <h4 className="font-bold text-lg mb-4 text-center">Built-in Message Templates</h4>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                'Fee Reminder',
                'Payment Confirmation',
                'General Announcement',
                'Holiday Notice',
                'Test Scheduled',
                'Result Declared',
                'Class Cancelled',
                'Admission Confirmation',
                'Welcome Message',
              ].map((template, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-gray-700 rounded-lg px-4 py-2">
                  <span className="text-yellow-400">📋</span>
                  <span className="text-sm text-gray-300">{template}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timetable & Attendance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
              TIMETABLE & ATTENDANCE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Never Miss a Class or an Absent Student
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 border border-indigo-100">
              <h3 className="text-2xl font-bold text-indigo-900 mb-6">🗓️ Timetable</h3>
              <div className="space-y-3">
                {[
                  'Schedule classes by batch, subject, teacher & room',
                  'Weekly calendar view for all classes',
                  'Dashboard widget for today\'s upcoming classes',
                  'Support for multiple rooms & simultaneous batches',
                  'Easy edit and cancellation of scheduled classes',
                  'Class date and time assignment with teacher linking',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-green-900 mb-6">✅ Attendance</h3>
              <div className="space-y-3">
                {[
                  'Class-by-class student attendance marking',
                  'Present, Absent, Late status tracking',
                  'Teacher attendance module (separate)',
                  'Monthly attendance percentage per student',
                  'Batch-wise and student-wise attendance reports',
                  'Export attendance data to Excel',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports & Analytics */}
      <section className="py-20 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-4">
              REPORTS & ANALYTICS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              7+ Powerful Reports
            </h2>
            <p className="text-lg text-purple-200 max-w-3xl mx-auto">
              Make data-driven decisions with comprehensive reports on every aspect of your coaching institute.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💰', title: 'Fee Collection Report', desc: 'Daily and monthly fee collections. Filter by branch, date range, and payment method.' },
              { icon: '⚠️', title: 'Outstanding Report', desc: 'All pending dues with student-wise and batch-wise breakdown. Export to follow up.' },
              { icon: '✅', title: 'Attendance Report', desc: 'Batch-wise and student-wise attendance with % calculation. Monthly summaries.' },
              { icon: '📚', title: 'Batch Report', desc: 'Active students per batch, enrollment status, batch capacity utilization.' },
              { icon: '💵', title: 'Course Revenue', desc: 'Revenue earned per course. Compare courses on profitability.' },
              { icon: '🎯', title: 'Student Analysis', desc: 'Individual student performance: test scores, attendance %, fee status all in one view.' },
              { icon: '📊', title: 'Dashboard KPIs', desc: 'Real-time stats: total students, active batches, today\'s collection, outstanding dues.' },
              { icon: '📤', title: 'Excel Export', desc: 'Every report can be exported to Excel for offline analysis or sharing.' },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition-all">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-purple-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-branch */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              MULTI-BRANCH MANAGEMENT
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Manage All Branches From One Login
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you have 2 branches or 20, CoachERP gives every branch its own isolated data
              while giving the head office complete oversight.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: '🏢', title: 'Super Admin View', desc: 'Switch between branches with one click. See consolidated reports across all branches. Manage branch settings centrally.' },
              { icon: '🔒', title: 'Data Isolation', desc: 'Each branch has completely separate students, batches, fees, staff, and settings. No cross-branch data leakage.' },
              { icon: '👤', title: 'Branch-Level Admin', desc: 'Each branch can have its own admin who manages only their branch. Role-based access ensures proper boundaries.' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack & Integrations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold mb-4">
              TECHNOLOGY & INTEGRATIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Built on Reliable Technology
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { title: 'Backend', items: ['PHP 8+', 'MySQL 8.0', 'RESTful API', 'Cron jobs for automation'] },
              { title: 'Payment Gateways', items: ['Razorpay (UPI/Cards/NetBanking)', 'Paytm Gateway', 'Secure webhooks', 'Auto payment reconciliation'] },
              { title: 'Communication', items: ['Meta WhatsApp Business API', 'SMS Gateway (any provider)', 'SMTP Email (Gmail/custom)', 'Message queue system'] },
              { title: 'Deployment', items: ['Shared / VPS hosting', 'cPanel compatible', 'Docker support', 'Your own domain'] },
            ].map((stack, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{stack.title}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geo-Targeting */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
              AVAILABLE ACROSS INDIA
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Coaching Institute Software for Every City
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From Kota&apos;s world-famous IIT coaching institutes to local tuition centers in every city — CoachERP serves coaching businesses of all sizes across India.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {targetCities.map((city, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium border border-teal-100 hover:border-teal-400 hover:text-teal-700 hover:shadow-sm transition-all"
              >
                Coaching Software {city}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: 'IIT-JEE / NEET Coaching', desc: 'Manage large student batches, multiple subjects and complex fee structures for competitive exam institutes.' },
              { icon: '🎵', title: 'Music & Arts Academies', desc: 'Simple batch management, individual fee plans and attendance for music, dance, and arts classes.' },
              { icon: '🏫', title: 'School Tuition Centers', desc: 'Subject-wise batches, parent communication and simple fee reminders for tuition classes.' },
              { icon: '🏋️', title: 'Sports Academies', desc: 'Manage cricket, football, swimming, and other sports academies with batch and attendance tracking.' },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-md transition-all">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-teal-800 text-teal-200 rounded-full text-sm font-semibold mb-4">
              SIMPLE PRICING
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Affordable Plans for Every Institute
            </h2>
            <p className="text-lg text-teal-200 max-w-3xl mx-auto">
              No per-student fees. No hidden charges. Pay once or subscribe — your choice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '₹12,000',
                period: 'one-time',
                description: 'Single branch · Small institute',
                features: ['1 Branch', 'Up to 500 Students', 'All 12 Modules', 'WhatsApp / SMS / Email', 'Fee Invoicing (GST)', '2 Admin Users', '1 Year Updates', 'Email Support'],
                highlighted: false,
              },
              {
                name: 'Professional',
                price: '₹25,000',
                period: 'one-time',
                description: 'Multi-branch · Growing institute',
                features: ['Up to 3 Branches', 'Unlimited Students', 'All 12 Modules', 'Razorpay + Paytm', 'WhatsApp API Integration', 'Unlimited Users', 'Custom Domain Setup', 'Priority Support'],
                highlighted: true,
              },
              {
                name: 'Enterprise / White-Label',
                price: '₹60,000',
                period: 'one-time',
                description: 'Unlimited branches · Your brand',
                features: ['Unlimited Branches', 'Unlimited Students', 'Full Source Code', 'Your Own Branding', 'Custom Feature Development', 'Dedicated Server Setup', 'Staff Training', 'Lifetime Support'],
                highlighted: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-white text-gray-900 shadow-2xl scale-105'
                    : 'bg-teal-800/50 text-white border border-teal-700'
                }`}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? 'text-gray-500 text-sm' : 'text-teal-300 text-sm'}>{plan.period}</span>
                </div>
                <p className={`mb-6 text-sm ${plan.highlighted ? 'text-gray-600' : 'text-teal-200'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <svg className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? 'text-teal-600' : 'text-teal-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all ${
                    plan.highlighted
                      ? 'bg-teal-600 text-white hover:bg-teal-700'
                      : 'bg-white text-teal-900 hover:bg-gray-100'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-teal-200">
              🎁 <strong>Free Demo Available</strong> — See the software live before you buy. No credit card needed.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              CoachERP FAQs
            </h2>
          </div>
          <FAQSection faqs={faqs} className="bg-transparent py-0" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Coaching Institute?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Join coaching institutes across India using CoachERP ERP to automate operations, collect fees faster, and delight parents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-teal-700 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Request Free Demo
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
            <p className="mt-6 text-teal-200 text-sm">
              Call us: <a href="tel:+919675012345" className="font-semibold hover:underline">+91 9675 012345</a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Book a Free Demo
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form and our team will schedule a live demo of CoachERP for your institute within 24 hours.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
