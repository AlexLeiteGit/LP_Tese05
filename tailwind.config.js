/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg:      { DEFAULT: "var(--color-bg)", dark: "var(--color-bg-dark)", card: "var(--color-bg-card)", footer: "var(--color-bg-footer)" },
        gold:    { DEFAULT: "#c9a84c", light: "#e2c47a" },
        text:    "var(--color-text)",
        muted:   "var(--color-muted)",
        wa:      "#25d366",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body:    ["Lato", "sans-serif"],
        mono:    ["'Courier Prime'", "monospace"],
      },
      fontSize: {
        hero:    ["clamp(3.5rem, 8vw, 7rem)",   { lineHeight: "0.95", fontWeight: "900", letterSpacing: "-0.02em" }],
        section: ["clamp(2rem, 5vw, 4rem)",     { lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.01em" }],
        stat:    ["clamp(2rem, 6vw, 4.5rem)",   { lineHeight: "1",   fontWeight: "700", letterSpacing: "-0.02em" }],
      },
      animation: {
        "pulse-wa":  "pulse-wa 2s cubic-bezier(0.4,0,0.6,1) infinite",
        "fade-down": "fadeDown 0.6s cubic-bezier(0.23,1,0.32,1) forwards",
      },
      keyframes: {
        "pulse-wa": {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(37,211,102,0.4)" },
          "50%":     { boxShadow: "0 0 0 12px rgba(37,211,102,0)" },
        },
        fadeDown: {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
