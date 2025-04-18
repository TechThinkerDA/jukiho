'use client';

import React from 'react';
import { useLocalizedNavigation } from '../../lib/useLocalizedNavigation';
import { Language } from '../../types';

interface LocalizedButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  locale?: Language;
  replace?: boolean;
  scroll?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  [key: string]: any; // Pre ostatné props
}

/**
 * Komponent pre lokalizované tlačidlá
 * Automaticky pridáva aktuálny jazyk do URL
 */
export const LocalizedButton: React.FC<LocalizedButtonProps> = ({
  href,
  children,
  className,
  locale,
  replace = false,
  scroll = true,
  onClick,
  ...rest
}) => {
  const { navigateTo } = useLocalizedNavigation();
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    
    if (!e.defaultPrevented) {
      e.preventDefault();
      navigateTo(href, locale, { replace, scroll });
    }
  };
  
  return (
    <button
      className={className}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};
