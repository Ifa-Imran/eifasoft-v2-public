import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';
import MLMROIEstimatorClient from './MLMROIEstimatorClient';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'MLM ROI Estimator | Calculate MLM Software Return on Investment | EifaSoft',
    description: 'Free MLM ROI Estimator tool. Calculate expected return on investment, break-even analysis, revenue projections, and profitability timeline for your MLM software business.',
    canonical: '/mlm-roi-estimator',
    keywords: ['MLM ROI estimator', 'MLM return on investment', 'MLM software ROI calculator', 'MLM profitability calculator', 'network marketing ROI', 'MLM break even calculator', 'MLM revenue estimator', 'MLM investment calculator', 'MLM profit calculator', 'MLM business ROI', 'network marketing profit calculator', 'MLM software investment return', 'MLM growth calculator', 'MLM financial projections', 'MLM revenue forecast', 'MLM profit estimate india', 'network marketing investment tool', 'MLM business planner', 'MLM calculator tool', 'MLM earnings estimator', 'MLM ROI tool moradabad', 'MLM software cost benefit'],
  });
}

export default function MLMROIEstimatorPage() {
  return <MLMROIEstimatorClient />;
}
