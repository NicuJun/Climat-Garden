/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#f0f9f8',
          100: '#d9f0ee',
          200: '#b3e1dd',
          300: '#7ecac4',
          400: '#4daaa3',
          500: '#2e8a84',
          600: '#2d7d74',
          700: '#256560',
          800: '#1e4f4c',
          900: '#163b39',
          950: '#0d2624',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
