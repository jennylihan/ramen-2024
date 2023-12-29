/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Ultra', 'Impact', 'serif'],
        handwritten: ['Gochi Hand', 'sans-serif'],
        receipt: ['Fake Receipt', 'monospace']
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
        red: '#e2231b',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
