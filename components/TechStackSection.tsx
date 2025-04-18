"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const TechStackSection: React.FC = () => {
  const { t } = useTranslation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Technology stack data
  const technologies = [
    {
      name: "C#",
      icon: "/images/tech/csharp.svg",
      color: "bg-purple-100 dark:bg-purple-900/30",
      textColor: "text-purple-800 dark:text-purple-300",
      borderColor: "border-purple-300 dark:border-purple-700",
      hoverColor: "group-hover:bg-purple-200 dark:group-hover:bg-purple-800/40"
    },
    {
      name: ".NET",
      icon: "/images/tech/dotnet.svg",
      color: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-800 dark:text-blue-300",
      borderColor: "border-blue-300 dark:border-blue-700",
      hoverColor: "group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40"
    },
    {
      name: "Java",
      icon: "/images/tech/java.svg",
      color: "bg-red-100 dark:bg-red-900/30",
      textColor: "text-red-800 dark:text-red-300",
      borderColor: "border-red-300 dark:border-red-700",
      hoverColor: "group-hover:bg-red-200 dark:group-hover:bg-red-800/40"
    },
    {
      name: "Odoo",
      icon: "/images/tech/odoo.svg",
      color: "bg-green-100 dark:bg-green-900/30",
      textColor: "text-green-800 dark:text-green-300",
      borderColor: "border-green-300 dark:border-green-700",
      hoverColor: "group-hover:bg-green-200 dark:group-hover:bg-green-800/40"
    },
    {
      name: "Python",
      icon: "/images/tech/python.svg",
      color: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-800 dark:text-blue-300",
      borderColor: "border-blue-300 dark:border-blue-700",
      hoverColor: "group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40"
    },
    {
      name: "PostgreSQL",
      icon: "/images/tech/postgresql.svg",
      color: "bg-indigo-100 dark:bg-indigo-900/30",
      textColor: "text-indigo-800 dark:text-indigo-300",
      borderColor: "border-indigo-300 dark:border-indigo-700",
      hoverColor: "group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/40"
    },
    {
      name: "Docker",
      icon: "/images/tech/docker.svg",
      color: "bg-cyan-100 dark:bg-cyan-900/30",
      textColor: "text-cyan-800 dark:text-cyan-300",
      borderColor: "border-cyan-300 dark:border-cyan-700",
      hoverColor: "group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800/40"
    },
    {
      name: "React",
      icon: "/images/tech/react.svg",
      color: "bg-sky-100 dark:bg-sky-900/30",
      textColor: "text-sky-800 dark:text-sky-300",
      borderColor: "border-sky-300 dark:border-sky-700",
      hoverColor: "group-hover:bg-sky-200 dark:group-hover:bg-sky-800/40"
    },
    {
      name: "Node.js",
      icon: "/images/tech/nodejs.svg",
      color: "bg-emerald-100 dark:bg-emerald-900/30",
      textColor: "text-emerald-800 dark:text-emerald-300",
      borderColor: "border-emerald-300 dark:border-emerald-700",
      hoverColor: "group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/40"
    },
    {
      name: "AWS",
      icon: "/images/tech/aws.svg",
      color: "bg-amber-100 dark:bg-amber-900/30",
      textColor: "text-amber-800 dark:text-amber-300",
      borderColor: "border-amber-300 dark:border-amber-700",
      hoverColor: "group-hover:bg-amber-200 dark:group-hover:bg-amber-800/40"
    },
    {
      name: "Azure",
      icon: "/images/tech/azure.svg",
      color: "bg-blue-100 dark:bg-blue-900/30",
      textColor: "text-blue-800 dark:text-blue-300",
      borderColor: "border-blue-300 dark:border-blue-700",
      hoverColor: "group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40"
    },
    {
      name: "Git",
      icon: "/images/tech/git.svg",
      color: "bg-orange-100 dark:bg-orange-900/30",
      textColor: "text-orange-800 dark:text-orange-300",
      borderColor: "border-orange-300 dark:border-orange-700",
      hoverColor: "group-hover:bg-orange-200 dark:group-hover:bg-orange-800/40"
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
          >
            <span className="text-indigo-600 dark:text-indigo-400 mr-2">🔧</span>
            {t('techStack.title')}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto"
          >
            {t('techStack.subtitle')}
          </motion.p>

          {/* Tech grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={fadeInUp}
                className={`group flex flex-col items-center p-4 rounded-lg ${tech.color} border ${tech.borderColor} transition-all duration-300 hover:shadow-md relative overflow-hidden`}
              >
                {/* Hover effect background */}
                <div className={`absolute inset-0 opacity-0 ${tech.hoverColor} transition-opacity duration-300 group-hover:opacity-100`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-3 mx-auto flex items-center justify-center">
                    <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className={`text-sm font-medium ${tech.textColor} text-center`}>{tech.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Note */}
          <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 italic text-center">
              {t('techStack.note')}
            </p>
          </motion.div>

          {/* Experience highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700"
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{t('techStack.highlights.0.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('techStack.highlights.0.description')}
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700"
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{t('techStack.highlights.1.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('techStack.highlights.1.description')}
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700"
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{t('techStack.highlights.2.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('techStack.highlights.2.description')}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
