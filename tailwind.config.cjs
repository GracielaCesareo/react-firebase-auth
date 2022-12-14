/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'blue-strong': '#0f172a',
      'blue-back': '#1e293b',
      'blue-light': '#38bdf8',
      'purple': '#764abc',
      'slate': '#334155'
    }
  },
  plugins: [],
}
