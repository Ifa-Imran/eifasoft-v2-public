import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Website Designing and Development Company | EifaSoft Technologies',
    description: 'Professional website designing and development services. Custom responsive websites, e-commerce solutions, CMS integration. Fast, SEO-optimized websites starting at ₹25,000.',
    canonical: '/website-designing-and-development-company',
    keywords: [
      'website design company',
      'web development services',
      'custom website design',
      'responsive web design',
      'e-commerce website development',
      'CMS website development',
      'website designing company india',
      'professional web design services',
      'wordpress website development',
      'ecommerce website design',
      'landing page design',
      'business website design',
      'ui ux design services',
      'website development company',
      'affordable website design',
      'website redesign services',
      'next.js website development',
      'react website development',
      'progressive web app development',
      'seo website design',
      'woocommerce development',
      'shopify website development',
      'PWA development company',
      'AMP development services',
      'headless CMS development',
      'Strapi development',
      'custom web applications',
      'enterprise website development',
      'small business website design',
      'startup website development',
      'corporate website designers',
      'portal development services',
      'SaaS website development',
      'dynamic website development',
      'static website design',
      'single page application development',
      'SPA development services',
      'mobile responsive website company',
      'fast loading website design',
      'Core Web Vitals optimization',
      'accessible website WCAG 2.1',
      'multilingual website development',
      'Hindi English bilingual website',
      'website with payment gateway',
      'Razorpay integration',
      'Paytm payment integration',
      'Stripe payment gateway India',
      'CRM integration website',
      'Salesforce website integration',
      'HubSpot website integration',
      'Zoho CRM website integration',
      'Mailchimp email integration',
      'Google Maps API integration',
      'social media integration website',
      'API integration specialists',
      'third-party API integration',
      'inventory management system',
      'booking system integration',
      'appointment scheduling website',
      'membership portal development',
      'customer portal development',
      'client portal website',
      'intranet portal development',
      'extranet development services',
      'dashboard development services',
      'admin panel development',
      'content management system training',
      'website maintenance packages',
      'website security SSL',
      'GDPR compliant website',
      'data protection website',
      'website analytics setup',
      'Google Analytics 4 GA4',
      'Google Tag Manager',
      'conversion rate optimization',
      'A/B testing website',
      'heatmap tracking setup',
      'hotjar installation',
      'website speed optimization',
      'image optimization website',
      'CDN integration Cloudflare',
      'AWS hosting deployment',
      'Azure cloud hosting',
      'Google Cloud Platform hosting',
      'Vercel Netlify deployment',
      'cPanel hosting setup',
      'managed WordPress hosting',
      'domain registration services',
      'SSL certificate installation',
      'email hosting integration',
      'G Suite setup',
      'Microsoft 365 integration',
      'website migration services',
      'redesign existing website',
      'modernize outdated website',
      'bootstrap website development',
      'Tailwind CSS development',
      'Material UI development',
      'Angular website development',
      'Svelte website development',
      'Jamstack development',
      'Gatsby development services',
      'Sanity CMS development',
      'Contentful CMS development',
      'Prismic CMS development',
      'Ghost CMS development',
      'Drupal development services',
      'Joomla development services',
      'Magento ecommerce development',
      'PrestaShop development',
      'OpenCart development services',
      'BigCommerce development',
      'Volusion ecommerce development',
      'Wix website development',
      'Squarespace website design',
      'Webflow development services',
      'Bubble no-code development',
      'low-code platform development',
      'React Native web development',
      'Flutter web development',
      'Ionic web app development',
      'Electron desktop app development',
      'cross-platform web development',
      'hybrid app development',
      'fitness tracker web app',
      'health monitoring dashboard',
      'telemedicine platform development',
      'hospital management system',
      'clinic management software',
      'dental practice website',
      'legal law firm website',
      'attorney website design',
      'lawyer website development',
      'real estate property portal',
      'property listing website',
      'realtor website design',
      'school college university website',
      'LMS learning management system',
      'online course platform',
      'e-learning website development',
      'education institute portal',
      'coaching class website',
      'tuition center management',
      'restaurant food ordering website',
      'food delivery app integration',
      'hotel resort booking website',
      'tourism travel website',
      'travel agency portal',
      'flight booking integration',
      'hotel reservation system',
      'manufacturing company website',
      'industrial equipment portal',
      'B2B marketplace development',
      'wholesale trading portal',
      'retail store ecommerce',
      'fashion apparel ecommerce',
      'jewelry ecommerce website',
      'electronics online store',
      'grocery supermarket ecommerce',
      'pharmacy medical store online',
      'automotive car dealer website',
      'bike showroom website',
      'car rental booking system',
      'logistics transport website',
      'courier tracking system',
      'shipping logistics portal',
      'construction company website',
      'architecture firm portfolio',
      'interior designer website',
      'photography portfolio website',
      'creative agency portfolio',
      'marketing agency website',
      'digital marketing agency portal',
      'SEO agency website',
      'advertising agency portfolio',
      'consulting firm website',
      'financial advisor website',
      'accounting firm website',
      'tax consultant website',
      'insurance agent website',
      'banking financial portal',
      'fintech startup website',
      'payment processor integration',
      'wallet app integration',
      'cryptocurrency exchange website',
      'blockchain platform development',
      'NFT marketplace website',
      'gaming entertainment website',
      'sports fitness club website',
      'gym yoga studio website',
      'salon spa booking website',
      'beauty parlor website',
      'wedding event planner website',
      'catering service website',
      'photography videography portfolio',
      'music artist portfolio',
      'podcast streaming website',
      'video streaming platform',
      'OTT platform development',
      'news magazine portal',
      'blog content website',
      'affiliate marketing website',
      'dropshipping ecommerce store',
      'print-on-demand integration',
      'subscription box website',
      'rental service website',
      'classified ads portal',
      'job board career portal',
      'recruitment agency website',
      'staffing solutions portal',
      'freelance marketplace',
      'service marketplace',
      'on-demand service app',
      'home services platform',
      'plumber electrician booking',
      'cleaning services website',
      'pest control booking',
      'packers movers website',
      'waste management portal',
      'recycling sustainability portal',
      'NGO nonprofit website',
      'charity donation platform',
      'fundraising crowdfunding website',
      'social community platform',
      'forum discussion board',
      'Q&A platform development',
      'knowledge base wiki',
      'documentation portal',
      'help desk support system',
      'ticketing system integration',
      'live chat integration',
      'chatbot AI integration',
      'WhatsApp Business API',
      'Facebook Messenger integration',
      'Instagram shopping integration',
      'Pinterest shopping integration',
      'TikTok marketing integration',
      'YouTube channel integration',
      'Twitter social integration',
      'LinkedIn company page',
      'government portal development',
      'public sector website',
      'municipal corporation portal',
      'smart city solutions',
      'voting election system',
      'public grievance portal',
      'citizen services platform',
      'defense aerospace website',
      'agriculture farming portal',
      'dairy cooperative website',
      'poultry farming management',
      'fisheries aquaculture portal',
      'mining extraction website',
      'oil gas energy portal',
      'renewable energy solar website',
      'wind power plant portal',
      'hydroelectric project website',
      'power distribution system',
      'electricity board portal',
      'water supply management',
      'sewage treatment portal',
      'irrigation department website',
      'forest environment portal',
      'wildlife conservation website',
      'climate change initiative portal',
      'pollution control monitoring',
      'weather forecasting system',
      'disaster management portal',
      'emergency response system',
      'ambulance fire brigade tracking',
      'police law enforcement portal',
      'court judiciary website',
      'prison correctional system',
      'immigration visa portal',
      'passport seva kendra',
      'aadhar card services',
      'pan card application',
      'voter id registration',
      'driving license portal',
      'vehicle registration RTO',
      'transport department website',
      'road highway portal',
      'railway metro website',
      'airport aviation portal',
      'shipping maritime website',
      'port trust management',
      'customs excise portal',
      'income tax department',
      'GST goods services tax',
      'central excise customs',
      'company affairs MCA portal',
      'startup India registration',
      'make in India initiative',
      'digital India campaign',
      'skill India development',
      'standup India entrepreneurship',
      'mudra loan application',
      'msme udyam registration',
      'export import trade portal',
      'dgft foreign trade',
      'commerce industry ministry',
      'textiles handloom portal',
      'khadi village industries',
      'ayush ayurveda yoga',
      'health wellness portal',
      'medical education nbems',
      'nursing council portal',
      'pharmacy council pci',
      'dental council dci',
      'medical council nmc',
      'veterinary council bvci',
      'bar council abc',
      'icai chartered accountant',
      'icsi company secretary',
      'icmai cost accountant',
      'nda national defence',
      'cds combined defence',
      'afcat air force',
      'ssc staff selection',
      'upsc civil services',
      'ibps banking personnel',
      'sbi probationary officer',
      'rbi grade b officer',
      'lic aao administrative',
      'nicl assistant manager',
      'oicl ao insurance',
      'uiic limited recruitment',
      'aiims nursing officer',
      'pgimer medical entrance',
      'jipmer mbbs admission',
      'neet ug pg medical',
      'jee main engineering',
      'jee advanced iit',
      'bitsat bits pilani',
      'vit vellore entrance',
      'srmjeee sr university',
      'manipal entrance test',
      'komed kasturba medical',
      'nmims management aptitude',
      'cat mba iim',
      'xat xlri admission',
      'snap symbiosis test',
      'mat management aptitude',
      'cmat b-school entrance',
      'atma management test',
      'mah mba cet',
      'ts pgecet telangana',
      'ap eamcet andhra',
      'kcet karnataka',
      'tancet tamilnadu',
      'rjeep rajasthan',
      'hstes haryana',
      'hp tac himachal',
      'jcece jharkhand',
      'oprat odisha',
      'pb cet punjab',
      'gcet goa common',
      'tripura joint entrance',
      'assam cee common',
      'meghali entrance',
      'nagaland joint entrance',
      'mizoram entrance test',
      'arunachal pradesh entrance',
      'sikkim manipal entrance',
      'uttrakhand entrance',
      'jammu kashmir entrance',
      'ladakh entrance test',
      'chandigarh entrance',
      'delhi university du',
      'ipu ggsipu delhi',
      'jamia millia islamia',
      'amu aligarh muslim',
      'bhu banaras hindu',
      'dhruva sam skrit',
      'cuett common university',
      'ignou distance education',
      'nios open schooling',
      'cbse central board',
      'cisce indian council',
      'ib international baccalaureate',
      'igcse cambridge international',
      'state board education',
      'kv kendriya vidyalaya',
      'nv navodaya vidyalaya',
      'awes army welfare',
      'air force school afs',
      'navy children school',
      'railway schools rcf',
      'dae public school',
      'tata public school',
      'birla public school',
      'modi public school',
      'agarwal public school',
      'dps delhi public',
      'springdales school',
      'bal bharti school',
      'mount litera school',
      'pathways world school',
      'shishya school',
      'good earth school',
      'woodstock school',
      'doon school dehradun',
      'mayo college ajmer',
      'colonels brightland',
      'welham girls school',
      'welham boys school',
      'heritage school roorkee',
      'united world colleges',
      'ecole mondiale school',
      'international school bangalore',
      'canadian school chennai',
      'british school new delhi',
      'american school bombay',
      'german school calcutta',
      'french school puducherry',
      'japanese school hyderabad',
      'korean school pune',
      'chinese school mumbai',
      'singapore school gurgaon',
      'malaysian school noida',
      'thai school faridabad',
      'indonesian school ghaziabad',
      'vietnamese school greater noida',
      'philippine school manesar',
      'australian school dwarka',
      'new zealand school rohini',
      'south african school vaishali',
      'canadian international school',
      'global indian international',
      'euro school international',
      'orchids international',
      'glendale international',
      'delhi public international',
      'podar international school',
      ' Ryan international school',
      'fravashi academy school',
      'the lexicon international',
      'don bosco school',
      'st xaviers school',
      'st marys school',
      'convent of jesus mary',
      'carmel convent school',
      'presentation convent school',
      'lourdes matha school',
      'holy child school',
      'sacred heart school',
      'little flower school',
      'infant jesus school',
      'good shepherd school',
      'auxilium school',
      'ascension school',
      'nazareth school',
      'rosary school',
      'annunciation school',
      'visitation school',
      'assumption school',
      'immaculate conception',
      'holy family school',
      'holy trinity school',
      'holy spirit school',
      'holy cross school',
      'holy angels school',
      'all saints school',
      'saint joseph school',
      'saint francis school',
      'saint anthony school',
      'saint paul school',
      'saint peter school',
      'saint john school',
      'saint thomas school',
      'saint james school',
      'saint andrew school',
      'saint michael school',
      'saint gabriel school',
      'saint raphael school',
      'saint stephen school',
      'saint marks school',
      'saint lukes school',
      'saint matthew school',
      'website designing company delhi',
      'website designing company mumbai',
      'website designing company bangalore',
      'website designing company chennai',
      'website designing company kolkata',
      'website designing company hyderabad',
      'website designing company pune',
      'website designing company ahmedabad',
      'website designing company jaipur',
      'website designing company lucknow',
      'website designing company kanpur',
      'website designing company nagpur',
      'website designing company indore',
      'website designing company thane',
      'website designing company bhopal',
      'website designing company visakhapatnam',
      'website designing company patna',
      'website designing company vadodara',
      'website designing company ghaziabad',
      'website designing company ludhiana',
      'website designing company agra',
      'website designing company nashik',
      'website designing company faridabad',
      'website designing company meerut',
      'website designing company rajkot',
      'website designing company kalyan-dombivli',
      'website designing company vasai-virar',
      'website designing company varanasi',
      'website designing company srinagar',
      'website designing company aurangabad',
      'website designing company dhanbad',
      'website designing company amritsar',
      'website designing company navi mumbai',
      'website designing company allahabad',
      'website designing company ranchi',
      'website designing company haora',
      'website designing company coimbatore',
      'website designing company jabalpur',
      'website designing company gwalior',
      'website designing company vijayawada',
      'website designing company jodhpur',
      'website designing company madurai',
      'website designing company raipur',
      'website designing company kota',
      'website designing company guwahati',
      'website designing company chandigarh',
      'website designing company solapur',
      'website designing company hubballi-dharwad',
      'website designing company tiruchirappalli',
      'website designing company bareilly',
      'website designing company mysore',
      'website designing company tiruppur',
      'website designing company gurgaon',
      'website designing company aligarh',
      'website designing company jalandhar',
      'website designing company bhubaneswar',
      'website designing company salem',
      'website designing company warangal',
      'website designing company guntur',
      'website designing company bhiwandi',
      'website designing company bhavnagar',
      'website designing company dehradun',
      'website designing company anantapur',
      'website designing company gangtok',
      'website designing company imphal',
      'website designing company shimla',
      'website designing company itanagar',
      'website designing company agartala',
      'website designing company shillong',
      'website designing company aizawl',
      'website designing company kohima',
      'website designing company dimapur',
      'website designing company darjeeling',
      'website designing company kalimpong',
      'website designing company siliguri',
      'website designing company asansol',
      'website designing company durgapur',
      'website designing company bardhaman',
      'website designing company malda',
      'website designing company baharampur',
      'website designing company habra',
      'website designing company ranaghat',
      'website designing company krishnanagar',
      'website designing company shantipur',
      'website designing company dhulian',
      'website designing company jangipur',
      'website designing company rampurhat',
      'website designing company bolpur',
      'website designing company surul',
      'website designing company kopai',
      'website designing company prantik',
      'website designing company mayurbhanj',
      'website designing company balasore',
      'website designing company bhadrak',
      'website designing company cuttack',
      'website designing company puri',
      'website designing company konark',
      'website designing company bhubaneshwar',
      'website designing company khordha',
      'website designing company nayagarh',
      'website designing company kandhamal',
      'website designing company boudh',
      'website designing company sonepur',
      'website designing company balangir',
      'website designing company nuapada',
      'website designing company kalahandi',
      'website designing company rayagada',
      'website designing company koraput',
      'website designing company Malkangiri',
      'website designing company nawarangpur',
      'website designing company jagatsinghapur',
      'website designing company kendrapara',
      'website designing company jajpur',
      'website designing company keonjhar',
      'website designing company sundargarh',
      'website designing company sambalpur',
      'website designing company bargarh',
      'website designing company jharsuguda',
      'website designing company deogarh',
      'website designing company anugul',
      'website designing company dhenkanal',
      'website designing company ganjam',
      'best website company near me',
      'top website designers nearby',
      'affordable web developer near me',
      'professional website agency near me',
      'local website designing company',
      'website maker near my location',
      'website builder services nearby',
      'cheap website design near me',
      'custom website developer nearby',
      'ecommerce website specialist near me',
      'wordpress expert near me',
      'shopify developer near me',
      'wix website designer nearby',
      'squarespace specialist near me',
      'webflow developer near me',
      'react developer near me',
      'angular developer near me',
      'vue developer near me',
      'php developer near me',
      'laravel developer near me',
      'python developer near me',
      'django developer near me',
      'flask developer near me',
      'nodejs developer near me',
      'express developer near me',
      'mongodb developer near me',
      'mysql developer near me',
      'postgresql developer near me',
      'oracle developer near me',
      'sql server developer near me',
      'firebase developer near me',
      'aws developer near me',
      'azure developer near me',
      'gcp developer near me',
      'digitalocean developer near me',
      'heroku developer near me',
      'netlify developer near me',
      'vercel developer near me',
      'cloudflare developer near me',
      'godaddy developer near me',
      'hostgator developer near me',
      'bluehost developer near me',
      'siteground developer near me',
      'dreamhost developer near me',
      'iname developer near me',
      'bigrock developer near me',
      'hostinger developer near me',
      'resellerclub developer near me',
      'milesweb developer near me',
      'hostsoch developer near me',
      'roarhost developer near me',
      'serverwala developer near me',
      'chekhost developer near me',
      'budgethost developer near me',
      'thrivenet developer near me',
      'vzy host developer near me',
      'WebHostFace developer near me',
      'youst developer near me',
      'contabo developer near me',
      'exabytes developer near me',
      'vmocha developer near me',
      'shinjiru developer near me',
      'serverfield developer near me',
      'layerstack developer near me',
      'cloudsigma developer near me',
      'kamatera developer near me',
      'liquidweb developer near me',
      'inmotion developer near me',
      'a2hosting developer near me',
      'greengeeks developer near me',
      'interserver developer near me',
      'namecheap developer near me',
      'porkbun developer near me',
      'dynadot developer near me',
      'name.com developer near me',
      'hover developer near me',
      'domain.com developer near me',
      '101domain developer near me',
      'epik developer near me',
      'register.com developer near me',
      'networksolutions developer near me',
      'tucows developer near me',
      'enom developer near me',
      'gandi developer near me',
      'ovh developer near me',
      '1and1 developer near me',
      'ionos developer near me',
      'united-domains developer near me',
      'sedo developer near me',
      'afternic developer near me',
      'flippa developer near me',
      'empireflippers developer near me',
      'fe international developer near me',
      'website brokers developer near me',
      'business brokers developer near me',
      'domain brokers developer near me'
    ],
  });
}

