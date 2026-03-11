import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { PageHero } from '../components/PageHero';

export const NewsPage: React.FC = () => {
  const { t } = useLanguage();

  const articles = [
    { title: "Nouveau forage à Kpalimé : l'eau potable arrive enfin", date: "12 Mars 2025", category: "Eau", time: "5 min" },
    { title: "Distribution de kits scolaires pour la rentrée", date: "05 Mars 2025", category: "Éducation", time: "3 min" },
    { title: "Succès de la formation maraîchage pour 50 femmes", date: "28 Fév 2025", category: "Femmes", time: "4 min" },
    { title: "Campagne de reboisement : 1000 arbres plantés", date: "15 Fév 2025", category: "Environnement", time: "6 min" },
    { title: "L'ACH accueille 10 nouveaux bénévoles", date: "10 Fév 2025", category: "Équipe", time: "2 min" },
    { title: "Rapport d'impact 2024 : une année de solidarité", date: "01 Fév 2025", category: "Impact", time: "10 min" },
  ];

  return (
    <div className="pb-24">
      <PageHero
        title={t.news.hero.title}
        description={t.news.hero.description}
        image="/don1.png"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 -mt-10 relative z-20">
          {articles.map((article, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-warm-border group flex flex-col hover:shadow-2xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/news-${i}/600/400`}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-human-red text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  {article.category}
                </div>
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <div className="flex items-center gap-6 text-xs font-bold text-warm-gray mb-6 uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Calendar size={16} className="text-human-red" /> {article.date}</span>
                  <span className="flex items-center gap-2"><Clock size={16} className="text-human-red" /> {article.time}</span>
                </div>
                <h3 className="text-2xl font-lora font-bold text-charcoal mb-8 group-hover:text-human-red transition-colors leading-tight">
                  {article.title}
                </h3>
                <button className="mt-auto flex items-center gap-3 text-human-red font-black uppercase text-sm tracking-widest group-hover:gap-5 transition-all">
                  {t.news.readMore} <ArrowRight size={20} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

