// Promise.all
// Type the function PromiseAll that accepts an array of PromiseLike objects,
// the returning value should be Promise<T> where T is the resolved result array.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const);

// --------------Solution--------------
type Awaited<T> = T extends Promise<infer R> ? Awaited<R> : T;

declare function PromiseAll<L extends any[]>(
  params: readonly [...L]
): Promise<{
  [P in keyof L]: Awaited<L[P]>;
}>;

export {};
