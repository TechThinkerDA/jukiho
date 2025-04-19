import { Language } from '../types';

export const languages: Language[] = ['en', 'sk'];
export const defaultLanguage: Language = 'en';

export function isValidLanguage(lang: string): lang is Language {
  return languages.includes(lang as Language);
}

export function getLanguageFromPath(path: string): Language {
  const segments = path.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && isValidLanguage(firstSegment)) {
    return firstSegment;
  }
  return defaultLanguage;
}

export function createLocalizedPath(path: string, language: Language): string {
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;

  const segments = cleanPath.split('/').filter(Boolean);

  if (segments.length > 0 && isValidLanguage(segments[0])) {
    segments.shift();
  }

  if (language === defaultLanguage) {
    return `/${segments.join('/')}`;
  }
  return `/${language}${segments.length > 0 ? '/' + segments.join('/') : ''}`;
}
