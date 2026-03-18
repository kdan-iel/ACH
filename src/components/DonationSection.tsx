import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check,
  TrendingUp,
  ArrowLeft,
  Send,
  MessageCircle,
  User,
  Mail,
  Phone,
  ChevronRight,
  Building2,
  CreditCard,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

// ── Payment method definitions ──────────────────────────────────────────────
type PaymentMethod = 'flooz' | 'mixx' | 'bank' | 'visa';

interface Method {
  id: PaymentMethod;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  accentClass: string;
  bgClass: string;
  borderClass: string;
  description: string;
}

const METHODS: Method[] = [
  {
    id: 'flooz',
    label: 'Flooz',
    sublabel: 'Moov Money',
    icon: (
      <div className="h-12 w-12 flex items-center justify-center ">
        <img src="flooz.png" alt="Flooz" />
      </div>
    ),
    accentClass: 'text-charcoal',
    bgClass: 'bg-charcoal',
    borderClass: 'border-charcoal',
    description: 'Payez via votre compte Flooz Moov Money.',
  },
  {
    id: 'mixx',
    label: 'Mixx',
    sublabel: 'Yas by Togocel',
    icon: (
      <div className="h-17 w-17 flex items-center  ">
        <img src="mixx.png" alt="Mixx" />
      </div>
    ),
    accentClass: 'text-human-red',
    bgClass: 'bg-human-red',
    borderClass: 'border-human-red',
    description: 'Payez via votre compte Mixx by Yas.',
  },
  {
    id: 'bank',
    label: 'Virement',
    sublabel: 'Compte bancaire',
    icon: <Building2 size={28} className="text-tender-green" />,
    accentClass: 'text-tender-green',
    bgClass: 'bg-tender-green',
    borderClass: 'border-tender-green',
    description: 'Effectuez un virement depuis votre banque.',
  },
  {
    id: 'visa',
    label: 'Carte',
    sublabel: 'Visa / Mastercard',
    icon: <CreditCard size={28} className="text-soft-sun" />,
    accentClass: 'text-soft-sun',
    bgClass: 'bg-soft-sun',
    borderClass: 'border-soft-sun',
    description: 'Payez en toute sécurité par carte bancaire.',
  },
];

// ── Form state ───────────────────────────────────────────────────────────────
interface FormData {
  name: string;
  phone: string;
  email: string;
  amount: string;
  message: string;
}

const EMPTY_FORM: FormData = { name: '', phone: '', email: '', amount: '', message: '' };

