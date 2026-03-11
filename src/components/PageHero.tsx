import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

import { BubblesBackground } from './BubblesBackground';

interface PageHeroProps {
  title: string;
  titleItalic?: string;
  description: string;
  image: string;
  children?: React.ReactNode;
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  titleItalic,
  description,
  image,
  children,
  className,
}) => {
  return (
    <div className={cn("relative pt-32 pb-20 overflow-hidden", className)}>
      {/* Rising Bubbles */}
      <BubblesBackground />
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-sand/50 rounded-l-[100px] transform translate-x-1/4" />
      
      {/* Animated Background Elements behind text */}
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -left-20 top-20 w-64 h-64 bg-human-red/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 bottom-10 w-48 h-48 bg-tender-green/10 rounded-full blur-3xl"
        />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 grid grid-cols-3 gap-4 opacity-10">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
              className="w-2 h-2 bg-charcoal rounded-full"
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-lora font-bold text-charcoal mb-8 leading-tight">
              {title} {titleItalic && <span className="text-human-red italic block md:inline">{titleItalic}</span>}
            </h1>
            <p className="text-xl text-warm-gray mb-10 leading-relaxed max-w-xl">
              {description}
            </p>
            {children}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-soft-sun/20 rounded-[40px] -rotate-3 -z-10" />
            <div className="absolute -inset-4 bg-tender-green/10 rounded-[40px] rotate-3 -z-10" />
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white aspect-[4/3]">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer" 
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-warm-border hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-human-red rounded-full flex items-center justify-center text-white">
                  <span className="font-black">ACH</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-warm-gray uppercase tracking-widest">Impact Direct</p>
                  <p className="text-sm font-bold text-charcoal">100% sur le terrain</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
