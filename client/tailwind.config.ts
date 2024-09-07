import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      '3xl': '1920px',
    },
    extend: {
      backgroundImage: {
        movies: "url('/movies.jpg')",
      },
      height: {
        pad: 'calc(100vh - 2rem)',
        hero: 'calc(100vh - 6.25rem)',
        img: '25rem',
      },
      aspectRatio: {
        img: '4 / 3',
      },
      brightness: {
        35: '.35',
      },
      colors: {
        opacity: 'rgba(100, 116, 139, 0.6)',
        dark: 'rgba(26,26,26, 0.8)',
        slate: {
          150: '#d5dee9',
        },
      },
    },
  },
  plugins: [],
};
export default config;

