import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50:  "#0F172A",   // slate-900 — primary headings
          100: "#1E293B",   // slate-800
          200: "#334155",   // slate-700 — body text
          400: "#64748B",   // slate-500 — muted
          500: "#94A3B8",   // slate-400
          600: "#CBD5E1",   // slate-300
          700: "#E2E8F0",   // slate-200 — borders
          800: "#F1F5F9",   // slate-100 — card surface
          900: "#F8FAFC",   // slate-50 — section bg
          950: "#FFFFFF",   // white — page background
        },
        glow: {
          DEFAULT: "#2563EB",   // blue-600 — primary accent
          deep:    "#1D4ED8",   // blue-700
          soft:    "#BFDBFE",   // blue-200
          ember:   "#3B82F6",   // blue-500
        },
        brand: {
          orange:      "#F97316",   // orange-500 — secondary accent
          orangeDark:  "#EA580C",   // orange-600
          orangeLight: "#FB923C",   // orange-400
          ink:         "#0F172A",
          cream:       "#FFFFFF",
        },
        "sintra-dark": "#00041F",
        "sintra-accent": "#B56939",
        "sintra-light": "#EFF4FF",
        "sintra-gray": "#49484F",
      },
      fontFamily: {
        sans: ["var(--font-urbanist)", "system-ui", "sans-serif"],
        display: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        manrope: ["Manrope", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "sans-serif"],
        "helvetica-neue": ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "product-sans": ["Product Sans", "sans-serif"],
        "sf-compact": [
          "SF Compact Display",
          "SF Compact Text",
          "system-ui",
          "sans-serif",
        ],
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        power: "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "1.5rem",
          lg: "2rem",
        },
        screens: {
          "2xl": "1360px",
        },
      },
      keyframes: {
        "slow-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "marquee-x": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)", filter: "blur(4px)" },
          "100%": { opacity: "1", transform: "translateY(0px)", filter: "blur(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.9" },
        },
        "line-grow": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "slide-pulse": {
          "0%, 100%": { transform: "scaleY(0.3)", opacity: "0.4" },
          "50%": { transform: "scaleY(1)", opacity: "1" },
        },
      },
      animation: {
        "slow-spin": "slow-spin 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        "marquee-x": "marquee-x 35s linear infinite",
        shimmer: "shimmer 4s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 0.6s ease both",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "line-grow": "line-grow 0.9s cubic-bezier(0.22,1,0.36,1) both",
        "slide-pulse": "slide-pulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
