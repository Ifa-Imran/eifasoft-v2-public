import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Terms of Service | EifaSoft Technologies',
    description: 'Terms of Service for EifaSoft Technologies. Review our terms and conditions for using our software development services, website, and products.',
    canonical: '/terms-of-service',
    keywords: ['terms of service', 'terms and conditions', 'user agreement', 'service terms', 'legal terms'],
  });
}

export default function TermsOfServicePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Terms of Service', url: '/terms-of-service' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[breadcrumbSchema]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-purple-100">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-purple-200 mt-4">
              Last Updated: January 21, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) 
                and EifaSoft Technologies Private Limited (&quot;EifaSoft,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) concerning your access to and use of 
                our website, services, and products.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By accessing our website at <Link href="/" className="text-blue-600 hover:underline">www.eifasoft.com</Link> or engaging our services, 
                you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access our services.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Services</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">1.1 Service Offerings</h3>
              <p className="text-gray-700 mb-4">EifaSoft provides the following services:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Custom software development and programming</li>
                <li>Mobile application development (iOS, Android, cross-platform)</li>
                <li>Website design and development</li>
                <li>MLM (Multi-Level Marketing) software solutions</li>
                <li>E-commerce platform development</li>
                <li>Blockchain and cryptocurrency solutions</li>
                <li>AI and machine learning services</li>
                <li>Digital marketing services</li>
                <li>Software maintenance and support</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">1.2 Service Scope</h3>
              <p className="text-gray-700 mb-4">
                The specific scope, deliverables, timelines, and fees for each project will be detailed in a separate 
                Statement of Work (SOW) or Service Agreement signed by both parties.
              </p>
            </div>

            {/* Client Responsibilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Client Responsibilities</h2>
              <p className="text-gray-700 mb-4">As a client, you agree to:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Provide accurate and complete information regarding project requirements</li>
                <li>Provide timely feedback and approvals at project milestones</li>
                <li>Make timely payments as per the agreed payment schedule</li>
                <li>Provide necessary access to systems, data, and resources as required</li>
                <li>Ensure you have legal rights to all materials provided to us</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use our services for any unlawful or prohibited purposes</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Payment Terms</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">3.1 Fees and Pricing</h3>
              <p className="text-gray-700 mb-4">
                Service fees will be specified in the project proposal or Service Agreement. All prices are in Indian Rupees (INR) 
                unless otherwise stated.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">3.2 Payment Schedule</h3>
              <p className="text-gray-700 mb-4">Standard payment schedule (unless otherwise agreed):</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Initial Payment:</strong> 30-50% upon project commencement</li>
                <li><strong>Milestone Payments:</strong> As specified in the SOW</li>
                <li><strong>Final Payment:</strong> Balance amount upon project completion</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">3.3 Late Payments</h3>
              <p className="text-gray-700 mb-4">
                Invoices are due within 7 days of issuance unless otherwise specified. Late payments may incur a late fee of 2% per month. 
                We reserve the right to suspend services for accounts with overdue payments.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">3.4 Taxes</h3>
              <p className="text-gray-700 mb-4">
                All fees are exclusive of applicable taxes (GST, service tax, etc.). Clients are responsible for paying all applicable taxes.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Intellectual Property Rights</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">4.1 Ownership of Deliverables</h3>
              <p className="text-gray-700 mb-4">
                Upon receipt of full payment, all intellectual property rights in custom-developed deliverables (code, designs, documentation) 
                will be transferred to the Client, except for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Pre-existing proprietary frameworks and tools owned by EifaSoft</li>
                <li>Third-party libraries and open-source components</li>
                <li>Generic methodologies and development processes</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">4.2 Retention of Rights</h3>
              <p className="text-gray-700 mb-4">
                EifaSoft retains the right to use generic concepts, methodologies, and non-proprietary techniques developed during the project 
                for other clients and projects.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">4.3 Portfolio Rights</h3>
              <p className="text-gray-700 mb-4">
                Unless expressly prohibited in writing, EifaSoft may showcase completed projects in its portfolio, marketing materials, 
                and case studies.
              </p>
            </div>

            {/* Confidentiality */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                Both parties agree to maintain confidentiality of all proprietary and sensitive information exchanged during the engagement. 
                This includes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Business plans and strategies</li>
                <li>Technical specifications and source code</li>
                <li>Financial information</li>
                <li>User data and customer information</li>
                <li>Trade secrets and proprietary processes</li>
              </ul>
              <p className="text-gray-700">
                Confidential information must not be disclosed to third parties without prior written consent, except as required by law.
              </p>
            </div>

            {/* Warranties and Disclaimers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Warranties and Disclaimers</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">6.1 Service Warranties</h3>
              <p className="text-gray-700 mb-4">We warrant that:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Services will be performed in a professional and workmanlike manner</li>
                <li>Deliverables will substantially conform to agreed specifications</li>
                <li>We have the right and authority to provide the services</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">6.2 Warranty Period</h3>
              <p className="text-gray-700 mb-4">
                Software deliverables include a 90-day warranty period for bug fixes. This warranty covers defects in workmanship, 
                not changes in requirements or enhancements.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">6.3 Disclaimers</h3>
              <p className="text-gray-700 mb-4 font-semibold">
                EXCEPT AS EXPRESSLY PROVIDED, SERVICES ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, 
                INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>EifaSoft&apos;s total liability shall not exceed the total fees paid for the specific project</li>
                <li>We are not liable for indirect, incidental, special, or consequential damages</li>
                <li>We are not responsible for losses due to business interruption, lost profits, or data loss</li>
                <li>Claims must be brought within one year of the cause of action arising</li>
              </ul>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Indemnification</h2>
              <p className="text-gray-700 mb-4">
                Client agrees to indemnify and hold harmless EifaSoft from any claims, damages, or expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Client&apos;s use of deliverables in violation of applicable laws</li>
                <li>Client-provided content, materials, or specifications</li>
                <li>Breach of these Terms by the Client</li>
                <li>Infringement of third-party rights by Client-provided materials</li>
              </ul>
            </div>

            {/* Project Changes */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Changes and Modifications</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">9.1 Scope Changes</h3>
              <p className="text-gray-700 mb-4">
                Any changes to project scope, timeline, or deliverables must be documented in a written Change Request and approved by both parties. 
                Additional fees may apply for scope changes.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">9.2 Terms Updates</h3>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. Continued use of services after changes constitutes acceptance of the new terms.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Termination</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">10.1 Termination for Convenience</h3>
              <p className="text-gray-700 mb-4">
                Either party may terminate the engagement with 30 days&apos; written notice. Client will be responsible for payment for all 
                work completed up to the termination date.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">10.2 Termination for Cause</h3>
              <p className="text-gray-700 mb-4">
                Either party may terminate immediately if the other party:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Materially breaches these Terms and fails to cure within 15 days of notice</li>
                <li>Becomes insolvent or files for bankruptcy</li>
                <li>Engages in fraudulent or illegal activities</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">10.3 Effect of Termination</h3>
              <p className="text-gray-700 mb-4">
                Upon termination, Client must pay all outstanding invoices. EifaSoft will deliver all completed work. 
                Provisions regarding confidentiality, intellectual property, and liability survive termination.
              </p>
            </div>

            {/* Support and Maintenance */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Support and Maintenance</h2>
              <p className="text-gray-700 mb-4">
                Post-launch support and maintenance services are available under separate agreements. Standard support includes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Bug fixes and technical support</li>
                <li>Security updates and patches</li>
                <li>Performance monitoring and optimization</li>
                <li>Feature enhancements (as agreed)</li>
              </ul>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Dispute Resolution</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">12.1 Negotiation</h3>
              <p className="text-gray-700 mb-4">
                In the event of any dispute, the parties will first attempt to resolve the matter through good-faith negotiation.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">12.2 Arbitration</h3>
              <p className="text-gray-700 mb-4">
                If negotiation fails, disputes will be resolved through binding arbitration in Moradabad, Uttar Pradesh, India, 
                in accordance with the Arbitration and Conciliation Act, 1996.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">12.3 Governing Law</h3>
              <p className="text-gray-700 mb-4">
                These Terms are governed by the laws of India. Courts in Moradabad, Uttar Pradesh shall have exclusive jurisdiction.
              </p>
            </div>

            {/* Miscellaneous */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">13. Miscellaneous</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">13.1 Entire Agreement</h3>
              <p className="text-gray-700 mb-4">
                These Terms, together with any SOW or Service Agreement, constitute the entire agreement between the parties.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">13.2 Severability</h3>
              <p className="text-gray-700 mb-4">
                If any provision is found to be unenforceable, the remaining provisions will continue in full force.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">13.3 Force Majeure</h3>
              <p className="text-gray-700 mb-4">
                Neither party is liable for failure to perform due to circumstances beyond reasonable control (natural disasters, war, 
                strikes, government actions, pandemics, etc.).
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">13.4 Assignment</h3>
              <p className="text-gray-700 mb-4">
                Client may not assign these Terms without our prior written consent. We may assign to affiliates or in connection 
                with a merger or sale.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-900 font-semibold mb-2">EifaSoft Technologies Private Limited</p>
                <p className="text-gray-700">Email: <a href="mailto:legal@eifasoft.com" className="text-blue-600 hover:underline">legal@eifasoft.com</a></p>
                <p className="text-gray-700">Phone: <a href="tel:+919675012345" className="text-blue-600 hover:underline">+91 9675 012345</a></p>
                <p className="text-gray-700">Address: HIG A-20, Ekta Vihar Colony, Rampur Road</p>
                <p className="text-gray-700">Moradabad, Uttar Pradesh 244001, India</p>
              </div>
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
              <Link href="/privacy-policy" className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow text-center">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-bold text-gray-900 mb-2">Privacy Policy</h3>
                <p className="text-gray-600 text-sm">How we protect your data</p>
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
