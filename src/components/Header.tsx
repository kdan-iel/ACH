import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.mission, href: '/mission' },
    { name: t.nav.projects, href: '/projects' },
    { name: t.nav.team, href: '/team' },
    { name: t.nav.gallery, href: '/gallery' },
    { name: t.nav.news, href: '/news' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6',
        isScrolled ? 'h-[68px] bg-white/90 backdrop-blur-md shadow-[0_8px_32px_rgba(201,64,64,0.10)]' : 'h-20 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-14 h-14 rounded-full flex items-center justify-center animate-heartbeat">
            <img src="/logo.png" alt="ACH Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-lora font-bold text-lg text-charcoal hidden sm:block leading-tight">
            Cœur <span className="text-human-red">Humanitaire</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'px-3 py-2 rounded-full font-semibold text-sm transition-colors duration-200',
                location.pathname === link.href 
                  ? 'bg-human-red-pale text-human-red' 
                  : 'text-warm-gray hover:bg-human-red-pale hover:text-human-red'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden xl:flex items-center gap-4">
          {/* Language Toggle */}
          <div className="bg-warm-border/30 p-1 rounded-full flex items-center relative">
            <motion.div
              className="absolute bg-human-red-pale rounded-full h-8"
              initial={false}
              animate={{
                x: language === 'fr' ? 0 : 54,
                width: 54,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
            <button
              onClick={() => setLanguage('fr')}
              className={cn(
                'relative z-10 px-3 py-1 text-sm font-bold transition-colors duration-200',
                language === 'fr' ? 'text-human-red' : 'text-warm-gray'
              )}
            >
              🇫🇷 FR
            </button>
            <div className="w-[1px] h-4 bg-warm-border mx-1" />
            <button
              onClick={() => setLanguage('en')}
              className={cn(
                'relative z-10 px-3 py-1 text-sm font-bold transition-colors duration-200',
                language === 'en' ? 'text-human-red' : 'text-warm-gray'
              )}
            >
              🇬🇧 EN
            </button>
          </div>

          <Link 
            to="/donate"
            className="bg-human-red text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:bg-human-red-dark hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
          >
            {t.nav.donate}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden p-2 text-charcoal"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 xl:hidden flex flex-col p-8 pt-24 overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-xl font-lora font-bold transition-colors py-2 border-b border-warm-border",
                    location.pathname === link.href ? "text-human-red" : "text-charcoal hover:text-human-red"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/partners"
                className={cn(
                  "text-xl font-lora font-bold transition-colors py-2 border-b border-warm-border",
                  location.pathname === '/partners' ? "text-human-red" : "text-charcoal hover:text-human-red"
                )}
              >
                {t.nav.partners}
              </Link>
            </div>

            <div className="mt-auto flex flex-col gap-5 pt-8">
              <div className="flex items-center gap-4 bg-sand p-4 rounded-2xl">
                <Globe className="text-human-red" />
                <div className="flex gap-4">
                  <button
                    onClick={() => setLanguage('fr')}
                    className={cn('font-bold', language === 'fr' ? 'text-human-red' : 'text-warm-gray')}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={cn('font-bold', language === 'en' ? 'text-human-red' : 'text-warm-gray')}
                  >
                    English
                  </button>
                </div>
              </div>
              <Link 
                to="/donate"
                className="bg-human-red text-white w-full py-4 rounded-full font-bold text-xl shadow-xl text-center"
              >
                {t.nav.donate}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
