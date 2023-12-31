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

/**
 * 타입 단언의 규칙
 * 값 as 단언 (단언식)
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; // ✅ 10은 number타입, never는 모든 타입의 서브타입 -> A가 B의 슈퍼타입
let num2 = 10 as unknown; // ✅ 10은 number타입, unknown은 모든 타입의 슈퍼타입인 전체 집합타임 -> A가 B의 서브타입
let num3 = 10 as string; // ❌ 단언 불가
