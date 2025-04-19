"use client";

import React from 'react';

interface UnifiedProjectPreviewProps {
  title: string;
  type: string;
  height?: number;
}

export const UnifiedProjectPreview: React.FC<UnifiedProjectPreviewProps> = ({
  title,
  type,
  height = 200
}) => {
  // Generate a gradient based on the project type
  const getGradient = (type: string) => {
    const typeMap: Record<string, string> = {
      'web': 'from-blue-500 to-indigo-600',
      'mobile': 'from-green-500 to-teal-600',
      'ai': 'from-purple-500 to-pink-600',
      'blockchain': 'from-yellow-500 to-orange-600',
      'game': 'from-red-500 to-pink-600',
      'cms': 'from-cyan-500 to-blue-600',
      'Project': 'from-gray-500 to-gray-700',
    };

    return typeMap[type] || 'from-gray-500 to-gray-700';
  };

  return (
    <div 
      className={`w-full bg-gradient-to-br ${getGradient(type)} flex items-center justify-center`}
      style={{ height: `${height}px` }}
    >
      <div className="text-center p-4">
        <div className="text-white text-sm font-medium mb-2">{type}</div>
        <div className="text-white text-xl font-bold">{title}</div>
      </div>
    </div>
  );
};