const faqs = [
  {
    question: 'What types of websites do you develop?',
    answer: 'We develop all types of websites including corporate websites, e-commerce stores, portfolio websites, landing pages, CMS-based websites, custom web applications, progressive web apps (PWA), static websites, dynamic websites, single-page applications (SPA), membership portals, customer portals, intranet/extranet portals, SaaS platforms, marketplace websites, booking/reservation systems, learning management systems (LMS), news/magazine portals, blog/content websites, donation/crowdfunding platforms, job boards, classified ads portals, forum/community sites, and enterprise web applications.',
  },
  {
    question: 'How long does it take to develop a website?',
    answer: 'Typical website development timelines vary by complexity: Static websites (1-2 weeks), Basic business websites (2-3 weeks), Dynamic CMS websites with WordPress/Strapi (3-5 weeks), E-commerce websites with Shopify/WooCommerce (4-8 weeks), Custom web applications with React/Next.js (6-12 weeks), Enterprise portals and SaaS platforms (12-24 weeks). Timelines depend on project scope, design complexity, number of integrations, content readiness, and client feedback cycles. We follow agile methodology with regular sprint reviews to ensure timely delivery.',
  },
  {
    question: 'Do you provide website maintenance after launch?',
    answer: 'Yes, we offer comprehensive website maintenance packages including security updates, content updates, performance optimization, bug fixes, technical support, uptime monitoring, backup management, SSL certificate renewal, domain renewal assistance, plugin/theme updates, database optimization, broken link fixing, malware removal, speed optimization, mobile responsiveness testing, cross-browser compatibility checks, analytics reporting, conversion rate optimization, A/B testing implementation, heatmap analysis, user behavior tracking, SEO audits, content strategy consulting, and training sessions for your team.',
  },
  {
    question: 'Will my website be mobile-friendly and SEO optimized?',
    answer: 'Absolutely! All our websites are built with mobile-first responsive design ensuring perfect display on smartphones, tablets, laptops, and desktops. We follow SEO best practices including semantic HTML5 structure, proper heading hierarchy (H1-H6), meta tags optimization (title, description, keywords, OG tags), image optimization with alt text, fast loading speeds (Core Web Vitals scores 90+), schema markup implementation (Organization, Product, Service, FAQPage, Review schemas), XML sitemap generation, robots.txt configuration, canonical URLs, 301 redirects setup, Google Analytics 4 integration, Google Search Console setup, Google My Business optimization, local SEO optimization, voice search optimization, featured snippet optimization, and conversion tracking setup.',
  },
  {
    question: 'What is the cost of website development?',
    answer: 'Our transparent website development pricing: Static websites (₹15,000-₹25,000), Basic business websites (₹25,000-₹45,000), Dynamic CMS websites (₹35,000-₹75,000), E-commerce websites (₹45,000-₹2,00,000), Custom web applications (₹75,000-₹5,00,000), Enterprise portals (₹2,00,000-₹10,00,000+), Progressive Web Apps PWA (₹1,00,000-₹4,00,000), SaaS platforms (₹3,00,000-₹15,00,000+). Additional services: Domain registration (₹800-₹1,500/year), Hosting (₹3,000-₹25,000/year), SSL certificate (₹1,000-₹10,000/year), Email hosting (₹3,000-₹12,000/year), Content writing (₹500-₹2,000/page), Logo/branding (₹5,000-₹25,000), SEO packages (₹15,000-₹75,000/month). All prices include responsive design, basic SEO, and 1-3 months complimentary support.',
  },
  {
    question: 'Do you provide hosting and domain registration?',
    answer: 'Yes, we provide complete hosting and domain registration services. We help you choose and register the perfect domain name (.com, .in, .co.in, .org, .net, .io extensions available). For hosting, we offer: Shared hosting (₹3,000-₹8,000/year) for small websites, VPS hosting (₹15,000-₹50,000/year) for growing businesses, Dedicated servers (₹60,000-₹2,00,000/year) for high-traffic enterprises, Cloud hosting on AWS/Azure/GCP (pay-as-you-go pricing), Managed WordPress hosting (₹5,000-₹15,000/year), E-commerce hosting with enhanced security (₹10,000-₹30,000/year). All hosting plans include 99.9% uptime guarantee, daily backups, SSL certificates, CDN integration (Cloudflare), DDoS protection, 24/7 technical support, one-click staging environments, git integration, SSH access, and unlimited bandwidth options.',
  },
  {
    question: 'Do you redesign existing websites?',
    answer: 'Yes! We specialize in website redesigns and modernization. Our redesign process includes: Comprehensive audit of your current website (design, UX, performance, SEO, security), Competitor analysis and industry benchmarking, User behavior analysis using heatmaps and analytics, Information architecture restructuring for better navigation, Modern UI/UX design with latest trends, Mobile responsiveness improvement, Page speed optimization (targeting <3 second load time), Content strategy and copywriting improvements, SEO preservation with proper 301 redirects, Migration to modern technology stack (React/Next.js if needed), Integration of new features and functionalities, Accessibility improvements (WCAG 2.1 compliance), Security enhancements (SSL, firewall, malware scanning), Training and documentation for your team. Redesign projects start from ₹20,000 and typically take 3-6 weeks depending on complexity.',
  },
  {
    question: 'Which CMS platforms do you specialize in?',
    answer: 'We specialize in multiple CMS platforms to match your specific needs: WordPress (most popular, 40% of all websites, excellent for blogs/business sites, 50,000+ plugins, SEO-friendly, starting at ₹25,000), Strapi (modern headless CMS, API-first, perfect for React/Next.js apps, GraphQL support, starting at ₹75,000), WooCommerce (WordPress-based e-commerce, flexible, large extension ecosystem, starting at ₹45,000), Shopify (dedicated e-commerce platform, hosted solution, excellent support, transaction fees apply, starting at ₹35,000 + monthly plan), Magento/Adobe Commerce (enterprise e-commerce, highly customizable, scalable, starting at ₹2,00,000), Drupal (complex enterprise sites, robust user permissions, multilingual support, starting at ₹1,00,000), Joomla (versatile CMS, good for social networks/portals, starting at ₹50,000), Ghost (modern publishing platform, excellent for bloggers/journalists, membership features, starting at ₹60,000), Sanity.io (developer-friendly headless CMS, real-time collaboration, structured content, starting at ₹90,000), Contentful (enterprise headless CMS, omnichannel content delivery, starting at ₹1,50,000). For most small-medium business websites, we recommend WordPress for its ease of use, extensive plugin ecosystem, excellent SEO capabilities, and cost-effectiveness. For modern web applications requiring headless architecture and API-driven content, we recommend Strapi or Sanity.io.',
  },
  {
    question: 'Can you integrate payment gateways and third-party APIs?',
    answer: 'Absolutely! We integrate all major Indian and international payment gateways: Razorpay (UPI, cards, net banking, wallets, EMI, subscriptions, starting at ₹2,500 integration), PayU (multiple payment modes, international payments, starting at ₹3,000), CCAvenue (200+ payment options, multi-currency, starting at ₹3,500), Paytm Payment Gateway (QR codes, wallets, UPI, starting at ₹2,000), Stripe (developer-friendly, international cards, subscriptions, starting at ₹5,000), PayPal (global payments, buyer protection, starting at ₹4,000), Instamojo (simple setup, digital products, starting at ₹1,500), Cashfree (instant settlements, UPI focus, starting at ₹2,000), PhonePe PG (growing popularity, UPI integration, starting at ₹2,500), Amazon Pay (trusted brand, cashback offers, starting at ₹3,000). Third-party API integrations: CRM systems (Zoho CRM ₹15,000+, Salesforce ₹25,000+, HubSpot ₹20,000+), Email marketing (Mailchimp ₹8,000+, SendGrid ₹10,000+, Constant Contact ₹12,000+), SMS gateways (MSG91 ₹5,000+, TextLocal ₹6,000+, KAPSYSTEM ₹4,500+), WhatsApp Business API (₹15,000+ integration), Google Maps/Places API (₹8,000+), Social media (Facebook, Instagram, LinkedIn, Twitter APIs ₹10,000+ each), ERP systems (SAP, Oracle, Microsoft Dynamics custom quoting), Accounting software (Tally, QuickBooks, Xero ₹12,000+), Inventory management (custom solutions), Booking systems (Calendly, Acuity ₹8,000+), Live chat (Zendesk, Intercom, Tawk.to ₹10,000+), Video conferencing (Zoom, Google Meet, Jitsi ₹15,000+), Cloud storage (AWS S3, Google Cloud Storage, Dropbox ₹10,000+), Analytics (Google Analytics 4, Mixpanel, Hotjar ₹12,000+), Marketing automation (HubSpot, Marketo, Pardot custom quoting). All integrations include thorough testing, documentation, and training.',
  },
  {
    question: 'Do you provide multilingual website development?',
    answer: 'Yes! We specialize in multilingual website development supporting English, Hindi, and all 22 scheduled languages of India plus international languages. Our multilingual solutions include: Language switcher with flag icons, Unicode-compliant fonts for Devanagari/Bengali/Gurmukhi/Telugu/Tamil/Kannada/Malayalam/Oriya/Arabic scripts, hreflang tags for international SEO (critical for ranking in different language searches), RTL (right-to-left) support for Arabic/Urdu/Persian/Hebrew, Machine translation integration (Google Translate API, Microsoft Translator) with human review, Professional human translation services (₹1-₹5 per word depending on language), CMS training for managing multiple languages, Language-specific URL structures (/en/, /hi/, /mr/ subdirectories or en.example.com subdomains), Culturally appropriate color schemes and imagery, Local payment methods and currency converters, Region-specific content and promotions, Multi-location SEO optimization. Popular multilingual plugins: WPML (WordPress Multilingual Plugin - ₹3,500/year), Polylang (free + premium ₹99/year), Weglot (cloud-based, €99-€699/year), TranslatePress (visual translation, €89-€239/year). Multilingual setup starts from ₹8,000 per additional language (one-time) + translation costs. This service is especially popular for: Tourism/hospitality targeting international visitors, Export businesses showcasing products globally, Educational institutions attracting foreign students, Healthcare facilities serving medical tourists, E-commerce stores expanding to new markets, Government initiatives promoting Digital India, NGOs working in rural areas with regional languages.',
  },
  {
    question: 'Do you offer white-label website development for agencies?',
    answer: 'Yes! We provide white-label website development services for digital marketing agencies, design studios, and IT consultants. Benefits: Your clients never know we built the site (complete white-label), Your branding on all deliverables and documentation, Flexible engagement models (per-project, retainer, revenue-share), Scalable capacity without hiring overhead, Quality assurance with dedicated project managers, Competitive pricing with agency discounts (20-40% off retail), Fast turnaround times (rush projects available), NDA and confidentiality agreements, Portfolio usage rights (with your permission), Ongoing support under your brand. Services available: Website design and development, E-commerce solutions, CMS customization, API integrations, Website maintenance and support, Emergency bug fixes, Performance optimization, Security audits, SEO services (white-label), Content writing services. Typical arrangements: Per-project basis (most common), Monthly retainer (discounted rates), Revenue share (10-20% of project value), Hourly basis (₹800-₹2,500/hour depending on expertise). We currently partner with 15+ agencies across Delhi NCR, Mumbai, Bangalore, and Chandigarh, delivering 50+ projects annually. Contact us for agency partnership inquiries.',
  },
  {
    question: 'What is your website development process?',
    answer: 'Our proven 6-phase website development process ensures quality, transparency, and timely delivery: Phase 1 - Discovery & Planning (1-2 weeks): Requirement gathering workshops, stakeholder interviews, target audience analysis, competitor research, technical feasibility study, project roadmap creation, technology stack selection, resource allocation, risk assessment. Phase 2 - Design & Prototyping (2-3 weeks): Information architecture (sitemap, user flows), Wireframing (low-fidelity layouts), Visual design mockups (high-fidelity designs in Figma/Adobe XD), Interactive prototypes, Client feedback and revisions (up to 3 rounds), Final design approval. Phase 3 - Development (3-8 weeks): Environment setup (development, staging, production), Database design and implementation, Frontend development (HTML/CSS/JavaScript with React/Next.js), Backend development (Node.js/PHP/Python with Laravel/Express), CMS integration and customization, Third-party API integrations, Payment gateway setup, Content population (if included), Regular sprint demos (every 1-2 weeks). Phase 4 - Testing & Quality Assurance (1-2 weeks): Functional testing (all features work correctly), Cross-browser testing (Chrome, Firefox, Safari, Edge), Cross-device testing (desktop, tablet, mobile), Performance testing (page speed, Core Web Vitals), Security testing (vulnerability scanning, penetration testing), Usability testing (user experience validation), Accessibility testing (WCAG 2.1 compliance), SEO audit (on-page factors), Client UAT (User Acceptance Testing), Bug fixes and refinements. Phase 5 - Launch & Deployment (3-5 days): DNS configuration and domain pointing, SSL certificate installation, Database migration to production server, File transfer via FTP/SFTP or Git, Environment variables configuration, Performance optimization (caching, CDN setup, image compression), Monitoring tools setup (uptime, analytics, error tracking), Backup system configuration, Go-live checklist completion, Client training session. Phase 6 - Support & Maintenance (ongoing): 30-90 days complimentary post-launch support, Bug fixes and troubleshooting, Security updates and patches, Performance monitoring and optimization, Content updates (as per package), Monthly performance reports, Quarterly strategy reviews, Upselling new features and enhancements. Throughout the process: Weekly status calls, Dedicated Slack channel for communication, Project management tool access (Trello/Asana/Jira), Transparent time tracking, Regular code reviews, Documentation updates.',
  },
  {
    question: 'Which cities in India do you serve for website development?',
    answer: 'We proudly serve clients pan-India with physical offices in Moradabad, Uttar Pradesh. Major cities where we regularly deliver website development projects include: Delhi NCR (Delhi, Gurgaon/Gurugram, Noida, Greater Noida, Faridabad, Ghaziabad), Maharashtra (Mumbai, Pune, Nagpur, Nashik, Aurangabad, Thane), Karnataka (Bangalore/Bengaluru, Mysore, Mangalore, Hubli), Tamil Nadu (Chennai, Coimbatore, Madurai, Tiruchirappalli, Salem), Telangana (Hyderabad, Warangal), West Bengal (Kolkata, Howrah, Durgapur, Siliguri), Gujarat (Ahmedabad, Surat, Vadodara, Rajkot, Gandhinagar), Rajasthan (Jaipur, Jodhpur, Udaipur, Kota, Ajmer), Punjab (Ludhiana, Amritsar, Jalandhar, Chandigarh, Patiala), Madhya Pradesh (Indore, Bhopal, Jabalpur, Gwalior), Kerala (Kochi, Thiruvananthapuram, Kozhikode, Thrissur), Haryana (Gurgaon, Faridabad, Panipat, Ambala, Karnal), Uttar Pradesh (Lucknow, Kanpur, Varanasi, Agra, Prayagraj, Meerut, Bareilly, Aligarh, Moradabad, Saharanpur, Gorakhpur), Bihar (Patna, Gaya, Bhagalpur), Odisha (Bhubaneswar, Cuttack, Rourkela), Jharkhand (Ranchi, Jamshedpur, Dhanbad), Chhattisgarh (Raipur, Bilaspur), Uttarakhand (Dehradun, Haridwar, Roorkee, Haldwani), Himachal Pradesh (Shimla, Dharamshala, Manali, Solan), Jammu & Kashmir (Srinagar, Jammu), Assam (Guwahati, Dispur), Goa (Panaji, Margao), Puducherry, Tripura (Agartala), Manipur (Imphal), Meghalaya (Shillong), Nagaland (Kohima, Dimapur), Mizoram (Aizawl), Sikkim (Gangtok), Arunachal Pradesh (Itanagar). We offer both remote services (video calls, emails, project management tools) and on-site consultations (subject to travel charges for locations beyond 50km from our office). Many cities have local partners for faster delivery and support.',
  },
];

