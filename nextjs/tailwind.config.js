/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        todo: '0px 2px 8px rgba(0, 0, 0, 0.06)',
      },

      colors: {
        gray: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },

        purple: {
          500: '#8284FA',
          700: '#5E60CE',
        },

        blue: {
          500: '#4EA8DE',
          700: '#1E6F9F',
        },
      },
    },
  },
  plugins: [],
}
