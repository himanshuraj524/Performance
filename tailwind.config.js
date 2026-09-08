/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        sawad: {
          bg: '#151312',
          surface: '#1B1918',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.18)',
          orange: '#F46C38',
          orangeHover: '#e05825',
          lime: '#C5FF41',
          limeHover: '#b4f030',
          muted: '#8A8A8A',
        },
      },
    },
  },
  plugins: [],
};
