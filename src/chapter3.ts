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
  let unknownVar: unknown;

  let num: number = unknownVar; // 오류메세지: 'unknown' 형식은 'number' 형식에 할당할 수 없습니다.
  let str: string = unknownVar; // 오류메세지: 'unknown' 형식은 'string' 형식에 할당할 수 없습니다.
  let bool: boolean = unknownVar; // 오류메세지: 'unknown' 형식은 'boolean' 형식에 할당할 수 없습니다.
}
