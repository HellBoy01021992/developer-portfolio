/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom dark theme palette
        'bg-primary': '#0B0F14',
        'bg-secondary': '#111827',
        'text-primary': '#F8FAFC',
        'text-secondary': '#94A3B8',
        'accent': '#38BDF8',
        'border-color': '#1E293B',
      },
      spacing: {
        'section': '4rem',
        'section-sm': '2rem',
      },
      fontSize: {
        'eyebrow': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],
      },
    },
  },
  plugins: [],
}

