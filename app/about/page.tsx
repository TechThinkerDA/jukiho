"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Tag } from '../../components/ui/Tag';

export default function AboutPage() {
  const { t } = useTranslation('about');

  const getTranslatedArray = (key: string) => t(key, { returnObjects: true }) as string[];

  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (skill: string) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex flex-col gap-16">
      {/* Bio Section */}
      <section className="py-12 bg-[#f9fafb] dark:bg-gray-800 rounded-lg shadow-sm border border-[#e5e7eb] dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-full aspect-square max-w-md mx-auto rounded-lg overflow-hidden shadow-md border border-[#e5e7eb] dark:border-gray-700">
                  <Image
                    src="/images/jkh.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <a
                  href="/files/juraj_kicko_horbal.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#4f46e5] hover:bg-[#4338ca] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4f46e5]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t('downloadCV')}
                </a>
              </div>
            </div>

            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">{t('whoIAm')}</h2>
              <div className="space-y-4 text-[#111827]/80 dark:text-[#f9fafb]/80">
                <p>
                  {t('bioLine1')}
                </p>
                <p>
                  {t('bioLine2')}
                </p>
                <p>
                  <strong className="text-[#111827] dark:text-[#f9fafb]">{t('softSkillsLabel')}:</strong> {t('softSkills')}
                </p>
                <p>
                  <strong className="text-[#111827] dark:text-[#f9fafb]">{t('interestsLabel')}:</strong> {t('interests')}
                </p>
                <p>
                  <strong className="text-[#111827] dark:text-[#f9fafb]">{t('techStackLabel')}:</strong> {t('techStack')}
                </p>
                <p>
                  <strong className="text-[#111827] dark:text-[#f9fafb]">{t('experienceWithLabel')}:</strong> {t('experienceWith')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 bg-[#f9fafb] dark:bg-gray-800 rounded-lg shadow-sm border border-[#e5e7eb] dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-3xl font-bold mb-12 text-center text-[#111827] dark:text-[#f9fafb]">{t('workExperience')}</h2>
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-lg font-semibold text-[#4f46e5] dark:text-[#14b8a6]">{t('workExperienceItems.odoo.period')}</div>
                  <div className="text-xl font-bold text-[#111827] dark:text-[#f9fafb]">{t('workExperienceItems.odoo.title')}</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
                    {t('workExperienceItems.odoo.description')}
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
                    {getTranslatedArray('workExperienceItems.odoo.responsibilities').map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {getTranslatedArray('workExperienceItems.odoo.technologies').map((tech, index) => (
                      <Tag key={index} color="primary" label={tech} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-lg font-semibold text-[#4f46e5] dark:text-[#14b8a6]">{t('workExperienceItems.java.period')}</div>
                  <div className="text-xl font-bold text-[#111827] dark:text-[#f9fafb]">{t('workExperienceItems.java.title')}</div>
                  <div className="text-[#111827]/70 dark:text-[#f9fafb]/70">{t('workExperienceItems.java.teamRole')}</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
                    {t('workExperienceItems.java.description')}
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
                    {getTranslatedArray('workExperienceItems.java.responsibilities').map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {getTranslatedArray('workExperienceItems.java.technologies').map((tech, index) => (
                      <Tag key={index} color="primary" label={tech} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-lg font-semibold text-[#4f46e5] dark:text-[#14b8a6]">{t('workExperienceItems.aspnet.period')}</div>
                  <div className="text-xl font-bold text-[#111827] dark:text-[#f9fafb]">{t('workExperienceItems.aspnet.title')}</div>
                  <div className="text-[#111827]/70 dark:text-[#f9fafb]/70">{t('workExperienceItems.aspnet.teamRole')}</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
                    {t('workExperienceItems.aspnet.description')}
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
                    {getTranslatedArray('workExperienceItems.aspnet.responsibilities').map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {getTranslatedArray('workExperienceItems.aspnet.technologies').map((tech, index) => (
                      <Tag key={index} color="primary" label={tech} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-lg font-semibold text-[#4f46e5] dark:text-[#14b8a6]">{t('workExperienceItems.wpf.period')}</div>
                  <div className="text-xl font-bold text-[#111827] dark:text-[#f9fafb]">{t('workExperienceItems.wpf.title')}</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
                    {t('workExperienceItems.wpf.description')}
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
                    {getTranslatedArray('workExperienceItems.wpf.responsibilities').map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {getTranslatedArray('workExperienceItems.wpf.technologies').map((tech, index) => (
                      <Tag key={index} color="primary" label={tech} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-lg font-semibold text-[#4f46e5] dark:text-[#14b8a6]">{t('workExperienceItems.javafx.period')}</div>
                  <div className="text-xl font-bold text-[#111827] dark:text-[#f9fafb]">{t('workExperienceItems.javafx.title')}</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
                    {t('workExperienceItems.javafx.description')}
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
                    {getTranslatedArray('workExperienceItems.javafx.responsibilities').map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {getTranslatedArray('workExperienceItems.javafx.technologies').map((tech, index) => (
                      <Tag key={index} color="primary" label={tech} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 bg-[#f9fafb] dark:bg-gray-800 rounded-lg shadow-sm border border-[#e5e7eb] dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-3xl font-bold mb-12 text-center text-[#111827] dark:text-[#f9fafb]">{t('educationTitle')}</h2>
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-lg font-semibold text-[#4f46e5] dark:text-[#14b8a6]">{t('educationItems.engineer.period')}</div>
                  <div className="text-xl font-bold text-[#111827] dark:text-[#f9fafb]">{t('educationItems.engineer.title')}</div>
                  <div className="text-[#111827]/70 dark:text-[#f9fafb]/70">{t('educationItems.engineer.institution')}</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-[#111827]/80 dark:text-[#f9fafb]/80">
                    {t('educationItems.engineer.description')}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-lg font-semibold text-[#4f46e5] dark:text-[#14b8a6]">{t('educationItems.bachelor.period')}</div>
                  <div className="text-xl font-bold text-[#111827] dark:text-[#f9fafb]">{t('educationItems.bachelor.title')}</div>
                  <div className="text-[#111827]/70 dark:text-[#f9fafb]/70">{t('educationItems.bachelor.institution')}</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-[#111827]/80 dark:text-[#f9fafb]/80">
                    {t('educationItems.bachelor.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section className="py-12 bg-[#f9fafb] dark:bg-gray-800 rounded-lg shadow-sm border border-[#e5e7eb] dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-3xl font-bold mb-12 text-center text-[#111827] dark:text-[#f9fafb]">{t('personalProjects')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f9fafb] dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm border border-[#e5e7eb] dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-[#4f46e5] dark:hover:border-[#14b8a6]">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#111827] dark:text-[#f9fafb]">{t('personalProjectsItems.odoo.title')}</h3>
                <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">{t('personalProjectsItems.odoo.description')}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {Array.isArray(t('personalProjectsItems.odoo.technologies', { returnObjects: true }))
                    ? t('personalProjectsItems.odoo.technologies', { returnObjects: true }).map((tech: string, index: number) => (
                        <Tag key={index} color="info" label={tech} />
                      ))
                    : null}
                </div>
              </div>
            </div>

            <div className="bg-[#f9fafb] dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm border border-[#e5e7eb] dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-[#4f46e5] dark:hover:border-[#14b8a6]">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#111827] dark:text-[#f9fafb]">{t('personalProjectsItems.corda.title')}</h3>
                <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">{t('personalProjectsItems.corda.description')}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {Array.isArray(t('personalProjectsItems.corda.technologies', { returnObjects: true }))
                    ? t('personalProjectsItems.corda.technologies', { returnObjects: true }).map((tech: string, index: number) => (
                        <Tag key={index} color="info" label={tech} />
                      ))
                    : null}
                </div>
              </div>
            </div>

            <div className="bg-[#f9fafb] dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm border border-[#e5e7eb] dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-[#4f46e5] dark:hover:border-[#14b8a6]">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#111827] dark:text-[#f9fafb]">{t('personalProjectsItems.python.title')}</h3>
                <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">{t('personalProjectsItems.python.description')}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {Array.isArray(t('personalProjectsItems.python.technologies', { returnObjects: true }))
                    ? t('personalProjectsItems.python.technologies', { returnObjects: true }).map((tech: string, index: number) => (
                        <Tag key={index} color="info" label={tech} />
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 bg-[#f9fafb] dark:bg-gray-800 rounded-lg shadow-sm border border-[#e5e7eb] dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-3xl font-bold mb-12 text-center text-[#111827] dark:text-[#f9fafb]">{t('skills.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="bg-[#f9fafb] dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-[#e5e7eb] dark:border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">{t('skills.languages')}</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#111827]/80 dark:text-[#f9fafb]/80">Python</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className={`w-6 h-2 rounded-full ${star <= 5 ? 'bg-[#4f46e5] dark:bg-[#14b8a6]' : 'bg-[#e5e7eb] dark:bg-gray-700'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#111827]/70 dark:text-[#f9fafb]/70">
                    {t('skills.pythonDesc')}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#111827]/80 dark:text-[#f9fafb]/80">Java</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className={`w-6 h-2 rounded-full ${star <= 5 ? 'bg-[#4f46e5] dark:bg-[#14b8a6]' : 'bg-[#e5e7eb] dark:bg-gray-700'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#111827]/70 dark:text-[#f9fafb]/70">
                    {t('skills.javaDesc')}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#111827]/80 dark:text-[#f9fafb]/80">C#</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className={`w-6 h-2 rounded-full ${star <= 4 ? 'bg-[#4f46e5] dark:bg-[#14b8a6]' : 'bg-[#e5e7eb] dark:bg-gray-700'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#111827]/70 dark:text-[#f9fafb]/70">
                    {t('skills.csharpDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Frameworks & Tools */}
            <div className="bg-[#f9fafb] dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-[#e5e7eb] dark:border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">{t('skills.frameworks')}</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#111827]/80 dark:text-[#f9fafb]/80">Odoo</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className={`w-6 h-2 rounded-full ${star <= 5 ? 'bg-[#4f46e5] dark:bg-[#14b8a6]' : 'bg-[#e5e7eb] dark:bg-gray-700'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#111827]/70 dark:text-[#f9fafb]/70">
                    {t('skills.odooDesc')}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#111827]/80 dark:text-[#f9fafb]/80">Spring Boot</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className={`w-6 h-2 rounded-full ${star <= 5 ? 'bg-[#4f46e5] dark:bg-[#14b8a6]' : 'bg-[#e5e7eb] dark:bg-gray-700'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#111827]/70 dark:text-[#f9fafb]/70">
                    {t('skills.springDesc')}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#111827]/80 dark:text-[#f9fafb]/80">React</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className={`w-6 h-2 rounded-full ${star <= 4 ? 'bg-[#4f46e5] dark:bg-[#14b8a6]' : 'bg-[#e5e7eb] dark:bg-gray-700'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#111827]/70 dark:text-[#f9fafb]/70">
                    {t('skills.reactDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Infrastructure & DevOps */}
            <div className="bg-[#f9fafb] dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-[#e5e7eb] dark:border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">{t('skills.infrastructure')}</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#111827]/80 dark:text-[#f9fafb]/80">Docker</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className={`w-6 h-2 rounded-full ${star <= 4 ? 'bg-[#4f46e5] dark:bg-[#14b8a6]' : 'bg-[#e5e7eb] dark:bg-gray-700'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#111827]/70 dark:text-[#f9fafb]/70">
                    {t('skills.dockerDesc')}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#111827]/80 dark:text-[#f9fafb]/80">CI/CD</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className={`w-6 h-2 rounded-full ${star <= 3 ? 'bg-[#4f46e5] dark:bg-[#14b8a6]' : 'bg-[#e5e7eb] dark:bg-gray-700'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#111827]/70 dark:text-[#f9fafb]/70">
                    {t('skills.cicdDesc')}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#111827]/80 dark:text-[#f9fafb]/80">Cloud</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div
                          key={star}
                          className={`w-6 h-2 rounded-full ${star <= 3 ? 'bg-[#4f46e5] dark:bg-[#14b8a6]' : 'bg-[#e5e7eb] dark:bg-gray-700'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#111827]/70 dark:text-[#f9fafb]/70">
                    {t('skills.cloudDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
