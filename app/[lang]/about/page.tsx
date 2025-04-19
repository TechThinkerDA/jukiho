import { redirect } from 'next/navigation';
import AboutPage from '../../about/page';
import { isValidLanguage } from '../../../lib/i18n-config';

export default async function LocalizedAboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  if (!isValidLanguage(lang)) {
    redirect('/about');
  }

  return <AboutPage />;
}
