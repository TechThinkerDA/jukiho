"use client";

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from './Header';
import { Footer } from './Footer';
import { CookieConsent } from './CookieConsent';
import '../i18n';


interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const { i18n } = useTranslation();

  // Ensure HTML lang attribute is set correctly on initial render and language changes
  useEffect(() => {
    // Force language detection and update HTML lang attribute
    const detectAndSetLanguage = () => {
      // Get language from URL path if available
      const pathname = window.location.pathname;
      const segments = pathname.split('/').filter(Boolean);
      const firstSegment = segments[0];

      // Check if first segment is a valid language
      if (firstSegment && ['en', 'sk', 'de'].includes(firstSegment)) {
        // Set language from URL
        document.documentElement.setAttribute('lang', firstSegment);
        if (i18n.language !== firstSegment) {
          i18n.changeLanguage(firstSegment);
        }
      } else if (i18n.language) {
        // Use i18n detected language
        document.documentElement.setAttribute('lang', i18n.language);
      } else {
        // Fallback to default language
        document.documentElement.setAttribute('lang', 'en');
      }
    };

    detectAndSetLanguage();

    // Also update when i18n language changes
    const handleLanguageChanged = () => {
      if (i18n.language) {
        document.documentElement.setAttribute('lang', i18n.language);
      }
    };

    // Listen for language changes
    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 bg-gray-50">
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default ClientLayout;
