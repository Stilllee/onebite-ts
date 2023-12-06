/* 
'message' 매개 변수에는 암시적으로 'any' 형식이 포함됩니다.
라는 에러메세지 발생 
*/
export const hello = (message) => {
  console.log("hello" + message);
};
