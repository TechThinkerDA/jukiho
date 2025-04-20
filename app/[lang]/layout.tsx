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

  const languageMetadata: Record<string, { title: string, description: string, keywords: string }> = {
    'en': {
      title: 'JuKiHo - Web & Software Development',
      description: 'Professional IT developer portfolio showcasing web and software development projects',
      keywords: 'web development, software development, frontend, backend, full-stack, developer'
    },
    'sk': {
      title: 'JuKiHo - Vývoj webových a softvérových riešení',
      description: 'Profesionálne portfólio IT vývojára prezentujúce projekty vývoja webových a softvérových riešení',
      keywords: 'vývoj webových stránok, vývoj softvéru, frontend, backend, full-stack, vývojár'
    },
    'de': {
      title: 'JuKiHo - Web & Software Entwicklung',
      description: 'Professionelles IT-Entwickler-Portfolio mit Web- und Softwareentwicklungsprojekten',
      keywords: 'Webentwicklung, Softwareentwicklung, Frontend, Backend, Full-Stack, Entwickler'
    }
  };

  return {
    title: {
      template: '%s | Juraj Kicko Horbaľ',
      default: languageMetadata[lang]?.title || 'JuKiHo'
    },
    description: languageMetadata[lang]?.description,
    keywords: languageMetadata[lang]?.keywords,
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
