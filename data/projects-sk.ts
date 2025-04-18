import { Project } from '../types';

export const projectsSk: Project[] = [
  // Pracovné projekty
  {
    id: 'python-ai-development',
    title: 'Vývoj AI v Pythone',
    description: 'Trénovanie neurónových sietí v Pythone pre analýzu dát z burzy, s funkciami na sťahovanie trhových dát a trénovanie modelov s využitím GPU akcelerácie.',
    image: '/images/projects/cuda.png',
    tags: ['Python', 'PyTorch', 'MySQL', 'AI', 'CUDA'],
    link: '',
    github: '',
    category: 'backend',
    projectType: 'personal',
    client: '',
    date: '2024',
    features: [
      'Spracovanie trhových dát v reálnom čase',
      'Trénovanie neurónových sietí s GPU akceleráciou',
      'Automatizované testovanie obchodných stratégií',
      'Implementácia vlastných technických indikátorov',
      'Optimalizácia výkonu pre analýzu vysokofrekvenčných dát'
    ],
    detailedDescription: 'Tento projekt zahŕňal vývoj sofistikovaného AI systému pre analýzu dát z burzy. Riešenie využíva PyTorch na vytváranie a trénovanie neurónových sietí s CUDA akceleráciou pre efektívne spracovanie veľkých dátových súborov. Systém obsahuje moduly pre získavanie dát, predspracovanie, trénovanie modelov a testovanie stratégií.',
    visualizerType: 'ai'
  },
  {
    id: 'odoo-development',
    title: 'Vývoj v Odoo',
    description: 'Vlastné Odoo rozšírenia pre výrobu, HR, nákup, predaj a fakturáciu s integráciami externých služieb. Špecializované moduly na optimalizáciu obchodných procesov a automatizáciu pracovných postupov.',
    image: '/images/projects/odoo.png',
    tags: ['Python', 'Odoo', 'XML', 'JSON', 'Docker', 'PostgreSQL', 'API Integration'],
    link: '',
    github: '',
    category: 'backend',
    projectType: 'work',
    client: '',
    date: '2024-Now', // Aktualizované
    features: [
      'Vlastný výrobný modul so sledovaním výroby v reálnom čase',
      'Integrovaný HR systém s monitorovaním dochádzky a výkonu',
      'Automatizovaný nákupný workflow so schvaľovacími procesmi',
      'Vylepšený predajný pipeline s CRM integráciou',
      'Vlastný reporting a analytický dashboard'
    ],
    detailedDescription: 'Tento projekt zahŕňal rozsiahlu customizáciu Odoo ERP systému pre špecifické požiadavky výrobnej spoločnosti. Práca zahŕňala vývoj vlastných modulov, rozšírenie existujúcej funkcionality a integráciu s externými systémami. Riešenie bolo kontajnerizované pomocou Dockeru pre jednoduchú implementáciu a škálovanie.',
    visualizerType: 'cms'
  },
  {
    id: 'bloomreach-website-redesign',
    title: 'Redizajn webstránky Bloomreach',
    description: 'Kompletný redizajn a implementácia Bloomreach.com pomocou Bloomreach Content CMS. Projekt zahŕňal vlastné Java backend rozšírenia, React + Next.js frontend s SSR a SPA funkcionalitou a integráciu s viacerými externými platformami (HubSpot, Zendesk, Skilljar, Greenhouse). Dôraz bol kladený na výkon, SEO, viacjazyčnú podporu a plynulý používateľský zážitok naprieč subdoménami.',
    image: '/images/projects/bloom.png',
    tags: ['Java', 'Spring', 'React', 'Next.js', 'CMS', 'SSR', 'SPA', 'Multilingual', 'Integration'],
    link: '',
    category: 'web',
    projectType: 'work',
    client: 'Bloomreach',
    date: '2021-2023',
    features: [
      'Responzívny dizajn s prístupom mobile-first',
      'Server-side rendering pre optimálny SEO výkon',
      'Viacjazyčná podpora s workflow pre preklad obsahu',
      'Integrácia s platformami pre marketingovú automatizáciu',
      'Vlastné CMS rozšírenia pre špecializované typy obsahu'
    ],
    detailedDescription: 'Tento projekt zahŕňal kompletný redizajn korporátnej webstránky Bloomreach pomocou ich vlastnej CMS platformy. Implementácia zahŕňala vlastné Java backend rozšírenia pre podporu špecifických obchodných požiadaviek a moderný React frontend s Next.js pre optimálny výkon. Stránka podporuje viacero jazykov a integruje sa s rôznymi externými platformami pre marketing, podporu a nábor.',
    visualizerType: 'web'
  },
  {
    id: 'financial-solutions-platform',
    title: 'Platforma finančných riešení',
    description: 'Interná FinTech aplikácia umožňujúca predajcom áut efektívne porovnávať a spravovať ponuky lízingu a poistenia od viacerých finančných inštitúcií. Funkcie zahŕňajú výpočty ponúk v reálnom čase, integrované podávanie žiadostí a dynamické používateľské rozhranie prispôsobené pre použitie v pobočkách.',
    image: '/images/projects/fin.png',
    tags: ['ASP.NET Core', 'C#', 'REST API', 'SOAP', 'FinTech', 'Leasing', 'Insurance'],
    link: '',
    category: 'web',
    projectType: 'work',
    client: '',
    date: '2020-2023',
    features: [
      'Výpočty ponúk lízingu a poistenia v reálnom čase',
      'Integrácia s viacerými finančnými inštitúciami',
      'Automatizované generovanie a spracovanie dokumentov',
      'Používateľsky prívetivé rozhranie pre použitie v pobočkách',
      'Komplexný reporting a analytika'
    ],
    detailedDescription: 'Táto platforma finančných riešení bola vyvinutá pre predajcov áut na zefektívnenie procesu ponúkania lízingových a poistných produktov zákazníkom. Aplikácia sa integruje s viacerými finančnými inštitúciami na poskytovanie ponúk v reálnom čase a umožňuje predajcom spravovať celý proces žiadostí digitálne. Platforma zahŕňa funkcie pre generovanie dokumentov, podávanie žiadostí a sledovanie stavu.',
    visualizerType: 'web'
  },
  {
    id: 'corda-blockchain-development',
    title: 'Vývoj blockchain aplikácie v Corda',
    description: 'Decentralizovaná aplikácia (CorDapp) pre sledovanie dodávateľského reťazca pomocou blockchain technológie Corda, so smart kontraktmi a interakciami medzi viacerými uzlami.',
    image: '/images/projects/corda.png',
    tags: ['Kotlin', 'R3 Corda', 'Blockchain', 'Gradle'],
    link: '',
    github: '',
    category: 'backend',
    projectType: 'personal',
    client: '',
    date: '2024',
    features: [
      'Bezpečné a transparentné sledovanie dodávateľského reťazca',
      'Smart kontrakty pre automatizovanú obchodnú logiku',
      'Validácia transakcií viacerými stranami',
      'Integrácia s existujúcimi logistickými systémami',
      'Nemenný audit trail pre účely dodržiavania predpisov'
    ],
    detailedDescription: 'Tento projekt zahŕňal vývoj decentralizovanej aplikácie pomocou blockchain technológie R3 Corda pre sledovanie dodávateľského reťazca. Riešenie umožňuje viacerým stranám v dodávateľskom reťazci bezpečne zdieľať informácie a vykonávať transakcie prostredníctvom smart kontraktov. Aplikácia poskytuje transparentnosť a sledovateľnosť v celom dodávateľskom reťazci pri zachovaní súkromia údajov, kde je to potrebné.',
    visualizerType: 'blockchain'
  },
  {
    id: 'plc-configuration-software',
    title: 'Softvér pre konfiguráciu PLC',
    description: 'WPF aplikácia pre modelovanie konfigurácie PLC, s funkciami pre konfiguráciu zariadení, monitorovanie stavu a možnosťami emulácie.',
    image: '/images/projects/plc.png',
    tags: ['C#', '.NET WPF', 'XML'],
    link: '',
    category: 'desktop',
    projectType: 'work',
    client: '',
    date: '2018-2020',
    features: [
      'Intuitívne rozhranie pre konfiguráciu PLC',
      'Monitorovanie stavu zariadení v reálnom čase',
      'Validácia konfigurácie a detekcia chýb',
      'Simulačné prostredie pre testovanie',
      'Možnosti exportu a importu konfigurácie'
    ],
    detailedDescription: 'Táto desktopová aplikácia bola vyvinutá pre konfiguráciu a monitorovanie programovateľných logických kontrolérov (PLC) v priemyselných prostrediach. Softvér poskytuje intuitívne rozhranie pre inžinierov na konfiguráciu zariadení, monitorovanie ich stavu v reálnom čase a testovanie konfigurácií v simulačnom prostredí pred nasadením. Aplikácia podporuje rôzne modely PLC a protokoly.',
    visualizerType: 'web'
  },
  {
    id: 'waste-management-erp',
    title: 'ERP systém pre odpadové hospodárstvo',
    description: 'Špecializovaný ERP systém pre odpadové hospodárstvo s modulmi pre logistiku, skladové hospodárstvo, fakturáciu a reporting s offline funkcionalitou.',
    image: '/images/projects/waste.png',
    tags: ['Java', 'JavaFX', 'PHP Symfony', 'MySQL', 'DevOps'],
    link: '',
    category: 'desktop',
    projectType: 'work',
    client: 'Waste Management Company',
    date: '2017-2019',
    features: [
      'Plánovanie a optimalizácia trás pre zber odpadu',
      'Správa inventára pre recyklačné zariadenia',
      'Správa zákazníkov a plánovanie služieb',
      'Automatizovaná fakturácia a sledovanie platieb',
      'Komplexný reporting pre regulačné účely'
    ],
    detailedDescription: 'Tento špecializovaný ERP systém bol vyvinutý pre spoločnosť odpadového hospodárstva na zefektívnenie ich prevádzky. Riešenie zahŕňa moduly pre logistiku, skladové hospodárstvo, správu zákazníkov, fakturáciu a reporting. Desktopová aplikácia poskytuje offline funkcionalitu pre terénne operácie, zatiaľ čo backendový systém zabezpečuje synchronizáciu a integritu údajov.',
    visualizerType: 'web'
  }
];
