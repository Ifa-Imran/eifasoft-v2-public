import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';
import MLMPricingCalculatorClient from './MLMPricingCalculatorClient';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'MLM Software Pricing Calculator | Instant MLM Software Cost Estimate | EifaSoft',
    description: 'Use our free MLM Software Pricing Calculator to get instant cost estimates. Configure plan type, features, member capacity, and support options to get your custom MLM software price.',
    canonical: '/mlm-pricing-calculator',
    keywords: ['MLM software pricing calculator', 'MLM software cost calculator', 'MLM software price estimator', 'network marketing software calculator', 'MLM software quote calculator', 'calculate MLM software price', 'MLM software pricing tool', 'MLM cost estimator', 'MLM software budget calculator', 'binary plan software price calculator', 'matrix MLM price calculator', 'MLM software price india', 'custom MLM software cost', 'MLM software features pricing', 'MLM software instant quote', 'affordable MLM calculator', 'MLM pricing tool india', 'MLM software price check', 'MLM software estimate moradabad', 'network marketing cost calculator', 'MLM plan price calculator', 'MLM software ROI'],
  });
}

export default function MLMPricingCalculatorPage() {
  return <MLMPricingCalculatorClient />;
}
