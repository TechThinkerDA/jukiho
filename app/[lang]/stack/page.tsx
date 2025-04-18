import { redirect } from 'next/navigation';
import StackPage from '../../stack/page';
import { isValidLanguage } from '../../../lib/i18n-config';

// Lokalizovaná stránka Stack
export default async function LocalizedStackPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  // Získaj parameter jazyka
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  // Kontrola, či je jazyk platný
  if (!isValidLanguage(lang)) {
    redirect('/stack');
  }

  // Použitie rovnakej stránky, ale s jazykovým parametrom
  return <StackPage />;
}
