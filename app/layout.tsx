import '../styles/globals.css';
import dynamic from 'next/dynamic';

import { headers } from 'next/headers';
import { Language } from '../types';
import { defaultLanguage, isValidLanguage } from '../lib/i18n-config';

// Metadata môže byť len v serverovom komponente
export async function generateMetadata() {
  // Get language from URL
  const headersList = await headers();
  const url = headersList.get('x-url') || 'http://localhost';
  const pathname = '/' + (new URL(url).pathname.split('/').filter(Boolean)[0] || '');
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0] as Language;
  const language = (firstSegment && isValidLanguage(firstSegment)) ? firstSegment : defaultLanguage;

  // Language-specific metadata
  const languageMetadata: Record<string, {
    title: string,
    description: string,
    keywords: string,
    ogImage: string
  }> = {
    'en': {
      title: 'JuKiHo - Web & Software Development',
      description: 'Professional IT developer portfolio showcasing web and software development projects',
      keywords: 'web development, software development, frontend, backend, full-stack, developer',
      ogImage: '/images/og-image-en.png'
    },
    'sk': {
      title: 'JuKiHo - Vývoj webových a softvérových riešení',
      description: 'Profesionálne portfólio IT vývojára prezentujúce projekty vývoja webových a softvérových riešení',
      keywords: 'vývoj webových stránok, vývoj softvéru, frontend, backend, full-stack, vývojár',
      ogImage: '/images/og-image-sk.png'
    },
    'de': {
      title: 'JuKiHo - Web & Software Entwicklung',
      description: 'Professionelles IT-Entwickler-Portfolio mit Web- und Softwareentwicklungsprojekten',
      keywords: 'Webentwicklung, Softwareentwicklung, Frontend, Backend, Full-Stack, Entwickler',
      ogImage: '/images/og-image-de.png'
    }
  };

  // Fallback image if language-specific one doesn't exist
  const ogImage = languageMetadata[language]?.ogImage || '/images/og-image.png';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jukiho.com';

  return {
    title: {
      template: '%s | Juraj Kicko Horbaľ',
      default: languageMetadata[language]?.title || 'JuKiHo'
    },
    description: languageMetadata[language]?.description || 'Professional IT developer portfolio',
    keywords: languageMetadata[language]?.keywords || 'web development, software development',
    metadataBase: new URL(siteUrl),
    openGraph: {
      type: 'website',
      locale: language,
      url: siteUrl,
      siteName: 'JuKiHo',
      title: languageMetadata[language]?.title || 'JuKiHo',
      description: languageMetadata[language]?.description || 'Professional IT developer portfolio',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'JuKiHo - Juraj Kicko Horbaľ'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: languageMetadata[language]?.title || 'JuKiHo',
      description: languageMetadata[language]?.description || 'Professional IT developer portfolio',
      images: [ogImage],
      creator: '@jukiho'
    },
    other: {
      'content-language': language
    }
  };
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

  // Set language for the page

  return (
    <html lang={language}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta httpEquiv="Content-Language" content={language} />
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
