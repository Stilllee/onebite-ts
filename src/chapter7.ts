/**
 * 타입 단언
 */
type Person = {
  name: string;
  age: number;
};

let person: Person = {} as Person;
person.name = "woodstock";
person.age = 345;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "치와와",
} as Dog;
