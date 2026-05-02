'use client';

import { useState } from 'react';
import Link from 'next/link';

const mlmPlans = [
  {
    id: 'binary',
    name: 'Binary Plan',
    slug: '/binary-plan-mlm-software',
    icon: '🔀',
    bestFor: 'Fast Growth & Team Building',
    complexity: 'Medium',
    setupTime: '8-10 weeks',
    priceRange: '₹1,50,000 - ₹3,00,000',
    features: {
      spillover: true,
      pairMatching: true,
      cappingSystem: true,
      balancedGrowth: true,
      fastGrowth: true,
      unlimitedWidth: false,
      depthTracking: true,
      boardCycling: false,
      generationTracking: false,
      rankAdvancement: true,
    },
    commissionTypes: ['Pair Matching', 'Sponsor Bonus', 'Matching Bonus'],
    idealFor: ['Network Marketing', 'Product Sales', 'Team Building'],
    pros: ['Fast spillover growth', 'Balanced team building', 'High earning potential'],
    cons: ['Requires active balancing', 'Complex payout calculation'],
  },
  {
    id: 'matrix',
    name: 'Matrix Plan',
    slug: '/matrix-plan-mlm-software',
    icon: '📊',
    bestFor: 'Controlled Growth & Structure',
    complexity: 'Medium',
    setupTime: '8-10 weeks',
    priceRange: '₹1,50,000 - ₹3,00,000',
    features: {
      spillover: true,
      pairMatching: false,
      cappingSystem: true,
      balancedGrowth: true,
      fastGrowth: true,
      unlimitedWidth: false,
      depthTracking: true,
      boardCycling: false,
      generationTracking: false,
      rankAdvancement: true,
    },
    commissionTypes: ['Level Bonus', 'Matrix Bonus', 'Matching Bonus'],
    idealFor: ['Structured Organizations', 'Controlled Expansion', 'Fixed Width Teams'],
    pros: ['Predictable structure', 'Easy spillover', 'Team support'],
    cons: ['Limited width', 'Position dependency'],
  },
  {
    id: 'unilevel',
    name: 'Unilevel Plan',
    slug: '/unilevel-plan-mlm-software',
    icon: '📈',
    bestFor: 'Simple & Unlimited Growth',
    complexity: 'Low',
    setupTime: '6-8 weeks',
    priceRange: '₹1,00,000 - ₹2,50,000',
    features: {
      spillover: false,
      pairMatching: false,
      cappingSystem: true,
      balancedGrowth: false,
      fastGrowth: false,
      unlimitedWidth: true,
      depthTracking: true,
      boardCycling: false,
      generationTracking: false,
      rankAdvancement: true,
    },
    commissionTypes: ['Level Commission', 'Fast Start Bonus', 'Leadership Bonus'],
    idealFor: ['Direct Selling', 'Product Distribution', 'Simple Structures'],
    pros: ['Simple to understand', 'Unlimited frontline', 'Easy management'],
    cons: ['Slower growth', 'Deep level dilution'],
  },
  {
    id: 'board',
    name: 'Board Plan',
    slug: '/board-plan-mlm-software',
    icon: '🎯',
    bestFor: 'Fast Cycling & Re-entry',
    complexity: 'High',
    setupTime: '10-12 weeks',
    priceRange: '₹2,00,000 - ₹4,00,000',
    features: {
      spillover: true,
      pairMatching: false,
      cappingSystem: false,
      balancedGrowth: false,
      fastGrowth: true,
      unlimitedWidth: false,
      depthTracking: false,
      boardCycling: true,
      generationTracking: false,
      rankAdvancement: false,
    },
    commissionTypes: ['Board Completion', 'Re-entry Bonus', 'Split Board Bonus'],
    idealFor: ['High-Ticket Products', 'Fast Earnings', 'Cycler Systems'],
    pros: ['Quick returns', 'Multiple re-entries', 'High profits'],
    cons: ['Complex mechanics', 'High dropout risk'],
  },
  {
    id: 'generation',
    name: 'Generation Plan',
    slug: '/generation-plan-mlm-software',
    icon: '🔄',
    bestFor: 'Leadership & Long-term Growth',
    complexity: 'High',
    setupTime: '10-12 weeks',
    priceRange: '₹2,50,000 - ₹4,50,000',
    features: {
      spillover: false,
      pairMatching: false,
      cappingSystem: true,
      balancedGrowth: true,
      fastGrowth: false,
      unlimitedWidth: true,
      depthTracking: true,
      boardCycling: false,
      generationTracking: true,
      rankAdvancement: true,
    },
    commissionTypes: ['Generation Bonus', 'Rank Achievement', 'Leadership Pool'],
    idealFor: ['Long-term Business', 'Leadership Development', 'Career Plans'],
    pros: ['Leadership rewards', 'Deep earnings', 'Career progression'],
    cons: ['Complex calculation', 'Long-term commitment'],
  },
  {
    id: 'hybrid',
    name: 'Hybrid Plan',
    slug: '/hybrid-plan-mlm-software',
    icon: '💎',
    bestFor: 'Maximum Flexibility',
    complexity: 'High',
    setupTime: '12-16 weeks',
    priceRange: '₹3,00,000 - ₹6,00,000',
    features: {
      spillover: true,
      pairMatching: true,
      cappingSystem: true,
      balancedGrowth: true,
      fastGrowth: true,
      unlimitedWidth: true,
      depthTracking: true,
      boardCycling: false,
      generationTracking: true,
      rankAdvancement: true,
    },
    commissionTypes: ['Multi-plan Bonus', 'Custom Commission', 'All Plan Benefits'],
    idealFor: ['Custom Business Models', 'Unique Requirements', 'Multi-product Lines'],
    pros: ['Best of all plans', 'Highly flexible', 'Custom logic'],
    cons: ['Most expensive', 'Complex setup', 'Longer development'],
  },
];

