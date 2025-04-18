'use client';

import React from 'react';
import { useLocalizedNavigation } from '../../lib/useLocalizedNavigation';
import { Language } from '../../types';

interface LocalizedCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  locale?: Language;
  replace?: boolean;
  scroll?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  [key: string]: any; // Pre ostatné props
}

/**
 * Komponent pre lokalizované CTA tlačidlá
 * Automaticky pridáva aktuálny jazyk do URL a štýly pre CTA
 */
export const LocalizedCTA: React.FC<LocalizedCTAProps> = ({
  href,
  children,
  className = '',
  locale,
  replace = false,
  scroll = true,
  variant = 'primary',
  size = 'md',
  onClick,
  ...rest
}) => {
  const { navigateTo } = useLocalizedNavigation();
  
  // Základné štýly pre všetky varianty
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary';
  
  // Štýly pre jednotlivé varianty
  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-dark text-white focus:ring-primary',
    secondary: 'bg-secondary hover:bg-secondary-dark text-white focus:ring-secondary',
    outline: 'border border-primary text-primary hover:bg-primary/10 focus:ring-primary',
    text: 'text-primary hover:bg-primary/10 focus:ring-primary'
  };
  
  // Štýly pre jednotlivé veľkosti
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };
  
  // Kombinácia všetkých štýlov
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
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
      className={buttonStyles}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};
