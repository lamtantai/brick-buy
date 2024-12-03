/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        card: "var(--bg-card)",
        secondary: "var(--clr-secondary)",
      },

      spacing: {
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        base: "var(--space-base)",
      },
    },
  },
  plugins: [],
};
