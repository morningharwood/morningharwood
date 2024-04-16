/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.375rem",
      },
      colors: {
        primary: {
          hover: "var(--primary-400)",
          default: "var(--primary-800)",
          active: "var(--primary-600)",
          focus: "var(--primary-700)",
          selected: {
            hover: "var(--primary-500)",
            default: "var--primary-600)",
            active: "var(--primary-700)",
            focus: "var(--primary-800)",
          },
        },
        secondary: {
          hover: "var(--secondary-400)",
          default: "var(--secondary-500)",
          active: "var(--secondary-600)",
          focus: "var(--secondary-700)",
          selected: {
            hover: "var(--secondary-500)",
            default: "var--secondary-600)",
            active: "var(--secondary-700)",
            focus: "var(--secondary-800)",
          },
        },
      },
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
        display: "var(--font-display)",
        mono: "var(--font-mono)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
