import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema, generateReviewSchema, generateOrganizationSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'LedgerLock - Offline Accounting Software India | Better Than Tally & Busy | EifaSoft',
    description: 'LedgerLock - India\'s most powerful offline-first accounting & inventory ERP for SMBs. Double-entry accounting, GST compliance, inventory management, payroll, 200+ reports. Better than Tally & Busy. Free trial available.',
    canonical: '/accounting-software',
    keywords: [
      'accounting software India',
      'Tally alternative',
      'Busy alternative',
      'offline accounting software',
      'GST accounting software',
      'inventory management software',
      'ERP software India',
      'double entry accounting',
      'billing software',
      'payroll software India',
      'SMB accounting',
      'desktop accounting software',
      'LedgerLock',
      'GST billing software',
      'stock management software',
      'free accounting software trial',
    ],
  });
}

const faqs = [
  {
    question: 'How is LedgerLock better than Tally or Busy?',
    answer: 'LedgerLock offers modern UI with dark/light themes, encrypted database (SQLCipher AES-256), true offline-first architecture with no forced internet, faster performance on old hardware (<150ms transactions), native PDF/Excel export without add-ons, built-in e-Invoice & e-Way bill generation, comprehensive payroll with PF/ESI, and 200+ pre-built reports with drill-down. Plus, you get full source code ownership with enterprise licenses.',
  },
  {
    question: 'Does LedgerLock work completely offline?',
    answer: 'Yes, LedgerLock is 100% offline-first. Zero external API calls at runtime. All features work without internet. Optional cloud sync (AWS S3, Google Drive, WebDAV) is a pluggable module that can be completely removed. Your data never leaves your computer unless you explicitly enable sync.',
  },
  {
    question: 'Is LedgerLock GST compliant?',
    answer: 'Fully GST compliant with multi-rate support (0, 5, 12, 18, 28%), HSN/SAC summary, GSTR-1, GSTR-3B, GSTR-9, GSTR-9A JSON generation, e-Invoice & e-Way bill JSON export (NIC schema 1.03), and GST reconciliation with 2A/2B import for auto-matching. All formats are compatible with government portals.',
  },
  {
    question: 'Can I import data from Tally or Busy?',
    answer: 'Yes, LedgerLock includes Tally XML Bridge and Busy XML Bridge utilities. You can export masters & vouchers from Tally/Busy to XML and import into LedgerLock with automatic validation and mismatch reporting. We also provide Excel templates for bulk master import.',
  },
  {
    question: 'What inventory features does LedgerLock offer?',
    answer: 'Comprehensive inventory: multiple units of measure, barcode (EAN-13, QR), batch & expiry tracking, serial number tracking, multiple godowns/warehouses, 6 valuation methods (FIFO, LIFO, Average, Standard, WAC, Last Purchase), unlimited price lists, BOM for manufacturing, physical stock verification, and 15+ stock reports including ABC analysis and ageing.',
  },
  {
    question: 'Does LedgerLock support multiple companies?',
    answer: 'Yes, unlimited companies with separate databases. You can have 5 companies open simultaneously with memory footprint under 400MB. Features include company split (after cut-off date), company merge (with duplicate detection), and instant company switching.',
  },
  {
    question: 'What about data security and backup?',
    answer: 'Enterprise-grade security: SQLCipher 256-bit AES encryption, master password stored in Windows Credential Store, automatic daily backups (rotating 30 days), password-protected compressed backups (ZIP AES-256), 7-day DB snapshots for point-in-time recovery, and role-based access control with feature-level permissions.',
  },
  {
    question: 'Is payroll included in LedgerLock?',
    answer: 'Yes, full payroll module: employee master with document vault, biometric attendance import, leave management, salary processing with all statutory calculations (PF, ESI, PT, LWF), ECR/ESIC file generation, Form-16, password-protected payslips, bulk email/SMS, and full & final settlement calculator.',
  },
  {
    question: 'What are the system requirements?',
    answer: 'Minimum: Windows 10/11 (x64), 4GB RAM, 500MB disk space. Recommended: 8GB RAM, SSD. LedgerLock is optimized to run on 10-year-old i3 processors with HDD. macOS and Ubuntu versions are on the roadmap. Installer is under 150MB with differential delta updates.',
  },
  {
    question: 'How does licensing work?',
    answer: 'Offline cryptographic license (RSA-4096) bound to your hardware. 30-day full-featured trial with watermark on reports after expiry. No forced registration, no phoning home. License transfer allowed 3 times per year. Single purchase, no recurring fees for core features.',
  },
];

