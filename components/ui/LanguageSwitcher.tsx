"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Language } from '../../types';
import { languages, defaultLanguage, createLocalizedPath } from '../../lib/i18n-config';

const languageNames: Record<Language, string> = {
  en: 'English',
  de: 'Deutsch',
  sk: 'Slovenčina'
};

const languageFlags: Record<Language, string> = {
  en: 'EN',
  de: 'DE',
  sk: 'SK'
};

export const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Získaj aktuálny jazyk z i18n
  const currentLanguage = i18n.language as Language || defaultLanguage;

  // Funkcia na zmenu jazyka pomocou URL cesty bez reloadu stránky
  const handleLanguageChange = (language: Language) => {
    // Ak je to rovnaký jazyk, nič nerob
    if (language === currentLanguage) {
      setIsOpen(false);
      return;
    }

    // Vytvor novú URL cestu s jazykom
    const newPath = createLocalizedPath(pathname, language);

    // Vytvor novú URL cestu s query parametrami
    const query = searchParams.toString();
    const newUrl = query ? `${newPath}?${query}` : newPath;

    // Zatvor dropdown
    setIsOpen(false);

    // Nastav cookie pre server-side rendering
    document.cookie = `i18next=${language}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;

    // Nastav jazyk v i18n - toto spustí preklad obsahu bez reloadu
    i18n.changeLanguage(language);

    // Aktualizuj URL bez reloadu stránky
    router.replace(newUrl, { scroll: false });
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1 p-1.5 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span suppressHydrationWarning>{languageFlags[currentLanguage]}</span>
        <span className="hidden" suppressHydrationWarning>{languageNames[currentLanguage]}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10 border border-gray-200 dark:border-gray-700">
          <div className="py-1">
            {languages.map((code) => (
              <button
                key={code}
                className={`flex items-center w-full px-4 py-2 text-left transition-colors duration-150 ${
                  currentLanguage === code
                    ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                }`}
                onClick={() => handleLanguageChange(code)}
              >
                <span className="mr-2" suppressHydrationWarning>{languageFlags[code]}</span>
                <span suppressHydrationWarning>{languageNames[code]}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