export default function MLMPlanComparisonClient() {
  const [selectedPlans, setSelectedPlans] = useState<string[]>(['binary', 'matrix', 'unilevel']);
  const [compareMode, setCompareMode] = useState<'side-by-side' | 'table'>('table');

  const togglePlan = (planId: string) => {
    if (selectedPlans.includes(planId)) {
      if (selectedPlans.length > 1) {
        setSelectedPlans(selectedPlans.filter(id => id !== planId));
      }
    } else {
      if (selectedPlans.length < 4) {
        setSelectedPlans([...selectedPlans, planId]);
      }
    }
  };

  const filteredPlans = mlmPlans.filter(plan => selectedPlans.includes(plan.id));

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">MLM Plan Comparison Tool</h1>
            <p className="text-xl text-indigo-100">
              Compare different MLM compensation plans side-by-side to find the perfect fit for your business
            </p>
          </div>
        </div>
      </section>

      {/* Plan Selection */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Select Plans to Compare (Choose up to 4)
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {mlmPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => togglePlan(plan.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedPlans.includes(plan.id)
                      ? 'border-indigo-600 bg-indigo-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-indigo-300'
                  } ${selectedPlans.length >= 4 && !selectedPlans.includes(plan.id) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={selectedPlans.length >= 4 && !selectedPlans.includes(plan.id)}
                >
                  <div className="text-3xl mb-2">{plan.icon}</div>
                  <div className="font-semibold text-sm text-gray-900">{plan.name}</div>
                </button>
              ))}
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setCompareMode('table')}
                className={`px-6 py-2 rounded-lg font-semibold ${
                  compareMode === 'table'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300'
                }`}
              >
                Table View
              </button>
              <button
                onClick={() => setCompareMode('side-by-side')}
                className={`px-6 py-2 rounded-lg font-semibold ${
                  compareMode === 'side-by-side'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300'
                }`}
              >
                Side-by-Side
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison View */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {compareMode === 'table' ? (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 border-b border-r">
                        Feature
                      </th>
                      {filteredPlans.map((plan) => (
                        <th key={plan.id} className="px-6 py-4 text-center text-sm font-bold text-gray-900 border-b border-r">
                          <div className="text-3xl mb-2">{plan.icon}</div>
                          <div>{plan.name}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900 border-r bg-gray-50">Best For</td>
                      {filteredPlans.map((plan) => (
                        <td key={plan.id} className="px-6 py-4 text-center border-r">{plan.bestFor}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900 border-r bg-gray-50">Complexity</td>
                      {filteredPlans.map((plan) => (
                        <td key={plan.id} className="px-6 py-4 text-center border-r">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            plan.complexity === 'Low' ? 'bg-green-100 text-green-800' :
                            plan.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {plan.complexity}
                          </span>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900 border-r bg-gray-50">Setup Time</td>
                      {filteredPlans.map((plan) => (
                        <td key={plan.id} className="px-6 py-4 text-center border-r">{plan.setupTime}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900 border-r bg-gray-50">Price Range</td>
                      {filteredPlans.map((plan) => (
                        <td key={plan.id} className="px-6 py-4 text-center border-r font-semibold text-indigo-600">{plan.priceRange}</td>
                      ))}
                    </tr>
                    <tr>
                      <td colSpan={filteredPlans.length + 1} className="px-6 py-3 bg-indigo-50 font-bold text-gray-900">
                        Key Features
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900 border-r bg-gray-50">Spillover Support</td>
                      {filteredPlans.map((plan) => (
                        <td key={plan.id} className="px-6 py-4 text-center border-r">
                          {plan.features.spillover ? '✅' : '❌'}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900 border-r bg-gray-50">Unlimited Width</td>
                      {filteredPlans.map((plan) => (
                        <td key={plan.id} className="px-6 py-4 text-center border-r">
                          {plan.features.unlimitedWidth ? '✅' : '❌'}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900 border-r bg-gray-50">Board Cycling</td>
                      {filteredPlans.map((plan) => (
                        <td key={plan.id} className="px-6 py-4 text-center border-r">
                          {plan.features.boardCycling ? '✅' : '❌'}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900 border-r bg-gray-50">Generation Tracking</td>
                      {filteredPlans.map((plan) => (
                        <td key={plan.id} className="px-6 py-4 text-center border-r">
                          {plan.features.generationTracking ? '✅' : '❌'}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900 border-r bg-gray-50">Rank Advancement</td>
                      {filteredPlans.map((plan) => (
                        <td key={plan.id} className="px-6 py-4 text-center border-r">
                          {plan.features.rankAdvancement ? '✅' : '❌'}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td colSpan={filteredPlans.length + 1} className="px-6 py-3 bg-indigo-50 font-bold text-gray-900">
                        Additional Information
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900 border-r bg-gray-50">Commission Types</td>
                      {filteredPlans.map((plan) => (
                        <td key={plan.id} className="px-6 py-4 border-r">
                          <ul className="text-sm space-y-1">
                            {plan.commissionTypes.map((type, i) => (
                              <li key={i}>• {type}</li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900 border-r bg-gray-50">Pros</td>
                      {filteredPlans.map((plan) => (
                        <td key={plan.id} className="px-6 py-4 border-r">
                          <ul className="text-sm space-y-1 text-green-700">
                            {plan.pros.map((pro, i) => (
                              <li key={i}>✓ {pro}</li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900 border-r bg-gray-50">Cons</td>
                      {filteredPlans.map((plan) => (
                        <td key={plan.id} className="px-6 py-4 border-r">
                          <ul className="text-sm space-y-1 text-red-700">
                            {plan.cons.map((con, i) => (
                              <li key={i}>✗ {con}</li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-gray-900 border-r bg-gray-50">Actions</td>
                      {filteredPlans.map((plan) => (
                        <td key={plan.id} className="px-6 py-4 text-center border-r">
                          <Link
                            href={plan.slug}
                            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-sm"
                          >
                            Learn More
                          </Link>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredPlans.map((plan) => (
                  <div key={plan.id} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow">
                    <div className="text-5xl mb-4">{plan.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-indigo-600 font-semibold mb-4">{plan.bestFor}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Complexity:</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          plan.complexity === 'Low' ? 'bg-green-100 text-green-800' :
                          plan.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {plan.complexity}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Setup:</span>
                        <span className="text-sm font-semibold">{plan.setupTime}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Price:</span>
                        <span className="text-sm font-bold text-indigo-600">{plan.priceRange}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Pros:</h4>
                      <ul className="text-sm space-y-1 text-green-700">
                        {plan.pros.map((pro, i) => (
                          <li key={i}>✓ {pro}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Cons:</h4>
                      <ul className="text-sm space-y-1 text-red-700">
                        {plan.cons.map((con, i) => (
                          <li key={i}>✗ {con}</li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={plan.slug}
                      className="block w-full bg-indigo-600 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Plan?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Our MLM experts can help you select the perfect compensation plan for your business model
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/mlm-pricing-calculator"
                className="bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-800 transition-colors inline-block border-2 border-white"
              >
                Calculate Your Price
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other MLM Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore MLM Compensation Plan Details</h2>
            <p className="text-lg text-gray-600">Learn more about each MLM plan structure and find the perfect fit for your business</p>
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
              <Link key={idx} href={plan.href} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg hover:shadow-md transition-shadow border border-indigo-100">
                <h3 className="text-indigo-700 font-semibold mb-1">{plan.title}</h3>
                <p className="text-sm text-gray-600">{plan.desc}</p>
              </Link>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/mlm-software-development-company" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg text-center hover:from-indigo-700 hover:to-purple-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Development</h3>
              <p className="text-sm opacity-90">Custom MLM solutions for your business</p>
            </Link>
            <Link href="/mlm-pricing-calculator" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-lg text-center hover:from-green-700 hover:to-emerald-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Pricing Calculator</h3>
              <p className="text-sm opacity-90">Get instant pricing for your project</p>
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
