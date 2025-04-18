import { ReactNode } from 'react';
import { languages, defaultLanguage, isValidLanguage } from '../../lib/i18n-config';
import { Language } from '../../types';
import { redirect } from 'next/navigation';

// Generovanie statických parametrov pre všetky podporované jazyky
export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

// Validácia parametrov
export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  // Získaj parameter jazyka
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  // Ak jazyk nie je platný, presmeruj na predvolený jazyk
  if (!isValidLanguage(lang)) {
    redirect(`/${defaultLanguage}`);
  }

  return children;
}
