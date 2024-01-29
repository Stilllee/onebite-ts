/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
  // 필드
  name: string; // 기본값이 public이다.
  public hp: number; // 직접 명시해주는 것도 가능하다.
  public position: string;

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

const employee = new Employee("woodstock", 90, "developer");
employee.name = "Snoopy";
employee.hp = 79;
