'use client';

import React, { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { FiCheck, FiChevronRight, FiExternalLink } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

interface TechItemProps {
  name: string;
  description: string;
  level: number;
  delay?: number;
  features?: string[];
  link?: string;
  experience?: string;
  translationKey?: string;
}

export const TechItem: React.FC<TechItemProps> = ({
  name,
  description,
  level,
  delay = 0,
  features = [],
  link,
  experience,
  translationKey
}) => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation('stack');

  return (
    <AnimatedSection delay={delay}>
      <div
        className={`bg-[#f9fafb] dark:bg-gray-800/30 rounded-lg p-6 shadow-sm border border-[#e5e7eb] dark:border-gray-700
          transition-all duration-300 ${expanded ? 'scale-[1.02]' : ''}
          hover:shadow-md hover:border-[#4f46e5] dark:hover:border-[#14b8a6] cursor-pointer`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold mb-2 text-[#111827] dark:text-[#f9fafb]">
            {translationKey ? t(`technologies.${translationKey}.name`) : name}
          </h3>
          <div
            className={`transition-transform duration-300 ${expanded ? 'rotate-90' : ''}`}
          >
            <FiChevronRight className="text-[#4f46e5] dark:text-[#14b8a6]" />
          </div>
        </div>

        <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
          {translationKey ? t(`technologies.${translationKey}.description`) : description}
        </p>

        <div className="flex items-center mb-4">
          <span className="mr-2 text-sm text-[#111827]/60 dark:text-[#f9fafb]/60">{t('proficiency', 'Proficiency')}:</span>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <div
                key={star}
                className={`w-6 h-2 rounded-full ${
                  star <= level ? 'bg-[#4f46e5] dark:bg-[#14b8a6]' : 'bg-[#e5e7eb] dark:bg-gray-700'
                } transition-all duration-300 ${expanded && star <= level ? 'h-3' : ''}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Expanded content */}
        <div
          className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          {experience && (
            <div className="mb-4">
              <h4 className="font-semibold text-[#111827] dark:text-[#f9fafb] mb-2">{t('experience', 'Experience')}</h4>
              <p className="text-[#111827]/80 dark:text-[#f9fafb]/80">
                {translationKey ? t(`technologies.${translationKey}.experience`) : experience}
              </p>
            </div>
          )}

          {features.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-[#111827] dark:text-[#f9fafb] mb-2">{t('keyFeatures', 'Key Features')}</h4>
              <ul className="space-y-1">
                {translationKey && t(`technologies.${translationKey}.features`, { returnObjects: true }) instanceof Array
                  ? (t(`technologies.${translationKey}.features`, { returnObjects: true }) as string[]).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FiCheck className="text-[#4f46e5] dark:text-[#14b8a6] mt-1 mr-2 flex-shrink-0" />
                        <span className="text-[#111827]/80 dark:text-[#f9fafb]/80">{feature}</span>
                      </li>
                    ))
                  : features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FiCheck className="text-[#4f46e5] dark:text-[#14b8a6] mt-1 mr-2 flex-shrink-0" />
                        <span className="text-[#111827]/80 dark:text-[#f9fafb]/80">{feature}</span>
                      </li>
                    ))
                }
              </ul>
            </div>
          )}

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#4f46e5] dark:text-[#14b8a6] hover:underline mt-2"
              onClick={(e) => e.stopPropagation()}
            >
              {t('learnMore', 'Learn more')} <FiExternalLink className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};
