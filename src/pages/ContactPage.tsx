import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { cn } from '../lib/utils';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();

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
          <div className="space-y-6">
            {[
              { icon: Phone, title: t.contact.info.phone, value: "+228 90 00 00 00", color: "bg-human-red" },
              { icon: Mail, title: t.contact.info.email, value: "contact@ach-togo.org", color: "bg-tender-green" },
              { icon: MapPin, title: t.contact.info.address, value: "Lomé, Togo · Quartier Agoè", color: "bg-soft-sun" },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[32px] shadow-xl border border-warm-border flex items-center gap-6 hover:border-human-red transition-colors"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg", item.color)}>
                  <item.icon size={28} />
                </div>
                <div>
                  <p className="text-xs font-black text-warm-gray uppercase tracking-widest mb-1">{item.title}</p>
                  <p className="text-lg font-bold text-charcoal">{item.value}</p>
                </div>
              </motion.div>
            ))}

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-tender-green text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <h3 className="text-3xl font-lora font-bold mb-4">WhatsApp Direct</h3>
              <p className="mb-8 text-lg opacity-90 leading-relaxed">{t.whatsapp.tooltip}</p>
              <button className="w-full bg-white text-tender-green py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-xl hover:bg-sand transition-all flex items-center justify-center gap-3">
                <MessageCircle size={24} /> {t.nav.contact}
              </button>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white p-10 md:p-16 rounded-[60px] shadow-2xl border border-warm-border"
          >
            <form className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-black text-charcoal ml-4 uppercase tracking-widest">{t.contact.form.name}</label>
                <input type="text" placeholder={t.contact.form.name} className="w-full bg-sand/50 py-5 px-8 rounded-3xl focus:outline-none focus:ring-4 focus:ring-human-red/10 border-2 border-transparent focus:border-human-red transition-all text-lg" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-charcoal ml-4 uppercase tracking-widest">{t.contact.form.email}</label>
                <input type="email" placeholder={t.contact.form.email} className="w-full bg-sand/50 py-5 px-8 rounded-3xl focus:outline-none focus:ring-4 focus:ring-human-red/10 border-2 border-transparent focus:border-human-red transition-all text-lg" />
              </div>
              <div className="space-y-3 md:col-span-2">
                <label className="text-sm font-black text-charcoal ml-4 uppercase tracking-widest">{t.contact.form.subject}</label>
                <select className="w-full bg-sand/50 py-5 px-8 rounded-3xl focus:outline-none focus:ring-4 focus:ring-human-red/10 border-2 border-transparent focus:border-human-red transition-all appearance-none text-lg" aria-label={t.contact.form.subject}>
                  <option>{t.nav.donate}</option>
                  <option>{t.team.volunteer.cta}</option>
                  <option>{t.nav.partners}</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="space-y-3 md:col-span-2">
                <label className="text-sm font-black text-charcoal ml-4 uppercase tracking-widest">{t.contact.form.message}</label>
                <textarea rows={6} placeholder={t.contact.form.message} className="w-full bg-sand/50 py-5 px-8 rounded-3xl focus:outline-none focus:ring-4 focus:ring-human-red/10 border-2 border-transparent focus:border-human-red transition-all resize-none text-lg"></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button className="w-full bg-human-red text-white py-6 rounded-full font-black uppercase tracking-widest text-lg shadow-2xl hover:bg-human-red-dark transition-all flex items-center justify-center gap-4 group">
                  {t.contact.form.send} <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

