export const spacing = {
  1: '0.0625rem',
  2: '0.125rem',
  4: '0.25rem',
  8: '0.5rem',
  12: '0.75rem',
  16: '1rem',
  24: '1.5rem',
  32: '2rem',
  40: '2.5rem',
  48: '3rem',
  64: '4rem',
  80: '5rem',
};

export const font = {
  family: { sans: "'Work Sans', sans-serif", mono: 'monospace' },
  size: {
    10: '0.625rem',
    12: '0.75rem',
    14: '0.875rem',
    16: '1rem',
    20: '1.25rem',
    24: '1.5rem',
    32: '2rem',
    40: '2.5rem',
    56: '3.5rem',
  },
  weight: {
    thin: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeight: {
    114: '114%',
    120: '120%',
    125: '125%',
    133: '133%',
    150: '150%',
    160: '160%',
  },
};

export const fontVariant = {
  body: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: '150%',
    letterSpacing: 'normal',
  },
  bodyShort: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: '125%',
    letterSpacing: 'normal',
  },
  bodyLarge: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: '160%',
    letterSpacing: 'normal',
  },
  smaller: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: '125%',
    letterSpacing: 'normal',
  },
  label: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: '120%',
    letterSpacing: 'normal',
  },
  caption: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: '133%',
    letterSpacing: 'normal',
  },
  heading6: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: '150%',
    letterSpacing: 'normal',
  },
  heading5: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: '1.25rem',
    fontWeight: 800,
    lineHeight: '125%',
    letterSpacing: 'normal',
  },
  heading4: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: '1.5rem',
    fontWeight: 800,
    lineHeight: '133%',
    letterSpacing: 'normal',
  },
  heading3: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: '2rem',
    fontWeight: 800,
    lineHeight: '125%',
    letterSpacing: 'normal',
  },
  heading2: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: '2.5rem',
    fontWeight: 800,
    lineHeight: '120%',
    letterSpacing: 'normal',
  },
  heading1: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: '3.5rem',
    fontWeight: 800,
    lineHeight: '114%',
    letterSpacing: 'normal',
  },
};

