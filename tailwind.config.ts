import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF7EF',
          200: '#F5EFDF',
        },
        gold: {
          100: '#F5E6D3',
          200: '#E6C9A8',
          300: '#D4A017',
          400: '#B88A14',
        },
        burgundy: {
          100: '#8B4513',
          200: '#6B3410',
        },
        rose: {
          100: '#FDF2F8',
          200: '#FCE7F3',
        },
        'light-brown': '#D2B48C',
        'beige': {
          100: '#F5F5DC',
          200: '#F8F5E4',
        },
        'champagne': {
          100: '#F7E7CE',
          200: '#EFE1C6',
        },
        'deep-gold': {
          100: '#C28840',
          200: '#B08B4F',
        },
        'soft-brown': {
          100: '#BFA074',
          200: '#A67C52',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        cormorant: ['var(--font-cormorant)'],
      },
    },
  },
  plugins: [],
};

export default config; 