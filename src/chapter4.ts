// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  mbti: string;
};
// 동일한 스코프에서 중복X
type User = {}; // 에러메세지: 'User' 식별자가 중복되었습니다.

// 별도의 스코프에서는 중복O
function func() {
  type User = {};
}

let user1: User = {
  id: 1,
  name: "woodstock",
  nickname: "woody",
  mbti: "ESTJ",
};

let user2: User = {
  id: 1,
  name: "coco",
  nickname: "wawa",
  mbti: "INFJ",
};
