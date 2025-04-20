'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { setCookie, getCookieConsent } from '../utils/cookieManager';

interface CookieSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookieSettings: React.FC<CookieSettingsProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation('common');
  const [settings, setSettings] = useState({
    essential: true, // Essential cookies are always enabled
    preferences: false,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    if (isOpen) {
      // Load current settings when dialog opens
      const currentConsent = getCookieConsent();
      if (currentConsent) {
        try {
          const consentSettings = JSON.parse(currentConsent);
          setSettings({
            essential: true, // Always true
            preferences: consentSettings.preferences || false,
            analytics: consentSettings.analytics || false,
            marketing: consentSettings.marketing || false
          });
        } catch (e) {
          // If parsing fails, use default settings
          console.error('Error parsing cookie consent', e);
        }
      }
    }
  }, [isOpen]);

  const handleChange = (category: string) => {
    setSettings(prev => ({
      ...prev,
      [category]: !prev[category as keyof typeof prev]
    }));
  };

  const saveSettings = () => {
    // Save settings to localStorage
    localStorage.setItem('cookieConsent', JSON.stringify(settings));
    
    // Apply cookie settings
    const language = document.documentElement.lang || 'en';
    
    // Language cookie handling
    if (settings.preferences) {
      // If preferences are enabled, set a persistent cookie
      setCookie('i18next', language, 30);
    } else {
      // Otherwise set a session cookie
      setCookie('i18next', language, 0);
    }
    
    // Close the dialog
    onClose();
    
    // Reload the page to apply changes
    window.location.reload();
  };

  const acceptAll = () => {
    const allSettings = {
      essential: true,
      preferences: true,
      analytics: true,
      marketing: true
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(allSettings));
    
    // Apply cookie settings
    const language = document.documentElement.lang || 'en';
    setCookie('i18next', language, 30);
    
    onClose();
    window.location.reload();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
        
        <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-lg w-full mx-auto shadow-xl p-6 z-10">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              {t('cookies.settingsTitle')}
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="mt-4">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {t('cookies.settingsDescription')}
            </p>
            
            <div className="space-y-4 mt-6">
              {/* Essential Cookies - Always enabled */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="essential"
                    type="checkbox"
                    checked={settings.essential}
                    disabled
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-600"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="essential" className="font-medium text-gray-800 dark:text-gray-300">
                    {t('cookies.categories.essential.title')}
                  </label>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                    {t('cookies.categories.essential.description')}
                  </p>
                </div>
              </div>
              
              {/* Preferences Cookies */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="preferences"
                    type="checkbox"
                    checked={settings.preferences}
                    onChange={() => handleChange('preferences')}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-600 cursor-pointer"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="preferences" className="font-medium text-gray-800 dark:text-gray-300 cursor-pointer">
                    {t('cookies.categories.preferences.title')}
                  </label>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                    {t('cookies.categories.preferences.description')}
                  </p>
                </div>
              </div>
              
              {/* Analytics Cookies */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="analytics"
                    type="checkbox"
                    checked={settings.analytics}
                    onChange={() => handleChange('analytics')}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-600 cursor-pointer"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="analytics" className="font-medium text-gray-800 dark:text-gray-300 cursor-pointer">
                    {t('cookies.categories.analytics.title')}
                  </label>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                    {t('cookies.categories.analytics.description')}
                  </p>
                </div>
              </div>
              
              {/* Marketing Cookies */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="marketing"
                    type="checkbox"
                    checked={settings.marketing}
                    onChange={() => handleChange('marketing')}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-600 cursor-pointer"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="marketing" className="font-medium text-gray-800 dark:text-gray-300 cursor-pointer">
                    {t('cookies.categories.marketing.title')}
                  </label>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                    {t('cookies.categories.marketing.description')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-8 justify-end">
              <button
                onClick={saveSettings}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {t('cookies.saveSettings')}
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                {t('cookies.acceptAll')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
