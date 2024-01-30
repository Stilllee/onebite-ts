/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
  constructor(
    private name: string,
    protected hp: number,
    public position: string
  ) {
    this.name = name;
    this.hp = hp;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name} 일함`); // 클래스 내부에서만 이 필드에 접근할 수 있음
  }
}

class ExecutiveOfficer extends Employee {
  // 필트
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    hp: number,
    position: string,
    officeNumber: number
  ) {
    super(name, hp, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    // private는 파생클래스에서도 접근이 불가능하다.
    // this.name; // Error : 'name' 속성은 private이며 'Employee' 클래스 내에서만 액세스할 수 있습니다.

    // protected는 파생클래스에서 접근이 가능하다.
    this.hp;
  }
}

const employee = new Employee("woodstock", 90, "developer");
// employee.name = "Snoopy"; // Error : 'name' 속성은 private이며 'Employee' 클래스 내에서만 액세스할 수 있습니다.
// employee.hp = 79; // 'hp' 속성은 보호된 속성이며 'Employee' 클래스 및 해당 하위 클래스 내에서만 액세스할 수 있습니다.

employee.position = "디자이너";
console.log(employee);
