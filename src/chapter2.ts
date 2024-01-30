/**
 * 첫번째 사례
 */
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/**
 * 두번째 사례
 */

// 세번째 사례
// 반환값의 타입을 배열의 첫번째 요소의 타입이 되도록 하려면 다음과 같이 튜플 타입과 나머지 파라미터를 이용하면 된다.
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);

let str = returnFirstValue([1, "hello", "mynameis"]);

/**
 * 네번째 사례
 */
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);

let var2 = getLength("12345");

let var3 = getLength({ length: 10 });

let var4 = getLength(10); // Error : 'number' 형식의 인수는 '{ length: number; }' 형식의 매개 변수에 할당될 수 없습니다.
