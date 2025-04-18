'use client';

import { usePathname } from 'next/navigation';
import { Language } from '../types';
import { defaultLanguage, isValidLanguage } from './i18n-config';

/**
 * Hook na získanie aktuálneho jazyka z URL cesty
 * @returns Aktuálny jazyk
 */
export function useCurrentLocale(): Language {
  const pathname = usePathname();
  
  // Rozdelenie cesty na segmenty
  const segments = pathname.split('/').filter(Boolean);
  
  // Prvý segment môže byť kód jazyka
  const firstSegment = segments[0] as Language;
  
  // Ak je prvý segment platný kód jazyka, vráť ho
  if (firstSegment && isValidLanguage(firstSegment)) {
    return firstSegment;
  }
  
  // Inak vráť predvolený jazyk
  return defaultLanguage;
}
