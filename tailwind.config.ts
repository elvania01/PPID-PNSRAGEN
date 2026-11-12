import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#EEF0FC",
          blue: "#fb3636",
        },
      },
    },
  },
  plugins: [],
};

export default config;
