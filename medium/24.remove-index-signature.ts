// Remove Index Signature
// Implement RemoveIndexSignature<T> , exclude the index signature from object types.
// For example:

type Foo = {
  [key: string]: any;
  foo(): void;
};

type A = RemoveIndexSignature<Foo>; // expected { foo(): void }
// --------------Solution--------------
type RemoveIndexSignature<T, L = PropertyKey> = {
  [K in keyof T as L extends K ? never : K extends L ? K : never]: T[K];
};

export {};
