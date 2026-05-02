import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as genMeta, generateBreadcrumbSchema } from '@/lib/seo';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Cookie Policy | EifaSoft Technologies',
    description: 'EifaSoft Technologies cookie policy. Learn about how we use cookies and similar tracking technologies on our website.',
    canonical: '/cookie-policy',
    keywords: ['cookie policy', 'cookies', 'tracking technologies', 'web analytics', 'browser cookies'],
  });
}

export default function CookiePolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Cookie Policy', url: '/cookie-policy' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[breadcrumbSchema]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-xl text-orange-100">
              Understanding how we use cookies and tracking technologies
            </p>
            <p className="text-sm text-orange-200 mt-4">
              Last Updated: January 21, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                This Cookie Policy explains how EifaSoft Technologies Private Limited (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies 
                and similar tracking technologies when you visit our website <Link href="/" className="text-blue-600 hover:underline">www.eifasoft.com</Link>.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By using our website, you consent to the use of cookies in accordance with this Cookie Policy. If you do not agree to our use of cookies, 
                you should disable them by following the instructions in this policy or stop using our website.
              </p>
            </div>

            {/* What Are Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make 
                websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-gray-700 mb-4">
                Cookies can be:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period or until you delete them</li>
                <li><strong>First-Party Cookies:</strong> Set by the website you are visiting</li>
                <li><strong>Third-Party Cookies:</strong> Set by domains other than the website you are visiting</li>
              </ul>
            </div>

            {/* Types of Cookies We Use */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">2.1 Strictly Necessary Cookies</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 mb-2"><strong>Purpose:</strong> Essential for the website to function properly</p>
                <p className="text-gray-700 mb-2"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Session management cookies</li>
                  <li>Security cookies for authentication</li>
                  <li>Load balancing cookies</li>
                </ul>
                <p className="text-gray-700 mt-3"><strong>Can be disabled:</strong> No (required for basic functionality)</p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">2.2 Performance & Analytics Cookies</h3>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 mb-2"><strong>Purpose:</strong> Help us understand how visitors interact with our website</p>
                <p className="text-gray-700 mb-2"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Google Analytics cookies (_ga, _gid, _gat)</li>
                  <li>Page view tracking</li>
                  <li>User behavior analysis</li>
                  <li>Traffic source tracking</li>
                </ul>
                <p className="text-gray-700 mt-3"><strong>Can be disabled:</strong> Yes</p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">2.3 Functionality Cookies</h3>
              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 mb-2"><strong>Purpose:</strong> Remember your preferences and enhance functionality</p>
                <p className="text-gray-700 mb-2"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Language preference cookies</li>
                  <li>Region/location settings</li>
                  <li>User interface customization</li>
                  <li>Font size preferences</li>
                </ul>
                <p className="text-gray-700 mt-3"><strong>Can be disabled:</strong> Yes (may affect user experience)</p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">2.4 Targeting & Advertising Cookies</h3>
              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 mb-2"><strong>Purpose:</strong> Deliver relevant advertisements and marketing content</p>
                <p className="text-gray-700 mb-2"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Google Ads cookies</li>
                  <li>Facebook Pixel</li>
                  <li>LinkedIn Insight Tag</li>
                  <li>Retargeting cookies</li>
                </ul>
                <p className="text-gray-700 mt-3"><strong>Can be disabled:</strong> Yes</p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">2.5 Social Media Cookies</h3>
              <div className="bg-pink-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 mb-2"><strong>Purpose:</strong> Enable social sharing and track social media interactions</p>
                <p className="text-gray-700 mb-2"><strong>Examples:</strong></p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Facebook social plugins</li>
                  <li>Twitter share buttons</li>
                  <li>LinkedIn sharing widgets</li>
                  <li>Instagram embed cookies</li>
                </ul>
                <p className="text-gray-700 mt-3"><strong>Can be disabled:</strong> Yes</p>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Third-Party Cookies We Use</h2>
              <p className="text-gray-700 mb-4">
                We use various third-party services that may set cookies on your device:
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 mb-6">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Service Provider</th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Purpose</th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Cookie Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Google Analytics</td>
                      <td className="px-6 py-4 text-gray-700">Website analytics</td>
                      <td className="px-6 py-4 text-gray-700">Performance</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Google Ads</td>
                      <td className="px-6 py-4 text-gray-700">Advertising & remarketing</td>
                      <td className="px-6 py-4 text-gray-700">Targeting</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Facebook Pixel</td>
                      <td className="px-6 py-4 text-gray-700">Ad tracking & optimization</td>
                      <td className="px-6 py-4 text-gray-700">Targeting</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">LinkedIn Insight</td>
                      <td className="px-6 py-4 text-gray-700">B2B analytics</td>
                      <td className="px-6 py-4 text-gray-700">Analytics</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Hotjar</td>
                      <td className="px-6 py-4 text-gray-700">User behavior analysis</td>
                      <td className="px-6 py-4 text-gray-700">Performance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* How to Manage Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">4. How to Manage Cookies</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">4.1 Browser Settings</h3>
              <p className="text-gray-700 mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>View what cookies are stored and delete them individually</li>
                <li>Block third-party cookies</li>
                <li>Block all cookies from specific websites</li>
                <li>Block all cookies completely</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">4.2 Browser-Specific Instructions</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Google Chrome</h4>
                  <p className="text-gray-700 text-sm">Settings → Privacy and security → Cookies and other site data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Mozilla Firefox</h4>
                  <p className="text-gray-700 text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Safari</h4>
                  <p className="text-gray-700 text-sm">Preferences → Privacy → Manage Website Data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Microsoft Edge</h4>
                  <p className="text-gray-700 text-sm">Settings → Cookies and site permissions → Cookies and site data</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">4.3 Opt-Out Tools</h3>
              <p className="text-gray-700 mb-4">You can also opt out of specific tracking:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                <li><strong>Google Ads:</strong> <a href="https://adssettings.google.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Ads Settings</a></li>
                <li><strong>Facebook:</strong> <a href="https://www.facebook.com/settings?tab=ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Ad Preferences</a></li>
                <li><strong>Network Advertising:</strong> <a href="http://optout.networkadvertising.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">NAI Opt-Out</a></li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                <p className="text-gray-700 text-sm">
                  <strong>Note:</strong> Disabling cookies may affect the functionality of our website and prevent you from accessing certain features.
                </p>
              </div>
            </div>

            {/* Cookie Duration */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Cookie Duration</h2>
              <p className="text-gray-700 mb-4">Different cookies have different lifespans:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Analytics Cookies:</strong> Typically 1-2 years</li>
                <li><strong>Preference Cookies:</strong> 1-12 months</li>
                <li><strong>Advertising Cookies:</strong> 1-24 months</li>
              </ul>
            </div>

            {/* Do Not Track */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Do Not Track Signals</h2>
              <p className="text-gray-700">
                Some browsers have a &quot;Do Not Track&quot; (DNT) feature that signals to websites that you do not want to be tracked. Currently, 
                there is no industry standard for how to respond to DNT signals. We do not currently respond to DNT signals, but you can still 
                control cookies through your browser settings as described above.
              </p>
            </div>

            {/* Updates to Cookie Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Updates to This Cookie Policy</h2>
              <p className="text-gray-700">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. 
                We will notify you of any material changes by updating the &quot;Last Updated&quot; date at the top of this policy.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-900 font-semibold mb-2">EifaSoft Technologies Private Limited</p>
                <p className="text-gray-700">Email: <a href="mailto:privacy@eifasoft.com" className="text-blue-600 hover:underline">privacy@eifasoft.com</a></p>
                <p className="text-gray-700">Phone: <a href="tel:+919675012345" className="text-blue-600 hover:underline">+91 9675 012345</a></p>
                <p className="text-gray-700">Address: HIG A-20, Ekta Vihar Colony, Rampur Road</p>
                <p className="text-gray-700">Moradabad, Uttar Pradesh 244001, India</p>
              </div>
            </div>

            {/* More Information */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Want to Learn More About Cookies?</h3>
              <p className="text-gray-700 mb-2">For more information about cookies and how they work, visit:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li><a href="https://www.allaboutcookies.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">All About Cookies</a></li>
                <li><a href="https://ico.org.uk/for-the-public/online/cookies/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ICO - Cookies</a></li>
                <li><a href="https://www.cookiechoices.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Cookie Choices</a></li>
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
