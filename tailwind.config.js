/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Ultra", "Impact", "serif"],
        handwritten: ["Gochi Hand", "sans-serif"],
        receipt: ["Fake Receipt", "monospace"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
        red: "#e2231b",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  safelist: [
    "bg-red",
    "bg-orange-400",
    "bg-black",
    "bg-green-700",
    "bg-[#426714]", //soup color green
    "bg-[#ED9F9B]",
    "bg-[#A0310E]",
    "bg-[#ED9F9B]",
    "bg-[#86A363]",
    "bg-[#97B375]",
    "bg-[#301D1D]",
    "bg-[#DC5757]",
  ],
};
