// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["USER"] = 11] = "USER";
    Role[Role["GUEST"] = 12] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "woodstock",
    role: Role.ADMIN, // 관리자
    language: Language.korean,
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
console.log(user1); // { name: 'woodstock', role: 10, language: 'ko' }
export {};
