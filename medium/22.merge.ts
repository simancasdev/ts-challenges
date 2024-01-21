// Merge
// Merge two types into a new type. Keys of the second type overrides keys of the first type.
// For example

type foo = {
  name: string;
  age: string;
};
type coo = {
  age: number;
  sex: string;
};

type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}

// --------------Solution--------------
type Merge<
  T extends Record<string | number, unknown>,
  P extends Record<string | number, unknown>
> = {
  [K in keyof T | keyof P]: K extends keyof P
    ? P[K]
    : K extends keyof T
    ? T[K]
    : never;
};

export {};
