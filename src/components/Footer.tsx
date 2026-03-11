import React from 'react';
import { Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-40 h-40 flex items-center justify-center">
                <img src="/logo.png" alt="ACH" />
              </div>
              <span className="font-lora font-bold text-2xl">
                Cœur <span className="text-human-red">Humanitaire</span>
              </span>
            </div>
            <p className="text-warm-gray leading-relaxed mb-8">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter, label: 'Twitter' }
              ].map(({ Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-human-red transition-colors duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-lora font-bold text-xl mb-8">Navigation</h4>
            <ul className="space-y-4 text-warm-gray">
              <li><Link to="/" className="hover:text-soft-sun transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/mission" className="hover:text-soft-sun transition-colors">{t.nav.mission}</Link></li>
              <li><Link to="/projects" className="hover:text-soft-sun transition-colors">{t.nav.projects}</Link></li>
              <li><Link to="/team" className="hover:text-soft-sun transition-colors">{t.nav.team}</Link></li>
              <li><Link to="/news" className="hover:text-soft-sun transition-colors">{t.nav.news}</Link></li>
              <li><Link to="/contact" className="hover:text-soft-sun transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-lora font-bold text-xl mb-8">Contact</h4>
            <ul className="space-y-4 text-warm-gray">
              <li className="flex items-start gap-3">
                <MapPin className="text-human-red shrink-0" size={20} />
                <span>2e Rue AOUISSI, Klikamé, Lomé-TOGO</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-human-red shrink-0" size={20} />
                <span>+228 98212929 - 93494606</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-human-red shrink-0" size={20} />
                <span>assocoeurhumanitaire@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-lora font-bold text-xl mb-6">{t.footer.newsletter.title}</h4>
            <p className="text-sm text-warm-gray mb-6">{t.footer.newsletter.description}</p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder={t.footer.newsletter.placeholder}
                className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-human-red transition-colors"
              />
              <button className="bg-human-red text-white py-3 rounded-xl font-bold hover:bg-human-red-dark transition-colors">
                {t.footer.newsletter.button}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:row justify-between items-center gap-6 text-warm-gray text-sm">
          <p>{t.footer.copyright}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
