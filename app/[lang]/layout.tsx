import { ReactNode } from 'react';
import { defaultLanguage, isValidLanguage, languages } from '../../lib/i18n-config';
import { redirect } from 'next/navigation';

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  if (!isValidLanguage(lang)) {
    redirect(`/${defaultLanguage}`);
  }

  return children;
}