// Feature categories
const accountingFeatures = [
  { icon: '📊', title: '5-Level Chart of Accounts', desc: 'Groups → Sub-groups → Ledgers → Cost-centres → Tags with Indian GAAP Schedule VI' },
  { icon: '📝', title: '12+ Voucher Types', desc: 'Contra, Payment, Receipt, Journal, Sales, Purchase, Debit/Credit Note, Stock Journal, Payroll & more' },
  { icon: '⚡', title: 'Fast Voucher Entry', desc: 'Single-entry (Tally-style) or row-wise double-entry, real-time validation, on-the-fly ledger creation' },
  { icon: '💱', title: 'Multi-Currency', desc: 'Unlimited currencies, daily rate CSV import, period-end revaluation auto-journal' },
  { icon: '📈', title: 'Cost & Budget', desc: 'Unlimited cost categories/centres, budget vs actual with variance %, Excel budget upload' },
  { icon: '🏢', title: 'Fixed Assets', desc: 'Asset register, SLM/WDV/DOY depreciation, auto-depreciation vouchers, disposal P&L' },
  { icon: '🏦', title: 'Banking & BRS', desc: 'Cheque register, MICR print, post-dated reminders, CSV/Excel bank statement import, auto-match reconciliation' },
  { icon: '🔗', title: 'Real-time Integration', desc: 'Every stock entry auto-creates accounting entry - no batch posting needed' },
];

const inventoryFeatures = [
  { icon: '📦', title: 'Smart Item Master', desc: 'SKU, barcode, HSN/SAC, GST%, 5 custom fields, 3 images, re-order levels' },
  { icon: '🔢', title: 'Units of Measure', desc: 'Simple, compound (1 case = 12 pcs), alternate units with conversion' },
  { icon: '🏭', title: 'Multi-Warehouse', desc: 'Unlimited godowns, transfer vouchers, batch-wise & serial-wise tracking' },
  { icon: '💰', title: '6 Valuation Methods', desc: 'FIFO, LIFO, Average, Standard, WAC, Last Purchase - per item selection' },
  { icon: '📅', title: 'Batch & Expiry', desc: 'MRP, batch-no, Mfg/Expiry dates, near-expiry alerts, auto write-off vouchers' },
  { icon: '🔍', title: 'Serial Tracking', desc: 'Full in-out serial tracker, duplicate validation, quick F3 search' },
  { icon: '💵', title: 'Dynamic Pricing', desc: 'Unlimited price lists, quantity slabs, date-wise & party-wise special rates' },
  { icon: '🔧', title: 'Manufacturing', desc: 'BOM, production vouchers (raw → finished), disassembly, rejection' },
];

const gstFeatures = [
  { icon: '📋', title: 'Multi-Rate GST', desc: '0, 5, 12, 18, 28% with HSN/SAC summary' },
  { icon: '📤', title: 'GSTR Filing', desc: 'GSTR-1, 3B, 9, 9A JSON generation (offline compatible)' },
  { icon: '🧾', title: 'e-Invoice & e-Way', desc: 'JSON export per NIC schema 1.03' },
  { icon: '🔄', title: 'GST Reconciliation', desc: '2A/2B import → auto-match → difference report' },
  { icon: '📑', title: 'TDS & TCS', desc: 'Section master, Form 16A, 26Q, 27Q, 27D, 27EQ (NSDL format)' },
  { icon: '🌐', title: 'Multi-Country Ready', desc: 'Tax-calc SPI for pluggable VAT/SalesTax modules' },
];

const payrollFeatures = [
  { icon: '👤', title: 'Employee Master', desc: 'Personal, bank, statutory, document vault, appraisal history' },
  { icon: '⏰', title: 'Attendance', desc: 'Biometric CSV import, offline face recognition (50MB model)' },
  { icon: '🏖️', title: 'Leave Management', desc: 'Credit rules, encashment formula, single-level approval' },
  { icon: '💰', title: 'Salary Processing', desc: 'Earn/Deduction/Employer heads, PF, ESI, PT, LWF auto-calculation' },
  { icon: '📄', title: 'Statutory Files', desc: 'ECR, ESIC text file, PT statement generation' },
  { icon: '📧', title: 'Payslip Distribution', desc: 'Password-protected PDF, bulk SMTP email, SMS API' },
];

