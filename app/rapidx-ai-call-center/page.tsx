import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { FAQ } from '@/types';

const RAPIDX_URL = 'https://rapidx.eifasoft.com';

/* ═══════════════════════════════════════════════════════════════════════════
   SEO METADATA — 30+ keywords, canonical, twitter, robots
   ═══════════════════════════════════════════════════════════════════════════ */

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...genMeta({
    title: 'RapidX AI Voice Call Center — AI-Powered Outbound Calling for Indian Businesses | EifaSoft',
    description:
      'RapidX AI is India\'s most advanced AI voice call center. Automate outbound calls in 10 Indian languages, book appointments 24/7, and cut costs by 91% vs manual agents. Powered by Sarvam AI, Groq LLM & LiveKit. Free 500-call trial.',
    canonical: '/rapidx-ai-call-center',
    keywords: [
      'AI call center India',
      'AI voice call center',
      'outbound AI calling India',
      'automated calling software India',
      'multilingual AI voice agent',
      'AI appointment booking software',
      'RapidX AI',
      'AI receptionist India',
      'AI telecaller India',
      'virtual call center AI',
      'IVR replacement AI',
      'conversational AI India',
      'Sarvam AI TTS',
      'Groq LLM calling',
      'LiveKit voice agent',
      'AI cold calling software',
      'Hindi AI voice bot',
      'automated outbound dialer India',
      'AI sales calling software',
      'appointment scheduling AI',
      'AI call center for real estate',
      'AI call center for healthcare',
      'AI call center for education',
      'TRAI compliant AI calling',
      'AI BPO India',
      'best AI calling software India 2026',
      'EifaSoft AI call center',
      'voice AI SaaS India',
      'Vobiz SIP AI agent',
      'reduce call center cost India',
    ],
  }),
    alternates: { canonical: 'https://www.eifasoft.com/rapidx-ai-call-center' },
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   FAQs — 12 optimized questions for rich snippets & AEO
   ═══════════════════════════════════════════════════════════════════════════ */

