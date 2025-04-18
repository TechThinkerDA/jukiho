"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  direction = 'up'
}) => {
  const getVariants = (): Variants => {
    const directionOffset = 50;

    const variants: Record<string, Variants> = {
      up: {
        hidden: { opacity: 0, y: directionOffset },
        visible: { opacity: 1, y: 0 }
      },
      down: {
        hidden: { opacity: 0, y: -directionOffset },
        visible: { opacity: 1, y: 0 }
      },
      left: {
        hidden: { opacity: 0, x: directionOffset },
        visible: { opacity: 1, x: 0 }
      },
      right: {
        hidden: { opacity: 0, x: -directionOffset },
        visible: { opacity: 1, x: 0 }
      }
    };

    return variants[direction];
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};
