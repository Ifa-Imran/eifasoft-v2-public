import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';
import MLMPlanComparisonClient from './MLMPlanComparisonClient';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'MLM Plan Comparison Tool | Compare All MLM Compensation Plans | EifaSoft',
    description: 'Compare all MLM compensation plans side-by-side. Binary vs Matrix vs Unilevel vs Board vs Generation vs Hybrid. Find the best MLM plan for your business with our interactive comparison tool.',
    canonical: '/mlm-plan-comparison',
    keywords: ['MLM plan comparison', 'compare MLM plans', 'best MLM plan', 'MLM compensation plan comparison', 'binary vs matrix MLM', 'unilevel vs binary plan', 'MLM plan selector', 'network marketing plan comparison', 'MLM plan features comparison', 'which MLM plan is best', 'MLM plan guide india', 'MLM compensation structure', 'MLM plan tool', 'MLM plan decision', 'binary plan vs unilevel', 'MLM plan selector india', 'choose MLM plan', 'MLM plan types comparison', 'MLM plan evaluation', 'best network marketing plan', 'MLM plan moradabad', 'compare compensation plans'],
  });
}

export default function MLMPlanComparisonPage() {
  return <MLMPlanComparisonClient />;
}
