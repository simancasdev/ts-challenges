// Capitalize
// Implement Capitalize<T> which converts the first letter of
// a string to uppercase and leave the rest as-is.
// For example

type capitalized = Capitalize<"hello world">; // expected to be 'Hello world'

// --------------Solution--------------
type Capitalize<T extends string> = T extends `${infer Letter}${infer Text}`
  ? `${Uppercase<Letter>}${Text}`
  : never;

export {};
