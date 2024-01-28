/**
 * 인터페이스의 확장
 */

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  name: "wawa"; // 프로퍼티 재정의
  isBark: boolean;
}

const dog: Dog = {
  name: "와와", // Error : '"와와"' 형식은 '"wawa"' 형식에 할당할 수 없습니다.
  color: "white",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}
