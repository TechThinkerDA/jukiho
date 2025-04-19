'use client';

import { usePathname } from 'next/navigation';
import { Language } from '../types';
import { defaultLanguage, isValidLanguage } from './i18n-config';

export function useCurrentLocale(): Language {
  const pathname = usePathname();

  const segments = pathname ? pathname.split('/').filter(Boolean) : [];

  const firstSegment = segments[0] as Language;

  if (firstSegment && isValidLanguage(firstSegment)) {
    return firstSegment;
  }

  return defaultLanguage;
}
