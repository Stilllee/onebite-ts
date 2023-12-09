// any
// 특정 변수의 타입을 확실히 모를 때 사용할 수 있는 타입
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

// anyVar에 함수를 할당하고
// 문자열이나 숫자 관련 메서드를 호출해도 타입에러는 일으키지 않지만,
// 컴파일하거나 ts-node를 실행하면 런타임 오류가 발생한다.
anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;
