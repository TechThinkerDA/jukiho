import { redirect } from 'next/navigation';
import HomePage from '../page';
import { isValidLanguage } from '../../lib/i18n-config';

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  if (!isValidLanguage(lang)) {
    redirect('/');
  }

  return <HomePage />;
}
