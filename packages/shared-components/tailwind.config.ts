import { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "../../packages/shared-components/components/**/*.{ts,tsx}",
    "../../packages/shared-components/features/**/*.{ts,tsx}",
    "../../packages/shared-components/graphics/**/*.{ts,tsx}",
    "../../packages/shared-components/ui/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1400px",
        xl: "1000px",
      },
    },
    screens: {
      sm: "950px",
      md: "1000px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      md: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "2rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.563rem", { lineHeight: "2.5rem" }],
      "3xl": ["1.953rem", { lineHeight: "2.5rem" }],
      "4xl": ["2.441rem", { lineHeight: "3rem" }],
      "5xl": ["3.0rem", { lineHeight: "4rem" }],
      "6xl": ["4.0rem", { lineHeight: "5rem" }],
    },
    extend: {
      fontFamily: {
        italic: ["var(--font-italic)", ...fontFamily.sans],
        regular: ["var(--font-regular)", ...fontFamily.sans],
        bold: ["var(--font-bold)", ...fontFamily.sans],
        customFont: ["var(--font-heading)", ...fontFamily.sans],
      },
      colors: {
        foreground: "rgba(var(--foreground))",
        background: "rgba(var(--background))",
        hoverground: "rgba(var(--hoverground))",
        standard: "rgba(var(--standard))",
        highlight: "rgba(var(--highlight))",
        primary: {
          DEFAULT: "rgba(var(--primary))",
          transparent: "rgba(var(--primary-transparent))",
        },
        secondary: {
          DEFAULT: "rgba(var(--secondary))",
          transparent: "rgba(var(--secondary-transparent))",
        },
        tertiary: {
          DEFAULT: "rgba(var(--tertiary))",
          transparent: "rgba(var(--tertiary-transparent))",
        },
        active: "rgba(var(--active))",
        passive: "rgba(var(--passive))",
        destructive: "rgba(var(--destructive))",
        skeleton: "rgba(var(--skeleton))",
        separator: "rgba(var(--separator))",
        test: "rgba(var(--test))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
  ],
} satisfies Config;
