import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { cn } from '../lib/utils';

export const ContactPage: React.FC = () => {
  const { t, language } = useLanguage();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t.whatsapp.message);
    window.open(`https://wa.me/22898212929?text=${message}`, '_blank');
  };

  const contactInfos = [
    {
      icon: Phone,
      title: t.contact.info.phone,
      value: "+228 98 21 29 29",
      href: "tel:+22898212929",
      color: "bg-human-red",
    },
    {
      icon: Phone,
      title: t.contact.info.phone,
      value: "+228 93 49 46 06",
      href: "tel:+22893494606",
      color: "bg-human-red",
    },
    {
      icon: Mail,
      title: t.contact.info.email,
      value: "assocoeurhumanitaire@gmail.com",
      href: "mailto:assocoeurhumanitaire@gmail.com",
      color: "bg-tender-green",
    },
    {
      icon: MapPin,
      title: t.contact.info.address,
      value: "2e Rue AOUISSI, Klikamé, Lomé-TOGO",
      href: "https://maps.google.com/?q=Klikamé,Lomé,Togo",
      color: "bg-soft-sun",
    },
  ];

  return (
    <div className="pb-24">
      <PageHero
        title={t.contact.hero.title}
        description={t.contact.hero.description}
        image="don6.png"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 -mt-10 relative z-20">
          {/* Info Cards */}
          <div className="space-y-5">
            {contactInfos.map((item, i) => (
              <motion.a 
                key={i}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-[28px] shadow-xl border border-warm-border flex items-center gap-5 hover:border-human-red transition-colors group block"
              >
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0", item.color)}>
                  <item.icon size={22} />
                </div>
                <div>
                  <p className="text-xs font-black text-warm-gray uppercase tracking-widest mb-1">{item.title}</p>
                  <p className="text-base font-bold text-charcoal group-hover:text-human-red transition-colors break-all">{item.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-tender-green text-white p-8 rounded-[32px] shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <h3 className="text-2xl font-lora font-bold mb-3">WhatsApp Direct</h3>
              <p className="mb-6 opacity-90 leading-relaxed">{t.whatsapp.tooltip}</p>
              <button
                onClick={handleWhatsApp}
                className="w-full bg-white text-tender-green py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-xl hover:bg-sand transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle size={22} /> WhatsApp
              </button>
            </motion.div>
          </div>

          {/* Form — UI only, backend à connecter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white p-10 md:p-14 rounded-[60px] shadow-2xl border border-warm-border"
          >
            <form className="grid md:grid-cols-2 gap-7" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-black text-charcoal ml-4 uppercase tracking-widest">{t.contact.form.name}</label>
                <input
                  type="text"
                  placeholder={t.contact.form.name}
                  required
                  className="w-full bg-sand/50 py-4 px-6 rounded-3xl focus:outline-none focus:ring-4 focus:ring-human-red/10 border-2 border-transparent focus:border-human-red transition-all text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-charcoal ml-4 uppercase tracking-widest">{t.contact.form.email}</label>
                <input
                  type="email"
                  placeholder={t.contact.form.email}
                  required
                  className="w-full bg-sand/50 py-4 px-6 rounded-3xl focus:outline-none focus:ring-4 focus:ring-human-red/10 border-2 border-transparent focus:border-human-red transition-all text-base"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black text-charcoal ml-4 uppercase tracking-widest">{t.contact.form.subject}</label>
                <select
                  className="w-full bg-sand/50 py-4 px-6 rounded-3xl focus:outline-none focus:ring-4 focus:ring-human-red/10 border-2 border-transparent focus:border-human-red transition-all appearance-none text-base"
                  aria-label={t.contact.form.subject}
                >
                  {t.contact.form.subjects.map((s, i) => (
                    <option key={i}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black text-charcoal ml-4 uppercase tracking-widest">{t.contact.form.message}</label>
                <textarea
                  rows={6}
                  placeholder={t.contact.form.message}
                  required
                  className="w-full bg-sand/50 py-4 px-6 rounded-3xl focus:outline-none focus:ring-4 focus:ring-human-red/10 border-2 border-transparent focus:border-human-red transition-all resize-none text-base"
                />
              </div>
              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full bg-human-red text-white py-5 rounded-full font-black uppercase tracking-widest text-base shadow-2xl hover:bg-human-red-dark transition-all flex items-center justify-center gap-4 group"
                >
                  {t.contact.form.send} <Send size={22} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p className="text-center text-warm-gray text-xs mt-4 opacity-70">
                  * {language === 'fr' ? 'Réponse sous 24-48h' : 'Response within 24-48h'}
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
