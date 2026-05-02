import { Metadata } from 'next';
import { generateMetadata as genMeta, generateServiceSchema, generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateReviewSchema, generateOrganizationSchema, generateSoftwareApplicationSchema, generateSpeakableSchema } from '@/lib/seo';
import { Hero } from '@/components/Hero';
import { FAQSection } from '@/components/FAQSection';
import { ContactForm } from '@/components/ContactForm';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'Computer Vision Solutions India | Image Recognition AI | EifaSoft',
    description: 'Expert computer vision development in India. Object detection, image classification, OCR, facial recognition, quality inspection. Custom CV models for manufacturing, retail, healthcare. Starting ₹2,49,999.',
    canonical: '/computer-vision',
    keywords: [
      'computer vision solutions', 'computer vision India', 'image recognition AI',
      'object detection services', 'image classification', 'OCR development',
      'facial recognition system', 'quality inspection AI', 'visual AI',
      'deep learning vision', 'YOLO implementation', 'OpenCV development',
      'video analytics', 'pose estimation', 'image segmentation',
      'defect detection AI', 'visual inspection AI', 'computer vision company India',
    ],
  });
}

export default function ComputerVision() {
  const solutions = [
    { icon: '🔍', title: 'Object Detection', desc: 'Identify and locate objects in images and video', features: ['Real-time detection', 'Multi-object tracking', 'Custom object training', 'Video stream analysis', 'Edge deployment'], metrics: '98% detection accuracy' },
    { icon: '🖼️', title: 'Image Classification', desc: 'Categorize images into predefined classes', features: ['Product categorization', 'Scene recognition', 'Damage assessment', 'Medical imaging', 'Content moderation'], metrics: '95%+ accuracy' },
    { icon: '📝', title: 'OCR & Document AI', desc: 'Extract text from images and documents', features: ['Invoice processing', 'ID verification', 'Form digitization', 'Handwriting recognition', 'Multi-language OCR'], metrics: '99% character accuracy' },
    { icon: '👤', title: 'Facial Recognition', desc: 'Detect, verify, and analyze faces', features: ['Face detection', 'Identity verification', 'Emotion analysis', 'Age/gender estimation', 'Attendance systems'], metrics: '99.5% verification accuracy' },
    { icon: '🏭', title: 'Quality Inspection', desc: 'Automated visual inspection for manufacturing', features: ['Defect detection', 'Surface inspection', 'Dimensional analysis', 'Assembly verification', 'Real-time alerts'], metrics: '99% defect detection' },
    { icon: '🎯', title: 'Pose Estimation', desc: 'Track human body movements and gestures', features: ['Fitness tracking', 'Safety monitoring', 'Gesture control', 'Sports analysis', 'Rehabilitation'], metrics: 'Real-time 30+ FPS' },
  ];

  const industries = [
    { name: 'Manufacturing', useCases: ['Quality control', 'Defect detection', 'Assembly verification', 'Safety compliance'], savings: '40% reduction in defects' },
    { name: 'Retail', useCases: ['Inventory tracking', 'Customer analytics', 'Theft prevention', 'Checkout automation'], savings: '30% shrinkage reduction' },
    { name: 'Healthcare', useCases: ['Medical imaging', 'Diagnosis assistance', 'Patient monitoring', 'Drug identification'], savings: '60% faster diagnosis' },
    { name: 'Security', useCases: ['Surveillance', 'Access control', 'Threat detection', 'Crowd monitoring'], savings: '50% improved detection' },
    { name: 'Agriculture', useCases: ['Crop monitoring', 'Disease detection', 'Yield estimation', 'Harvesting automation'], savings: '25% yield improvement' },
    { name: 'Automotive', useCases: ['ADAS systems', 'License plate recognition', 'Damage assessment', 'Driver monitoring'], savings: '35% accident reduction' },
  ];

  const techStack = [
    { category: 'Deep Learning', items: ['PyTorch', 'TensorFlow', 'ONNX', 'TensorRT'] },
    { category: 'CV Libraries', items: ['OpenCV', 'Pillow', 'scikit-image', 'Albumentations'] },
    { category: 'Models', items: ['YOLO v8', 'ResNet', 'EfficientNet', 'Vision Transformers'] },
    { category: 'Deployment', items: ['NVIDIA Triton', 'AWS Rekognition', 'Azure CV', 'Edge AI'] },
  ];

  const packages = [
    { name: 'Starter', price: '₹2,49,999', duration: '6-8 weeks', features: ['Single CV application', 'Pre-trained models', 'API integration', 'Basic customization', 'Cloud deployment', '3 months support'], color: 'from-cyan-500 to-blue-500' },
    { name: 'Professional', price: '₹5,99,999', duration: '10-14 weeks', features: ['Custom model training', 'Multiple CV features', 'Real-time processing', 'Edge deployment option', 'Analytics dashboard', '6 months support'], color: 'from-purple-500 to-pink-500', popular: true },
    { name: 'Enterprise', price: '₹12,00,000+', duration: '16-24 weeks', features: ['Enterprise CV platform', 'Custom model training', 'On-premise deployment', 'Multi-camera support', 'Full integration', '12 months support'], color: 'from-orange-500 to-red-500' },
  ];

  const faqs = [
    { question: 'What is Computer Vision and how can it help my business?', answer: 'Computer Vision enables machines to interpret and understand visual information from images and videos. Business applications include: Automating quality inspection (40% fewer defects), Streamlining document processing (80% faster), Enhancing security with smart surveillance, Enabling contactless experiences, Automating inventory management. Organizations using CV report 30-50% operational efficiency gains.' },
    { question: 'What accuracy can I expect from computer vision models?', answer: 'Accuracy depends on the task and data quality: Object detection: 90-98% mAP (mean Average Precision), Image classification: 92-99% accuracy, OCR: 95-99% character accuracy, Facial recognition: 99%+ verification accuracy, Defect detection: 95-99% detection rate. We optimize for your specific requirements and can achieve near-human accuracy with proper training data and model selection.' },
    { question: 'Do you provide edge deployment for real-time processing?', answer: 'Yes, we specialize in edge AI deployment: NVIDIA Jetson devices (Nano, Xavier, Orin), Intel Neural Compute Stick, Raspberry Pi with accelerators, Custom industrial PCs, Mobile devices (iOS/Android). Edge deployment enables: Real-time processing (<100ms latency), Reduced cloud costs, Offline operation, Data privacy compliance. We optimize models for edge using TensorRT, ONNX, and quantization.' },
    { question: 'How much training data do I need for custom models?', answer: 'Data requirements vary by complexity: Simple classification: 500-1000 images per class, Object detection: 1000-5000 annotated images, Complex scenarios: 10,000+ images. We can start with less using: Transfer learning from pre-trained models, Data augmentation (10-50x more training samples), Synthetic data generation, Active learning to optimize labeling. We provide data annotation services if needed.' },
    { question: 'Can you integrate with existing camera systems?', answer: 'Yes, we integrate with: IP cameras (RTSP/ONVIF protocols), USB cameras, Industrial cameras (GigE Vision, USB3 Vision), Existing VMS systems (Milestone, Genetec), Cloud cameras (AWS, Azure IoT). We support both real-time streaming and batch processing of recorded footage. Integration typically adds 2-4 weeks to timeline.' },
    { question: 'What about data privacy and compliance?', answer: 'We implement privacy-by-design: On-premise processing (no cloud required), Face blurring/anonymization, GDPR-compliant data handling, Consent management for biometric data, Audit logging for compliance, Data retention policies. For facial recognition, we follow local regulations and implement opt-in mechanisms where required.' },
  ];

  const serviceSchema = generateServiceSchema('Computer Vision Solutions', 'Custom computer vision development including object detection, image classification, OCR, facial recognition, and quality inspection.');
  const productSchema = generateProductSchema('Computer Vision Development Package', 'Complete computer vision solution with custom models, real-time processing, and edge deployment.', '249999');

  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'EifaSoft Computer Vision Platform',
    description: 'Enterprise computer vision platform with object detection, image classification, OCR, facial recognition, quality inspection, and edge AI deployment capabilities.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud, Edge AI, On-Premise',
    price: '249999',
    rating: 4.9,
    reviewCount: 48,
  });

  const speakableSchema = generateSpeakableSchema([
    '.definition-box',
    '.key-takeaways',
    'article h1',
    'article h2',
  ]);

  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'AI Services', url: '/ai-services' }, { name: 'Computer Vision', url: '/computer-vision' }]);
  const reviewSchema = generateReviewSchema([
    { author: 'Mohan Tiwari', rating: 5, reviewBody: 'EifaSoft\'s defect detection system caught 99% of manufacturing defects our human inspectors were missing. ROI within 6 months!' },
    { author: 'Lakshmi Narayanan', rating: 5, reviewBody: 'The OCR system processes 10,000 invoices daily with near-perfect accuracy. Manual data entry is now history for us.' },
  ]);

  return (
    <main className="min-h-screen">
      <SchemaMarkup data={[serviceSchema, productSchema, softwareSchema, speakableSchema, faqSchema, breadcrumbSchema, ...reviewSchema, generateOrganizationSchema()]} />

      <Hero title="Computer Vision Solutions" subtitle="See the World Through AI" description="Transform visual data into actionable insights. Custom object detection, image classification, OCR, and quality inspection solutions. 50+ computer vision projects delivered." ctaPrimary={{ text: 'Discuss Your CV Project', href: '#contact' }} ctaSecondary={{ text: 'View Solutions', href: '#solutions' }} gradient="blue" />

      {/* What is Computer Vision - AI Overview Optimization */}
      <section className="py-8 bg-gradient-to-r from-cyan-50 to-blue-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="definition-box bg-white rounded-lg p-6 shadow-sm border-l-4 border-cyan-500">
              <h2 className="text-xl font-bold text-gray-900 mb-3">What is Computer Vision?</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Computer Vision</strong> is a field of AI that trains computers to interpret and understand visual information from images and videos. Using deep learning models like YOLO, ResNet, and Vision Transformers, computer vision systems can detect objects, classify images, recognize faces, extract text (OCR), and perform quality inspection. Applications include manufacturing defect detection, medical imaging, autonomous vehicles, and surveillance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways - Featured Snippet Optimization */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="key-takeaways bg-gradient-to-r from-cyan-50 to-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">✓</span>
                Key Takeaways
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Computer vision solutions starting at ₹2,49,999
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  YOLO, ResNet, OpenCV, TensorRT
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  95-99% detection accuracy
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  6-24 weeks development
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Edge & cloud deployment
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-green-500 mr-2">•</span>
                  Real-time 30+ FPS processing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What is CV */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8">What is Computer Vision?</h2>
          <p className="text-xl text-gray-700 text-center mb-8">Computer Vision enables machines to interpret and understand visual information from images and videos, automating tasks that traditionally required human vision.</p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-cyan-50 rounded-xl p-6 text-center"><div className="text-4xl font-bold text-cyan-600">98%</div><p className="text-gray-600">detection accuracy</p></div>
            <div className="bg-blue-50 rounded-xl p-6 text-center"><div className="text-4xl font-bold text-blue-600">40%</div><p className="text-gray-600">fewer defects</p></div>
            <div className="bg-purple-50 rounded-xl p-6 text-center"><div className="text-4xl font-bold text-purple-600">80%</div><p className="text-gray-600">faster processing</p></div>
            <div className="bg-green-50 rounded-xl p-6 text-center"><div className="text-4xl font-bold text-green-600">30 FPS</div><p className="text-gray-600">real-time analysis</p></div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Computer Vision Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="text-4xl mb-3">{sol.icon}</div>
                <h3 className="text-xl font-bold mb-2">{sol.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{sol.desc}</p>
                <div className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">{sol.metrics}</div>
                <ul className="space-y-1">
                  {sol.features.map((f, idx) => (
                    <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                      <span className="text-cyan-500">•</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, index) => (
              <div key={index} className="border rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold mb-3">{ind.name}</h3>
                <ul className="space-y-2 mb-4">
                  {ind.useCases.map((uc, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                      <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {uc}
                    </li>
                  ))}
                </ul>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm font-semibold">{ind.savings}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gradient-to-br from-cyan-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Technology Stack</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-5">
                <h3 className="font-bold text-cyan-300 mb-3">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-300">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Computer Vision Packages</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden ${pkg.popular ? 'ring-4 ring-cyan-500 scale-105' : ''}`}>
                {pkg.popular && <div className="bg-cyan-600 text-white text-center py-2 font-semibold">Most Popular</div>}
                <div className={`bg-gradient-to-br ${pkg.color} text-white p-6`}>
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  <div className="text-3xl font-bold my-2">{pkg.price}</div>
                  <p className="text-sm opacity-90">{pkg.duration}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {pkg.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="#contact" className="block text-center mt-6 px-6 py-3 rounded-lg font-bold bg-gray-900 text-white">Get Started</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section id="contact" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <ContactForm serviceName="Computer Vision Solutions" />
        </div>
      </section>
    </main>
  );
}
