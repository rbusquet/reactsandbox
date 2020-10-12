function callAll<T extends (...args: any[]) => any>(...fns: T[]) {
  return (...args: Parameters<T>) => fns.forEach(fn => fn?.(...args));
}

const fns = [
  (x: number) => x,
  (s: string) => s,
  (a: string, b: number) => console.log({ a, b }),
  () => console.log("oops"),
];

const callAllResult = callAll(...fns);
// type of callAllResult is now (...args: [x: number] | [a: string, b: number]) => void
callAllResult("1", 2);

export { callAll };
