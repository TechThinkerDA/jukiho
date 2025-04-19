import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import { defaultLanguage } from './lib/i18n-config';

// Import common translations
import enCommon from './public/locales/en/common.json';
import deCommon from './public/locales/de/common.json';
import skCommon from './public/locales/sk/common.json';

// Import page-specific translations
import enHome from './public/locales/en/home.json';
import enAbout from './public/locales/en/about.json';
import enProjects from './public/locales/en/projects.json';
import enStack from './public/locales/en/stack.json';
import enSkills from './public/locales/en/skills.json';
import enLab from './public/locales/en/lab.json';
import enContact from './public/locales/en/contact.json';
import enAi from './public/locales/en/ai.json';
import enWhyMe from './public/locales/en/whyMe.json';
import enTechStack from './public/locales/en/techStack.json';
import enDevelopmentPhases from './public/locales/en/developmentPhases.json';
import enProblemSolution from './public/locales/en/problemSolution.json';
import enHeroVersions from './public/locales/en/heroVersions.json';

// Import Slovak page-specific translations
import skHome from './public/locales/sk/home.json';
import skAbout from './public/locales/sk/about.json';
import skProjects from './public/locales/sk/projects.json';
import skStack from './public/locales/sk/stack.json';
import skSkills from './public/locales/sk/skills.json';
import skLab from './public/locales/sk/lab.json';
import skContact from './public/locales/sk/contact.json';
import skAi from './public/locales/sk/ai.json';
import skWhyMe from './public/locales/sk/whyMe.json';
import skTechStack from './public/locales/sk/techStack.json';
import skDevelopmentPhases from './public/locales/sk/developmentPhases.json';
import skProblemSolution from './public/locales/sk/problemSolution.json';
import skHeroVersions from './public/locales/sk/heroVersions.json';
import skExperience from './public/locales/sk/experience.json';

// Import German page-specific translations
import deHome from './public/locales/de/home.json';
import deAbout from './public/locales/de/about.json';
import deProjects from './public/locales/de/projects.json';
import deStack from './public/locales/de/stack.json';
import deSkills from './public/locales/de/skills.json';
import deLab from './public/locales/de/lab.json';
import deContact from './public/locales/de/contact.json';
import deAi from './public/locales/de/ai.json';
import deHeroVersions from './public/locales/de/heroVersions.json';
import deWhyMe from './public/locales/de/whyMe.json';

// the translations
const resources = {
  en: {
    common: enCommon,
    home: enHome,
    about: enAbout,
    projects: enProjects,
    stack: enStack,
    skills: enSkills,
    lab: enLab,
    contact: enContact,
    ai: enAi,
    whyMe: enWhyMe,
    techStack: enTechStack,
    developmentPhases: enDevelopmentPhases,
    problemSolution: enProblemSolution,
    heroVersions: enHeroVersions
  },
  de: {
    common: deCommon,
    home: deHome,
    about: deAbout,
    projects: deProjects,
    stack: deStack,
    skills: deSkills,
    lab: deLab,
    contact: deContact,
    ai: deAi,
    whyMe: deWhyMe,
    heroVersions: deHeroVersions
  },
  sk: {
    common: skCommon,
    home: skHome,
    about: skAbout,
    projects: skProjects,
    stack: skStack,
    skills: skSkills,
    lab: skLab,
    contact: skContact,
    ai: skAi,
    whyMe: skWhyMe,
    techStack: skTechStack,
    developmentPhases: skDevelopmentPhases,
    problemSolution: skProblemSolution,
    heroVersions: skHeroVersions,
    experience: skExperience
  }
};

// Inicializácia i18n
i18n
  // Použitie react-i18next
  .use(initReactI18next)
  // Použitie backend pre načítavanie prekladov
  .use(Backend)
  // Použitie detektora jazyka
  .use(LanguageDetector)
  // Inicializácia
  .init({
    resources,
    fallbackLng: defaultLanguage,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false // nie je potrebné pre React, ktorý escapuje automaticky
    },
    // Nastavenia pre SSR
    react: {
      useSuspense: false,
      transWrapTextNodes: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'a', 'span', 'em', 'b']
    },
    // Použitie namespaces
    ns: ['common', 'home', 'about', 'projects', 'stack', 'skills', 'lab', 'contact', 'ai', 'whyMe', 'techStack', 'developmentPhases', 'problemSolution', 'heroVersions', 'experience'],
    defaultNS: 'common',
    // Detekcia jazyka
    detection: {
      // Priorita detekcie
      order: ['path', 'cookie', 'htmlTag', 'navigator'],
      // Názov cookie
      lookupCookie: 'i18next',
      // Cesta v URL
      lookupFromPathIndex: 0,
      // Cache jazyka
      caches: ['cookie']
    }
  });

export default i18n;
