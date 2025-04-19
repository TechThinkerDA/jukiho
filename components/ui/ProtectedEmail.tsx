"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiCopy, FiCheck, FiX } from 'react-icons/fi';

interface ProtectedEmailProps {
  username: string;
  domain: string;
  className?: string;
  iconClassName?: string;
}

export const ProtectedEmail: React.FC<ProtectedEmailProps> = ({
  username,
  domain,
  className = "",
  iconClassName = ""
}) => {
  const { t } = useTranslation('common');
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Email protection function
  const copyEmail = () => {
    const email = `${username}@${domain}`;

    navigator.clipboard.writeText(email).then(() => {
      setCopyStatus('success');
      setTimeout(() => setCopyStatus('idle'), 2000);
    }, () => {
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 2000);
    });
  };

  const renderIcon = () => {
    switch (copyStatus) {
      case 'success':
        return <FiCheck className="text-green-500 dark:text-green-400" />;
      case 'error':
        return <FiX className="text-red-500 dark:text-red-400" />;
      default:
        return <FiCopy className="text-gray-500 dark:text-gray-400" />;
    }
  };

  return (
    <div className="flex items-center gap-2">
      <a
        href={`mailto:${username}@${domain}`}
        className={className}
      >
        {username}@{domain}
      </a>
      <button
        onClick={copyEmail}
        title={t('email.copyToClipboard')}
        className={`p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-[#14b8a6] transition-all duration-300 hover:scale-110 ${iconClassName}`}
        aria-label={t('email.copyToClipboard')}
      >
        {renderIcon()}
      </button>
    </div>
  );
};
