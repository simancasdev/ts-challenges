// Absolute
// Implement the Absolute type. A type that take string, number or bigint.
// The output should be a positive number string
// For example

type Test = -100;
type Result = Absolute<Test>; // expected to be "100"

// --------------Solution--------------
type Absolute<N extends number | string> = N extends `${infer _}${infer R}`
  ? R
  : Absolute<`${N}`>;

export {};
