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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'mnBlue': '#3E517A',
        'carolinaBlue': '#39A0ED',
        'honeyYellow': '#F7B32B',
        'forestGreen': '#6BA368',
        'culturedWhite': '#F9F8F8',
        'blueGrey': '#5885AF',
        'midnightBlue': '#41729F',
        'darkBlue': '#274472',
        'babyBlue': '#C3E0E5',
        'gainsboro': '#E2DED0',
      },
    },
  },
  plugins: [],
} satisfies Config;
