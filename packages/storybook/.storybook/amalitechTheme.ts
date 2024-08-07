import { create } from '@storybook/theming/create';

const PRIMARY = 'hsl(16, 73%, 51%)';
const WHITE = 'hsl(0, 0%, 100%)';
const TEXT = 'hsl(0, 0%, 9.8%)';

export default create({
  base: 'light',

  colorPrimary: PRIMARY,
  colorSecondary: PRIMARY,

  // UI
  appContentBg: WHITE,
  appBorderRadius: 4,

  // Typography
  fontBase: "'Work Sans', sans-serif",
  fontCode: 'monospace',

  // Text colors
  textColor: TEXT,
  textInverseColor: WHITE,

  // Toolbar default and active colors
  barTextColor: TEXT,
  barSelectedColor: PRIMARY,
  barBg: WHITE,

  // Form colors
  inputBg: WHITE,
  inputTextColor: TEXT,
  inputBorderRadius: 4,

  brandTitle: 'Amalitech Design System',
  brandImage: './logo-2.svg',
});
