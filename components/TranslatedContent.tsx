'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

interface TranslatedContentProps {
  translationKey: string;
  values?: Record<string, any>;
  ns?: string;
}

export const TranslatedText: React.FC<TranslatedContentProps> = ({ translationKey, values, ns }) => {
  const { t } = useTranslation(ns);
  return <>{t(translationKey, values)}</>;
};

interface TranslatedHtmlProps {
  translationKey: string;
  values?: Record<string, any>;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  ns?: string;
}

export const TranslatedHtml: React.FC<TranslatedHtmlProps> = ({
  translationKey,
  values,
  as: Component = 'div',
  className,
  ns
}) => {
  const { t } = useTranslation(ns);
  return (
    <Component
      className={className}
      dangerouslySetInnerHTML={{ __html: t(translationKey, values) }}
    />
  );
};
