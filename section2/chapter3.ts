// object
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "woodstock",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked"; // 에러메세지 : 읽기 전용 속성이므로 'apiKey'에 할당할 수 없습니다.
