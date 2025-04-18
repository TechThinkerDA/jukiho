"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX } from 'react-icons/fi';
import { LanguageSwitcher } from './ui/LanguageSwitcher';
import { NavItem } from '../types';
import { LocalizedLink } from './LocalizedLink';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation('common');

  // Define static navigation items to prevent hydration errors
  const navItems: NavItem[] = [
    { href: '/', label: t('navigation.home') },
    { href: '/about', label: t('navigation.about') },
    { href: '/projects', label: t('navigation.projects') },
    { href: '/stack', label: t('navigation.stack') },
    { href: '/contact', label: t('navigation.contact') }
  ];

  // Set mounted state after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="py-3 md:py-4 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <LocalizedLink href="/" className="flex items-center no-underline">
          <div className="relative w-8 h-8 md:w-10 md:h-10 mr-2">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-lg md:text-xl font-bold text-gray-800 dark:text-white" title="Juraj Kicko Horbaľ">Juraj Kicko Horbaľ</span>
        </LocalizedLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <LocalizedLink
                  href={item.href}
                  className="text-base md:text-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 no-underline font-medium px-2 py-1 whitespace-nowrap"
                >
                  {item.label}
                </LocalizedLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <LanguageSwitcher />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-300 p-2 border border-gray-200 dark:border-gray-600 rounded-md"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 z-50 shadow-lg border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <nav className="container mx-auto px-4 py-3">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <LocalizedLink
                    href={item.href}
                    className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 py-2 no-underline font-medium text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
