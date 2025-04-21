"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { ProtectedEmail } from './ui/ProtectedEmail';
import { LocalizedLink } from './LocalizedLink';
import { deleteCookie } from '../utils/cookieManager';
import { CookieSettings } from './CookieSettings';

export const Footer: React.FC = () => {
  const { t: tCommon } = useTranslation('common');
  const { t: tContact } = useTranslation('contact');
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  return (
    <>
      <footer className="mt-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-indigo-500 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-500 translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 pt-16 pb-8">
        <div className="container mx-auto px-4">

          {/* Main content grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* About column */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                🌱 {tCommon('footer.philosophyTitle1')}<br />
                {tCommon('footer.philosophyTitle2')}
              </h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.linkedin.com/in/juraj-kicko-horbal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/TechThinkerDA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="mailto:contact@jukiho.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-110"
                  aria-label="Email"
                >
                  <FiMail size={20} />
                </a>
              </div>
            </div>

            {/* Navigation column */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                {tCommon('navigation.title')}
              </h3>
              <div className="inline-flex flex-wrap justify-center gap-3">
                <LocalizedLink
                  href="/"
                  className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {tCommon('navigation.home')}
                </LocalizedLink>
                <LocalizedLink
                  href="/about"
                  className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {tCommon('navigation.about')}
                </LocalizedLink>
                <LocalizedLink
                  href="/projects"
                  className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {tCommon('navigation.projects')}
                </LocalizedLink>
                <LocalizedLink
                  href="/stack"
                  className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {tCommon('navigation.stack')}
                </LocalizedLink>
                <LocalizedLink
                  href="/contact"
                  className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {tCommon('navigation.contact')}
                </LocalizedLink>
              </div>
            </div>

            {/* Contact column */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                {tContact('title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {tCommon('footer.contactText')}
              </p>
              <div className="inline-block">
                <ProtectedEmail
                  username="contact"
                  domain="jukiho.com"
                  className="px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 inline-flex items-center shadow-md hover:shadow-lg"
                  iconClassName="ml-2"
                />
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="mb-4 flex flex-wrap gap-4 justify-center">
              <LocalizedLink
                href="/privacy-policy"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm"
              >
                {tCommon('footer.privacyPolicy')}
              </LocalizedLink>
              <button
                onClick={() => setShowCookieSettings(true)}
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm cursor-pointer"
              >
                {tCommon('cookies.settings')}
              </button>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {tCommon('footer.copyright').replace('2025', new Date().getFullYear().toString())}
            </p>
          </div>
        </div>
      </div>
    </footer>

    <CookieSettings
      isOpen={showCookieSettings}
      onClose={() => setShowCookieSettings(false)}
    />
    </>
  );
};
