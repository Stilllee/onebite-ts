/**
 * 인터페이스
 */

interface Person {
  readonly name: string; // 읽기 전용 프로퍼티
  hp?: number; // 선택적 프로퍼티

  // 메서드 타입 정의
  // sayHi: () => void; // 함수 표현식, 오버로딩 ❌
  sayHi(): void; // 호출 시그니쳐, 오버로딩 가능 ✅
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "woodstock",
  sayHi: function () {
    console.log("Hi");
  },
};

person.sayHi();

// 인터페이스로 만든 타입을 Union 또는 intersection으로 이용하는 방법
interface Animal {
  name: string;
  age: number;
}

// 방법 1. : 타입 별칭과 함께 사용
type Type1 = number | string | Animal;
type Type2 = number & string & Animal;

// 방법 2. : 타입 주석에서 직접 사용
const animal: Animal | number = {
  name: "푸바오",
  age: 3,
};
