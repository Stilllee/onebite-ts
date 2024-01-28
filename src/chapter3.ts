/**
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "woodstock",
  age: 100,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
