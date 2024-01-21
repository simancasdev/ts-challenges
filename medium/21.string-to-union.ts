// String to Union
// Implement the String to Union type. Type take string argument. The output should be a union of input letters
// For example

type Test = "123";
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"

// --------------Solution--------------
type StringToUnion<
  S extends string,
  U extends string[] = []
> = S extends `${infer K}${infer L}` ? StringToUnion<L, [...U, K]> : U[number];

export {};