// ── Main component ───────────────────────────────────────────────────────────
export const DonationSection: React.FC = () => {
  const { t } = useLanguage();

  const [selected, setSelected] = useState<Method | null>(null);
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSelect = (method: Method) => {
    setSelected(method);
    setForm(EMPTY_FORM);
    setSubmitted(false);
  };

  const handleBack = () => {
    setSelected(null);
    setSubmitted(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isValid = form.name.trim() && form.email.trim() && form.amount.trim();

  // ── Send via email ───────────────────────────────────────────────────────
  const handleEmail = () => {
    if (!isValid) return;
    setSending(true);
    const subject = encodeURIComponent(`Don via ${selected?.label} – ${form.name}`);
    const body = encodeURIComponent(
      `Nom : ${form.name}\nTéléphone : ${form.phone}\nEmail : ${form.email}\nMontant : ${form.amount} F CFA\nMoyen de paiement : ${selected?.label}\n\nMessage :\n${form.message}`
    );
    // Replace with the organisation's actual email address
    window.location.href = `mailto:contact@organisation.org?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 800);
  };

  // ── Send via WhatsApp ────────────────────────────────────────────────────
  const handleWhatsApp = () => {
    if (!isValid) return;
    setSending(true);
    const text = encodeURIComponent(
      `🙏 *Nouveau don*\n\n👤 Nom : ${form.name}\n📞 Tél : ${form.phone}\n📧 Email : ${form.email}\n💰 Montant : ${form.amount} F CFA\n💳 Moyen : ${selected?.label}\n\n💬 ${form.message}`
    );
    // Replace with the organisation's actual WhatsApp number (international format, no +)
    window.open(`https://wa.me/22890000000?text=${text}`, '_blank');
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="donate" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-lora font-bold text-charcoal mb-4">
            {t.donation.title}
          </h2>
          <p className="text-xl text-warm-gray leading-relaxed">
            {t.donation.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: Progress + info ── */}
          <div className="space-y-8">
            {/* Progress card */}
            <div className="bg-sand p-8 rounded-[32px]">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-sm font-bold text-warm-gray uppercase mb-1">{t.donation.goal}</p>
                  <p className="text-2xl font-bold text-charcoal">
                    3 400 000 F{' '}
                    <span className="text-warm-gray font-normal text-lg">/ 5 000 000 F</span>
                  </p>
                </div>
                <div className="text-tender-green font-bold text-xl flex items-center gap-1">
                  <TrendingUp size={20} /> 68%
                </div>
              </div>
              <div className="h-4 bg-white rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '68%' }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-tender-green to-tender-green-light"
                />
              </div>
            </div>

            {/* Steps guide */}
            <div className="bg-human-red-pale p-8 rounded-[32px] border border-human-red/10">
              <p className="text-sm font-bold text-human-red uppercase tracking-wider mb-6">
                Comment ça marche ?
              </p>
              {[
                'Choisissez votre moyen de paiement préféré.',
                'Remplissez le formulaire avec vos informations.',
                'Envoyez par email ou WhatsApp — nous vous confirmons sous 24h.',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 mb-4 last:mb-0">
                  <div className="w-7 h-7 rounded-full bg-human-red text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-warm-gray leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Payment cards OR Form ── */}
          <div className="bg-sand p-8 md:p-10 rounded-[40px] shadow-xl border border-warm-border sticky top-24 min-h-[500px]">
            <AnimatePresence mode="wait">

              {/* ── SUCCESS STATE ── */}
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-6"
                >
                  <div className="w-20 h-20 bg-tender-green rounded-full flex items-center justify-center text-white">
                    <Check size={40} />
                  </div>
                  <h3 className="text-3xl font-lora font-bold text-charcoal">
                    {t.donation.success?.title ?? 'Merci pour votre don !'}
                  </h3>
                  <p className="text-warm-gray text-lg max-w-xs">
                    {t.donation.success?.message ?? 'Nous avons bien reçu vos informations et vous recontacterons très bientôt.'}
                  </p>
                  <button
                    onClick={handleBack}
                    className="mt-4 text-human-red font-bold underline underline-offset-4"
                  >
                    Faire un autre don
                  </button>
                </motion.div>

              ) : selected ? (
                /* ── FORM STATE ── */
                <motion.div
                  key={`form-${selected.id}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  {/* Back + Title */}
                  <div className="flex items-center gap-3 mb-8">
                    <button
                      onClick={handleBack}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-all text-charcoal"
                    >
                      .
                      <ArrowLeft size={18} />
                    </button>
                    <div className="flex items-center gap-3">
                      {selected.icon}
                      <div>
                        <p className="font-bold text-charcoal text-lg leading-none">{selected.label}</p>
                        <p className="text-warm-gray text-sm">{selected.sublabel}</p>
                      </div>
                    </div>
                  </div>

                  {/* Fields */}
                  <div className="space-y-4">
                    {/* Name */}
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-gray" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Votre nom complet *"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-white pl-10 pr-4 py-4 rounded-2xl font-medium text-charcoal focus:outline-none focus:ring-2 focus:ring-human-red/20 border-2 border-transparent focus:border-human-red transition-all placeholder:text-warm-gray/60"
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-gray" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Votre numéro de téléphone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full bg-white pl-10 pr-4 py-4 rounded-2xl font-medium text-charcoal focus:outline-none focus:ring-2 focus:ring-human-red/20 border-2 border-transparent focus:border-human-red transition-all placeholder:text-warm-gray/60"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-gray" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Votre adresse email *"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full bg-white pl-10 pr-4 py-4 rounded-2xl font-medium text-charcoal focus:outline-none focus:ring-2 focus:ring-human-red/20 border-2 border-transparent focus:border-human-red transition-all placeholder:text-warm-gray/60"
                      />
                    </div>

                    {/* Amount */}
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-gray font-bold text-sm">F</span>
                      <input
                        type="number"
                        name="amount"
                        placeholder="Montant souhaité (F CFA) *"
                        value={form.amount}
                        onChange={handleChange}
                        className="w-full bg-white pl-8 pr-4 py-4 rounded-2xl font-medium text-charcoal focus:outline-none focus:ring-2 focus:ring-human-red/20 border-2 border-transparent focus:border-human-red transition-all placeholder:text-warm-gray/60"
                      />
                    </div>

                    {/* Message */}
                    <textarea
                      name="message"
                      placeholder="Un message (facultatif)"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full bg-white px-4 py-4 rounded-2xl font-medium text-charcoal focus:outline-none focus:ring-2 focus:ring-human-red/20 border-2 border-transparent focus:border-human-red transition-all resize-none placeholder:text-warm-gray/60"
                    />
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleEmail}
                      disabled={!isValid || sending}
                      className={cn(
                        'flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white transition-all shadow-lg',
                        isValid ? 'bg-human-red hover:bg-human-red-dark' : 'bg-human-red/40 cursor-not-allowed'
                      )}
                    >
                      <Send size={18} />
                      Email
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleWhatsApp}
                      disabled={!isValid || sending}
                      className={cn(
                        'flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white transition-all shadow-lg',
                        isValid ? 'bg-tender-green hover:opacity-90' : 'bg-tender-green/40 cursor-not-allowed'
                      )}
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </motion.button>
                  </div>

                  <p className="text-center text-warm-gray text-sm mt-4 opacity-70">
                    * Champs obligatoires
                  </p>
                </motion.div>

              ) : (
                /* ── PAYMENT METHOD SELECTION ── */
                <motion.div
                  key="methods"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <h3 className="text-2xl font-lora font-bold text-charcoal mb-2">
                    Choisissez votre moyen
                  </h3>
                  <p className="text-warm-gray mb-8">
                    Sélectionnez comment vous souhaitez faire votre don.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {METHODS.map((method, i) => (
                      <motion.button
                        key={method.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleSelect(method)}
                        className="group bg-white p-6 rounded-3xl border-2 border-warm-border hover:border-current hover:shadow-lg transition-all text-left relative overflow-hidden"
                        style={{ '--method-accent': method.accentClass } as React.CSSProperties}
                      >
                        {/* Hover accent bar */}
                        <div
                          className={cn(
                            'absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-300 rounded-b-3xl',
                            method.bgClass
                          )}
                        />

                        <div className="mb-4">{method.icon}</div>
                        <p className={cn('font-bold text-lg text-charcoal group-hover:' + method.accentClass)}>
                          {method.label}
                        </p>
                        <p className="text-warm-gray text-sm mt-1">{method.sublabel}</p>

                        <div className={cn('mt-4 flex items-center gap-1 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity', method.accentClass)}>
                          Continuer <ChevronRight size={14} />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
