import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "banner-mousepad": "url('/img/banner-mousepad.png')",
        "banner-keyboard": "url('/img/banner-keyboard.png')",
        "banner-headset": "url('/img/banner-headset.png')",
      },
      minHeight: {
        "main-image": "420px"
      },
      maxHeight: {
        "main-image": "420px"
      },
      minWidth: {
        "main-image": "64rem"
      }
    },
  },
  plugins: [],
};
export default config;
