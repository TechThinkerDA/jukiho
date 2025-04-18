// 'use client';
//
// import React, { useEffect, useRef, useState } from 'react';
// import { FiZoomIn, FiZoomOut, FiMaximize, FiRefreshCw, FiGrid, FiLayout } from 'react-icons/fi';
//
// interface CytoscapeShowcaseProps {
//   height?: number;
//   showcaseType?: 'basic' | 'advanced' | 'layouts' | 'styles';
// }
//
// const CytoscapeShowcase: React.FC<CytoscapeShowcaseProps> = ({
//   height = 400,
//   showcaseType = 'basic'
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const cyRef = useRef<any>(null);
//   const [layout, setLayout] = useState('breadthfirst');
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//
//   useEffect(() => {
//     // Dynamic import of cytoscape to avoid SSR issues
//     const initCytoscape = async () => {
//       try {
//         setIsLoading(true);
//         const cytoscape = (await import('cytoscape')).default;
//
//         // Small delay to ensure the container is properly rendered
//         setTimeout(() => {
//           if (containerRef.current && !cyRef.current) {
//             // Create basic elements for the graph
//             const elements = getElements(showcaseType);
//
//             // Initialize Cytoscape
//             cyRef.current = cytoscape({
//               container: containerRef.current,
//               elements,
//               style: getStyles(showcaseType),
//               layout: getLayout(layout),
//               wheelSensitivity: 0.3,
//               minZoom: 0.5,
//               maxZoom: 2,
//               boxSelectionEnabled: false,
//             });
//
//             // Add interaction events
//             addInteractionEvents();
//
//             // Ensure the graph is properly rendered
//             setTimeout(() => {
//               if (cyRef.current) {
//                 cyRef.current.resize();
//                 cyRef.current.fit();
//               }
//             }, 100);
//           }
//           setIsLoading(false);
//         }, 300);
//       } catch (error) {
//         console.error('Failed to load Cytoscape:', error);
//         setError('Failed to load visualization. Please try again later.');
//         setIsLoading(false);
//       }
//     };
//
//     initCytoscape();
//
//     // Cleanup function
//     return () => {
//       if (cyRef.current) {
//         cyRef.current.destroy();
//         cyRef.current = null;
//       }
//     };
//   }, [showcaseType]);
//
//   // Update layout when it changes
//   useEffect(() => {
//     if (cyRef.current) {
//       cyRef.current.layout(getLayout(layout)).run();
//     }
//   }, [layout]);
//
//   // Add interaction events to the graph
//   const addInteractionEvents = () => {
//     if (!cyRef.current) return;
//
//     // Node hover effects
//     cyRef.current.on('mouseover', 'node', function(evt: any) {
//       const node = evt.target;
//       node.style({
//         'background-color': '#14b8a6',
//         'border-color': '#0f766e',
//         'border-width': 3,
//         'font-weight': 'bold',
//       });
//
//       // Highlight connected edges
//       const connectedEdges = node.connectedEdges();
//       connectedEdges.style({
//         'line-color': '#14b8a6',
//         'width': 4,
//         'target-arrow-color': '#14b8a6',
//       });
//
//       // Highlight connected nodes
//       const connectedNodes = node.neighborhood().nodes();
//       connectedNodes.style({
//         'border-color': '#14b8a6',
//         'border-width': 2,
//       });
//     });
//
//     cyRef.current.on('mouseout', 'node', function(evt: any) {
//       const node = evt.target;
//       node.style({
//         'background-color': '#4f46e5',
//         'border-color': '#4338ca',
//         'border-width': 2,
//         'font-weight': 'normal',
//       });
//
//       // Reset connected edges
//       const connectedEdges = node.connectedEdges();
//       connectedEdges.style({
//         'line-color': '#888',
//         'width': 2,
//         'target-arrow-color': '#888',
//       });
//
//       // Reset connected nodes
//       const connectedNodes = node.neighborhood().nodes();
//       connectedNodes.style({
//         'border-color': '#4338ca',
//         'border-width': 2,
//       });
//     });
//
//     // Edge hover effects
//     cyRef.current.on('mouseover', 'edge', function(evt: any) {
//       const edge = evt.target;
//       edge.style({
//         'line-color': '#14b8a6',
//         'width': 4,
//         'target-arrow-color': '#14b8a6',
//       });
//     });
//
//     cyRef.current.on('mouseout', 'edge', function(evt: any) {
//       const edge = evt.target;
//       edge.style({
//         'line-color': '#888',
//         'width': 2,
//         'target-arrow-color': '#888',
//       });
//     });
//
//     // Click to select
//     cyRef.current.on('tap', 'node', function(evt: any) {
//       const node = evt.target;
//       cyRef.current.elements().unselect();
//       node.select();
//     });
//   };
//
//   // Get elements based on showcase type
//   const getElements = (type: string) => {
//     switch (type) {
//       case 'advanced':
//         return {
//           nodes: [
//             { data: { id: 'home', label: '🏠 Home', type: 'main' } },
//             { data: { id: 'about', label: 'About', type: 'main' } },
//             { data: { id: 'projects', label: 'Projects', type: 'main' } },
//             { data: { id: 'contact', label: 'Contact', type: 'main' } },
//             { data: { id: 'blog', label: 'Blog', type: 'main' } },
//             { data: { id: 'project1', label: 'Odoo Development', type: 'sub' } },
//             { data: { id: 'project2', label: 'Financial Solutions', type: 'sub' } },
//             { data: { id: 'project3', label: 'Bloomreach CMS', type: 'sub' } },
//             { data: { id: 'project4', label: 'JavaFX ERP', type: 'sub' } },
//             { data: { id: 'blog1', label: 'Tech Trends', type: 'sub' } },
//             { data: { id: 'blog2', label: 'Development Tips', type: 'sub' } },
//             { data: { id: 'team', label: 'Team', type: 'sub' } },
//             { data: { id: 'services', label: 'Services', type: 'sub' } },
//           ],
//           edges: [
//             { data: { source: 'home', target: 'about', label: 'navigates to' } },
//             { data: { source: 'home', target: 'projects', label: 'showcases' } },
//             { data: { source: 'home', target: 'contact', label: 'links to' } },
//             { data: { source: 'home', target: 'blog', label: 'features' } },
//             { data: { source: 'about', target: 'team', label: 'includes' } },
//             { data: { source: 'about', target: 'services', label: 'describes' } },
//             { data: { source: 'projects', target: 'project1', label: 'contains' } },
//             { data: { source: 'projects', target: 'project2', label: 'contains' } },
//             { data: { source: 'projects', target: 'project3', label: 'contains' } },
//             { data: { source: 'projects', target: 'project4', label: 'contains' } },
//             { data: { source: 'blog', target: 'blog1', label: 'posts' } },
//             { data: { source: 'blog', target: 'blog2', label: 'posts' } },
//           ]
//         };
//       case 'layouts':
//         return {
//           nodes: [
//             { data: { id: 'a', label: 'Node A' } },
//             { data: { id: 'b', label: 'Node B' } },
//             { data: { id: 'c', label: 'Node C' } },
//             { data: { id: 'd', label: 'Node D' } },
//             { data: { id: 'e', label: 'Node E' } },
//             { data: { id: 'f', label: 'Node F' } },
//             { data: { id: 'g', label: 'Node G' } },
//             { data: { id: 'h', label: 'Node H' } },
//             { data: { id: 'i', label: 'Node I' } },
//             { data: { id: 'j', label: 'Node J' } },
//           ],
//           edges: [
//             { data: { source: 'a', target: 'b' } },
//             { data: { source: 'a', target: 'c' } },
//             { data: { source: 'b', target: 'd' } },
//             { data: { source: 'c', target: 'e' } },
//             { data: { source: 'd', target: 'f' } },
//             { data: { source: 'e', target: 'f' } },
//             { data: { source: 'f', target: 'g' } },
//             { data: { source: 'g', target: 'h' } },
//             { data: { source: 'h', target: 'i' } },
//             { data: { source: 'i', target: 'j' } },
//             { data: { source: 'j', target: 'a' } },
//           ]
//         };
//       case 'styles':
//         return {
//           nodes: [
//             { data: { id: 'a', label: 'Circle', shape: 'ellipse' } },
//             { data: { id: 'b', label: 'Triangle', shape: 'triangle' } },
//             { data: { id: 'c', label: 'Rectangle', shape: 'rectangle' } },
//             { data: { id: 'd', label: 'Diamond', shape: 'diamond' } },
//             { data: { id: 'e', label: 'Pentagon', shape: 'pentagon' } },
//             { data: { id: 'f', label: 'Hexagon', shape: 'hexagon' } },
//             { data: { id: 'g', label: 'Octagon', shape: 'octagon' } },
//             { data: { id: 'h', label: 'Star', shape: 'star' } },
//           ],
//           edges: [
//             { data: { source: 'a', target: 'b', style: 'solid' } },
//             { data: { source: 'b', target: 'c', style: 'dotted' } },
//             { data: { source: 'c', target: 'd', style: 'dashed' } },
//             { data: { source: 'd', target: 'e', style: 'solid' } },
//             { data: { source: 'e', target: 'f', style: 'dotted' } },
//             { data: { source: 'f', target: 'g', style: 'dashed' } },
//             { data: { source: 'g', target: 'h', style: 'solid' } },
//             { data: { source: 'h', target: 'a', style: 'dotted' } },
//           ]
//         };
//       case 'basic':
//       default:
//         return {
//           nodes: [
//             { data: { id: 'home', label: '🏠 Homepage' } },
//             { data: { id: 'about', label: 'About' } },
//             { data: { id: 'team', label: 'Team' } },
//             { data: { id: 'careers', label: 'Careers' } },
//             { data: { id: 'products', label: 'Products' } },
//             { data: { id: 'product1', label: 'Product Detail' } },
//             { data: { id: 'blog', label: 'Blog' } },
//             { data: { id: 'post1', label: 'Blog Post' } },
//             { data: { id: 'contact', label: 'Contact' } },
//             { data: { id: 'login', label: 'Login' } }
//           ],
//           edges: [
//             { data: { source: 'home', target: 'about' } },
//             { data: { source: 'about', target: 'team' } },
//             { data: { source: 'about', target: 'careers' } },
//             { data: { source: 'home', target: 'products' } },
//             { data: { source: 'products', target: 'product1' } },
//             { data: { source: 'home', target: 'blog' } },
//             { data: { source: 'blog', target: 'post1' } },
//             { data: { source: 'home', target: 'contact' } },
//             { data: { source: 'home', target: 'login' } }
//           ]
//         };
//     }
//   };
//
//   // Get styles based on showcase type
//   const getStyles = (type: string) => {
//     const baseStyles = [
//       {
//         selector: 'node',
//         style: {
//           'background-color': '#4f46e5',
//           'label': 'data(label)',
//           'color': '#fff',
//           'text-valign': 'center',
//           'text-halign': 'center',
//           'font-size': '14px',
//           'text-outline-color': '#4f46e5',
//           'text-outline-width': 2,
//           'width': 'label',
//           'height': 40,
//           'shape': 'roundrectangle',
//           'text-max-width': '100px',
//           'text-overflow-wrap': 'ellipsis',
//           'padding': '10px',
//           'border-width': 2,
//           'border-color': '#4338ca',
//         }
//       },
//       {
//         selector: 'edge',
//         style: {
//           'width': 2,
//           'line-color': '#888',
//           'target-arrow-color': '#888',
//           'target-arrow-shape': 'triangle',
//           'curve-style': 'bezier',
//           'opacity': 0.8,
//         }
//       }
//     ];
//
//     switch (type) {
//       case 'advanced':
//         return [
//           ...baseStyles,
//           {
//             selector: 'node[type="main"]',
//             style: {
//               'background-color': '#4f46e5',
//               'shape': 'roundrectangle',
//               'width': 'label',
//               'height': 40,
//               'font-weight': 'bold',
//             }
//           },
//           {
//             selector: 'node[type="sub"]',
//             style: {
//               'background-color': '#14b8a6',
//               'shape': 'roundrectangle',
//               'width': 'label',
//               'height': 30,
//               'font-size': '12px',
//             }
//           },
//           {
//             selector: 'edge',
//             style: {
//               'label': 'data(label)',
//               'font-size': '10px',
//               'color': '#666',
//               'text-rotation': 'autorotate',
//               'text-margin-y': -10,
//             }
//           }
//         ];
//       case 'styles':
//         return [
//           {
//             selector: 'node',
//             style: {
//               'background-color': '#4f46e5',
//               'label': 'data(label)',
//               'color': '#fff',
//               'text-valign': 'center',
//               'text-halign': 'center',
//               'font-size': '14px',
//               'width': 60,
//               'height': 60,
//               'text-outline-color': '#4f46e5',
//               'text-outline-width': 2,
//               'border-width': 2,
//               'border-color': '#4338ca',
//             }
//           },
//           {
//             selector: 'node[shape="ellipse"]',
//             style: {
//               'shape': 'ellipse',
//               'background-color': '#4f46e5',
//             }
//           },
//           {
//             selector: 'node[shape="triangle"]',
//             style: {
//               'shape': 'triangle',
//               'background-color': '#14b8a6',
//             }
//           },
//           {
//             selector: 'node[shape="rectangle"]',
//             style: {
//               'shape': 'rectangle',
//               'background-color': '#8b5cf6',
//             }
//           },
//           {
//             selector: 'node[shape="diamond"]',
//             style: {
//               'shape': 'diamond',
//               'background-color': '#ec4899',
//             }
//           },
//           {
//             selector: 'node[shape="pentagon"]',
//             style: {
//               'shape': 'pentagon',
//               'background-color': '#f59e0b',
//             }
//           },
//           {
//             selector: 'node[shape="hexagon"]',
//             style: {
//               'shape': 'hexagon',
//               'background-color': '#10b981',
//             }
//           },
//           {
//             selector: 'node[shape="octagon"]',
//             style: {
//               'shape': 'octagon',
//               'background-color': '#3b82f6',
//             }
//           },
//           {
//             selector: 'node[shape="star"]',
//             style: {
//               'shape': 'star',
//               'background-color': '#ef4444',
//             }
//           },
//           {
//             selector: 'edge[style="dotted"]',
//             style: {
//               'line-style': 'dotted',
//               'line-color': '#888',
//               'target-arrow-color': '#888',
//               'target-arrow-shape': 'triangle',
//               'curve-style': 'bezier',
//             }
//           },
//           {
//             selector: 'edge[style="dashed"]',
//             style: {
//               'line-style': 'dashed',
//               'line-color': '#888',
//               'target-arrow-color': '#888',
//               'target-arrow-shape': 'triangle',
//               'curve-style': 'bezier',
//             }
//           },
//           {
//             selector: 'edge[style="solid"]',
//             style: {
//               'line-style': 'solid',
//               'line-color': '#888',
//               'target-arrow-color': '#888',
//               'target-arrow-shape': 'triangle',
//               'curve-style': 'bezier',
//             }
//           }
//         ];
//       case 'basic':
//       default:
//         return baseStyles;
//     }
//   };
//
//   // Get layout configuration
//   const getLayout = (layoutName: string) => {
//     const layouts: Record<string, any> = {
//       'breadthfirst': {
//         name: 'breadthfirst',
//         directed: true,
//         padding: 10,
//         spacingFactor: 1.5,
//         animate: true
//       },
//       'circle': {
//         name: 'circle',
//         padding: 10,
//         animate: true
//       },
//       'concentric': {
//         name: 'concentric',
//         padding: 10,
//         animate: true
//       },
//       'grid': {
//         name: 'grid',
//         padding: 10,
//         animate: true
//       },
//       'random': {
//         name: 'random',
//         padding: 10,
//         animate: true
//       },
//       'cose': {
//         name: 'cose',
//         padding: 10,
//         animate: true,
//         nodeDimensionsIncludeLabels: true
//       }
//     };
//
//     return layouts[layoutName] || layouts['breadthfirst'];
//   };
//
//   // Zoom control functions
//   const zoomIn = () => {
//     if (cyRef.current) {
//       cyRef.current.zoom(cyRef.current.zoom() * 1.2);
//     }
//   };
//
//   const zoomOut = () => {
//     if (cyRef.current) {
//       cyRef.current.zoom(cyRef.current.zoom() / 1.2);
//     }
//   };
//
//   const resetZoom = () => {
//     if (cyRef.current) {
//       cyRef.current.fit();
//     }
//   };
//
//   const changeLayout = (newLayout: string) => {
//     setLayout(newLayout);
//   };
//
//   return (
//     <div className="relative w-full border border-gray-200 dark:border-gray-700 rounded-lg" style={{ height: `${height}px` }}>
//       {isLoading ? (
//         <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4f46e5] dark:border-[#14b8a6]"></div>
//         </div>
//       ) : error ? (
//         <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
//           <div className="text-red-500 dark:text-red-400">{error}</div>
//         </div>
//       ) : (
//         <>
//           <div
//             ref={containerRef}
//             className="w-full h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
//             style={{ display: 'block' }} // Ensure the container is displayed as a block
//           />
//
//           {/* Zoom controls */}
//           <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
//             <button
//               onClick={zoomIn}
//               className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
//               aria-label="Zoom in"
//             >
//               <FiZoomIn className="text-gray-700 dark:text-gray-200" size={20} />
//             </button>
//             <button
//               onClick={zoomOut}
//               className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
//               aria-label="Zoom out"
//             >
//               <FiZoomOut className="text-gray-700 dark:text-gray-200" size={20} />
//             </button>
//             <button
//               onClick={resetZoom}
//               className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
//               aria-label="Reset zoom"
//             >
//               <FiMaximize className="text-gray-700 dark:text-gray-200" size={20} />
//             </button>
//           </div>
//
//           {/* Layout controls */}
//           {showcaseType === 'layouts' && (
//             <div className="absolute bottom-4 left-4 z-10 flex flex-wrap gap-2">
//               <button
//                 onClick={() => changeLayout('breadthfirst')}
//                 className={`px-3 py-1.5 rounded-md text-sm ${layout === 'breadthfirst' ? 'bg-[#4f46e5] text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
//               >
//                 <FiLayout className="inline mr-1" /> Breadthfirst
//               </button>
//               <button
//                 onClick={() => changeLayout('circle')}
//                 className={`px-3 py-1.5 rounded-md text-sm ${layout === 'circle' ? 'bg-[#4f46e5] text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
//               >
//                 <FiRefreshCw className="inline mr-1" /> Circle
//               </button>
//               <button
//                 onClick={() => changeLayout('concentric')}
//                 className={`px-3 py-1.5 rounded-md text-sm ${layout === 'concentric' ? 'bg-[#4f46e5] text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
//               >
//                 <FiRefreshCw className="inline mr-1" /> Concentric
//               </button>
//               <button
//                 onClick={() => changeLayout('grid')}
//                 className={`px-3 py-1.5 rounded-md text-sm ${layout === 'grid' ? 'bg-[#4f46e5] text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
//               >
//                 <FiGrid className="inline mr-1" /> Grid
//               </button>
//               <button
//                 onClick={() => changeLayout('cose')}
//                 className={`px-3 py-1.5 rounded-md text-sm ${layout === 'cose' ? 'bg-[#4f46e5] text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
//               >
//                 <FiLayout className="inline mr-1" /> Force-directed
//               </button>
//             </div>
//           )}
//
//           {/* Instructions */}
//           <div className="absolute bottom-4 right-4 z-10">
//             <div className="bg-white/80 dark:bg-gray-800/80 px-3 py-1.5 rounded-md text-xs text-gray-700 dark:text-gray-300 shadow-sm">
//               {showcaseType === 'layouts' ? 'Click buttons to change layout' : 'Hover over nodes to see connections'}
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };
//
// export default CytoscapeShowcase;
