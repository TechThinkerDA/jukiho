import { redirect } from 'next/navigation';
import StackPage from '../../stack/page';
import { isValidLanguage } from '../../../lib/i18n-config';

export default async function LocalizedStackPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  if (!isValidLanguage(lang)) {
    redirect('/stack');
  }

  return <StackPage />;
}
