"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ProtectedEmailProps {
  username: string;
  domain: string;
  className?: string;
}

export const ProtectedEmail: React.FC<ProtectedEmailProps> = ({
  username,
  domain,
  className = ""
}) => {
  const { t } = useTranslation('common');
  // State for copy icon
  const [copyIcon, setCopyIcon] = useState('⧉'); // clipboard icon

  // Email protection function
  const copyEmail = () => {
    const email = `${username}@${domain}`;

    navigator.clipboard.writeText(email).then(() => {
      setCopyIcon('✓'); // checkmark icon
      setTimeout(() => setCopyIcon('⧉'), 2000); // revert back after 2 seconds
    }, () => {
      setCopyIcon('⨉'); // error icon
      setTimeout(() => setCopyIcon('⧉'), 2000); // revert back after 2 seconds
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
        className={`${className} hover:text-[#4f46e5] dark:hover:text-[#14b8a6] transition-colors duration-200 min-w-[24px] text-center ml-2`}
      >
        {copyIcon}
      </button>
    </div>
  );
};
