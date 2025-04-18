import { Project } from '../types';
import { projectsEn } from './projects-en';
import { projectsSk } from './projects-sk';
import { projectsDe } from './projects-de';

// Helper function to get projects based on language
export const getProjectsByLanguage = (language: string): Project[] => {
  switch (language) {
    case 'sk':
      return projectsSk;
    case 'de':
      return projectsDe;
    case 'en':
    default:
      return projectsEn;
  }
};

// Default export for backward compatibility
export const projects: Project[] = [
  // Work Projects
  {
    id: 'python-ai-development',
    title: 'Python AI Development',
    description: 'Neural network training in Python for stock exchange data analysis, with features for downloading market data and training models using GPU acceleration.',
    image: '/images/projects/cuda.png',
    tags: ['Python', 'PyTorch', 'MySQL', 'AI', 'CUDA'],
    link: '',
    github: '',
    category: 'backend',
    projectType: 'personal',
    client: '',
    date: '2024',
    features: [
      'Real-time market data processing',
      'GPU-accelerated neural network training',
      'Automated trading strategy backtesting',
      'Custom technical indicators implementation',
      'Performance optimization for high-frequency data analysis'
    ],
    detailedDescription: 'This project involved developing a sophisticated AI system for analyzing stock market data. The solution leverages PyTorch for building and training neural networks, with CUDA acceleration for handling large datasets efficiently. The system includes modules for data acquisition, preprocessing, model training, and strategy backtesting.',
    visualizerType: 'ai'
  },
  {
    id: 'odoo-development',
    title: 'Odoo Development',
    description: 'Custom Odoo extensions for manufacturing, HR, purchasing, sales, and invoicing with external service integrations. Specialized modules to optimize business processes and automate workflows.',
    image: '/images/projects/odoo.png',
    tags: ['Python', 'Odoo', 'XML', 'JSON', 'Docker', 'PostgreSQL', 'API Integration'],
    link: '',
    github: '',
    category: 'backend',
    projectType: 'work',
    client: '',
    date: '2024-Now',
    features: [
      'Custom manufacturing module with real-time production tracking',
      'Integrated HR system with attendance and performance monitoring',
      'Automated purchasing workflow with approval processes',
      'Enhanced sales pipeline with CRM integration',
      'Custom reporting and analytics dashboard'
    ],
    detailedDescription: 'This project involved extensive customization of the Odoo ERP system to meet specific business requirements for a manufacturing company. The work included developing custom modules, extending existing functionality, and integrating with external systems. The solution was containerized using Docker for easy deployment and scaling.',
    visualizerType: 'cms'
  },
  {
    id: 'bloomreach-website-redesign',
    title: 'Bloomreach Website Redesign',
    description: 'Complete redesign and implementation of Bloomreach.com using Bloomreach Content CMS. The project included custom Java backend extensions, a React + Next.js frontend with SSR and SPA capabilities, and integration with multiple external platforms (HubSpot, Zendesk, Skilljar, Greenhouse). Emphasis was placed on performance, SEO, multilingual support, and seamless user experience across subdomains.',
    image: '/images/projects/bloom.png',
    tags: ['Java', 'Spring', 'React', 'Next.js', 'CMS', 'SSR', 'SPA', 'Multilingual', 'Integration'],
    link: '',
    category: 'web',
    projectType: 'work',
    client: 'Bloomreach',
    date: '2021-2023',
    features: [
      'Responsive design with mobile-first approach',
      'Server-side rendering for optimal SEO performance',
      'Multilingual support with content translation workflow',
      'Integration with marketing automation platforms',
      'Custom CMS extensions for specialized content types'
    ],
    detailedDescription: 'This project involved a complete redesign of the Bloomreach corporate website using their own CMS platform. The implementation included custom Java backend extensions to support specific business requirements and a modern React frontend with Next.js for optimal performance. The site supports multiple languages and integrates with various external platforms for marketing, support, and recruitment.',
    visualizerType: 'web'
  },
  {
    id: 'financial-solutions-platform',
    title: 'Financial Solutions Platform',
    description: 'Internal FinTech application enabling car dealers to efficiently compare and manage leasing and insurance offers from multiple financial institutions. Features include real-time offer calculations, integrated application submissions, and dynamic UI tailored for in-branch use.',
    image: '/images/projects/fin.png',
    tags: ['ASP.NET Core', 'C#', 'REST API', 'SOAP', 'FinTech', 'Leasing', 'Insurance'],
    link: '',
    category: 'web',
    projectType: 'work',
    client: '',
    date: '2020-2023',
    features: [
      'Real-time leasing and insurance offer calculations',
      'Integration with multiple financial institutions',
      'Automated document generation and processing',
      'User-friendly interface for in-branch use',
      'Comprehensive reporting and analytics'
    ],
    detailedDescription: 'This financial solutions platform was developed for car dealerships to streamline the process of offering leasing and insurance products to customers. The application integrates with multiple financial institutions to provide real-time offers and enables dealers to manage the entire application process digitally. The platform includes features for document generation, application submission, and status tracking.',
    visualizerType: 'web'
  },
  {
    id: 'corda-blockchain-development',
    title: 'Corda Blockchain Development',
    description: 'A decentralized application (CorDapp) for supply chain tracking using Corda blockchain technology, with smart contracts and multi-node interactions.',
    image: '/images/projects/corda.png',
    tags: ['Kotlin', 'R3 Corda', 'Blockchain', 'Gradle'],
    link: '',
    github: '',
    category: 'backend',
    projectType: 'personal',
    client: '',
    date: '2024',
    features: [
      'Secure and transparent supply chain tracking',
      'Smart contracts for automated business logic',
      'Multi-party transaction validation',
      'Integration with existing logistics systems',
      'Immutable audit trail for compliance purposes'
    ],
    detailedDescription: 'This project involved developing a decentralized application using R3 Corda blockchain technology for supply chain tracking. The solution enables multiple parties in the supply chain to securely share information and execute transactions through smart contracts. The application provides transparency and traceability throughout the supply chain while maintaining data privacy where required.',
    visualizerType: 'blockchain'
  },
  {
    id: 'plc-configuration-software',
    title: 'PLC Configuration Software',
    description: 'WPF application for PLC configuration modeling, with features for device configuration, status monitoring, and emulation capabilities.',
    image: '/images/projects/plc.png',
    tags: ['C#', '.NET WPF', 'XML'],
    link: '',
    category: 'desktop',
    projectType: 'work',
    client: '',
    date: '2018-2020',
    features: [
      'Intuitive interface for PLC configuration',
      'Real-time device status monitoring',
      'Configuration validation and error detection',
      'Simulation environment for testing',
      'Configuration export and import capabilities'
    ],
    detailedDescription: 'This desktop application was developed for configuring and monitoring Programmable Logic Controllers (PLCs) in industrial environments. The software provides an intuitive interface for engineers to configure devices, monitor their status in real-time, and test configurations in a simulation environment before deployment. The application supports various PLC models and protocols.',
    visualizerType: 'web'
  },
  {
    id: 'waste-management-erp',
    title: 'Waste Management ERP',
    description: 'Specialized ERP system for waste management with modules for logistics, warehouse management, invoicing, and reporting with offline capabilities.',
    image: '/images/projects/waste.png',
    tags: ['Java', 'JavaFX', 'PHP Symfony', 'MySQL', 'DevOps'],
    link: '',
    category: 'desktop',
    projectType: 'work',
    client: 'Waste Management Company',
    date: '2017-2019',
    features: [
      'Route planning and optimization for waste collection',
      'Inventory management for recycling facilities',
      'Customer management and service scheduling',
      'Automated invoicing and payment tracking',
      'Comprehensive reporting for regulatory compliance'
    ],
    detailedDescription: 'This specialized ERP system was developed for a waste management company to streamline their operations. The solution includes modules for logistics, warehouse management, customer management, invoicing, and reporting. The desktop application provides offline capabilities for field operations, while the backend system ensures data synchronization and integrity.',
    visualizerType: 'web'
  }
];
