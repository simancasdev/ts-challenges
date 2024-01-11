// Unshift
// Implement the type version of Array.unshift
// For example:

type Result = Unshift<[1, 2], 0>; // [0, 1, 2]

// --------------Solution--------------
type Unshift<T extends number[], K extends number> = [K, ...T];

export {};
