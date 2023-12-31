// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입
function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

// void타입에는 undefined만 할당할 수 있다.
let a: void;
a = undefined;

// never
// never -> 존재하지 않는
// 불가능한 타입
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let anyVar: any;

let b: never;
// never에는 어떠한 값도 할당할 수 없다.
/* b = 1; // 에러메세지: 'number' 형식은 'never' 형식에 할당할 수 없습니다.
b = {}; // 에러메세지: '{}' 형식은 'never' 형식에 할당할 수 없습니다.
b = ""; // 에러메세지: 'string' 형식은 'never' 형식에 할당할 수 없습니다.
b = undefined; // 에러메세지: 'undefined' 형식은 'never' 형식에 할당할 수 없습니다.
b = null; // 에러메세지: 'null' 형식은 'never' 형식에 할당할 수 없습니다.
b = anyVar; // 에러메세지: 'any' 형식은 'never' 형식에 할당할 수 없습니다. */
