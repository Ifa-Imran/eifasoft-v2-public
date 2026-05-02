import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Refund & Cancellation Policy | EifaSoft Technologies',
    description: 'EifaSoft Technologies refund and cancellation policy. Learn about our terms for refunds, cancellations, and payment disputes for software development services.',
    canonical: '/refund-policy',
    keywords: ['refund policy', 'cancellation policy', 'payment terms', 'refund request', 'money back guarantee'],
  });
}

export default function RefundPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Refund Policy', url: '/refund-policy' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[breadcrumbSchema]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund & Cancellation Policy</h1>
            <p className="text-xl text-green-100">
              Our commitment to fair and transparent refund practices
            </p>
            <p className="text-sm text-green-200 mt-4">
              Last Updated: January 21, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Refund Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                At EifaSoft Technologies Private Limited (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we strive to provide high-quality software 
                development services and ensure client satisfaction. This Refund and Cancellation Policy outlines the terms and conditions under which 
                refunds and cancellations are handled for our services.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Please read this policy carefully before engaging our services. By purchasing or subscribing to our services, you agree to this policy.
              </p>
            </div>

            {/* General Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">1. General Refund Policy</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
                <p className="text-gray-800 font-semibold mb-2">Important Notice:</p>
                <p className="text-gray-700">
                  Due to the custom nature of software development services, refunds are evaluated on a case-by-case basis. 
                  All refund requests must be submitted in writing to <a href="mailto:billing@eifasoft.com" className="text-blue-600 hover:underline">billing@eifasoft.com</a>.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">1.1 Eligibility for Refunds</h3>
              <p className="text-gray-700 mb-4">Refunds may be considered in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Failure to deliver agreed-upon services within the stipulated timeline (with exceptions for client-caused delays)</li>
                <li>Deliverables do not substantially match the approved specifications</li>
                <li>Technical issues that cannot be resolved within a reasonable timeframe</li>
                <li>Duplicate payments or billing errors</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">1.2 Non-Refundable Scenarios</h3>
              <p className="text-gray-700 mb-4">Refunds will NOT be provided in the following cases:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Change of mind after project commencement</li>
                <li>Client-provided requirements are incomplete or inaccurate</li>
                <li>Delays caused by client failure to provide timely feedback or approvals</li>
                <li>Work has already been completed as per agreed specifications</li>
                <li>Source code, designs, or intellectual property has been delivered</li>
                <li>Third-party costs (hosting, domains, licenses) already incurred</li>
                <li>Services have been fully rendered and delivered</li>
              </ul>
            </div>

            {/* Service-Specific Refund Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Service-Specific Refund Terms</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">2.1 Custom Software Development</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Initial Payment (30-50%):</strong> Non-refundable once project work has commenced</li>
                  <li><strong>Milestone Payments:</strong> Refundable only if specific milestone deliverables are not met</li>
                  <li><strong>Final Payment:</strong> Non-refundable after project delivery and client acceptance</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Refund Percentage:</strong> Up to 50% of undelivered milestones (excluding work already completed)
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">2.2 MLM Software Solutions</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Ready-made Solutions:</strong> 7-day refund window if software does not function as described</li>
                  <li><strong>Customized MLM Software:</strong> Subject to custom development refund policy</li>
                  <li><strong>License Fees:</strong> Non-refundable once activation keys are provided</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Refund Percentage:</strong> Up to 70% if requested within 7 days and no customization has started
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">2.3 Website Design & Development</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Design Phase:</strong> 50% refund if requested before design approval</li>
                  <li><strong>Development Phase:</strong> Prorated refund based on work completed</li>
                  <li><strong>After Launch:</strong> No refunds (warranty and support apply)</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Refund Percentage:</strong> Varies based on project phase (0-50%)
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">2.4 Mobile App Development</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Prototype/Wireframe Stage:</strong> 40% refund possible</li>
                  <li><strong>Development Stage:</strong> Prorated refund excluding completed work</li>
                  <li><strong>After Store Submission:</strong> No refunds</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Refund Percentage:</strong> 0-40% depending on project stage
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">2.5 Digital Marketing Services</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Monthly Retainers:</strong> Refundable for unrendered services within the month</li>
                  <li><strong>Ad Spend Budget:</strong> Non-refundable (managed on behalf of client)</li>
                  <li><strong>Campaign Setup Fees:</strong> Non-refundable once campaigns are live</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Refund Percentage:</strong> Prorated based on days of service not rendered
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">2.6 Maintenance & Support Plans</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Monthly Plans:</strong> Refundable for unused months with 30-day notice</li>
                  <li><strong>Annual Plans:</strong> Prorated refund for unused months (minus 20% admin fee)</li>
                  <li><strong>Emergency Support:</strong> Non-refundable once services are rendered</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Refund Percentage:</strong> Prorated based on unused subscription period
                </p>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Cancellation Policy</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">3.1 Client-Initiated Cancellation</h3>
              <p className="text-gray-700 mb-4">Clients may cancel projects under the following terms:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Within 48 Hours of Agreement:</strong> Full refund of initial payment (if no work has commenced)</li>
                <li><strong>After 48 Hours:</strong> Client is liable for all work completed plus 25% of remaining contract value</li>
                <li><strong>Mid-Project:</strong> Client must pay for completed milestones and 50% of next milestone</li>
                <li><strong>Near Completion:</strong> Client must pay full contract amount</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">3.2 EifaSoft-Initiated Cancellation</h3>
              <p className="text-gray-700 mb-4">We reserve the right to cancel projects if:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Client fails to make payments as per agreed schedule</li>
                <li>Client does not respond to communication for 30+ days</li>
                <li>Project requirements violate laws or our ethical standards</li>
                <li>Client engages in abusive or threatening behavior</li>
              </ul>
              <p className="text-gray-700 mb-4">
                In such cases, client will receive a prorated refund for work not delivered, minus any outstanding dues.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">3.3 Mutual Cancellation</h3>
              <p className="text-gray-700 mb-4">
                Both parties may mutually agree to cancel a project. Refund terms will be negotiated based on work completed, 
                resources invested, and mutual agreement.
              </p>
            </div>

            {/* Refund Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Refund Request Process</h2>
              
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Step-by-Step Refund Request:</h3>
                <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                  <li><strong>Submit Request:</strong> Email <a href="mailto:billing@eifasoft.com" className="text-blue-600 hover:underline">billing@eifasoft.com</a> with subject &quot;Refund Request - [Project Name/Invoice Number]&quot;</li>
                  <li><strong>Provide Details:</strong> Include invoice number, payment date, reason for refund, and supporting documentation</li>
                  <li><strong>Review Period:</strong> We will review your request within 5-7 business days</li>
                  <li><strong>Communication:</strong> Our team will contact you to discuss the refund claim</li>
                  <li><strong>Resolution:</strong> Approved refunds are processed within 10-15 business days</li>
                  <li><strong>Processing:</strong> Refunds are credited to the original payment method</li>
                </ol>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">4.1 Required Information</h3>
              <p className="text-gray-700 mb-4">Your refund request must include:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Full name and contact information</li>
                <li>Invoice number and payment receipt</li>
                <li>Detailed reason for refund request</li>
                <li>Supporting evidence (screenshots, emails, documents)</li>
                <li>Project timeline and communication history</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">4.2 Processing Time</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Review:</strong> 5-7 business days</li>
                <li><strong>Approval/Rejection:</strong> Communicated via email</li>
                <li><strong>Refund Processing:</strong> 10-15 business days</li>
                <li><strong>Bank Credit:</strong> Additional 5-10 days (varies by bank)</li>
              </ul>
            </div>

            {/* Payment Disputes */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Payment Disputes</h2>
              <p className="text-gray-700 mb-4">
                If you have concerns about charges or believe there is a billing error:
              </p>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li>Contact our billing department immediately at <a href="mailto:billing@eifasoft.com" className="text-blue-600 hover:underline">billing@eifasoft.com</a></li>
                <li>Do NOT initiate a chargeback before contacting us</li>
                <li>We will investigate and resolve billing disputes within 7-10 business days</li>
                <li>If a chargeback is filed without prior contact, we reserve the right to suspend services</li>
              </ol>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                <p className="text-gray-700 text-sm">
                  <strong>Important:</strong> Initiating chargebacks without attempting resolution may result in termination of services and legal action to recover costs.
                </p>
              </div>
            </div>

            {/* Third-Party Costs */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Third-Party Costs</h2>
              <p className="text-gray-700 mb-4">
                Certain costs incurred on behalf of clients are non-refundable, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Domain registration fees</li>
                <li>SSL certificates</li>
                <li>Web hosting charges</li>
                <li>Third-party API licenses (payment gateways, SMS services, etc.)</li>
                <li>App Store developer accounts (Apple, Google Play)</li>
                <li>Stock photos, fonts, or premium assets</li>
                <li>Advertising spend (Google Ads, Facebook Ads, etc.)</li>
              </ul>
              <p className="text-gray-700">
                These costs are pass-through expenses and are subject to the refund policies of the respective third-party providers.
              </p>
            </div>

            {/* Exceptions */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Exceptions and Special Cases</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">7.1 Force Majeure</h3>
              <p className="text-gray-700 mb-4">
                In cases of force majeure (natural disasters, pandemics, war, government actions), projects may be delayed or cancelled. 
                Refunds will be handled on a case-by-case basis with fair consideration for both parties.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">7.2 Legal or Regulatory Changes</h3>
              <p className="text-gray-700 mb-4">
                If legal or regulatory changes make project completion impossible or illegal, we will work with the client to find an alternative 
                solution or provide a partial refund.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">7.3 Technical Impossibility</h3>
              <p className="text-gray-700 mb-4">
                If technical requirements prove impossible to implement despite best efforts, we will offer alternatives or provide a refund 
                for undelivered features.
              </p>
            </div>

            {/* Warranty vs Refund */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Warranty vs. Refund</h2>
              <p className="text-gray-700 mb-4">
                Please note the difference between warranty coverage and refund eligibility:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Warranty Coverage (90 days)</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm">
                    <li>Bug fixes for defects in workmanship</li>
                    <li>Performance issues</li>
                    <li>Technical errors</li>
                    <li>Security vulnerabilities</li>
                  </ul>
                  <p className="mt-3 text-gray-700 font-semibold text-sm">No refund - Issues are fixed free of charge</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Refund Eligibility</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm">
                    <li>Non-delivery of contracted services</li>
                    <li>Material breach of agreement</li>
                    <li>Billing errors</li>
                    <li>Failure to meet agreed specifications</li>
                  </ul>
                  <p className="mt-3 text-gray-700 font-semibold text-sm">May qualify for partial or full refund</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For refund requests, cancellations, or questions about this policy, please contact:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-900 font-semibold mb-2">EifaSoft Technologies Private Limited</p>
                <p className="text-gray-700">Billing Department: <a href="mailto:billing@eifasoft.com" className="text-blue-600 hover:underline">billing@eifasoft.com</a></p>
                <p className="text-gray-700">Customer Support: <a href="mailto:support@eifasoft.com" className="text-blue-600 hover:underline">support@eifasoft.com</a></p>
                <p className="text-gray-700">Phone: <a href="tel:+919675012345" className="text-blue-600 hover:underline">+91 9675 012345</a></p>
                <p className="text-gray-700">Address: HIG A-20, Ekta Vihar Colony, Rampur Road</p>
                <p className="text-gray-700">Moradabad, Uttar Pradesh 244001, India</p>
                <p className="text-gray-700 mt-2">Business Hours: Monday - Saturday, 10:00 AM - 7:00 PM IST</p>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Policy Updates</h2>
              <p className="text-gray-700">
                We reserve the right to modify this Refund and Cancellation Policy at any time. Changes will be effective immediately upon posting 
                on our website. Continued use of our services after changes constitutes acceptance of the updated policy. For active projects, 
                the policy in effect at the time of agreement signing will apply.
              </p>
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
