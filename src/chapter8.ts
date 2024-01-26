/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
  // instanceof 타입가드 : 내장 클래스 또는 직접 만든 클래스에만 사용가능, 직접 만든 타입과 함께 사용은 ❌
  else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value instanceof Person) {
    // Error : 'Person'은(는) 형식만 참조하지만, 여기서는 값으로 사용되고 있습니다.
  }
}
