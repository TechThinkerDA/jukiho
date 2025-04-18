import { redirect } from 'next/navigation';
import ContactPage from '../../contact/page';
import { isValidLanguage } from '../../../lib/i18n-config';

// Lokalizovaná stránka Contact
export default async function LocalizedContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  // Získaj parameter jazyka
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  // Kontrola, či je jazyk platný
  if (!isValidLanguage(lang)) {
    redirect('/contact');
  }

  // Použitie rovnakej stránky, ale s jazykovým parametrom
  return <ContactPage />;
}
