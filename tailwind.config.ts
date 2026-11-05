import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dbe6fe",
          200: "#bfd3fe",
          300: "#93b4fd",
          400: "#608dfa",
          500: "#3b63f6",
          600: "#2547eb",
          700: "#1d37d8",
          800: "#1e30af",
          900: "#1e2f8a",
          950: "#172054"
        },
        accent: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ce9b7",
          400: "#31d492",
          500: "#0dba77",
          600: "#05965f",
          700: "#04784e",
          800: "#065f40",
          900: "#064e35"
        }
      },
      fontFamily: {
        sans: [
          "var(--font-vazirmatn)",
          "Vazirmatn",
          "IRANSans",
          "Tahoma",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(37, 71, 235, 0.25)",
        card: "0 2px 20px -6px rgba(15, 23, 42, 0.12)",
        glow: "0 0 40px -10px rgba(59, 99, 246, 0.5)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        dash: {
          to: { strokeDashoffset: "0" }
        },
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(20px,-24px) scale(1.08)" },
          "66%": { transform: "translate(-16px,12px) scale(0.94)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        blob: "blob 12s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
