// KebabCase
// Replace the camelCase or PascalCase string with kebab-case.
// FooBarBaz -> foo-bar-baz
// For example

type FooBarBaz = KebabCase<"FooBarBaz">;
const foobarbaz: FooBarBaz = "foo-bar-baz";

type DoNothing = KebabCase<"do-nothing">;
const doNothing: DoNothing = "do-nothing";

// --------------Solution--------------
type KebabCase<T extends string> = T extends `${infer S1}${infer S2}`
  ? S2 extends Uncapitalize<S2>
    ? `${Uncapitalize<S1>}${KebabCase<S2>}`
    : `${Uncapitalize<S1>}-${KebabCase<S2>}`
  : T;

export {};
