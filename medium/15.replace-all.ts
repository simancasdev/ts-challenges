// ReplaceAll
// Implement ReplaceAll<S, From, To> which replace the all
// the substring From with To in the given string S
// For example

type replaced = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'

// --------------Solution--------------
type ReplaceAll<
  S extends string,
  L extends string,
  R extends string
> = S extends `${infer S1}${L}${infer S2}`
  ? `${S1}${R}${ReplaceAll<S2, L, R>}`
  : S;

export {};
