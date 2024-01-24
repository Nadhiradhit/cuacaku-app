import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        primary: "#FDF7E4",
        secondary: "#BBAB8C"
      },
      colors:{
        primary: "#FDF7E4",
        secondary: "#BBAB8C"
      }
    },
  },
  plugins: [],
};
export default config;
