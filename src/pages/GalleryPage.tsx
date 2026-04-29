import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { PageHero } from '../components/PageHero';
import { X, ZoomIn } from 'lucide-react';
import { cn } from '../lib/utils';

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  { src: "/don1.png", alt: "Actions terrain ACH", category: "Femmes" },
  { src: "/don2.png", alt: "Distribution de dons", category: "team" },
  { src: "/don3.jpeg", alt: "Forage eau potable", category: "Eau" },
  { src: "/don4.jpeg", alt: "Projet maraîchage", category: "Femmes" },
  { src: "/don5.jpeg", alt: "Actions environnement", category: "Environnement" },
  { src: "/don6.png", alt: "Distribution kits scolaires", category: "Éducation" },
  { src: "/don7.png", alt: "Terrain tourisme solidaire", category: "Tourisme" },
  { src: "/child1.png", alt: "Enfants bénéficiaires", category: "Éducation" },
  { src: "/team1.png", alt: "Équipe ACH sur le terrain", category: "team" },
  { src: "/team2.jpeg", alt: "Bénévoles ACH", category: "team" },
  { src: "/team3.png", alt: "L'équipe ACH", category: "team" },
  { src: "/team4.jpeg", alt: "Membres ACH", category: "team" },
  { src: "/men1.jpg", alt: "Action humanitaire", category: "Eau" },
  { src: "/madame.jpeg", alt: "Présidente ACH", category: "team" },
];

export const GalleryPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const catKeys = ['all', 'Eau', 'Éducation', 'Femmes', 'Environnement', 'team'];
  const catLabels: Record<string, string> = {
    all: t.gallery.categories.all,
    Eau: t.gallery.categories.water,
    Éducation: t.gallery.categories.education,
    Femmes: t.gallery.categories.women,
    Environnement: t.gallery.categories.environment,
    team: t.gallery.categories.team,
  };

  const filtered = activeFilter === 'all' ? galleryItems : galleryItems.filter(g => g.category === activeFilter);

  return (
    <div className="pb-24">
      <PageHero
        title={t.gallery.hero.title}
        titleItalic={t.gallery.hero.titleItalic}
        description={t.gallery.hero.description}
        image="/team1.png"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 -mt-8 relative z-20">
          <div className="bg-white p-2 rounded-full shadow-xl border border-warm-border flex flex-wrap gap-2 justify-center">
            {catKeys.map(key => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={cn(
                  "px-5 py-3 rounded-full transition-all font-bold text-sm",
                  activeFilter === key ? "bg-human-red text-white shadow-md" : "text-charcoal hover:bg-sand"
                )}
              >
                {catLabels[key]}
              </button>
            ))}
          </div>
        </div>

        {/* Grid masonry-style */}
        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.04 }}
                className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all"
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                </div>
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-white/90 backdrop-blur-sm text-human-red px-3 py-1 rounded-full text-xs font-black uppercase">
                    {catLabels[item.category] || item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button 
              title='type'
              type="button"
              className="absolute top-6 right-6 text-white bg-white/10 rounded-full p-3 hover:bg-white/20 transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-semibold">{lightbox.alt}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
