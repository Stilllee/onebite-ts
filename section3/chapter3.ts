/**
 * unknown 타입
 * 타입계층도의 최상단
 */

function unknownExam() {
  // 모든 타입은 unknown타입으로 업캐스트 가능
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 다운캐스트는 불가능
  /* let unknownVar: unknown;

  let num: number = unknownVar; // 오류메세지: 'unknown' 형식은 'number' 형식에 할당할 수 없습니다.
  let str: string = unknownVar; // 오류메세지: 'unknown' 형식은 'string' 형식에 할당할 수 없습니다.
  let bool: boolean = unknownVar; // 오류메세지: 'unknown' 형식은 'boolean' 형식에 할당할 수 없습니다. */
}

/**
 * never 타입
 * 타입계층도의 최하단
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // never타입은 모든 타입으로 업캐스트 가능
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다른 타입이 never타입으로 다운캐스트 불가능
  /* let never1: never = 10; // 오류메세지: 'number' 형식은 'never' 형식에 할당할 수 없습니다.
  let never2: never = "string"; // 오류메세지: 'string' 형식은 'never' 형식에 할당할 수 없습니다.
  let never3: never = true; // 오류메세지: 'true' 형식은 'never' 형식에 할당할 수 없습니다. */
}

/**
 * void 타입
 * undefined의 슈퍼타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined;
}

/**
 * any 타입
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  // let neverVar: never;

  // unknown타입이 any타입으로 다운캐스트 가능
  anyVar = unknownVar;
  // any타입이 undefined로 다운캐스트 가능
  undefinedVar = anyVar;

  // 예외적으로 any타입이 never타입으로는 다운캐스트 불가능
  // neverVar = anyVar; // 오류메세지: 'any' 형식은 'never' 형식에 할당할 수 없습니다.
}
