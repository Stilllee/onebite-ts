/**
 * keyof 연산자
 */
interface Person {
  name: string;
  hp: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "woodstock",
  hp: 90,
};

getPropertyKey(person, "name"); // woodstock
