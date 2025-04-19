'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../../components/ui/AnimatedSection';
import { AnimatedCard } from '../../components/ui/Card';
import { Tag } from '../../components/ui/Tag';
import { Project } from '../../types';
import { getProjectsAction } from './actions';
import { filterTags, getTagDisplayName } from '../../data/filterTags';

// Helper function to determine project type based on tags
function getProjectType(tags: string[]): string {
  const tagMap: Record<string, string[]> = {
    'web': ['react', 'next.js', 'vue', 'angular', 'javascript', 'typescript', 'html', 'css', 'frontend', 'web'],
    'mobile': ['react native', 'flutter', 'swift', 'kotlin', 'ios', 'android', 'mobile'],
    'ai': ['ai', 'machine learning', 'ml', 'deep learning', 'nlp', 'computer vision', 'tensorflow', 'pytorch'],
    'blockchain': ['blockchain', 'web3', 'smart contract', 'ethereum', 'solidity', 'nft', 'crypto'],
    'game': ['game', 'unity', 'unreal', 'gamedev', '3d', 'webgl', 'three.js'],
    'design': ['design', 'ui', 'ux', 'figma', 'sketch', 'adobe', 'creative'],
    'backend': ['backend', 'api', 'node.js', 'express', 'django', 'flask', 'java', 'spring', 'database', 'sql', 'nosql'],
    'fullstack': ['fullstack', 'full stack', 'mern', 'mean', 'lamp']
  };

  // Convert tags to lowercase for case-insensitive matching
  const lowerTags = tags.map(tag => tag.toLowerCase());

  // Check each project type
  for (const [type, keywords] of Object.entries(tagMap)) {
    // If any of the keywords match any of the tags
    if (keywords.some(keyword => lowerTags.some(tag => tag.includes(keyword)))) {
      return type;
    }
  }

  // Default to 'default' if no match found
  return 'default';
}

export default function ProjectsPage() {
  const { t } = useTranslation('projects');
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [uniqueTags, setUniqueTags] = useState<{tag: string, count: number}[]>([]);

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);

      // Get projects with current language
      console.log('Current language in projects page:', currentLanguage);

      const fetchedProjects = await getProjectsAction(currentLanguage);
      setProjects(fetchedProjects);
      setFilteredProjects(fetchedProjects);

      // Extract unique tags and get the most common ones
      const allTags = fetchedProjects.flatMap(project => project.tags);
      const tagCounts = allTags.reduce((acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      // Create a list of all tags with counts
      let tagsList = Object.entries(tagCounts)
        .map(([tag, count]) => ({ tag, count }));

      // Filter to only include the predefined filter tags
      const priorityTags = tagsList
        .filter(item => filterTags.some(filterTag => filterTag.tag === item.tag))
        .sort((a, b) => {
          const priorityA = filterTags.find(ft => ft.tag === a.tag)?.priority || 0;
          const priorityB = filterTags.find(ft => ft.tag === b.tag)?.priority || 0;
          return priorityB - priorityA; // Sort by priority (highest first)
        });

      // Use only the priority tags
      const sortedTags = priorityTags;

      setUniqueTags(sortedTags);
      setIsLoading(false);
    };

    fetchProjects();
  }, [currentLanguage]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);

    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project =>
        project.tags.some(tag => tag === filter)
      ));
    }
  };

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">{t('title')}</h1>
            <p className="text-xl text-[#111827]/80 dark:text-[#f9fafb]/80 mb-8">
              {t('subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section>
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold text-center mb-4 text-[#111827] dark:text-[#f9fafb]">{t('filterByTechnology')}</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-5xl mx-auto">
            <button
              className={`px-4 py-1 text-sm rounded-full transition-colors ${
                activeFilter === 'all'
                  ? 'bg-[#4f46e5] text-[#f9fafb]'
                  : 'bg-[#e5e7eb] dark:bg-gray-700/30 text-[#111827] dark:text-[#f9fafb] hover:bg-[#4f46e5]/20 dark:hover:bg-[#14b8a6]/20 hover:text-[#4f46e5] dark:hover:text-[#14b8a6]'
              }`}
              onClick={() => handleFilterChange('all')}
            >
              {t('filters.all')} <span className="ml-1 text-xs opacity-70">({projects.length})</span>
            </button>
            {uniqueTags.map(({ tag, count }) => (
              <button
                key={tag}
                className={`px-4 py-1 text-sm rounded-full transition-colors ${
                  activeFilter === tag
                    ? 'bg-[#4f46e5] text-[#f9fafb]'
                    : 'bg-[#e5e7eb] dark:bg-gray-700/30 text-[#111827] dark:text-[#f9fafb] hover:bg-[#4f46e5]/20 dark:hover:bg-[#14b8a6]/20 hover:text-[#4f46e5] dark:hover:text-[#14b8a6]'
                }`}
                onClick={() => handleFilterChange(tag)}
              >
                {getTagDisplayName(tag)} <span className="ml-1 text-xs opacity-70">({count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section>
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4f46e5] dark:border-[#14b8a6]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <AnimatedCard
                    key={project.id}
                    title={project.title}
                    href={currentLanguage === 'sk' ? `/sk/projects/${project.id}` : `/projects/${project.id}`}
                    className="h-full"
                    hoverEffect={true}
                  >
                    <div className="relative w-full mb-4 rounded overflow-hidden bg-gray-50 dark:bg-gray-900 p-2">
                      <div className="w-full aspect-[16/9]">
                        {project.image && (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="w-full h-full object-contain scale-105 shadow-md hover:brightness-110 hover:contrast-110 hover:shadow-lg transition-all duration-300"
                          />
                        )}
                      </div>
                    </div>
                    <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Tag key={index} label={tag} size="sm" />
                      ))}
                    </div>
                  </AnimatedCard>
                </div>
              ))}
            </div>
          )}

          {!isLoading && filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-[#111827]/80 dark:text-[#f9fafb]/80">
                {t('noProjectsFound')}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
