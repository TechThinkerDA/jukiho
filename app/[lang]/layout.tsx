import { ReactNode } from 'react';
import { defaultLanguage, isValidLanguage, languages } from '../../lib/i18n-config';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

// Generate metadata based on language
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  if (!isValidLanguage(lang)) {
    return {};
  }

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
  const ogImage = languageMetadata[lang]?.ogImage || '/images/og-image.png';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jukiho.com';

  return {
    title: {
      template: '%s | Juraj Kicko Horbaľ',
      default: languageMetadata[lang]?.title || 'JuKiHo'
    },
    description: languageMetadata[lang]?.description,
    keywords: languageMetadata[lang]?.keywords,
    metadataBase: new URL(siteUrl),
    openGraph: {
      type: 'website',
      locale: lang,
      url: `${siteUrl}/${lang}`,
      siteName: 'JuKiHo',
      title: languageMetadata[lang]?.title || 'JuKiHo',
      description: languageMetadata[lang]?.description,
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
      title: languageMetadata[lang]?.title || 'JuKiHo',
      description: languageMetadata[lang]?.description,
      images: [ogImage],
      creator: '@jukiho'
    },
    other: {
      'content-language': lang
    }
  };
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

  // Set HTML lang attribute in the response headers
  const headers = new Headers();
  headers.set('Content-Language', lang);

  return children;
}
