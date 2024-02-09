import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-blue": "#51AAFC",
        "main-gray": "#C4C4C4",
        "eerie-black": "#1A1A1A",
        "cadet-grey": "#8FA0A9",
        "malachite-green": "#1CCC43",
        "seconday-blue": "#0085FF",
      },
    },
  },
  plugins: [],
};
export default config;
