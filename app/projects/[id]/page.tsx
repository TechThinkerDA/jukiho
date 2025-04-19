'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { AnimatedSection } from '../../../components/ui/AnimatedSection';
import { Tag } from '../../../components/ui/Tag';
import { Project } from '../../../types';
import { getProjectByIdAction } from '../actions';

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params?.id as string;
  const { t } = useTranslation('projects');

  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    const fetchProject = async () => {
      setIsLoading(true);

      // Get project with current language
      console.log('Current language in project detail page:', currentLanguage);

      const fetchedProject = await getProjectByIdAction(projectId, currentLanguage);
      setProject(fetchedProject);
      setIsLoading(false);
    };

    fetchProject();
  }, [projectId, currentLanguage]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4f46e5] dark:border-[#14b8a6]"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">{t('errors.projectNotFound')}</h1>
        <p className="text-xl text-[#111827]/80 dark:text-[#f9fafb]/80 mb-8">
          {t('errors.projectNotFoundDesc')}
        </p>
        <Link href="/projects" className="btn bg-[#4f46e5] text-[#f9fafb] border-2 border-[#4f46e5] hover:bg-[#14b8a6] hover:border-[#14b8a6] hover:text-[#f9fafb] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
          <FiArrowLeft className="mr-2" />
          {t('detail.backToProjects')}
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Link href="/projects" className="inline-flex items-center text-[#4f46e5] dark:text-[#14b8a6] mb-8 no-underline hover:underline">
            <FiArrowLeft className="mr-2" />
            {t('detail.backToProjects')}
          </Link>

          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Image */}
      <section>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="relative w-full rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900 flex justify-center items-center">
              <div className="w-full h-auto aspect-auto py-8">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-[80vh] object-contain mx-auto scale-105 shadow-md"
                    width={1200}
                    height={800}
                    priority
                  />
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Details */}
      <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Description */}
            <AnimatedSection className="lg:w-2/3" delay={0.1}>
              <div className="bg-[#f9fafb] dark:bg-gray-800/30 rounded-lg p-8 shadow-sm border border-[#e5e7eb] dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">{t('detail.projectOverview')}</h2>
                <div className="prose prose-lg text-[#111827]/80 dark:text-[#f9fafb]/80">
                  <p>{project.description}</p>

                  {project.detailedDescription && (
                    <p className="mt-4">
                      {project.detailedDescription}
                    </p>
                  )}

                  {project.features && project.features.length > 0 ? (
                    <>
                      <h3 className="mt-6">{t('detail.features')}</h3>
                      <ul>
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      <h3 className="mt-6">{t('detail.features')}</h3>
                      <ul>
                        <li>{t('detail.feature1')}</li>
                        <li>{t('detail.feature2')}</li>
                        <li>{t('detail.feature3')}</li>
                        <li>{t('detail.feature4')}</li>
                      </ul>
                    </>
                  )}

                  {project.testimonial && (
                    <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 italic">
                      <p className="mb-4">&quot;{project.testimonial.text}&quot;</p>
                      <p className="font-semibold">
                        {project.testimonial.author}
                        {project.testimonial.position && (
                          <span className="font-normal text-gray-600 dark:text-gray-400"> - {project.testimonial.position}</span>
                        )}
                      </p>
                    </div>
                  )}

                  {project.screenshots && project.screenshots.length > 0 && (
                    <div className="mt-6">
                      <h3 className="mb-4">{t('detail.screenshots')}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.screenshots.map((screenshot, index) => (
                          <div key={index} className="relative h-48 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                            {screenshot && (
                              <Image
                                src={screenshot}
                                alt={`${project.title} screenshot ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <h3 className="mt-6">{t('detail.technologiesUsed')}</h3>
                  <p>
                    {t('detail.technologiesUsedIntro')} {project.tags.join(', ')}.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Links and Info */}
            <AnimatedSection className="lg:w-1/3" delay={0.2}>
              <div className="bg-[#f9fafb] dark:bg-gray-800/30 rounded-lg p-8 shadow-sm border border-[#e5e7eb] dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">{t('detail.projectLinks')}</h2>

                <div className="space-y-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full p-4 bg-[#4f46e5] dark:bg-gray-700/50 hover:bg-[#14b8a6] dark:hover:bg-[#14b8a6]/50 rounded-lg text-[#f9fafb] no-underline transition-colors"
                    >
                      <span className="font-medium">{t('detail.liveDemo')}</span>
                      <FiExternalLink size={20} />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full p-4 bg-[#4f46e5] dark:bg-gray-700/50 hover:bg-[#14b8a6] dark:hover:bg-[#14b8a6]/50 rounded-lg text-[#f9fafb] no-underline transition-colors"
                    >
                      <span className="font-medium">{t('detail.githubRepository')}</span>
                      <FiGithub size={20} />
                    </a>
                  )}

                  {project.demoCredentials && (
                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
                      <h4 className="font-medium text-[#111827]/80 dark:text-[#f9fafb]/80 mb-2">{t('detail.demoCredentials')}:</h4>
                      <p className="text-sm text-[#111827]/70 dark:text-[#f9fafb]/70">
                        Username: <span className="font-mono">{project.demoCredentials.username}</span>
                      </p>
                      <p className="text-sm text-[#111827]/70 dark:text-[#f9fafb]/70">
                        Password: <span className="font-mono">{project.demoCredentials.password}</span>
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-[#111827] dark:text-[#f9fafb]">{t('detail.projectDetails')}</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-[#111827]/60 dark:text-[#f9fafb]/60">{t('detail.category')}</h4>
                      <p className="text-[#111827] dark:text-[#f9fafb]">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-[#111827]/60 dark:text-[#f9fafb]/60">{t('detail.projectType')}</h4>
                      <p className="text-[#111827] dark:text-[#f9fafb]">{t(`detail.${project.projectType}`)}</p>
                    </div>

                    {project.date && (
                      <div>
                        <h4 className="font-medium text-[#111827]/60 dark:text-[#f9fafb]/60">{t('detail.date')}</h4>
                        <p className="text-[#111827] dark:text-[#f9fafb]">{project.date}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-12 bg-[#f9fafb] dark:bg-gray-800/20 rounded-lg shadow-sm border border-[#e5e7eb] dark:border-gray-700">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center text-[#111827] dark:text-[#f9fafb]">{t('detail.moreProjects')}</h2>
          </AnimatedSection>

          <div className="text-center">
            <Link href="/projects" className="btn bg-[#4f46e5] text-[#f9fafb] border-2 border-[#4f46e5] hover:bg-[#14b8a6] hover:border-[#14b8a6] hover:text-[#f9fafb] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              {t('viewAll')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
