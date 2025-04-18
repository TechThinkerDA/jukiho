'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FiZoomIn, FiZoomOut, FiMaximize } from 'react-icons/fi';

interface SiteNode {
  id: string;
  label: string;
  path: string;
}

interface SiteEdge {
  source: string;
  target: string;
}

interface InteractiveSiteMapProps {
  nodes: SiteNode[];
  edges: SiteEdge[];
}

const InteractiveSiteMap: React.FC<InteractiveSiteMapProps> = ({ nodes, edges }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cyRef = useRef<any>(null);
  const [ctrlPressed, setCtrlPressed] = useState(false);
  const [tooltipContent, setTooltipContent] = useState<{text: string, x: number, y: number} | null>(null);

  useEffect(() => {
    // Dynamic import of cytoscape to avoid SSR issues
    const initCytoscape = async () => {
      try {
        const cytoscape = (await import('cytoscape')).default;

        if (containerRef.current && !cyRef.current) {
          cyRef.current = cytoscape({
            container: containerRef.current,
            style: [
              {
                selector: 'node',
                style: {
                  'background-color': '#4f46e5',
                  'label': 'data(label)',
                  'color': '#fff',
                  'text-valign': 'center',
                  'text-halign': 'center',
                  'font-size': '14px',
                  'text-outline-color': '#4f46e5',
                  'text-outline-width': 2,
                  'width': function(node) {
                    // Get the label text
                    const label = node.data('label');
                    // Calculate width based on text length, with a minimum width
                    return Math.max(label.length * 8, 120) + 20;
                  },
                  'height': 40,
                  'shape': 'roundrectangle',
                  'text-max-width': '120px',
                  'text-overflow-wrap': 'ellipsis',
                  'padding': '5px',
                  'text-halign': 'center',
                  'text-valign': 'center'
                }
              },
              {
                selector: 'node:selected',
                style: {
                  'background-color': '#14b8a6',
                  'text-outline-color': '#14b8a6',
                }
              },
              {
                selector: 'edge',
                style: {
                  'width': 2,
                  'line-color': '#888',
                  'target-arrow-color': '#888',
                  'target-arrow-shape': 'triangle',
                  'curve-style': 'bezier'
                }
              }
            ],
            elements: {
              nodes: nodes.map(node => ({
                data: {
                  id: node.id,
                  label: node.label,
                  path: node.path
                }
              })),
              edges: edges.map(edge => ({
                data: {
                  source: edge.source,
                  target: edge.target
                }
              }))
            },
            layout: {
              name: 'breadthfirst',
              directed: true,
              padding: 10,
              spacingFactor: 1.5,
              animate: true
            }
          });

          // Add click event to navigate to the page
          cyRef.current.on('tap', 'node', function(evt: any) {
            const node = evt.target;
            const path = node.data('path');
            if (path) {
              window.location.href = path;
            }
          });

          // Add hover effects
          cyRef.current.on('mouseover', 'node', function(evt: any) {
            const node = evt.target;
            node.style({
              'background-color': '#14b8a6',
              'text-outline-color': '#14b8a6',
            });

            // Show tooltip for truncated text
            const label = node.data('label');
            const position = node.renderedPosition();
            setTooltipContent({
              text: label,
              x: position.x,
              y: position.y - 50
            });
          });

          cyRef.current.on('mouseout', 'node', function(evt: any) {
            const node = evt.target;
            if (!node.selected()) {
              node.style({
                'background-color': '#4f46e5',
                'text-outline-color': '#4f46e5',
              });
            }
            setTooltipContent(null);
          });

          // Disable mousewheel zoom by default
          cyRef.current.userZoomingEnabled(false);

          // Add keyboard event listeners for Ctrl key
          const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Control') {
              setCtrlPressed(true);
              if (cyRef.current) {
                cyRef.current.userZoomingEnabled(true);
              }
            }
          };

          const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key === 'Control') {
              setCtrlPressed(false);
              if (cyRef.current) {
                cyRef.current.userZoomingEnabled(false);
              }
            }
          };

          window.addEventListener('keydown', handleKeyDown);
          window.addEventListener('keyup', handleKeyUp);

          // Clean up event listeners
          return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
          };
        }
      } catch (error) {
        console.error('Failed to load Cytoscape:', error);
      }
    };

    initCytoscape();

    // Cleanup function
    return () => {
      if (cyRef.current) {
        cyRef.current.destroy();
        cyRef.current = null;
      }
    };
  }, [nodes, edges]);

  // Zoom control functions
  const zoomIn = () => {
    if (cyRef.current) {
      cyRef.current.zoom(cyRef.current.zoom() * 1.2);
    }
  };

  const zoomOut = () => {
    if (cyRef.current) {
      cyRef.current.zoom(cyRef.current.zoom() / 1.2);
    }
  };

  const resetZoom = () => {
    if (cyRef.current) {
      cyRef.current.fit();
    }
  };

  return (
    <div className="relative w-full h-[600px] bg-[#f9fafb] dark:bg-gray-800 rounded-lg overflow-hidden border border-[#e5e7eb] dark:border-gray-700">
      <div ref={containerRef} className="w-full h-full" />

      {/* Zoom controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
        <button
          onClick={zoomIn}
          className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          aria-label="Zoom in"
        >
          <FiZoomIn className="text-gray-700 dark:text-gray-200" size={20} />
        </button>
        <button
          onClick={zoomOut}
          className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          aria-label="Zoom out"
        >
          <FiZoomOut className="text-gray-700 dark:text-gray-200" size={20} />
        </button>
        <button
          onClick={resetZoom}
          className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          aria-label="Reset zoom"
        >
          <FiMaximize className="text-gray-700 dark:text-gray-200" size={20} />
        </button>
      </div>

      {/* Ctrl key indicator */}
      <div className="absolute bottom-4 left-4 z-10">
        <div className={`px-3 py-1.5 rounded-md text-sm ${ctrlPressed ? 'bg-[#4f46e5] text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}>
          {ctrlPressed ? 'Ctrl pressed - Zoom enabled' : 'Hold Ctrl to zoom'}
        </div>
      </div>

      {/* Tooltip for node labels */}
      {tooltipContent && (
        <div
          className="absolute z-20 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-md shadow-lg text-sm text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 pointer-events-none"
          style={{
            left: tooltipContent.x,
            top: tooltipContent.y,
            transform: 'translate(-50%, -100%)'
          }}
        >
          {tooltipContent.text}
        </div>
      )}
    </div>
  );
};

export default InteractiveSiteMap;
