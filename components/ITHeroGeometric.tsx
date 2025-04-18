"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { LocalizedCTA } from './ui/LocalizedCTA';

export const ITHeroGeometric: React.FC = () => {
  const { t } = useTranslation('home');
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle mouse movement for parallax effect
  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mounted]);

  // 3D tilt effect for title
  useEffect(() => {
    if (!mounted || !titleRef.current) return;

    const title = titleRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = title.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const tiltX = (y - centerY) / 15;
      const tiltY = (centerX - x) / 15;

      title.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03, 1.03, 1.03)`;
    };

    const handleMouseLeave = () => {
      title.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    title.addEventListener('mousemove', handleMouseMove);
    title.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      title.removeEventListener('mousemove', handleMouseMove);
      title.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mounted]);

  if (!mounted) {
    return <div className="h-[80vh]"></div>;
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-[80vh] overflow-hidden rounded-xl shadow-sm border border-[#e5e7eb] dark:border-gray-700 mb-8"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] dark:from-[#0f172a] dark:to-[#1e293b] transition-colors duration-200">
        {/* Geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Triangles */}
          <div
            className="absolute w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rotate-45 rounded-3xl"
            style={{
              left: `calc(10% + ${(mousePosition.x - 50) * -0.1}px)`,
              top: `calc(20% + ${(mousePosition.y - 50) * -0.1}px)`,
              transition: 'left 0.3s ease-out, top 0.3s ease-out'
            }}
          ></div>
          <div
            className="absolute w-48 h-48 bg-indigo-100 dark:bg-indigo-900/20 rotate-12 rounded-3xl"
            style={{
              right: `calc(15% + ${(mousePosition.x - 50) * 0.1}px)`,
              top: `calc(15% + ${(mousePosition.y - 50) * -0.1}px)`,
              transition: 'right 0.3s ease-out, top 0.3s ease-out'
            }}
          ></div>
          <div
            className="absolute w-56 h-56 bg-purple-100 dark:bg-purple-900/20 -rotate-12 rounded-3xl"
            style={{
              left: `calc(20% + ${(mousePosition.x - 50) * -0.1}px)`,
              bottom: `calc(10% + ${(mousePosition.y - 50) * 0.1}px)`,
              transition: 'left 0.3s ease-out, bottom 0.3s ease-out'
            }}
          ></div>
          <div
            className="absolute w-72 h-72 bg-teal-100 dark:bg-teal-900/20 rotate-30 rounded-3xl"
            style={{
              right: `calc(10% + ${(mousePosition.x - 50) * 0.1}px)`,
              bottom: `calc(15% + ${(mousePosition.y - 50) * 0.1}px)`,
              transition: 'right 0.3s ease-out, bottom 0.3s ease-out'
            }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in-down">
            <h1
              ref={titleRef}
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-teal-500 dark:from-indigo-400 dark:to-teal-400 inline-block transition-transform duration-300 py-2"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <span className="block">{t('heroTitle').split('.')[0]}.</span>
              <span className="block mt-2">{t('heroTitle').split('.')[1]}.</span>
            </h1>
          </div>

          <div className="animate-fade-in-up">
            <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              {t('heroSubtitle')}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            <button
                className="btn btn-lg bg-transparent text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-600 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                onClick={() => {
                  document.getElementById('problem-solution')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
              {t('howIWork')}
            </button>
            <LocalizedCTA
              href="/contact"
              variant="primary"
              size="lg"
              className="btn btn-lg bg-indigo-600 text-white border-2 border-indigo-600 hover:bg-teal-500 hover:border-teal-500 hover:text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              {t('contactMe')}
            </LocalizedCTA>
          </div>
        </div>
      </div>
    </section>
  );
};
