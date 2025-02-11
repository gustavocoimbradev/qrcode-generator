import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#493D9E",
        secondary: "#B2A5FF",
        tertiary: "#DAD2FF",
        quaternary: "#FFF2AF",
      },
    },
  },
  plugins: [],
} satisfies Config;
