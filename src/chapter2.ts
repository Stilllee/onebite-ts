/**
 * 인터페이스의 확장
 */

type Animal = {
  // 인터페이스는 인터페이스 뿐만 아니라 타입 별칭으로 정의된 객체도 확장할 수 있다.
  name: string;
  color: string;
};

interface Dog extends Animal {
  isBark: boolean;
}

const dog: Dog = {
  name: "와와",
  color: "white",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "개냥이",
  color: "cheese",
  isBark: false,
  isScratch: true,
};
