import { redirect } from 'next/navigation';
import HomePage from '../page';
import { isValidLanguage } from '../../lib/i18n-config';

// Hlavná stránka s jazykovým parametrom
export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  // Získaj parameter jazyka
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  // Kontrola, či je jazyk platný
  if (!isValidLanguage(lang)) {
    redirect('/');
  }

  // Použitie rovnakej hlavnej stránky, ale s jazykovým parametrom
  return <HomePage />;
}
