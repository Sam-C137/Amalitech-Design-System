export const getComponentIndex = (() => {
  let counter = 1;
  return function () {
    return `${counter++}`;
  };
})();