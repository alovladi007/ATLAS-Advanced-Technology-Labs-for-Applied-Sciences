/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        atlas: {
          bg: {
            DEFAULT: "#000000",
            secondary: "#0a0a0a",
            tertiary: "#111111",
            elevated: "#1a1a1a",
          },
          text: {
            primary: "#ffffff",
            secondary: "#a1a1aa",
            muted: "#71717a",
          },
          border: "rgba(255, 255, 255, 0.10)",
          glass: "rgba(255, 255, 255, 0.04)",
          accent: {
            cyan: "#00d4ff",
            violet: "#8b5cf6",
            magenta: "#ec4899",
            emerald: "#10b981",
            amber: "#f59e0b",
          },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(139, 92, 246, 0.35)",
        glowCyan: "0 0 40px rgba(0, 212, 255, 0.25)",
      },
      backgroundImage: {
        "atlas-gradient":
          "linear-gradient(135deg, #00d4ff 0%, #8b5cf6 50%, #ec4899 100%)",
        "atlas-gradient-subtle":
          "linear-gradient(135deg, rgba(0, 212, 255, 0.14) 0%, rgba(139, 92, 246, 0.14) 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  darkMode: ["class"],
  plugins: [],
};

