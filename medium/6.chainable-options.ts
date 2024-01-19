// Chainable Options

// Chainable options are commonly used in Javascript.
// But when we switch to TypeScript, can you properly type it?
// In this challenge, you need to type an object or a class -
// whatever you like - to provide two function option(key, value)
// and get(). In option, you can extend the current config type by the
// given key and value. We should about to access the final result via get.
// For example

declare const config: Chainable;

const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", {value: "Hello World"})
  .get();

const a: typeof result = {
  foo: 2,
  name: "hola",
  bar: {
    value: "2",
  },
};

// expect the type of result to be:
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}

// --------------Solution--------------
type Chainable<T = {}> = {
  option<K extends string, V>(
    key: Exclude<K, keyof T>,
    value: V
  ): Chainable<Omit<T, K> & Record<K, V>>;
  get(): T;
};

export {};
