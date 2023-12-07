// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  mbti: string;
};

let user1: User = {
  id: 1,
  name: "woodstock",
  nickname: "woody",
  mbti: "ESTJ",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: string; // 오류메세지 : 'Korea' 형식의 'string' 속성을 'string' 인덱스 유형 'number'에 할당할 수 없습니다.
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: "kr",
};
