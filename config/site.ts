import { CompanyInfo } from '@/types';

export const COMPANY_INFO: CompanyInfo = {
  name: 'EifaSoft Technologies',
  legalName: 'EifaSoft Technologies Private Limited',
  logo: '/images/logo.svg',
  phone: '+91 8077626981',
  email: 'info@eifasoft.com',
  address: {
    street: 'HIG A-20, Ekta Vihar Colony, Rampur Road',
    city: 'Moradabad',
    state: 'Uttar Pradesh',
    postalCode: '244001',
    country: 'India',
  },
  coordinates: {
    latitude: 28.8399011,
    longitude: 78.8281035,
  },
  socialMedia: {
    facebook: 'https://www.facebook.com/eifasoft',
    twitter: 'https://twitter.com/eifasoft',
    linkedin: 'https://www.linkedin.com/company/eifasoft',
    instagram: 'https://www.instagram.com/eifasoft',
    whatsapp: 'https://wa.me/918077626981',
  },
  establishedYear: 2012,
  employees: '50-100',
};

export const SITE_CONFIG = {
  name: 'EifaSoft Technologies',
  tagline: 'Transforming Ideas into Digital Reality',
  description:
    'Leading software development company offering web design, mobile apps, blockchain, DApp, Flutter, MLM software, and digital marketing services across India.',
  url: 'https://www.eifasoft.com',
  defaultImage: '/images/logo.png',
  twitterHandle: '@eifasoft',
  locale: 'en_IN',
  alternateLocales: ['hi_IN'],
};

export const NAVIGATION = {
  main: [
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About Us', href: '/who-we-are' },
    { label: 'Blog', href: '/blogs' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Website Development', href: '/website-designing-and-development-company' },
    { label: 'Mobile App Development', href: '/mobile-app-development-company' },
    { label: 'AI Services', href: '/ai-services' },
    { label: 'Custom AI Models', href: '/custom-ai-models' },
    { label: 'AI Agent Ecosystems', href: '/ai-agent-ecosystems' },
    { label: 'RapidX AI Call Center', href: '/rapidx-ai-call-center' },
    { label: 'Blockchain Development', href: '/blockchain-development-company' },
    { label: 'DApp Development', href: '/dapp-development-company' },
    { label: 'Flutter Development', href: '/flutter-app-development-company' },
    { label: 'MLM Software', href: '/mlm-software-development-company' },
    { label: 'Digital Marketing', href: '/digital-marketing-services' },
    { label: 'E-Commerce Development', href: '/e-commerce-development-company' },
    { label: 'Accounting Software', href: '/accounting-software' },
    { label: 'Coaching Institute ERP', href: '/coaching-institute-management-software' },
    { label: 'Hospital Management HMS', href: '/hospital-management-software' },
    { label: 'API Development', href: '/api-development-services' },
    { label: 'DevOps & Cloud', href: '/devops-cloud-services' },
    { label: 'IT Consulting', href: '/it-consulting' },
    { label: 'Software Maintenance', href: '/software-maintenance-support' },
  ],
  mlmTools: [
    { label: 'MLM Plan Comparison', href: '/mlm-plan-comparison' },
    { label: 'Pricing Calculator', href: '/mlm-pricing-calculator' },
    { label: 'ROI Estimator', href: '/mlm-roi-estimator' },
  ],
  aiServices: [
    { label: 'AI Services', href: '/ai-services' },
    { label: 'Custom AI Models', href: '/custom-ai-models' },
    { label: 'AI Agent Ecosystems', href: '/ai-agent-ecosystems' },
  ],
  blockchainServices: [
    { label: 'Smart Contract Development', href: '/smart-contract-development' },
    { label: 'DApp Development', href: '/dapp-development-company' },
    { label: 'Token Development', href: '/token-development-services' },
    { label: 'DeFi Solutions', href: '/defi-solutions' },
    { label: 'NFT Marketplace', href: '/nft-marketplace-development' },
    { label: 'Blockchain Consulting', href: '/blockchain-consulting' },
  ],
  company: [
    { label: 'Who We Are', href: '/who-we-are' },
    { label: 'Our Aim', href: '/our-aim' },
    { label: 'How We Work', href: '/how-we-work' },
    { label: 'Careers', href: '/careers' },
    { label: 'Testimonials', href: '/testimonials' },
  ],
};

export const PERFORMANCE_CONFIG = {
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  formats: ['image/webp', 'image/avif'],
  quality: 85,
};
