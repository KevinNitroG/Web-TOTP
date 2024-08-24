/** @type {import('tailwindcss').Config} */
import catppuccinDaisyUI from '@catppuccin/daisyui';
import catppuccinTailwind from '@catppuccin/tailwindcss';
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'text-gradient': 'text-gradient-keyframes 5s ease infinite',
      },
      keyframes: {
        'text-gradient-keyframes': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
      },
    },
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
