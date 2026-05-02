'use client';

import { motion } from 'framer-motion';

const trustBadges = [
  {
    icon: '🏆',
    title: '12+ Years',
    subtitle: 'Industry Experience',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: '👥',
    title: '500+',
    subtitle: 'Happy Clients',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: '💻',
    title: '1000+',
    subtitle: 'Projects Delivered',
    color: 'from-green-400 to-emerald-600',
  },
  {
    icon: '⭐',
    title: '4.9/5',
    subtitle: 'Client Rating',
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: '🔒',
    title: '100%',
    subtitle: 'Data Security',
    color: 'from-red-400 to-rose-600',
  },
  {
    icon: '🎯',
    title: '99.9%',
    subtitle: 'Uptime Guarantee',
    color: 'from-cyan-400 to-teal-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

interface TrustBadgesProps {
  className?: string;
  variant?: 'default' | 'compact' | 'horizontal';
}

export function TrustBadges({ className = '', variant = 'default' }: TrustBadgesProps) {
  if (variant === 'horizontal') {
    return (
      <section className={`py-8 bg-white border-y border-gray-100 ${className}`}>
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
          >
            {trustBadges.slice(0, 4).map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                variants={itemVariants}
              >
                <span className="text-3xl">{badge.icon}</span>
                <div>
                  <div className="font-bold text-xl text-gray-900">{badge.title}</div>
                  <div className="text-sm text-gray-600">{badge.subtitle}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  if (variant === 'compact') {
    return (
      <motion.div
        className={`grid grid-cols-3 md:grid-cols-6 gap-4 ${className}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        {trustBadges.map((badge, index) => (
          <motion.div
            key={index}
            className="text-center p-3 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-2xl block mb-1">{badge.icon}</span>
            <div className="font-bold text-lg">{badge.title}</div>
            <div className="text-xs text-gray-500">{badge.subtitle}</div>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <section className={`py-12 bg-gradient-to-br from-gray-50 to-white ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
            ✓ TRUSTED BY 500+ BUSINESSES
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why Industry Leaders Choose EifaSoft
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center h-full relative overflow-hidden">
                {/* Gradient accent */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${badge.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
                
                {/* Icon with animated background */}
                <div className="relative mb-4">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${badge.color} rounded-full opacity-10 blur-xl`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                  />
                  <span className="relative text-4xl block">{badge.icon}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-1">{badge.title}</h3>
                <p className="text-sm text-gray-600">{badge.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust signals */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center items-center gap-6 md:gap-10 text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">ISO 27001 Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">NDA Protected</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
