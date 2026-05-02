import Link from 'next/link';
import { COMPANY_INFO, NAVIGATION, SITE_CONFIG } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-8 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">EifaSoft Technologies</h3>
            <p className="text-sm mb-4">{SITE_CONFIG.description}</p>
            <div className="flex gap-4">
              {COMPANY_INFO.socialMedia.facebook && (
                <a
                  href={COMPANY_INFO.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}
              {COMPANY_INFO.socialMedia.linkedin && (
                <a
                  href={COMPANY_INFO.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
              {COMPANY_INFO.socialMedia.twitter && (
                <a
                  href={COMPANY_INFO.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAVIGATION.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Core Services</h4>
            <ul className="space-y-2">
              {NAVIGATION.services.slice(0, 5).map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-sm hover:text-white transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">More Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/api-development-services" className="text-sm hover:text-white transition-colors">
                  API Development
                </Link>
              </li>
              <li>
                <Link href="/devops-cloud-services" className="text-sm hover:text-white transition-colors">
                  DevOps & Cloud
                </Link>
              </li>
              <li>
                <Link href="/it-consulting" className="text-sm hover:text-white transition-colors">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link href="/software-maintenance-support" className="text-sm hover:text-white transition-colors">
                  Maintenance & Support
                </Link>
              </li>
              <li>
                <Link href="/mlm-plan-comparison" className="text-sm hover:text-white transition-colors">
                  MLM Plan Comparison
                </Link>
              </li>
            </ul>
          </div>

          {/* Blockchain Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Blockchain</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/smart-contract-development" className="text-sm hover:text-white transition-colors">
                  Smart Contracts
                </Link>
              </li>
              <li>
                <Link href="/dapp-development-company" className="text-sm hover:text-white transition-colors">
                  DApp Development
                </Link>
              </li>
              <li>
                <Link href="/token-development-services" className="text-sm hover:text-white transition-colors">
                  Token Development
                </Link>
              </li>
              <li>
                <Link href="/defi-solutions" className="text-sm hover:text-white transition-colors">
                  DeFi Solutions
                </Link>
              </li>
              <li>
                <Link href="/nft-marketplace-development" className="text-sm hover:text-white transition-colors">
                  NFT Marketplace
                </Link>
              </li>
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">AI Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-services" className="text-sm hover:text-white transition-colors">
                  AI Services
                </Link>
              </li>
              <li>
                <Link href="/custom-ai-models" className="text-sm hover:text-white transition-colors">
                  Custom AI Models
                </Link>
              </li>
              <li>
                <Link href="/ai-agent-ecosystems" className="text-sm hover:text-white transition-colors">
                  AI Agent Ecosystems
                </Link>
              </li>
            </ul>
          </div>

          {/* Cities We Serve */}
          <div>
            <h4 className="text-white font-semibold mb-4">Cities We Serve</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/surat-website-designing-and-development-company" className="text-sm hover:text-white transition-colors">
                  Surat
                </Link>
              </li>
              <li>
                <Link href="/patna-software-development-company" className="text-sm hover:text-white transition-colors">
                  Patna
                </Link>
              </li>
              <li>
                <Link href="/chandigarh-mobile-app-development-company" className="text-sm hover:text-white transition-colors">
                  Chandigarh
                </Link>
              </li>
              <li>
                <Link href="/moradabad-mlm-software-development-company" className="text-sm hover:text-white transition-colors">
                  Moradabad
                </Link>
              </li>
              <li>
                <Link href="/lucknow-website-designing-and-development-company" className="text-sm hover:text-white transition-colors">
                  Lucknow
                </Link>
              </li>
              <li>
                <Link href="/cities" className="text-sm text-blue-400 hover:text-white transition-colors">
                  View All Cities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  {COMPANY_INFO.address.street}<br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}<br />
                  {COMPANY_INFO.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>
              © {currentYear} {COMPANY_INFO.legalName}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/refund-policy" className="hover:text-white transition-colors">
                Refund Policy
              </Link>
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
