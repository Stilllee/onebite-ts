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
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
