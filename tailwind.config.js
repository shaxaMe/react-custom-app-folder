
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          50: '#F9FAFB',
          100: '#FFFFFF',
          200: '#F8F9FA',
          300: '#FAFAFA',
          400: '#777e90',
          500: '#232E40',
          600: "#D5D7DA",
          700: '#d9d9d9',
          800: '#E9EAEB',
          900: '#1f2937',
        },
        light: {
          50: "#f8fafc",
          100:"#6b7280",
          200: "#f8f8fa",
          300: "#9ca3af", 
           green:{
            50: '#4dd282',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
           }
        },
        'dark-base': {
          100: '#1A1B1E',
          200: '#2C2E33',
          300: '#373A40',
          400: '#495057',
          500: '#6C757D',
        },
        primary: {
          light: '#60A5FA',
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
          100:"#3276ff"
        },
        'dark-primary': {
          light: '#93C5FD',
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
        },
        secondary: {
          light: '#fcfcfd',
          DEFAULT: '#e5e7eb',
          dark: '#475569',
        },
        'dark-secondary': {
          light: '#CBD5E1',
          DEFAULT: '#94A3B8',
          dark: '#64748B',
        },
        accent: {
          light: '#38BDF8',
          DEFAULT: '#0EA5E9',
          dark: '#0284C7',
        },
        'dark-accent': {
          light: '#7DD3FC',
          DEFAULT: '#38BDF8',
          dark: '#0EA5E9',
        },
        success: {
          light: '#4ADE80',
          DEFAULT: '#22C55E',
          dark: '#16A34A',
        },
        'dark-success': {
          light: '#86EFAC',
          DEFAULT: '#4ADE80',
          dark: '#22C55E',
        },
        warning: {
          light: '#FBBF24',
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
        'dark-warning': {
          light: '#FCD34D',
          DEFAULT: '#FBBF24',
          dark: '#F59E0B',
        },
        error: {
          light: '#F87171',
          DEFAULT: '#EF4444',
          dark: '#DC2626',
        },
        'dark-error': {
          light: '#FCA5A5',
          DEFAULT: '#F87171',
          dark: '#EF4444',
        },
        info: {
          light: '#60A5FA',
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
        },
        'dark-info': {
          light: '#93C5FD',
          DEFAULT: '#60A5FA',
          dark: '#3B82F6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