const faqs: FAQ[] = [
  {
    question: 'What is RapidX AI Voice Call Center?',
    answer:
      'RapidX AI is an AI-powered outbound call center platform built for Indian businesses. It uses advanced speech-to-text (Sarvam AI), large language models (Groq LLM), and text-to-speech (Sarvam Bulbul) to automate outbound sales calls, appointment booking, lead qualification, and follow-ups — in 10 Indian languages, 24/7, at 91% lower cost than manual agents.',
  },
  {
    question: 'How much does RapidX AI cost compared to a manual call center?',
    answer:
      'A manual 20-agent call center costs approximately ₹14,50,000/month (personnel, infrastructure, management). RapidX AI handles the same 10,000 calls/month for just ₹1,22,000/month — a 91.6% cost reduction, saving over ₹1.59 crore annually. Plans start at ₹49,999/month (Starter) or ₹2.50/call with no monthly commitment.',
  },
  {
    question: 'Which languages does RapidX AI support?',
    answer:
      'RapidX AI supports 10 Indian languages: Hindi, Hinglish (Hindi+English), English (Indian accent), Tamil, Telugu, Gujarati, Bengali, Marathi, Kannada, and Malayalam. The AI auto-detects the caller\'s language from their first sentence and responds in the same language throughout the call.',
  },
  {
    question: 'Will customers know they are talking to AI?',
    answer:
      'RapidX AI uses natural conversational fillers ("Hmm…", "Acha so…"), mirrors the caller\'s energy and pace, and speaks with authentic Indian accents via Sarvam AI TTS. Most callers do not realize it is AI until told. You can choose to disclose at the start of calls per TRAI guidelines.',
  },
  {
    question: 'What happens if the AI cannot answer a question?',
    answer:
      'RapidX AI performs a seamless warm transfer to a human agent when it detects complex queries, caller frustration, or out-of-scope questions. Full conversation context (transcript + summary) is preserved so the customer never has to repeat themselves.',
  },
  {
    question: 'Can I use my existing business phone number?',
    answer:
      'Yes. We can port your existing business number or provide a new local DID number through our Vobiz SIP trunk integration. Both options support caller ID display so your brand is recognized.',
  },
  {
    question: 'How accurate is the speech recognition for Indian accents?',
    answer:
      'RapidX AI uses Sarvam AI\'s Saaras v3 model, purpose-built for Indian languages and accents. It achieves 95%+ accuracy on native Indian speech and code-mixed conversations (Hinglish). This is significantly better than generic English-only STT engines.',
  },
  {
    question: 'What CRM and calendar integrations are available?',
    answer:
      'RapidX AI integrates with Google Calendar, Cal.com, Microsoft Outlook (via webhook), Salesforce, HubSpot, Zoho CRM, Telegram, WhatsApp Business API, and custom n8n/Zapier webhooks. Real-time call data flows automatically into your existing systems.',
  },
  {
    question: 'Is there a minimum commitment or free trial?',
    answer:
      'No long-term commitment required. Our Pay-Per-Call plan (₹2.50/call) has zero monthly commitment. Monthly plans (Starter, Growth, Enterprise) start with a 3-month initial term. Every new account gets 500 free trial calls to test the AI on real leads before committing.',
  },
  {
    question: 'How long does it take to set up RapidX AI?',
    answer:
      'Setup takes 3–4 weeks: Week 1 — onboarding, script customization, voice selection. Week 2 — integration with your calendar, CRM, and phone system. Week 3 — testing with sample leads. Week 4 — go-live with monitoring. Ongoing optimization is included.',
  },
  {
    question: 'Is RapidX AI compliant with Indian telecom regulations?',
    answer:
      'Yes. RapidX AI is built to comply with TRAI guidelines including DND (Do Not Disturb) scrubbing before every campaign, calling-hours restrictions (9 AM–9 PM), opt-out handling, and caller ID display. All call data is stored in India-based Supabase infrastructure.',
  },
  {
    question: 'Which industries benefit most from AI calling?',
    answer:
      'Real estate (property viewing appointments — 3x more bookings), healthcare & dental (appointment reminders — 40% fewer no-shows), education & coaching (demo class bookings — 5x conversion), financial services (loan follow-ups — 60% faster processing), and e-commerce (abandoned cart recovery — 15–25% recovery rate).',
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   STRUCTURED DATA — 6 schema types for maximum rich results
   ═══════════════════════════════════════════════════════════════════════════ */

export default function RapidXAICallCenterPage() {
  const serviceSchema = generateServiceSchema(
    'RapidX AI Voice Call Center',
    'AI-powered outbound call center for Indian businesses — multilingual calling in 10 Indian languages, automatic appointment booking, real-time analytics, and 91% cost savings vs manual agents. Powered by Sarvam AI, Groq LLM, and LiveKit.',
  );

  const productSchema = generateProductSchema(
    'RapidX AI Voice Call Center',
    'India\'s most advanced AI-powered outbound call center platform. Automate sales calls, appointment booking, lead qualification, and follow-ups in 10 Indian languages.',
    '49999',
    4.9,
    87,
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'RapidX AI Voice Call Center',
    description: 'SaaS platform for AI-powered outbound calling, appointment booking, and lead management for Indian businesses. Supports 10 Indian languages.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud',
    price: '49999',
    rating: 4.9,
    reviewCount: 87,
  });

  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    'h1',
    'h2',
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'AI Services', url: '/ai-services' },
    { name: 'RapidX AI Voice Call Center', url: '/rapidx-ai-call-center' },
  ]);

  /* ── Data Arrays ─────────────────────────────────────────────────────── */

  const FEATURES = [
    { icon: '🗣️', title: 'Multilingual by Default', desc: '10 Indian languages: Hindi, Hinglish, English, Tamil, Telugu, Gujarati, Bengali, Marathi, Kannada, Malayalam. Auto-detects caller language with natural Indian accents via Sarvam AI TTS.' },
    { icon: '⚡', title: 'Always On, Always Scaling', desc: '24/7 operation without breaks. Handle 1,000+ concurrent calls on a single server. Instant scaling — no hiring delays, no training costs, no attrition.' },
    { icon: '📅', title: 'Smart Calendar Integration', desc: 'Google Calendar, Cal.com & Outlook sync. Real-time slot availability, double-booking prevention, and instant booking confirmation via Telegram & WhatsApp.' },
    { icon: '📊', title: 'Real-Time Analytics Dashboard', desc: 'Live call monitoring, sentiment analysis, booking conversion rates, full call recordings & transcripts, per-call cost tracking, and campaign ROI metrics.' },
    { icon: '🤝', title: 'Seamless Human Handoff', desc: 'Smart warm transfer to human agents when caller is frustrated or asks complex questions. Full conversation context preserved — customers never repeat themselves.' },
    { icon: '🔒', title: 'Enterprise Security & Compliance', desc: 'End-to-end encryption, data residency in India, TRAI-compliant calling, DND scrubbing, calling-hours enforcement, and SOC 2-grade infrastructure.' },
  ];

  const PRICING = [
    { name: 'Starter', price: '₹49,999', period: '/month', features: ['Up to 5,000 calls/month', '1 AI voice agent', 'Google Calendar integration', 'Telegram notifications', 'Basic analytics dashboard', 'Email support', 'DND scrubbing included'], highlight: false, plan: 'starter' },
    { name: 'Growth', price: '₹99,999', period: '/month', badge: 'Most Popular', features: ['Up to 15,000 calls/month', '3 AI voice agents', 'Google + Cal.com integration', 'Telegram + WhatsApp alerts', 'Advanced analytics + sentiment', 'Call recordings & transcripts', 'CRM webhook integration', 'Priority support'], highlight: true, plan: 'growth' },
    { name: 'Enterprise', price: '₹2,49,999', period: '/month', features: ['Unlimited calls', 'Unlimited AI agents', 'Custom voice training', 'Salesforce/HubSpot/Zoho CRM', 'Dedicated account manager', '99.9% uptime SLA', 'On-premise deployment option', 'Custom API & webhooks'], highlight: false, plan: 'enterprise' },
    { name: 'Pay-Per-Call', price: '₹2.50', period: '/call', features: ['No monthly commitment', 'Perfect for seasonal campaigns', 'All features included', 'Minimum ₹10,000 top-up', 'Same AI quality as monthly', 'Cancel anytime'], highlight: false, plan: 'ppc' },
  ];

  const USE_CASES = [
    { icon: '🏠', industry: 'Real Estate', use: 'Property viewing appointments, broker follow-ups, new project launch calls', roi: '3x more bookings, 70% cost reduction', detail: 'AI calls leads within 5 minutes of inquiry, qualifies budget & location preferences, and books site visits automatically.' },
    { icon: '🏥', industry: 'Healthcare & Dental', use: 'Appointment reminders, follow-up scheduling, health camp invitations', roi: '40% reduction in no-shows', detail: 'Reminder calls 24h before appointments, automatic rescheduling for cancellations, and post-visit feedback collection.' },
    { icon: '📚', industry: 'Education & Coaching', use: 'Demo class bookings, admission follow-ups, fee reminders', roi: '5x lead conversion improvement', detail: 'AI qualifies parent/student interest, explains course details in their language, and books demo classes instantly.' },
    { icon: '💳', industry: 'Financial Services', use: 'Loan application follow-ups, KYC reminders, policy renewals', roi: '60% faster processing', detail: 'Automated follow-ups for incomplete applications, document collection reminders, and EMI payment confirmations.' },
    { icon: '🛒', industry: 'E-Commerce', use: 'Abandoned cart recovery, delivery confirmations, review collection', roi: '15–25% cart recovery rate', detail: 'Personalized calls to cart abandoners within 2 hours, offering assistance and completing orders over the phone.' },
    { icon: '🏨', industry: 'Hotels & Hospitality', use: 'Booking confirmations, check-in reminders, upselling', roi: '20% increase in direct bookings', detail: 'AI confirms reservations, offers room upgrades, and handles special requests in the guest\'s preferred language.' },
    { icon: '🔧', industry: 'HVAC & Home Services', use: 'Service appointment scheduling, seasonal maintenance calls', roi: '50% more recurring bookings', detail: 'Proactive maintenance reminder calls, emergency service dispatching, and post-service satisfaction surveys.' },
  ];

  const TECH_STACK = [
    { component: 'Speech-to-Text (STT)', tech: 'Sarvam Saaras v3', capability: '10 Indian languages + English, 95%+ accuracy on Indian accents, code-mixed speech support' },
    { component: 'AI Brain (LLM)', tech: 'Groq — Llama 3.3 70B', capability: 'Sub-200ms inference, context-aware sales conversations, objection handling, multi-turn reasoning' },
    { component: 'Text-to-Speech (TTS)', tech: 'Sarvam Bulbul v3', capability: 'Natural Indian voices in 10 languages, 24kHz studio-quality audio, emotional tone matching' },
    { component: 'Real-Time Transport', tech: 'LiveKit WebRTC', capability: '<500ms end-to-end voice latency, 1,000+ concurrent connections, noise cancellation' },
    { component: 'Telephony', tech: 'Vobiz SIP Trunk', capability: 'Reliable PSTN connectivity across India, caller ID support, number porting' },
    { component: 'Database & Storage', tech: 'Supabase (PostgreSQL)', capability: 'Call logs, transcripts, bookings, recordings — all stored in India-region infrastructure' },
  ];

  const HOW_IT_WORKS = [
    { step: '01', title: 'Upload Your Leads', desc: 'Import your lead list via CSV or connect your CRM. Set campaign parameters — language, time window, script goals.' },
    { step: '02', title: 'AI Calls Your Leads', desc: 'RapidX AI dials each lead, speaks in their language, follows your customized script, handles objections, and answers questions naturally.' },
    { step: '03', title: 'Appointments Booked Automatically', desc: 'When a lead agrees, AI checks your calendar in real-time, books the slot, and sends confirmation via Telegram + WhatsApp instantly.' },
    { step: '04', title: 'Analytics & Recordings Delivered', desc: 'Every call is recorded, transcribed, and analyzed for sentiment. Campaign dashboard shows conversion rates, cost per booking, and ROI.' },
  ];

  const INTEGRATIONS = [
    { name: 'Google Calendar', category: 'Calendar' },
    { name: 'Cal.com', category: 'Calendar' },
    { name: 'Microsoft Outlook', category: 'Calendar' },
    { name: 'Salesforce', category: 'CRM' },
    { name: 'HubSpot', category: 'CRM' },
    { name: 'Zoho CRM', category: 'CRM' },
    { name: 'Telegram', category: 'Notifications' },
    { name: 'WhatsApp Business', category: 'Notifications' },
    { name: 'n8n Workflows', category: 'Automation' },
    { name: 'Zapier', category: 'Automation' },
    { name: 'Custom Webhooks', category: 'Automation' },
    { name: 'Google Sheets', category: 'Data' },
  ];

  const TESTIMONIALS = [
    { quote: 'We reduced our call center costs by 85% while increasing appointment bookings by 40%. The AI speaks Hindi and English so naturally — our customers genuinely cannot tell it\'s not human!', name: 'Rajesh Kumar', title: 'CEO, PropVision Realty', city: 'Mumbai', rating: 5 },
    { quote: 'Our dental clinic now books appointments 24/7. Patients love that they can schedule at midnight. No-shows dropped by 60% because the AI sends reminder calls automatically.', name: 'Dr. Priya Sharma', title: 'Owner, SmileCare Dental', city: 'Bangalore', rating: 5 },
    { quote: 'The Google Calendar integration was seamless. Our sales team now focuses on closing deals instead of making cold calls. RapidX handles 200+ calls daily for us.', name: 'Amit Patel', title: 'Founder, EduTech Academy', city: 'Ahmedabad', rating: 5 },
    { quote: 'We tested RapidX against our top 3 human agents. The AI had a higher booking rate and zero sick days. The ROI was clear within the first month.', name: 'Sneha Reddy', title: 'VP Sales, UrbanNest Properties', city: 'Hyderabad', rating: 5 },
  ];

  return (
    <main>
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema]} />

      {/* ═══ HERO ═══════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-700/50 border border-blue-500 rounded-full px-4 py-1.5 mb-6 text-sm font-medium">
            <span className="animate-pulse w-2 h-2 rounded-full bg-green-400 inline-block" />
            500 Free Trial Calls — No Credit Card Required
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            India&apos;s #1 AI-Powered<br />
            <span className="text-yellow-400">Outbound Voice Call Center</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-4">
            Replace your manual call center with an AI that speaks <strong className="text-white">10 Indian languages</strong>, works <strong className="text-white">24/7 without breaks</strong>, books appointments automatically, and costs{' '}
            <strong className="text-yellow-300">91% less than human agents</strong>.
          </p>
          <p className="text-sm text-blue-300 mb-10">
            Powered by LiveKit WebRTC · Sarvam AI STT/TTS · Groq LLM · Vobiz SIP · Supabase
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`${RAPIDX_URL}/register`} className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors text-lg shadow-lg">
              Start Free Trial — 500 Calls Free →
            </a>
            <Link href="/contact" className="px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors text-lg">
              Talk to Sales
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { val: '91%', label: 'Cost Reduction vs Manual' },
              { val: '1,000+', label: 'Concurrent Calls' },
              { val: '10', label: 'Indian Languages' },
              { val: '24/7', label: 'Automated Operation' },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-extrabold text-yellow-400">{s.val}</div>
                <div className="text-blue-200 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DEFINITION BOX — AEO Optimization ═════════════════════════ */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-600">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is an AI Voice Call Center?</h2>
              <p className="text-gray-700 leading-relaxed">
                An <strong>AI voice call center</strong> is a cloud-based platform that uses artificial intelligence — specifically speech recognition (STT), large language models (LLMs), and text-to-speech (TTS) — to automate outbound and inbound phone calls. Unlike traditional IVR systems that follow rigid menus, AI voice agents have natural, context-aware conversations: they understand intent, handle objections, answer questions, and book appointments — all without human intervention. <strong>RapidX AI</strong> is India&apos;s first AI call center platform purpose-built for Indian languages, accents, and business workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ KEY TAKEAWAYS — Featured Snippet / AEO ════════════════════ */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">✓</span>
                Key Takeaways — RapidX AI Voice Call Center
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  '91% cheaper than manual call centers (₹1.22L vs ₹14.5L/month)',
                  '10 Indian languages with auto-detection',
                  '24/7 operation — 1,000+ concurrent calls',
                  'Automatic appointment booking via Google Calendar / Cal.com',
                  'Plans from ₹49,999/month or ₹2.50/call',
                  'Real-time analytics, recordings & sentiment analysis',
                  'Seamless human handoff for complex queries',
                  'TRAI-compliant: DND scrubbing, calling-hours enforcement',
                ].map((item) => (
                  <li key={item} className="flex items-start text-gray-700 text-sm">
                    <span className="text-green-600 mr-2 mt-0.5 font-bold">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS — Step-by-Step Process ═══════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">How RapidX AI Works</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">From lead upload to booked appointment — fully automated in 4 simple steps.</p>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {HOW_IT_WORKS.map((s) => (
              <div key={s.step} className="flex gap-4 bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold">{s.step}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COST COMPARISON ═══════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">The Real Cost of Manual Call Centers</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">Side-by-side comparison: 20 human agents vs RapidX AI handling 10,000 calls/month.</p>
          <div className="overflow-x-auto max-w-4xl mx-auto">
            <table className="w-full bg-white rounded-2xl shadow-md overflow-hidden">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Cost Component</th>
                  <th className="px-6 py-4 text-right">Manual (20 agents)</th>
                  <th className="px-6 py-4 text-right bg-blue-700">RapidX AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Personnel (salaries + benefits)', '₹9,50,000', '₹0'],
                  ['Office Infrastructure & IT', '₹1,50,000', '₹15,000'],
                  ['SIP Trunk / Telephony (Vobiz)', '₹50,000', '₹50,000'],
                  ['AI / LLM API Costs', '₹0', '₹25,000'],
                  ['Notifications (Telegram + WhatsApp)', '₹0', '₹2,000'],
                  ['Management & Training', '₹3,00,000', '₹30,000'],
                ].map(([label, manual, ai]) => (
                  <tr key={label} className="hover:bg-gray-50">
                    <td className="px-6 py-3 text-gray-700 text-sm">{label}</td>
                    <td className="px-6 py-3 text-right text-red-600 font-medium">{manual}</td>
                    <td className="px-6 py-3 text-right text-green-600 font-semibold bg-blue-50">{ai}</td>
                  </tr>
                ))}
                <tr className="bg-gray-900 text-white font-bold">
                  <td className="px-6 py-4">Total Monthly Cost</td>
                  <td className="px-6 py-4 text-right text-red-300">₹14,50,000</td>
                  <td className="px-6 py-4 text-right text-green-300 bg-blue-800">₹1,22,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-6">
            <p className="text-green-700 font-bold text-lg">Annual Savings: ₹1,59,36,000 (91.6% reduction)</p>
            <p className="text-gray-500 text-sm mt-1">Calculation based on average BPO costs in tier-1 Indian cities (2026 rates)</p>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">What Makes RapidX AI Different</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Every feature built specifically for Indian businesses, Indian languages, and Indian customers.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRY USE CASES (expanded) ════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Built for Every Industry</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">RapidX AI adapts its conversation style, language, and script to your specific industry vertical.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {USE_CASES.map((u) => (
              <div key={u.industry} className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow border border-gray-100">
                <div className="text-4xl mb-3">{u.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{u.industry}</h3>
                <p className="text-sm text-gray-600 mb-2">{u.use}</p>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">{u.detail}</p>
                <div className="text-xs font-semibold text-green-700 bg-green-50 rounded-full px-3 py-1 inline-block">{u.roi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING ══════════════════════════════════════════════════ */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Simple, Transparent Pricing</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">No hidden fees. All plans include all 10 languages, analytics, Telegram notifications, and DND compliance.</p>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {PRICING.map((p) => (
              <div key={p.name} className={`relative rounded-2xl p-6 flex flex-col ${p.highlight ? 'bg-blue-700 text-white shadow-2xl scale-105' : 'bg-white text-gray-900 shadow-md'}`}>
                {p.badge && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">{p.badge}</span>}
                <h3 className={`text-xl font-bold mb-1 ${p.highlight ? 'text-white' : 'text-gray-900'}`}>{p.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className={`text-4xl font-extrabold ${p.highlight ? 'text-yellow-300' : 'text-blue-700'}`}>{p.price}</span>
                  <span className={`text-sm mb-1 ${p.highlight ? 'text-blue-200' : 'text-gray-500'}`}>{p.period}</span>
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm">
                      <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${p.highlight ? 'text-yellow-300' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      <span className={p.highlight ? 'text-blue-100' : 'text-gray-600'}>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a href={`${RAPIDX_URL}/register?plan=${p.plan}`} className={`block text-center py-3 rounded-xl font-semibold transition-colors ${p.highlight ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' : 'bg-blue-700 text-white hover:bg-blue-800'}`}>Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TECHNOLOGY STACK ═════════════════════════════════════════ */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">Enterprise-Grade Technology Stack</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Built on India&apos;s best AI and telephony infrastructure — not generic chatbot APIs.</p>
          <div className="overflow-x-auto max-w-4xl mx-auto">
            <table className="w-full rounded-xl overflow-hidden">
              <thead><tr className="bg-blue-800"><th className="px-5 py-3 text-left text-sm font-semibold text-blue-200">Component</th><th className="px-5 py-3 text-left text-sm font-semibold text-blue-200">Technology</th><th className="px-5 py-3 text-left text-sm font-semibold text-blue-200">Capability</th></tr></thead>
              <tbody className="divide-y divide-gray-700">
                {TECH_STACK.map((t) => (
                  <tr key={t.component} className="bg-gray-800 hover:bg-gray-750">
                    <td className="px-5 py-3 text-sm font-medium text-white">{t.component}</td>
                    <td className="px-5 py-3 text-sm text-yellow-300 font-semibold">{t.tech}</td>
                    <td className="px-5 py-3 text-sm text-gray-300">{t.capability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ INTEGRATION ECOSYSTEM ════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Integrates With Your Existing Tools</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">RapidX AI plugs into your calendar, CRM, and notification tools — zero data silos.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {INTEGRATIONS.map((i) => (
              <div key={i.name} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center hover:shadow-md hover:border-blue-300 transition-all">
                <div className="font-semibold text-gray-900 text-sm">{i.name}</div>
                <div className="text-xs text-blue-600 mt-1">{i.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RapidX vs ALTERNATIVES — GEO Comparison ═════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">RapidX AI vs Traditional Alternatives</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">See how AI voice calling compares to manual agents, IVR systems, and chatbots.</p>
          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full bg-white rounded-2xl shadow-md overflow-hidden text-sm">
              <thead><tr className="bg-gray-900 text-white">
                <th className="px-4 py-3 text-left">Feature</th>
                <th className="px-4 py-3 text-center">Manual Agents</th>
                <th className="px-4 py-3 text-center">IVR / Robocall</th>
                <th className="px-4 py-3 text-center">Text Chatbots</th>
                <th className="px-4 py-3 text-center bg-blue-700">RapidX AI</th>
              </tr></thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Natural Conversation', '✅', '❌ Rigid menus', '❌ Text only', '✅ Voice AI'],
                  ['Indian Languages (10)', '⚠️ Costly to hire', '❌ English only', '⚠️ Limited', '✅ All 10'],
                  ['24/7 Availability', '❌ Shifts only', '✅', '✅', '✅'],
                  ['Appointment Booking', '✅ Manual', '❌', '⚠️ Basic', '✅ Automatic'],
                  ['Cost per 10K calls/mo', '₹14,50,000', '₹80,000', 'N/A (text)', '₹1,22,000'],
                  ['Sentiment Analysis', '❌', '❌', '⚠️ Basic', '✅ Real-time'],
                  ['Scales Instantly', '❌ Hiring lag', '✅', '✅', '✅ 1000+ concurrent'],
                  ['Human Handoff', '✅ Already human', '❌', '⚠️', '✅ Warm transfer'],
                ].map(([feature, manual, ivr, chatbot, rapidx]) => (
                  <tr key={feature}>
                    <td className="px-4 py-2 font-medium text-gray-800">{feature}</td>
                    <td className="px-4 py-2 text-center">{manual}</td>
                    <td className="px-4 py-2 text-center">{ivr}</td>
                    <td className="px-4 py-2 text-center">{chatbot}</td>
                    <td className="px-4 py-2 text-center font-semibold bg-blue-50 text-blue-800">{rapidx}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <div className="flex gap-1 mb-3">{Array.from({ length: t.rating }).map((_, i) => <span key={i} className="text-yellow-500 text-lg">★</span>)}</div>
                <p className="text-gray-700 italic mb-5 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-blue-600">{t.title}</div>
                  <div className="text-xs text-gray-500">{t.city}, India</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          <FAQSection faqs={faqs} />
        </div>
      </section>

      {/* ═══ RELATED SERVICES — Internal Links for SEO ═══════════════ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Related AI Services by EifaSoft</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Explore our full range of AI and automation solutions.</p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { label: 'AI Services', href: '/ai-services', desc: 'ML, NLP, Computer Vision, and AI consulting' },
              { label: 'Custom AI Models', href: '/custom-ai-models', desc: 'Model training, fine-tuning & deployment' },
              { label: 'AI Agent Ecosystems', href: '/ai-agent-ecosystems', desc: 'Multi-agent systems & orchestration' },
              { label: 'Generative AI', href: '/generative-ai-solutions', desc: 'GPT integration, LLMs, RAG systems' },
              { label: 'Intelligent Automation', href: '/intelligent-automation', desc: 'RPA + AI for process automation' },
              { label: 'NLP Solutions', href: '/nlp-solutions', desc: 'Chatbots, sentiment & text classification' },
              { label: 'Digital Marketing', href: '/digital-marketing-services', desc: 'SEO, PPC, social media marketing' },
              { label: 'AI Consulting', href: '/ai-consulting', desc: 'AI strategy & implementation guidance' },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-blue-300 transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 text-sm">{s.label}</h3>
                <p className="text-xs text-gray-500">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Transform Your Call Center?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">500 free calls to test on real leads. No credit card. Your AI agent is live in 3–4 weeks.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`${RAPIDX_URL}/register`} className="px-10 py-4 bg-yellow-400 text-gray-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors text-lg shadow-xl">Start Free Trial — 500 Free Calls</a>
            <Link href="/contact" className="px-10 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors text-lg">Talk to Our Team</Link>
          </div>
          <p className="mt-6 text-blue-300 text-sm">
            Questions? Call <a href="tel:+919675012345" className="underline hover:text-white">+91 9675 012345</a> or email <a href="mailto:sales@eifasoft.com" className="underline hover:text-white">sales@eifasoft.com</a>
          </p>
        </div>
      </section>

      {/* ═══ CONTACT FORM — Lead Capture ═════════════════════════════ */}
      <ContactForm />
    </main>
  );
}
