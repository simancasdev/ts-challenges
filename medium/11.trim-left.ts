// Trim Left
// Implement TrimLeft<T> which takes an exact string type and returns
// a new string with the whitespace beginning removed.
// For example

type trimed = TrimLeft<"  Hello World  ">; // expected to be 'Hello World  '

// --------------Solution--------------
type Blank = "\n" | " " | "\t";
type TrimLeft<T> = T extends `${Blank}${infer Text}` ? TrimLeft<Text> : T;

export {};
