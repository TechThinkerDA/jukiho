import { Language } from '../types';

// Podporované jazyky
export const languages: Language[] = ['en', 'sk'];

// Predvolený jazyk
export const defaultLanguage: Language = 'en';

// Funkcia na kontrolu, či je jazyk podporovaný
export function isValidLanguage(lang: string): lang is Language {
  return languages.includes(lang as Language);
}

// // Funkcia na získanie jazyka z URL cesty
// export function getLanguageFromPath(path: string): Language {
//   // Rozdelenie cesty na segmenty
//   const segments = path.split('/').filter(Boolean);
//
//   // Prvý segment môže byť kód jazyka
//   const firstSegment = segments[0];
//
//   // Ak je prvý segment platný kód jazyka, vráť ho
//   if (firstSegment && isValidLanguage(firstSegment)) {
//     return firstSegment;
//   }
//
//   // Inak vráť predvolený jazyk
//   return defaultLanguage;
// }
//
// // Funkcia na vytvorenie URL cesty s jazykom
// export function createLocalizedPath(path: string, language: Language): string {
//   // Odstránenie lomítka na začiatku, ak existuje
//   const cleanPath = path.startsWith('/') ? path.substring(1) : path;
//
//   // Rozdelenie cesty na segmenty
//   const segments = cleanPath.split('/').filter(Boolean);
//
//   // Ak je prvý segment kód jazyka, odstráň ho
//   if (segments.length > 0 && isValidLanguage(segments[0])) {
//     segments.shift();
//   }
//
//   // Ak je to predvolený jazyk a chceme skryť predvolený jazyk v URL
//   if (language === defaultLanguage) {
//     return `/${segments.join('/')}`;
//   }
//
//   // Pre ostatné jazyky pridaj kód jazyka na začiatok
//   return `/${language}${segments.length > 0 ? '/' + segments.join('/') : ''}`;
// }
