// Implement the built-in Pick<T, K> generic without using it.
// Constructs a type by picking the set of properties K from T
// For example:

interface Todo {
  title: string;
  completed: boolean;
  description: string;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

// --------------Solution--------------
type MyPick<T, P extends keyof T> = {
  [K in P]: T[K];
};
