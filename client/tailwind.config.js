/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: 'Inter, sans-serif',
      logo: 'Anta, sans-serif',
    },
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
