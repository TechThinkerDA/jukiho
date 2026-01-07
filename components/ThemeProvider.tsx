"use client";

import React, { useEffect } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  useEffect(() => {
    // Always use dark mode
    const html = document.documentElement;
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return <>{children}</>;
};

