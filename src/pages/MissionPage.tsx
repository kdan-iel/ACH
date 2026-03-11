import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Target, Eye, Heart, FileDown } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { cn } from '../lib/utils';
import { BubblesBackground } from '../components/BubblesBackground';

export const MissionPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pb-24">
      <PageHero
        title={t.mission.hero.title}
        titleItalic={t.mission.hero.titleItalic}
        description={t.mission.hero.description}
        image="/don5.jpeg"
      >
        <div className="flex gap-4">
          <a 
            href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-human-red text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-human-red-dark transition-all flex items-center gap-3 group"
          >
            <FileDown size={20} className="group-hover:translate-y-1 transition-transform" />
            {t.mission.hero.cta}
          </a>
        </div>
      </PageHero>

      <div className="max-w-7xl mx-auto px-6">
        {/* Vision/Mission/Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-24 -mt-10 relative z-20">
          {[
            { icon: Target, title: t.mission.vision.mission.title, text: t.mission.vision.mission.text, color: "bg-human-red" },
            { icon: Eye, title: t.mission.vision.vision.title, text: t.mission.vision.vision.text, color: "bg-tender-green" },
            { icon: Heart, title: t.mission.vision.values.title, text: t.mission.vision.values.text, color: "bg-soft-sun" },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[32px] shadow-xl border border-warm-border hover:shadow-2xl transition-all group"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform", item.color)}>
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-lora font-bold text-charcoal mb-4">{item.title}</h3>
              <p className="text-warm-gray leading-relaxed text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-sand/30 p-12 md:p-20 rounded-[60px] mb-24 border border-warm-border relative overflow-hidden">
          <BubblesBackground />
          <div className="absolute top-0 right-0 w-64 h-64 bg-tender-green/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <h2 className="text-4xl font-lora font-bold text-charcoal mb-16 text-center">{t.mission.history.title}</h2>
          
          <div className="space-y-16 relative before:absolute before:left-[19px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-warm-border before:-translate-x-1/2">
            {t.mission.history.steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "relative flex flex-col md:flex-row items-center gap-8 md:gap-0",
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                <div className="absolute left-0 md:left-1/2 top-1 w-10 h-10 bg-white border-4 border-human-red rounded-full z-10 -translate-x-1/2 shadow-lg" />
                
                <div className="w-full md:w-1/2 px-12 text-center md:text-left">
                  <div className={cn(
                    "bg-white p-8 rounded-[32px] shadow-lg border border-warm-border hover:border-human-red transition-colors",
                    i % 2 === 0 ? "md:text-right" : "md:text-left"
                  )}>
                    <span className="text-human-red font-black text-2xl mb-4 block">{step.year}</span>
                    <h4 className="text-2xl font-bold text-charcoal mb-3">{step.title}</h4>
                    <p className="text-warm-gray text-lg leading-relaxed">{step.text}</p>
                  </div>
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

