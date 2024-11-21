"use strict";
const bodyElement1 = document.querySelector("body");
// bodyElement1.innerText = "hello";
// 'bodyElement' is possibly 'null
// 타입 단언
const bodyElement2 = document.querySelector("body");
// ! not null 타입 단언
const bodyElement3 = document.querySelector("body");
bodyElement3.innerText = "hello";
// 타입 가드
const bodyElement4 = document.querySelector("body");
if (bodyElement4) {
    bodyElement4.innerText = "hello";
}
// 잘못된 사용
function func(arg) {
    // return arg.toLowerCase();
    // err
    return arg.toLowerCase();
    // Uncaught TypeError: Cannot read properties of null (reading 'toLowerCase')
}
func("hi");
func(null);
