// partial
interface Address {
  email: string;
  address: string;
}

const me = {};

const you: Partial<Address> = {
  email: "test@abc.com",
};

const all: Address = {
  email: "test@abc.com",
  address: "john",
};

// pick
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "clean room",
  completed: false,
};

// omit
interface Todo2 {
  title: string;
  desc: string;
  completed: boolean;
  createAt: number;
}

type TodoPreview2 = Omit<Todo2, "desc">;

const todo2: TodoPreview2 = {
  title: "clean room",
  completed: true,
  createAt: 11111111,
};

// required
type User = {
  firstName: string;
  lastName?: string;
};

let fistUser: User = {
  firstName: "john",
};

// let lastUser: Required<User> = {
//   firstName: "kim",
// };

// record
interface CatInfo {
  age: number;
  bread: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, bread: "persian" },
  boris: { age: 5, bread: "maine coon" },
  mordred: { age: 16, bread: "british shorthair" },
};

type T0 = ReturnType<() => string>;
type T1 = ReturnType<(s: string) => void>;

function fn(str: string) {
  return str;
}

const a: ReturnType<typeof fn> = "hello";
// const b: ReturnType<typeof fn> = true; // Type 'boolean' is not assignable to type 'string'
