/** @type {import('tailwindcss').Config} */
import catppuccinDaisyUI from '@catppuccin/daisyui';
import catppuccinTailwind from '@catppuccin/tailwindcss';
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    catppuccinTailwind({
      prefix: 'ctp',
      defaultFlavour: 'latte',
    }),
  ],
  darkMode: ['selector', '[data-theme="macchiato"]'],
  daisyui: {
    logs: false,
    darkTheme: 'macchiato',
    themes: [
      catppuccinDaisyUI('latte', 'lavender'),
      catppuccinDaisyUI('macchiato', 'lavender'),
    ],
  },
};
