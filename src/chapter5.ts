/**
 * 대수 타입
 * 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * 합집합 타입과 교집합 타입이 존재한다.
 */

/**
 * 합집합 (Union) 타입
 */

let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

/* let union4: Union1 = {
  // ❌
  name: "",
}; */

/**
 * 교집합 (Intersection) 타입
 */

let variable: number & string; // never 타입으로 추론된다

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};