export const color = {
  primary: 'hsl(16.19999999999999, 72.7%, 51.2%)',
  secondary: 'hsl(228.39999999999998, 17.9%, 33.9%)',
  dark: 'hsl(0, 0%, 0%)',
  light: 'hsl(0, 0%, 100%)',
  orange100: 'hsl(15.899999999999977, 73.9%, 91%)',
  orange200: 'hsl(16.100000000000023, 73.2%, 81%)',
  orange300: 'hsl(16.100000000000023, 73%, 71%)',
  orange400: 'hsl(13.699999999999989, 72.9%, 61%)',
  orange500: 'hsl(16.19999999999999, 72.7%, 51.2%)',
  orange600: 'hsl(16.19999999999999, 72.4%, 41.2%)',
  orange700: 'hsl(16.19999999999999, 72.3%, 31.2%)',
  neutral100: 'hsl(228, 25%, 92.2%)',
  neutral200: 'hsl(230.79999999999995, 20%, 87.3%)',
  neutral300: 'hsl(231.39999999999998, 20.4%, 79.8%)',
  neutral400: 'hsl(229.70000000000005, 18.5%, 62.9%)',
  neutral500: 'hsl(229.70000000000005, 14.3%, 48%)',
  neutral600: 'hsl(228.39999999999998, 17.9%, 33.9%)',
  neutral700: 'hsl(230, 60%, 15.7%)',
  green100: 'hsl(150, 42.9%, 97.3%)',
  green200: 'hsl(156, 41.7%, 95.3%)',
  green300: 'hsl(158.20000000000005, 45.8%, 90.6%)',
  green400: 'hsl(157.60000000000002, 57.3%, 77.1%)',
  green500: 'hsl(157, 44.8%, 53.1%)',
  green600: 'hsl(166.10000000000002, 34.3%, 39.4%)',
  green700: 'hsl(157.5, 39.5%, 31.8%)',
  yellow100: 'hsl(38.60000000000002, 100%, 97.3%)',
  yellow200: 'hsl(38.69999999999999, 100%, 91.2%)',
  yellow300: 'hsl(38.39999999999998, 100%, 82.5%)',
  yellow400: 'hsl(39, 100%, 73.7%)',
  yellow500: 'hsl(38.69999999999999, 100%, 56.3%)',
  yellow600: 'hsl(39, 77.9%, 33.7%)',
  yellow700: 'hsl(38.39999999999998, 77.4%, 22.5%)',
  red100: 'hsl(0, 69.2%, 97.5%)',
  red200: 'hsl(0, 72.1%, 91.6%)',
  red300: 'hsl(0, 73.8%, 83.5%)',
  red400: 'hsl(0, 73.2%, 75.1%)',
  red500: 'hsl(0, 60.7%, 54.1%)',
  red600: 'hsl(0, 51.1%, 43.3%)',
  red700: 'hsl(0, 51.5%, 32.4%)',
  blue100: 'hsl(225, 100%, 97.6%)',
  blue200: 'hsl(225, 100%, 96.1%)',
  blue300: 'hsl(225.39999999999998, 100%, 92%)',
  blue400: 'hsl(225.29999999999995, 100%, 80.8%)',
  blue500: 'hsl(225, 100%, 60%)',
  blue600: 'hsl(224.89999999999998, 66.5%, 48%)',
  blue700: 'hsl(225.20000000000005, 66.3%, 36.1%)',
  violet100: 'hsl(250, 60%, 98%)',
  violet200: 'hsl(248.60000000000002, 63.6%, 93.5%)',
  violet300: 'hsl(248.60000000000002, 65.6%, 87.5%)',
  violet400: 'hsl(248.60000000000002, 64.9%, 81%)',
  violet500: 'hsl(248.60000000000002, 65.2%, 68.4%)',
  violet600: 'hsl(248.60000000000002, 36.5%, 54.9%)',
  violet700: 'hsl(248.60000000000002, 30.1%, 41%)',
  teal100: 'hsl(185.5, 73.3%, 97.1%)',
  teal200: 'hsl(183.29999999999995, 69.2%, 89.8%)',
  teal300: 'hsl(184.20000000000005, 68.9%, 79.8%)',
  teal400: 'hsl(183.39999999999998, 67.9%, 69.4%)',
  teal500: 'hsl(183.70000000000005, 70.5%, 49.2%)',
  teal600: 'hsl(188.89999999999998, 81.6%, 34.1%)',
  teal700: 'hsl(184.20000000000005, 70.3%, 19.8%)',
  pink100: 'hsl(320, 81.8%, 97.8%)',
  pink200: 'hsl(316, 78.9%, 92.5%)',
  pink300: 'hsl(316.70000000000005, 81.3%, 85.3%)',
  pink400: 'hsl(317.1, 80.5%, 77.8%)',
  pink500: 'hsl(317, 80.9%, 63.1%)',
  pink600: 'hsl(317.20000000000005, 48.4%, 50.6%)',
  pink700: 'hsl(317.1, 47.2%, 37.8%)',
  primaryHover: 'hsl(13.699999999999989, 72.9%, 61%)',
  primaryPressed: 'hsl(16.19999999999999, 72.4%, 41.2%)',
  text: {
    standard: 'hsl(230, 60%, 15.7%)',
    additional: 'hsl(229.70000000000005, 14.3%, 48%)',
    disabled: 'hsl(231.39999999999998, 20.4%, 79.8%)',
    link: 'hsl(16.19999999999999, 72.7%, 51.2%)',
    linkHover: 'hsl(13.699999999999989, 72.9%, 61%)',
    linkActive: 'hsl(16.19999999999999, 72.4%, 41.2%)',
    linkVisited: 'hsl(16.19999999999999, 72.4%, 41.2%)',
    info: 'hsl(228.39999999999998, 17.9%, 33.9%)',
    warning: 'hsl(38.69999999999999, 100%, 56.3%)',
    success: 'hsl(157, 44.8%, 53.1%)',
    error: 'hsl(0, 60.7%, 54.1%)',
  },
};

