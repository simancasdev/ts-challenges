// Includes
// Implement the JavaScript Array.includes function in the type system.
// A type takes the two arguments. The output should be a boolean true or false.

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Santana">; // expected to be `false`

// --------------Solution--------------
type Includes<T extends string[], K extends string> = K extends T[number]
  ? true
  : false;

export {};
