import '../styles/globals.css';
import dynamic from 'next/dynamic';

import { headers } from 'next/headers';
import { Language } from '../types';
import { defaultLanguage, isValidLanguage } from '../lib/i18n-config';

// Metadata môže byť len v serverovom komponente
export const metadata = {
  title: {
    template: '%s | Juraj Kicko Horbaľ',
    default: 'JuKiHo - Web & Software Development'
  },
  description: 'Professional IT developer portfolio showcasing web and software development projects',
  keywords: 'web development, software development, frontend, backend, full-stack, developer'
};

// Dynamicky importujeme klientske komponenty bez ssr: false
const ClientLayout = dynamic(() => import('../components/ClientLayout'), { ssr: true });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Získaj jazyk z URL cesty pre server-side rendering
  const headersList = await headers();
  const url = headersList.get('x-url') || 'http://localhost';
  const pathname = '/' + (new URL(url).pathname.split('/').filter(Boolean)[0] || '');
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0] as Language;

  // Ak je prvý segment platný kód jazyka, použi ho, inak použi predvolený jazyk
  const language = (firstSegment && isValidLanguage(firstSegment)) ? firstSegment : defaultLanguage;

  return (
    <html lang={language}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

      </head>
      <body className="antialiased text-gray-700 bg-gray-50">
        <div className="flex flex-col min-h-screen">
          <ClientLayout>
            {children}
          </ClientLayout>
        </div>
      </body>
    </html>
  );
}
