/**
 * 타입 추론
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "woodstock",
  profile: {
    nickname: "woody",
  },
  urls: ["https://velog.io/@orodae"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func() {
  return "hello";
}

function func2(message = "hello") {
  return "hello";
}

let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// d.toFixed(); // 오류

const num = 10; // 10 Number Literal 타입으로 추론
const str = "hello"; // (string | number)[] 타입으로 추론

let arr = [1, "string"]; // (string | number)[] 타입으로 추론
