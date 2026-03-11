import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhatsAppButton: React.FC = () => {
  const { t } = useLanguage();

  const handleClick = () => {
    const phone = '22890000000'; // Replace with real phone
    const message = encodeURIComponent(t.whatsapp.message);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-white text-charcoal px-4 py-2 rounded-xl shadow-xl border border-warm-border whitespace-nowrap font-bold text-sm">
          {t.whatsapp.tooltip}
        </div>
        <div className="w-3 h-3 bg-white border-r border-b border-warm-border rotate-45 absolute -bottom-1.5 right-6" />
      </div>

      <motion.button
        onClick={handleClick}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.15 }}
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:brightness-110 transition-all"
      >
        <MessageCircle size={32} fill="currentColor" />
      </motion.button>
    </div>
  );
};
