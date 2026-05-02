import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker deployment
  output: 'standalone',

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects for HTTPS, SEO cannibalization resolution, and blog consolidation
  async redirects() {
    return [
      // HTTPS redirect
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.eifasoft.com/:path*',
        permanent: true,
      },
      
      // ============================================
      // BLOG CONSOLIDATION 301 REDIRECTS (2026-03-26)
      // 306 redirects: 546 posts → ~180 authoritative posts
      // ============================================

      // --- BINARY MLM PLAN (19 redirects) ---
      {
        source: '/blog/affordable-binary-mlm-solutions-strategies-for-success',
        destination: '/blog/binary-plan-mlm-software-complete-feature-guide',
        permanent: true,
      },
      {
        source: '/blog/binary-mlm-software-solutions',
        destination: '/blog/binary-plan-mlm-software-complete-feature-guide',
        permanent: true,
      },
      {
        source: '/blog/secure-binary-mlm-platforms-why-they-matter-for-your-business-success',
        destination: '/blog/binary-plan-mlm-software-complete-feature-guide',
        permanent: true,
      },
      {
        source: '/blog/streamlining-mlm-operations-the-power-of-binary-compensation-plan-software',
        destination: '/blog/binary-plan-mlm-software-complete-feature-guide',
        permanent: true,
      },
      {
        source: '/blog/understanding-the-importance-of-binary-mlm-software-features-and-benefits',
        destination: '/blog/binary-plan-mlm-software-complete-feature-guide',
        permanent: true,
      },
      {
        source: '/blog/everything-you-need-to-know-about-spillover-binary-mlm-software',
        destination: '/blog/binary-plan-mlm-software-complete-feature-guide',
        permanent: true,
      },
      {
        source: '/blog/developing-robust-mlm-software-with-custom-compensation-plan',
        destination: '/blog/binary-plan-mlm-software-complete-feature-guide',
        permanent: true,
      },
      {
        source: '/blog/developing-robust-mlm-software-with-custom-compensation-plans',
        destination: '/blog/binary-plan-mlm-software-complete-feature-guide',
        permanent: true,
      },
      {
        source: '/blog/mastering-the-complexity-of-mlm-compensation-plans-a-comprehensive-guide',
        destination: '/blog/binary-vs-matrix-vs-unilevel-mlm-plan-comparison-2025',
        permanent: true,
      },
      {
        source: '/blog/understanding-the-types-of-mlm-plans-a-comprehensive-guide',
        destination: '/blog/binary-vs-matrix-vs-unilevel-mlm-plan-comparison-2025',
        permanent: true,
      },

      // --- MATRIX MLM PLAN (13 redirects) ---
      {
        source: '/blog/matrix-mlm-software-features-benefits-top-solutions',
        destination: '/blog/matrix-plan-mlm-software-3x9-5x7-7x5-explained',
        permanent: true,
      },
      {
        source: '/blog/choosing-reliable-matrix-mlm-providers-a-comprehensive-guide-for-technology-decision-makers',
        destination: '/blog/matrix-plan-mlm-software-3x9-5x7-7x5-explained',
        permanent: true,
      },
      {
        source: '/blog/evaluating-matrix-mlm-software-a-comprehensive-guide-for-tech-leaders',
        destination: '/blog/matrix-plan-mlm-software-3x9-5x7-7x5-explained',
        permanent: true,
      },
      {
        source: '/blog/how-matrix-compensation-works-in-mlm-software-a-comprehensive-guide',
        destination: '/blog/matrix-plan-mlm-software-3x9-5x7-7x5-explained',
        permanent: true,
      },
      {
        source: '/blog/how-to-successfully-implement-matrix-mlm-systems-a-comprehensive-guide',
        destination: '/blog/matrix-plan-mlm-software-3x9-5x7-7x5-explained',
        permanent: true,
      },
      {
        source: '/blog/secure-matrix-mlm-software-provider-essential-features-you-must-look-for',
        destination: '/blog/matrix-plan-mlm-software-3x9-5x7-7x5-explained',
        permanent: true,
      },
      {
        source: '/blog/the-cost-of-matrix-mlm-software-a-comprehensive-guide',
        destination: '/blog/matrix-plan-mlm-software-3x9-5x7-7x5-explained',
        permanent: true,
      },
      {
        source: '/blog/market-specific-autopool-plan-mlm-solutions-a-comprehensive-guide',
        destination: '/blog/matrix-plan-mlm-software-3x9-5x7-7x5-explained',
        permanent: true,
      },
      {
        source: '/blog/streamlining-mlm-operations-the-power-of-autopool-matrix-filling-software',
        destination: '/blog/how-to-choose-mlm-compensation-plan-for-startup',
        permanent: true,
      },

      // --- UNILEVEL MLM PLAN (9 redirects) ---
      {
        source: '/blog/best-unilevel-mlm-software-providers-a-comprehensive-guide',
        destination: '/blog/unilevel-plan-mlm-software-complete-guide',
        permanent: true,
      },
      {
        source: '/blog/complete-guide-to-unilevel-plan-mlm-software-solutions',
        destination: '/blog/unilevel-plan-mlm-software-complete-guide',
        permanent: true,
      },
      {
        source: '/blog/unveiling-the-power-of-unilevel-mlm-genealogy-software-tools',
        destination: '/blog/unilevel-plan-mlm-software-complete-guide',
        permanent: true,
      },
      {
        source: '/blog/unveiling-the-power-of-unilevel-mlm-software-features-and-benefits',
        destination: '/blog/unilevel-plan-mlm-software-complete-guide',
        permanent: true,
      },
      {
        source: '/blog/mastering-unilevel-mlm-api-integration-a-comprehensive-guide',
        destination: '/blog/unilevel-plan-mlm-software-complete-guide',
        permanent: true,
      },
      {
        source: '/blog/payment-gateway-compatibility-for-mlm-a-comprehensive-guide',
        destination: '/blog/mastering-unilevel-mlm-api-integration',
        permanent: true,
      },

      // --- REPURCHASE PLAN MLM (7 redirects) ---
      {
        source: '/blog/repurchase-plan-mlm-software-complete-guide',
        destination: '/blog/repurchase-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/best-repurchase-plan-mlm-software-solutions',
        destination: '/blog/repurchase-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/best-repurchase-plan-mlm-software-streamlining-subscription-management',
        destination: '/blog/repurchase-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/affordable-repurchase-plan-mlm-software-streamlining-success-for-c-level-executives',
        destination: '/blog/repurchase-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/customizable-repurchase-plan-mlm-software-revolutionizing-business-strategies',
        destination: '/blog/repurchase-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/cost-analysis-of-repurchase-plan-tools-a-comprehensive-guide',
        destination: '/blog/repurchase-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/repurchase-plan-integration-in-mlm-systems-enhancing-customer-retention-and-business-growth',
        destination: '/blog/repurchase-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/secure-repurchase-strategies-in-mlm-ensuring-customer-trust-and-compliance',
        destination: '/blog/repurchase-plan-mlm-software-guide',
        permanent: true,
      },

      // --- DONATION PLAN MLM (7 redirects) ---
      {
        source: '/blog/donation-plan-mlm-software-complete-guide',
        destination: '/blog/donation-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/best-donation-plan-mlm-software-a-comprehensive-guide',
        destination: '/blog/donation-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/best-donation-plan-mlm-software-streamlining-contributions-for-growth',
        destination: '/blog/donation-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/progressive-donation-levels-a-strategic-approach-to-enhancing-fundraising-success',
        destination: '/blog/donation-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/scalable-donation-platforms-revolutionizing-fundraising-strategies',
        destination: '/blog/donation-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/finding-the-right-cheap-donation-management-tools-for-your-needs',
        destination: '/blog/donation-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/indian-donation-plan-providers-a-comprehensive-guide',
        destination: '/blog/indian-donation-plan-mlm-providers',
        permanent: true,
      },

      // --- BOARD PLAN MLM (5 redirects) ---
      {
        source: '/blog/board-plan-mlm-software-eifasoft',
        destination: '/blog/board-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/affordable-board-plan-mlm-software-making-smart-business-decisions',
        destination: '/blog/board-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/scalable-board-plan-mlm-software-revolutionizing-business-growth',
        destination: '/blog/board-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/revolutionizing-mlm-business-management-how-board-plan-web-development-can-transform-your-operations',
        destination: '/blog/board-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/the-importance-of-web-development-for-gift-plan-mlm-models-a-comprehensive-guide',
        destination: '/blog/board-plan-mlm-software-guide',
        permanent: true,
      },

      // --- STAIR STEP MLM (5 redirects) ---
      {
        source: '/blog/stair-step-mlm-software-features-and-benefits-for-modern-sales-teams',
        destination: '/blog/stair-step-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/stair-step-mlm-software-pricing-a-comprehensive-guide',
        destination: '/blog/stair-step-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/customizable-stair-step-mlm-features-revolutionizing-commission-structures',
        destination: '/blog/stair-step-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/scalable-stair-step-mlm-platforms-driving-business-growth-and-efficiency',
        destination: '/blog/stair-step-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/ultimate-guide-to-stair-step-breakaway-mlm-software-features-benefits-best-solutions',
        destination: '/blog/stair-step-mlm-software-guide',
        permanent: true,
      },

      // --- GENERATION PLAN MLM (5 redirects) ---
      {
        source: '/blog/generation-plan-mlm-software-complete-guide-2025',
        destination: '/blog/generation-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/generation-plan-mlm-software-features-benefits-and-best-solutions',
        destination: '/blog/generation-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/choosing-the-right-generation-plan-mlm-software-features-benefits-and-implementation-best-practices',
        destination: '/blog/generation-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/secure-generation-plan-integration-ensuring-compliance-and-scalability-in-mlm-platforms',
        destination: '/blog/generation-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/portfolio-management-in-mlm-software-streamlining-success',
        destination: '/blog/generation-plan-mlm-software-guide',
        permanent: true,
      },

      // --- BUCKET/HELPING PLAN MLM (9 redirects) ---
      {
        source: '/blog/bucket-help-plan-mlm-software-complete-guide',
        destination: '/blog/bucket-help-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/bucket-help-plan-mlm-software-your-comprehensive-guide',
        destination: '/blog/bucket-help-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/affordable-bucket-software-a-comprehensive-guide-for-modern-business',
        destination: '/blog/bucket-help-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/affordable-bucket-software-a-comprehensive-guide-for-modern-businesses',
        destination: '/blog/bucket-help-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/best-bucket-help-plan-software-streamline-your-sales-strategy',
        destination: '/blog/bucket-help-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/managing-contributions-in-mlm-a-comprehensive-guide-to-bucket-systems',
        destination: '/blog/bucket-help-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/helping-plan-mlm-software-solutions',
        destination: '/blog/bucket-help-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/helping-you-plan-effective-mlm-features-a-comprehensive-guide',
        destination: '/blog/bucket-help-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/secure-your-mlm-software-a-comprehensive-guide-to-a-secure-helping-plan',
        destination: '/blog/bucket-help-plan-mlm-software-guide',
        permanent: true,
      },

      // --- SINGLE LEG PLAN MLM (4 redirects) ---
      {
        source: '/blog/affordable-single-leg-mlm-software-a-comprehensive-guide',
        destination: '/blog/single-leg-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/best-single-leg-mlm-software-a-comprehensive-guide',
        destination: '/blog/single-leg-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/custom-single-leg-mlm-software-development-revolutionizing-your-business-operations',
        destination: '/blog/single-leg-plan-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/single-leg-plan-mlm-software-features-benefits-top-solutions',
        destination: '/blog/single-leg-plan-mlm-software-guide',
        permanent: true,
      },

      // --- HYBRID/AUSTRALIAN/MOBIUS MLM (7 redirects) ---
      {
        source: '/blog/hybrid-plan-mlm-software-complete-guide-2025',
        destination: '/blog/hybrid-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/the-ultimate-guide-to-hybrid-mlm-software',
        destination: '/blog/hybrid-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/australian-x-up-mlm-software-complete-guide',
        destination: '/blog/australian-x-up-plan-mlm-guide',
        permanent: true,
      },
      {
        source: '/blog/everything-you-need-to-know-about-australian-x-up-plan-mlm-software',
        destination: '/blog/australian-x-up-plan-mlm-guide',
        permanent: true,
      },
      {
        source: '/blog/secure-your-mlm-business-choosing-the-right-australian-x-up-plan-software-provider',
        destination: '/blog/australian-x-up-plan-mlm-guide',
        permanent: true,
      },
      {
        source: '/blog/mobius-loop-mlm-software-complete-guide',
        destination: '/blog/mobius-loop-mlm-guide',
        permanent: true,
      },
      {
        source: '/blog/mobius-loop-mlm-software-continuous-cycle-dynamic-compensation-solutions',
        destination: '/blog/mobius-loop-mlm-guide',
        permanent: true,
      },

      // --- BLOCKCHAIN & CRYPTO (14 redirects) ---
      {
        source: '/blog/building-a-robust-cryptocurrency-exchange-key-considerations-for-success',
        destination: '/blog/cryptocurrency-exchange-development-guide',
        permanent: true,
      },
      {
        source: '/blog/building-a-secure-and-scalable-cryptocurrency-exchange-key-considerations-for-success',
        destination: '/blog/cryptocurrency-exchange-development-guide',
        permanent: true,
      },
      {
        source: '/blog/cryptocurrency-exchange-development-a-comprehensive-guide-to-building-a-secure-and-scalable-trading-platform',
        destination: '/blog/cryptocurrency-exchange-development-guide',
        permanent: true,
      },
      {
        source: '/blog/how-to-choose-the-right-cryptocurrency-exchange-development-company',
        destination: '/blog/cryptocurrency-exchange-development-guide',
        permanent: true,
      },
      {
        source: '/blog/how-to-develop-a-secure-and-scalable-cryptocurrency-exchange-a-comprehensive-guide',
        destination: '/blog/cryptocurrency-exchange-development-guide',
        permanent: true,
      },
      {
        source: '/blog/developing-a-professional-cryptocurrency-trading-platform-a-comprehensive-guide',
        destination: '/blog/cryptocurrency-exchange-development-guide',
        permanent: true,
      },
      {
        source: '/blog/bitcoin-mlm-software-features-benefits-best-solutions',
        destination: '/blog/bitcoin-mlm-software-complete-guide',
        permanent: true,
      },
      {
        source: '/blog/everything-about-bitcoin-mlm-software-and-its-features',
        destination: '/blog/bitcoin-mlm-software-complete-guide',
        permanent: true,
      },
      {
        source: '/blog/cryptocurrency-bitcoin-mlm-software-guide-2025',
        destination: '/blog/bitcoin-mlm-software-complete-guide',
        permanent: true,
      },
      {
        source: '/blog/cheap-bitcoin-mlm-software-options-finding-the-right-solution',
        destination: '/blog/bitcoin-mlm-software-complete-guide',
        permanent: true,
      },
      {
        source: '/blog/custom-bitcoin-mlm-software-revolutionizing-modern-transactions',
        destination: '/blog/bitcoin-mlm-software-complete-guide',
        permanent: true,
      },
      {
        source: '/blog/top-bitcoin-mlm-software-providers-a-comprehensive-guide',
        destination: '/blog/bitcoin-mlm-software-complete-guide',
        permanent: true,
      },
      {
        source: '/blog/revolutionizing-mlm-payments-the-future-with-bitcoin-integration',
        destination: '/blog/bitcoin-mlm-software-complete-guide',
        permanent: true,
      },

      // --- E-COMMERCE MLM INTEGRATION (5 redirects) ---
      {
        source: '/blog/e-commerce-mlm-software-woocommerce-shopify-integration',
        destination: '/blog/ecommerce-mlm-integration-guide',
        permanent: true,
      },
      {
        source: '/blog/managing-commission-in-e-commerce-mlm-software-best-practices-for-streamlined-operations',
        destination: '/blog/ecommerce-mlm-integration-guide',
        permanent: true,
      },
      {
        source: '/blog/scalable-e-commerce-mlm-systems-the-key-to-future-proof-growth',
        destination: '/blog/ecommerce-mlm-integration-guide',
        permanent: true,
      },
      {
        source: '/blog/understanding-e-commerce-mlm-software-a-comprehensive-guide',
        destination: '/blog/ecommerce-mlm-integration-guide',
        permanent: true,
      },
      {
        source: '/blog/the-ultimate-guide-to-e-commerce-integrated-mlm-software-solutions',
        destination: '/blog/ecommerce-mlm-integration-guide',
        permanent: true,
      },

      // --- THIN CONTENT DELETIONS (7 redirects) ---
      {
        source: '/blog/50-50-crowdfunding-mlm-software-complete-guide',
        destination: '/blog/crowdfunding-mlm-software-guide',
        permanent: true,
      },
      {
        source: '/blog/investment-plan-mlm-software-complete-guide',
        destination: '/blog/investment-plan-mlm-guide',
        permanent: true,
      },
      {
        source: '/blog/roi-plan-mlm-software-complete-guide',
        destination: '/blog/roi-plan-mlm-guide',
        permanent: true,
      },
      {
        source: '/blog/autopool-plan-mlm-software-complete-guide',
        destination: '/blog/autopool-mlm-guide',
        permanent: true,
      },
      {
        source: '/blog/real-estate-mlm-software-complete-guide',
        destination: '/blog/real-estate-mlm-guide',
        permanent: true,
      },
      {
        source: '/blog/mobile-recharge-plan-mlm-software-complete-guide',
        destination: '/blog/mobile-recharge-mlm-guide',
        permanent: true,
      },
    ];
  },

  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@/components', '@/lib'],
    // Increase build timeout for large sites
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
