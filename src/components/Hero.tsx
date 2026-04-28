import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Users, Home, Heart, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

import { BubblesBackground } from './BubblesBackground';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: '850+', label: t.hero.stats.beneficiaries, color: 'text-human-red' },
    { icon: Home, value: '12', label: t.hero.stats.villages, color: 'text-tender-green' },
    { icon: Heart, value: '98%', label: t.hero.stats.funds, color: 'text-soft-sun' },
    { icon: Calendar, value: '3', label: t.hero.stats.years, color: 'text-human-red-light' },
  ];

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden flex items-center">
      <BubblesBackground />
      
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 50, -20, 0], y: [0, -30, 40, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-human-red-light/20 rounded-full blob-blur"
        />
        <motion.div
          animate={{ x: [0, -40, 60, 0], y: [0, 50, -20, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-soft-sun/20 rounded-full blob-blur"
        />
        <motion.div
          animate={{ x: [0, 30, -50, 0], y: [0, 40, 20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-tender-green/20 rounded-full blob-blur"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-warm-border mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tender-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-tender-green"></span>
            </span>
            <span className="text-sm font-bold text-charcoal">{t.hero.badge}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-lora font-bold text-charcoal leading-tight mb-6">
            {t.hero.title}{' '}
            <motion.span
              animate={{ rotate: [-1, 1, -1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="italic text-human-red inline-block"
            >
              {t.hero.titleItalic}
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="h-2 bg-gradient-to-r from-human-red to-soft-sun rounded-full mt-2 origin-left"
            />
          </h1>

          <p className="text-xl text-warm-gray mb-10 max-w-lg leading-relaxed">{t.hero.description}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/donate" className="bg-human-red text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-human-red-dark hover:-translate-y-1 transition-all duration-200 text-center">
              {t.hero.ctaPrimary}
            </Link>
            <Link to="/projects" className="bg-white text-charcoal border-2 border-warm-border px-8 py-4 rounded-full font-bold text-lg hover:bg-sand hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2">
              {t.hero.ctaSecondary} <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
                className="flex flex-col"
              >
                <span className={cn('text-3xl font-bold mb-1', stat.color)}>{stat.value}</span>
                <span className="text-sm text-warm-gray font-semibold">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image / Visual */}
        <div className="relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white"
          >
            <img src="/men1.jpg" alt="ACH Actions" className="w-full h-auto" referrerPolicy="no-referrer" />
          </motion.div>

          {/* Floating Card — Citation */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -left-12 z-20 bg-white p-6 rounded-2xl shadow-xl border border-warm-border max-w-[200px]"
          >
            <div className="w-10 h-10 bg-human-red-pale rounded-full flex items-center justify-center mb-3">
              <Heart className="text-human-red w-6 h-6 fill-current" />
            </div>
            <p className="text-sm font-bold text-charcoal">"{t.mission.hero.quote}"</p>
          </motion.div>

          {/* Floating Card — Bénévoles */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-10 -right-6 z-20 bg-tender-green text-white p-6 rounded-2xl shadow-xl max-w-[220px]"
          >
            <p className="text-2xl font-bold mb-1">30+</p>
            <p className="text-sm font-semibold opacity-90">{t.hero.stats.volunteers}</p>
          </motion.div>

          {/* Floating Card — Villages */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute -bottom-10 -left-6 z-20 bg-human-red text-white p-6 rounded-2xl shadow-xl max-w-[220px]"
          >
            <p className="text-2xl font-bold mb-1">12+</p>
            <p className="text-sm font-semibold opacity-90">{t.projects.hero.villagesLabel}</p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-1 h-12 bg-warm-border rounded-full relative overflow-hidden">
          <motion.div
            animate={{ y: [-48, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 w-full h-full sc-line"
          />
        </div>
      </div>
    </section>
  );
};
