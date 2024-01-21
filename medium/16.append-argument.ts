// Append Argument
// For given function type Fn, and any type A (any in this context means
// we don't restrict the type, and I don't have in mind any type 😉) create
// a generic type which will take Fn as the first argument, A as the second,
// and will produce function type G which will be the same as Fn but with
// appended argument A as a last one.
// For example

type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number

// --------------Solution--------------
type AppendArgument<Fn extends Function, A extends unknown> = Fn extends (
  ...args: infer Args
) => infer R
  ? (a: Args[0], B: Args[1], x: A) => R
  : never;

export {};
