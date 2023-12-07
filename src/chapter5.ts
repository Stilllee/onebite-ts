// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 10, // 기본값은 0부터, 지정한 값이 있으면 그 값부터 시작
  USER, // 자동으로 1씩 늘어나 11 할당
  GUEST, // 12 할당
}

const user1 = {
  name: "woodstock",
  role: Role.ADMIN, // 관리자
};

const user2 = {
  name: "snoopy",
  role: Role.GUEST, // 일반 유저
};

const user3 = {
  name: "jerry",
  role: Role.USER, // 게스트
};

console.log(user1, user2, user3); // { name: 'woodstock', role: 10 } { name: 'snoopy', role: 12 } { name: 'jerry', role: 11 }
