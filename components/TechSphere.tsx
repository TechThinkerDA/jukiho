"use client";

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls, Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';

// Define types for our technology items
interface Technology {
  name: string;
  color: string;
  icon: string;
}

interface TechCategory {
  category: string;
  items: Technology[];
}

// Props interfaces
interface TechNodeProps {
  position: [number, number, number];
  technology: Technology;
  onClick: (tech: Technology) => void;
  isSelected: boolean;
}

interface CategoryGroupProps {
  category: string;
  items: Technology[];
  radius: number;
  angle: number;
  onClick: (tech: Technology) => void;
  selectedTech: Technology | null;
}

// Define technology categories and items
const technologies: TechCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "Java", color: "#f89820", icon: "☕" },
      { name: "C#", color: "#68217a", icon: "#" },
      { name: "Python", color: "#306998", icon: "🐍" },
      { name: "JavaScript", color: "#f7df1e", icon: "JS" },
      { name: "TypeScript", color: "#007acc", icon: "TS" }
    ]
  },
  {
    category: "Frameworks",
    items: [
      { name: "Spring", color: "#6db33f", icon: "🍃" },
      { name: ".NET", color: "#512bd4", icon: "🔷" },
      { name: "React", color: "#61dafb", icon: "⚛️" },
      { name: "Angular", color: "#dd0031", icon: "🅰️" },
      { name: "Next.js", color: "#000000", icon: "N" }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", color: "#f05032", icon: "🔄" },
      { name: "Docker", color: "#2496ed", icon: "🐳" },
      { name: "Jenkins", color: "#d33833", icon: "🔧" },
      { name: "VS Code", color: "#007acc", icon: "📝" },
      { name: "IntelliJ", color: "#fe315d", icon: "🧠" }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", color: "#4479a1", icon: "🗄️" },
      { name: "MongoDB", color: "#47a248", icon: "🍃" },
      { name: "PostgreSQL", color: "#336791", icon: "🐘" },
      { name: "Redis", color: "#dc382d", icon: "🔴" },
      { name: "SQLite", color: "#003b57", icon: "📊" }
    ]
  }
];

// Node component representing a technology
const TechNode: React.FC<TechNodeProps> = ({ position, technology, onClick, isSelected }) => {
  const meshRef = useRef<THREE.Mesh | null>(null);
  const [hovered, setHovered] = useState(false);
  
  // Animate on hover and selection
  useFrame(() => {
    if (meshRef.current) {
      if (isSelected) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.5, 1.5, 1.5), 0.1);
      } else if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <group position={position}>
      <Sphere
        ref={meshRef}
        args={[0.5, 32, 32]}
        onClick={() => onClick(technology)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial 
          color={technology.color} 
          emissive={technology.color} 
          emissiveIntensity={hovered || isSelected ? 0.5 : 0.2} 
          roughness={0.3}
          metalness={0.8}
        />
      </Sphere>
      <Html distanceFactor={10} position={[0, 0, 0.6]} center>
        <div className="text-white text-2xl font-bold">{technology.icon}</div>
      </Html>
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {technology.name}
      </Text>
    </group>
  );
};

// Category group component
const CategoryGroup: React.FC<CategoryGroupProps> = ({ category, items, radius, angle, onClick, selectedTech }) => {
  const groupRef = useRef<THREE.Group | null>(null);
  const positions: [number, number, number][] = [];
  
  // Calculate positions in a circular pattern
  for (let i = 0; i < items.length; i++) {
    const itemAngle = angle + (i - (items.length - 1) / 2) * 0.3;
    const x = radius * Math.cos(itemAngle);
    const y = radius * Math.sin(itemAngle) * 0.5; // Flatten the y-axis a bit
    const z = radius * Math.sin(itemAngle);
    positions.push([x, y, z]);
  }

  // Slowly rotate the group
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Text
        position={[radius * 1.3 * Math.cos(angle), 0, radius * 1.3 * Math.sin(angle)]}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.04}
        outlineColor="#000000"
      >
        {category}
      </Text>
      {items.map((tech, index) => (
        <TechNode
          key={tech.name}
          position={positions[index]}
          technology={tech}
          onClick={onClick}
          isSelected={selectedTech?.name === tech.name}
        />
      ))}
    </group>
  );
};

// Main scene component
const TechScene = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  
  const handleTechClick = (tech) => {
    setSelectedTech(tech === selectedTech ? null : tech);
  };

  return (
    <>
      {/* Background stars */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {/* Technology categories */}
      {technologies.map((techCategory, index) => {
        const angle = (index / technologies.length) * Math.PI * 2;
        return (
          <CategoryGroup
            key={techCategory.category}
            category={techCategory.category}
            items={techCategory.items}
            radius={8}
            angle={angle}
            onClick={handleTechClick}
            selectedTech={selectedTech}
          />
        );
      })}
      
      {/* Controls */}
      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.5}
        rotateSpeed={0.5}
        minDistance={5}
        maxDistance={20}
      />
    </>
  );
};

// Main component with Canvas
export const TechSphere = () => {
  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg border border-[#e5e7eb] dark:border-gray-700">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <color attach="background" args={['#050816']} />
        <fog attach="fog" args={['#050816', 15, 30]} />
        <TechScene />
      </Canvas>
      <div className="absolute bottom-4 left-4 text-white bg-black/50 p-2 rounded-md text-sm">
        <p>Drag to rotate • Scroll to zoom • Click on a technology to select</p>
      </div>
    </div>
  );
};
