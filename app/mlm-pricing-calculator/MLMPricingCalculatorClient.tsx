'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MLMPricingCalculatorClient() {
  const [formData, setFormData] = useState({
    planType: 'binary',
    members: '1000',
    mobileApp: false,
    eWallet: true,
    eCommerce: false,
    multiCurrency: false,
    customBranding: false,
    smsEmail: true,
    paymentGateway: true,
    replicatedSites: false,
    kyc: false,
    analytics: true,
    support: 'basic',
    hosting: 'shared',
  });

  const basePrices: { [key: string]: number } = {
    binary: 150000,
    matrix: 150000,
    unilevel: 100000,
    board: 200000,
    generation: 250000,
    hybrid: 300000,
  };

  const memberTiers: { [key: string]: number } = {
    '500': 0,
    '1000': 0,
    '5000': 25000,
    '10000': 50000,
    '50000': 100000,
    '100000': 150000,
  };

  const featurePrices: { [key: string]: number } = {
    mobileApp: 100000,
    eWallet: 0,
    eCommerce: 75000,
    multiCurrency: 50000,
    customBranding: 25000,
    smsEmail: 0,
    paymentGateway: 0,
    replicatedSites: 40000,
    kyc: 30000,
    analytics: 0,
  };

  const supportPrices: { [key: string]: number } = {
    basic: 0,
    standard: 50000,
    premium: 100000,
  };

  const hostingPrices: { [key: string]: number } = {
    shared: 0,
    vps: 20000,
    dedicated: 50000,
    cloud: 75000,
  };

  const calculatePrice = () => {
    let total = basePrices[formData.planType] || 0;
    total += memberTiers[formData.members] || 0;

    Object.keys(featurePrices).forEach((feature) => {
      if (formData[feature as keyof typeof formData] === true) {
        total += featurePrices[feature];
      }
    });

    total += supportPrices[formData.support] || 0;
    total += hostingPrices[formData.hosting] || 0;

    return total;
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
  };

  const totalPrice = calculatePrice();
  const gst = totalPrice * 0.18;
  const finalPrice = totalPrice + gst;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">MLM Software Pricing Calculator</h1>
            <p className="text-xl text-green-100">
              Get instant pricing estimates for your MLM software project
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">

              {/* Configuration Panel */}
              <div className="lg:col-span-2 space-y-6">

                {/* Plan Type */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">1. Select MLM Plan Type</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { value: 'binary', label: 'Binary Plan', icon: '🔀' },
                      { value: 'matrix', label: 'Matrix Plan', icon: '📊' },
                      { value: 'unilevel', label: 'Unilevel Plan', icon: '📈' },
                      { value: 'board', label: 'Board Plan', icon: '🎯' },
                      { value: 'generation', label: 'Generation Plan', icon: '🔄' },
                      { value: 'hybrid', label: 'Hybrid Plan', icon: '💎' },
                    ].map((plan) => (
                      <button
                        key={plan.value}
                        onClick={() => handleChange('planType', plan.value)}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          formData.planType === plan.value
                            ? 'border-green-600 bg-green-50'
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                      >
                        <div className="text-3xl mb-2">{plan.icon}</div>
                        <div className="text-sm font-semibold">{plan.label}</div>
                        <div className="text-xs text-gray-600 mt-1">
                          ₹{(basePrices[plan.value] / 1000).toFixed(0)}K
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Member Capacity */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">2. Expected Member Capacity</h3>
                  <select
                    value={formData.members}
                    onChange={(e) => handleChange('members', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="500">Up to 500 members (Free)</option>
                    <option value="1000">Up to 1,000 members (Free)</option>
                    <option value="5000">Up to 5,000 members (+₹25,000)</option>
                    <option value="10000">Up to 10,000 members (+₹50,000)</option>
                    <option value="50000">Up to 50,000 members (+₹1,00,000)</option>
                    <option value="100000">Up to 1,00,000 members (+₹1,50,000)</option>
                  </select>
                </div>

                {/* Features */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">3. Select Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { key: 'mobileApp', label: 'Mobile App (iOS & Android)', price: 100000 },
                      { key: 'eWallet', label: 'E-Wallet System', price: 0, included: true },
                      { key: 'eCommerce', label: 'E-Commerce Integration', price: 75000 },
                      { key: 'multiCurrency', label: 'Multi-Currency Support', price: 50000 },
                      { key: 'customBranding', label: 'Custom Branding', price: 25000 },
                      { key: 'smsEmail', label: 'SMS & Email System', price: 0, included: true },
                      { key: 'paymentGateway', label: 'Payment Gateway', price: 0, included: true },
                      { key: 'replicatedSites', label: 'Replicated Websites', price: 40000 },
                      { key: 'kyc', label: 'KYC & Document Verification', price: 30000 },
                      { key: 'analytics', label: 'Analytics Dashboard', price: 0, included: true },
                    ].map((feature) => (
                      <label
                        key={feature.key}
                        className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData[feature.key as keyof typeof formData]
                            ? 'border-green-600 bg-green-50'
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={formData[feature.key as keyof typeof formData] as boolean}
                            onChange={(e) => handleChange(feature.key, e.target.checked)}
                            className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                          />
                          <span className="text-sm font-medium">{feature.label}</span>
                        </div>
                        <span className={`text-sm font-semibold ${feature.included ? 'text-green-600' : 'text-gray-900'}`}>
                          {feature.included ? 'Included' : `+₹${(feature.price / 1000).toFixed(0)}K`}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Support & Hosting */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">4. Support & Hosting</h3>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Support Plan</label>
                    <select
                      value={formData.support}
                      onChange={(e) => handleChange('support', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    >
                      <option value="basic">Basic Support (3 months) - Included</option>
                      <option value="standard">Standard Support (12 months) - +₹50,000</option>
                      <option value="premium">Premium Support (24 months) - +₹1,00,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Hosting Option</label>
                    <select
                      value={formData.hosting}
                      onChange={(e) => handleChange('hosting', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    >
                      <option value="shared">Shared Hosting - Included</option>
                      <option value="vps">VPS Hosting - +₹20,000/year</option>
                      <option value="dedicated">Dedicated Server - +₹50,000/year</option>
                      <option value="cloud">Cloud Hosting (AWS/Azure) - +₹75,000/year</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Price Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-lg p-6 sticky top-24">
                  <h3 className="text-2xl font-bold mb-6">Price Estimate</h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center pb-2 border-b border-green-400">
                      <span className="text-green-100">Base Price</span>
                      <span className="font-semibold">₹{basePrices[formData.planType].toLocaleString()}</span>
                    </div>

                    {memberTiers[formData.members] > 0 && (
                      <div className="flex justify-between items-center pb-2 border-b border-green-400">
                        <span className="text-green-100">Capacity ({formData.members})</span>
                        <span className="font-semibold">₹{memberTiers[formData.members].toLocaleString()}</span>
                      </div>
                    )}

                    {formData.mobileApp && (
                      <div className="flex justify-between items-center pb-2 border-b border-green-400">
                        <span className="text-green-100">Mobile App</span>
                        <span className="font-semibold">₹1,00,000</span>
                      </div>
                    )}

                    {formData.eCommerce && (
                      <div className="flex justify-between items-center pb-2 border-b border-green-400">
                        <span className="text-green-100">E-Commerce</span>
                        <span className="font-semibold">₹75,000</span>
                      </div>
                    )}

                    {formData.multiCurrency && (
                      <div className="flex justify-between items-center pb-2 border-b border-green-400">
                        <span className="text-green-100">Multi-Currency</span>
                        <span className="font-semibold">₹50,000</span>
                      </div>
                    )}

                    {formData.replicatedSites && (
                      <div className="flex justify-between items-center pb-2 border-b border-green-400">
                        <span className="text-green-100">Replicated Sites</span>
                        <span className="font-semibold">₹40,000</span>
                      </div>
                    )}

                    {formData.kyc && (
                      <div className="flex justify-between items-center pb-2 border-b border-green-400">
                        <span className="text-green-100">KYC System</span>
                        <span className="font-semibold">₹30,000</span>
                      </div>
                    )}

                    {formData.customBranding && (
                      <div className="flex justify-between items-center pb-2 border-b border-green-400">
                        <span className="text-green-100">Custom Branding</span>
                        <span className="font-semibold">₹25,000</span>
                      </div>
                    )}

                    {supportPrices[formData.support] > 0 && (
                      <div className="flex justify-between items-center pb-2 border-b border-green-400">
                        <span className="text-green-100">Extended Support</span>
                        <span className="font-semibold">₹{supportPrices[formData.support].toLocaleString()}</span>
                      </div>
                    )}

                    {hostingPrices[formData.hosting] > 0 && (
                      <div className="flex justify-between items-center pb-2 border-b border-green-400">
                        <span className="text-green-100">Premium Hosting</span>
                        <span className="font-semibold">₹{hostingPrices[formData.hosting].toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center text-lg">
                      <span className="text-green-100">Subtotal</span>
                      <span className="font-bold">₹{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-100">GST (18%)</span>
                      <span className="font-semibold">₹{gst.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="bg-white text-green-900 rounded-lg p-4 mb-6">
                    <div className="text-sm font-semibold mb-1">Total Investment</div>
                    <div className="text-3xl font-bold">₹{finalPrice.toLocaleString()}</div>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full bg-white text-green-600 text-center px-6 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors mb-3"
                  >
                    Get Detailed Quote
                  </Link>

                  <Link
                    href="/mlm-roi-estimator"
                    className="block w-full bg-green-700 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors border-2 border-white"
                  >
                    Calculate ROI
                  </Link>

                  <p className="text-xs text-green-100 mt-4 text-center">
                    * Prices are indicative. Final quote may vary based on specific requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What&apos;s Included in Every Package</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '⚡', title: 'Fast Development', desc: '8-16 weeks delivery' },
                { icon: '🔒', title: 'Secure & Compliant', desc: 'Bank-level security' },
                { icon: '📱', title: 'Responsive Design', desc: 'Mobile-friendly admin' },
                { icon: '💳', title: 'Payment Gateway', desc: 'Multiple integrations' },
                { icon: '📊', title: 'Analytics', desc: 'Real-time reports' },
                { icon: '🛠️', title: 'Free Support', desc: '3 months included' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-6 text-center border border-gray-200">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other MLM Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore MLM Compensation Plans</h2>
            <p className="text-lg text-gray-600">Learn about different MLM plan structures to choose the best fit for your business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { title: 'Binary Plan MLM', href: '/binary-plan-mlm-software', desc: 'Two-leg structure with spillover benefits' },
              { title: 'Matrix Plan MLM', href: '/matrix-plan-mlm-software', desc: 'Fixed width and depth structure' },
              { title: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software', desc: 'Simple unlimited width structure' },
              { title: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Board cycling with re-entry options' },
              { title: 'Generation Plan MLM', href: '/generation-plan-mlm-software', desc: 'Leadership-based compensation' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Combine multiple plan types' },
              { title: 'Stair-step Plan', href: '/stair-step-plan-mlm-software', desc: 'Breakaway rank advancement' },
              { title: 'Single Leg Plan', href: '/single-leg-plan-mlm-software', desc: 'Linear team structure' },
            ].map((plan, idx) => (
              <Link key={idx} href={plan.href} className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg hover:shadow-md transition-shadow border border-green-100">
                <h3 className="text-green-700 font-semibold mb-1">{plan.title}</h3>
                <p className="text-sm text-gray-600">{plan.desc}</p>
              </Link>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/mlm-software-development-company" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-lg text-center hover:from-green-700 hover:to-emerald-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Development</h3>
              <p className="text-sm opacity-90">Custom MLM solutions for your business</p>
            </Link>
            <Link href="/mlm-plan-comparison" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg text-center hover:from-indigo-700 hover:to-purple-700 transition-all">
              <h3 className="font-bold text-lg mb-2">Compare MLM Plans</h3>
              <p className="text-sm opacity-90">Side-by-side plan comparison</p>
            </Link>
            <Link href="/mlm-roi-estimator" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg text-center hover:from-blue-700 hover:to-cyan-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM ROI Estimator</h3>
              <p className="text-sm opacity-90">Calculate your return on investment</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
