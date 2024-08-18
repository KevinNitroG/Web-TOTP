/** @type {import('tailwindcss').Config} */
import catppuccin from '@catppuccin/tailwindcss';
import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    catppuccin({
      prefix: 'ctp',
      defaultFlavour: 'latte',
    }),
  ],
  darkMode: 'selector',
});
