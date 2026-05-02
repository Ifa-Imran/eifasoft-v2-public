// Type definitions for EifaSoft 2.0

export interface City {
  name: string;
  slug: string;
  state: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  population: string;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  shortName: string;
  icon: string;
  category: 'web' | 'mobile' | 'software' | 'blockchain' | 'enterprise' | 'marketing';
  isNew?: boolean;
  description: string;
  features: string[];
  startingPrice: string;
  deliveryTime: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  avatar?: string;
  rating: number;
  text: string;
  date: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  readTime: number;
  pillar?: boolean;
  service_category?: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  alternates?: {
    canonical?: string;
    languages?: Record<string, string>;
  };
}

export interface SchemaOrgData {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  logo: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  socialMedia: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
    whatsapp?: string;
  };
  establishedYear: number;
  employees: string;
}

export interface PageMetadata {
  service: Service;
  city?: City;
  seo: SEOConfig;
  faqs: FAQ[];
  schema: SchemaOrgData[];
}
