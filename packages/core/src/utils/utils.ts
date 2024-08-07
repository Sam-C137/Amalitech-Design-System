export function throttle(fn: Function, threshhold: number, scope?: any): () => void {
  threshhold || (threshhold = 250);
  let last: number, deferTimer: ReturnType<typeof setTimeout>;
  return function (this: any) {
    const context = scope || this;
    const now = +new Date(),
      args = arguments;
    if (last && now < last + threshhold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(() => {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}