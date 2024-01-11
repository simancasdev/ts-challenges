// Parameters
// Implement the built-in Parameters generic without using it.
// For example:

const hello = "string";

const foo = (arg1: string, arg2: number): void => {};

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]

// --------------Solution--------------
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never;

export {};
