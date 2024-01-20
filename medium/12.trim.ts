// Trim
// Implement Trim<T> which takes an exact string type and returns a
// new string with the whitespace from both ends removed.
// For example

type trimmed = Trim<"  Hello World  ">; // expected to be 'Hello World'

// --------------Solution--------------
type Rule = " ";
type Trim<T extends string> = T extends `${Rule}${infer Text}${Rule}`
  ? Trim<Text>
  : T;

export {};
