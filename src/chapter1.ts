// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = "'hello'";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// 리터럴 타입
// 리터럴 -> 값
let numA: 10 = 10;
let strA: "hello" = "hello";

// 에러메세지
numA = 12; // '12' 형식은 '10' 형식에 할당할 수 없습니다.
strA = "bye"; // '"bye:' 형식은 '"hello"' 형식에 할당할 수 없습니다.

let boolA: true = false; // 'false' 형식은 'true' 형식에 할당할 수 없습니다.
