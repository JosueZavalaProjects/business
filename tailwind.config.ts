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
        "old-silver": "#858585",
        cta: {
          50: "#EDF0FF",
          100: "#D8E2FF",
          200: "#ADC6FF",
          300: "#80ABFF",
          400: "#5D8FEC",
          500: "#4075D0",
          600: "#205CB5",
          700: "#004494",
          800: "#002E69",
          900: "#001A41",
        },
        purple: {
          50: "#FFEBFD",
          100: "#FDD6FF",
          200: "#F3AEFF",
          300: "#E884FF",
          400: "#CE65E8",
          500: "#B049CC",
          600: "#942CB0",
          700: "#790096",
          800: "#55006B",
          900: "#340042",
        },
        positive: {
          50: "#C8FFC0",
          100: "#98F994",
          200: "#7EDB7B",
          300: "#62BF62",
          400: "#47A34B",
          500: "#2A8833",
          600: "#006E1C",
          700: "#005313",
          800: "#00390A",
          900: "#002204",
        },
        caution: {
          50: "#FFF0C3",
          100: "#FFE16E",
          200: "#E3C54A",
          300: "#C6A931",
          400: "#A98F12",
          500: "#8D7500",
          600: "#705D00",
          700: "#544600",
          800: "#3A3000",
          900: "#221B00",
        },
        negative: {
          50: "#FFEDEA",
          100: "#FFDAD6",
          200: "#FFB4AB",
          300: "#FF897D",
          400: "#FF5449",
          500: "#DE372F",
          600: "#BA1A1A",
          700: "#930009",
          800: "#690004",
          900: "#410002",
        },
        blue: {
          50: "#E6F2FF",
          100: "#CAE6FF",
          200: "#8DCDFF",
          300: "#30B5FF",
          400: "#0099DE",
          500: "#007EB8",
          600: "#006493",
          700: "#004B70",
          800: "#00344F",
          900: "#001E30",
        },
        orange: {
          50: "#FFEDE6",
          100: "#FFDBCC",
          200: "#FFB694",
          300: "#FF8C52",
          400: "#DE733B",
          500: "#BE5A24",
          600: "#9E430B",
          700: "#7B2F00",
          800: "#561F00",
          900: "#351000",
        },
        gray: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
        },
      },
    },
  },
  plugins: [],
};
export default config;
