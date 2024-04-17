import type { Config } from "tailwindcss";
import { XION_STYLE } from "@xionhub/token";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: XION_STYLE,
  plugins: [],
};
export default config;
