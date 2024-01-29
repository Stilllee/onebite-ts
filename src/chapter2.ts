/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "woodstock",
  hp: 100,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  // 필드
  name: string;
  hp: number;
  position: string;

  constructor(name: string, hp: number, position: string) {
    this.name = name;
    this.hp = hp;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

const employeeB = new Employee("woodstock", 100, "개발자");
console.log(employeeB);

const employeeC: Employee = {
  name: "",
  hp: 0,
  position: "",
  work() {},
};
