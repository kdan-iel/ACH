import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ProjectMap } from '../components/ProjectMap';
import { Droplets, GraduationCap, Users, TreeDeciduous, Globe } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export const ProjectsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const _ = language;
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { key: 'all', name: t.language === 'fr' ? 'Tous' : 'All', icon: null },
    { key: 'Eau', name: t.projects.categories.water, icon: Droplets },
    { key: 'Éducation', name: t.projects.categories.education, icon: GraduationCap },
    { key: 'Femmes', name: t.projects.categories.women, icon: Users },
    { key: 'Environnement', name: t.projects.categories.environment, icon: TreeDeciduous },
    { key: 'Tourisme', name: t.projects.categories.tourism, icon: Globe },
  ];

  const categoryKeyMap: Record<string, string[]> = {
    'Eau': ['Eau', 'Water'],
    'Éducation': ['Éducation', 'Education'],
    'Femmes': ['Femmes', 'Women'],
    'Environnement': ['Environnement', 'Environment'],
    'Tourisme': ['Tourisme', 'Tourism'],
  };
  const filtered = activeFilter === 'all'
    ? t.projects.items
    : t.projects.items.filter(p => {
        const keys = categoryKeyMap[activeFilter] || [activeFilter];
        return keys.some(k => p.category === k);
      });

  return (
    <div className="pb-24">
      <PageHero
        title={t.projects.hero.title}
        description={t.projects.hero.description}
        image="/team1.png"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Categories filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 -mt-8 relative z-20">
          <div className="bg-white p-2 rounded-full shadow-xl border border-warm-border flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-full transition-all font-bold text-sm",
                  activeFilter === cat.key
                    ? "bg-human-red text-white shadow-md"
                    : "text-charcoal hover:bg-sand"
                )}
              >
                {cat.icon && <cat.icon size={16} />}
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-24 bg-white p-8 rounded-[40px] shadow-xl border border-warm-border">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-4xl font-lora font-bold text-charcoal mb-3">{t.projects.map.title}</h2>
              <p className="text-warm-gray text-lg">{t.projects.map.description}</p>
            </div>
          </div>
          <div className="rounded-[32px] overflow-hidden border-4 border-sand shadow-inner">
            <ProjectMap />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-warm-border group hover:shadow-2xl transition-all"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-xs font-black text-human-red uppercase tracking-widest shadow-lg">
                  {project.category}
                </div>
                {project.progress === 100 && (
                  <div className="absolute top-6 right-6 bg-tender-green text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                    ✓ Réalisé
                  </div>
                )}
              </div>
              <div className="p-8">
                <h3 className="text-xl font-lora font-bold text-charcoal mb-3 group-hover:text-human-red transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-warm-gray text-base mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-bold mb-1">
                    <span className="text-warm-gray">{project.progress}% {t.projects.grid.funded}</span>
                    <span className="text-tender-green">{project.raised} F / {project.target} F</span>
                  </div>
                  <div className="w-full h-3 bg-sand rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className={cn("h-full rounded-full", project.progress === 100 ? "bg-tender-green" : "bg-gradient-to-r from-human-red to-soft-sun")}
                    />
                  </div>
                </div>

                <Link 
                  to="/donate"
                  className="mt-6 w-full bg-human-red text-white py-3 rounded-xl font-bold hover:bg-human-red-dark transition-all flex items-center justify-center gap-2"
                >
                  {t.nav.donate}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
