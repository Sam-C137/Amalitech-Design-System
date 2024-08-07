/**
 * Generates a class names string from an array.
 *
 */
export const getClassNames = (classNames: (string | false)[]) =>
  classNames.filter((className) => className).join(' ')
