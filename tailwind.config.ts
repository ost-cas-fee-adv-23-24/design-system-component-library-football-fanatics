import type { Config } from 'tailwindcss';

import {
  backgroundImageExtensionTailwind,
  colorsTailwind,
  fontsTailwind,
  spacingTailwind,
  zIndexTailwind,
} from './src/config/tailwind';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    zIndex: zIndexTailwind,
    extend: {
      backgroundImage: backgroundImageExtensionTailwind,
      fontFamily: fontsTailwind,
      colors: colorsTailwind,
      spacing: spacingTailwind,
    },
  },
  plugins: [],
};
export default config;
