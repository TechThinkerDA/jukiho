"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ProtectedEmailProps {
  username: string;
  domain: string;
  className?: string;
  iconClassName?: string; // Added this prop
}

export const ProtectedEmail: React.FC<ProtectedEmailProps> = ({
  username,
  domain,
  className = "",
  iconClassName = ""
}) => {
  const { t } = useTranslation('common');
  const [copyIcon, setCopyIcon] = useState('⧉');

  // Email protection function
  const copyEmail = () => {
    const email = `${username}@${domain}`;

    navigator.clipboard.writeText(email).then(() => {
      setCopyIcon('✓');
      setTimeout(() => setCopyIcon('⧉'), 2000);
    }, () => {
      setCopyIcon('⨉');
      setTimeout(() => setCopyIcon('⧉'), 2000);
    });
  };

  return (
    <div className="flex items-center">
      <a
        href={`mailto:${username}@${domain}`}
        className={className}
      >
        {username}@{domain}
      </a>
      <button
        onClick={copyEmail}
        title={t('email.copyToClipboard')}
        className={`hover:text-gray-50 dark:hover:text-[#14b8a6] transition-colors duration-200 min-w-[24px] text-center ${iconClassName}`}
      >
        {copyIcon}
      </button>
    </div>
  );
};
