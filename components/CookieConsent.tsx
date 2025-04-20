'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LocalizedLink } from './LocalizedLink';
import { hasConsent, setCookie } from '../utils/cookieManager';
import { CookieSettings } from './CookieSettings';

export const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { t } = useTranslation('common');

  useEffect(() => {
    // Check if user has already given consent
    if (!hasConsent()) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const allSettings = {
      essential: true,
      preferences: true,
      analytics: true,
      marketing: true
    };

    localStorage.setItem('cookieConsent', JSON.stringify(allSettings));
    // Set i18next cookie for language preference (valid for 30 days)
    setCookie('i18next', document.documentElement.lang || 'en', 30);
    setShowBanner(false);
  };

  const acceptEssential = () => {
    const essentialSettings = {
      essential: true,
      preferences: false,
      analytics: false,
      marketing: false
    };

    localStorage.setItem('cookieConsent', JSON.stringify(essentialSettings));
    // For essential cookies, we still need to set the language preference
    // but we'll make it a session cookie that expires when the browser is closed
    setCookie('i18next', document.documentElement.lang || 'en', 0);
    setShowBanner(false);
  };

  const openSettings = () => {
    setShowSettings(true);
    setShowBanner(false);
  };

  if (!showBanner && !showSettings) {
    return null;
  }

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
                  {t('cookies.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  {t('cookies.message')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {t('cookies.learnMore')}{' '}
                  <LocalizedLink
                    href="/privacy-policy"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    {t('cookies.privacyPolicy')}
                  </LocalizedLink>
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={openSettings}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {t('cookies.settings')}
                </button>
                <button
                  onClick={acceptEssential}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {t('cookies.acceptEssential')}
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  {t('cookies.acceptAll')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <CookieSettings
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />
    </>
  );
};
