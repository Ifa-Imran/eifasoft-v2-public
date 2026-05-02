import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EifaSoft Technologies - Software Development Company',
    short_name: 'EifaSoft',
    description:
      'Leading software development company offering web, mobile, blockchain, DApp, and Flutter development services across India',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
    ],
  };
}
