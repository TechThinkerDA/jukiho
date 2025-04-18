'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../../components/ui/AnimatedSection';
import { TechItem } from '../../components/ui/TechItem';
import { FiCode, FiDatabase, FiServer, FiTool } from 'react-icons/fi';

export default function StackPage() {
  const { t } = useTranslation('stack');
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section - No Animation */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">
              {t('title')}
            </h1>
            <p className="text-xl text-[#111827]/80 dark:text-[#f9fafb]/80 mb-8">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Backend Section */}
      <section>
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <FiServer className="text-[#4f46e5] dark:text-[#14b8a6] mr-4" size={32} />
            <h2 className="text-3xl font-bold text-[#111827] dark:text-[#f9fafb]">{t('sections.backend')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TechItem
              name="Python / Odoo"
              description="Python development with Odoo ERP framework"
              level={5}
              delay={0.1}
              experience="2+ years working with Python and Odoo ERP"
              features={[
                "Custom extensions for manufacturing, HR, purchasing, sales",
                "Inventory valuation and invoicing modules",
                "Integration with external services and APIs",
                "Business process automation and workflow optimization"
              ]}
              link="https://www.odoo.com/"
              translationKey="python"
            />
            <TechItem
              name="Java / Spring Boot"
              description="Enterprise-grade backend development with Spring ecosystem"
              level={5}
              delay={0.2}
              experience="10+ years of Java development, 7+ years with Spring Boot"
              features={[
                "Microservices architecture with Spring Boot",
                "RESTful API development",
                "Dependency injection and inversion of control",
                "Integration with various data sources and services"
              ]}
              link="https://spring.io/projects/spring-boot"
              translationKey="java"
            />
            <TechItem
              name="JPA / Hibernate"
              description="Object-relational mapping for Java applications"
              level={5}
              delay={0.3}
              experience="8+ years working with JPA and Hibernate in production applications"
              features={[
                "Entity mapping and relationship management",
                "JPQL and Criteria API for complex queries",
                "Transaction management",
                "Performance optimization and caching"
              ]}
              link="https://hibernate.org/"
              translationKey="jpa"
            />
            <TechItem
              name="C# / ASP.NET Core"
              description="Building robust backend systems with Microsoft's framework"
              level={5}
              delay={0.4}
              experience="7+ years of C# development, 5+ years with ASP.NET Core"
              features={[
                "Web API development with ASP.NET Core",
                "MVC architecture implementation",
                "Entity Framework Core for data access",
                "Dependency injection and middleware pipeline"
              ]}
              link="https://dotnet.microsoft.com/apps/aspnet"
              translationKey="csharp"
            />
            <TechItem
              name="REST APIs"
              description="Designing and implementing RESTful web services"
              level={5}
              delay={0.5}
              experience="8+ years designing and implementing RESTful APIs"
              features={[
                "RESTful architecture principles",
                "API versioning and documentation",
                "Authentication and authorization",
                "Rate limiting and caching strategies"
              ]}
              link="https://restfulapi.net/"
              translationKey="rest"
            />
            <TechItem
              name="Microservices"
              description="Building distributed systems with microservices architecture"
              level={4}
              delay={0.6}
              experience="5+ years designing and implementing microservices architectures"
              features={[
                "Service decomposition and domain-driven design",
                "Inter-service communication patterns",
                "Service discovery and API gateways",
                "Resilience patterns (circuit breakers, retries, etc.)"
              ]}
              link="https://microservices.io/"
              translationKey="microservices"
            />
          </div>
        </div>
      </section>

      {/* Frontend Section */}
      <section className="py-12 bg-[#f9fafb] dark:bg-gray-800/20 rounded-lg shadow-sm border border-[#e5e7eb] dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <FiCode className="text-[#4f46e5] dark:text-[#14b8a6] mr-4" size={32} />
            <h2 className="text-3xl font-bold text-[#111827] dark:text-[#f9fafb]">{t('sections.frontend')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TechItem
              name="React"
              description="Building interactive user interfaces with React and its ecosystem"
              level={4}
              delay={0.1}
              experience="5+ years of experience building responsive and interactive web applications with React"
              features={[
                "Component-based architecture for reusable UI elements",
                "State management with hooks and context API",
                "Integration with various backend APIs",
                "Custom hooks and optimized rendering"
              ]}
              link="https://reactjs.org/"
              translationKey="react"
            />
            <TechItem
              name="Next.js"
              description="Creating server-rendered and static React applications"
              level={4}
              delay={0.2}
              experience="3+ years working with Next.js for production applications"
              features={[
                "Server-side rendering for improved SEO and performance",
                "Static site generation for blazing fast websites",
                "API routes for backend functionality",
                "File-based routing system"
              ]}
              link="https://nextjs.org/"
              translationKey="nextjs"
            />
            <TechItem
              name="JavaScript"
              description="Core language for frontend development and browser interactions"
              level={4}
              delay={0.3}
              experience="10+ years of JavaScript development experience"
              features={[
                "ES6+ features and modern syntax",
                "Asynchronous programming with Promises and async/await",
                "DOM manipulation and event handling",
                "Functional programming concepts"
              ]}
              link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              translationKey="javascript"
            />
            <TechItem
              name="HTML/CSS"
              description="Fundamental web technologies for structure and styling"
              level={4}
              delay={0.4}
              experience="10+ years of experience with HTML5 and CSS3"
              features={[
                "Semantic HTML for accessibility and SEO",
                "Responsive design with media queries",
                "CSS Grid and Flexbox layouts",
                "CSS animations and transitions"
              ]}
              link="https://developer.mozilla.org/en-US/docs/Web/CSS"
              translationKey="htmlcss"
            />
            <TechItem
              name="SSR & SPA"
              description="Server-Side Rendering and Single-Page Application approaches"
              level={3}
              delay={0.5}
              experience="5+ years building both SSR and SPA applications"
              features={[
                "Server-side rendering for improved initial load time",
                "Single-page applications for smooth user experience",
                "Hybrid approaches combining benefits of both",
                "SEO optimization techniques for JavaScript applications"
              ]}
              link="https://nextjs.org/docs/basic-features/pages"
              translationKey="ssrspa"
            />
            <TechItem
              name="UI/UX Implementation"
              description="Translating designs into functional user interfaces"
              level={3}
              delay={0.6}
              experience="5+ years implementing UI/UX designs in web applications"
              features={[
                "Pixel-perfect implementation of design mockups",
                "Responsive layouts that work across all devices",
                "Accessible interfaces following WCAG guidelines",
                "Interactive elements with smooth animations"
              ]}
              link="https://www.interaction-design.org/literature/topics/ui-design"
              translationKey="uiux"
            />
          </div>
        </div>
      </section>

      {/* DevOps Section */}
      <section>
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <FiTool className="text-[#4f46e5] dark:text-[#14b8a6] mr-4" size={32} />
            <h2 className="text-3xl font-bold text-[#111827] dark:text-[#f9fafb]">{t('sections.devops')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TechItem
                  name="Git & GitHub"
                  description="Version control and collaboration platform"
                  level={4}
                  delay={0.6}
                  experience="10+ years using Git for version control and GitHub for collaboration"
                  features={[
                      "Advanced Git workflows (rebasing, cherry-picking, etc.)",
                      "GitHub Actions for CI/CD",
                      "Pull request reviews and code collaboration",
                      "Branch management strategies"
                  ]}
                  link="https://github.com/"
                  translationKey="gitgithub"
              />
            <TechItem
              name="Jenkins"
              description="CI/CD automation server for build and deployment"
              level={3}
              delay={0.1}
              experience="6+ years working with Jenkins for CI/CD pipelines"
              features={[
                "Pipeline as code with Jenkinsfile",
                "Automated build, test, and deployment processes",
                "Integration with version control systems",
                "Plugin ecosystem for extended functionality"
              ]}
              link="https://www.jenkins.io/"
              translationKey="jenkins"
            />
            <TechItem
              name="Docker"
              description="Containerization platform for applications"
              level={3}
              delay={0.2}
              experience="5+ years containerizing applications with Docker"
              features={[
                "Container creation and management",
                "Multi-container applications with Docker Compose",
                "Custom image building with Dockerfile",
                "Container orchestration fundamentals"
              ]}
              link="https://www.docker.com/"
              translationKey="docker"
            />
            <TechItem
              name="Linux"
              description="Operating system for servers and development"
              level={2}
              delay={0.3}
              experience="8+ years working with Linux for server administration and development"
              features={[
                "Server administration and configuration",
                "Bash scripting for automation",
                "Service management and monitoring",
                "Security hardening and best practices"
              ]}
              link="https://www.linux.org/"
              translationKey="linux"
            />
            <TechItem
              name="Gradle"
              description="Build automation tool for Java projects"
              level={3}
              delay={0.4}
              experience="6+ years using Gradle for Java project builds"
              features={[
                "Build script development with Groovy DSL",
                "Dependency management",
                "Custom task creation and configuration",
                "Multi-project builds and modularization"
              ]}
              link="https://gradle.org/"
              translationKey="gradle"
            />
            <TechItem
              name="AWS"
              description="Cloud computing services for applications"
              level={2}
              delay={0.5}
              experience="3+ years working with AWS cloud services"
              features={[
                "EC2 for virtual servers in the cloud",
                "S3 for object storage",
                "RDS for managed relational databases",
                "Lambda for serverless computing"
              ]}
              link="https://aws.amazon.com/"
              translationKey="aws"
            />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 bg-[#f9fafb] dark:bg-gray-800/20 rounded-lg shadow-sm border border-[#e5e7eb] dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <FiDatabase className="text-[#4f46e5] dark:text-[#14b8a6] mr-4" size={32} />
            <h2 className="text-3xl font-bold text-[#111827] dark:text-[#f9fafb]">{t('sections.tools')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TechItem
              name="SQL Databases"
              description="MySQL and PostgreSQL for data storage and retrieval"
              level={4}
              delay={0.1}
              experience="10+ years working with relational databases"
              features={[
                "Database design and normalization",
                "Complex SQL queries and stored procedures",
                "Performance optimization and indexing",
                "Database administration and maintenance"
              ]}
              link="https://www.postgresql.org/"
              translationKey="sqldatabases"
            />
            <TechItem
              name="PHP / Symfony"
              description="PHP development with Symfony framework"
              level={3}
              delay={0.2}
              experience="5+ years of PHP development with Symfony framework"
              features={[
                "MVC architecture implementation",
                "Doctrine ORM for database operations",
                "Twig templating engine",
                "Symfony components and bundles"
              ]}
              link="https://symfony.com/"
              translationKey="phpsymfony"
            />
            <TechItem
              name="XML / JSON"
              description="Data serialization and interchange formats"
              level={5}
              delay={0.3}
              experience="10+ years working with XML and JSON for data interchange"
              features={[
                "XML schema design and validation",
                "XSLT transformations",
                "JSON schema and validation",
                "RESTful API data formatting"
              ]}
              link="https://www.json.org/"
              translationKey="xmljson"
            />
            <TechItem
              name="Kotlin / Corda"
              description="Blockchain development with R3 Corda"
              level={2}
              delay={0.4}
              experience="2+ years exploring blockchain development with Corda"
              features={[
                "Smart contract development",
                "Distributed ledger concepts",
                "Kotlin programming language",
                "Blockchain network architecture"
              ]}
              link="https://www.corda.net/"
              translationKey="kotlincorda"
            />
            <TechItem
              name="Python AI"
              description="Neural networks and data analysis with Python"
              level={3}
              delay={0.5}
              experience="1+ years exploring AI and machine learning with Python"
              features={[
                "Neural network fundamentals",
                "Data preprocessing and analysis",
                "TensorFlow and PyTorch basics",
                "Natural language processing concepts"
              ]}
              link="https://www.tensorflow.org/"
              translationKey="pythonai"
            />
            <TechItem
              name="Team Leadership"
              description="Leading development teams and projects"
              level={4}
              delay={0.6}
              experience="5+ years leading development teams of 2-5 people"
              features={[
                "Agile project management",
                "Technical mentoring and knowledge sharing",
                "Sprint planning and task prioritization",
                "Code reviews and quality assurance"
              ]}
              link="https://agilemanifesto.org/"
              translationKey="teamleadership"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
