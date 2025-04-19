"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Define types for our translation objects
interface ProblemSolutionTranslations {
  title: string;
  subtitle: string;
  problemTitle: string;
  problemDescription: string;
  problemSummary: string;
  problemPoints: string[];
  solutionTitle: string;
  solutionDescription: string;
  solutionSummary: string;
  solutionPoints: string[];
  resultsTitle: string;
  timeReduction: string;
  costReduction: string;
  satisfactionIncrease: string;
}

export const ProblemSolutionSection: React.FC = () => {
  const { t } = useTranslation('problemSolution');

  // Type assertion for translation arrays
  const problemPoints = t<'problemPoints', { returnObjects: true }, string[]>('problemPoints', { returnObjects: true });
  const solutionPoints = t<'solutionPoints', { returnObjects: true }, string[]>('solutionPoints', { returnObjects: true });

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
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="problem-solution" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
          >
            <span className="text-indigo-600 dark:text-indigo-400 mr-2">🔍</span>
            {t('title')} <span className="block text-xl md:text-2xl mt-2 text-gray-600 dark:text-gray-400 font-normal">{t('subtitle')}</span>
          </motion.h2>

          <div className="relative">
            {/* Vertical timeline line - ends before Results section */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-[calc(100%-12rem)] w-1 bg-indigo-200 dark:bg-indigo-900 hidden md:block"></div>

            {/* Problem section */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col md:flex-row mb-10 relative"
            >
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0 relative">
                <div className="md:hidden absolute left-0 top-0 -ml-6 mt-1 pl-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                </div>
                <div className="pl-8 md:pl-0">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{t('problemTitle')}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 text-base md:text-lg">
                    {t('problemDescription')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 font-semibold text-base md:text-lg">
                    {t('problemSummary')}
                  </p>
                </div>
              </div>

              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                <div className="w-10 h-10 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>

              <div className="md:w-1/2 md:pl-12 pl-2">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-md">
                  <ul className="space-y-3">
                    {problemPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2 flex-shrink-0">•</span>
                        <span className="text-base md:text-lg">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Solution section */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col md:flex-row relative mt-6 md:mt-0"
            >
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 pl-2 md:pl-0">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-md">
                  <ul className="space-y-3 md:text-right">
                    {solutionPoints.map((point, index) => (
                      <li key={index} className="flex items-start md:justify-end">
                        <span className="md:order-2 text-green-500 md:ml-2 mr-2 md:mr-0 flex-shrink-0">•</span>
                        <span className="md:order-1 text-base md:text-lg">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                <div className="w-10 h-10 rounded-full bg-green-600 dark:bg-green-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-1 md:order-2 relative">
                <div className="md:hidden absolute left-0 top-0 -ml-6 mt-1 pl-2">
                  <div className="w-8 h-8 rounded-full bg-green-600 dark:bg-green-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="pl-8 md:pl-0">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{t('solutionTitle')}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 text-base md:text-lg">
                    {t('solutionDescription')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 font-semibold text-base md:text-lg">
                    {t('solutionSummary')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Results section */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 md:mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-lg p-6 md:p-8 shadow-md"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">{t('resultsTitle')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">60%</div>
                  <p className="text-gray-600 dark:text-gray-300">{t('timeReduction')}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">40%</div>
                  <p className="text-gray-600 dark:text-gray-300">{t('costReduction')}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">25%</div>
                  <p className="text-gray-600 dark:text-gray-300">{t('satisfactionIncrease')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
