import React from 'react';
import { PageHero } from '../components/PageHero';
import { DonationSection } from '../components/DonationSection';
import { useLanguage } from '../context/LanguageContext';

export const DonatePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-sand">
      <PageHero
        title={t.donation.title}
        description={t.donation.description}
        image="don7.png"
      />
      
      <div className="pb-24">
        <DonationSection />
      </div>
    </div>
  );
};
