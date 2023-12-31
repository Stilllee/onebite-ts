// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["Hello", "I'm", "Woodstock"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

// 튜플타입으로 순서가 다른 값을 잘못 넣을 경우를 방지 할 수 있음
const users: [string, number][] = [
  ["Woodstock", 1],
  ["Charlie Brown", 2],
  ["Snoopy", 3],
  ["Sally Brown", 4],
  // [5, "Schroder"], // 오류를 일으키는 코드
];
