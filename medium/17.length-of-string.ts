// Length of String
// Compute the length of a string literal, which behaves like String#length.

// --------------Solution--------------
type Length = LengthOfString<"hola">;
type LengthOfString<
  T extends string,
  A extends string[] = []
> = T extends `${infer S}${infer K}`
  ? LengthOfString<K, [...A, S]>
  : A["length"];

export {};
