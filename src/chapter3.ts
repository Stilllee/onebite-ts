/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; // Error : 'A' 형식은 'B' 형식에 할당할 수 없습니다. 'number' 형식은 '10' 형식에 할당할 수 없습니다.

// 기준 2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 'D' 형식은 'C' 형식에 할당할 수 없습니다. 'value' 및 'value' 매개 변수의 형식이 호환되지 않습니다. 'number' 형식은 '10' 형식에 할당할 수 없습니다.
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

animalFunc = dogFunc; // Error : '(dog: Dog) => void' 형식은 '(animal: Animal) => void' 형식에 할당할 수 없습니다. 'dog' 및 'animal' 매개 변수의 형식이 호환되지 않습니다. 'color' 속성이 'Animal' 형식에 없지만 'Dog' 형식에서 필수입니다.
let textFunc = (animal: Animal) => {
  console.log(animal.name);
  console.log(animal.color); // Error : 'Animal' 형식에 'color' 속성이 없습니다.
};

dogFunc = animalFunc;
let textFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때
