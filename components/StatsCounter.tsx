'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: string;
}

interface StatsCounterProps {
  stats?: Stat[];
  className?: string;
  variant?: 'default' | 'gradient' | 'cards';
}

const defaultStats: Stat[] = [
  { value: 12, suffix: '+', label: 'Years Experience', icon: '🏆' },
  { value: 500, suffix: '+', label: 'Happy Clients', icon: '👥' },
  { value: 1000, suffix: '+', label: 'Projects Delivered', icon: '💻' },
  { value: 99.9, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const isDecimal = end % 1 !== 0;
    const decimals = isDecimal ? 1 : 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = easeOut * end;
      
      setCount(Number(currentValue.toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
}

function StatItem({ stat, inView }: { stat: Stat; inView: boolean }) {
  const count = useCountUp(stat.value, 2000, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      {stat.icon && <span className="text-4xl mb-2 block">{stat.icon}</span>}
      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <div className="text-gray-600 font-medium">{stat.label}</div>
    </motion.div>
  );
}

export function StatsCounter({ stats = defaultStats, className = '', variant = 'default' }: StatsCounterProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  if (variant === 'gradient') {
    return (
      <section className={`py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white ${className}`}>
        <div className="container mx-auto px-4">
          <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                {stat.icon && <span className="text-4xl mb-2 block">{stat.icon}</span>}
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.prefix}
                  <CountUpNumber value={stat.value} inView={inView} />
                  {stat.suffix}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'cards') {
    return (
      <section className={`py-16 ${className}`}>
        <div className="container mx-auto px-4">
          <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100"
              >
                {stat.icon && (
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                )}
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.prefix}
                  <CountUpNumber value={stat.value} inView={inView} />
                  {stat.suffix}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Numbers That Speak for Themselves
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUpNumber({ value, inView }: { value: number; inView: boolean }) {
  const count = useCountUp(value, 2000, inView);
  return <>{count}</>;
}
