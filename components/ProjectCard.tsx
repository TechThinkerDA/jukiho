"use client";

import React from 'react';
import Image from 'next/image';
import { LocalizedLink } from './LocalizedLink';
import { ProjectVisualizer } from './ProjectVisualizer';
import { AdvancedProjectVisualizer } from './AdvancedProjectVisualizer';
import { Tag } from './ui/Tag';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  colors?: string[];
  image?: string;
  visualizerType?: 'web' | 'mobile' | 'ai' | 'blockchain' | 'game' | 'cms';
}

export function ProjectCard({ id, title, description, tags, colors, image, visualizerType }: ProjectCardProps) {
  return (
    <LocalizedLink href={`/projects/${id}`} className="block no-underline">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="relative">
        {visualizerType ? (
          <AdvancedProjectVisualizer
            projectType={visualizerType}
            height={200}
          />
        ) : image ? (
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
        ) : (
          <ProjectVisualizer
            title={title}
            colors={colors}
            height={200}
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
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
