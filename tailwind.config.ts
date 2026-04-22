import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          black: "#000000",
          graphite: "#0A0A0F",
          carbon: "#121218",
          steel: "#1C1C25",
        },
        brand: {
          blue: {
            DEFAULT: "#1E7BFF",
            bright: "#4DA3FF",
            deep: "#0B4FCC",
          },
          gold: {
            DEFAULT: "#D4A944",
            bright: "#E8C467",
            deep: "#A88529",
          },
          magenta: {
            DEFAULT: "#B845E8",
            bright: "#D26FF5",
            deep: "#8A2DB0",
          },
        },
        fg: {
          primary: "#FFFFFF",
          secondary: "#B8B8C4",
          muted: "#6B6B7A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        hero: ["clamp(3rem, 7vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        display: ["clamp(2.25rem, 5vw, 4rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        title: ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(180deg, #4DA3FF 0%, #1E7BFF 50%, #0B4FCC 100%)",
        "gold-gradient": "linear-gradient(180deg, #E8C467 0%, #D4A944 100%)",
        "magenta-gradient": "linear-gradient(180deg, #D26FF5 0%, #B845E8 100%)",
        "radial-spotlight": "radial-gradient(ellipse at center top, rgba(30,123,255,0.15) 0%, transparent 60%)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "ecg": "ecg 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        ecg: {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(1.1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
