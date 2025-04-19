"use client";

import React, { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Language } from '../../types';
import { createLocalizedPath, defaultLanguage, languages } from '../../lib/i18n-config';

const languageNames: Record<Language, string> = {
  en: 'English',
  sk: 'Slovenčina'
};

const languageFlags: Record<Language, string> = {
  en: 'EN',
  sk: 'SK'
};

export const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentLanguage = i18n.language as Language || defaultLanguage;

  const handleLanguageChange = (language: Language) => {
    if (language === currentLanguage) {
      setIsOpen(false);
      return;
    }

    const newPath = createLocalizedPath(pathname, language);

    const query = searchParams.toString();
    const newUrl = query ? `${newPath}?${query}` : newPath;

    setIsOpen(false);

    document.cookie = `i18next=${language}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;

    i18n.changeLanguage(language);

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
