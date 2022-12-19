module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      primary: 'var(--colors-primary)',
      background: 'var(--colors-background)'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
