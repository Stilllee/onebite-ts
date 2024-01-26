/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

// value => number : toFixed
// value => string : toUpperCase
function func(value: number | string) {
  value; // value: number | string
  value.toFixed(); // 'string | number' 형식에 'toFixed' 속성이 없습니다. 'string' 형식에 'toFixed' 속성이 없습니다.
  value.toUpperCase(); // 'string | number' 형식에 'toUpperCase' 속성이 없습니다.   'number' 형식에 'toUpperCase' 속성이 없습니다.

  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
