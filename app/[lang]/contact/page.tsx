import { redirect } from 'next/navigation';
import ContactPage from '../../contact/page';
import { isValidLanguage } from '../../../lib/i18n-config';

export default async function LocalizedContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  if (!isValidLanguage(lang)) {
    redirect('/contact');
  }

  return <ContactPage />;
}
