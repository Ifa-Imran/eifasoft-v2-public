import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'E-Commerce Development Company India | Custom Online Store Solutions | EifaSoft',
    description: 'Leading e-commerce development company in India. Custom online stores, multi-vendor marketplaces, B2B/B2C solutions, headless commerce, payment gateway integration. 300+ stores delivered. Starting ₹45,000.',
    canonical: '/e-commerce-development-company',
    keywords: [
      // Core E-Commerce Keywords (High Volume)
      'e-commerce development company India',
      'custom e-commerce development',
      'online store development',
      'e-commerce website development',
      'multi-vendor marketplace development',
      'B2B e-commerce solutions',
      'e-commerce admin panel',
      'inventory management system',
      'payment gateway integration India',
      
      // Platform-Specific
      'Shopify development India',
      'WooCommerce development',
      'Magento development India',
      'BigCommerce development',
      'PrestaShop development',
      'OpenCart development',
      'custom shopping cart',
      'e-commerce CMS development',
      
      // Technology-Specific
      'headless commerce solutions',
      'progressive web app e-commerce',
      'React e-commerce',
      'Node.js e-commerce',
      'Laravel e-commerce',
      'PHP e-commerce',
      'MERN stack e-commerce',
      'API-first commerce',
      
      // Feature-Specific
      'order management system',
      'product management system',
      'customer management e-commerce',
      'coupon management system',
      'shipping integration India',
      'tax calculation e-commerce',
      'reporting analytics e-commerce',
      'mobile commerce app',
      'e-commerce app development',
      
      // Marketplace & B2B
      'Amazon clone development',
      'Flipkart clone marketplace',
      'B2B marketplace platform',
      'wholesale e-commerce',
      'vendor management system',
      'commission management',
      'split payment processing',
      'multi-seller platform',
      
      // Industry-Specific
      'fashion e-commerce',
      'grocery delivery app',
      'food ordering platform',
      'pharmacy e-commerce',
      'electronics online store',
      'furniture e-commerce',
      'jewelry online store',
      'beauty products e-commerce',
      
      // Payment & Security
      'Razorpay integration',
      'PayU integration',
      'Stripe integration India',
      'UPI payment gateway',
      'COD verification',
      'PCI-DSS compliant e-commerce',
      'secure checkout process',
      
      // Shipping & Logistics
      'Shiprocket integration',
      'Delhivery integration',
      'Blue Dart shipping',
      'real-time shipping rates',
      'AWB generation',
      'order tracking system',
      'warehouse management',
      
      // Cost & Pricing
      'e-commerce website cost',
      'online store price India',
      'affordable e-commerce development',
      'cheap online store',
      'budget e-commerce solutions',
      'enterprise e-commerce pricing',
      
      // Location-Based
      'e-commerce company Noida',
      'e-commerce developer Delhi',
      'online store developer Bangalore',
      'e-commerce agency Mumbai',
      'e-commerce services Hyderabad',
      'e-commerce company Pune',
      
      // Long-tail Commercial
      'custom ecommerce platform development',
      'ecommerce migration services',
      'ecommerce redesign services',
      'ecommerce maintenance support',
      'ecommerce SEO services',
      'conversion rate optimization',
    ],
  });
}

