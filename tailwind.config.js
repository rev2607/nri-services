/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff5ef',
          100: '#ffe9dd',
          200: '#ffd0b8',
          300: '#ffb490',
          400: '#ff944f',
          500: '#ff6a00',
          600: '#ff6200',
          700: '#e05500',
          800: '#b24400',
          900: '#7a2b00',
          DEFAULT: '#ff6a00',
        },
        bg: {
          page: '#f7f8fb',
          card: '#ffffff',
          muted: '#f1f3f7',
        },
        text: {
          primary: '#0f1724',
          secondary: '#6b7280',
          inverse: '#ffffff',
        },
        border: {
          DEFAULT: '#e6e9ef',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'h1': ['44px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.2', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'ui': ['13px', { lineHeight: '1.5', fontWeight: '500' }],
      },
      boxShadow: {
        'card': '0 6px 20px rgba(16, 24, 40, 0.06)',
        'card-hover': '0 12px 30px rgba(16, 24, 40, 0.12)',
      },
      borderRadius: {
        'xl': '12px',
      },
      maxWidth: {
        'container': '1200px',
      },
      spacing: {
        '18': '4.5rem',
        '28': '7rem',
        '32': '8rem',
      },
    },
  },
  plugins: [],
};
