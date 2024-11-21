"use strict";
function add(a, b) {
    return a + b;
}
add("hello", "world");
add(1, 2);
// 위와 같은 상황에서 함수를 하나로 만드는 법
function saySometing(word) {
    if (typeof word === "string") {
        return word;
    }
    else if (Array.isArray(word)) {
        return word.join("");
    }
    throw new Error("unable to say someting");
}
saySometing(["hello", "world"]);
function saySometing2(word) {
    if (typeof word === "string") {
        return word;
    }
    else if (Array.isArray(word)) {
        return word.join(" ");
    }
    throw new Error("unable to say someting");
}
console.log(saySometing2(["hello", "world"]));