const faqs = [
  {
    question: 'What features are included in your custom e-commerce admin panel?',
    answer: 'Our custom e-commerce admin panel includes everything you need to run your online store efficiently:\n\n**Dashboard & Analytics:**\n- Real-time sales analytics with line/bar charts (last 30 days)\n- Info boxes: total orders, monthly revenue, pending orders, low-stock SKUs\n- Recent orders table with status tracking\n- Customer reviews and ratings dashboard\n- Activity timeline (last 20 admin actions)\n\n**Product Management:**\n- Server-side DataTable with advanced search & filters\n- Unlimited product attributes (size, color, material, etc.)\n- Dynamic attribute sets with matrix generation\n- Auto-generate SKU combinations with individual pricing\n- Drag-drop multi-image upload with WEBP auto-conversion\n- Bulk import/export via CSV with validation\n- SEO metadata per product\n- Tier pricing for quantity breaks\n\n**Order Management:**\n- Complete order lifecycle tracking\n- Inline editing of billing/shipping addresses\n- PDF invoice generation (DomPDF)\n- Refund processing with restock option\n- Bulk status updates with email notifications\n- Packing slip printing\n\n**Customer Management:**\n- Customer database with purchase history\n- Customer impersonation feature for support\n- Segmentation by purchase behavior\n- Bulk email campaigns\n\n**Coupon & Marketing:**\n- Coupon creation with usage limits\n- Bulk coupon generation\n- Cart price rules\n- Automatic discounts\n\n**CMS & Content:**\n- Page builder for static pages\n- Slider/hero banner management\n- Blog integration\n- Template manager with live preview\n\n**Staff & Permissions:**\n- Role-based access control (RBAC)\n- Staff activity logging\n- IP whitelist for admin access\n- Session management\n\n**Reporting Suite:**\n- Sales reports (by date, product, customer)\n- Most viewed products\n- Low stock alerts\n- Tax reports grouped by tax class\n- Shipping cost analysis (charged vs actual)\n- Export to PDF/CSV/Excel\n\nAll features include CSRF protection, secure session management, and comprehensive audit trails.',
  },
  {
    question: 'Do you develop multi-vendor marketplace platforms?',
    answer: 'Yes! We specialize in building multi-vendor marketplace platforms similar to Amazon, Flipkart, Etsy, or eBay. Our marketplace solutions include:\n\n**Vendor Management:**\n- Vendor registration and approval workflow\n- Separate vendor dashboards with analytics\n- Vendor profile pages with ratings/reviews\n- Product listing management per vendor\n- Order notification system\n- Vendor-wise shipping configuration\n\n**Commission & Payments:**\n- Flexible commission models (percentage, fixed, tiered)\n- Automatic commission calculation\n- Split payment processing (vendor/admin)\n- Vendor payout management\n- Wallet system for vendors\n- Commission reports\n\n**Product Management:**\n- Vendor product submission\n- Admin approval workflow before publishing\n- Quality control checks\n- Brand/category restrictions per vendor\n\n**Order Fulfillment:**\n- Vendor-wise order splitting\n- Separate shipping labels per vendor\n- Tracking integration per shipment\n- Return/refund management by vendor\n\n**Customer Experience:**\n- Unified shopping cart (multiple vendors)\n- Vendor filtering and sorting\n- Vendor comparison\n- Product reviews and ratings\n- Q&A section per product\n\n**Dispute Resolution:**\n- Customer complaint system\n- Vendor-customer messaging\n- Admin mediation tools\n- Refund/dispute tracking\n\nWe build marketplaces on custom PHP, Laravel, or extend WooCommerce/Magento with marketplace plugins. Starting cost: ₹5,00,000+',
  },
  {
    question: 'What is headless commerce and do you offer it?',
    answer: 'Yes! We specialize in headless commerce architecture that separates the frontend presentation layer from the backend e-commerce functionality.\n\n**What is Headless Commerce?**\nTraditional e-commerce: Frontend and backend are tightly coupled\nHeadless commerce: Frontend (React, Vue, Next.js) communicates with backend (Node.js, Laravel) via APIs\n\n**Benefits of Headless Commerce:**\n✓ Omnichannel selling (web, mobile app, IoT, voice assistants from same backend)\n✓ Faster frontend performance (React/Vue/Next.js SPA/PWA)\n✓ Better customization (no template limitations)\n✓ Easier integrations (API-first approach)\n✓ Scalability (scale frontend/backend independently)\n✓ Future-proof (change frontend without affecting backend)\n\n**Our Headless Stack:**\n- Frontend: Next.js, React, Vue.js, Nuxt.js\n- Backend: Node.js, Laravel, Strapi (headless CMS)\n- E-commerce Engine: MedusaJS, Saleor, custom solutions\n- Database: PostgreSQL, MongoDB, Redis\n- Hosting: Vercel, AWS, DigitalOcean\n\n**When to Choose Headless:**\n- Need custom UX/UI beyond template capabilities\n- Multiple sales channels (web + mobile + POS)\n- High traffic requiring independent scaling\n- Complex integrations with ERP/CRM\n- Planning frequent redesigns\n\n**Cost:** Headless commerce starts at ₹3,00,000+ (higher initial cost, lower long-term maintenance)',
  },
  {
    question: 'Which e-commerce platform should I choose: Shopify, WooCommerce, or Custom?',
    answer: 'The best platform depends on your business needs, budget, and growth plans:\n\n**Shopify** (Starting ₹45,000 + monthly fees)\n✓ Pros: Easy setup, hosted solution, 100+ templates, app ecosystem, PCI-DSS compliant\n✗ Cons: Monthly fees ($29-$299), transaction fees (0.5-2%), limited customization, vendor lock-in\nBest For: Small businesses, startups, quick launch, non-technical owners\n\n**WooCommerce** (Starting ₹80,000)\n✓ Pros: WordPress integration, free core plugin, 50,000+ extensions, full ownership, SEO-friendly\n✗ Cons: Requires hosting, security your responsibility, can get slow with many plugins\nBest For: Content-driven stores, bloggers, medium businesses, WordPress users\n\n**Magento/Adobe Commerce** (Starting ₹2,00,000)\n✓ Pros: Enterprise-grade, highly customizable, multi-store support, powerful B2B features\n✗ Cons: Steep learning curve, expensive development, resource-intensive\nBest For: Large enterprises, complex catalogs, B2B operations\n\n**Custom Development** (Starting ₹1,50,000)\n✓ Pros: 100% customization, no recurring fees, complete ownership, scalable, unique features\n✗ Cons: Higher upfront cost, longer timeline, requires technical team\nBest For: Unique business models, specific requirements, high-volume stores, marketplace platforms\n\n**Our Recommendation:**\n- Startup/Side project → Shopify\n- Growing business → WooCommerce\n- Enterprise/Marketplace → Custom/Laravel\n- Multi-store/B2B → Magento',
  },
  {
    question: 'How do you handle payment gateway integration in India?',
    answer: 'We integrate all major Indian and international payment gateways with PCI-DSS compliant implementation:\n\n**Payment Gateways We Integrate:**\n\n**Indian Gateways:**\n- Razorpay (Credit/Debit, UPI, Netbanking, Wallets, PayLater) - 2% per transaction\n- PayU (Cards, UPI, Netbanking, EMI) - 2-3% per transaction\n- Paytm (Wallet, UPI, Cards) - 1-2% per transaction\n- CCAvenue (200+ payment methods) - 2-3% per transaction\n- Instamojo (Freelancers, small businesses) - 2-5% per transaction\n- Cashfree (Instant settlements) - 1-2% per transaction\n\n**International Gateways:**\n- Stripe (Global cards, Apple Pay, Google Pay) - 2-3% + ₹20\n- PayPal (200+ countries) - 3.9% + fixed fee\n- 2Checkout (Global reach) - 3.5% + $0.30\n\n**Payment Methods Supported:**\n✓ Credit/Debit Cards (Visa, Mastercard, Rupay, Amex)\n✓ UPI (Google Pay, PhonePe, Paytm, BHIM)\n✓ Net Banking (all major banks)\n✓ Mobile Wallets (Paytm, PhonePe, FreeCharge)\n✓ Buy Now Pay Later (Simpl, ZestMoney, LazyPay)\n✓ EMI options\n✓ Cash on Delivery (with verification)\n✓ Cryptocurrency (Bitcoin, USDT - optional)\n\n**Security Features:**\n- Tokenization (card data never stored)\n- 3D Secure authentication\n- Fraud detection algorithms\n- Address Verification System (AVS)\n- CVV verification\n- Transaction velocity checks\n- Risk scoring\n\n**COD Management:**\n- OTP verification for COD orders\n- COD limit based on customer history\n- Partial payment (token amount)\n- Reconciliation automation\n\nIntegration cost: ₹15,000-₹50,000 per gateway (included in package deals)',
  },
  {
    question: 'What shipping and logistics integrations do you provide?',
    answer: 'We integrate with all major Indian and international shipping carriers for seamless order fulfillment:\n\n**Shipping Aggregators:**\n- Shiprocket (25+ carriers, automated AWB, NDR management)\n- NimbusPost (18+ carriers, competitive rates)\n- Pickrr (18+ carriers, COD remittance)\n- iThink Logistics (22+ carriers, analytics)\n\n**Direct Carrier Integrations:**\n- Delhivery (Surface/Air, COD, real-time tracking)\n- Blue Dart (Express delivery, international)\n- FedEx India (Domestic/international)\n- DHL Express (International shipping)\n- Ecom Express (Tier 2/3 cities)\n- DTDC (Nationwide network)\n- India Post (Cost-effective, remote areas)\n\n**Shipping Features:**\n✓ Real-time rate calculation at checkout\n✓ Automatic carrier selection (lowest cost/fastest)\n✓ AWB generation and label printing\n✓ Bulk manifest generation\n✓ Pickup request automation\n✓ Real-time tracking updates\n✓ SMS/email notifications to customers\n✓ NDR (Non-Delivery Report) management\n✓ RTO (Return to Origin) prevention\n✓ COD remittance tracking\n✓ Shipping cost analysis reports\n✓ Zone-based shipping rules\n✓ Weight/volumetric weight calculation\n\n**Warehouse Management:**\n- Multi-warehouse support\n- Inventory sync across warehouses\n- Smart allocation (nearest to customer)\n- Stock transfer between warehouses\n- Barcode scanning integration\n\n**Returns Management:**\n- Automated return approval workflow\n- Return pickup scheduling\n- Quality check process\n- Refund initiation\n- Restock management\n\nIntegration cost: ₹20,000-₹75,000 depending on complexity',
  },
  {
    question: 'How long does it take to build an e-commerce website?',
    answer: 'E-commerce development timelines vary by complexity and customization level:\n\n**Template-Based Store** (4-6 weeks, ₹45,000-₹1,00,000)\n- Shopify/WooCommerce theme customization\n- Up to 100 products uploaded\n- Standard features (cart, checkout, payment)\n- Basic branding (logo, colors)\n- Essential pages (Home, Shop, About, Contact)\n- Mobile responsive\n- Payment gateway integration\n\n**Custom Design Store** (8-12 weeks, ₹1,50,000-₹3,00,000)\n- Fully custom UI/UX design\n- Advanced admin panel with analytics\n- Product variants/attributes\n- Coupon management\n- Customer accounts\n- Order tracking\n- Email notifications\n- Blog integration\n- SEO optimization\n- Third-party integrations (shipping, accounting)\n\n**Enterprise/Marketplace** (12-20 weeks, ₹5,00,000+)\n- Multi-vendor functionality\n- Custom workflows and approvals\n- ERP/CRM integration\n- Advanced reporting suite\n- Mobile apps (iOS/Android)\n- Headless architecture\n- High-traffic optimization\n- Dedicated infrastructure\n- SLA guarantees\n\n**Development Process:**\nWeek 1-2: Requirement gathering, wireframes\nWeek 3-4: UI/UX design approval\nWeek 5-8: Frontend/backend development\nWeek 9-10: Integrations and testing\nWeek 11-12: Content upload, training, launch\n\nWe follow agile methodology with weekly demos and can fast-track critical features for earlier launch.',
  },
  {
    question: 'What is the cost of e-commerce website development in India?',
    answer: 'E-commerce development costs in India vary significantly based on features, technology, and customization:\n\n**By Type:**\n\n**Basic Online Store** (₹45,000-₹1,00,000)\n- Template-based (Shopify/WooCommerce)\n- Up to 100 products\n- Standard payment gateway\n- Basic shipping\n- Mobile responsive\n- 3 months support\n\n**Professional E-Commerce** (₹1,50,000-₹3,00,000)\n- Custom design\n- Advanced admin panel\n- Product variants\n- Coupon system\n- Shipping integrations (2-3 carriers)\n- Payment gateways (2-3)\n- Customer accounts\n- Order tracking\n- 6 months support\n\n**Enterprise Solution** (₹5,00,000-₹10,00,000)\n- Fully custom platform\n- Multi-vendor capability\n- ERP/CRM integration\n- Advanced analytics\n- Mobile apps\n- Headless architecture\n- High-traffic optimization\n- 12 months support\n\n**Marketplace Platform** (₹7,00,000-₹20,00,000+)\n- Amazon/Flipkart clone\n- Vendor management\n- Commission system\n- Split payments\n- Dispute management\n- Multi-warehouse\n\n**By Technology:**\n- Shopify: ₹45,000 + monthly fees\n- WooCommerce: ₹80,000-₹2,00,000\n- Magento: ₹2,00,000-₹8,00,000\n- Custom Laravel: ₹1,50,000-₹5,00,000\n- MERN Stack: ₹2,00,000-₹7,00,000\n\n**Additional Costs:**\n- Domain: ₹800-₹1,500/year\n- Hosting: ₹3,000-₹50,000/year\n- SSL: ₹0-₹10,000/year (Let\'s Encrypt free)\n- Payment gateway: 1-3% per transaction\n- Shipping: Actual charges\n- AMC: ₹25,000-₹1,00,000/year (optional)\n\n**ROI Timeline:** Most stores break even in 6-12 months with proper marketing.',
  },
  {
    question: 'Do you provide e-commerce migration services?',
    answer: 'Yes! We specialize in migrating e-commerce stores from one platform to another with zero downtime and data loss:\n\n**Migration Services:**\n\n**From:**\n- Shopify → WooCommerce/Laravel/Custom\n- WooCommerce → Shopify/Magento/Laravel\n- Magento → Shopify Plus/Laravel/Headless\n- OpenCart/PrestaShop → Modern platforms\n- Legacy systems → Cloud-based solutions\n\n**Data Migration:**\n✓ Products (name, SKU, description, images, variants, pricing)\n✓ Categories (nested structure, SEO URLs)\n✓ Customers (accounts, addresses, order history)\n✓ Orders (complete history, invoices, status)\n✓ Coupons/Discount rules\n✓ Reviews/Ratings\n✓ CMS pages/Blog posts\n✓ SEO data (meta tags, URLs with 301 redirects)\n\n**Migration Process:**\n1. Audit current store (data volume, customizations)\n2. Map data fields between platforms\n3. Create migration script/test run\n4. Test migration on staging environment\n5. Client approval on test data\n6. Schedule production migration (off-peak hours)\n7. Execute migration with maintenance mode\n8. Verify data integrity\n9. DNS cutover\n10. Go-live monitoring\n\n**Timeline:** 2-4 weeks depending on data volume\n**Cost:** ₹50,000-₹2,00,000 based on products/orders count\n\n**Guarantees:**\n- Zero data loss\n- SEO ranking preservation (301 redirects)\n- Minimal downtime (<4 hours)\n- Post-migration support included',
  },
  {
    question: 'Which industries do you build e-commerce websites for?',
    answer: 'We have domain expertise across 25+ industries:\n\n**Fashion & Apparel** (Starting ₹1,50,000)\n- Size/color variants, style guides, lookbooks\n- Virtual try-on integration (AR)\n- Size recommendation AI\n\n**Grocery & Supermarket** (Starting ₹2,00,000)\n- Same-day delivery scheduling\n- Pincode serviceability check\n- Expiry date tracking\n- Subscription boxes\n\n**Food & Restaurant** (Starting ₹1,50,000)\n- Online ordering system\n- Table reservation\n- Live order tracking\n- Delivery boy app\n\n**Pharmacy & Healthcare** (Starting ₹2,50,000)\n- Prescription upload\n- Medicine search\n- Doctor consultation integration\n- HIPAA compliance\n\n**Electronics & Gadgets** (Starting ₹2,00,000)\n- Product comparison\n- Technical specifications\n- Exchange offers\n- EMI calculator\n\n**Furniture & Home Decor** (Starting ₹2,50,000)\n- AR visualization (see in your room)\n- Customization options\n- Installation booking\n\n**Jewelry & Watches** (Starting ₹3,00,000)\n- High-resolution imaging (360° view)\n- Certification display\n- Ring size guide\n- Insurance integration\n\n**Beauty & Cosmetics** (Starting ₹1,50,000)\n- Skin type quiz\n- Ingredient checker\n- Virtual makeup try-on\n- Subscription model\n\n**Books & Media** (Starting ₹1,00,000)\n- Digital downloads\n- Pre-orders\n- Review system\n- Recommendations engine\n\n**Sports & Fitness** (Starting ₹1,50,000)\n- Equipment rental\n- Class bookings\n- Trainer marketplace\n\n**Automotive Parts** (Starting ₹2,50,000)\n- Vehicle compatibility checker\n- Part number lookup\n- Garage integration\n\n**Handicrafts & Art** (Starting ₹1,50,000)\n- Artist profiles\n- Custom commissions\n- Auction functionality\n\n**Pet Supplies** (Starting ₹1,50,000)\n- Pet profile\n- Auto-ship subscriptions\n- Vet consultation\n\n**Baby & Kids** (Starting ₹1,50,000)\n- Age-based filtering\n- Gift registry\n- Milestone tracker\n\n**Office Supplies/B2B** (Starting ₹3,00,000)\n- Bulk ordering\n- Quote requests\n- GST invoicing\n- Credit terms\n\nAnd many more: Agriculture, Industrial equipment, Musical instruments, Religious items, etc.',
  },
];

