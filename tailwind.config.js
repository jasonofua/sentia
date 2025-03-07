/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B00',
          hover: '#FF8124',
        },
        secondary: {
          DEFAULT: '#4F46E5',
          hover: '#6366F1',
        },
        dark: {
          DEFAULT: '#0F172A',
          lighter: '#1E293B',
        },
        light: {
          DEFAULT: '#F8FAFC',
          gray: '#E2E8F0',
        },
        accent: {
          blue: '#3B82F6',
          green: '#10B981',
          red: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 