/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom color palette based on the provided theme
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#0f172a', // Dark navy blue
        },
        coral: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fbd9c1',
          300: '#f8c19e',
          400: '#f4a278',
          500: '#f0805a',
          600: '#ec5d3a',
          700: '#e83e2f', // Vibrant coral red
          800: '#d63031',
          900: '#b71c1c',
          950: '#8b0000',
        },
        warm: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Warm orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        warmLight: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c', // Light warm orange
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        }
      }
    },
  },
  plugins: [],
};
