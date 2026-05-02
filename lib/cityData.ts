/**
 * cityData.ts
 * Rich per-city & per-service data for GEO-targeted city-service pages.
 * Used by app/[city-service]/page.tsx to enrich all dynamic city pages.
 */

export interface CityProfile {
  areas: string[];          // Local neighbourhoods / zones
  nearbyCities: string[];   // Surrounding towns for GEO targeting
  industries: string[];     // Dominant local industries
  techEcosystem: string;    // One-sentence tech context
  landmark: string;         // Famous tagline / identity
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface ServiceProfile {
  processSteps: ProcessStep[];
  pricingTiers: PricingTier[];
  techStack: Record<string, string[]>;
  keyBenefits: Array<{ icon: string; title: string; description: string }>;
}

// ─────────────────────────── CITY PROFILES ───────────────────────────────────

export const cityProfiles: Record<string, CityProfile> = {
  moradabad: {
    areas: ['Civil Lines', 'Rampur Road', 'DB Road', 'Kanth Road', 'Thakurdwara', 'Pakbara', 'Katghar', 'Izzat Nagar'],
    nearbyCities: ['Rampur', 'Sambhal', 'Amroha', 'Bijnor', 'Hapur', 'Bareilly'],
    industries: ['Brass & Handicrafts (Pital Nagri)', 'Export Trade', 'Retail', 'Manufacturing', 'Agriculture'],
    techEcosystem: 'Emerging IT market with growing startup ecosystem and export e-commerce adoption',
    landmark: 'Brass City — Pital Nagri of India',
  },
  agra: {
    areas: ['Taj Ganj', 'Sadar Bazaar', 'Sikandra', 'Kamla Nagar', 'Sanjay Place', 'Dayalbagh', 'Fatehabad Road', 'Bodla'],
    nearbyCities: ['Mathura', 'Firozabad', 'Bharatpur', 'Hathras', 'Etawah', 'Aligarh'],
    industries: ['Tourism & Hospitality', 'Marble & Handicrafts', 'Leather Goods', 'Retail', 'Education'],
    techEcosystem: 'Tourism-driven digital economy with rapidly growing hotel-tech and e-commerce sector',
    landmark: 'City of the Taj Mahal — World Heritage Capital',
  },
  aligarh: {
    areas: ['Civil Lines', 'AMU Campus', 'Ramghat Road', 'Jai Nagar', 'Hamdard Nagar', 'Centre Point', 'Dodhpur', 'Quarsi'],
    nearbyCities: ['Hathras', 'Bulandshahr', 'Mathura', 'Agra', 'Kasganj', 'Etah'],
    industries: ['Lock Manufacturing', 'Education (AMU)', 'Hardware', 'Agriculture', 'Retail'],
    techEcosystem: 'Academic-tech convergence driven by AMU and local lock-industry digital transformation',
    landmark: 'Lock Capital of India',
  },
  bareilly: {
    areas: ['Civil Lines', 'Pilibhit Road', 'Badaun Road', 'Izatnagar', 'Subhash Nagar', 'Collectorganj', 'CB Ganj'],
    nearbyCities: ['Pilibhit', 'Badaun', 'Rampur', 'Moradabad', 'Shahjahanpur', 'Lakhimpur'],
    industries: ['Furniture', 'Zari Work', 'Agriculture', 'Retail', 'Education'],
    techEcosystem: 'Growing SME digital adoption with active e-commerce and retail digitisation',
    landmark: 'Zari & Furniture Capital of UP — Rohilkhand Hub',
  },
  meerut: {
    areas: ['Shastri Nagar', 'Hapur Road', 'Ganga Nagar', 'Modipuram', 'Pallavpuram', 'Kanker Khera', 'Saket'],
    nearbyCities: ['Ghaziabad', 'Hapur', 'Bulandshahr', 'Muzaffarnagar', 'Baghpat', 'Modinagar'],
    industries: ['Sports Goods', 'Scissors & Cutlery', 'Sugar Mills', 'Education', 'Retail'],
    techEcosystem: 'NCR-proximity driving IT adoption in sports-goods manufacturing and MSME sectors',
    landmark: 'Sports Goods Capital of India',
  },
  ghaziabad: {
    areas: ['Indirapuram', 'Vaishali', 'Kaushambi', 'Raj Nagar Extension', 'Crossings Republik', 'Loni', 'Modinagar', 'Sahibabad'],
    nearbyCities: ['Noida', 'Delhi', 'Meerut', 'Hapur', 'Bulandshahr', 'Greater Noida'],
    industries: ['IT & Technology', 'Manufacturing', 'Real Estate', 'Retail', 'Logistics'],
    techEcosystem: 'Major NCR IT corridor with established software parks and Fortune 500 campuses',
    landmark: 'Gateway to Uttar Pradesh — NCR Industrial Hub',
  },
  kanpur: {
    areas: ['Civil Lines', 'Swaroop Nagar', 'Kakadeo', 'Govind Nagar', 'Kidwai Nagar', 'Arya Nagar', 'Anwarganj', 'Kalyanpur'],
    nearbyCities: ['Lucknow', 'Unnao', 'Fatehpur', 'Banda', 'Hamirpur', 'Orai'],
    industries: ['Leather & Textiles', 'Chemicals', 'Engineering', 'IT (IIT Kanpur)', 'Retail'],
    techEcosystem: 'Industrial digital transformation led by IIT Kanpur and Kanpur tech startup cluster',
    landmark: 'Manchester of the East — Industrial Capital of UP',
  },
  noida: {
    areas: ['Sector 18', 'Sector 62', 'Sector 63', 'Sector 125', 'Sector 137', 'Techzone IV', 'Greater Noida West', 'Expressway'],
    nearbyCities: ['Delhi', 'Ghaziabad', 'Greater Noida', 'Faridabad', 'Gurugram', 'Baghpat'],
    industries: ['IT & Software', 'Media & Entertainment', 'Electronics', 'Real Estate', 'FinTech'],
    techEcosystem: 'Premier NCR IT corridor with 1,500+ tech companies, MNCs, and a thriving startup ecosystem',
    landmark: 'NCR IT & Media Capital — Silicon Valley of North India',
  },
  gorakhpur: {
    areas: ['Medical College Road', 'Golghar', 'BRD Nagar', 'Raptinagar', 'Padri Bazar', 'Cinema Road', 'Betiahata'],
    nearbyCities: ['Maharajganj', 'Deoria', 'Kushinagar', 'Basti', 'Sant Kabir Nagar', 'Azamgarh'],
    industries: ['Healthcare', 'Agriculture', 'Education (MNNIT)', 'Retail', 'Food Processing'],
    techEcosystem: 'Emerging digital market with MNNIT Gorakhpur anchoring the tech talent pipeline',
    landmark: 'Religious & Education Hub of Eastern UP',
  },
  ayodhya: {
    areas: ['Ram Janmabhoomi Area', 'Saket Colony', 'Naya Ghat', 'Bikapur', 'Faizabad Road', 'Suraj Kund'],
    nearbyCities: ['Faizabad', 'Barabanki', 'Sultanpur', 'Gonda', 'Ambedkar Nagar', 'Bahraich'],
    industries: ['Religious Tourism', 'Hospitality', 'Retail', 'Crafts', 'Real Estate'],
    techEcosystem: 'Rapidly expanding digital economy powered by Ram Mandir tourism and smart city mission',
    landmark: 'City of Shri Ram — Spiritual & Pilgrimage Capital of India',
  },
  varanasi: {
    areas: ['Sigra', 'Lanka', 'Assi Ghat', 'Godowlia', 'Cantt', 'Mahmoorganj', 'BHU Campus', 'Sarnath'],
    nearbyCities: ['Jaunpur', 'Mirzapur', 'Ghazipur', 'Chandauli', 'Bhadohi', 'Prayagraj'],
    industries: ['Silk Weaving (Banarasi)', 'Tourism', 'Education (BHU)', 'Retail', 'Handicrafts'],
    techEcosystem: 'Heritage-tech economy with BHU tech transfers and Startup UP Varanasi node',
    landmark: 'Spiritual Capital of India — Kashi / City of Light',
  },
  lucknow: {
    areas: ['Hazratganj', 'Gomti Nagar', 'Aliganj', 'Indira Nagar', 'Vibhuti Khand', 'Kanpur Road', 'Alambagh', 'Faizabad Road'],
    nearbyCities: ['Unnao', 'Hardoi', 'Sitapur', 'Rae Bareli', 'Kanpur', 'Barabanki'],
    industries: ['IT & Software', 'Government & PSUs', 'Chikankari Textiles', 'Education', 'Healthcare'],
    techEcosystem: 'UP capital with Lucknow Tech City, IT Park, and the fastest-growing startup hub in North India',
    landmark: 'City of Nawabs — Capital of Uttar Pradesh',
  },
  allahabad: {
    areas: ['Civil Lines', 'George Town', 'Naini Industrial Area', 'Jhusi', 'Phaphamau', 'Karchhana', 'Sangam Area'],
    nearbyCities: ['Mirzapur', 'Fatehpur', 'Kaushambi', 'Pratapgarh', 'Chitrakoot', 'Varanasi'],
    industries: ['Education (Allahabad University, MNNIT)', 'Government', 'Agriculture', 'Retail', 'Tourism (Kumbh)'],
    techEcosystem: 'Education-driven IT adoption with MNNIT Allahabad and Kumbh-era digital infrastructure',
    landmark: 'Prayagraj — City of Triveni Sangam & Kumbh Mela',
  },
  rampur: {
    areas: ['Civil Lines', 'Azim Nagar', 'Milak', 'Shahabad', 'Bilaspur', 'Station Road'],
    nearbyCities: ['Moradabad', 'Bareilly', 'Badaun', 'Amroha', 'Sambhal', 'Chandausi'],
    industries: ['Rampuri Knife & Cutlery', 'Agriculture', 'Retail', 'Sugar Mills', 'Textiles'],
    techEcosystem: 'Growing SME digital market with increasing mobile-first business adoption',
    landmark: 'Nawabi Heritage City — Knife & Raza Library Fame',
  },
  bhopal: {
    areas: ['MP Nagar', 'Hoshangabad Road', 'Kohefiza', 'Kolar Road', 'Arera Colony', 'Berasia Road', 'TT Nagar', 'Minal Residency'],
    nearbyCities: ['Vidisha', 'Raisen', 'Sehore', 'Hoshangabad', 'Indore', 'Obaidullaganj'],
    industries: ['Government & PSUs', 'Education', 'IT & BPO', 'Tourism (Lakes)', 'Pharmaceuticals'],
    techEcosystem: 'MP capital with Smart City Mission and MPCST-backed IT/startup ecosystem',
    landmark: 'City of Lakes — Capital of Madhya Pradesh',
  },
  jhansi: {
    areas: ['Civil Lines', 'Sipri Bazaar', 'Sadar Bazaar', 'Cantonment', 'Nai Sadak', 'Gwalior Road', 'Raksa'],
    nearbyCities: ['Orchha', 'Lalitpur', 'Datia', 'Tikamgarh', 'Mahoba', 'Sagar'],
    industries: ['Manufacturing', 'Agriculture', 'Defence (Cantt)', 'Retail', 'Heritage Tourism'],
    techEcosystem: 'Emerging market with IIITM Gwalior influence and Bundelkhand digital upskilling push',
    landmark: 'Gateway to Bundelkhand — City of Rani Laxmibai',
  },
  surat: {
    areas: ['Vesu', 'Adajan', 'Athwa Gate', 'Rander Road', 'Udhna', 'Katargam', 'Piplod', 'Pal', 'Bhatar'],
    nearbyCities: ['Bharuch', 'Navsari', 'Vapi', 'Ankleshwar', 'Bilimora', 'Hazira'],
    industries: ['Diamond Processing', 'Textiles & Synthetics', 'Chemical', 'IT', 'Real Estate'],
    techEcosystem: 'Fastest-growing city with strong IT adoption in diamond bourse, textile, and fintech',
    landmark: 'Diamond City & Textile Hub — Fastest Growing City of India',
  },
  patna: {
    areas: ['Patna City', 'Bailey Road', 'Boring Road', 'Rajendra Nagar', 'Kankarbagh', 'Fraser Road', 'Danapur', 'IIT Patna Area'],
    nearbyCities: ['Hajipur', 'Danapur', 'Maner', 'Barh', 'Nalanda', 'Begusarai'],
    industries: ['Government', 'Education (IIT Patna, Patna University)', 'Agriculture', 'Retail', 'Healthcare'],
    techEcosystem: 'Bihar capital with IIT Patna driving tech ecosystem and Startup Bihar incubation centres',
    landmark: 'Capital of Bihar — Ancient Pataliputra',
  },
  chandigarh: {
    areas: ['Sector 17', 'Sector 22', 'Sector 34', 'Industrial Area Phase I & II', 'Manimajra', 'IT City Mohali', 'Panchkula'],
    nearbyCities: ['Mohali', 'Panchkula', 'Zirakpur', 'Ambala', 'Ropar', 'Fatehgarh Sahib'],
    industries: ['IT & BPO', 'Government', 'Education (PU, PEC)', 'Manufacturing', 'Healthcare'],
    techEcosystem: 'Tier-2 IT hub with Mohali IT City, 600+ registered IT companies, and MNC offshore centres',
    landmark: 'Planned City of Le Corbusier — Capital of Punjab & Haryana',
  },
  dehradun: {
    areas: ['Rajpur Road', 'Clement Town', 'Saharanpur Road', 'Chakrata Road', 'Patel Nagar', 'IT Park Saharanpur Road', 'Raipur Road'],
    nearbyCities: ['Haridwar', 'Rishikesh', 'Mussoorie', 'Roorkee', 'Paonta Sahib', 'Saharanpur'],
    industries: ['IT & Software', 'Education (IIT Roorkee, UPES)', 'Tourism', 'FMCG', 'Defence'],
    techEcosystem: 'Uttarakhand capital with dedicated IT Park, IIT Roorkee proximity, and growing startup scene',
    landmark: 'Capital of Uttarakhand — Education & IT Gateway to the Himalayas',
  },
  delhi: {
    areas: ['Connaught Place', 'Dwarka', 'Rohini', 'Nehru Place', 'Karol Bagh', 'Lajpat Nagar', 'Vasant Kunj', 'Gurgaon Border'],
    nearbyCities: ['Noida', 'Ghaziabad', 'Gurugram', 'Faridabad', 'Bahadurgarh', 'Sonipat'],
    industries: ['IT & Technology', 'Government', 'Finance', 'Media', 'Tourism', 'Retail'],
    techEcosystem: 'National capital with 8000+ startups, major tech parks in Dwarka/Nehru Place, and Fortune 500 HQs',
    landmark: 'National Capital Territory — Political & Cultural Heart of India',
  },
  mumbai: {
    areas: ['Bandra Kurla Complex', 'Andheri', 'Powai', 'Lower Parel', 'Nariman Point', 'Malad', 'Thane', 'Navi Mumbai'],
    nearbyCities: ['Pune', 'Nashik', 'Thane', 'Kalyan', 'Panvel', 'Vasai'],
    industries: ['Finance & Banking', 'Bollywood & Entertainment', 'IT & BPO', 'Textiles', 'Pharmaceuticals'],
    techEcosystem: 'Financial capital with major tech hubs in Powai/BKC, unicorn factories, and global capability centres',
    landmark: 'Financial Capital of India — Bollywood & Business Hub',
  },
  bangalore: {
    areas: ['Electronic City', 'Whitefield', 'Koramangala', 'Indiranagar', 'HSR Layout', 'Marathahalli', 'Outer Ring Road', 'Yelahanka'],
    nearbyCities: ['Mysore', 'Hosur', 'Tumkur', 'Kolar', 'Mandya', 'Ramanagara'],
    industries: ['IT & Software', 'Biotechnology', 'Aerospace', 'Electronics', 'Startups'],
    techEcosystem: 'Silicon Valley of India with 40% of India\'s IT companies, 10,000+ startups, and R&D centres of Google/Microsoft',
    landmark: 'Silicon Valley of India — Garden City & Tech Capital',
  },
  chennai: {
    areas: ['T Nagar', 'Anna Nagar', 'Adyar', 'Velachery', 'OMR (IT Corridor)', 'Guindy', 'Ambattur', 'Porur'],
    nearbyCities: ['Kanchipuram', 'Tiruvallur', 'Vellore', 'Pondicherry', 'Tirupati', 'Salem'],
    industries: ['Automobile Manufacturing', 'IT Services', 'Healthcare', 'Leather Exports', 'Banking'],
    techEcosystem: 'Detroit of Asia with Tidel Park OMR corridor hosting 2000+ IT companies including CTS, TCS, Infosys',
    landmark: 'Detroit of South Asia — Temple City & Auto Capital',
  },
  hyderabad: {
    areas: ['HITEC City', 'Gachibowli', 'Madhapur', 'Kondapur', 'Banjara Hills', 'Jubilee Hills', 'Secunderabad', 'LB Nagar'],
    nearbyCities: ['Warangal', 'Karimnagar', 'Nizamabad', 'Mahbubnagar', 'Nalgonda', 'Siddipet'],
    industries: ['IT & Pharma', 'Biotechnology', 'Film Industry (Tollywood)', 'Manufacturing', 'Real Estate'],
    techEcosystem: 'Cyberabad with Facebook/Amazon/Google development centres, 5000+ tech companies, and T-Hub startup incubator',
    landmark: 'City of Pearls — Cyberabad & Pharmaceutical Hub of India',
  },
  pune: {
    areas: ['Hinjewadi', 'Viman Nagar', 'Kharadi', 'Baner', 'Aundh', 'Shivaji Nagar', 'Pimpri-Chinchwad', 'Hadapsar'],
    nearbyCities: ['Mumbai', 'Nashik', 'Ahmednagar', 'Solapur', 'Satara', 'Lonavala'],
    industries: ['IT & Automotive', 'Education', 'Manufacturing', 'Food Processing', 'Renewable Energy'],
    techEcosystem: 'Oxford of the East with Rajiv Gandhi Infotech Park Hinjewadi hosting 230,000+ IT professionals',
    landmark: 'Oxford of the East — Education & Automotive Hub',
  },
  ahmedabad: {
    areas: ['SG Highway', 'Prahlad Nagar', 'Bodakdev', 'Maninagar', 'Naroda', 'GIDC Estates', 'GIFT City', 'Vastrapur'],
    nearbyCities: ['Gandhinagar', 'Anand', 'Mehsana', 'Kheda', 'Surat', 'Vadodara'],
    industries: ['Textiles & Chemicals', 'Diamonds & Gems', 'Pharmaceuticals', 'Auto Components', 'IT (GIFT City)'],
    techEcosystem: 'Emerging IT hub with GIFT City fintech zone, pharmaceutical R&D, and textile industry digitisation',
    landmark: 'Manchester of Gujarat — Heritage City & Industrial Powerhouse',
  },
  kolkata: {
    areas: ['Salt Lake Sector V', 'Park Street', 'Alipore', 'New Town', 'Howrah', 'Dum Dum', 'Jadavpur', 'Gariahat'],
    nearbyCities: ['Howrah', 'Durgapur', 'Asansol', 'Haldia', 'Krishnanagar', 'Bardhaman'],
    industries: ['Finance', 'IT Services', 'Steel', 'Coal Mining', 'Cultural Industries', 'Jute & Tea'],
    techEcosystem: 'Cultural capital with Salt Lake IT hub hosting TCS/Infosys/Wipro and emerging startup ecosystem',
    landmark: 'Cultural Capital of India — City of Joy & Business Hub',
  },
  jaipur: {
    areas: ['Malviya Nagar', 'Vaishali Nagar', 'Mansarovar', 'Civil Lines', 'Bani Park', 'Sitapura Industrial Area', 'Tonk Road'],
    nearbyCities: ['Ajmer', 'Alwar', 'Sikar', 'Pali', 'Bharatpur', 'Jodhpur'],
    industries: ['Tourism & Hospitality', 'Gems & Jewellery', 'Textiles', 'IT Services', 'Handicrafts'],
    techEcosystem: 'Pink City transforming into IT destination with Mahindra World City and emerging startup culture',
    landmark: 'Pink City — Royal Heritage Capital & Emerging IT Destination',
  },
  indore: {
    areas: ['Vijay Nagar', 'South Tukoganj', 'Palasia Square', 'Scheme No 54', 'AB Road', 'Lasudia Mori', 'Rau', 'Meghdoot'],
    nearbyCities: ['Bhopal', 'Ujjain', 'Dewas', 'Dhar', 'Ratlam', 'Khandwa'],
    industries: ['IT & Education', 'Pharmaceuticals', 'Automobiles', 'Textiles', 'Food Processing'],
    techEcosystem: 'Cleanest city with Crystal IT Park, software technology park, and educational institutions driving innovation',
    landmark: 'Commercial Capital of MP — Cleanest City & Education Hub',
  },
  nagpur: {
    areas: ['Dharampeth', 'Sitabuldi', 'Wardha Road', 'Katol Road', 'MIHAN SEZ', 'Ramdaspeth', 'Civil Lines', 'Sadar'],
    nearbyCities: ['Amravati', 'Akola', 'Yavatmal', 'Chandrapur', 'Gondia', 'Betul'],
    industries: ['IT & Logistics', 'Orange Cultivation', 'Manufacturing', 'Mining', 'Power Generation'],
    techEcosystem: 'Geographic centre with MIHAN IT park, multimodal logistics hub, and emerging as central India\'s tech capital',
    landmark: 'Orange City & Geographic Centre of India — Logistics Hub',
  },
  coimbatore: {
    areas: ['RS Puram', 'Peelamedu', 'Gandhipuram', 'Singanallur', 'Saravanampatti', 'Kurichi', 'Kinathukadavu'],
    nearbyCities: ['Tiruppur', 'Erode', 'Ooty', 'Mettupalayam', 'Pollachi', 'Palakkad'],
    industries: ['Textiles & Spinning', 'Pump Manufacturing', 'Auto Components', 'Jewellery', 'Education'],
    techEcosystem: 'Manchester of South India with emerging IT parks, textile automation, and precision manufacturing tech',
    landmark: 'Manchester of South India — Pump & Textile Capital',
  },
  kochi: {
    areas: ['MG Road', 'Kakkanad', 'Edappally', 'Vyttila', 'Kaloor', 'Ernakulam South', 'Infopark Kochi', 'SmartCity'],
    nearbyCities: ['Thrissur', 'Alappuzha', 'Kottayam', 'Idukki', 'Munnar', 'Kollam'],
    industries: ['IT & Shipping', 'Spices Export', 'Tourism', 'Fisheries', 'Ayurveda'],
    techEcosystem: 'Queen of Arabian Sea with Infopark/Kochi SmartCity hosting 400+ IT companies including TCS/UST Global',
    landmark: 'Queen of Arabian Sea — Port City & IT Hub of Kerala',
  },
  visakhapatnam: {
    areas: ['RK Beach', 'Siripuram', 'MVP Colony', 'Dwaraka Nagar', 'Gajuwaka', 'Visakhapatnam Steel Plant', 'Rushikonda'],
    nearbyCities: ['Vijayawada', 'Rajahmundry', 'Kakinada', 'Vizianagaram', 'Srikakulam', 'Eluru'],
    industries: ['Steel & Heavy Industry', 'Shipping & Ports', 'Oil Refining', 'IT Services', 'Tourism'],
    techEcosystem: 'City of Destiny with emerging IT SEZs, steel plant automation, and port-led digital transformation',
    landmark: 'City of Destiny — Eastern Gateway & Industrial Powerhouse',
  },
  vadodara: {
    areas: ['Alkapuri', 'Fatehgunj', 'Sayajigunj', 'Manjalpur', 'Waghodia Road', 'Gotri', 'Harni', 'Akota'],
    nearbyCities: ['Ahmedabad', 'Anand', 'Bharuch', 'Godhra', 'Patan', 'Mehsana'],
    industries: ['Petrochemicals', 'Pharmaceuticals', 'Chemicals', 'Engineering', 'Education (MSU)'],
    techEcosystem: 'Cultural capital with GIDC industrial estates, pharmaceutical R&D, and MS University driving innovation',
    landmark: 'Cultural Capital of Gujarat — Petrochemical & Education Hub',
  },
  rajkot: {
    areas: ['Kalavad Road', 'University Road', 'Race Course Ring Road', 'Limbdi Chowk', 'Greenland', '150 Feet Ring Road'],
    nearbyCities: ['Jamnagar', 'Junagadh', 'Morbi', 'Surendranagar', 'Amreli', 'Porbandar'],
    industries: ['Auto Parts Manufacturing', 'Machine Tools', 'Agriculture Processing', 'Jewellery', 'Education'],
    techEcosystem: 'Industrial hub in Saurashtra with CNC manufacturing units adopting Industry 4.0 technologies',
    landmark: 'Educational & Industrial Hub of Saurashtra',
  },
  bhubaneswar: {
    areas: ['Saheed Nagar', 'Jaydev Vihar', 'Patia', 'Chandrasekharpur', 'Khandagiri', 'Nayapalli', 'Infocity Phase 1 & 2'],
    nearbyCities: ['Cuttack', 'Puri', 'Konark', 'Jajpur', 'Dhenkanal', 'Khordha'],
    industries: ['IT Services', 'Education', 'Steel', 'Mining', 'Tourism (Temple City)'],
    techEcosystem: 'Temple City with Infocity hosting TCS/Infosys/Wipro and emerging as eastern India\'s IT destination',
    landmark: 'Temple City of India — Emerging IT & Education Hub',
  },
  ludhiana: {
    areas: ['Civil Lines', 'Model Town', 'Sarabha Nagar', 'Ferozepur Road', 'Industrial Area A & B', 'Dugri', 'Haibowal'],
    nearbyCities: ['Jalandhar', 'Patiala', 'Hoshiarpur', 'Moga', 'Khanna', 'Malerkotla'],
    industries: ['Textiles & Hosiery', 'Cycle Manufacturing', 'Auto Components', 'Machine Tools', 'Sports Goods'],
    techEcosystem: 'Manchester of Punjab with 350+ auto component units, textile mills modernising with IoT and automation',
    landmark: 'Manchester of Punjab — Industrial & Educational Hub',
  },
  nashik: {
    areas: ['College Road', 'MG Road', 'Ambad Industrial Area', 'Satpur', 'Panchavati', 'Nashik Road', 'Sinnar MIDC'],
    nearbyCities: ['Pune', 'Mumbai', 'Aurangabad', 'Dhule', 'Malegaon', 'Thane'],
    industries: ['Automobile Manufacturing', 'Wine Production', 'Religious Tourism', 'Foundry', 'Food Processing'],
    techEcosystem: 'Wine capital with automobile plants (Mahindra/Mercedes), growing MSME sector adopting digital manufacturing',
    landmark: 'Wine Capital of India — Ancient Pilgrimage & Auto Hub',
  },
  faridabad: {
    areas: ['Sector 16', 'Sector 21', 'NIT', 'Ballabhgarh', 'Faridabad Central', 'Greenfields Colony', 'Surajkund'],
    nearbyCities: ['Delhi', 'Gurgaon', 'Noida', 'Palwal', 'Rewari', 'Mathura'],
    industries: ['Tractor Manufacturing', 'Refrigerators', 'Auto Components', 'Leather', 'Textiles'],
    techEcosystem: 'Largest industrial hub in NCR with 10,000+ MSMEs, tractor production, and Industry 4.0 adoption',
    landmark: 'NCR Industrial Powerhouse — Tractor & Refrigerator Capital',
  },
  ranchi: {
    areas: ['Main Road', 'Circular Road', 'Lalpur', 'Kanke Road', 'Hinoo', 'Ratu Road', 'Namkum', 'HEC Area'],
    nearbyCities: ['Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh', 'Gumla', 'Simdega'],
    industries: ['Heavy Engineering (HEC)', 'Mining', 'Education', 'Healthcare', 'Agriculture'],
    techEcosystem: 'Jharkhand capital with HEC Ranchi, IIM Ranchi, and emerging startup ecosystem supported by Jharkhand Startup Policy',
    landmark: 'Capital of Jharkhand — Heavy Engineering & Education Hub',
  },
  raipur: {
    areas: ['Civil Lines', 'Pandri', 'Shankar Nagar', 'Tatibandh', 'VIP Road', 'Station Road', 'Raipur Railway Station Area'],
    nearbyCities: ['Bhilai', 'Durg', 'Bilaspur', 'Korba', 'Rajnandgaon', 'Mahasamund'],
    industries: ['Steel Production', 'Rice Milling', 'Power Generation', 'Mining', 'Agriculture Equipment'],
    techEcosystem: 'Rice bowl with emerging IT park, steel industry automation, and Chhattisgarh IT initiatives',
    landmark: 'Capital of Chhattisgarh — Rice Bowl & Steel Hub',
  },
  jabalpur: {
    areas: ['Napier Town', 'Adhartal', 'Gwarighat', 'Sihora', 'Bhedaghat Road', 'Ranjhi', 'Devendra Nagar'],
    nearbyCities: ['Narsinghpur', 'Katni', 'Seoni', 'Balaghat', 'Mandla', 'Damoh'],
    industries: ['Education', 'Manufacturing', 'Agriculture', 'Tourism (Marble Rocks)', 'Defence Ordnance'],
    techEcosystem: 'Historical educational hub with Jabalpur Engineering College, ordnance factories, and gateway to MP tourism',
    landmark: 'Historic Educational Hub — Gateway to Madhya Pradesh',
  },
  asansol: {
    areas: ['City Centre', 'Burnpur', 'Kulti', 'Raniganj', 'Jamuria', 'Barakar', 'Salanpur'],
    nearbyCities: ['Durgapur', 'Bardhaman', 'Bankura', 'Purulia', 'Dhanbad', 'Bokaro'],
    industries: ['Coal Mining', 'Steel Plants', 'Heavy Engineering', 'Railway Workshop', 'Power Generation'],
    techEcosystem: 'Second city of Bengal with coal mining automation, steel plant digitisation, and industrial heritage',
    landmark: 'Coal Capital of Eastern India — Industrial & Mining Hub',
  },
  srinagar: {
    areas: ['Lal Chowk', 'Residency Road', 'Rajbagh', 'Sonwar', 'Shalimar', 'Nishat', 'Hazratbal', 'Badami Bagh'],
    nearbyCities: ['Anantnag', 'Baramulla', 'Sopore', 'Pulwama', 'Budgam', 'Ganderbal'],
    industries: ['Tourism & Handicrafts', 'Horticulture (Apples/Saffron)', 'Handlooms (Pashmina)', 'Ayurveda'],
    techEcosystem: 'Summer capital with emerging IT-enabled services, tourism digitisation, and handicraft e-commerce growth',
    landmark: 'Paradise on Earth — Tourism & Handicrafts Capital of Kashmir',
  },
  amritsar: {
    areas: ['Golden Temple Area', 'Lawrence Road', 'Albert Road', 'Mall Road', 'Ranjit Avenue', 'GT Road', 'Verka'],
    nearbyCities: ['Jalandhar', 'Pathankot', 'Gurdaspur', 'Tarn Taran', 'Batala', 'Ajnala'],
    industries: ['Textiles & Woolens', 'Food Processing', 'Tourism', 'Sports Goods', 'Paper Products'],
    techEcosystem: 'Holy city with Golden Temple digitisation, food processing automation, and textile industry modernisation',
    landmark: 'Holy City of Sikhs — Home to Golden Temple & Textile Hub',
  },
  jamshedpur: {
    areas: ['Bistupur', 'Sakchi', 'Kadma', 'Telco', 'Jugsalai', 'Sonari', 'Tata Nagar'],
    nearbyCities: ['Ranchi', 'Dhanbad', 'Bokaro', 'Rourkela', 'Tatanagar', 'Purulia'],
    industries: ['Steel Production (Tata Steel)', 'Automobiles', 'Heavy Engineering', 'Mining', 'Cement'],
    techEcosystem: 'Steel City with Tata Steel R&D centre, Industry 4.0 implementation, and planned industrial township',
    landmark: 'Steel City of India — Planned Industrial Township by Tata',
  },
  dhanbad: {
    areas: ['Bank More', 'Sardar Patel Complex', 'Hirapur', 'Saraidhela', 'Jharia', 'Baghmara', 'Tundi'],
    nearbyCities: ['Ranchi', 'Bokaro', 'Asansol', 'Hazaribagh', 'Giridih', 'Deoghar'],
    industries: ['Coal Mining (BCCL)', 'Power Plants', 'Coking Coal', 'Education (ISM Dhanbad)', 'Steel'],
    techEcosystem: 'Coal capital with ISM (IIT Dhanbad), mining technology research, and coal gasification projects',
    landmark: 'Coal Capital of India — Mining & Education Hub',
  },
  gwalior: {
    areas: ['Lashkar', 'Morar', 'City Centre', 'Thatipur', 'Malviya Nagar', 'DLW Road', 'Gwalior Cantt'],
    nearbyCities: ['Agra', 'Jhansi', 'Datia', 'Morena', 'Bhind', 'Shivpuri'],
    industries: ['Railway Junction', 'Education', 'Tourism (Fort)', 'Manufacturing', 'Agriculture'],
    techEcosystem: 'Historic city with railway junction importance, educational institutions, and tourism-driven economy',
    landmark: 'Historic Fort City — Railway Junction & Educational Centre',
  },
  vijayawada: {
    areas: ['MG Road', 'Benz Circle', 'Governorpet', 'Patamata', 'Labhipet', 'Suryaraopeta', 'Auto Nagar'],
    nearbyCities: ['Guntur', 'Rajahmundry', 'Eluru', 'Machilipatnam', 'Ongole', 'Khammam'],
    industries: ['Agriculture Trading', 'Education', 'Pharmaceuticals', 'Auto Components', 'Food Processing'],
    techEcosystem: 'Business capital with agricultural trading digitisation, pharmaceutical units, and Krishna district IT growth',
    landmark: 'Business Capital of Andhra Pradesh — Agricultural & Educational Hub',
  },
  madurai: {
    areas: ['Anna Nagar', 'KK Nagar', 'Goripalayam', 'Tallakulam', 'Arappalayam', 'Madurai East', 'Villapuram'],
    nearbyCities: ['Dindigul', 'Sivakasi', 'Virudhunagar', 'Ramanathapuram', 'Theni', 'Karaikudi'],
    industries: ['Tourism (Meenakshi Temple)', 'Textiles', 'Rubber', 'Automotive Components', 'Handicrafts'],
    techEcosystem: 'Temple city with ancient trade history, textile clusters adopting modern tech, and educational institutions',
    landmark: 'Temple City — Cultural Capital of Tamil Nadu & Ancient Trade Hub',
  },
  tiruchirappalli: {
    areas: ['Cantonment', 'Srirangam', 'Woraiyur', 'Thillai Nagar', 'Golden Rock', 'Ponmalai', 'Navalpattu'],
    nearbyCities: ['Thanjavur', 'Karur', 'Perambalur', 'Ariyalur', 'Pudukkottai', 'Dindigul'],
    industries: ['Education', 'Railway Workshop', 'Cement', 'Sugar', 'Handloom'],
    techEcosystem: 'Educational hub with NIT Trichy, Bharathidasan University, and railway workshop modernisation',
    landmark: 'Educational & Railway Hub — Central Tamil Nadu Business Centre',
  },
  salem: {
    areas: ['Fairlands', 'Swarnapuri', 'Suramangalam', 'Omalur', 'Mallasamudram', 'Gugai', 'New Fairlands'],
    nearbyCities: ['Erode', 'Coimbatore', 'Namakkal', 'Dharmapuri', 'Krishnagiri', 'Perambalur'],
    industries: ['Mango Production', 'Textiles', 'Steel & Alloys', 'Sago Industry', 'Fireworks'],
    techEcosystem: 'Mango city with sago industry automation, steel production (SAIL Salem), and agricultural processing tech',
    landmark: 'Mango City & Steel Hub — Southern Tamil Nadu Industrial Centre',
  },
  thiruvananthapuram: {
    areas: ['MG Road', 'Statue', 'Kowdiar', 'Pattom', 'Technopark Phase 1-3', 'Ulloor', 'Kazhakootam'],
    nearbyCities: ['Kollam', 'Nagercoil', 'Thiruvalla', 'Kanyakumari', 'Pathanamthitta', 'Alappuzha'],
    industries: ['IT (Technopark)', 'Space Research (VSSC)', 'Tourism', 'Ayurveda', 'Film Production'],
    techEcosystem: 'Kerala capital with Technopark hosting 350+ companies including TCS/Infosys/UST, VSSC/ISRO space tech',
    landmark: 'Capital of Kerala — Space City & IT Hub of God\'s Own Country',
  },
  mysore: {
    areas: ['Jayalakshmipuram', 'Gokulam', 'Vijayanagar', 'Kuvempunagar', 'Hebbal', 'Hootagalli', 'Industrial Estate'],
    nearbyCities: ['Bangalore', 'Mandya', 'Hassan', 'Chamarajanagar', 'Ooty', 'Coorg'],
    industries: ['Tourism (Palaces)', 'Silk Production', 'IT Services', 'Coffee', 'Handicrafts'],
    techEcosystem: 'City of palaces with emerging IT parks, silk industry automation, and tourism digitisation',
    landmark: 'City of Palaces — Heritage Tourism & Silk Capital',
  },
  'hubli-dharwad': {
    areas: ['Vidya Nagar', 'PB Road', 'Kalyani Nagar', 'Unkal', 'Gokul Road', 'Nrupatunga Road', 'Dharwad Pete'],
    nearbyCities: ['Belgaum', 'Davangere', 'Gadag', 'Haveri', 'Bidar', 'Raichur'],
    industries: ['Cotton Trading', 'Textiles', 'Education', 'Food Processing', 'Logistics'],
    techEcosystem: 'Twin city commercial hub with cotton trading digitisation, educational institutions, and North Karnataka gateway',
    landmark: 'Commercial Hub of North Karnataka — Cotton & Textile Centre',
  },
  mangalore: {
    areas: ['Hampankatta', 'Bejai', 'Kankanady', 'Pandeshwar', 'Kadri', 'Port Area', 'Surathkal'],
    nearbyCities: ['Manipal', 'Udupi', 'Puttur', 'Bantwal', 'Kasaragod', 'Kundapura'],
    industries: ['Port & Shipping', 'Education', 'Petrochemicals (MRPL)', 'Fisheries', 'Banking (Syndicate/Corporation)'],
    techEcosystem: 'Port city with emerging IT parks, banking sector legacy, and petrochemical refinery automation',
    landmark: 'Port City & Educational Hub — Gateway to Karnataka Coast',
  },
  guwahati: {
    areas: ['GS Road', 'Christian Basti', 'Bhangagarh', 'Dispur', 'Pan Bazaar', 'Fancy Bazaar', 'Jalukbari'],
    nearbyCities: ['Shillong', 'Tezpur', 'Nagaon', 'Tinsukia', 'Dibrugarh', 'Silchar'],
    industries: ['Tea Industry', 'Oil & Gas', 'Education (IIT Guwahati)', 'Tourism', 'Handicrafts'],
    techEcosystem: 'Gateway to Northeast with IIT Guwahati, oil refineries (Numaligarh), and emerging startup ecosystem',
    landmark: 'Gateway to Northeast India — Tea Capital & Educational Hub',
  },
  jalandhar: {
    areas: ['Model Town', 'Civil Lines', 'Adliwal', 'Focal Point', 'Maqsudan', 'Ram Mandir Road', 'Ladowali'],
    nearbyCities: ['Ludhiana', 'Amritsar', 'Patiala', 'Hoshiarpur', 'Kapurthala', 'Nawanshahr'],
    industries: ['Sports Goods Manufacturing', 'Leather Garments', 'Textiles', 'Paper Products', 'Education'],
    techEcosystem: 'Sports capital with 40% of India\'s sports goods exports, leather industry modernisation, and educational institutions',
    landmark: 'Sports Capital of India — Leather & Textile Manufacturing Hub',
  },
  haridwar: {
    areas: ['Har Ki Pauri', 'Sidcul', 'BHEL Ranipur', 'Bahadrabad', 'Jwalapur', 'Kankhal', 'Maya Devi'],
    nearbyCities: ['Rishikesh', 'Dehradun', 'Roorkee', 'Saharanpur', 'Mussoorie', 'Lansdowne'],
    industries: ['Religious Tourism', 'Heavy Electricals (BHEL)', 'Pharmaceuticals', 'Ayurveda', 'Food Processing'],
    techEcosystem: 'Holy city with BHEL heavy engineering, SIDCUL industrial estate, and Kumbh Mela infrastructure digitisation',
    landmark: 'Holy City on Ganges — Kumbh Mela Host & Industrial Centre',
  },
  shimla: {
    areas: ['The Ridge', 'Mall Road', 'Sanjauli', 'Chotta Shimla', 'Shoghi', 'Kasumpti', 'Dhalli'],
    nearbyCities: ['Manali', 'Dharamshala', 'Kullu', 'Solan', 'Mandi', 'Nahan'],
    industries: ['Tourism', 'Education', 'Horticulture (Apples)', 'Handicrafts', 'Ayurveda'],
    techEcosystem: 'Former British summer capital with tourism digitisation, apple supply chain tech, and educational institutions',
    landmark: 'Queen of Hill Stations — Former Summer Capital & Tourism Icon',
  },
  saharanpur: {
    areas: ['Court Road', 'Rampur Garden', 'Shastri Nagar', 'Muzaffarnagar Road', 'Behat Road', 'Galidevi'],
    nearbyCities: ['Dehradun', 'Haridwar', 'Roorkee', 'Muzaffarnagar', 'Yamunanagar', 'Ambala'],
    industries: ['Wood Carving & Furniture', 'Paper Mills', 'Agriculture', 'Sports Goods', 'Jaggery Production'],
    techEcosystem: 'Wood carving hub with artisan skill preservation, paper mill automation, and agricultural processing tech',
    landmark: 'Wood Carving Capital — Paper Industry & Agricultural Processing Centre',
  },
  prayagraj: {
    areas: ['Civil Lines', 'Tagore Town', 'Allahpur', 'Jhunsi', 'Naini', 'Katra', 'George Town'],
    nearbyCities: ['Varanasi', 'Mirzapur', 'Fatehpur', 'Kaushambi', 'Pratapgarh', 'Chitrakoot'],
    industries: ['Education (Allahabad University)', 'Government', 'Agriculture', 'Tourism (Sangam/Kumbh)', 'IT (emerging)'],
    techEcosystem: 'Ancient Sangam city with Allahabad University legacy, Kumbh Mela tech infrastructure, and emerging IT adoption',
    landmark: 'Triveni Sangam City — Kumbh Mela Capital & Educational Heritage',
  },
  mathura: {
    areas: ['Krishna Janmabhoomi', 'Vishram Ghat', 'Dampier Nagar', 'Govardhan', 'Vrindavan Road', 'Bhartendu Nagar'],
    nearbyCities: ['Agra', 'Aligarh', 'Hathras', 'Bharatpur', 'Palwal', 'Faridabad'],
    industries: ['Religious Tourism', 'Refinery (IOCL)', 'Agriculture', 'Dairy Products', 'Handicrafts'],
    techEcosystem: 'Lord Krishna birthplace with temple digitisation, refinery automation (Mathura Refinery), and dairy supply chain tech',
    landmark: 'Birthplace of Lord Krishna — Ancient Temple City & Refinery Hub',
  },
  'greater-noida': {
    areas: ['Knowledge Park I-V', 'Pari Chowk', 'Alpha Commercial Belt', 'Beta 1 & 2', 'Gamma', 'Delta', 'UPSIDA Office'],
    nearbyCities: ['Noida', 'Ghaziabad', 'Dadri', 'Jewar', 'Palwal', 'Faridabad'],
    industries: ['IT & Electronics', 'Biotechnology', 'Education (GD Goenka, Sharda)', 'Manufacturing', 'Motorsports (Buddh Circuit)'],
    techEcosystem: 'Emerging IT corridor with dedicated electronics manufacturing SEZ, knowledge parks, and Jewar airport proximity',
    landmark: 'Emerging IT & Manufacturing Hub — NCR Electronics Capital',
  },
  bhiwadi: {
    areas: ['RIICO Industrial Area', 'Tapukara', 'Khuskhera', 'Neemrana Border', 'Bhiwadi Extension', 'Samalkha'],
    nearbyCities: ['Alwar', 'Rewari', 'Gurgaon', 'Palwal', 'Faridabad', 'Manesar'],
    industries: ['Manufacturing (1000+ Units)', 'Electronics', 'Auto Components', 'Pharmaceuticals', 'FMCG'],
    techEcosystem: 'Major NCR industrial town with RIICO industrial area, manufacturing automation, and export-oriented units',
    landmark: 'NCR Manufacturing Hub — Industrial Township with 1000+ Factories',
  },
  rohtak: {
    areas: ['Rohtak Bypass', 'Delhi Road', 'Hisar Road', 'Model Town', 'Asthal Bohar', 'Kaluwala Kheri'],
    nearbyCities: ['Delhi', 'Sonipat', 'Hisar', 'Bhiwani', 'Jhajjar', 'Charkhi Dadri'],
    industries: ['Education (MDU Rohtak)', 'Agriculture', 'Food Processing', 'Textiles', 'Light Engineering'],
    techEcosystem: 'Educational hub with Maharshi Dayanand University, AIIMS Rohtak, and agricultural research institutions',
    landmark: 'Educational Hub of Haryana — Agriculture & Healthcare Centre',
  },
  panipat: {
    areas: ['Model Town', 'Gandhi Nagar', 'Samalkha Road', 'Israna', 'Babarpur', 'Kachwa Chowk'],
    nearbyCities: ['Karnal', 'Sonipat', 'Delhi', 'Rohtak', 'Jind', 'Ambala'],
    industries: ['Textile Recycling (Shoddy Yarn)', 'Carpet Weaving', 'Steel', 'Oil Refinery (IOCL)', 'History (3 Battles)'],
    techEcosystem: 'City of weavers with textile recycling innovation, IOCL refinery automation, and historical tourism',
    landmark: 'City of Weavers — Textile Recycling Capital & Historical Battlefield',
  },
  karnal: {
    areas: ['Model Town', 'Karnal Bypass', 'NH-44', 'Sector 7', 'Rithmania', 'Tarori', 'Assandh'],
    nearbyCities: ['Kurukshetra', 'Panipat', 'Kaithal', 'Jind', 'Ambala', 'Yamunanagar'],
    industries: ['Agricultural Research', 'Food Processing', 'Sugar Mills', 'Paper', 'Dairy (NDDB)'],
    techEcosystem: 'Agricultural research hub with National Dairy Research Institute (NDRI), sugar mill automation, and food processing tech',
    landmark: 'Agricultural Research Capital — Food Processing & Dairy Hub',
  },
  sonipat: {
    areas: ['Model Town', 'Murthal', 'Gohana Road', 'Kundli', 'Rai Industrial Area', 'HSIIDC Estates'],
    nearbyCities: ['Delhi', 'Panipat', 'Rohtak', 'Jhajjar', 'Baghpat', 'Shamli'],
    industries: ['Manufacturing', 'Food Processing', 'Automobiles', 'Education', 'Real Estate (NCR)'],
    techEcosystem: 'NCR industrial city with HSIIDC estates, automobile plants, food processing units, and educational institutions',
    landmark: 'NCR Manufacturing & Food Processing Hub — Industrial Gateway to Haryana',
  },
  ujjain: {
    areas: ['Freeganj', 'Nana Kheda', 'Mahakal Temple Area', 'Sandipani', 'Char Rasta', 'Gopal Mandir'],
    nearbyCities: ['Indore', 'Dewas', 'Ratlam', 'Mandsaur', 'Neemuch', 'Agar Malwa'],
    industries: ['Religious Tourism (Mahakaleshwar)', 'Education', 'Agriculture', 'Textiles', 'Software Technology Park'],
    techEcosystem: 'Ancient Ujjainiy city with Mahakal temple digitisation, Software Technology Park, and agricultural trading tech',
    landmark: 'Ancient Holy City — Mahakal Temple & Kumbh Mela Site',
  },
};

// ─────────────────────────── SERVICE PROFILES ────────────────────────────────

const defaultProcessSteps: ProcessStep[] = [
  { step: 1, icon: '🔍', title: 'Discovery & Requirements', description: 'In-depth analysis of your business goals, target audience, and technical requirements.' },
  { step: 2, icon: '📐', title: 'Strategy & Design', description: 'Wireframes, UI/UX design, technology stack selection, and project roadmap.' },
  { step: 3, icon: '⚙️', title: 'Development & Build', description: 'Agile sprint-based development with weekly demos and continuous integration.' },
  { step: 4, icon: '🧪', title: 'Testing & QA', description: 'Comprehensive testing across devices, browsers, and performance benchmarks.' },
  { step: 5, icon: '🚀', title: 'Launch & Support', description: 'Smooth go-live, Google indexing, and 90-day post-launch hypercare.' },
];

export const serviceProfiles: Record<string, ServiceProfile> = {
  'website-designing-and-development': {
    processSteps: defaultProcessSteps,
    techStack: {
      Frontend: ['React.js / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      Backend: ['Node.js', 'PHP / Laravel', 'Python / Django', 'Headless CMS'],
      'CMS & E-Com': ['WordPress', 'Shopify', 'WooCommerce', 'Strapi'],
      'Hosting & CDN': ['AWS', 'Vercel', 'Cloudflare CDN', 'Nginx'],
    },
    pricingTiers: [
      { name: 'Starter', price: '₹15,000', description: 'Perfect for small local businesses', features: ['5-7 pages', 'Mobile responsive', 'Basic SEO', 'Contact form', '3-month support'], popular: false },
      { name: 'Business', price: '₹45,000', description: 'Full-featured professional website', features: ['10-15 pages', 'WordPress CMS', 'Advanced SEO', 'Blog + Gallery', 'Payment integration', '6-month support'], popular: true },
      { name: 'E-Commerce', price: '₹90,000', description: 'Complete online store solution', features: ['Unlimited products', 'Payment gateway', 'Inventory system', 'Order tracking', 'Training included', '12-month support'], popular: false },
    ],
    keyBenefits: [
      { icon: '📱', title: '100% Mobile-First', description: 'Optimised for smartphones — where 75%+ of your visitors come from.' },
      { icon: '⚡', title: 'Lightning Fast', description: 'Google PageSpeed 90+ scores ensuring lower bounce rates and better rankings.' },
      { icon: '🔍', title: 'SEO Built-In', description: 'Technical SEO, schema markup, and local SEO baked into every page from day one.' },
      { icon: '🔒', title: 'Secure & Reliable', description: 'SSL, daily backups, and 99.9% uptime guaranteed for all websites.' },
    ],
  },
  'mobile-app-development': {
    processSteps: [
      { step: 1, icon: '💡', title: 'Concept & UX Research', description: 'User journey mapping, competitor analysis, and feature prioritisation for your app.' },
      { step: 2, icon: '🎨', title: 'UI/UX Design', description: 'Figma prototypes, interaction design, and brand-aligned screens before a single line of code.' },
      { step: 3, icon: '📱', title: 'Native / Cross-Platform Dev', description: 'React Native or Flutter development with clean, scalable architecture.' },
      { step: 4, icon: '🧪', title: 'Testing on Real Devices', description: 'Functional, performance, and crash testing on 50+ device-OS combinations.' },
      { step: 5, icon: '🏪', title: 'Store Submission & Support', description: 'App Store & Play Store submission, rating optimisation, and crash monitoring.' },
    ],
    techStack: {
      'Cross-Platform': ['React Native', 'Flutter / Dart', 'Expo'],
      Native: ['Swift (iOS)', 'Kotlin (Android)', 'Jetpack Compose'],
      Backend: ['Node.js', 'Firebase', 'Supabase', 'AWS Amplify'],
      'Analytics & Push': ['Firebase Analytics', 'OneSignal', 'Mixpanel', 'Sentry'],
    },
    pricingTiers: [
      { name: 'MVP App', price: '₹50,000', description: 'Validate your idea fast', features: ['Single platform', 'Core features only', 'Basic UI design', 'Play Store / App Store submission', '3-month support'] },
      { name: 'Full App', price: '₹1,50,000', description: 'Production-ready for both platforms', features: ['iOS + Android', 'Custom UI/UX design', 'Push notifications', 'Payment gateway', 'Admin panel', '6-month support'], popular: true },
      { name: 'Enterprise', price: '₹3,00,000+', description: 'Complex apps with AI/IoT', features: ['All platforms', 'Offline sync', 'AI/ML features', 'ERP integration', 'Dedicated team', '12-month support'] },
    ],
    keyBenefits: [
      { icon: '🌍', title: 'One Code — All Platforms', description: 'React Native / Flutter cuts dev cost by 50% while delivering near-native performance.' },
      { icon: '🔐', title: 'Enterprise Security', description: 'Biometric auth, data encryption, and OWASP-compliant code for sensitive apps.' },
      { icon: '📊', title: 'Analytics Ready', description: 'Built-in event tracking, crash reporting, and funnel analytics from day one.' },
      { icon: '🔄', title: 'OTA Updates', description: 'Push bug-fixes and new features without App Store review delays.' },
    ],
  },
  'software-development': {
    processSteps: defaultProcessSteps,
    techStack: {
      Frontend: ['React.js', 'Angular', 'Vue.js', 'Next.js'],
      Backend: ['Node.js', 'Python / Django', 'Java / Spring Boot', '.NET Core', 'PHP / Laravel'],
      Databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
      'Cloud & DevOps': ['AWS', 'Azure', 'Docker / Kubernetes', 'CI/CD Pipelines'],
    },
    pricingTiers: [
      { name: 'Basic', price: '₹2,00,000', description: 'Small business automation', features: ['Single module', 'Web + mobile ready', 'User management', '3-month support', 'Source code'] },
      { name: 'Professional', price: '₹5,00,000', description: 'Multi-module enterprise app', features: ['Multiple modules', 'API integrations', 'Role-based access', 'Reporting dashboard', 'Training', '6-month support'], popular: true },
      { name: 'Enterprise', price: '₹10,00,000+', description: 'Full ERP / platform', features: ['Unlimited modules', 'Cloud deployment', 'BI & analytics', 'SLA support', 'Dedicated team', '12-month support'] },
    ],
    keyBenefits: [
      { icon: '⚙️', title: 'Fully Custom', description: 'No off-the-shelf compromise — built exactly to your workflows and business rules.' },
      { icon: '📈', title: 'Scales With You', description: 'Microservices and cloud-native architecture grow from 100 to 1M users seamlessly.' },
      { icon: '🔗', title: 'Integrates Everything', description: 'Razorpay, GST, WhatsApp, SMS, Google Maps, ERP — all connected out of the box.' },
      { icon: '🛡️', title: 'Secure by Design', description: 'OWASP Top-10 hardened, encrypted data at rest & transit, and role-based permissions.' },
    ],
  },
  'blockchain-development': {
    processSteps: [
      { step: 1, icon: '📋', title: 'Use Case Analysis', description: 'Evaluate whether blockchain genuinely solves your problem and define smart contract scope.' },
      { step: 2, icon: '📐', title: 'Architecture Design', description: 'Select chain (Ethereum, BNB, Polygon), consensus model, and token economics.' },
      { step: 3, icon: '🔨', title: 'Smart Contract Dev', description: 'Solidity development with OpenZeppelin standards and formal specification.' },
      { step: 4, icon: '🔎', title: 'Security Audit', description: 'Third-party audit, reentrancy checks, and fuzz testing before mainnet deployment.' },
      { step: 5, icon: '🚀', title: 'Deploy & Monitor', description: 'Mainnet / testnet deployment, block explorer verification, and incident response.' },
    ],
    techStack: {
      'Smart Contracts': ['Solidity', 'Rust (Solana)', 'OpenZeppelin', 'Hardhat / Foundry'],
      Chains: ['Ethereum', 'BNB Smart Chain', 'Polygon', 'Solana', 'Avalanche'],
      Frontend: ['Ethers.js / Viem', 'Wagmi', 'RainbowKit', 'Next.js'],
      'Storage & Oracle': ['IPFS / Filecoin', 'Chainlink', 'The Graph', 'Pinata'],
    },
    pricingTiers: [
      { name: 'Token Launch', price: '₹1,50,000', description: 'BEP-20 / ERC-20 token', features: ['Token contract', 'BscScan verification', 'Tokenomics design', 'Liquidity setup', '3-month support'] },
      { name: 'DApp', price: '₹4,00,000', description: 'Full decentralised application', features: ['Smart contracts', 'React frontend', 'Wallet integration', 'IPFS storage', 'Audit report', '6-month support'], popular: true },
      { name: 'Protocol', price: '₹10,00,000+', description: 'DeFi / NFT platform', features: ['Multi-contract system', 'Governance module', 'Staking / farming', 'Security audit', 'Marketing kit', '12-month support'] },
    ],
    keyBenefits: [
      { icon: '🔐', title: 'Trustless & Transparent', description: 'Smart contracts replace intermediaries — every transaction is auditable on-chain.' },
      { icon: '⛓️', title: 'Multi-Chain Expertise', description: 'We deploy on Ethereum, BNB, Polygon, Solana — choosing the chain that fits your budget and throughput.' },
      { icon: '🛡️', title: 'Security-First', description: 'Full audit reports, reentrancy guards, and bug-bounty readiness built into every project.' },
      { icon: '🌐', title: 'Web3 Full Stack', description: 'From smart contract to React DApp — a single team owns your entire Web3 product.' },
    ],
  },
  'dapp-development': {
    processSteps: [
      { step: 1, icon: '💡', title: 'DApp Conceptualisation', description: 'Define user flows, tokenomics, and on-chain vs off-chain data separation.' },
      { step: 2, icon: '📐', title: 'Smart Contract Architecture', description: 'Design upgradeable contract patterns with proxy contracts for future flexibility.' },
      { step: 3, icon: '⚙️', title: 'Full-Stack Build', description: 'React / Next.js frontend + Solidity contracts using Hardhat and Ethers.js.' },
      { step: 4, icon: '🔎', title: 'Audit & Security Review', description: 'Automated slither scans, manual review, and penetration testing.' },
      { step: 5, icon: '🚀', title: 'Mainnet Launch & Marketing', description: 'Deploy, verify, and coordinate initial liquidity and community launch.' },
    ],
    techStack: {
      Contracts: ['Solidity', 'OpenZeppelin', 'Hardhat', 'Foundry'],
      Frontend: ['Next.js', 'Wagmi', 'Viem', 'RainbowKit'],
      'Backend / API': ['Node.js', 'The Graph (subgraph)', 'Moralis', 'Alchemy'],
      Infrastructure: ['IPFS', 'Chainlink', 'AWS / Vercel', 'Pinata'],
    },
    pricingTiers: [
      { name: 'Simple DApp', price: '₹2,00,000', description: 'Single smart contract + UI', features: ['1 contract', 'Wallet connect', 'React UI', 'Testnet + mainnet', '3-month support'] },
      { name: 'Full DApp', price: '₹5,00,000', description: 'Multi-contract DApp', features: ['Multiple contracts', 'IPFS integration', 'Subgraph indexing', 'Admin dashboard', 'Audit', '6-month support'], popular: true },
      { name: 'DeFi Protocol', price: '₹12,00,000+', description: 'AMM / lending / yield protocol', features: ['Complex DeFi logic', 'Governance token', 'Liquidity mining', 'Full audit', 'Community tools', '12-month support'] },
    ],
    keyBenefits: [
      { icon: '🔷', title: 'Production DApps', description: 'Battle-tested patterns — proxy upgradeable contracts, gas optimisation, and formal testing.' },
      { icon: '🌐', title: 'Cross-Chain Deploy', description: 'Deploy the same DApp to Ethereum, BNB, and Polygon simultaneously for maximum reach.' },
      { icon: '🔗', title: 'Seamless UX', description: 'RainbowKit wallet flows so smooth, users forget they are interacting with a blockchain.' },
      { icon: '📊', title: 'On-Chain Analytics', description: 'The Graph subgraphs and Dune dashboards give you live protocol metrics.' },
    ],
  },
  'flutter-app-development': {
    processSteps: [
      { step: 1, icon: '🎯', title: 'Platform & Feature Planning', description: 'Define MVP scope, map screens, and select Flutter packages for your use case.' },
      { step: 2, icon: '🎨', title: 'Figma Prototype', description: 'High-fidelity Flutter-native design with Material 3 / Cupertino components.' },
      { step: 3, icon: '📱', title: 'Flutter Development', description: 'Single codebase delivering iOS, Android, and web from one Dart codebase.' },
      { step: 4, icon: '🧪', title: 'Widget & Integration Testing', description: 'Flutter test suite with golden pixel tests and real-device farm validation.' },
      { step: 5, icon: '🏪', title: 'App Store & Play Store Launch', description: 'Submission, metadata optimisation, and ASO for both stores simultaneously.' },
    ],
    techStack: {
      'Core Framework': ['Flutter 3.x', 'Dart 3.x', 'Material 3', 'Cupertino'],
      'State Management': ['Riverpod', 'BLoC', 'GetX'],
      Backend: ['Firebase', 'Supabase', 'REST APIs', 'GraphQL'],
      'Native & Plugins': ['Razorpay Flutter', 'Google Maps', 'Camera', 'Bluetooth / IoT'],
    },
    pricingTiers: [
      { name: 'Starter', price: '₹60,000', description: 'Single-platform MVP', features: ['iOS or Android', 'Core features', 'Firebase backend', 'Store submission', '3-month support'] },
      { name: 'Full Flutter', price: '₹1,20,000', description: 'Both platforms, full feature set', features: ['iOS + Android', 'Custom UI', 'Push notifications', 'Payment gateway', 'Offline mode', '6-month support'], popular: true },
      { name: 'Enterprise', price: '₹2,50,000+', description: 'Complex B2B Flutter app', features: ['iOS + Android + Web', 'ERP integration', 'Biometric auth', 'BLE/IoT support', 'Dedicated team', '12-month support'] },
    ],
    keyBenefits: [
      { icon: '🦋', title: '60% Faster Delivery', description: 'Single Flutter codebase replaces separate iOS and Android teams — same quality, half the cost.' },
      { icon: '🎨', title: 'Pixel-Perfect UI', description: 'Custom widgets render identically on every screen size and OS version.' },
      { icon: '⚡', title: 'Native Performance', description: 'Dart compiles to native ARM — 60fps animations with zero JavaScript bridge overhead.' },
      { icon: '🔄', title: 'Hot Reload in Production', description: 'Code Push updates let you ship UI fixes without waiting for App Store approval.' },
    ],
  },
  'mlm-software-development': {
    processSteps: [
      { step: 1, icon: '📊', title: 'Compensation Plan Design', description: 'Analyse your MLM plan (binary, unilevel, matrix, hybrid) and define commission rules.' },
      { step: 2, icon: '📐', title: 'System Architecture', description: 'Design genealogy tree, wallet, rank system, and payout engine for your plan.' },
      { step: 3, icon: '⚙️', title: 'Core Development', description: 'Build member portal, admin panel, genealogy tree visualiser, and commission engine.' },
      { step: 4, icon: '💳', title: 'Payment & Gateway Integration', description: 'Integrate Razorpay, PayU, and UPI for deposits, withdrawals, and commission payouts.' },
      { step: 5, icon: '🚀', title: 'Launch & Training', description: 'UAT testing, staff training, member onboarding guides, and go-live support.' },
    ],
    techStack: {
      Frontend: ['React.js', 'Next.js', 'Tailwind CSS'],
      Backend: ['Node.js', 'PHP / Laravel', 'MySQL'],
      Payments: ['Razorpay', 'PayU', 'PayPal', 'Crypto (USDT/BNB)'],
      Infrastructure: ['AWS', 'Redis (caching)', 'WebSockets (live tree)', 'SSL'],
    },
    pricingTiers: [
      { name: 'Basic MLM', price: '₹50,000', description: 'Single plan, up to 10K members', features: ['1 compensation plan', 'Member & admin portals', 'Commission engine', '1 payment gateway', '6-month support'] },
      { name: 'Pro MLM', price: '₹1,00,000', description: 'Multi-plan, e-pin, rank system', features: ['2 MLM plans', 'E-pin system', 'Rank & rewards', 'Mobile app', 'Multiple gateways', '12-month support'], popular: true },
      { name: 'Enterprise', price: '₹2,50,000+', description: 'Unlimited members, smart contract', features: ['Any plan type', 'Blockchain MLM option', 'White-label', 'Unlimited members', 'Dedicated server', 'SLA support'] },
    ],
    keyBenefits: [
      { icon: '🌳', title: 'Real-Time Genealogy Tree', description: 'Visual, zoomable downline tree updating live as new members join.' },
      { icon: '💰', title: 'Instant Commission Payouts', description: 'Automated commission calculation with same-day payout to member e-wallets.' },
      { icon: '📱', title: 'Mobile App Included', description: 'Branded Android app for members to track downline, commissions, and ranks on the go.' },
      { icon: '🔒', title: 'Fraud Prevention', description: 'IP tracking, multi-device detection, and admin approval workflows stop duplicate accounts.' },
    ],
  },
  'digital-marketing': {
    processSteps: [
      { step: 1, icon: '🔍', title: 'Audit & Competitor Analysis', description: 'Full audit of your existing digital presence and reverse-engineering competitor rankings.' },
      { step: 2, icon: '🎯', title: 'Strategy & Keyword Research', description: 'City-specific keyword mapping, content calendar, and paid ads strategy.' },
      { step: 3, icon: '✍️', title: 'Content & On-Page SEO', description: 'Blog posts, landing pages, meta optimisation, and schema markup implementation.' },
      { step: 4, icon: '📢', title: 'Paid Ads & Social Media', description: 'Google Ads, Meta Ads, and organic social media management with A/B testing.' },
      { step: 5, icon: '📊', title: 'Monthly Reporting', description: 'Ranking reports, traffic analytics, conversion tracking, and strategy refinement.' },
    ],
    techStack: {
      SEO: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog'],
      'Paid Ads': ['Google Ads', 'Meta Ads Manager', 'YouTube Ads'],
      'Social & Content': ['Canva Pro', 'Buffer', 'Hootsuite', 'ChatGPT (content)'],
      Analytics: ['Google Analytics 4', 'Hotjar', 'Tag Manager', 'Looker Studio'],
    },
    pricingTiers: [
      { name: 'Starter', price: '₹15,000/mo', description: 'Local SEO & social presence', features: ['Local SEO', 'Google My Business', '8 social posts/month', 'Monthly report', '1 city targeting'] },
      { name: 'Growth', price: '₹30,000/mo', description: 'SEO + Google Ads', features: ['Full SEO campaign', 'Google Ads (₹15K budget)', '20 social posts', 'Blog (4 posts)', 'Bi-weekly report'], popular: true },
      { name: 'Domination', price: '₹60,000/mo', description: 'Full digital domination', features: ['Multi-city SEO', 'Google + Meta Ads', 'YouTube strategy', 'Influencer tie-ups', 'Daily reporting', 'Dedicated manager'] },
    ],
    keyBenefits: [
      { icon: '📍', title: 'Local SEO Experts', description: 'We rank "near me" and city-specific searches that bring walk-in and call-in leads.' },
      { icon: '📈', title: 'Measurable ROI', description: 'Every rupee tracked — cost-per-lead, ROAS, and organic traffic growth reported monthly.' },
      { icon: '🎯', title: 'Hyper-Targeted Ads', description: 'Pin-code-level Google and Meta targeting to reach buyers in your exact service area.' },
      { icon: '✍️', title: 'Content That Converts', description: 'SEO-rich blog posts and landing pages written to rank and sell — not just fill pages.' },
    ],
  },
  'ecommerce-development': {
    processSteps: defaultProcessSteps,
    techStack: {
      Platform: ['Shopify', 'WooCommerce', 'Magento', 'Custom React Commerce'],
      Payments: ['Razorpay', 'PayU', 'PayPal', 'Stripe', 'UPI / QR'],
      'Marketing Tools': ['Klaviyo', 'Meta Pixel', 'Google Shopping', 'WhatsApp Business API'],
      Operations: ['Shiprocket', 'Delhivery API', 'GST invoicing', 'Inventory sync'],
    },
    pricingTiers: [
      { name: 'Starter Store', price: '₹45,000', description: 'Up to 100 products', features: ['Shopify / WooCommerce', 'Payment gateway', 'GST invoicing', 'Mobile responsive', '3-month support'] },
      { name: 'Business Store', price: '₹90,000', description: 'Full-featured marketplace', features: ['Unlimited products', 'Multi-vendor', 'WhatsApp cart', 'Abandoned cart recovery', 'Analytics dashboard', '6-month support'], popular: true },
      { name: 'Enterprise Commerce', price: '₹2,00,000+', description: 'Custom headless commerce', features: ['Headless architecture', 'ERP / WMS integration', 'B2B pricing', 'AI recommendations', 'Dedicated server', '12-month support'] },
    ],
    keyBenefits: [
      { icon: '🛒', title: 'Conversion-Optimised', description: 'Checkout flows designed to cut cart abandonment — average 22% improvement in conversion.' },
      { icon: '📦', title: 'Logistics Ready', description: 'Shiprocket, Delhivery, and Blue Dart APIs for automated shipping label generation.' },
      { icon: '📊', title: 'Sell Everywhere', description: 'Sync inventory across your website, Amazon, Flipkart, and Instagram Shop simultaneously.' },
      { icon: '💬', title: 'WhatsApp Commerce', description: 'Customers can browse, order, and pay via WhatsApp — zero friction for Tier 2/3 markets.' },
    ],
  },
};

/** Helper: get city profile with graceful fallback */
export function getCityProfile(citySlug: string): CityProfile {
  return cityProfiles[citySlug] ?? {
    areas: ['City Centre', 'Industrial Area', 'Commercial Hub'],
    nearbyCities: ['Nearby Town 1', 'Nearby Town 2', 'Nearby Town 3'],
    industries: ['Retail', 'Manufacturing', 'Education', 'Healthcare', 'Agriculture'],
    techEcosystem: 'Growing digital market with increasing IT adoption across local businesses',
    landmark: 'Business Hub',
  };
}

/** Helper: get service profile with graceful fallback */
export function getServiceProfile(serviceId: string): ServiceProfile {
  return serviceProfiles[serviceId] ?? {
    processSteps: defaultProcessSteps,
    pricingTiers: [
      { name: 'Starter', price: 'Custom', description: 'Entry-level package', features: ['Core features', 'Support included'], popular: false },
      { name: 'Professional', price: 'Custom', description: 'Full-featured solution', features: ['All features', 'Priority support'], popular: true },
      { name: 'Enterprise', price: 'Custom', description: 'Unlimited scale', features: ['Custom everything', 'Dedicated team'] },
    ],
    techStack: {
      Frontend: ['React.js', 'TypeScript'],
      Backend: ['Node.js', 'PostgreSQL'],
      Cloud: ['AWS', 'Docker'],
    },
    keyBenefits: [
      { icon: '⚡', title: 'Fast Delivery', description: 'Agile sprints with weekly demos ensure rapid, predictable delivery.' },
      { icon: '🔒', title: 'Enterprise Security', description: 'Security-first development following OWASP and industry best practices.' },
      { icon: '📞', title: '24/7 Support', description: 'Dedicated account manager and round-the-clock technical support.' },
      { icon: '✅', title: 'Quality Assured', description: '100% test coverage and rigorous QA before every release.' },
    ],
  };
}
