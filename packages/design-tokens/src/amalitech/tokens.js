import { Color, Shadow } from '../factories.js';

export const NAMESPACE_PREFIX = 'amalitech';
export const SPACING = 'spacing';
export const TYPOGRAPHY = 'font';
export const TYPE_VARIANT = 'font-variant';
export const COLOR = 'color';
export const SHADOW = 'shadow';
export const RADIUS = 'radius';
export const OPACITY = 'opacity';
export const MOTION = 'motion';
export const Z_INDEX = 'z-index';

const tokens = {};

/* SPACING */

tokens[SPACING] = {
  DEFAULT: {
    1: 1,
    2: 2,
    4: 4,
    8: 8,
    12: 12,
    16: 16,
    24: 24,
    32: 32,
    40: 40,
    48: 48,
    64: 64,
    80: 80,
  },
};

/* TYPOGRAPHY */
const family = {
  sans: "'Work Sans', sans-serif",
  mono: 'monospace',
};

const size = {
  10: 10,
  12: 12,
  14: 14,
  16: 16,
  20: 20,
  24: 24,
  32: 32,
  40: 40,
  56: 56,
};
const weight = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};
const lineHeight = {
  114: '114%',
  120: '120%',
  125: '125%',
  133: '133%',
  150: '150%',
  160: '160%',
};
const letterSpacing = null;

tokens[TYPOGRAPHY] = {
  family,
  size,
  weight,
  lineHeight,
  letterSpacing,
};

const defaultVariant = {
  family: family.sans,
  size: size['16'],
  weight: weight.medium,
  lineHeight: lineHeight['150'],
  letterSpacing: 'normal',
};

tokens[TYPE_VARIANT] = {
  body: {
    ...defaultVariant,
  },
  body_short: {
    ...defaultVariant,
    lineHeight: lineHeight['125'],
  },
  body_large: {
    ...defaultVariant,
    size: size['20'],
    lineHeight: lineHeight['160'],
  },
  smaller: {
    ...defaultVariant,
    size: size['12'],
    lineHeight: lineHeight['125'],
  },
  label: {
    ...defaultVariant,
    size: size['12'],
    lineHeight: lineHeight['120'],
  },
  caption: {
    ...defaultVariant,
    size: size['12'],
    lineHeight: lineHeight['133'],
  },
  heading_6: {
    ...defaultVariant,
    weight: weight.bold,
    lineHeight: lineHeight['150'],
  },
  heading_5: {
    ...defaultVariant,
    size: size['20'],
    lineHeight: lineHeight['125'],
    weight: weight.extrabold,
  },
  heading_4: {
    ...defaultVariant,
    size: size['24'],
    lineHeight: lineHeight['133'],
    weight: weight.extrabold,
  },
  heading_3: {
    ...defaultVariant,
    size: size['32'],
    lineHeight: lineHeight['125'],
    weight: weight.extrabold,
  },
  heading_2: {
    ...defaultVariant,
    size: size['40'],
    lineHeight: lineHeight['120'],
    weight: weight.extrabold,
  },
  heading_1: {
    ...defaultVariant,
    size: size['56'],
    lineHeight: lineHeight['114'],
    weight: weight.extrabold,
  },
};

/* COLOR */

const palette = {
  primary: Color('#dd5928'),
  secondary: Color('#474d66'),
  dark: Color('#000000'),
  light: Color('#ffffff'),
  orange100: Color('#f9e0d7'),
  orange200: Color('#f2beab'),
  orange300: Color('#eb9c7f'),
  orange400: Color('#e47453'),
  orange500: Color('#dd5928'),
  orange600: Color('#b5461d'),
  orange700: Color('#893516'),
  neutral100: Color('#e6e8f0'),
  neutral200: Color('#d8dae5'),
  neutral300: Color('#c1c4d6'),
  neutral400: Color('#8f95b2'),
  neutral500: Color('#696f8c'),
  neutral600: Color('#474d66'),
  neutral700: Color('#101840'),
  green100: Color('#f5fbf8'),
  green200: Color('#eef8f4'),
  green300: Color('#dcf2ea'),
  green400: Color('#a3e6cd'),
  green500: Color('#52bd94'),
  green600: Color('#428777'),
  green700: Color('#317159'),
  yellow100: Color('#fffaf1'),
  yellow200: Color('#ffefd2'),
  yellow300: Color('#ffdfa6'),
  yellow400: Color('#ffd079'),
  yellow500: Color('#ffb020'),
  yellow600: Color('#996a13'),
  yellow700: Color('#66460d'),
  red100: Color('#fdf4f4'),
  red200: Color('#f9dada'),
  red300: Color('#f4b6b6'),
  red400: Color('#ee9191'),
  red500: Color('#d14343'),
  red600: Color('#a73636'),
  red700: Color('#7d2828'),
  blue100: Color('#f3f6ff'),
  blue200: Color('#ebf0ff'),
  blue300: Color('#d6e0ff'),
  blue400: Color('#9db5ff'),
  blue500: Color('#3366ff'),
  blue600: Color('#2952cc'),
  blue700: Color('#1f3d99'),
  violet100: Color('#f8f7fd'),
  violet200: Color('#e7e4f9'),
  violet300: Color('#d0caf4'),
  violet400: Color('#b8afee'),
  violet500: Color('#897ae3'),
  violet600: Color('#6e62b6'),
  violet700: Color('#524988'),
  teal100: Color('#f2fcfd'),
  teal200: Color('#d3f5f7'),
  teal300: Color('#a8eaef'),
  teal400: Color('#7ce0e6'),
  teal500: Color('#25cbd6'),
  teal600: Color('#10899e'),
  teal700: Color('#0f5156'),
  pink100: Color('#fef5fb'),
  pink200: Color('#fbddf3'),
  pink300: Color('#f8bbe7'),
  pink400: Color('#f499da'),
  pink500: Color('#ed55c2'),
  pink600: Color('#be449b'),
  pink700: Color('#8e3374'),
};

