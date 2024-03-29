// Append to object
// Implement a type that adds a new field to the interface. The type takes the three arguments.
// The output should be an object with the new field.
// For example

type Test = {id: "1"};
type Result = AppendToObject<Test, "value", 4>; // expected to be { id: '1', value: 4 }

// --------------Solution--------------
type AppendToObject<O extends {}, P extends string, V extends unknown> = {
  [K in keyof O | P]: K extends keyof O ? O[K] : V;
};

export {};
