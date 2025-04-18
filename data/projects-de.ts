import { Project } from '../types';

export const projectsDe: Project[] = [
  // Berufliche Projekte
  {
    id: 'python-ai-development',
    title: 'Python KI-Entwicklung',
    description: 'Neuronales Netzwerktraining in Python für die Analyse von Börsenhandelsdaten, mit Funktionen zum Herunterladen von Marktdaten und zum Training von Modellen mit GPU-Beschleunigung.',
    image: '/images/projects/cuda.png',
    tags: ['Python', 'PyTorch', 'MySQL', 'AI', 'CUDA'],
    link: '',
    github: '',
    category: 'backend',
    projectType: 'personal',
    client: '',
    date: '2024',
    features: [
      'Echtzeit-Verarbeitung von Marktdaten',
      'GPU-beschleunigtes Training neuronaler Netze',
      'Automatisiertes Backtesting von Handelsstrategien',
      'Implementierung benutzerdefinierter technischer Indikatoren',
      'Leistungsoptimierung für hochfrequente Datenanalyse'
    ],
    detailedDescription: 'Dieses Projekt umfasste die Entwicklung eines ausgeklügelten KI-Systems zur Analyse von Börsenhandelsdaten. Die Lösung nutzt PyTorch zum Aufbau und Training neuronaler Netze mit CUDA-Beschleunigung für die effiziente Verarbeitung großer Datensätze. Das System umfasst Module für Datenerfassung, Vorverarbeitung, Modelltraining und Strategietests.',
    visualizerType: 'ai'
  },
  {
    id: 'odoo-development',
    title: 'Odoo-Entwicklung',
    description: 'Benutzerdefinierte Odoo-Erweiterungen für Fertigung, HR, Einkauf, Vertrieb und Rechnungsstellung mit Integration externer Dienste. Spezialisierte Module zur Optimierung von Geschäftsprozessen und Automatisierung von Arbeitsabläufen.',
    image: '/images/projects/odoo.png',
    tags: ['Python', 'Odoo', 'XML', 'JSON', 'Docker', 'PostgreSQL', 'API Integration'],
    link: '',
    github: '',
    category: 'backend',
    projectType: 'work',
    client: '',
    date: '2024-Now',
    features: [
      'Benutzerdefiniertes Fertigungsmodul mit Echtzeit-Produktionsverfolgung',
      'Integriertes HR-System mit Anwesenheits- und Leistungsüberwachung',
      'Automatisierter Einkaufsworkflow mit Genehmigungsprozessen',
      'Erweiterter Vertriebsprozess mit CRM-Integration',
      'Benutzerdefiniertes Reporting und Analyse-Dashboard'
    ],
    detailedDescription: 'Dieses Projekt umfasste die umfangreiche Anpassung des Odoo-ERP-Systems, um spezifische Geschäftsanforderungen eines Fertigungsunternehmens zu erfüllen. Die Arbeit umfasste die Entwicklung benutzerdefinierter Module, die Erweiterung bestehender Funktionalitäten und die Integration mit externen Systemen. Die Lösung wurde mit Docker containerisiert für einfache Bereitstellung und Skalierung.',
    visualizerType: 'cms'
  },
  {
    id: 'bloomreach-website-redesign',
    title: 'Bloomreach Website-Neugestaltung',
    description: 'Komplette Neugestaltung und Implementierung von Bloomreach.com mit Bloomreach Content CMS. Das Projekt umfasste benutzerdefinierte Java-Backend-Erweiterungen, ein React + Next.js-Frontend mit SSR- und SPA-Funktionen und die Integration mit mehreren externen Plattformen (HubSpot, Zendesk, Skilljar, Greenhouse). Der Schwerpunkt lag auf Leistung, SEO, mehrsprachiger Unterstützung und nahtloser Benutzererfahrung über Subdomains hinweg.',
    image: '/images/projects/bloom.png',
    tags: ['Java', 'Spring', 'React', 'Next.js', 'CMS', 'SSR', 'SPA', 'Multilingual', 'Integration'],
    link: '',
    category: 'web',
    projectType: 'work',
    client: 'Bloomreach',
    date: '2021-2023',
    features: [
      'Responsives Design mit Mobile-First-Ansatz',
      'Server-Side Rendering für optimale SEO-Leistung',
      'Mehrsprachige Unterstützung mit Content-Übersetzungs-Workflow',
      'Integration mit Marketing-Automatisierungsplattformen',
      'Benutzerdefinierte CMS-Erweiterungen für spezialisierte Inhaltstypen'
    ],
    detailedDescription: 'Dieses Projekt umfasste eine komplette Neugestaltung der Bloomreach-Unternehmenswebsite mit ihrer eigenen CMS-Plattform. Die Implementierung umfasste benutzerdefinierte Java-Backend-Erweiterungen zur Unterstützung spezifischer Geschäftsanforderungen und ein modernes React-Frontend mit Next.js für optimale Leistung. Die Website unterstützt mehrere Sprachen und integriert sich mit verschiedenen externen Plattformen für Marketing, Support und Rekrutierung.',
    visualizerType: 'web'
  },
  {
    id: 'financial-solutions-platform',
    title: 'Finanzlösungsplattform',
    description: 'Interne FinTech-Anwendung, die es Autohändlern ermöglicht, Leasing- und Versicherungsangebote von mehreren Finanzinstituten effizient zu vergleichen und zu verwalten. Zu den Funktionen gehören Echtzeit-Angebotsberechnungen, integrierte Antragseinreichungen und eine dynamische Benutzeroberfläche für den Einsatz in Filialen.',
    image: '/images/projects/fin.png',
    tags: ['ASP.NET Core', 'C#', 'REST API', 'SOAP', 'FinTech', 'Leasing', 'Insurance'],
    link: '',
    category: 'web',
    projectType: 'work',
    client: '',
    date: '2020-2023',
    features: [
      'Echtzeit-Berechnung von Leasing- und Versicherungsangeboten',
      'Integration mit mehreren Finanzinstituten',
      'Automatisierte Dokumentenerstellung und -verarbeitung',
      'Benutzerfreundliche Oberfläche für den Einsatz in Filialen',
      'Umfassendes Reporting und Analyse'
    ],
    detailedDescription: 'Diese Finanzlösungsplattform wurde für Autohändler entwickelt, um den Prozess des Anbietens von Leasing- und Versicherungsprodukten für Kunden zu optimieren. Die Anwendung integriert sich mit mehreren Finanzinstituten, um Echtzeit-Angebote bereitzustellen, und ermöglicht es Händlern, den gesamten Antragsprozess digital zu verwalten. Die Plattform umfasst Funktionen für Dokumentenerstellung, Antragseinreichung und Statusverfolgung.',
    visualizerType: 'web'
  },
  {
    id: 'corda-blockchain-development',
    title: 'Corda Blockchain-Entwicklung',
    description: 'Eine dezentrale Anwendung (CorDapp) für die Lieferkettenverfolgung mit Corda-Blockchain-Technologie, mit Smart Contracts und Multi-Node-Interaktionen.',
    image: '/images/projects/corda.png',
    tags: ['Kotlin', 'R3 Corda', 'Blockchain', 'Gradle'],
    link: '',
    github: '',
    category: 'backend',
    projectType: 'personal',
    client: '',
    date: '2024',
    features: [
      'Sichere und transparente Lieferkettenverfolgung',
      'Smart Contracts für automatisierte Geschäftslogik',
      'Multi-Party-Transaktionsvalidierung',
      'Integration mit bestehenden Logistiksystemen',
      'Unveränderlicher Prüfpfad für Compliance-Zwecke'
    ],
    detailedDescription: 'Dieses Projekt umfasste die Entwicklung einer dezentralen Anwendung mit R3 Corda-Blockchain-Technologie für die Lieferkettenverfolgung. Die Lösung ermöglicht es mehreren Parteien in der Lieferkette, Informationen sicher auszutauschen und Transaktionen über Smart Contracts auszuführen. Die Anwendung bietet Transparenz und Rückverfolgbarkeit in der gesamten Lieferkette bei gleichzeitiger Wahrung der Datenprivatsphäre, wo erforderlich.',
    visualizerType: 'blockchain'
  },
  {
    id: 'plc-configuration-software',
    title: 'SPS-Konfigurationssoftware',
    description: 'WPF-Anwendung für die SPS-Konfigurationsmodellierung, mit Funktionen für Gerätekonfiguration, Statusüberwachung und Emulationsfähigkeiten.',
    image: '/images/projects/plc.png',
    tags: ['C#', '.NET WPF', 'XML'],
    link: '',
    category: 'desktop',
    projectType: 'work',
    client: '',
    date: '2018-2020',
    features: [
      'Intuitive Oberfläche für SPS-Konfiguration',
      'Echtzeit-Gerätestatusüberwachung',
      'Konfigurationsvalidierung und Fehlererkennung',
      'Simulationsumgebung für Tests',
      'Konfigurationsexport- und -importfunktionen'
    ],
    detailedDescription: 'Diese Desktop-Anwendung wurde für die Konfiguration und Überwachung von Speicherprogrammierbaren Steuerungen (SPS) in industriellen Umgebungen entwickelt. Die Software bietet eine intuitive Oberfläche für Ingenieure zur Konfiguration von Geräten, Überwachung ihres Status in Echtzeit und zum Testen von Konfigurationen in einer Simulationsumgebung vor der Bereitstellung. Die Anwendung unterstützt verschiedene SPS-Modelle und Protokolle.',
    visualizerType: 'web'
  },
  {
    id: 'waste-management-erp',
    title: 'Abfallwirtschaft-ERP',
    description: 'Spezialisiertes ERP-System für die Abfallwirtschaft mit Modulen für Logistik, Lagerverwaltung, Rechnungsstellung und Berichterstattung mit Offline-Funktionen.',
    image: '/images/projects/waste.png',
    tags: ['Java', 'JavaFX', 'PHP Symfony', 'MySQL', 'DevOps'],
    link: '',
    category: 'desktop',
    projectType: 'work',
    client: 'Waste Management Company',
    date: '2017-2019',
    features: [
      'Routenplanung und -optimierung für die Abfallsammlung',
      'Bestandsverwaltung für Recyclinganlagen',
      'Kundenverwaltung und Serviceplanung',
      'Automatisierte Rechnungsstellung und Zahlungsverfolgung',
      'Umfassende Berichterstattung für regulatorische Compliance'
    ],
    detailedDescription: 'Dieses spezialisierte ERP-System wurde für ein Abfallwirtschaftsunternehmen entwickelt, um deren Betrieb zu optimieren. Die Lösung umfasst Module für Logistik, Lagerverwaltung, Kundenverwaltung, Rechnungsstellung und Berichterstattung. Die Desktop-Anwendung bietet Offline-Funktionen für Feldoperationen, während das Backend-System die Datensynchronisation und -integrität sicherstellt.',
    visualizerType: 'web'
  }
];
