"use client";

import React from 'react';

interface TagProps {
  label: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  label,
  color = 'primary',
  size = 'md',
  className
}) => {
  const colorClasses = {
    primary: 'bg-[#e5e7eb] text-[#4f46e5] dark:bg-gray-700 dark:text-[#14b8a6] border border-[#e5e7eb] dark:border-gray-600',
    secondary: 'bg-gray-100 text-[#111827] dark:bg-gray-700 dark:text-[#f9fafb] border border-gray-200 dark:border-gray-600',
    success: 'bg-[#e5e7eb] text-[#4f46e5] dark:bg-gray-700 dark:text-[#14b8a6] border border-[#e5e7eb] dark:border-gray-600',
    warning: 'bg-yellow-100 text-[#111827] dark:bg-gray-700 dark:text-[#f9fafb] border border-yellow-200 dark:border-gray-600',
    danger: 'bg-red-100 text-[#111827] dark:bg-gray-700 dark:text-[#f9fafb] border border-red-200 dark:border-gray-600',
    info: 'bg-[#e5e7eb] text-[#4f46e5] dark:bg-gray-700 dark:text-[#14b8a6] border border-[#e5e7eb] dark:border-gray-600'
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-base px-3 py-1'
  };

  return (
    <span
      className={[
        'inline-block rounded-full font-medium',
        colorClasses[color],
        sizeClasses[size],
        className
      ].filter(Boolean).join(' ')}
    >
      {label}
    </span>
  );
};