// Admin Panel Features Data
const adminFeatures = {
  dashboard: {
    title: 'Intelligent Dashboard',
    icon: '📊',
    features: [
      'Sales line-chart (last 30 days) via AJAX',
      'Info boxes: total orders, monthly revenue, pending orders, low-stock SKUs',
      'Recent 5 orders table with status',
      'Recent 5 reviews with ratings',
      'Quick action buttons (Add Product, View Orders, Manage Coupons)',
      'Activity timeline (last 20 admin actions)',
    ],
  },
  products: {
    title: 'Product Management',
    icon: '📦',
    features: [
      'Server-side DataTable with search & filters',
      'General tab: name, slug, SKU, brand, descriptions (Quill editor)',
      'Images: drag-sort multi-upload, WEBP auto-create, alt text',
      'Attributes: dynamic sets, matrix table, per-combination pricing/SKU',
      'Categories: nested checkbox tree',
      'SEO tab: meta fields, URL key validation, JSON-LD preview',
      'Discount tab: tier prices, special pricing with dates',
      'Bulk actions: delete, status change, duplicate, CSV import/export',
    ],
  },
  categories: {
    title: 'Category Management',
    icon: '📁',
    features: [
      'Nested-set model (lft, rgt, depth, parent_id)',
      'Drag-and-drop tree with async save',
      'Per-category: name, slug, description, image, meta fields',
      'Sort order and active status',
      'Rebuild tree functionality',
      'Product count badges',
    ],
  },
  orders: {
    title: 'Order Management',
    icon: '🛒',
    features: [
      'DataTable with comprehensive filters',
      'Bulk status change with email notifications',
      'Inline edit billing & shipping addresses',
      'Product table with autocomplete add',
      'Status history timeline',
      'Auto-recalculating totals via AJAX',
      'PDF invoice generation (DomPDF)',
      'Refund processing with restock option',
      'Print packing slip',
    ],
  },
  customers: {
    title: 'Customer Management',
    icon: '👥',
    features: [
      'DataTable with orders count & revenue',
      'Personal info, password reset, newsletter flag',
      'Customer groups management',
      'Multiple addresses (billing/shipping)',
      'Wishlist management',
      'Impersonate feature (one-time token)',
      'Export email CSV (filtered)',
    ],
  },
  coupons: {
    title: 'Coupon Management',
    icon: '🎟️',
    features: [
      'Bulk code auto-generation',
      'Types: percent off, fixed amount',
      'Min spend & max usage limits',
      'Per-customer usage limits',
      'Free shipping flag',
      'Date-based validity',
      'Category/product/customer group targeting',
      'Usage tracking with order links',
    ],
  },
  cms: {
    title: 'CMS & Content',
    icon: '📝',
    features: [
      'Pages: URL key, title, WYSIWYG content, meta, layout options',
      'Sliders: multiple slides, captions, links, sort order',
      'Activation date scheduling',
      'Image upload to organized directories',
      'Full-width and column layouts',
    ],
  },
  templates: {
    title: 'Template Manager',
    icon: '🎨',
    features: [
      'ZIP upload with validation (config.json, preview.png)',
      'Auto-extract to templates directory',
      'Activate/deactivate toggle',
      'Live preview iframe with cache bypass',
      'Color-picker live edit via CSS variables',
      'Real-time style customization',
    ],
  },
  staff: {
    title: 'Staff & Permissions',
    icon: '🔐',
    features: [
      'Staff CRUD: name, email, password, role, status',
      'Role management with descriptions',
      'Permission grid: controller-action checkboxes',
      'Check all / uncheck all helpers',
      'Self-protection (cannot delete/demote self)',
      'Permission caching in session',
    ],
  },
  settings: {
    title: 'Settings Manager',
    icon: '⚙️',
    features: [
      'Key/value JSON store',
      'Grouped tabs: General, Currency, Tax, Shipping, Payment, SMTP, SEO, Cache',
      'Maintenance mode with IP whitelist',
      'Clear cache buttons (lang, image, category, all)',
      'Database backup (SQL dump download)',
    ],
  },
  reports: {
    title: 'Reports & Analytics',
    icon: '📈',
    features: [
      'Sales by date (line + bar charts)',
      'Sales by product (top 20)',
      'Sales by customer (top 20)',
      'Most viewed products',
      'Low stock alerts',
      'Tax report by class',
      'Shipping cost analysis',
      'Date presets & custom range',
      'Print-friendly & PDF export',
    ],
  },
  notifications: {
    title: 'Notification System',
    icon: '🔔',
    features: [
      'Types: info, success, warning, error',
      'Auto-triggers: new order, low stock, failed login, pending review',
      'Top-bar bell with unread count',
      '30-second polling via AJAX',
      'Mark read / mark all read',
    ],
  },
};

