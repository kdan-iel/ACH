import React from 'react';
import { motion } from 'motion/react';

interface BubbleProps {
  color?: string;
  size?: number;
  duration?: number;
  delay?: number;
  left?: string;
}

const Bubble: React.FC<BubbleProps> = ({ 
  color = 'bg-human-red', 
  size = 10, 
  duration = 10, 
  delay = 0, 
  left = '50%' 
}) => {
  return (
    <motion.div
      initial={{ y: '110vh', opacity: 0, scale: 0 }}
      animate={{ 
        y: '-10vh', 
        opacity: [0, 0.4, 0.4, 0],
        scale: [0, 1.2, 1, 0.8],
        x: [0, 30, -30, 0]
      }}
      transition={{ 
        duration, 
        delay, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className={`absolute rounded-full blur-[2px] border border-white/10 ${color}`}
      style={{ 
        width: size, 
        height: size, 
        left 
      }}
    />
  );
};

export const BubblesBackground: React.FC = () => {
  // Generate more bubbles with random properties for a more natural feel
  const bubbles = Array.from({ length: 40 }).map((_, i) => ({
    color: [
      'bg-human-red/30', 
      'bg-tender-green/30', 
      'bg-soft-sun/30', 
      'bg-human-red/20', 
      'bg-tender-green/25'
    ][i % 5],
    size: Math.floor(Math.random() * 20) + 8,
    duration: Math.floor(Math.random() * 8) + 7,
    delay: Math.random() * 4,
    left: `${Math.random() * 100}%`,
  }));
 
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-5">
      {bubbles.map((b, i) => (
        <Bubble key={i} {...b} />
      ))}
    </div>
  );
};
