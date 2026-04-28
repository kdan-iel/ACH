import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Linkedin, Mail, Sparkles } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Link } from 'react-router-dom';

const members = [
  { name: "AGORO ADEOTHY Adidjatou", role: "Présidente & Fondatrice", bio: "Passionnée par le développement rural et l'éducation, elle est l'initiatrice du slogan 'Du cœur à l'action'.", image: "/madame.jpeg" },
  { name: "Afiwa Agbo", role: "Directrice des Programmes", bio: "Experte en autonomisation des femmes et micro-finance, elle coordonne les projets sur le terrain.", image: "/team2.jpeg" },
  { name: "Kodjo Lartey", role: "Responsable Logistique", bio: "Garant du bon déroulement de nos actions sur le terrain, il assure la chaîne d'approvisionnement.", image: "/team4.jpeg" },
  { name: "Akouvi Lawson", role: "Chargée de Communication", bio: "Donne une voix à nos bénéficiaires et sensibilise nos donateurs à travers les réseaux sociaux.", image: "/team2.jpeg" },
];

export const TeamPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pb-24">
      <PageHero
        title={t.team.hero.title}
        description={t.team.hero.description}
        image="/team3.png"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-24 -mt-10 relative z-20">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-xl border border-warm-border text-center group hover:border-human-red transition-all"
            >
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="absolute inset-0 bg-human-red rounded-full scale-125 opacity-0 group-hover:opacity-10 transition-all duration-500" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-xl font-lora font-bold text-charcoal mb-2">{member.name}</h3>
              <p className="text-human-red font-black text-xs uppercase tracking-widest mb-6">{member.role}</p>
              <p className="text-warm-gray text-base leading-relaxed mb-8">{member.bio}</p>
              <div className="flex justify-center gap-4">
                <button title="LinkedIn" className="p-3 bg-sand rounded-2xl text-warm-gray hover:bg-human-red hover:text-white transition-all shadow-sm">
                  <Linkedin size={20} />
                </button>
                <button title="Email" className="p-3 bg-sand rounded-2xl text-warm-gray hover:bg-human-red hover:text-white transition-all shadow-sm">
                  <Mail size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bénévoles */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { value: "30+", label: "Membres bénévoles actifs", color: "bg-human-red" },
            { value: "100%", label: "Engagement terrain", color: "bg-tender-green" },
            { value: "3 ans", label: "D'actions continues", color: "bg-soft-sun" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[32px] shadow-lg border border-warm-border text-center"
            >
              <p className={`text-5xl font-black mb-3 ${i === 0 ? 'text-human-red' : i === 1 ? 'text-tender-green' : 'text-soft-sun'}`}>{stat.value}</p>
              <p className="text-warm-gray font-semibold uppercase tracking-widest text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Volunteer Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-charcoal text-white p-12 md:p-24 rounded-[60px] shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-human-red/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] group-hover:bg-human-red/30 transition-colors" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-tender-green/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px]" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-soft-sun font-bold text-sm mb-8 backdrop-blur-md">
                <Sparkles size={16} />
                {t.team.volunteer.cta}
              </div>
              <h2 className="text-4xl md:text-6xl font-lora font-bold mb-8 leading-tight">{t.team.volunteer.title}</h2>
              <p className="text-xl opacity-80 mb-12 leading-relaxed max-w-lg">{t.team.volunteer.description}</p>
              <Link 
                to="/contact"
                className="bg-human-red text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:bg-human-red-dark transition-all flex items-center gap-3 group/btn w-fit"
              >
                {t.team.volunteer.cta} 
                <Heart size={24} className="group-hover/btn:scale-125 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-white/5 p-10 rounded-[40px] backdrop-blur-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Heart size={48} />
              </div>
              <p className="text-2xl font-lora italic mb-6 leading-relaxed">
                "Une expérience qui change la vie et donne un sens à nos actions quotidiennes."
              </p>
              <p className="text-sm font-bold text-human-red uppercase tracking-widest">— Marie, bénévole depuis 2023</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