// Security Features
const securityFeatures = [
  {
    title: 'CSRF Protection',
    description: 'Double-layer: cookie token + form token, regenerated every 12h',
    icon: '🛡️',
  },
  {
    title: 'Content Security Policy',
    description: 'CSP headers blocking eval, allowing only trusted sources',
    icon: '🔒',
  },
  {
    title: 'Session Security',
    description: 'Fixation prevention, ID regeneration on login/privilege change',
    icon: '🔑',
  },
  {
    title: 'Permission Caching',
    description: 'Staff permissions cached in session, reloaded on role change',
    icon: '⚡',
  },
  {
    title: 'IP Whitelisting',
    description: 'Optional admin access restriction by IP address',
    icon: '🌐',
  },
  {
    title: 'reCAPTCHA v3',
    description: 'Google reCAPTCHA on login and critical forms',
    icon: '🤖',
  },
  {
    title: 'Secure Cookies',
    description: 'HttpOnly, Secure, SameSite flags on all cookies',
    icon: '🍪',
  },
  {
    title: 'Activity Logging',
    description: 'Complete audit trail with IP, user-agent, old/new values',
    icon: '📋',
  },
];

// Cities for geo-targeting
const targetCities = [
  'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata',
  'Ahmedabad', 'Jaipur', 'Lucknow', 'Noida', 'Gurgaon', 'Chandigarh', 'Indore',
];

