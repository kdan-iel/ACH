import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Droplets, GraduationCap, TreeDeciduous, Stethoscope, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export const DonationSection: React.FC = () => {
  const { t } = useLanguage();
  const [amount, setAmount] = useState<number>(5000);
  const [isMonthly, setIsMonthly] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const amounts = [1000, 2000, 5000, 10000, 25000];

  const getImpact = () => {
    if (amount >= 25000) return { icon: Stethoscope, text: t.donation.impacts.medical, color: 'text-human-red' };
    if (amount >= 10000) return { icon: GraduationCap, text: t.donation.impacts.school, color: 'text-tender-green' };
    if (amount >= 5000) return { icon: Droplets, text: t.donation.impacts.water, color: 'text-soft-sun' };
    return { icon: TreeDeciduous, text: t.donation.impacts.trees, color: 'text-tender-green-light' };
  };

  const handleDonate = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const impact = getImpact();

  return (
    <section id="donate" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-lora font-bold text-charcoal mb-6">
              {t.donation.title}
            </h2>
            <p className="text-xl text-warm-gray mb-12 leading-relaxed">
              {t.donation.description}
            </p>

            {/* Impact Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={amount}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-human-red-pale p-8 rounded-[32px] border border-human-red/10 mb-12"
              >
                <div className="flex items-center gap-6">
                  <div className={cn('w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm', impact.color)}>
                    <impact.icon size={32} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-human-red uppercase tracking-wider mb-1">{t.donation.impactLabel}</p>
                    <p className="text-2xl font-lora font-bold text-charcoal">{impact.text}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress Goal */}
            <div className="bg-sand p-8 rounded-[32px]">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-sm font-bold text-warm-gray uppercase mb-1">{t.donation.goal}</p>
                  <p className="text-2xl font-bold text-charcoal">3 400 000 F <span className="text-warm-gray font-normal text-lg">/ 5 000 000 F</span></p>
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
          </div>

          {/* Right: Form */}
          <div className="bg-sand p-8 md:p-12 rounded-[40px] shadow-xl border border-warm-border sticky top-24">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-tender-green rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    <Check size={40} />
                  </div>
                  <h3 className="text-3xl font-lora font-bold text-charcoal mb-4">{t.donation.success.title}</h3>
                  <p className="text-warm-gray text-lg">{t.donation.success.message}</p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Toggle */}
                  <div className="flex bg-white p-1.5 rounded-full mb-10 relative">
                    <motion.div
                      className="absolute bg-human-red rounded-full h-[calc(100%-12px)]"
                      animate={{ x: isMonthly ? '100%' : '0%' }}
                      style={{ width: 'calc(50% - 6px)' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                    <button
                      onClick={() => setIsMonthly(false)}
                      className={cn('flex-1 py-3 font-bold relative z-10 transition-colors', !isMonthly ? 'text-white' : 'text-warm-gray')}
                    >
                      {t.donation.oneTime}
                    </button>
                    <button
                      onClick={() => setIsMonthly(true)}
                      className={cn('flex-1 py-3 font-bold relative z-10 transition-colors', isMonthly ? 'text-white' : 'text-warm-gray')}
                    >
                      {t.donation.monthly}
                    </button>
                  </div>

                  {/* Amounts Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {amounts.map((amt) => (
                      <button
                        key={amt}
                        onClick={() => {
                          setAmount(amt);
                          setCustomAmount('');
                        }}
                        className={cn(
                          'py-4 rounded-2xl font-bold text-lg transition-all relative',
                          amount === amt && !customAmount
                            ? 'bg-human-red text-white shadow-lg'
                            : 'bg-white text-charcoal hover:bg-human-red-pale hover:text-human-red'
                        )}
                      >
                        {amt.toLocaleString()} F
                        {amt === 5000 && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-2 -right-2 bg-soft-sun text-charcoal text-[10px] px-2 py-1 rounded-full shadow-sm"
                          >
                            {t.donation.popular}
                          </motion.span>
                        )}
                      </button>
                    ))}
                    <div className="relative col-span-3">
                      <input
                        type="number"
                        placeholder={t.donation.customAmount}
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setAmount(Number(e.target.value) || 0);
                        }}
                        className="w-full bg-white py-4 px-6 rounded-2xl font-bold text-lg focus:outline-none focus:ring-2 focus:ring-human-red/20 border-2 border-transparent focus:border-human-red transition-all"
                      />
                      <span className="absolute right-6 top-1/2 -translate-y-1/2 font-bold text-warm-gray">F CFA</span>
                    </div>
                  </div>

                  <button 
                    onClick={handleDonate}
                    className="w-full bg-human-red text-white py-5 rounded-full font-bold text-xl shadow-xl hover:bg-human-red-dark transition-all flex items-center justify-center gap-3 mt-8"
                  >
                    {t.donation.donateBtn} <Check size={24} />
                  </button>

                  <div className="mt-8 flex flex-wrap justify-center gap-6 opacity-60">
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Visa_Inc._logo_%282021%E2%80%93present%29.svg" alt="Visa" className="h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-tighter">Visa</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                      <span className="text-[10px] font-bold uppercase tracking-tighter">Mastercard</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="h-6 flex items-center px-2 bg-charcoal text-white rounded text-[10px] font-black italic">FLOOZ</div>
                      <span className="text-[10px] font-bold uppercase tracking-tighter">Moov</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="h-6 flex items-center px-2 bg-human-red text-white rounded text-[10px] font-black italic">MIXX</div>
                      <span className="text-[10px] font-bold uppercase tracking-tighter">Yas</span>
                    </div>
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
