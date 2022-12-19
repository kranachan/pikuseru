module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'jit',
  content: [
    './*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      primary: 'rgb(var(--colors-primary))',
      background: 'rgb(var(--colors-background))'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
