const callAll = <T extends (...args: any) => any>(...fns: T[]) => (
  ...args: Parameters<T>
) => fns.forEach(fn => fn?.(...args));

const fns = [
  (x: number) => x,
  (s: string) => s,
  (a: string, b: number) => console.log({ a, b }),
];

callAll(...fns)(1);

export { callAll };
