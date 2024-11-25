interface IUser {
  name: string;
  age: number;
  address: string;
}

// type UserKeys = keyof IUser;
// "name" | "age" | "address" union 타입이 반환

const user = {
  name: "john",
  age: 20,
  address: "seoul",
};

type UserKeys = keyof typeof user;

enum UserRole {
  admin,
  manager,
}

type UserRoleKeys = keyof typeof UserRole;
