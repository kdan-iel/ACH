import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DonationSection } from './components/DonationSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { motion } from 'motion/react';
import { MissionPage } from './pages/MissionPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { NewsPage } from './pages/NewsPage';
import { TeamPage } from './pages/TeamPage';
import { DonatePage } from './pages/DonatePage';
import { GalleryPage } from './pages/GalleryPage';
import { PartnersPage } from './pages/PartnersPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <Hero />
      
      {/* Impact Ribbon */}
      <section className="bg-gradient-to-r from-human-red to-tender-green py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-8 text-white">
          <div className="text-center">
            <p className="text-4xl font-bold mb-1">850+</p>
            <p className="text-sm font-bold uppercase tracking-widest opacity-80">{t.hero.stats.beneficiaries}</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold mb-1">30+</p>
            <p className="text-sm font-bold uppercase tracking-widest opacity-80">{t.hero.stats.volunteers}</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold mb-1">5M+</p>
            <p className="text-sm font-bold uppercase tracking-widest opacity-80">{language === 'fr' ? 'F CFA mobilisés' : 'CFA raised'}</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold mb-1">5+</p>
            <p className="text-sm font-bold uppercase tracking-widest opacity-80">{language === 'fr' ? 'Projets réalisés' : 'Projects completed'}</p>
          </div>
        </div>
      </section>

      {/* Mission Preview */}
      <section id="mission" className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[40px] overflow-hidden shadow-2xl"
            >
              <img
                src="don1.png"
                alt="Mission ACH"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-lora font-bold text-charcoal mb-8">
              {t.home.mission.title}<span className="text-human-red italic">{t.home.mission.titleItalic}</span>{t.home.mission.titleEnd}
            </h2>
            <p className="text-lg text-warm-gray mb-8 leading-relaxed">
              {t.home.mission.description}
            </p>
            <div className="space-y-4 mb-8">
              {t.home.mission.items.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-tender-green/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-tender-green" />
                  </div>
                  <span className="font-bold text-charcoal">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/mission"
              className="inline-flex items-center gap-2 bg-human-red text-white px-8 py-4 rounded-full font-bold hover:bg-human-red-dark transition-all"
            >
              {language === 'fr' ? 'En savoir plus →' : 'Learn more →'}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-lora font-bold text-charcoal mb-4">{t.home.whyUs.title}</h2>
            <p className="text-warm-gray text-xl">{t.home.whyUs.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.home.whyUs.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-sand p-8 rounded-[28px] border border-warm-border hover:border-human-red transition-all"
              >
                <div className="w-10 h-10 bg-human-red rounded-full mb-6" />
                <h3 className="text-xl font-lora font-bold text-charcoal mb-4">{item.title}</h3>
                <p className="text-warm-gray leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DonationSection />

      {/* Projects Preview */}
      <section id="projects" className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-lora font-bold text-charcoal mb-4">{t.home.projects.title}</h2>
              <p className="text-warm-gray text-lg">{t.home.projects.description}</p>
            </div>
            <Link to="/projects" className="hidden md:block text-human-red font-bold hover:underline">{t.home.projects.viewAll}</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.projects.items.slice(0, 3).map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[28px] overflow-hidden shadow-lg border border-warm-border group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-human-red uppercase">
                    {project.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-lora font-bold text-charcoal mb-4">{project.title}</h3>
                  <div className="w-full h-2 bg-sand rounded-full mb-4">
                    <div className="h-full bg-tender-green rounded-full" style={{ width: `${project.progress}%` }} />
                  </div>
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-warm-gray">{project.progress}% {t.projects.grid.funded}</span>
                    <span className="text-tender-green">{project.raised} F / {project.target} F</span>
                  </div>
                  <Link 
                    to="/donate"
                    className="mt-6 w-full bg-human-red/10 text-human-red py-3 rounded-xl font-bold hover:bg-human-red hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    {t.nav.donate}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10 md:hidden">
            <Link to="/projects" className="text-human-red font-bold hover:underline">{t.home.projects.viewAll}</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/mission" element={<MissionPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/donate" element={<DonatePage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </LanguageProvider>
  );
}
