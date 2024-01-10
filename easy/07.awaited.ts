// If we have a type which is a wrapped type like Promise, how we can get the type which is inside the wrapped type?
// For example: if we have Promise<ExampleType> how to get ExampleType?

type ExampleType = Promise<string>;
type Result = MyAwaited<ExampleType>; // string

// --------------Solution--------------
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer A>
  ? A
  : never;

export {};
