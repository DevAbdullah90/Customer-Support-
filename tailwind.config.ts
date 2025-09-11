import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin"); // Import the plugin function

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'navy-start': '#0B1426',
        'navy-end': '#1E293B',
        'electric-blue': '#3B82F6',
        'cyan': '#06B6D4',
        'purple': '#8B5CF6',
        'light-gray': '#E2E8F0',
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      borderRadius: {
        'lg': '16px',
        'md': '12px',
        'sm': '8px',
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "gradient-animation": {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
        // ADDED: Keyframes for the testimonial marquee
        "marquee": {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.8s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "gradient": "gradient-animation 15s ease infinite",
        // ADDED: Animation utility for the testimonial marquee
        "marquee-normal": "marquee 30s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // ADDED: Plugin for the 3D orbit animation in the CTA section
    plugin(function({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".offset-path-none": { "offset-path": "none" },
        // You can use arbitrary values directly in your JSX now, e.g., `[offset-path:path(...)]`
        // but this sets up the utility if you need it.
      });
    }),
    // Your existing custom plugin for animation delays
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".animation-delay-200": {
          "animation-delay": "0.2s",
        },
        ".animation-delay-400": {
          "animation-delay": "0.4s",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

export default config;