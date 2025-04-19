"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TechBubble {
  id: string;
  name: string;
  description: string;
  category: 'language' | 'framework' | 'tool' | 'concept';
  size: number;
}

interface TechStackBubblesProps {
  height?: number;
  className?: string;
}

export function TechStackBubbles({ height = 300, className = '' }: TechStackBubblesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height });
  const [selectedBubble, setSelectedBubble] = useState<string | null>(null);
  const [bubblePositions, setBubblePositions] = useState<Record<string, { x: number, y: number }>>({});

  // Define tech bubbles
  const techBubbles = useMemo(() => [
    { 
      id: 'r', 
      name: 'R', 
      description: 'Štatistické analýzy a vizualizácie dát v oblasti bioinformatiky a genomiky',
      category: 'language',
      size: 70
    },
    { 
      id: 'python', 
      name: 'Python', 
      description: 'Vývoj algoritmov pre analýzu dát, strojové učenie a spracovanie obrazu',
      category: 'language',
      size: 80
    },
    { 
      id: 'shiny', 
      name: 'Shiny', 
      description: 'Interaktívne webové aplikácie pre vizualizáciu a analýzu biologických dát',
      category: 'framework',
      size: 60
    },
    { 
      id: 'dash', 
      name: 'Dash', 
      description: 'Analytické dashboardy pre monitorovanie klinických štúdií a experimentov',
      category: 'framework',
      size: 55
    },
    { 
      id: 'streamlit', 
      name: 'Streamlit', 
      description: 'Rýchle prototypovanie dátových aplikácií pre výskumníkov',
      category: 'framework',
      size: 50
    },
    { 
      id: 'llm', 
      name: 'LLM', 
      description: 'Jazykové modely pre analýzu vedeckých textov a extrakciu informácií',
      category: 'concept',
      size: 65
    },
    { 
      id: 'nlp', 
      name: 'NLP', 
      description: 'Spracovanie prirodzeného jazyka pre analýzu vedeckých publikácií',
      category: 'concept',
      size: 60
    },
    { 
      id: 'scrnaseq', 
      name: 'scRNAseq', 
      description: 'Analýza dát z jednobuňového RNA sekvenovania',
      category: 'concept',
      size: 55
    },
    { 
      id: 'fair', 
      name: 'FAIR', 
      description: 'Princípy pre správu vedeckých dát: Findable, Accessible, Interoperable, Reusable',
      category: 'concept',
      size: 50
    },
    { 
      id: 'api', 
      name: 'API', 
      description: 'Integrácia s externými databázami a službami pre bioinformatické analýzy',
      category: 'tool',
      size: 45
    },
    { 
      id: 'ble', 
      name: 'BLE', 
      description: 'Bluetooth Low Energy pre zber dát zo senzorov v laboratóriách',
      category: 'tool',
      size: 40
    },
    { 
      id: 'sql', 
      name: 'SQL/noSQL', 
      description: 'Databázové systémy pre ukladanie a správu veľkých biologických dátových setov',
      category: 'tool',
      size: 55
    }
  ], []);

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [height]);

  // Initialize bubble positions
  useEffect(() => {
    if (dimensions.width === 0) return;

    const positions: Record<string, { x: number, y: number }> = {};
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    const radius = Math.min(dimensions.width, dimensions.height) * 0.35;

    techBubbles.forEach((bubble, index) => {
      const angle = (index / techBubbles.length) * Math.PI * 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      positions[bubble.id] = { x, y };
    });

    setBubblePositions(positions);
  }, [dimensions, techBubbles]);

  // Get color based on category
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'language':
        return '#4f46e5'; // Indigo
      case 'framework':
        return '#14b8a6'; // Teal
      case 'tool':
        return '#9333ea'; // Purple
      case 'concept':
        return '#f59e0b'; // Amber
      default:
        return '#6b7280'; // Gray
    }
  };

  return (
    <div
      ref={containerRef}
      className={`w-full rounded-xl shadow-md overflow-hidden relative bg-white dark:bg-gray-800 ${className}`}
      style={{ height: `${height}px` }}
    >
      {/* Render bubbles */}
      {Object.keys(bubblePositions).length > 0 && techBubbles.map((bubble) => {
        const position = bubblePositions[bubble.id];
        const isSelected = selectedBubble === bubble.id;
        const bubbleSize = isSelected ? bubble.size * 1.2 : bubble.size;
        
        return (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full flex items-center justify-center cursor-pointer shadow-md transition-shadow"
            style={{
              left: position.x - bubbleSize / 2,
              top: position.y - bubbleSize / 2,
              width: bubbleSize,
              height: bubbleSize,
              backgroundColor: getCategoryColor(bubble.category),
              color: 'white',
              zIndex: isSelected ? 10 : 1
            }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedBubble(isSelected ? null : bubble.id)}
          >
            <span className="text-sm font-bold">{bubble.name}</span>
          </motion.div>
        );
      })}

      {/* Tooltip for selected bubble */}
      {selectedBubble && (
        <motion.div
          className="absolute bottom-4 left-4 right-4 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">
            {techBubbles.find(b => b.id === selectedBubble)?.name}
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-200">
            {techBubbles.find(b => b.id === selectedBubble)?.description}
          </p>
        </motion.div>
      )}

      {/* Legend */}
      <div className="absolute top-2 right-2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-lg text-xs">
        <div className="flex items-center mb-1">
          <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: getCategoryColor('language') }}></div>
          <span>Jazyky</span>
        </div>
        <div className="flex items-center mb-1">
          <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: getCategoryColor('framework') }}></div>
          <span>Frameworky</span>
        </div>
        <div className="flex items-center mb-1">
          <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: getCategoryColor('tool') }}></div>
          <span>Nástroje</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: getCategoryColor('concept') }}></div>
          <span>Koncepty</span>
        </div>
      </div>

      {/* Instructions */}
      {!selectedBubble && (
        <div className="absolute bottom-2 left-2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-lg text-xs">
          Kliknite na bublinu pre zobrazenie detailov
        </div>
      )}
    </div>
  );
}
