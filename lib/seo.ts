import { Metadata } from 'next';
import { SITE_CONFIG, COMPANY_INFO } from '@/config/site';
import { SEOConfig } from '@/types';

export function generateMetadata(config: SEOConfig): Metadata {
  const title = config.title;
  const description = config.description;
  const canonical = config.canonical || SITE_CONFIG.url;
  const ogImage = config.ogImage || SITE_CONFIG.defaultImage;

  return {
    title,
    description,
    keywords: config.keywords,
    authors: [{ name: COMPANY_INFO.name }],
    creator: COMPANY_INFO.name,
    publisher: COMPANY_INFO.name,
    robots: {
      index: !config.noindex,
      follow: true,
      googleBot: {
        index: !config.noindex,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: config.alternates,
    openGraph: {
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: canonical,
      title,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: SITE_CONFIG.twitterHandle,
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.legalName,
    alternateName: COMPANY_INFO.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}${COMPANY_INFO.logo}`,
    description: SITE_CONFIG.description,
    email: COMPANY_INFO.email,
    telephone: COMPANY_INFO.phone,
    foundingDate: COMPANY_INFO.establishedYear.toString(),
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.postalCode,
      addressCountry: COMPANY_INFO.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_INFO.coordinates.latitude,
      longitude: COMPANY_INFO.coordinates.longitude,
    },
    sameAs: Object.values(COMPANY_INFO.socialMedia).filter(Boolean),
  };
}

export function generateLocalBusinessSchema(cityName?: string) {
  const baseSchema = generateOrganizationSchema();
  return {
    ...baseSchema,
    '@type': 'LocalBusiness',
    priceRange: '₹₹',
    areaServed: cityName
      ? {
          '@type': 'City',
          name: cityName,
        }
      : {
          '@type': 'Country',
          name: 'India',
        },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema(
  serviceName: string,
  description: string,
  cityName?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
    },
    areaServed: cityName
      ? {
          '@type': 'City',
          name: cityName,
        }
      : {
          '@type': 'Country',
          name: 'India',
        },
    serviceType: 'Software Development',
  };
}

export function generateAggregateRatingSchema(rating = 4.8, reviewCount = 150) {
  return {
    '@type': 'AggregateRating',
    ratingValue: rating,
    reviewCount,
    bestRating: 5,
    worstRating: 1,
  };
}

export function generateProductSchema(
  name: string,
  description: string,
  price: string,
  rating = 4.8,
  reviewCount = 50,
  image?: string
) {
  // Set price valid until 1 year from now
  const priceValidUntil = new Date();
  priceValidUntil.setFullYear(priceValidUntil.getFullYear() + 1);
  const priceValidUntilStr = priceValidUntil.toISOString().split('T')[0];

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: image || `${SITE_CONFIG.url}${SITE_CONFIG.defaultImage}`,
    brand: {
      '@type': 'Brand',
      name: COMPANY_INFO.name,
    },
    offers: {
      '@type': 'Offer',
      price: price.replace(/[^0-9]/g, ''),
      priceCurrency: 'INR',
      priceValidUntil: priceValidUntilStr,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: COMPANY_INFO.name,
      },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'IN',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 30,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/FreeReturn',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: 0,
          currency: 'INR',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'IN',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 1,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY',
          },
        },
      },
    },
    aggregateRating: generateAggregateRatingSchema(rating, reviewCount),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  image?: string;
  slug?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image || SITE_CONFIG.defaultImage,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}${COMPANY_INFO.logo}`,
      },
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['article h1', 'article h2', 'article p:first-of-type'],
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.slug ? `${SITE_CONFIG.url}/blog/${article.slug}` : SITE_CONFIG.url,
    },
  };
}

export function generateHowToSchema(steps: Array<{
  name: string;
  text: string;
  position: number;
  url?: string;
  image?: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How We Work - Our Development Process',
    description: 'Step-by-step guide to our software development process at EifaSoft Technologies',
    totalTime: 'P12W',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      value: 'Contact for Quote',
    },
    step: steps.map((step) => ({
      '@type': 'HowToStep',
      position: step.position,
      name: step.name,
      text: step.text,
      url: step.url || `${SITE_CONFIG.url}/how-we-work#step-${step.position}`,
      image: step.image || SITE_CONFIG.defaultImage,
    })),
  };
}