export const shadow = {
  level: {
    0: {
      standard:
        '0px 2px 8px 0px hsla(0, 0%, 0%, 0.1), 0px 1px 2px 0px hsla(0, 0%, 0%, 0.1)',
    },
    1: {
      standard:
        '0px 4px 16px 0px hsla(0, 0%, 0%, 0.1), 0px 2px 4px 0px hsla(0, 0%, 0%, 0.1)',
      hover:
        '0px 6px 24px 0px hsla(0, 0%, 0%, 0.1), 0px 3px 6px 0px hsla(0, 0%, 0%, 0.1)',
      active:
        '0px 2px 8px 0px hsla(0, 0%, 0%, 0.1), 0px 1px 2px 0px hsla(0, 0%, 0%, 0.1)',
    },
    2: {
      standard:
        '0px 8px 32px 0px hsla(0, 0%, 0%, 0.1), 0px 4px 8px 0px hsla(0, 0%, 0%, 0.1)',
      hover:
        '0px 10px 40px 0px hsla(0, 0%, 0%, 0.1), 0px 5px 10px 0px hsla(0, 0%, 0%, 0.1)',
      active:
        '0px 6px 24px 0px hsla(0, 0%, 0%, 0.1), 0px 3px 6px 0px hsla(0, 0%, 0%, 0.1)',
    },
    3: {
      standard:
        '0px 12px 48px 0px hsla(0, 0%, 0%, 0.1), 0px 6px 12px 0px hsla(0, 0%, 0%, 0.1)',
      hover:
        '0px 14px 56px 0px hsla(0, 0%, 0%, 0.1), 0px 7px 14px 0px hsla(0, 0%, 0%, 0.1)',
      active:
        '0px 10px 40px 0px hsla(0, 0%, 0%, 0.1), 0px 5px 10px 0px hsla(0, 0%, 0%, 0.1)',
    },
    4: {
      standard:
        '0px 16px 64px 0px hsla(0, 0%, 0%, 0.1), 0px 8px 16px 0px hsla(0, 0%, 0%, 0.1)',
      hover:
        '0px 18px 72px 0px hsla(0, 0%, 0%, 0.1), 0px 9px 18px 0px hsla(0, 0%, 0%, 0.1)',
      active:
        '0px 14px 56px 0px hsla(0, 0%, 0%, 0.1), 0px 7px 14px 0px hsla(0, 0%, 0%, 0.1)',
    },
    5: {
      standard:
        '0px 20px 80px 0px hsla(0, 0%, 0%, 0.1), 0px 10px 20px 0px hsla(0, 0%, 0%, 0.1)',
      hover:
        '0px 22px 88px 0px hsla(0, 0%, 0%, 0.1), 0px 11px 22px 0px hsla(0, 0%, 0%, 0.1)',
      active:
        '0px 18px 72px 0px hsla(0, 0%, 0%, 0.1), 0px 9px 18px 0px hsla(0, 0%, 0%, 0.1)',
    },
  },
};

export const radius = { 1: '1px', 2: '2px', 4: '4px', 8: '8px', 12: '12px' };

export const opacity = { 50: 0.5 };

export const motion = {
  duration: {
    immediate: '100ms',
    fast: '200ms',
    slower: '600ms',
    deliberate: '800ms',
  },
  easing: {
    standard: 'cubic-bezier(0.42, 0, 0.58, 1)',
    enter: 'cubic-bezier(0.390, 0.575, 0.565, 1)',
  },
};

export const zIndex = {
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
  60: 60,
  70: 70,
};
