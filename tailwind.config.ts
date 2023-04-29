import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#F7F372',
      }
    },
  },
  plugins: [],
} satisfies Config