export default function WebsiteDesignDevelopmentPage() {
  const serviceSchema = generateServiceSchema(
    'Website Designing and Development Services',
    'Professional website design and development services for businesses of all sizes. Custom responsive websites with SEO optimization and CMS integration.'
  );

  const productSchema = generateProductSchema(
    'Website Design & Development Package',
    'Complete website design and development solution with responsive design, SEO optimization, and CMS integration',
    '25000'
  );

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Website Development Platform',
    description: 'Professional website design and development platform with responsive layouts, SEO optimization, CMS integration, and e-commerce solutions for businesses of all sizes.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, WordPress, Next.js, React',
    price: '25000',
    rating: 4.9,
    reviewCount: 156,
  });

  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    'article h1',
    'article h2',
  ]);

  const faqSchema = generateFAQSchema(faqs);
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Website Development', url: '/website-designing-and-development-company' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema]} />
      
      <Hero
        title="Professional Website Designing & Development"
        subtitle="Transform Your Online Presence"
        description="Custom, responsive websites that drive results. SEO-optimized, fast-loading, and built for conversions."
        gradient="purple"
      />

      {/* What is Website Development - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-pink-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-purple-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Website Development?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Website Development</strong> is the process of creating, building, and maintaining websites for the internet. It encompasses web design, content creation, client-side/server-side scripting, network security configuration, and e-commerce development. Modern web development uses technologies like HTML, CSS, JavaScript, React, Next.js, and WordPress to create responsive, SEO-optimized, and user-friendly websites that drive business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Website development starting at ₹25,000
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  React, Next.js, WordPress, custom PHP
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Mobile-first responsive design
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  2-16 weeks development timeline
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  SEO optimization included
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  CMS integration & training provided
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Web Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From simple landing pages to complex web applications, we deliver solutions that elevate your brand and engage your audience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🌐',
                title: 'Corporate Websites',
                description: 'Professional business websites with modern design, SEO optimization, and CMS integration for easy content management.',
                features: ['Responsive Design', 'SEO Optimized', 'CMS Integration', 'Contact Forms'],
              },
              {
                icon: '🛒',
                title: 'E-Commerce Development',
                description: 'Full-featured online stores with payment gateway integration, inventory management, and order tracking.',
                features: ['Shopping Cart', 'Payment Gateway', 'Product Catalog', 'Order Management'],
              },
              {
                icon: '📱',
                title: 'Progressive Web Apps',
                description: 'App-like web experiences that work offline, send push notifications, and install on home screens.',
                features: ['Offline Support', 'Push Notifications', 'App-Like UX', 'Fast Loading'],
              },
              {
                icon: '💼',
                title: 'Custom Web Applications',
                description: 'Tailored web solutions built to your exact specifications with scalable architecture and robust features.',
                features: ['Custom Features', 'Scalable Architecture', 'API Integration', 'Cloud Deployment'],
              },
              {
                icon: '📄',
                title: 'Landing Pages',
                description: 'High-converting landing pages optimized for marketing campaigns and lead generation.',
                features: ['Conversion Optimized', 'A/B Testing Ready', 'Analytics Integration', 'Fast Performance'],
              },
              {
                icon: '🎨',
                title: 'UI/UX Design',
                description: 'User-centered design that creates intuitive, engaging experiences for your audience.',
                features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
              },
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose EifaSoft for Website Development?
            </h2>
            <p className="text-lg text-purple-100 max-w-3xl mx-auto">
              We combine technical expertise with creative design to deliver websites that not only look great but perform exceptionally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '⚡', title: 'Lightning Fast', description: 'Optimized for speed with Core Web Vitals scores of 90+' },
              { icon: '📱', title: 'Mobile First', description: 'Responsive design that works perfectly on all devices' },
              { icon: '🔍', title: 'SEO Ready', description: 'Built-in SEO best practices for better search rankings' },
              { icon: '🔒', title: 'Secure & Reliable', description: 'Industry-standard security with SSL and data protection' },
              { icon: '♿', title: 'Accessible', description: 'WCAG 2.1 compliant for inclusive user experiences' },
              { icon: '📊', title: 'Analytics Ready', description: 'Integrated tracking for data-driven decisions' },
              { icon: '💰', title: 'Cost Effective', description: 'Transparent pricing with no hidden costs' },
              { icon: '🛠️', title: 'Ongoing Support', description: '24/7 technical support and maintenance' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modern Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies to build fast, scalable, and maintainable websites.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'TypeScript', 'HTML5/CSS3'].map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'PHP', 'Python', 'Laravel', 'Express.js', 'MySQL/PostgreSQL'].map((tech) => (
                  <span key={tech} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">CMS & E-Commerce</h3>
              <div className="flex flex-wrap gap-2">
                {['WordPress', 'Strapi', 'Shopify', 'WooCommerce', 'Magento', 'Custom CMS'].map((tech) => (
                  <span key={tech} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Website Solutions */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Website Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized web development services tailored to your industry&apos;s unique requirements and compliance needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                industry: 'Healthcare & Medical',
                icon: '🏥',
                solutions: ['Hospital Websites', 'Clinic Management', 'Telemedicine Platforms', 'Appointment Booking', 'Patient Portals', 'HIPAA Compliance'],
              },
              {
                industry: 'Education & E-Learning',
                icon: '🎓',
                solutions: ['School/College Websites', 'LMS Development', 'Online Course Platforms', 'Student Portals', 'Exam Management', 'Virtual Classrooms'],
              },
              {
                industry: 'E-Commerce & Retail',
                icon: '🛍️',
                solutions: ['Online Stores', 'Multi-Vendor Marketplaces', 'Inventory Management', 'Payment Integration', 'Order Tracking', 'POS Systems'],
              },
              {
                industry: 'Real Estate & Property',
                icon: '🏠',
                solutions: ['Property Portals', 'Listing Websites', 'CRM Integration', 'Virtual Tours', 'Lead Management', 'Mortgage Calculators'],
              },
              {
                industry: 'Legal & Law Firms',
                icon: '⚖️',
                solutions: ['Attorney Websites', 'Case Management', 'Client Portals', 'Appointment Scheduling', 'Document Management', 'Billing Systems'],
              },
              {
                industry: 'Finance & Banking',
                icon: '💰',
                solutions: ['Banking Portals', 'Investment Platforms', 'Loan Calculators', 'Payment Gateways', 'Financial Dashboards', 'Compliance Reporting'],
              },
              {
                industry: 'Manufacturing & Industrial',
                icon: '🏭',
                solutions: ['Corporate Websites', 'Product Catalogs', 'Dealer Portals', 'Supply Chain Management', 'ERP Integration', 'Quality Control Systems'],
              },
              {
                industry: 'Hospitality & Tourism',
                icon: '🏨',
                solutions: ['Hotel Websites', 'Resort Booking', 'Restaurant Ordering', 'Travel Portals', 'Tour Management', 'Reservation Systems'],
              },
              {
                industry: 'Automotive',
                icon: '🚗',
                solutions: ['Dealer Websites', 'Service Booking', 'Parts Catalog', 'Test Drive Scheduling', 'Financing Calculators', 'Customer Portals'],
              },
              {
                industry: 'Non-Profit & NGO',
                icon: '❤️',
                solutions: ['Donation Platforms', 'Volunteer Management', 'Event Registration', 'Fundraising Campaigns', 'Member Portals', 'Impact Reporting'],
              },
              {
                industry: 'Professional Services',
                icon: '💼',
                solutions: ['Consulting Websites', 'Accounting Firms', 'Tax Consultants', 'Insurance Agents', 'Financial Advisors', 'Business Coaches'],
              },
              {
                industry: 'Media & Entertainment',
                icon: '🎬',
                solutions: ['News Portals', 'Magazine Websites', 'Video Streaming', 'Podcast Platforms', 'Artist Portfolios', 'Event Management'],
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.industry}</h3>
                <ul className="space-y-2">
                  {item.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <svg className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Type Comparison Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose the Right Website Type for Your Business
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding different website types helps you make an informed decision based on your business needs and budget.
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-white border rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-bold">Website Type</th>
                  <th className="px-4 py-4 text-left font-bold">Best For</th>
                  <th className="px-4 py-4 text-left font-bold">Timeline</th>
                  <th className="px-4 py-4 text-left font-bold">Starting Price</th>
                  <th className="px-4 py-4 text-left font-bold">Key Features</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-4 font-semibold text-gray-900">Static Website</td>
                  <td className="px-4 py-4 text-sm text-gray-700">Small businesses, portfolios, landing pages</td>
                  <td className="px-4 py-4 text-sm text-gray-700">1-2 weeks</td>
                  <td className="px-4 py-4 text-sm text-purple-600 font-semibold">₹15,000</td>
                  <td className="px-4 py-4 text-sm text-gray-700">Fast loading, low maintenance, fixed content</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-4 font-semibold text-gray-900">Dynamic Website</td>
                  <td className="px-4 py-4 text-sm text-gray-700">Growing businesses, blogs, news sites</td>
                  <td className="px-4 py-4 text-sm text-gray-700">2-4 weeks</td>
                  <td className="px-4 py-4 text-sm text-purple-600 font-semibold">₹25,000</td>
                  <td className="px-4 py-4 text-sm text-gray-700">CMS integration, easy updates, interactive features</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-4 font-semibold text-gray-900">E-Commerce Website</td>
                  <td className="px-4 py-4 text-sm text-gray-700">Online stores, retail businesses</td>
                  <td className="px-4 py-4 text-sm text-gray-700">4-8 weeks</td>
                  <td className="px-4 py-4 text-sm text-purple-600 font-semibold">₹45,000</td>
                  <td className="px-4 py-4 text-sm text-gray-700">Shopping cart, payment gateway, inventory management</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-4 font-semibold text-gray-900">Progressive Web App (PWA)</td>
                  <td className="px-4 py-4 text-sm text-gray-700">Startups, service businesses, apps</td>
                  <td className="px-4 py-4 text-sm text-gray-700">6-10 weeks</td>
                  <td className="px-4 py-4 text-sm text-purple-600 font-semibold">₹75,000</td>
                  <td className="px-4 py-4 text-sm text-gray-700">Offline support, push notifications, app-like experience</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-4 font-semibold text-gray-900">Custom Web Application</td>
                  <td className="px-4 py-4 text-sm text-gray-700">Enterprises, SaaS, complex platforms</td>
                  <td className="px-4 py-4 text-sm text-gray-700">8-16 weeks</td>
                  <td className="px-4 py-4 text-sm text-purple-600 font-semibold">₹1,50,000+</td>
                  <td className="px-4 py-4 text-sm text-gray-700">Custom features, API integrations, scalable architecture</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-4 font-semibold text-gray-900">Enterprise Portal</td>
                  <td className="px-4 py-4 text-sm text-gray-700">Large organizations, institutions</td>
                  <td className="px-4 py-4 text-sm text-gray-700">12-24 weeks</td>
                  <td className="px-4 py-4 text-sm text-purple-600 font-semibold">₹3,00,000+</td>
                  <td className="px-4 py-4 text-sm text-gray-700">Multi-user roles, complex workflows, high security</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Not Sure Which Type You Need?</h3>
            <p className="text-gray-700 mb-4">
              Our experts will help you choose the perfect website type based on your:
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Business goals and objectives
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Target audience and user behavior
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Budget constraints and ROI expectations
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Future scalability requirements
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Technical requirements and integrations
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Timeline and launch deadlines
              </li>
            </ul>
            <button className="mt-6 bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to deliver high-quality websites on time and within budget.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Discovery & Planning', description: 'We analyze your requirements, target audience, and business goals to create a comprehensive project plan.' },
              { step: '02', title: 'Design & Prototyping', description: 'Our designers create wireframes and mockups that align with your brand identity and user experience goals.' },
              { step: '03', title: 'Development', description: 'We build your website using modern technologies, following best practices for performance and security.' },
              { step: '04', title: 'Testing & QA', description: 'Rigorous testing across devices, browsers, and scenarios to ensure flawless functionality.' },
              { step: '05', title: 'Launch & Deployment', description: 'We deploy your website to production with proper monitoring and optimization.' },
              { step: '06', title: 'Support & Maintenance', description: 'Ongoing support, updates, and optimization to keep your website running smoothly.' },
            ].map((phase, index) => (
              <div key={index} className="flex gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {phase.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose a package that fits your needs and budget. All packages include responsive design and SEO optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '₹25,000',
                description: 'Perfect for small businesses and startups',
                features: [
                  'Up to 5 pages',
                  'Responsive design',
                  'SEO optimization',
                  'Contact form',
                  '1 month support',
                  'Social media integration',
                ],
                highlighted: false,
              },
              {
                name: 'Professional',
                price: '₹45,000',
                description: 'Ideal for growing businesses',
                features: [
                  'Up to 15 pages',
                  'CMS integration',
                  'Advanced SEO',
                  'Blog functionality',
                  '3 months support',
                  'Analytics setup',
                  'Payment gateway',
                  'Email integration',
                ],
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large-scale projects',
                features: [
                  'Unlimited pages',
                  'Custom features',
                  'API integration',
                  'Advanced security',
                  '12 months support',
                  'Dedicated manager',
                  'Custom integrations',
                  'Performance optimization',
                ],
                highlighted: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 ${
                  plan.highlighted
                    ? 'bg-purple-600 text-white shadow-xl scale-105'
                    : 'bg-gray-50 text-gray-900'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-2">{plan.price}</div>
                <p className={`mb-6 ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        className={`w-5 h-5 mr-2 ${plan.highlighted ? 'text-purple-200' : 'text-green-500'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-white text-purple-600 hover:bg-gray-100'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-gray-600">
                Get a free consultation and quote for your website project.
              </p>
            </div>
            <ContactForm serviceName="Website Designing" />
          </div>
        </div>
      </section>
    </main>
  );
}
