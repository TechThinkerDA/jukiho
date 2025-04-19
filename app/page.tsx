import React from 'react';
import Image from 'next/image';
import { LocalizedCTA } from '../components/ui/LocalizedCTA';
import { TranslatedText } from '../components/TranslatedContent';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { AnimatedCard } from '../components/ui/Card';
import { getProjectsAction } from './projects/actions';
import { Tag } from '../components/ui/Tag';
import { ITHeroGeometric } from '../components/ITHeroGeometric';
import { ProblemSolutionSection } from '../components/ProblemSolutionSection';
import { DevelopmentPhasesSection } from '../components/DevelopmentPhasesSection';
import { WhyMeSection } from '../components/WhyMeSection';

export default async function HomePage() {
  // Get all projects
  const projects = await getProjectsAction();

  // Filter specific projects by their IDs instead of titles to support multiple languages
  const featuredProjects = projects.filter(project =>
    project.id === 'odoo-development' ||
    project.id === 'financial-solutions-platform' ||
    project.id === 'bloomreach-website-redesign'
  );

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <ITHeroGeometric />

      {/* Problem Solution Section */}
      <ProblemSolutionSection />

      {/* Development Phases Section */}
      <DevelopmentPhasesSection />

      {/* Featured Projects Section */}
      <section className="py-16 bg-[#f9fafb] dark:bg-gray-800 rounded-xl shadow-sm border border-[#e5e7eb] dark:border-gray-700 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4 text-center text-[#111827] dark:text-[#f9fafb]">
              <TranslatedText translationKey="featured" ns="projects" />
            </h2>
            <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 text-center mb-12 max-w-2xl mx-auto">
              <TranslatedText translationKey="explore" ns="projects" />
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <AnimatedCard
                key={project.id}
                title={project.title}
                href={`/projects/${project.id}`}
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
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.tags.map((tag) => (
                    <Tag key={tag} label={tag} size="sm" />
                  ))}
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <LocalizedCTA
              href="/projects"
              variant="primary"
              size="md"
              className="btn bg-[#4f46e5] text-[#f9fafb] border-2 border-[#4f46e5] hover:bg-[#14b8a6] hover:border-[#14b8a6] hover:text-[#f9fafb] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <TranslatedText translationKey="viewAll" ns="projects" />
            </LocalizedCTA>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gradient-to-br from-[#f9fafb] to-white dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-sm border border-[#e5e7eb] dark:border-gray-700 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4 text-center text-[#111827] dark:text-[#f9fafb]">
              <TranslatedText translationKey="title" ns="skills" />
            </h2>
            <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 text-center mb-12 max-w-2xl mx-auto">
              <TranslatedText translationKey="subtitle" ns="skills" />
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Python/Odoo Development */}
            <AnimatedSection delay={0.1}>
              <div className="bg-gradient-to-br from-[#14b8a6]/5 to-[#14b8a6]/20 dark:from-[#14b8a6]/10 dark:to-[#14b8a6]/30 rounded-xl p-6 shadow-lg border border-[#14b8a6]/20 dark:border-[#14b8a6]/30 h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.01] group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#14b8a6]/10 dark:bg-[#14b8a6]/20 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#14b8a6] dark:text-[#14b8a6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z"></path>
                      <path d="M12 7v10M7 12h10"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] dark:text-[#f9fafb] group-hover:text-[#14b8a6] dark:group-hover:text-[#14b8a6] transition-colors duration-300">Python / Odoo</h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-[#111827]/80 dark:text-[#f9fafb]/80">Odoo ERP</span>
                    </div>
                    <div className="w-full bg-[#e5e7eb] rounded-full h-3 dark:bg-gray-700 transition-colors duration-200 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#14b8a6] to-[#14b8a6] h-3 rounded-full relative group-hover:animate-width-95 origin-left" style={{ width: '95%' }}>
                        <div className="absolute inset-0 w-full h-full bg-white opacity-20 group-hover:animate-shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-[#111827]/80 dark:text-[#f9fafb]/80">Module Development</span>
                    </div>
                    <div className="w-full bg-[#e5e7eb] rounded-full h-3 dark:bg-gray-700 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#14b8a6] to-[#14b8a6] h-3 rounded-full relative group-hover:animate-width-90 origin-left" style={{ width: '90%' }}>
                        <div className="absolute inset-0 w-full h-full bg-white opacity-20 group-hover:animate-shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-[#111827]/80 dark:text-[#f9fafb]/80">PostgreSQL</span>
                    </div>
                    <div className="w-full bg-[#e5e7eb] rounded-full h-3 dark:bg-gray-700 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#14b8a6] to-[#14b8a6] h-3 rounded-full relative group-hover:animate-width-85 origin-left" style={{ width: '85%' }}>
                        <div className="absolute inset-0 w-full h-full bg-white opacity-20 group-hover:animate-shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-[#111827]/80 dark:text-[#f9fafb]/80">API Integration</span>
                    </div>
                    <div className="w-full bg-[#e5e7eb] rounded-full h-3 dark:bg-gray-700 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#14b8a6] to-[#14b8a6] h-3 rounded-full relative group-hover:animate-width-90 origin-left" style={{ width: '90%' }}>
                        <div className="absolute inset-0 w-full h-full bg-white opacity-20 group-hover:animate-shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Java Development */}
            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-[#6366f1]/5 to-[#6366f1]/20 dark:from-[#6366f1]/10 dark:to-[#6366f1]/30 rounded-xl p-6 shadow-lg border border-[#6366f1]/20 dark:border-[#6366f1]/30 h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.01] group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#6366f1]/10 dark:bg-[#6366f1]/20 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#6366f1] dark:text-[#6366f1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] dark:text-[#f9fafb] group-hover:text-[#6366f1] dark:group-hover:text-[#6366f1] transition-colors duration-300">Java Development</h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-[#111827]/80 dark:text-[#f9fafb]/80">Spring Boot</span>
                    </div>
                    <div className="w-full bg-[#e5e7eb] rounded-full h-3 dark:bg-gray-700 transition-colors duration-200 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#6366f1] to-[#6366f1] h-3 rounded-full relative group-hover:animate-width-95 origin-left" style={{ width: '95%' }}>
                        <div className="absolute inset-0 w-full h-full bg-white opacity-20 group-hover:animate-shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-[#111827]/80 dark:text-[#f9fafb]/80">Microservices</span>
                    </div>
                    <div className="w-full bg-[#e5e7eb] rounded-full h-3 dark:bg-gray-700 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#6366f1] to-[#6366f1] h-3 rounded-full relative group-hover:animate-width-90 origin-left" style={{ width: '90%' }}>
                        <div className="absolute inset-0 w-full h-full bg-white opacity-20 group-hover:animate-shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-[#111827]/80 dark:text-[#f9fafb]/80">JPA/Hibernate</span>
                    </div>
                    <div className="w-full bg-[#e5e7eb] rounded-full h-3 dark:bg-gray-700 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#6366f1] to-[#6366f1] h-3 rounded-full relative group-hover:animate-width-90 origin-left" style={{ width: '90%' }}>
                        <div className="absolute inset-0 w-full h-full bg-white opacity-20 group-hover:animate-shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-[#111827]/80 dark:text-[#f9fafb]/80">JavaFX</span>
                    </div>
                    <div className="w-full bg-[#e5e7eb] rounded-full h-3 dark:bg-gray-700 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#6366f1] to-[#6366f1] h-3 rounded-full relative group-hover:animate-width-85 origin-left" style={{ width: '85%' }}>
                        <div className="absolute inset-0 w-full h-full bg-white opacity-20 group-hover:animate-shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* C# Development */}
            <AnimatedSection delay={0.3}>
              <div className="bg-gradient-to-br from-[#8b5cf6]/5 to-[#8b5cf6]/20 dark:from-[#8b5cf6]/10 dark:to-[#8b5cf6]/30 rounded-xl p-6 shadow-lg border border-[#8b5cf6]/20 dark:border-[#8b5cf6]/30 h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.01] group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#8b5cf6]/10 dark:bg-[#8b5cf6]/20 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#8b5cf6] dark:text-[#8b5cf6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 18l6-6-6-6" />
                      <path d="M8 6l-6 6 6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] dark:text-[#f9fafb] group-hover:text-[#8b5cf6] dark:group-hover:text-[#8b5cf6] transition-colors duration-300">C# Development</h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-[#111827]/80 dark:text-[#f9fafb]/80">ASP.NET Core</span>
                    </div>
                    <div className="w-full bg-[#e5e7eb] rounded-full h-3 dark:bg-gray-700 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#8b5cf6] to-[#8b5cf6] h-3 rounded-full relative group-hover:animate-width-90 origin-left" style={{ width: '90%' }}>
                        <div className="absolute inset-0 w-full h-full bg-white opacity-20 group-hover:animate-shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-[#111827]/80 dark:text-[#f9fafb]/80">REST APIs</span>
                    </div>
                    <div className="w-full bg-[#e5e7eb] rounded-full h-3 dark:bg-gray-700 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#8b5cf6] to-[#8b5cf6] h-3 rounded-full relative group-hover:animate-width-90 origin-left" style={{ width: '90%' }}>
                        <div className="absolute inset-0 w-full h-full bg-white opacity-20 group-hover:animate-shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-[#111827]/80 dark:text-[#f9fafb]/80">.NET WPF</span>
                    </div>
                    <div className="w-full bg-[#e5e7eb] rounded-full h-3 dark:bg-gray-700 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#8b5cf6] to-[#8b5cf6] h-3 rounded-full relative group-hover:animate-width-85 origin-left" style={{ width: '85%' }}>
                        <div className="absolute inset-0 w-full h-full bg-white opacity-20 group-hover:animate-shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-[#111827]/80 dark:text-[#f9fafb]/80">SOAP</span>
                    </div>
                    <div className="w-full bg-[#e5e7eb] rounded-full h-3 dark:bg-gray-700 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#8b5cf6] to-[#8b5cf6] h-3 rounded-full relative group-hover:animate-width-80 origin-left" style={{ width: '80%' }}>
                        <div className="absolute inset-0 w-full h-full bg-white opacity-20 group-hover:animate-shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <div className="text-center mt-12">
            <LocalizedCTA
              href="/stack"
              variant="primary"
              size="md"
              className="btn bg-[#4f46e5] text-[#f9fafb] border-2 border-[#4f46e5] hover:bg-[#14b8a6] hover:border-[#14b8a6] hover:text-[#f9fafb] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <TranslatedText translationKey="viewFull" ns="stack" />
            </LocalizedCTA>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <WhyMeSection />
    </div>
  );
}
