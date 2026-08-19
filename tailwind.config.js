/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0B0E14',
          card: '#121824',
          cardHover: '#161F2E',
          cardBorder: 'rgba(255, 255, 255, 0.08)',
          orange: '#FF5500',
          orangeHover: '#FF6A1A',
          orangeGlow: 'rgba(255, 85, 0, 0.35)',
          orangeSoft: 'rgba(255, 85, 0, 0.12)',
          blueVk: '#2787F5',
        }
      },
      fontFamily: {
        sans: ['Outfit', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-orange': '0 0 30px rgba(255, 85, 0, 0.35)',
        'glow-card': '0 10px 40px -10px rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
}
