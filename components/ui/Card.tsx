"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  className,
  href,
  onClick,
  hoverEffect = true
}) => {
  const cardContent = (
    <div
      className={[
        'bg-[#f9fafb] dark:bg-gray-800 rounded-lg shadow-md text-[#111827]/80 dark:text-[#f9fafb]/80 border border-[#e5e7eb] dark:border-gray-700',
        hoverEffect ? 'transition-all duration-300 hover:shadow-lg hover:border-[#4f46e5] dark:hover:border-[#14b8a6]' : '',
        className
      ].filter(Boolean).join(' ')}
    >
      <div className="flex flex-col gap-4 px-6 py-8">
        {title && <h3 className="text-[#111827] dark:text-[#f9fafb]">{title}</h3>}
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block no-underline">
        {cardContent}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="block w-full text-left">
        {cardContent}
      </button>
    );
  }

  return cardContent;
};

export const AnimatedCard: React.FC<CardProps> = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card {...props} />
    </motion.div>
  );
};
