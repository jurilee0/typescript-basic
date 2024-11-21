function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
  return a + b;
}

add("hello", "world");
add(1, 2);

// 위와 같은 상황에서 함수를 하나로 만드는 법
function saySometing(word: string | string[]): string {
  if (typeof word === "string") {
    return word;
  } else if (Array.isArray(word)) {
    return word.join("");
  }
  throw new Error("unable to say someting");
}

saySometing(["hello", "world"]);

// 함수 오버로딩으로 만드는 법
function saySometing2(word: string): string;
function saySometing2(words: string[]): string;
function saySometing2(word: any): any {
  if (typeof word === "string") {
    return word;
  } else if (Array.isArray(word)) {
    return word.join(" ");
  }
  throw new Error("unable to say someting");
}
console.log(saySometing2(["hello", "world"]));
