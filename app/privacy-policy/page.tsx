'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../../components/ui/AnimatedSection';

export default function PrivacyPolicyPage() {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation('privacy');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="flex flex-col gap-16 min-h-screen"><div className="animate-pulse h-screen w-full bg-gray-100 dark:bg-gray-800 rounded-lg"></div></div>;
  }

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">{t('title')}</h1>
            <p className="text-xl text-[#111827]/80 dark:text-[#f9fafb]/80 mb-8">
              {t('subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section>
        <div className="container mx-auto px-4">
          <AnimatedSection className="bg-white dark:bg-gray-800/30 rounded-lg p-8 shadow-md border border-[#e5e7eb] dark:border-gray-700">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>{t('dataCollection.title')}</h2>
              <p>{t('dataCollection.description')}</p>
              <ul>
                <li>{t('dataCollection.items.name')}</li>
                <li>{t('dataCollection.items.email')}</li>
                <li>{t('dataCollection.items.message')}</li>
              </ul>

              <h2>{t('dataUsage.title')}</h2>
              <p>{t('dataUsage.description')}</p>
              <ul>
                <li>{t('dataUsage.items.communication')}</li>
                <li>{t('dataUsage.items.improvement')}</li>
              </ul>

              <h2>{t('dataStorage.title')}</h2>
              <p>{t('dataStorage.description')}</p>

              <h2>{t('dataSharing.title')}</h2>
              <p>{t('dataSharing.description')}</p>

              <h2>{t('legalBasis.title')}</h2>
              <p>{t('legalBasis.description')}</p>
              <ul>
                <li>{t('legalBasis.items.consent')}</li>
                <li>{t('legalBasis.items.contract')}</li>
                <li>{t('legalBasis.items.legal')}</li>
                <li>{t('legalBasis.items.legitimate')}</li>
              </ul>

              <h2>{t('dataRetention.title')}</h2>
              <p>{t('dataRetention.description')}</p>

              <h2>{t('dataTransfer.title')}</h2>
              <p>{t('dataTransfer.description')}</p>

              <h2>{t('userRights.title')}</h2>
              <p>{t('userRights.description')}</p>
              <ul>
                <li>{t('userRights.items.access')}</li>
                <li>{t('userRights.items.correction')}</li>
                <li>{t('userRights.items.deletion')}</li>
                <li>{t('userRights.items.restriction')}</li>
                <li>{t('userRights.items.objection')}</li>
                <li>{t('userRights.items.portability')}</li>
              </ul>

              <h3>{t('userRights.exercising.title')}</h3>
              <p>{t('userRights.exercising.description')}</p>

              <h3>{t('userRights.complaint.title')}</h3>
              <p>{t('userRights.complaint.description')}</p>

              <h2>{t('cookies.title')}</h2>
              <p>{t('cookies.description')}</p>

              <h3>{t('cookies.types.title')}</h3>
              <h4>{t('cookies.types.essential.title')}</h4>
              <p>{t('cookies.types.essential.description')}</p>

              <h4>{t('cookies.types.preferences.title')}</h4>
              <p>{t('cookies.types.preferences.description')}</p>

              <h4>{t('cookies.types.analytics.title')}</h4>
              <p>{t('cookies.types.analytics.description')}</p>

              <h4>{t('cookies.types.marketing.title')}</h4>
              <p>{t('cookies.types.marketing.description')}</p>

              <h3>{t('cookies.management.title')}</h3>
              <p>{t('cookies.management.description')}</p>

              <h2>{t('childrenPrivacy.title')}</h2>
              <p>{t('childrenPrivacy.description')}</p>

              <h2>{t('thirdPartyLinks.title')}</h2>
              <p>{t('thirdPartyLinks.description')}</p>

              <h2>{t('contact.title')}</h2>
              <p>{t('contact.description')}</p>

              <h3>{t('contact.dpo.title')}</h3>
              <p>{t('contact.dpo.description')}</p>

              <h3>{t('contact.controller.title')}</h3>
              <p>{t('contact.controller.description')}</p>
              <p>{t('contact.controller.details')}</p>

              <h2>{t('updates.title')}</h2>
              <p>{t('updates.description')}</p>
              <p>{t('lastUpdated')} {t('updateDate')}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
