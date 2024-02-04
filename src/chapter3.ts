/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  skill: string;
}

type PartialUser = {
  [key in "id" | "name" | "skill"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ... 기능
  return {
    id: 1,
    name: "woodstock",
    skill: "JavaScript",
  };
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}

updateUser({
  skill: "TypeScript",
});
