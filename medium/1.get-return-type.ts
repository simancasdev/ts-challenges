// Get Return Type medium
// Implement the built-in ReturnType<T> generic without using it.
// For example

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type a = MyReturnType<typeof fn>; // should be "1 | 2"

// --------------Solution--------------
type MyReturnType<T extends (arg: boolean) => unknown> = T extends (
  ...args: any
) => infer RT
  ? RT
  : never;
