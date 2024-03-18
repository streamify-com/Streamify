import { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "../../packages/shared-components/animations/**/*.{js,ts,jsx,tsx}",
    "../../packages/shared-components/components/**/*.{js,ts,jsx,tsx}",
    "../../packages/shared-components/forms/**/*.{js,ts,jsx,tsx}",
    "../../packages/shared-components/graphics/**/*.{js,ts,jsx,tsx}",
    "../../packages/shared-components/hooks/**/*.{js,ts,jsx,tsx}",
    "../../packages/shared-components/layouts/**/*.{js,ts,jsx,tsx}",
    "../../packages/shared-components/lib/**/*.{js,ts,jsx,tsx}",
    "../../packages/shared-components/types/**/*.{js,ts,jsx,tsx}",
    "../../packages/shared-components/ui/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
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
      sm: "1180px",
      md: "1280px",
      lg: "1920px",
      xl: "3840px",
      "2xl": "7680px",
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
        semibold: ["var(--font-semibold)", ...fontFamily.sans],
        bold: ["var(--font-bold)", ...fontFamily.sans],
        special: ["var(--font-special)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        foreground: {
          DEFAULT: "rgba(var(--foreground))",
          hover: "rgba(var(--foreground-hover))",
        },
        background: {
          DEFAULT: "rgba(var(--background))",
          hover: "rgba(var(--background-hover))",
        },
        primary: {
          DEFAULT: "rgba(var(--primary))",
          muted: "rgba(var(--primary-muted))",
          inner: "rgba(var(--primary-inner))",
          hover: "rgba(var(--primary-hover))",
        },
        secondary: {
          DEFAULT: "rgba(var(--secondary))",
          muted: "rgba(var(--secondary-muted))",
          inner: "rgba(var(--secondary-inner))",
          hover: "rgba(var(--secondary-hover))",
        },
        action: {
          DEFAULT: "rgba(var(--action))",
          muted: "rgba(var(--action-muted))",
        },
        active: {
          DEFAULT: "rgba(var(--active))",
          muted: "rgba(var(--active-muted))",
        },
        passive: {
          DEFAULT: "rgba(var(--passive))",
          muted: "rgba(var(--passive-muted))",
        },
        positive: {
          DEFAULT: "rgba(var(--positive))",
          muted: "rgba(var(--positive-muted))",
        },
        negative: {
          DEFAULT: "rgba(var(--negative))",
          muted: "rgba(var(--negative-muted))",
        },
        transparent: "rgba(var(--transparent))",
        link: "rgba(var(--link))",
        skeleton: "rgba(var(--skeleton))",
        separator: "rgba(var(--separator))",
        testing: "rgba(var(--testing))",
      },
      borderRadius: {
        xl: `calc(var(--radius) + 4px)`,
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
  ],
} satisfies Config;