export default function EcommerceDevelopmentPage() {
  const serviceSchema = generateServiceSchema(
    'E-Commerce Development Services India',
    'Enterprise-grade e-commerce development with custom admin panel, product management, order processing, multi-vendor marketplace, payment gateway integration, inventory management, and comprehensive reporting. Serving businesses across India.'
  );

  const productSchema = generateProductSchema(
    'Custom E-Commerce Development Package',
    'Complete e-commerce solution with advanced admin panel, product management with attributes, order management with invoicing, customer management, coupon system, CMS, template manager, staff permissions, reporting, and security features',
    '₹45,000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft E-Commerce Platform',
    description: 'Enterprise e-commerce development platform with advanced admin panel, product management with attributes/variants, order processing, multi-vendor marketplace, payment gateway integration, inventory management, and comprehensive analytics.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, WooCommerce, Shopify, Custom PHP',
    price: '45000',
    rating: 4.9,
    reviewCount: 312,
  });

  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    'article h1',
    'article h2',
  ]);

  const faqSchema = generateFAQSchema(faqs);
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'E-Commerce Development', url: '/e-commerce-development-company' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema]} />
      
      <Hero
        title="Enterprise E-Commerce Development Company in India"
        subtitle="Custom Online Store Solutions"
        description="Build powerful online stores with advanced admin panels, multi-vendor marketplace, inventory management, and enterprise-grade security. 300+ successful stores delivered."
        ctaPrimary={{ text: 'Get Free Consultation', href: '/contact' }}
        ctaSecondary={{ text: 'View Admin Features', href: '#admin-features' }}
        gradient="blue"
      />

      {/* What is E-Commerce Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is E-Commerce Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>E-Commerce Development</strong> is the process of creating online platforms for buying and selling products or services. It involves building shopping cart systems, payment gateway integration, inventory management, order processing, customer management, and secure checkout flows. Modern e-commerce development uses platforms like WooCommerce, Shopify, or custom solutions with advanced admin panels, multi-vendor capabilities, and mobile-responsive designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  E-commerce development starting at ₹45,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  300+ stores successfully delivered
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Multi-vendor marketplace support
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  4-20 weeks development timeline
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  All major payment gateways integrated
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Advanced admin panel with analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400">300+</div>
              <div className="text-gray-400 text-sm">E-Commerce Stores Built</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400">₹50Cr+</div>
              <div className="text-gray-400 text-sm">GMV Processed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-400">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-400">12+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Panel Features - Main Highlight */}
      <section className="py-20 bg-white" id="admin-features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              POWERFUL ADMIN PANEL
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete E-Commerce Admin Panel
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade admin dashboard with everything you need to manage products, orders, customers, 
              coupons, content, staff, and generate comprehensive reports.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(adminFeatures).map(([key, module]) => (
              <div key={key} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{module.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                </div>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-900 text-green-300 rounded-full text-sm font-semibold mb-4">
              ENTERPRISE SECURITY
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Bank-Grade Security Built-In
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Your e-commerce store protected with industry-leading security measures. PCI-DSS compliant payment processing and comprehensive audit trails.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors border border-gray-700">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Login & Authentication Flow */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                SECURE AUTHENTICATION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Login/Logout Flow
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Enterprise-grade authentication system with all security best practices implemented.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: 'Login Page', desc: 'CSRF protection, Google reCAPTCHA v3, remember-me cookie (30 days), redirect to intended URL' },
                  { title: 'Logout', desc: 'Session destruction, remember-me cookie cleanup, secure redirect' },
                  { title: 'Forgot Password', desc: 'Email-based token, 15-minute expiry, one-time use for security' },
                  { title: 'Reset Password', desc: 'Token validation, password update, automatic login after reset' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6 text-green-400">CLI Helper Scripts Included</h3>
              <div className="space-y-4 font-mono text-sm">
                <div className="bg-gray-800 rounded-lg p-4">
                  <span className="text-gray-500"># Create super-admin if locked out</span>
                  <br />
                  <span className="text-green-400">php</span> admin/cli/create-admin.php
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <span className="text-gray-500"># Re-seed permission slugs</span>
                  <br />
                  <span className="text-green-400">php</span> admin/cli/reset-permissions.php
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <span className="text-gray-500"># Clean old logs and cache</span>
                  <br />
                  <span className="text-green-400">php</span> admin/cli/clean-logs.php
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-900/30 rounded-lg border border-yellow-600/50">
                <p className="text-yellow-300 text-sm">
                  <strong>Included:</strong> Complete README with quick start guide, permission setup, customization instructions, and troubleshooting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-Commerce Platforms */}
      <section className="py-20 bg-white" id="platforms">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              FLEXIBLE PLATFORMS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your E-Commerce Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We develop on all major platforms or build completely custom solutions based on your business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🛍️',
                title: 'Shopify',
                description: 'Quick setup, easy management, and powerful features for growing businesses.',
                features: ['Easy Setup', 'App Ecosystem', 'Mobile Commerce', 'Secure Hosting', 'Payment Ready'],
                bestFor: 'Small to medium businesses',
              },
              {
                icon: '🌐',
                title: 'WooCommerce',
                description: 'Flexible WordPress-based solution with unlimited customization possibilities.',
                features: ['WordPress Integration', 'Open Source', 'Extensive Plugins', 'Full Control', 'SEO Friendly'],
                bestFor: 'WordPress users, bloggers',
              },
              {
                icon: '🏢',
                title: 'Magento/Adobe',
                description: 'Enterprise-grade platform for large catalogs and complex business requirements.',
                features: ['Enterprise Scale', 'Multi-store', 'B2B Features', 'Advanced SEO', 'Custom Workflows'],
                bestFor: 'Large enterprises',
              },
              {
                icon: '⚙️',
                title: 'Custom PHP',
                description: 'Tailored e-commerce platforms built from scratch for unique business models.',
                features: ['100% Custom', 'Full Ownership', 'No Licensing', 'Scalable', 'Unique Features'],
                bestFor: 'Unique requirements',
              },
            ].map((platform, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{platform.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{platform.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{platform.description}</p>
                <div className="text-xs text-blue-600 font-semibold mb-4">Best for: {platform.bestFor}</div>
                <ul className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              SEAMLESS INTEGRATIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Payment & Shipping Integrations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pre-built integrations with all major Indian and international payment gateways and shipping carriers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">💳</span> Payment Gateways
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Razorpay', 'PayU', 'Paytm', 'CCAvenue', 'Instamojo', 'Stripe',
                  'PayPal', 'UPI', 'Net Banking', 'EMI Options', 'Wallet', 'Cryptocurrency'
                ].map((gateway, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{gateway}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">🚚</span> Shipping Partners
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Delhivery', 'Shiprocket', 'Blue Dart', 'FedEx', 'DHL', 'Ecom Express',
                  'DTDC', 'India Post', 'Shadowfax', 'Xpressbees', 'COD', 'Real-time Tracking'
                ].map((carrier, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{carrier}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              TRANSPARENT PRICING
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              E-Commerce Development Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the package that fits your business. All packages include payment gateway integration, responsive design, and SEO basics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter Store',
                price: '₹45,000',
                originalPrice: '₹60,000',
                description: 'Perfect for small businesses starting online',
                features: [
                  'Up to 200 products',
                  'Template-based design',
                  'Shopify/WooCommerce',
                  'Payment gateway (1)',
                  'Basic admin panel',
                  'Mobile responsive',
                  'Basic SEO setup',
                  'Contact forms',
                  '1 month support',
                ],
                timeline: '3-4 weeks',
                highlighted: false,
              },
              {
                name: 'Professional',
                price: '₹1,50,000',
                originalPrice: '₹2,00,000',
                description: 'Complete solution for growing businesses',
                features: [
                  'Up to 2,000 products',
                  'Custom design',
                  'Any platform',
                  'Multiple payment gateways',
                  'Full admin panel (all modules)',
                  'Shipping integration',
                  'Advanced SEO',
                  'Product reviews & ratings',
                  'Coupons & discounts',
                  'Email notifications',
                  'Reports & analytics',
                  '6 months support',
                ],
                timeline: '6-8 weeks',
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                originalPrice: '',
                description: 'For large businesses & marketplaces',
                features: [
                  'Unlimited products',
                  'Custom platform',
                  'Multi-vendor support',
                  'Advanced inventory',
                  'Staff roles & permissions',
                  'Template manager',
                  'Activity logging',
                  'Advanced reporting',
                  'API integrations',
                  'Mobile app (optional)',
                  'Dedicated account manager',
                  '12 months support',
                ],
                timeline: '12-16 weeks',
                highlighted: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 relative ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl scale-105 z-10'
                    : 'bg-gray-50 text-gray-900 border border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className={`text-lg line-through ${plan.highlighted ? 'text-blue-200' : 'text-gray-400'}`}>
                      {plan.originalPrice}
                    </span>
                  )}
                </div>
                <p className={`mb-4 text-sm ${plan.highlighted ? 'text-blue-200' : 'text-gray-500'}`}>
                  Timeline: {plan.timeline}
                </p>
                <p className={`mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className={`w-5 h-5 mr-2 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-blue-200' : 'text-green-500'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              Need a custom solution? <Link href="/contact" className="text-blue-600 font-semibold hover:underline">Contact us for a detailed quote</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-800 text-purple-200 rounded-full text-sm font-semibold mb-4">
              INDUSTRY EXPERTISE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              E-Commerce Solutions for Every Industry
            </h2>
            <p className="text-lg text-purple-200 max-w-3xl mx-auto">
              We&apos;ve built successful online stores across diverse industries in India and worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: '👗', name: 'Fashion & Apparel' },
              { icon: '📱', name: 'Electronics' },
              { icon: '💊', name: 'Health & Wellness' },
              { icon: '🍴', name: 'Food & Grocery' },
              { icon: '💍', name: 'Jewelry' },
              { icon: '🏠', name: 'Home & Furniture' },
              { icon: '📚', name: 'Books & Education' },
              { icon: '⚽', name: 'Sports & Fitness' },
              { icon: '👶', name: 'Baby & Kids' },
              { icon: '💄', name: 'Beauty & Cosmetics' },
              { icon: '🚗', name: 'Auto Parts' },
              { icon: '🎁', name: 'Gifts & Crafts' },
            ].map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                <div className="text-3xl mb-2">{industry.icon}</div>
                <div className="text-sm font-medium">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geo-Targeted Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
              PAN INDIA SERVICE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              E-Commerce Development Services Across India
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Based in Moradabad, we serve clients across all major cities in India with local support and global standards.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {targetCities.map((city, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700 rounded-full text-sm font-medium border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
              >
                E-Commerce Development in {city}
              </span>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Remote Collaboration</h3>
              <p className="text-gray-600">Work with us from anywhere in India. Video calls, screen sharing, and real-time collaboration.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🗣️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-language Support</h3>
              <p className="text-gray-600">Build your store in Hindi, English, or any regional language. RTL support available.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">GST & Compliance</h3>
              <p className="text-gray-600">India-specific tax calculation, GST invoicing, and legal compliance built-in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Choose EifaSoft for E-Commerce Development?
            </h2>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              12+ years of experience building high-converting online stores for Indian and global businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🚀', title: 'Fast Time-to-Market', description: 'Launch your store in 4-8 weeks with all features ready' },
              { icon: '💰', title: 'Conversion Optimized', description: 'Average 25% higher conversion rates with our UX design' },
              { icon: '🔒', title: 'Enterprise Security', description: 'PCI-DSS compliant, CSRF protected, session secured' },
              { icon: '📈', title: 'SEO-First Approach', description: 'Schema markup, meta optimization, fast loading' },
              { icon: '📱', title: 'Mobile-First Design', description: '70%+ of Indian shoppers use mobile devices' },
              { icon: '⚡', title: 'Performance Focused', description: 'Core Web Vitals optimized, CDN ready' },
              { icon: '🎨', title: 'Custom Admin Panel', description: 'Tailored dashboard with all management tools' },
              { icon: '🛠️', title: '24/7 Support', description: 'Dedicated team for ongoing maintenance' },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-blue-200 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              OUR PROCESS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              How We Build Your E-Commerce Store
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven 6-step process that ensures your store is built right, on time, and within budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Discovery & Planning', description: 'Understand your business, products, target audience, and competitors. Define features and create wireframes.', duration: 'Week 1' },
              { step: '02', title: 'UI/UX Design', description: 'Create stunning designs focused on conversion. Mobile-first approach with intuitive navigation.', duration: 'Week 2-3' },
              { step: '03', title: 'Development', description: 'Build frontend, admin panel, and all modules. Set up database, security, and integrations.', duration: 'Week 4-6' },
              { step: '04', title: 'Content & Products', description: 'Import products, set up categories, configure payments, shipping, and tax settings.', duration: 'Week 7' },
              { step: '05', title: 'Testing & QA', description: 'Comprehensive testing: functionality, security, performance, cross-browser, and mobile.', duration: 'Week 8' },
              { step: '06', title: 'Launch & Training', description: 'Deploy to production, SSL setup, admin training, documentation handover, go live!', duration: 'Week 8' },
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-lg">
                  {phase.step}
                </div>
                <div className="pt-4">
                  <span className="text-xs text-blue-600 font-semibold">{phase.duration}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">{phase.title}</h3>
                  <p className="text-gray-600 text-sm">{phase.description}</p>
                </div>
              </div>
            ))}
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
              E-Commerce Development FAQs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about building your online store with us.
            </p>
          </div>
          <FAQSection faqs={faqs} className="bg-transparent py-0" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Launch Your E-Commerce Store?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free consultation and detailed quote for your online store. No obligations, just expert advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
              >
                View Our Work
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Or call us directly: <a href="tel:+919675012345" className="font-semibold hover:underline">+91 9675 012345</a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Request a Quote for Your E-Commerce Project
              </h2>
              <p className="text-lg text-gray-600">
                Tell us about your requirements and we&apos;ll get back to you within 24 hours with a detailed proposal.
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
