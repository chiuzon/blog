module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "dark": "#0e0e0e",
        "dark-1": "#090909",
        "fg": "#cb5300",
        "fg-1": "#ff7300"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
