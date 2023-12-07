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
  Korea: number; // 필수 프로퍼티
};

let countryNumberCodes: CountryNumberCodes = {}; // 에러메세지 : 'Korea' 속성이 '{}' 형식에 없지만 'CountryNumberCodes' 형식에서 필수입니다.
