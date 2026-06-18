import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        shopify: "#95BF47",
        ink: "#070707",
        muted: "#5E6258",
      },
      boxShadow: {
        premium: "0 24px 80px rgba(7, 7, 7, 0.10)",
        glow: "0 18px 50px rgba(149, 191, 71, 0.22)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "soft-pulse": "softPulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        softPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.78" },
          "50%": { transform: "scale(1.04)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
