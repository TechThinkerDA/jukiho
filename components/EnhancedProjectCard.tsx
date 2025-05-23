"use client";

import React from 'react';
import Image from 'next/image';
import { LocalizedLink } from './LocalizedLink';
import { Tag } from './ui/Tag';
import { useTranslation } from 'react-i18next';

interface EnhancedProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  projectType: string;
  visualizerType?: 'web' | 'mobile' | 'ai' | 'blockchain' | 'game' | 'cms';
  image?: string;
  className?: string;
}

export function EnhancedProjectCard({
  id,
  title,
  description,
  tags,
  projectType,
  visualizerType,
  image,
  className = ''
}: EnhancedProjectCardProps) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <LocalizedLink href={currentLanguage === 'sk' ? `/sk/projects/${id}` : `/projects/${id}`} className="block no-underline">
      <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="relative">
        {image && (
          // Image for projects with image
          <div className="relative w-full overflow-hidden bg-gray-50 dark:bg-gray-900 p-2">
            <div className="w-full aspect-[16/10]">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-full object-contain scale-105 shadow-md hover:brightness-110 hover:contrast-110 hover:shadow-lg transition-all duration-300"
              />
            </div>
          </div>
        )}

      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tag key={index} label={tag} size="sm" />
          ))}
        </div>
      </div>
    </div>
    </LocalizedLink>
  );
}
