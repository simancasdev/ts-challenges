// Flatten
// In this challenge, you would need to write a type
// that takes an array and emitted the flatten array type.
// For example:

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]

// --------------Solution--------------
type Flatten<S extends any[], T extends any[] = []> = S extends [
  infer N1,
  ...infer N2
]
  ? N1 extends any[]
    ? Flatten<[...N1, ...N2], T>
    : Flatten<[...N2], [...T, N1]>
  : T;

export {};
