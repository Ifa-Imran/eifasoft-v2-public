'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO, NAVIGATION } from '@/config/site';

const MEGA_MENU_CATEGORIES = [
  {
    title: 'Web & Mobile',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      { label: 'Website Development', href: '/website-designing-and-development-company' },
      { label: 'Mobile App Development', href: '/mobile-app-development-company' },
      { label: 'Software Development', href: '/software-development-company' },
      { label: 'Flutter Development', href: '/flutter-app-development-company' },
      { label: 'E-Commerce Development', href: '/e-commerce-development-company' },
      { label: 'API Development', href: '/api-development-services' },
      { label: 'Node.js Development', href: '/nodejs-development-services' },
      { label: 'React Native Development', href: '/react-native-development-services' },
      { label: 'Python Development', href: '/python-development-services' },
      { label: '.NET Development', href: '/dotnet-development-services' },
      { label: 'PHP/Laravel Development', href: '/php-laravel-development-services' },
      { label: 'MERN Stack Development', href: '/mern-stack-development-services' },
    ],
  },
  {
    title: 'AI & Intelligence',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    items: [
      { label: 'AI Services', href: '/ai-services' },
      { label: 'Generative AI Solutions', href: '/generative-ai-solutions' },
      { label: 'AI Consulting & Strategy', href: '/ai-consulting' },
      { label: 'Intelligent Automation', href: '/intelligent-automation' },
      { label: 'MLOps & AI Infrastructure', href: '/mlops-services' },
      { label: 'NLP Solutions', href: '/nlp-solutions' },
      { label: 'Computer Vision', href: '/computer-vision' },
      { label: 'Predictive Analytics', href: '/predictive-analytics' },
      { label: 'Custom AI Models', href: '/custom-ai-models' },
      { label: 'AI Agent Ecosystems', href: '/ai-agent-ecosystems' },
      { label: 'RapidX AI Call Center', href: '/rapidx-ai-call-center' },
    ],
  },
  {
    title: 'Blockchain & Web3',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    items: [
      { label: 'Blockchain Development', href: '/blockchain-development-company' },
      { label: 'DApp Development', href: '/dapp-development-company' },
      { label: 'Smart Contracts', href: '/smart-contract-development' },
      { label: 'Token Development', href: '/token-development-services' },
      { label: 'DeFi Solutions', href: '/defi-solutions' },
      { label: 'NFT Marketplace', href: '/nft-marketplace-development' },
      { label: 'Crypto Exchange', href: '/crypto-currency-exchange-development-company' },
      { label: 'Crypto MLM', href: '/cryptocurrency-mlm-software' },
      { label: 'Smart Contract MLM', href: '/smart-contract-mlm-software' },
      { label: 'Web3 Development', href: '/web3-development-services' },
      { label: 'Crypto Wallet', href: '/crypto-wallet-development' },
    ],
  },
  {
    title: 'MLM Software',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      { label: 'MLM Software', href: '/mlm-software-development-company' },
      { label: 'Binary Plan', href: '/binary-plan-mlm-software' },
      { label: 'Matrix Plan', href: '/matrix-plan-mlm-software' },
      { label: 'Unilevel Plan', href: '/unilevel-plan-mlm-software' },
      { label: 'Smart Contract MLM', href: '/smart-contract-mlm-software' },
      { label: 'Crypto MLM', href: '/cryptocurrency-mlm-software' },
    ],
  },
  {
    title: 'Business & Growth',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    items: [
      { label: 'Digital Marketing', href: '/digital-marketing-services' },
      { label: 'School ERP Software', href: '/school-erp-software' },
      { label: 'Accounting Software', href: '/accounting-software' },
      { label: 'Coaching Institute ERP', href: '/coaching-institute-management-software' },
      { label: 'Hospital Management HMS', href: '/hospital-management-software' },
      { label: 'DevOps & Cloud', href: '/devops-cloud-services' },
      { label: 'IT Consulting', href: '/it-consulting' },
      { label: 'Software Maintenance', href: '/software-maintenance-support' },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMenuEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaMenuOpen(true);
  };

  const handleMenuLeave = () => {
    closeTimer.current = setTimeout(() => setMegaMenuOpen(false), 300);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 relative">
      {/* Mega Menu Panel — full-width, anchored to header bottom */}
      {megaMenuOpen && (
        <div
          className="absolute left-0 right-0 top-full bg-white shadow-2xl border-t-2 border-blue-600 z-40"
          onMouseEnter={handleMenuEnter}
          onMouseLeave={handleMenuLeave}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
              {MEGA_MENU_CATEGORIES.map((category) => (
                <div key={category.title}>
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                    <span className="text-blue-600">{category.icon}</span>
                    <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-0.5">
                    {category.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-600 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                          onClick={() => setMegaMenuOpen(false)}
                        >
                          <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors flex-shrink-0" />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-gray-500">Not sure which service fits your needs?</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors font-medium"
                onClick={() => setMegaMenuOpen(false)}
              >
                Talk to Our Experts
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="EifaSoft Technologies Logo"
              width={180}
              height={60}
              className="w-auto h-10 md:h-14"
              sizes="(max-width: 768px) 120px, 168px"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {/* Services Mega Menu Trigger */}
            <div
              onMouseEnter={handleMenuEnter}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`flex items-center gap-1 font-medium transition-colors ${
                  megaMenuOpen ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    megaMenuOpen ? 'rotate-180' : ''
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l4.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {NAVIGATION.main.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile / Tablet Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              {mobileMenuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile / Tablet Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white max-h-[80vh] overflow-y-auto">
            <div className="py-3">
              <Link
                href="/"
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <span>Services</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServicesOpen ? 'rotate-180' : ''
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {mobileServicesOpen && (
                  <div className="bg-gray-50 border-y border-gray-100">
                    {MEGA_MENU_CATEGORIES.map((category) => (
                      <div key={category.title} className="px-4 py-3">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-blue-600">{category.icon}</span>
                          <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
                            {category.title}
                          </h4>
                        </div>
                        <div className="grid grid-cols-2 gap-1 pl-2">
                          {category.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center gap-1.5 py-1.5 px-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white rounded-md transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileServicesOpen(false);
                              }}
                            >
                              <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {NAVIGATION.main.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="px-4 py-3">
                <Link
                  href="/contact"
                  className="block w-full py-3 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mega menu backdrop */}
      {megaMenuOpen && (
        <div
          className="fixed inset-0 -z-10"
          onClick={() => setMegaMenuOpen(false)}
        />
      )}

      {/* Contact Info Bar */}
      <div className="bg-blue-50 border-t" onMouseEnter={megaMenuOpen ? handleMenuEnter : undefined}>
        <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-4 text-sm">
          <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {COMPANY_INFO.phone}
          </a>
          <a href={COMPANY_INFO.socialMedia.whatsapp} target="_blank" rel='noopener noreferrer' className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors">
            <span className="text-lg">💬</span>
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
