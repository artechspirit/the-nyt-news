import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        headline: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Georgia', 'serif'],
      },
      colors: {
        nyt: {
          black: '#121212',
          gray: '#5a5a5a',
        },
      },
    },
  },
  plugins: [],
};

export default config;
