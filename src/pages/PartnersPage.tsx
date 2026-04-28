import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { PageHero } from '../components/PageHero';
import { Handshake, Globe, Building2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

// Partenaires fictifs à remplacer par les vrais partenaires de l'ACH
const partners = [
  { name: "Partenaire Institutionnel 1", type: "Institution", logo: null, description: "Soutien institutionnel et logistique pour nos projets d'accès à l'eau." },
  { name: "Partenaire ONG 2", type: "ONG", logo: null, description: "Collaboration sur les programmes d'autonomisation des femmes." },
  { name: "Entreprise Locale 3", type: "Entreprise", logo: null, description: "Sponsoring et mise à disposition de ressources matérielles." },
  { name: "Association Internationale 4", type: "Association", logo: null, description: "Partage d'expertise et soutien financier pour nos projets éducatifs." },
  { name: "Collectivité Locale 5", type: "Collectivité", logo: null, description: "Partenariat pour les projets de reboisement et environnement." },
  { name: "Donateur Individuel 6", type: "Particulier", logo: null, description: "Soutien financier régulier pour nos actions sur le terrain." },
];

const partnerTypes = [
  { icon: Building2, label: "Institutions", color: "bg-human-red", description: "Collectivités et organisations institutionnelles qui légitiment et soutiennent nos actions." },
  { icon: Globe, label: "ONG & Associations", color: "bg-tender-green", description: "Organisations humanitaires partenaires avec qui nous partageons valeurs et compétences." },
  { icon: Heart, label: "Donateurs", color: "bg-soft-sun", description: "Particuliers et entreprises qui contribuent financièrement à la réalisation de nos projets." },
];

export const PartnersPage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pb-24">
      <PageHero
        title={t.partners.hero.title}
        titleItalic={t.partners.hero.titleItalic}
        description={t.partners.hero.description}
        image="/don2.png"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Types de partenariats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 -mt-10 relative z-20">
          {partnerTypes.map((type, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[32px] shadow-xl border border-warm-border text-center hover:border-human-red transition-all group"
            >
              <div className={`w-16 h-16 ${type.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <type.icon size={32} />
              </div>
              <h3 className="text-xl font-lora font-bold text-charcoal mb-4">{type.label}</h3>
              <p className="text-warm-gray leading-relaxed">{type.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Grille partenaires */}
        <div className="mb-20">
          <h2 className="text-4xl font-lora font-bold text-charcoal mb-4 text-center">
            {language === 'fr' ? 'Nos partenaires actuels' : 'Our current partners'}
          </h2>
          <p className="text-warm-gray text-center mb-12 text-lg">
            {language === 'fr'
              ? 'Cette section sera mise à jour avec les logos et informations officiels de nos partenaires.'
              : 'This section will be updated with our partners\' official logos and information.'}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white p-8 rounded-[28px] shadow-lg border border-warm-border border-dashed hover:border-solid hover:border-human-red transition-all group"
              >
                {/* Placeholder logo */}
                <div className="w-20 h-20 bg-sand rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-human-red-pale transition-colors">
                  <Handshake className="text-warm-gray group-hover:text-human-red transition-colors" size={36} />
                </div>
                <h3 className="text-lg font-lora font-bold text-charcoal mb-2 text-center">{partner.name}</h3>
                <p className="text-xs font-black text-human-red uppercase tracking-widest mb-4 text-center">{partner.type}</p>
                <p className="text-warm-gray text-sm leading-relaxed text-center">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Devenir partenaire */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-charcoal text-white p-12 md:p-20 rounded-[60px] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-human-red/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-human-red rounded-full flex items-center justify-center mx-auto mb-8">
              <Handshake size={36} />
            </div>
            <h2 className="text-4xl md:text-5xl font-lora font-bold mb-6">{t.partners.cta.title}</h2>
            <p className="text-xl opacity-80 mb-10 leading-relaxed">{t.partners.cta.description}</p>
            <Link
              to="/contact"
              className="bg-human-red text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:bg-human-red-dark transition-all inline-flex items-center gap-3"
            >
              {t.partners.cta.button}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
