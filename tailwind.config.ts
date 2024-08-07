import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        "3xl": "5rem",
      },
      fontSize: {
        header: "2.9375rem",
        normal: "1.25rem",
      },
      colors: {
        loginMain: "#3C1AB9",
        signUpMain: "#165A0F",
      },
      width: {
        lineWidth: "10.375rem",
        smallLineWidth: "5.3125rem",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
