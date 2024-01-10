// Implement the built-in Exclude<T, U>
// Exclude from T those types that are assignable to U
// For example:

type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'

// --------------Solution--------------
type MyExclude<T extends string, K extends T> = T extends K ? never : T;

export {};
