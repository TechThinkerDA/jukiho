"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { LocalizedCTA } from './ui/LocalizedCTA';

export const WhyMeSection: React.FC = () => {
  const { t } = useTranslation('whyMe');

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

  // Icons for reasons
  const reasonIcons = [
    <svg key="icon1" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>,
    <svg key="icon2" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>,
    <svg key="icon3" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ];

  // Get reasons from translations
  const reasonsData = t('reasons', { returnObjects: true });

  // Check if reasonsData is an array before mapping
  const reasons = Array.isArray(reasonsData)
    ? reasonsData.map((reason, index) => ({
        title: reason.title,
        description: reason.description,
        icon: reasonIcons[index % reasonIcons.length]
      }))
    : [
        // Fallback data if translations are missing
        {
          title: 'Connecting Tech with Business',
          description: 'Connect the technical world with real business problems. Understand not only code but also business processes and user needs.',
          icon: reasonIcons[0]
        },
        {
          title: 'Experience with Various Projects',
          description: 'Experience with greenfield projects as well as refactoring legacy systems. Design a solution tailored to your needs.',
          icon: reasonIcons[1]
        },
        {
          title: 'Sustainable and Extensible Solutions',
          description: 'Focus on sustainable, extensible solutions that will work for years and adapt to changing requirements.',
          icon: reasonIcons[2]
        }
      ];

  return (
    <section id="why-me" className="py-20 bg-white dark:bg-gray-800">
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
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            <span className="text-indigo-600 dark:text-indigo-400 mr-2">📈</span>
            {t('title')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center"
              >
                <div className="mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{reason.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-lg p-8 shadow-md text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{t('callToAction.title')}</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {t('callToAction.description')}
            </p>
            <LocalizedCTA
              href="/contact"
              variant="primary"
              size="lg"
              className="btn btn-lg bg-indigo-600 text-white border-2 border-indigo-600 hover:bg-indigo-700 hover:border-indigo-700 hover:text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              {t('callToAction.button')}
            </LocalizedCTA>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
