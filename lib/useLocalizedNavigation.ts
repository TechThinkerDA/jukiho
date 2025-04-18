'use client';

import { useRouter } from 'next/navigation';
import { useCurrentLocale } from './useCurrentLocale';
import { createLocalizedPath } from './i18n-config';
import { Language } from '../types';

/**
 * Hook na prácu s lokalizovanými navigáciami
 * Poskytuje funkcie na vytváranie lokalizovaných URL a navigáciu
 */
export function useLocalizedNavigation() {
  const router = useRouter();
  const currentLocale = useCurrentLocale();
  
  /**
   * Vytvorí lokalizovanú URL cestu
   * @param path Cesta, na ktorú sa má vytvoriť lokalizovaná URL
   * @param locale Voliteľný jazyk, predvolene sa použije aktuálny jazyk
   * @returns Lokalizovaná URL cesta
   */
  const getLocalizedPath = (path: string, locale?: Language): string => {
    return createLocalizedPath(path, locale || currentLocale);
  };
  
  /**
   * Naviguje na lokalizovanú URL cestu bez reloadu stránky
   * @param path Cesta, na ktorú sa má navigovať
   * @param locale Voliteľný jazyk, predvolene sa použije aktuálny jazyk
   * @param options Voliteľné možnosti navigácie
   */
  const navigateTo = (
    path: string, 
    locale?: Language, 
    options: { scroll?: boolean; replace?: boolean } = {}
  ): void => {
    const localizedPath = getLocalizedPath(path, locale);
    
    if (options.replace) {
      router.replace(localizedPath, { scroll: options.scroll ?? false });
    } else {
      router.push(localizedPath, { scroll: options.scroll ?? true });
    }
  };
  
  return {
    currentLocale,
    getLocalizedPath,
    navigateTo
  };
}
