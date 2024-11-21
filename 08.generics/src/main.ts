// function getArrayLength(arr: number[] | string[] | boolean[]): number {
//   return arr.length;
// }

// const array1 = [1, 2, 3];
// const array2 = ["a", "b", "c"];
// const array3 = [true, false, false];
// getArrayLength(array1);
// getArrayLength(array2);
// getArrayLength(array3);

// 제네릭 적용 시
function getArrayLength<T>(arr: T[]) {
  return arr.length;
}

const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];
const array3 = [true, false, false];

getArrayLength<number>(array1);
getArrayLength<string>(array2);
getArrayLength<boolean>(array3);

interface Vehicle<T> {
  name: string;
  color: string;
  option: T;
}

const car: Vehicle<{ price: number }> = {
  name: "car",
  color: "red",
  option: {
    price: 1000,
  },
};

const bike: Vehicle<boolean> = {
  name: "bike",
  color: "blue",
  option: true,
};

// 제네릭 더 알아보기
const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const arr = makeArr<number, number>(4, 5);
const arr2 = makeArr<string, string>("a", "b");

const makeArrB = <X, Y = string>(x: X, y: Y): [X, Y] => {
  return [x, y];
};
const arrB = makeArrB<string>("a", "b");

// extends와 같이 사용
const makeFullName = (obj: { firstName: string; lastName: string }) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

makeFullName({ firstName: "juri", lastName: "lee" });

const makeFullName2 = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

makeFullName2({ firstName: "juri", lastName: "lee", location: "seoul" });
