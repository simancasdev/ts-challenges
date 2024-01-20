// Replace
// Implement Replace<S, From, To> which replace the string
// From with To once in the given string S
// For example

type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'

// --------------Solution--------------

type Replace<
  S extends string,
  L extends string,
  N extends string
> = S extends `${infer F}${L}${infer W}` ? `${F}${N}${W}` : never;

export {};
