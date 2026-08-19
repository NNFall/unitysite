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
        background: '#09090b',
        surface: {
          DEFAULT: '#121216',
          light: '#18181e',
          lighter: '#22222b',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        brand: {
          orange: '#ff6b00',
          amber: '#f59e0b',
          gold: '#fbbf24',
          cyan: '#06b6d4',
          neon: '#ff5500',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Satoshi', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      boxShadow: {
        'glow-orange': '0 0 35px -5px rgba(255, 107, 0, 0.35)',
        'glow-amber': '0 0 35px -5px rgba(245, 158, 11, 0.35)',
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.35)',
        'glass-edge': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}