tokens[COLOR] = {
  DEFAULT: {
    ...palette,
    primary: palette.orange500,
    primaryHover: palette.orange400,
    primaryPressed: palette.orange600,
  },
  text: {
    standard: palette.neutral700,
    additional: palette.neutral500,
    disabled: palette.neutral300,
    link: palette.orange500,
    linkHover: palette.orange400,
    linkActive: palette.orange600,
    linkVisited: palette.orange600,
    info: palette.neutral600,
    warning: palette.yellow500,
    success: palette.green500,
    error: palette.red500,
  },
};

/* SHADOW */

/*
  - ground: 0
  - card: 1
  - dropdown: 2
  - notification: 3
  - navigation: 4
  - modal: 5
*/
tokens[SHADOW] = {
  level: {
    0: [Shadow({ y: 2, blur: 8 }), Shadow({ y: 1, blur: 2 })],
    1: [Shadow({ y: 4, blur: 16 }), Shadow({ y: 2, blur: 4 })],
    '1Hover': [Shadow({ y: 6, blur: 24 }), Shadow({ y: 3, blur: 6 })],
    '1Active': [Shadow({ y: 2, blur: 8 }), Shadow({ y: 1, blur: 2 })],
    2: [Shadow({ y: 8, blur: 32 }), Shadow({ y: 4, blur: 8 })],
    '2Hover': [Shadow({ y: 10, blur: 40 }), Shadow({ y: 5, blur: 10 })],
    '2Active': [Shadow({ y: 6, blur: 24 }), Shadow({ y: 3, blur: 6 })],
    3: [Shadow({ y: 12, blur: 48 }), Shadow({ y: 6, blur: 12 })],
    '3Hover': [Shadow({ y: 14, blur: 56 }), Shadow({ y: 7, blur: 14 })],
    '3Active': [Shadow({ y: 10, blur: 40 }), Shadow({ y: 5, blur: 10 })],
    4: [Shadow({ y: 16, blur: 64 }), Shadow({ y: 8, blur: 16 })],
    '4Hover': [Shadow({ y: 18, blur: 72 }), Shadow({ y: 9, blur: 18 })],
    '4Active': [Shadow({ y: 14, blur: 56 }), Shadow({ y: 7, blur: 14 })],
    5: [Shadow({ y: 20, blur: 80 }), Shadow({ y: 10, blur: 20 })],
    '5Hover': [Shadow({ y: 22, blur: 88 }), Shadow({ y: 11, blur: 22 })],
    '5Active': [Shadow({ y: 18, blur: 72 }), Shadow({ y: 9, blur: 18 })],
  },
};

/* RADIUS */

tokens[RADIUS] = {
  DEFAULT: {
    1: 1,
    2: 2,
    4: 4,
    8: 8,
    12: 12,
  },
};

/* OPACITY */

tokens[OPACITY] = {
  DEFAULT: {
    50: 0.5,
  },
};

/* MOTION */

tokens[MOTION] = {
  duration: {
    immediate: 100,
    fast: 200,
    slower: 600,
    deliberate: 800,
  },
  easing: {
    standard: 'cubic-bezier(0.42, 0, 0.58, 1)',
    enter: 'cubic-bezier(0.390, 0.575, 0.565, 1)',
  },
};

/* Z-INDEX */

tokens[Z_INDEX] = {
  DEFAULT: {
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    60: 60,
    70: 70,
  },
};

export default function () {
  // a copy to avoid any outputs accidentally mutating it
  return { ...tokens };
}
