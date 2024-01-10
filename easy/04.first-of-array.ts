// Implement a generic First<T> that takes an Array T and returns its first element's type.
// For example:

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3

// --------------Solution--------------
type First<T extends (string | number)[]> = T[0];

export {};
