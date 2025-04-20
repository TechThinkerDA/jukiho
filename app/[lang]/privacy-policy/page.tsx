import { redirect } from 'next/navigation';
import PrivacyPolicyPage from '../../privacy-policy/page';
import { isValidLanguage } from '../../../lib/i18n-config';

export default async function LocalizedPrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  if (!isValidLanguage(lang)) {
    redirect('/privacy-policy');
  }

  return <PrivacyPolicyPage />;
}
