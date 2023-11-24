/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "70ch",
          },
        },
      },
      fontFamily: {
        robotomono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        chronicles: {
          base: "#0f0d0e",
          surface: "#231f20",
          primary: "#f9f4da",
          blue: "#3498DB",
          red: "#E74C3C",
          purple: "#9B59B6",
          turquoise: "#1ABC9C",
          yellow: "#F1C40F",
          orange: "#E67E22",
          subtleblues: "#5097ad",
          subtletext: "#808080",
        },
      },
    },
    fontFamily: {
      mono: ["monospace"],
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/typography", "@tailwindcss/aspect-ratio")],
};