const securityFeatures = [
  { icon: '🔐', title: 'AES-256 Encryption', desc: 'SQLCipher encrypted database' },
  { icon: '🔑', title: 'Windows Credential Store', desc: 'Master password via node-keytar' },
  { icon: '👥', title: 'Role-Based Access', desc: 'Super Admin, Admin, Data Entry, Viewer, Auditor' },
  { icon: '🎛️', title: 'Feature-Level ACL', desc: 'Granular permissions per action' },
  { icon: '✍️', title: 'Digital Signatures', desc: 'Voucher-level lock with signer name' },
  { icon: '📜', title: 'Complete Audit Trail', desc: 'Every action logged with user/timestamp' },
  { icon: '💾', title: 'Auto Backup', desc: 'Daily backup with 30-day rotation' },
  { icon: '⏪', title: '7-Day Rewind', desc: 'Point-in-time DB snapshot restore' },
];

const reportFeatures = [
  '200+ pre-built reports with column chooser',
  'Double-click drill-down to source voucher',
  'Export to PDF, Excel, CSV',
  'Schedule auto-email (daily/weekly/monthly)',
  'Drag-drop dashboard widgets',
  'Cash & Bank balance widget',
  'Top debtors/creditors widget',
  'Stock alerts & monthly trends',
  'User-defined pivot tables',
  'Custom SQL report designer',
  'Chart.js graphs (100% offline)',
  'Save filter as reusable View',
];

const performanceBenchmarks = [
  { metric: '1M vouchers', value: '<1 sec', desc: 'Day Book filter' },
  { metric: '500K items', value: '<300 ms', desc: 'Type-ahead search' },
  { metric: '2GB backup', value: '<45 sec', desc: 'On SATA SSD' },
  { metric: 'Installer', value: '<3 min', desc: 'On 10 Mbps' },
  { metric: 'Memory', value: '≤400 MB', desc: '5 companies loaded' },
  { metric: 'Transaction', value: '<150 ms', desc: 'On 10-year-old i3' },
];

const comparisonFeatures = [
  { feature: 'Offline-First (No Internet Required)', ledgerlock: true, tally: false, busy: false },
  { feature: 'Encrypted Database (AES-256)', ledgerlock: true, tally: false, busy: false },
  { feature: 'Modern UI (Dark/Light Theme)', ledgerlock: true, tally: false, busy: true },
  { feature: 'Native PDF Export (No Add-on)', ledgerlock: true, tally: false, busy: true },
  { feature: 'Built-in e-Invoice Generation', ledgerlock: true, tally: true, busy: true },
  { feature: 'Full Payroll with PF/ESI', ledgerlock: true, tally: true, busy: true },
  { feature: 'Batch & Serial Tracking', ledgerlock: true, tally: true, busy: true },
  { feature: 'Custom Report Designer', ledgerlock: true, tally: false, busy: false },
  { feature: 'Point-in-Time Recovery', ledgerlock: true, tally: false, busy: false },
  { feature: 'No Forced Registration', ledgerlock: true, tally: false, busy: false },
  { feature: 'Source Code Available', ledgerlock: true, tally: false, busy: false },
  { feature: 'Multi-Currency Revaluation', ledgerlock: true, tally: true, busy: true },
];

// Target cities for geo-targeting
const targetCities = [
  'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata',
  'Ahmedabad', 'Jaipur', 'Lucknow', 'Surat', 'Indore', 'Chandigarh', 'Nagpur',
];

