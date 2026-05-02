'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MLMROIEstimatorClient() {
  const [formData, setFormData] = useState({
    initialInvestment: 150000,
    monthlyOperating: 10000,
    membershipFee: 1000,
    monthlyGrowthRate: 15,
    averageCommission: 500,
    retentionRate: 85,
    timeframe: 12,
  });

  const [results, setResults] = useState({
    monthlyData: [] as Array<{
      month: number;
      members: number;
      revenue: number;
      commissions: number;
      netProfit: number;
      cumulative: number;
      roi: number;
    }>,
    totalRevenue: 0,
    totalCommissions: 0,
    totalProfit: 0,
    breakEvenMonth: 0,
    finalROI: 0,
  });

  useEffect(() => {
    calculateROI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const calculateROI = () => {
    const monthlyData = [];
    let cumulativeProfit = -formData.initialInvestment;
    let breakEvenMonth = 0;
    let currentMembers = 10;

    for (let month = 1; month <= formData.timeframe; month++) {
      const newMembers = Math.floor(currentMembers * (formData.monthlyGrowthRate / 100));
      const retainedMembers = Math.floor(currentMembers * (formData.retentionRate / 100));
      currentMembers = retainedMembers + newMembers;

      const membershipRevenue = newMembers * formData.membershipFee;
      const commissionPaid = currentMembers * formData.averageCommission;
      const monthlyRevenue = membershipRevenue;
      const monthlyCosts = commissionPaid + formData.monthlyOperating;
      const netProfit = monthlyRevenue - monthlyCosts;

      cumulativeProfit += netProfit;

      if (breakEvenMonth === 0 && cumulativeProfit > 0) {
        breakEvenMonth = month;
      }

      const roi = ((cumulativeProfit / formData.initialInvestment) * 100);

      monthlyData.push({
        month,
        members: currentMembers,
        revenue: monthlyRevenue,
        commissions: commissionPaid,
        netProfit,
        cumulative: cumulativeProfit,
        roi,
      });
    }

    const totalRevenue = monthlyData.reduce((sum, m) => sum + m.revenue, 0);
    const totalCommissions = monthlyData.reduce((sum, m) => sum + m.commissions, 0);
    const totalProfit = monthlyData[monthlyData.length - 1]?.cumulative || 0;
    const finalROI = ((totalProfit / formData.initialInvestment) * 100);

    setResults({
      monthlyData,
      totalRevenue,
      totalCommissions,
      totalProfit,
      breakEvenMonth,
      finalROI,
    });
  };

  const handleInputChange = (field: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">MLM ROI Estimator</h1>
            <p className="text-xl text-blue-100 mb-6">
              Calculate your expected return on investment for MLM software
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📈</span>
                <span>Growth Projections</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <span>Revenue Forecasting</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⏱️</span>
                <span>Break-Even Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Input Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Input Parameters</h2>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Initial Investment
                  </label>
                  <input
                    type="number"
                    value={formData.initialInvestment}
                    onChange={(e) => handleInputChange('initialInvestment', parseInt(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                    step="10000"
                  />
                  <p className="text-xs text-gray-500 mt-1">Software development cost</p>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Monthly Operating Cost
                  </label>
                  <input
                    type="number"
                    value={formData.monthlyOperating}
                    onChange={(e) => handleInputChange('monthlyOperating', parseInt(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                    step="1000"
                  />
                  <p className="text-xs text-gray-500 mt-1">Hosting, support, maintenance</p>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Membership Fee (per member)
                  </label>
                  <input
                    type="number"
                    value={formData.membershipFee}
                    onChange={(e) => handleInputChange('membershipFee', parseInt(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                    step="100"
                  />
                  <p className="text-xs text-gray-500 mt-1">One-time joining fee</p>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Monthly Growth Rate (%)
                  </label>
                  <input
                    type="number"
                    value={formData.monthlyGrowthRate}
                    onChange={(e) => handleInputChange('monthlyGrowthRate', parseInt(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                    max="100"
                    step="1"
                  />
                  <p className="text-xs text-gray-500 mt-1">Expected member growth per month</p>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Average Commission (per member/month)
                  </label>
                  <input
                    type="number"
                    value={formData.averageCommission}
                    onChange={(e) => handleInputChange('averageCommission', parseInt(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                    step="50"
                  />
                  <p className="text-xs text-gray-500 mt-1">Commissions paid out monthly</p>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Retention Rate (%)
                  </label>
                  <input
                    type="number"
                    value={formData.retentionRate}
                    onChange={(e) => handleInputChange('retentionRate', parseInt(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                    max="100"
                    step="1"
                  />
                  <p className="text-xs text-gray-500 mt-1">Members retained monthly</p>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Timeframe (months)
                  </label>
                  <select
                    value={formData.timeframe}
                    onChange={(e) => handleInputChange('timeframe', parseInt(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value={6}>6 Months</option>
                    <option value={12}>12 Months</option>
                    <option value={24}>24 Months</option>
                    <option value={36}>36 Months</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                  <div className="text-sm opacity-90 mb-1">Total Revenue</div>
                  <div className="text-2xl font-bold">{formatCurrency(results.totalRevenue)}</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                  <div className="text-sm opacity-90 mb-1">Net Profit</div>
                  <div className="text-2xl font-bold">{formatCurrency(results.totalProfit)}</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                  <div className="text-sm opacity-90 mb-1">ROI</div>
                  <div className="text-2xl font-bold">{results.finalROI.toFixed(1)}%</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
                  <div className="text-sm opacity-90 mb-1">Break-Even</div>
                  <div className="text-2xl font-bold">
                    {results.breakEvenMonth > 0 ? `${results.breakEvenMonth} mo` : 'N/A'}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900">Monthly Breakdown</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Month</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Members</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Revenue</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Commissions</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Net Profit</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Cumulative</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ROI %</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {results.monthlyData.map((row) => (
                        <tr key={row.month} className={row.cumulative > 0 ? 'bg-green-50' : ''}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.month}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{row.members.toLocaleString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{formatCurrency(row.revenue)}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{formatCurrency(row.commissions)}</td>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${row.netProfit > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {formatCurrency(row.netProfit)}
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${row.cumulative > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {formatCurrency(row.cumulative)}
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${row.roi > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {row.roi.toFixed(1)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Analysis & Insights</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📊</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Profitability Timeline</h3>
                      <p className="text-sm text-gray-600">
                        {results.breakEvenMonth > 0
                          ? `Your investment will break even in month ${results.breakEvenMonth}. After that, you'll start generating positive returns.`
                          : 'Based on current parameters, profitability is not achieved within the selected timeframe. Consider adjusting growth rate or reducing costs.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💰</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Revenue Growth</h3>
                      <p className="text-sm text-gray-600">
                        With a {formData.monthlyGrowthRate}% monthly growth rate and {formData.retentionRate}% retention,
                        your member base will grow from 10 to approximately{' '}
                        {results.monthlyData[results.monthlyData.length - 1]?.members.toLocaleString() || 0} members.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">ROI Performance</h3>
                      <p className="text-sm text-gray-600">
                        Your final ROI of {results.finalROI.toFixed(1)}% over {formData.timeframe} months
                        represents a {(results.finalROI / formData.timeframe).toFixed(1)}% monthly return on investment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Optimization Tips</h3>
                      <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                        <li>Increase retention rate through better engagement features</li>
                        <li>Optimize commission structure to balance growth and profitability</li>
                        <li>Consider automation to reduce monthly operating costs</li>
                        <li>Focus on member acquisition in early months</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to Build Your MLM Software?</h2>
                <p className="text-blue-100 mb-6">
                  Get a detailed quote and start your profitable MLM journey today
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/mlm-pricing-calculator"
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                  >
                    <span>Get Pricing</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors inline-flex items-center gap-2"
                  >
                    <span>Schedule Consultation</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-sm text-gray-600">
            <p className="mb-2">
              <strong>Disclaimer:</strong> This ROI estimator provides projections based on the parameters you input.
              Actual results may vary depending on market conditions, business execution, and various other factors.
            </p>
            <p>
              These estimates should be used for planning purposes only and do not constitute financial advice.
              Consult with financial professionals before making investment decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Other MLM Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore MLM Compensation Plans</h2>
            <p className="text-lg text-gray-600">Learn about different MLM plan structures to maximize your ROI</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { title: 'Binary Plan MLM', href: '/binary-plan-mlm-software', desc: 'Two-leg structure with spillover benefits' },
              { title: 'Matrix Plan MLM', href: '/matrix-plan-mlm-software', desc: 'Fixed width and depth structure' },
              { title: 'Unilevel Plan MLM', href: '/unilevel-plan-mlm-software', desc: 'Simple unlimited width structure' },
              { title: 'Board Plan MLM', href: '/board-plan-mlm-software', desc: 'Board cycling with re-entry options' },
              { title: 'Generation Plan MLM', href: '/generation-plan-mlm-software', desc: 'Leadership-based compensation' },
              { title: 'Hybrid Plan MLM', href: '/hybrid-plan-mlm-software', desc: 'Combine multiple plan types' },
              { title: 'ROI Plan MLM', href: '/roi-plan-mlm-software', desc: 'Investment-focused returns' },
              { title: 'Investment Plan', href: '/investment-plan-mlm-software', desc: 'Profit-sharing structure' },
            ].map((plan, idx) => (
              <Link key={idx} href={plan.href} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg hover:shadow-md transition-shadow border border-blue-100">
                <h3 className="text-blue-700 font-semibold mb-1">{plan.title}</h3>
                <p className="text-sm text-gray-600">{plan.desc}</p>
              </Link>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/mlm-software-development-company" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg text-center hover:from-blue-700 hover:to-purple-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Software Development</h3>
              <p className="text-sm opacity-90">Custom MLM solutions for your business</p>
            </Link>
            <Link href="/mlm-plan-comparison" className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white p-6 rounded-lg text-center hover:from-indigo-700 hover:to-violet-700 transition-all">
              <h3 className="font-bold text-lg mb-2">Compare MLM Plans</h3>
              <p className="text-sm opacity-90">Side-by-side plan comparison</p>
            </Link>
            <Link href="/mlm-pricing-calculator" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-lg text-center hover:from-green-700 hover:to-emerald-700 transition-all">
              <h3 className="font-bold text-lg mb-2">MLM Pricing Calculator</h3>
              <p className="text-sm opacity-90">Get instant pricing for your project</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
