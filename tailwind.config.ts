import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "reddish-brown": "#AC4A37",
      },
    },
  },
  plugins: [],
};
export default config;
