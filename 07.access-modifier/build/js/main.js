"use strict";
// boolean
let boolean;
let falseBoolean = false;
// number
let number;
let integer = 6;
let float = 1.2345;
// string
let string;
let firstName = "Doe";
// array - 한 가지 타입만 가지는 배열
let names1 = ["john", "kim"];
let names2 = ["kim", "john"];
// array - 여러 타입을 가지는 배열(Union)
let array1 = ["john", 1, 2];
let array2 = ["john", 1, 2];
// array - 여러 타입을 단언할 수 없는 경우(any)
let someArray = ["john", 1, [], {}, false];
// interface, type
// readonly, readonly array - 읽기 전용 배열
let stringArray = ["a", "b"];
let numberArray = [1, 2, 3];
// readonly 재할당, 추가 불가
// stringArray.push("c");
// numberArray[0] = 3;
// tuple
let tuple1;
tuple1 = ["a", 1];
// tuple1 = ["a", 1, 2];
// tuple1 = [1, "a"];
let users;
// users[([1, "john"], [2, "kim"])];
// Type '(string | number)[]' cannot be used as an index type.
let tuple2;
tuple2 = ["a", 1];
tuple2.push(2);
console.log(tuple2); // ['a', 1, 2]
// any - 비권장(서드파티 라이브러리의 타입을 추론할 수 없는 경우 사용)
let any = "abc";
any = 1;
// unknown - 다른 변수에 할당 할 수 없다
let unknown = 123;
// let string1: string = unknown //Type 'unknown' is not assignable to type 'string'
// unknown에 명시하는 방법
let string2 = unknown;
// object
// new Date(), typeof null도 obj라고 인식함
let obj = {};
let arr = [];
// let nul: object = null; // strict 모드 영향
let date = new Date();
const obj1 = {
    id: 1,
    title: "타이틀1",
    desc: "설명",
};
// union
let union;
union = "hi";
union = 123;
// union = []; //Type 'undefined[]' is not assignable to type 'string | number'.
// function
// let func1; //Variable 'func1' implicitly has an 'any' type, but a better type may be inferred from usage.
let func1;
func1 = function (x, y) {
    return x * y;
};
// function에 return이 없을 때
let func2;
func2 = function () {
    console.log("hi");
};
// null, undefined - strictNullChecks 옵션 연관(할당 되지 못하도록 해야 함)
// let number1: number = undefined;
// let string9: string = null;
// let object: { a: 10; b: false } = undefined;
// let array: any[] = null;
// let undefined1: undefined = null;
// let null1: null = undefined;
// let void1: void = null;
// 단 void는 undefined 할당 가능
let void2 = undefined;
// void
function greeting() {
    console.log("hii");
}
const hi = greeting();
console.log(hi); // undefined
// never - 항상 오류를 리턴하거나 리턴 값을 내보내지 않을 때
function throwError() {
    throw new Error("err!");
}
function keepProcessing() {
    while (true) {
        console.log("hello");
    }
}
// 빈 배열을 타입으로 잘못 선언한 경우에도 never
const never = [];
// never.push(1); //Argument of type 'number' is not assignable to parameter of type 'never'.
