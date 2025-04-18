"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Tag } from './Tag';
import { UnifiedProjectPreview } from '../UnifiedProjectPreview';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image = '/images/projects/waste.png',
  tags,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate staggered animation delay based on index
  const staggerDelay = index * 0.1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: staggerDelay
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ scale: { duration: 0.3 } }}
      className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl"
    >
      {/* Card content */}
      <div className="relative h-full">
        {/* Project preview */}
        <div className="relative h-48 overflow-hidden">
          <UnifiedProjectPreview
            title={title}
            type={tags[0] || 'Project'}
            height={192}
          />

          {/* Featured tag */}
          <motion.div
            className="absolute top-3 right-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: isHovered ? 1 : 0.8,
              y: 0
            }}
            transition={{ duration: 0.3 }}
          >
            {tags[0]}
          </motion.div>
        </div>

        {/* Content section */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: staggerDelay + (i * 0.1) }}
              >
                <Tag label={tag} size="sm" />
              </motion.div>
            ))}
            {tags.length > 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: staggerDelay + 0.3 }}
              >
                <Tag label={`+${tags.length - 3}`} size="sm" color="secondary" />
              </motion.div>
            )}
          </div>

          {/* View button with hover effect */}
          <Link href={`/images/projects/${id}`}>
            <motion.div
              className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Project
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Animated highlight on hover */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent rounded-xl"
        animate={{
          borderColor: isHovered ? 'rgba(79, 70, 229, 0.5)' : 'transparent'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
