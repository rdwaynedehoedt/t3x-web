import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          DEFAULT: "var(--accent)",
          light: "var(--accent-light)",
          dark: "var(--accent-dark)",
          foreground: "var(--accent-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
          border: "var(--card-border)",
        },
        button: {
          DEFAULT: "var(--button)",
          foreground: "var(--button-foreground)",
          secondary: "var(--button-secondary)",
          "secondary-foreground": "var(--button-secondary-foreground)",
        },
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      fontFamily: {
        sans: ["var(--font-primary)"],
        mono: ["var(--font-secondary)"],
      },
      transitionDuration: {
        DEFAULT: "var(--transition-medium)",
        fast: "var(--transition-fast)",
        slow: "var(--transition-slow)",
      },
      animation: {
        "fade-in": "fadeIn var(--transition-medium) forwards",
        "float-up": "floatUp var(--transition-medium) forwards",
        "scale-in": "scaleIn var(--transition-medium) forwards",
      },
    },
  },
  plugins: [],
};

export default config; 