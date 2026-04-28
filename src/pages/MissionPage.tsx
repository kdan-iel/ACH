import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Target, Eye, Heart, Droplets, GraduationCap, Users, TreeDeciduous, Globe } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { cn } from '../lib/utils';
import { BubblesBackground } from '../components/BubblesBackground';

const domainIcons = [Droplets, GraduationCap, Users, TreeDeciduous, Globe];
const domainColors = ["bg-human-red", "bg-tender-green", "bg-soft-sun", "bg-tender-green-light", "bg-human-red-light"];

export const MissionPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pb-24">
      <PageHero
        title={t.mission.hero.title}
        titleItalic={t.mission.hero.titleItalic}
        description={t.mission.hero.description}
        image="/don5.jpeg"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Mission / Vision / Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-24 -mt-10 relative z-20">
          {[
            { icon: Target, title: t.mission.vision.mission.title, content: t.mission.vision.mission.text, color: "bg-human-red", type: 'text' },
            { icon: Eye, title: t.mission.vision.vision.title, content: t.mission.vision.vision.text, color: "bg-tender-green", type: 'text' },
            { icon: Heart, title: t.mission.vision.values.title, content: t.mission.vision.values.items, color: "bg-soft-sun", type: 'list' },
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
              {item.type === 'text' ? (
                <p className="text-warm-gray leading-relaxed text-lg">{item.content as string}</p>
              ) : (
                <ul className="space-y-2">
                  {(item.content as string[]).map((val, vi) => (
                    <li key={vi} className="flex items-center gap-3 text-warm-gray font-semibold">
                      <span className={cn("w-2 h-2 rounded-full shrink-0", item.color)} />
                      {val}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Domains */}
        <div className="mb-24">
          <h2 className="text-4xl font-lora font-bold text-charcoal mb-12 text-center">{t.mission.domains.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.mission.domains.items.map((domain, i) => {
              const Icon = domainIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-[28px] shadow-lg border border-warm-border hover:border-human-red transition-all group"
                >
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform", domainColors[i])}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-lora font-bold text-charcoal mb-3">{domain.title}</h3>
                  <p className="text-warm-gray leading-relaxed">{domain.description}</p>
                </motion.div>
              );
            })}
          </div>
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
                className={cn("relative flex flex-col md:flex-row items-center gap-8 md:gap-0", i % 2 === 0 ? "md:flex-row-reverse" : "")}
              >
                <div className="absolute left-0 md:left-1/2 top-1 w-10 h-10 bg-white border-4 border-human-red rounded-full z-10 -translate-x-1/2 shadow-lg" />
                <div className="w-full md:w-1/2 px-12 text-center md:text-left">
                  <div className={cn("bg-white p-8 rounded-[32px] shadow-lg border border-warm-border hover:border-human-red transition-colors", i % 2 === 0 ? "md:text-right" : "md:text-left")}>
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

        {/* Slogan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center bg-human-red text-white p-16 rounded-[60px] shadow-2xl"
        >
          <p className="text-3xl md:text-5xl font-lora font-bold italic">
            "Du cœur à l'action."
          </p>
          <p className="mt-6 text-xl opacity-80">— Association Cœur Humanitaire</p>
        </motion.div>
      </div>
    </div>
  );
};
