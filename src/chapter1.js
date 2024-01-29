/**
 * 클래스
 */

let studentA = {
  name: "woodstock",
  grade: "A+",
  hp: 70,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 필드
  name;
  grade;
  hp;

  // 생성자
  constructor(name, grade, hp) {
    this.name = name;
    this.grade = grade;
    this.hp = hp;
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name}입니다.`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, hp, favoriteSkill) {
    super(name, grade, hp);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper(
  "woodstock",
  "A",
  65,
  "TypeScript"
);
console.log(studentDeveloper);
studentDeveloper.programming();

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("Snoopy", "B+", 100);
console.log(studentB);
studentB.study();
studentB.introduce();
