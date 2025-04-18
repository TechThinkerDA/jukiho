"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Tag } from '../../components/ui/Tag';
import { Modal } from '../../components/ui/Modal';

// Metadata is defined in metadata.ts

export default function AboutPage() {
  const { t } = useTranslation('about');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Skill details for the modal
  const skillDetails = {
    'Python': {
      title: 'Python & Odoo',
      description: 'Experience with Python development, focusing on Odoo ERP customization, module development, and integration with external services.',
      projects: ['Odoo Module Development', 'HR Document Management', 'Inventory Valuation System'],
      libraries: ['Odoo', 'XML', 'PostgreSQL', 'API Integration', 'Amazon SQS'],
      level: 5
    },
    'Java': {
      title: 'Java Expertise',
      description: 'Over 10 years of experience with Java development, focusing on enterprise applications, backend systems, and microservices architecture.',
      projects: ['Bloomreach Content CMS Integration', 'JavaFX ERP System', 'Spring Boot Microservices'],
      libraries: ['Spring Boot', 'JPA/Hibernate', 'Apache Jackrabbit', 'JavaFX', 'JUnit'],
      level: 5
    },
    'C#': {
      title: 'C# Development',
      description: '7+ years working with C# and .NET technologies, building robust backend systems and desktop applications.',
      projects: ['Financial Services Platform', 'WPF Configuration Tool', 'ASP.NET Core APIs'],
      libraries: ['ASP.NET Core', '.NET WPF', 'Entity Framework', 'LINQ', 'xUnit'],
      level: 4
    },
    'JavaScript': {
      title: 'JavaScript & React',
      description: '5+ years of frontend development with React and modern JavaScript, creating responsive and interactive user interfaces.',
      projects: ['Bloomreach Frontend', 'Next.js Portfolio', 'React Dashboard Applications'],
      libraries: ['React', 'Next.js', 'Redux', 'TypeScript', 'Jest'],
      level: 4
    }
  };

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
                  href="/files/cv.pdf"
                  download
                  className="inline-flex items-center px-4 py-2 bg-[#4f46e5] dark:bg-[#14b8a6] text-white rounded-md hover:bg-[#4338ca] dark:hover:bg-[#0d9488] transition-colors duration-200 no-underline"
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
                  <div className="text-lg font-semibold text-[#4f46e5] dark:text-[#14b8a6]">2024 - Present</div>
                  <div className="text-xl font-bold text-[#111827] dark:text-[#f9fafb]">Odoo Developer</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
                    Developing and extending Odoo functionalities for HR, manufacturing, and manufacturing, including process automation:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
                    <li>Managing and generating/signing documents in the HR module.</li>
                    <li>Implementing a product cost calculator for warehouse inventory valuation using Amazon SQS.</li>
                    <li>Modifying existing manufacturing addons.</li>
                    <li>Procurement claims.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Tag color="primary" label="Python" />
                    <Tag color="primary" label="Odoo" />
                    <Tag color="primary" label="AWS" />
                    <Tag color="primary" label="XML" />
                    <Tag color="primary" label="JSON" />
                    <Tag color="primary" label="PostgreSQL" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-lg font-semibold text-[#4f46e5] dark:text-[#14b8a6]">2021 - 2024</div>
                  <div className="text-xl font-bold text-[#111827] dark:text-[#f9fafb]">Java + React Developer</div>
                  <div className="text-[#111827]/70 dark:text-[#f9fafb]/70">Team Leader (2P)</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
                    Complete redesign of Bloomreach.com using the Bloomreach Content CMS. The project centered around enhancing the website's backend infrastructure to provide a seamless user experience and support its vast content management needs.
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
                    <li>Spearheaded the development and optimization of the backend systems, ensuring robust performance and scalability.</li>
                    <li>Proposed a foundational structure for components and implemented both Server-Side Rendering (SSR) and Single-Page Application (SPA) approaches and collaborated with front-end developers.</li>
                    <li>Designed and integrated Java extensions on the backend to enhance the website's capabilities with sophisticated features and functionalities.</li>
                    <li>Ensured compatibility with the Vercel hosting platform, optimizing deployment processes.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Tag color="primary" label="Java" />
                    <Tag color="primary" label="Spring" />
                    <Tag color="primary" label="Apache Jackrabbit" />
                    <Tag color="primary" label="Bloomreach Content" />
                    <Tag color="primary" label="React" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-lg font-semibold text-[#4f46e5] dark:text-[#14b8a6]">2020 - 2024</div>
                  <div className="text-xl font-bold text-[#111827] dark:text-[#f9fafb]">ASP.NET Core Developer / Architect</div>
                  <div className="text-[#111827]/70 dark:text-[#f9fafb]/70">Team Leader (3P)</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
                    The developed application offers comprehensive financial solutions, including leasing options for its customers:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
                    <li>Integrated multiple bank APIs seamlessly using a custom-developed API gateway to streamline data retrieval and enhance application reliability.</li>
                    <li>Designed and implemented configurable report dashboards, enabling stakeholders to obtain diverse views on historical financial data and track key metrics effectively.</li>
                    <li>Architect of a system for dynamic rendering of UI elements tailored to specific configurations for individual banking institutions, optimizing user experience and ensuring compliance with varied bank requirements.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Tag color="primary" label="ASP.NET Core 3" />
                    <Tag color="primary" label="C#" />
                    <Tag color="primary" label="REST API" />
                    <Tag color="primary" label="SOAP" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-lg font-semibold text-[#4f46e5] dark:text-[#14b8a6]">2018 - 2020</div>
                  <div className="text-xl font-bold text-[#111827] dark:text-[#f9fafb]">.NET WPF Developer</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
                    Management and development of WPF for PLC Configuration Modeling Software:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
                    <li>Configuration of a component library representing real devices — loading structures in XML format.</li>
                    <li>Connection with real devices, uploading created configurations, reading device statuses.</li>
                    <li>Solving the rendering of complex arrangements of many elements.</li>
                    <li>Creation of an emulator for testing configurations without the need for actual devices.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Tag color="primary" label="C#" />
                    <Tag color="primary" label=".NET WPF" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-lg font-semibold text-[#4f46e5] dark:text-[#14b8a6]">2018 - 2021</div>
                  <div className="text-xl font-bold text-[#111827] dark:text-[#f9fafb]">JavaFX Developer</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
                    Development of a specialized ERP system for a waste management company. This project was aimed at streamlining garbage collection logistics, warehouse management, invoicing, and reporting in compliance with legislative standards, ensuring flexibility to accommodate new changes.
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">
                    <li>Development of the waste logistics and warehouse management modules, ensuring efficient logistics processes.</li>
                    <li>Collaborated closely with the invoicing and reporting teams to ensure seamless integration of modules, providing a unified system experience.</li>
                    <li>Addressed issues stemming from strict legislative standards and evolving waste management practices, updating the ERP system as needed.</li>
                    <li>Development PHP server to synchronize data between users / services.</li>
                    <li>Implemented an offline accessibility feature, allowing users to access and interact with the system even without an internet connection.</li>
                    <li>Designed a customizable reporting tool, enabling users to tailor reports according to their needs while ensuring optimized system performance.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Tag color="primary" label="Java FX" />
                    <Tag color="primary" label="PHP Symfony" />
                    <Tag color="primary" label="MySQL" />
                    <Tag color="primary" label="DevOps" />
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
            <h2 className="text-3xl font-bold mb-12 text-center text-[#111827] dark:text-[#f9fafb]">{t('education')}</h2>
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-lg font-semibold text-[#4f46e5] dark:text-[#14b8a6]">2015 - 2017</div>
                  <div className="text-xl font-bold text-[#111827] dark:text-[#f9fafb]">Engineer degree</div>
                  <div className="text-[#111827]/70 dark:text-[#f9fafb]/70">Technical University of Košice, Slovakia</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-[#111827]/80 dark:text-[#f9fafb]/80">
                    Advanced studies in computer science and software engineering, building on the foundation established during the bachelor's program.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="text-lg font-semibold text-[#4f46e5] dark:text-[#14b8a6]">2012 - 2015</div>
                  <div className="text-xl font-bold text-[#111827] dark:text-[#f9fafb]">Bachelor's degree</div>
                  <div className="text-[#111827]/70 dark:text-[#f9fafb]/70">Technical University of Košice, Slovakia</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-[#111827]/80 dark:text-[#f9fafb]/80">
                    Studied computer science with a focus on software engineering and development.
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
                <h3 className="text-xl font-bold mb-4 text-[#111827] dark:text-[#f9fafb]">Odoo Development</h3>
                <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">Development of custom Odoo extensions for manufacturing, HR, purchasing, sales, invoicing, inventory valuation, and integration with external services.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Tag color="info" label="Python" />
                  <Tag color="info" label="Odoo" />
                  <Tag color="info" label="XML" />
                  <Tag color="info" label="API Integration" />
                </div>
              </div>
            </div>

            <div className="bg-[#f9fafb] dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm border border-[#e5e7eb] dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-[#4f46e5] dark:hover:border-[#14b8a6]">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#111827] dark:text-[#f9fafb]">Corda Blockchain Development</h3>
                <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">Explored distributed ledger technology using Corda, creating a CorDapp for supply chain tracking.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Tag color="info" label="Kotlin" />
                  <Tag color="info" label="Corda" />
                  <Tag color="info" label="Blockchain" />
                </div>
              </div>
            </div>

            <div className="bg-[#f9fafb] dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm border border-[#e5e7eb] dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:border-[#4f46e5] dark:hover:border-[#14b8a6]">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#111827] dark:text-[#f9fafb]">Python AI Development</h3>
                <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 mb-4">Explored neural networks in Python, creating scripts for stock exchange data analysis and model training.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Tag color="info" label="Python" />
                  <Tag color="info" label="AI" />
                  <Tag color="info" label="Data Analysis" />
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
            <h2 className="text-3xl font-bold mb-12 text-center text-[#111827] dark:text-[#f9fafb]">{t('skills')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div
                onClick={() => openModal('Python')}
                className="bg-[#f9fafb] dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-[#e5e7eb] dark:border-gray-700 h-full transition-all duration-300 hover:shadow-md hover:border-[#4f46e5] dark:hover:border-[#14b8a6] cursor-pointer transform hover:scale-105 active:scale-100"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#e5e7eb] dark:bg-gray-700 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#4f46e5] dark:text-[#14b8a6]">
                      <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z"></path>
                      <path d="M12 7v10M7 12h10"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-[#111827] dark:text-[#f9fafb]">Python / Odoo</h3>
                <p className="text-sm text-[#111827]/70 dark:text-[#f9fafb]/70 mb-3 text-center">ERP customization, module development, API integration</p>
                <div className="flex items-center justify-center mb-4">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className={`w-6 h-2 rounded-full ${star <= 5 ? 'bg-[#4f46e5] dark:bg-[#14b8a6]' : 'bg-[#e5e7eb] dark:bg-gray-700'}`}
                      ></div>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2 text-[#111827]/80 dark:text-[#f9fafb]/80">
                  <li>Odoo ERP</li>
                  <li>Module Development</li>
                  <li>PostgreSQL</li>
                  <li>XML/JSON</li>
                  <li>API Integration</li>
                </ul>
                <div className="mt-4 text-center">
                  <span className="text-[#4f46e5] dark:text-[#14b8a6] text-sm font-medium">{t('clickForDetails')}</span>
                </div>
              </div>
            </div>

            <div>
              <div
                onClick={() => openModal('Java')}
                className="bg-[#f9fafb] dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-[#e5e7eb] dark:border-gray-700 h-full transition-all duration-300 hover:shadow-md hover:border-[#4f46e5] dark:hover:border-[#14b8a6] cursor-pointer transform hover:scale-105 active:scale-100"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#e5e7eb] dark:bg-gray-700 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#4f46e5] dark:text-[#14b8a6]">
                      <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-[#111827] dark:text-[#f9fafb]">Java</h3>
                <p className="text-sm text-[#111827]/70 dark:text-[#f9fafb]/70 mb-3 text-center">Enterprise applications, backend systems, microservices</p>
                <div className="flex items-center justify-center mb-4">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className={`w-6 h-2 rounded-full ${star <= 5 ? 'bg-[#4f46e5] dark:bg-[#14b8a6]' : 'bg-[#e5e7eb] dark:bg-gray-700'}`}
                      ></div>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2 text-[#111827]/80 dark:text-[#f9fafb]/80">
                  <li>Spring Boot</li>
                  <li>JPA / Hibernate</li>
                  <li>JavaFX</li>
                  <li>Apache Jackrabbit</li>
                  <li>Microservices</li>
                </ul>
                <div className="mt-4 text-center">
                  <span className="text-[#4f46e5] dark:text-[#14b8a6] text-sm font-medium">{t('clickForDetails')}</span>
                </div>
              </div>
            </div>

            <div>
              <div
                onClick={() => openModal('C#')}
                className="bg-[#f9fafb] dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-[#e5e7eb] dark:border-gray-700 h-full transition-all duration-300 hover:shadow-md hover:border-[#4f46e5] dark:hover:border-[#14b8a6] cursor-pointer transform hover:scale-105 active:scale-100"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#e5e7eb] dark:bg-gray-700 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#4f46e5] dark:text-[#14b8a6]">
                      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-[#111827] dark:text-[#f9fafb]">C#</h3>
                <p className="text-sm text-[#111827]/70 dark:text-[#f9fafb]/70 mb-3 text-center">Backend systems, desktop applications, APIs</p>
                <div className="flex items-center justify-center mb-4">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className={`w-6 h-2 rounded-full ${star <= 4 ? 'bg-[#4f46e5] dark:bg-[#14b8a6]' : 'bg-[#e5e7eb] dark:bg-gray-700'}`}
                      ></div>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2 text-[#111827]/80 dark:text-[#f9fafb]/80">
                  <li>ASP.NET Core</li>
                  <li>.NET WPF</li>
                  <li>Entity Framework</li>
                  <li>LINQ</li>
                  <li>REST APIs</li>
                </ul>
                <div className="mt-4 text-center">
                  <span className="text-[#4f46e5] dark:text-[#14b8a6] text-sm font-medium">{t('clickForDetails')}</span>
                </div>
              </div>
            </div>

            <div>
              <div
                onClick={() => openModal('JavaScript')}
                className="bg-[#f9fafb] dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-[#e5e7eb] dark:border-gray-700 h-full transition-all duration-300 hover:shadow-md hover:border-[#4f46e5] dark:hover:border-[#14b8a6] cursor-pointer transform hover:scale-105 active:scale-100"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#e5e7eb] dark:bg-gray-700 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#4f46e5] dark:text-[#14b8a6]">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="4"></circle>
                      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                      <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
                      <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-[#111827] dark:text-[#f9fafb]">JavaScript / React</h3>
                <p className="text-sm text-[#111827]/70 dark:text-[#f9fafb]/70 mb-3 text-center">Frontend development, responsive UIs, modern frameworks</p>
                <div className="flex items-center justify-center mb-4">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className={`w-6 h-2 rounded-full ${star <= 4 ? 'bg-[#4f46e5] dark:bg-[#14b8a6]' : 'bg-[#e5e7eb] dark:bg-gray-700'}`}
                      ></div>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2 text-[#111827]/80 dark:text-[#f9fafb]/80">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Server-Side Rendering (SSR)</li>
                  <li>Single-Page Applications (SPA)</li>
                  <li>UI/UX Implementation</li>
                </ul>
                <div className="mt-4 text-center">
                  <span className="text-[#4f46e5] dark:text-[#14b8a6] text-sm font-medium">{t('clickForDetails')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Detail Modal */}
      {selectedSkill && skillDetails[selectedSkill] && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={skillDetails[selectedSkill].title}
        >
          <div className="space-y-4">
            <p className="text-[#111827]/80 dark:text-[#f9fafb]/80">
              {skillDetails[selectedSkill].description}
            </p>

            <div>
              <h4 className="font-bold text-[#111827] dark:text-[#f9fafb] mb-2">{t('proficiencyLevel')}</h4>
              <div className="flex items-center">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div
                      key={star}
                      className={`w-8 h-3 rounded-full ${star <= skillDetails[selectedSkill].level ? 'bg-[#4f46e5] dark:bg-[#14b8a6]' : 'bg-[#e5e7eb] dark:bg-gray-700'}`}
                    ></div>
                  ))}
                </div>
                <span className="ml-2 text-sm text-[#111827]/60 dark:text-[#f9fafb]/60">
                  {skillDetails[selectedSkill].level}/5
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-[#111827] dark:text-[#f9fafb] mb-2">{t('notableProjects')}</h4>
              <ul className="list-disc pl-5 space-y-1 text-[#111827]/80 dark:text-[#f9fafb]/80">
                {skillDetails[selectedSkill].projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#111827] dark:text-[#f9fafb] mb-2">{t('librariesFrameworks')}</h4>
              <div className="flex flex-wrap gap-2">
                {skillDetails[selectedSkill].libraries.map((lib, index) => (
                  <Tag key={index} label={lib} color="primary" size="md" />
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