export default function AccountingSoftwarePage() {
  const serviceSchema = generateServiceSchema(
    'LedgerLock Accounting Software',
    'Offline-first accounting & inventory ERP software for Indian SMBs. Double-entry accounting, GST compliance, inventory management, payroll, 200+ reports. Better alternative to Tally and Busy.'
  );

  const productSchema = generateProductSchema(
    'LedgerLock - Accounting & Inventory ERP',
    'Complete offline accounting software with double-entry bookkeeping, GST compliance, inventory management, payroll, banking, 200+ reports, and enterprise security. Windows desktop application.',
    '₹15,000'
  );

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/services' },
    { name: 'Accounting Software', url: '/accounting-software' },
  ]);

  const howToSchema = generateHowToSchema([
    { name: 'Installation & Setup', text: 'Install LedgerLock on Windows 10/11, configure company settings and master data', position: 1 },
    { name: 'Chart of Accounts', text: 'Set up 5-level chart of accounts with Indian GAAP Schedule VI compliance', position: 2 },
    { name: 'Master Data Entry', text: 'Import ledgers, items, parties via Excel or Tally/Busy XML bridge', position: 3 },
    { name: 'Transaction Processing', text: 'Start recording vouchers with single or double-entry mode', position: 4 },
    { name: 'GST Compliance', text: 'Generate GSTR returns, e-invoices, and reconcile with 2A/2B data', position: 5 },
    { name: 'Reports & Analysis', text: 'Access 200+ reports with drill-down, export to PDF/Excel', position: 6 },
  ]);

  const reviewSchema = generateReviewSchema([
    { author: 'Vikram Patel', rating: 5, reviewBody: 'Switched from Tally to LedgerLock 6 months ago. The modern UI, offline-first architecture, and encrypted database give us peace of mind. Excellent support team!' },
    { author: 'Sunita Agarwal', rating: 5, reviewBody: 'The built-in payroll with PF/ESI and GST compliance is a game-changer. No more separate software for accounting and payroll. Highly recommended for SMBs.' },
    { author: 'Mohit Jain', rating: 5, reviewBody: 'Imported our 5 years of Tally data seamlessly. The XML bridge worked perfectly. Love the native PDF export and custom report designer.' },
  ]);

  const organizationSchema = generateOrganizationSchema();

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, faqSchema, breadcrumbSchema, howToSchema, ...reviewSchema, organizationSchema]} />
      
      <Hero
        title="LedgerLock: Offline-First Accounting Software"
        subtitle="Better Than Tally & Busy"
        description="India's most powerful desktop ERP for SMBs. Double-entry accounting, GST compliance, inventory, payroll - all 100% offline. No internet required, no forced registration."
        ctaPrimary={{ text: 'Download Free Trial', href: '/contact' }}
        ctaSecondary={{ text: 'See All Features', href: '#features' }}
        gradient="purple"
      />

      {/* Trust Indicators */}
      <section className="py-8 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-400">100%</div>
              <div className="text-gray-400 text-sm">Offline</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400">200+</div>
              <div className="text-gray-400 text-sm">Reports</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400">AES-256</div>
              <div className="text-gray-400 text-sm">Encrypted</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-400">&lt;150ms</div>
              <div className="text-gray-400 text-sm">Transaction Speed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-pink-400">₹0</div>
              <div className="text-gray-400 text-sm">Monthly Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why LedgerLock */}
      <section className="py-20 bg-white" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              WHY LEDGERLOCK?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              The Modern Alternative to Tally &amp; Busy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built with modern technology, LedgerLock delivers enterprise features without the enterprise complexity. 
              100% offline, encrypted, and blazing fast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔒', title: 'True Offline', desc: 'Zero API calls. Your data never leaves your computer. Works without internet forever.' },
              { icon: '⚡', title: 'Blazing Fast', desc: 'Optimized for 10-year-old hardware. <150ms transactions even on HDD.' },
              { icon: '🛡️', title: 'Bank-Grade Security', desc: 'SQLCipher AES-256 encryption. Windows Credential Store integration.' },
              { icon: '🎨', title: 'Modern UI', desc: 'React + MUI with dark/light themes. Full keyboard navigation.' },
              { icon: '📊', title: '200+ Reports', desc: 'Drill-down, pivot tables, scheduled emails, custom SQL designer.' },
              { icon: '🇮🇳', title: 'Made for India', desc: 'GST, TDS, TCS, PF, ESI, PT - all statutory compliance built-in.' },
              { icon: '💾', title: 'Your Data, Your Control', desc: 'No cloud dependency. Export entire database anytime. No vendor lock-in.' },
              { icon: '🔄', title: 'Tally/Busy Import', desc: 'XML bridge for seamless migration from Tally or Busy.' },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-800 text-purple-200 rounded-full text-sm font-semibold mb-4">
              HEAD-TO-HEAD COMPARISON
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              LedgerLock vs Tally vs Busy
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              See how LedgerLock stacks up against the competition on features that matter.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="text-center py-4 px-4 text-purple-400 font-bold">LedgerLock</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-medium">Tally</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-medium">Busy</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      {row.ledgerlock ? (
                        <span className="text-green-400 text-xl">✓</span>
                      ) : (
                        <span className="text-red-400 text-xl">✗</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.tally ? (
                        <span className="text-green-400 text-xl">✓</span>
                      ) : (
                        <span className="text-red-400 text-xl">✗</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.busy ? (
                        <span className="text-green-400 text-xl">✓</span>
                      ) : (
                        <span className="text-red-400 text-xl">✗</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Accounting Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              DOUBLE-ENTRY ACCOUNTING
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Accounting Engine
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional double-entry bookkeeping with Indian GAAP compliance, multi-currency support, 
              and real-time inventory integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accountingFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Standard Reports Included</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {['Day Book', 'Ledger', 'Trial Balance', 'Profit & Loss', 'Balance Sheet', 'Cash Flow', 'Fund Flow', 'Ratio Analysis'].map((report, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{report}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              INVENTORY & STOCK
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Inventory Management
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From simple stock tracking to complex manufacturing with BOM - handle any inventory scenario 
              with batch, serial, and multi-warehouse support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inventoryFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-green-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Stock Reports</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {['Stock Ledger', 'Stock Summary', 'Item Profitability', 'Movement Analysis', 'Ageing Report', 'ABC Analysis', 'Fast/Slow/Non-moving', 'Re-order Status', 'Godown Summary', 'Stock Transfer Register', 'Physical Stock Variance', 'Batch Expiry Report'].map((report, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{report}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GST & Taxation */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-4">
              GST & TAXATION
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              100% GST Compliant
            </h2>
            <p className="text-lg text-orange-100 max-w-3xl mx-auto">
              Generate GSTR returns, e-Invoices, e-Way bills, TDS/TCS forms - all offline. 
              Reconcile with 2A/2B for complete compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gstFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition-all">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-orange-100 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales & Purchase Workflow */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
              SALES & PURCHASE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Transaction Workflow
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 border border-indigo-100">
              <h3 className="text-2xl font-bold text-indigo-900 mb-6">Sales Flow</h3>
              <div className="space-y-4">
                {['Quotation', 'Sales Order', 'Delivery Note', 'Invoice', 'Receipt', 'Credit Note'].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700 font-medium">{step}</span>
                    {idx < 5 && <span className="text-indigo-400">→</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">Purchase Flow</h3>
              <div className="space-y-4">
                {['Purchase Requisition', 'Purchase Order', 'Receipt Note', 'Purchase Bill', 'Payment', 'Debit Note'].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700 font-medium">{step}</span>
                    {idx < 5 && <span className="text-purple-400">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">📄 Document Designer</h4>
              <p className="text-gray-600 text-sm">Drag-drop designer for invoices, PO, DC, payslips, barcode labels with QR code, watermark, conditional formatting.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">🖥️ POS Module</h4>
              <p className="text-gray-600 text-sm">Touch-friendly screen, barcode scanner, weighing scale (RS-232), cash drawer, POS printer (80mm), X/Z reports.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">👨‍💼 Salesman Commission</h4>
              <p className="text-gray-600 text-sm">Target vs achievement tracking, commission % slabs, auto-journal at month-end.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payroll Features */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-pink-900 text-pink-200 rounded-full text-sm font-semibold mb-4">
              PAYROLL & HR
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Complete Payroll Management
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From attendance to payslips - handle entire employee lifecycle with statutory compliance for PF, ESI, PT, LWF.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {payrollFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-all border border-gray-700">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
              ENTERPRISE SECURITY
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Bank-Grade Data Security
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your financial data deserves the highest protection. LedgerLock encrypts everything 
              and keeps your data under your complete control.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Benchmarks */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-900 text-green-300 rounded-full text-sm font-semibold mb-4">
              PERFORMANCE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Built for Speed
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Optimized to run on 10-year-old hardware. No more waiting for reports or slow voucher entry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {performanceBenchmarks.map((bench, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-6 text-center border border-gray-800">
                <div className="text-3xl font-bold text-green-400 mb-2">{bench.value}</div>
                <div className="text-white font-medium mb-1">{bench.metric}</div>
                <div className="text-gray-500 text-sm">{bench.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports & Analytics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
              REPORTING & ANALYTICS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              200+ Reports with Drill-Down
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every report you need, with powerful customization. Export to PDF/Excel, schedule auto-emails, 
              create custom reports with SQL designer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {reportFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                <svg className="w-5 h-5 text-cyan-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-semibold mb-4">
              TECHNOLOGY
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Modern Tech Stack
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Desktop Shell', items: ['Electron 28', 'Node 20 LTS', 'Windows 10/11 x64'] },
              { title: 'UI Layer', items: ['React 18', 'TypeScript', 'MUI v5', 'Dark/Light themes'] },
              { title: 'Database', items: ['SQLite 3.44', 'SQLCipher AES-256', 'Prisma 5 ORM'] },
              { title: 'Reports', items: ['PDFKit', 'ExcelJS', 'Chart.js', 'Fast-CSV'] },
            ].map((stack, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{stack.title}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">🌐 Languages</h4>
              <p className="text-gray-600 text-sm">i18next with English, Hindi, Gujarati, Tamil, Bengali. Hindi/Tamil transliteration for narration field.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">🔄 Updates</h4>
              <p className="text-gray-600 text-sm">electron-updater with signed differential delta updates. Minimal download size for patches.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">✅ Quality</h4>
              <p className="text-gray-600 text-sm">Jest + Playwright e2e testing. 80% unit coverage gate. ESLint + Prettier. No &apos;any&apos; in TypeScript.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Geo-Targeted Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              AVAILABLE ACROSS INDIA
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              LedgerLock for Indian Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Designed specifically for Indian SMBs with GST, TDS, TCS, and all statutory compliance. 
              Available in multiple Indian languages.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {targetCities.map((city, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 text-gray-700 rounded-full text-sm font-medium border border-orange-100 hover:border-orange-300 hover:shadow-md transition-all"
              >
                Accounting Software {city}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🏭', title: 'Manufacturing', desc: 'BOM, production vouchers, job costing' },
              { icon: '🛒', title: 'Retail & POS', desc: 'Touch screen, barcode, cash drawer' },
              { icon: '🏪', title: 'Trading', desc: 'Multi-warehouse, batch tracking' },
              { icon: '💼', title: 'Services', desc: 'Project billing, timesheet, expenses' },
            ].map((industry, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-gray-600 text-sm">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-800 text-purple-200 rounded-full text-sm font-semibold mb-4">
              SIMPLE PRICING
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              One-Time Purchase. No Monthly Fees.
            </h2>
            <p className="text-lg text-purple-200 max-w-3xl mx-auto">
              Unlike cloud software, pay once and use forever. Free updates for 1 year included.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '₹15,000',
                period: 'one-time',
                description: 'For small businesses',
                features: ['1 Company', 'Accounting + Inventory', 'GST Reports', 'PDF/Excel Export', '1 User', '1 Year Updates', 'Email Support'],
                highlighted: false,
              },
              {
                name: 'Professional',
                price: '₹35,000',
                period: 'one-time',
                description: 'For growing businesses',
                features: ['5 Companies', 'All Starter Features', 'Payroll Module', 'TDS/TCS', 'POS Module', '5 Users', 'Custom Reports', 'Priority Support'],
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: '₹75,000',
                period: 'one-time',
                description: 'For large organizations',
                features: ['Unlimited Companies', 'All Pro Features', 'Source Code Access', 'Multi-Location', 'Unlimited Users', 'Custom Development', 'On-site Training', 'Dedicated Support'],
                highlighted: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-white text-gray-900 shadow-2xl scale-105'
                    : 'bg-purple-800/50 text-white border border-purple-700'
                }`}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? 'text-gray-500' : 'text-purple-300'}>{plan.period}</span>
                </div>
                <p className={`mb-6 ${plan.highlighted ? 'text-gray-600' : 'text-purple-200'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <svg className={`w-5 h-5 ${plan.highlighted ? 'text-green-500' : 'text-purple-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all ${
                    plan.highlighted
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-white text-purple-900 hover:bg-gray-100'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-purple-200">
              🎁 <strong>30-Day Free Trial</strong> - All features unlocked. No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              LedgerLock FAQs
            </h2>
          </div>
          <FAQSection faqs={faqs} className="bg-transparent py-0" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Switch to LedgerLock?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Download the free 30-day trial. Import your Tally/Busy data. Experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Download Free Trial
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Request Demo
              </Link>
            </div>
            <p className="mt-6 text-purple-200 text-sm">
              Or call us: <a href="tel:+919675012345" className="font-semibold hover:underline">+91 9675 012345</a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Request a Demo or Free Trial
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form and our team will contact you within 24 hours with download link and setup assistance.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <ContactForm serviceName="Accounting Software" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
