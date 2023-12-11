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
