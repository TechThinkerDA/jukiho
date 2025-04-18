import { redirect } from 'next/navigation';
import AboutPage from '../../about/page';
import { isValidLanguage } from '../../../lib/i18n-config';

// Lokalizovaná stránka About
export default async function LocalizedAboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  // Získaj parameter jazyka
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  // Kontrola, či je jazyk platný
  if (!isValidLanguage(lang)) {
    redirect('/about');
  }

  // Použitie rovnakej stránky, ale s jazykovým parametrom
  return <AboutPage />;
}
