"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const DevelopmentPhasesSection: React.FC = () => {
  const { t } = useTranslation('developmentPhases');

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

  // Icons for development phases
  const phaseIcons = [
    <svg key="icon1" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>,
    <svg key="icon2" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>,
    <svg key="icon3" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>,
    <svg key="icon4" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ];

  // Get phases from translations
  const phases = t('phases', { returnObjects: true }).map((phase, index) => ({
    id: index + 1,
    title: phase.title,
    icon: phaseIcons[index],
    items: phase.items
  }));

  return (
    <section id="development-phases" className="py-16 bg-white dark:bg-gray-800">
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
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
          >
            <span className="text-indigo-600 dark:text-indigo-400 mr-2">🧠</span>
            {t('title')}
          </motion.h2>

          {/* Flowchart */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[24px] md:left-1/2 transform md:-translate-x-1/2 top-0 h-[95%] w-1 bg-indigo-200 dark:bg-indigo-900 z-0"></div>

            {/* Phases */}
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                variants={fadeInUp}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${index > 0 ? 'md:mt-[-5rem] mt-6' : 'mb-2'} relative z-10`}
              >
                {/* Phase number and icon */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-4 md:top-1/2 z-30">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 border-3 border-indigo-500 flex items-center justify-center">
                    <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{phase.id}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-14 md:pl-0 ${index > 0 ? 'md:mt-10' : ''}`}>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 shadow-md inline-block">
                    <div className="flex items-center mb-2 gap-3">
                      {index % 2 === 1 && <div className="md:block hidden">{phase.icon}</div>}
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{phase.title}</h3>
                      {index % 2 === 0 && <div className="md:block hidden">{phase.icon}</div>}
                      <div className="md:hidden block">{phase.icon}</div>
                    </div>
                    <ul className={`space-y-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          <span className="text-gray-600 dark:text-gray-300 text-base md:text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>

          {/* Final note */}
          <motion.div
            variants={fadeInUp}
            className="mt-4 text-center"
          >
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 italic">
              {t('finalNote')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
