/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        revonza: {
          base: 'var(--color-bg-base)',
          surface: 'var(--color-bg-surface)',
          accent: 'var(--color-accent)',
          accentOld: '#60519b',
          text: 'var(--color-text-main)',
          textMuted: 'var(--color-text-muted)',
          border: 'var(--color-border)',
          white: 'var(--color-text-inverse)',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}