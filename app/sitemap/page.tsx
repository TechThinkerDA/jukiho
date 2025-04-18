'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatedSection } from '../../components/ui/AnimatedSection';
import dynamic from 'next/dynamic';

// Dynamically import the InteractiveSiteMap component with no SSR
const InteractiveSiteMap = dynamic(
  () => import('../../components/InteractiveSiteMap'),
  { ssr: false }
);

// Define the site structure
const siteStructure = [
  {
    name: 'Home',
    path: '/',
    children: []
  },
  {
    name: 'About',
    path: '/about',
    children: []
  },
  {
    name: 'Projects',
    path: '/projects',
    children: [
      {
        name: 'Odoo Development',
        path: '/projects/odoo-development'
      },
      {
        name: 'Financial Solutions Platform',
        path: '/projects/financial-solutions'
      },
      {
        name: 'Bloomreach Website Redesign',
        path: '/projects/bloomreach-redesign'
      },
      {
        name: 'JavaFX ERP System',
        path: '/projects/javafx-erp'
      },
      {
        name: 'WPF Configuration Tool',
        path: '/projects/wpf-configuration'
      },
      {
        name: 'Python AI Development',
        path: '/projects/python-ai'
      },
      {
        name: 'Corda Blockchain',
        path: '/projects/corda-blockchain'
      }
    ]
  },
  {
    name: 'Contact',
    path: '/contact',
    children: []
  },
  {
    name: 'Site Map',
    path: '/sitemap',
    children: []
  }
];

// Prepare data for Cytoscape
const prepareGraphData = () => {
  const nodes = [];
  const edges = [];

  // Add main nodes
  siteStructure.forEach(section => {
    nodes.push({
      id: section.name.toLowerCase().replace(/\s+/g, '-'),
      label: section.name,
      path: section.path
    });

    // Add child nodes and edges
    section.children.forEach(child => {
      const childId = child.name.toLowerCase().replace(/\s+/g, '-');
      nodes.push({
        id: childId,
        label: child.name,
        path: child.path
      });

      // Add edge from parent to child
      edges.push({
        source: section.name.toLowerCase().replace(/\s+/g, '-'),
        target: childId
      });
    });

    // Add edge from Home to each main section (except Home itself)
    if (section.name !== 'Home') {
      edges.push({
        source: 'home',
        target: section.name.toLowerCase().replace(/\s+/g, '-')
      });
    }
  });

  return { nodes, edges };
};

const { nodes, edges } = prepareGraphData();

export default function SiteMapPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="flex flex-col gap-16 min-h-screen"><div className="animate-pulse h-screen w-full bg-gray-100 dark:bg-gray-800 rounded-lg"></div></div>;
  }

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">Site Map</h1>
            <p className="text-xl text-[#111827]/80 dark:text-[#f9fafb]/80 mb-8">
              Interactive visualization of the website structure
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive Cytoscape Visualization */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="bg-[#f9fafb] dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-[#e5e7eb] dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">Interactive Site Map</h2>
              <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 mb-6">
                Click on any node to navigate to that page. Drag nodes to rearrange the visualization.
              </p>

              {/* Cytoscape Interactive Visualization */}
              <InteractiveSiteMap nodes={nodes} edges={edges} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Traditional Site Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="bg-[#f9fafb] dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-[#e5e7eb] dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-[#111827] dark:text-[#f9fafb]">Traditional Site Map</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {siteStructure.map((section) => (
                  <div key={section.name} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-600">
                    <h3 className="text-xl font-bold mb-4 text-[#111827] dark:text-[#f9fafb]">
                      <Link href={section.path} className="hover:text-[#4f46e5] dark:hover:text-[#14b8a6] transition-colors">
                        {section.name}
                      </Link>
                    </h3>

                    {section.children.length > 0 && (
                      <ul className="space-y-2 text-[#111827]/80 dark:text-[#f9fafb]/80">
                        {section.children.map((child) => (
                          <li key={child.name}>
                            <Link href={child.path} className="hover:text-[#4f46e5] dark:hover:text-[#14b8a6] transition-colors">
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
