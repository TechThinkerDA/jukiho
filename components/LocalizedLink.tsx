'use client';

import React from 'react';
import Link from 'next/link';
import { useCurrentLocale } from '../lib/useCurrentLocale';
import { createLocalizedPath } from '../lib/i18n-config';

interface LocalizedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const LocalizedLink: React.FC<LocalizedLinkProps> = ({
  href,
  children,
  className,
  onClick,
  ...rest
}) => {
  const currentLocale = useCurrentLocale();

  if (href.startsWith('/')) {
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
