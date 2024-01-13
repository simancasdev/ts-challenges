// Omit
// Implement the built-in Omit<T, K> generic without using it.
// Constructs a type by picking all properties from T and then removing K
// For example

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};

// --------------Solution--------------
type MyOmit<T, L extends keyof T> = {
  [K in keyof T as K extends L ? never : K]: T[K];
};
