import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';

export const NewsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pb-24">
      <PageHero
        title={t.news.hero.title}
        description={t.news.hero.description}
        image="/don1.png"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Featured article */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 -mt-10 relative z-20 bg-white rounded-[40px] overflow-hidden shadow-2xl border border-warm-border group flex flex-col md:flex-row"
        >
          <div className="relative md:w-1/2 h-72 md:h-auto overflow-hidden">
            <img
              src={t.news.items[5].image}
              alt={t.news.items[5].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-6 left-6 bg-human-red text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
              {t.news.items[5].category}
            </div>
          </div>
          <div className="p-10 md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-6 text-xs font-bold text-warm-gray mb-6 uppercase tracking-widest">
              <span className="flex items-center gap-2"><Calendar size={16} className="text-human-red" /> {t.news.items[5].date}</span>
              <span className="flex items-center gap-2"><Clock size={16} className="text-human-red" /> {t.news.items[5].time}</span>
            </div>
            <h2 className="text-3xl font-lora font-bold text-charcoal mb-6 group-hover:text-human-red transition-colors leading-tight">
              {t.news.items[5].title}
            </h2>
            <p className="text-warm-gray text-lg leading-relaxed mb-8">{t.news.items[5].excerpt}</p>
            <button className="flex items-center gap-3 text-human-red font-black uppercase text-sm tracking-widest w-fit group-hover:gap-5 transition-all">
              {t.news.readMore} <ArrowRight size={20} />
            </button>
          </div>
        </motion.article>

        {/* Grid articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.news.items.slice(0, 5).map((article, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-warm-border group flex flex-col hover:shadow-2xl transition-all"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-human-red text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  {article.category}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-xs font-bold text-warm-gray mb-4 uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Calendar size={14} className="text-human-red" /> {article.date}</span>
                  <span className="flex items-center gap-2"><Clock size={14} className="text-human-red" /> {article.time}</span>
                </div>
                <h3 className="text-xl font-lora font-bold text-charcoal mb-4 group-hover:text-human-red transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-warm-gray leading-relaxed mb-6 flex-grow text-sm">{article.excerpt}</p>
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
