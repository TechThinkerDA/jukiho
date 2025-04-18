'use client';

import React from 'react';
import Link from 'next/link';
import { useCurrentLocale } from '../lib/useCurrentLocale';
import { defaultLanguage, createLocalizedPath } from '../lib/i18n-config';

interface LocalizedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: any; // Pre ostatné props
}

/**
 * Komponent pre lokalizované odkazy
 * Automaticky pridáva aktuálny jazyk do URL
 */
export const LocalizedLink: React.FC<LocalizedLinkProps> = ({
  href,
  children,
  className,
  onClick,
  ...rest
}) => {
  const currentLocale = useCurrentLocale();

  // Ak href začína s /, je to interný odkaz a potrebujeme pridať jazyk
  if (href.startsWith('/')) {
    // Vytvor lokalizovanú cestu
    const localizedHref = createLocalizedPath(href, currentLocale);

    return (
      <Link
        href={localizedHref}
        className={className}
        onClick={onClick}
        suppressHydrationWarning
        {...rest}
      >
        {children}
      </Link>
    );
  }

  // Pre externé odkazy alebo špeciálne URL (napr. #, mailto:) použi normálny Link
  return (
    <Link
      href={href}
      className={className}
      onClick={onClick}
      suppressHydrationWarning
      {...rest}
    >
      {children}
    </Link>
  );
};
