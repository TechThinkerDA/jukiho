/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.css',
  ],
  theme: {
    fontSize: {
      xs: '0.875rem',
      sm: '1rem',
      base: '1.125rem',
      lg: '1.25rem',
      xl: '1.375rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
    },
    extend: {
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      colors: {
        // Teal - príjemná tyrkysová farba
        primary: {
          DEFAULT: '#0ea5e9', // Sky-500
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Fialová ako sekundárna farba
        secondary: {
          DEFAULT: '#8b5cf6', // Violet-500
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
      },
    },
  },
  plugins: [],
}
