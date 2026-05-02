import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Privacy Policy | EifaSoft Technologies',
    description: 'EifaSoft Technologies privacy policy. Learn how we collect, use, protect, and manage your personal information in compliance with GDPR and Indian data protection laws.',
    canonical: '/privacy-policy',
    keywords: ['privacy policy', 'data protection', 'GDPR compliance', 'personal information', 'data privacy'],
  });
}

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[breadcrumbSchema]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-100">
              Your privacy is important to us. Learn how we protect your data.
            </p>
            <p className="text-sm text-blue-200 mt-4">
              Last Updated: January 21, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                EifaSoft Technologies Private Limited (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                website <Link href="/" className="text-blue-600 hover:underline">www.eifasoft.com</Link>, use our services, 
                or interact with us.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By using our website and services, you agree to the collection and use of information in accordance with this policy. 
                If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">1.1 Personal Information</h3>
              <p className="text-gray-700 mb-4">We may collect personal information that you voluntarily provide to us, including:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Company name and job title</li>
                <li>Business requirements and project details</li>
                <li>Payment and billing information</li>
                <li>Professional qualifications (for job applications)</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">1.2 Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">When you visit our website, we automatically collect certain information:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Clickstream data and interaction patterns</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">1.3 Cookies and Tracking Technologies</h3>
              <p className="text-gray-700 mb-4">
                We use cookies, web beacons, and similar tracking technologies to enhance user experience and analyze website traffic. 
                For detailed information, please see our <Link href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link>.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our software development services</li>
                <li><strong>Communication:</strong> To respond to inquiries, send project updates, and provide customer support</li>
                <li><strong>Marketing:</strong> To send newsletters, promotional materials, and service updates (with your consent)</li>
                <li><strong>Business Operations:</strong> To process payments, manage accounts, and fulfill contractual obligations</li>
                <li><strong>Analytics:</strong> To understand user behavior and improve website functionality</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
                <li><strong>Security:</strong> To detect, prevent, and address fraud, security issues, and technical problems</li>
              </ul>
            </div>

            {/* How We Share Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">3. How We Share Your Information</h2>
              <p className="text-gray-700 mb-4">We may share your information in the following circumstances:</p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">3.1 Service Providers</h3>
              <p className="text-gray-700 mb-4">
                We may share your information with third-party service providers who perform services on our behalf, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Payment processors (Razorpay, PayU, Stripe)</li>
                <li>Cloud hosting providers (AWS, Google Cloud, Azure)</li>
                <li>Email service providers</li>
                <li>Analytics platforms (Google Analytics)</li>
                <li>Customer relationship management (CRM) systems</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">3.2 Business Transfers</h3>
              <p className="text-gray-700 mb-4">
                If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">3.3 Legal Requirements</h3>
              <p className="text-gray-700 mb-4">
                We may disclose your information if required by law or in response to valid requests by public authorities 
                (e.g., court orders, government agencies).
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">3.4 With Your Consent</h3>
              <p className="text-gray-700 mb-4">
                We may share your information with third parties when we have your explicit consent to do so.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure server infrastructure with regular security audits</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Regular data backups and disaster recovery procedures</li>
                <li>Employee training on data protection and confidentiality</li>
                <li>Compliance with industry-standard security practices</li>
              </ul>
              <p className="text-gray-700">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to 
                use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                unless a longer retention period is required or permitted by law.
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Active clients:</strong> Duration of business relationship plus 3 years</li>
                <li><strong>Prospective clients:</strong> 2 years from last contact</li>
                <li><strong>Financial records:</strong> 7 years (as per Indian tax laws)</li>
                <li><strong>Marketing data:</strong> Until consent is withdrawn or 2 years of inactivity</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                Under applicable data protection laws (including GDPR and Indian data protection regulations), you have the following rights:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Right to Access:</strong> Request copies of your personal information</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal information</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation of how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another organization</li>
                <li><strong>Right to Object:</strong> Object to processing of your personal information</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where we rely on consent</li>
              </ul>
              <p className="text-gray-700">
                To exercise any of these rights, please contact us at <a href="mailto:privacy@eifasoft.com" className="text-blue-600 hover:underline">privacy@eifasoft.com</a>
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Third-Party Links</h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites and services. We are not responsible for the privacy practices 
                or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-gray-700">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information 
                from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                Your information may be transferred to and maintained on servers located outside of your country of residence. 
                We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy 
                and applicable data protection laws.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Posting the new Privacy Policy on this page</li>
                <li>Updating the &quot;Last Updated&quot; date</li>
                <li>Sending an email notification for significant changes</li>
              </ul>
              <p className="text-gray-700">
                We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-900 font-semibold mb-2">EifaSoft Technologies Private Limited</p>
                <p className="text-gray-700">Email: <a href="mailto:privacy@eifasoft.com" className="text-blue-600 hover:underline">privacy@eifasoft.com</a></p>
                <p className="text-gray-700">Phone: <a href="tel:+919675012345" className="text-blue-600 hover:underline">+91 9675 012345</a></p>
                <p className="text-gray-700">Address: HIG A-20, Ekta Vihar Colony, Rampur Road</p>
                <p className="text-gray-700">Moradabad, Uttar Pradesh 244001, India</p>
                <p className="text-gray-700 mt-2">Data Protection Officer: <a href="mailto:dpo@eifasoft.com" className="text-blue-600 hover:underline">dpo@eifasoft.com</a></p>
              </div>
            </div>

            {/* GDPR Compliance */}
            <div className="mb-12 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">GDPR Compliance Statement</h2>
              <p className="text-gray-700 mb-4">
                EifaSoft Technologies is committed to compliance with the General Data Protection Regulation (GDPR) and other 
                applicable data protection laws. We ensure:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Lawful, fair, and transparent processing of personal data</li>
                <li>Purpose limitation and data minimization</li>
                <li>Accuracy and storage limitation</li>
                <li>Integrity and confidentiality of data</li>
                <li>Accountability and record-keeping</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Policies</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/terms-of-service" className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow text-center">
                <div className="text-3xl mb-3">📜</div>
                <h3 className="font-bold text-gray-900 mb-2">Terms of Service</h3>
                <p className="text-gray-600 text-sm">Read our terms and conditions</p>
              </Link>
              <Link href="/cookie-policy" className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow text-center">
                <div className="text-3xl mb-3">🍪</div>
                <h3 className="font-bold text-gray-900 mb-2">Cookie Policy</h3>
                <p className="text-gray-600 text-sm">Learn about our cookie usage</p>
              </Link>
              <Link href="/refund-policy" className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow text-center">
                <div className="text-3xl mb-3">💳</div>
                <h3 className="font-bold text-gray-900 mb-2">Refund Policy</h3>
                <p className="text-gray-600 text-sm">Our refund and cancellation terms</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
