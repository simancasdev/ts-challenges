// Last of Array
// Implement a generic Last<T> that takes an Array T and returns its last element.
// For example

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1

// --------------Solution--------------
type Last<T extends unknown[]> = T extends [...infer _, infer LastItem]
  ? LastItem
  : never;

export {};