export function generateReviewSchema(reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished?: string;
}>) {
  return reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished || new Date().toISOString().split('T')[0],
    itemReviewed: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
    },
  }));
}

export function generateOrganizationWithReviewsSchema(rating = 4.9, reviewCount = 150) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.legalName,
    alternateName: COMPANY_INFO.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}${COMPANY_INFO.logo}`,
    description: SITE_CONFIG.description,
    email: COMPANY_INFO.email,
    telephone: COMPANY_INFO.phone,
    foundingDate: COMPANY_INFO.establishedYear.toString(),
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.postalCode,
      addressCountry: COMPANY_INFO.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_INFO.coordinates.latitude,
      longitude: COMPANY_INFO.coordinates.longitude,
    },
    sameAs: Object.values(COMPANY_INFO.socialMedia).filter(Boolean),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount: reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

export function generateSoftwareApplicationSchema(config: {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  price: string;
  currency?: string;
  rating?: number;
  reviewCount?: number;
  version?: string;
  screenshotUrl?: string;
}) {
  const priceValue = config.price.replace(/[^0-9]/g, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: config.name,
    description: config.description,
    applicationCategory: config.applicationCategory,
    operatingSystem: config.operatingSystem,
    offers: {
      '@type': 'Offer',
      price: priceValue,
      priceCurrency: config.currency || 'INR',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: config.rating ? {
      '@type': 'AggregateRating',
      ratingValue: config.rating,
      reviewCount: config.reviewCount || 50,
      bestRating: 5,
      worstRating: 1,
    } : undefined,
    softwareVersion: config.version || '1.0',
    screenshot: config.screenshotUrl || `${SITE_CONFIG.url}/images/software-screenshot.png`,
    author: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: SITE_CONFIG.url,
    },
  };
}

export function generateSpeakableSchema(cssSelectors?: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors || ['article h1', 'article h2', 'article p:first-of-type', '.key-takeaways', '.definition-box'],
    },
  };
}

/**
 * WebSite schema with SearchAction for Google Sitelinks Searchbox
 * This enables search functionality directly from Google search results
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    alternateName: COMPANY_INFO.legalName,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      logo: `${SITE_CONFIG.url}${COMPANY_INFO.logo}`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/blogs?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: ['en-IN', 'hi-IN'],
  };
}

/**
 * ItemList schema for service listings and collections
 * Helps Google understand lists of items on the page
 */
export function generateItemListSchema(items: Array<{
  name: string;
  url: string;
  description?: string;
  image?: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: `${SITE_CONFIG.url}${item.url}`,
      description: item.description,
      image: item.image || SITE_CONFIG.defaultImage,
    })),
    numberOfItems: items.length,
  };
}

/**
 * ProfessionalService schema for IT/Software development companies
 * More specific than LocalBusiness for service-based businesses
 */
export function generateProfessionalServiceSchema(
  serviceName?: string,
  cityName?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: serviceName || COMPANY_INFO.name,
    image: `${SITE_CONFIG.url}${COMPANY_INFO.logo}`,
    '@id': SITE_CONFIG.url,
    url: SITE_CONFIG.url,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    priceRange: '₹₹-₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: cityName || COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_INFO.coordinates.latitude,
      longitude: COMPANY_INFO.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    sameAs: Object.values(COMPANY_INFO.socialMedia).filter(Boolean),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      reviewCount: 150,
      bestRating: 5,
      worstRating: 1,
    },
    areaServed: cityName
      ? { '@type': 'City', name: cityName }
      : { '@type': 'Country', name: 'India' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'MLM Software Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Blockchain Development',
          },
        },
      ],
    },
  };
}

/**
 * VideoObject schema for video content
 */
export function generateVideoSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration || 'PT5M',
    contentUrl: video.contentUrl,
    embedUrl: video.embedUrl,
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}${COMPANY_INFO.logo}`,
      },
    },
  };
}

/**
 * CollectionPage schema for listing pages (services, cities, etc.)
 */
export function generateCollectionPageSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: `${SITE_CONFIG.url}${url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
    },
  };
}
