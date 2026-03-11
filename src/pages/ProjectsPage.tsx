import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ProjectMap } from '../components/ProjectMap';
import { Droplets, GraduationCap, Users, TreeDeciduous, Filter } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Link } from 'react-router-dom';

export const ProjectsPage: React.FC = () => {
  const { t } = useLanguage();

  const categories = [
    { name: t.projects.categories.water, icon: Droplets, color: 'bg-human-red' },
    { name: t.projects.categories.education, icon: GraduationCap, color: 'bg-tender-green' },
    { name: t.projects.categories.women, icon: Users, color: 'bg-soft-sun' },
    { name: t.projects.categories.environment, icon: TreeDeciduous, color: 'bg-tender-green-light' },
  ];

  return (
    <div className="pb-24">
      <PageHero
        title={t.projects.hero.title}
        description={t.projects.hero.description}
        image="/team1.png"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 -mt-8 relative z-20">
          <div className="bg-white p-2 rounded-full shadow-xl border border-warm-border flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="flex items-center gap-3 px-6 py-3 rounded-full hover:bg-sand transition-all font-bold text-charcoal"
              >
                <cat.icon size={20} className="text-human-red" />
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
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-warm-border group hover:shadow-2xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/project-${i}/600/400`}
                  alt="Project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-xs font-black text-human-red uppercase tracking-widest shadow-lg">
                  {[t.projects.categories.water, t.projects.categories.education, t.projects.categories.women, t.projects.categories.environment][i % 4]}
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-lora font-bold text-charcoal mb-4 group-hover:text-human-red transition-colors">
                  {t.projects.categories.water} Project #{i}
                </h3>
                <p className="text-warm-gray text-lg mb-8 line-clamp-2 leading-relaxed">
                  Amélioration de l'accès aux services de base pour plus de 200 familles dans la région de la Kara.
                </p>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span className="text-warm-gray">65% {t.projects.grid.funded}</span>
                    <span className="text-tender-green">1 200 000 F / 2 000 000 F</span>
                  </div>
                  <div className="w-full h-3 bg-sand rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '65%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-tender-green rounded-full" 
                    />
                  </div>
                </div>

                <Link 
                  to="/donate"
                  className="mt-8 w-full bg-human-red text-white py-3 rounded-xl font-bold hover:bg-human-red-dark transition-all flex items-center justify-center gap-2"
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

