// 1 - Generics
function showData<T>(arg: T): string {
  return `O dado é: ${arg}`;
}

console.log(showData(5));
console.log(showData("texto"));
console.log(showData(true));

// 2 - Constraint em generics
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`;
}

const myObj = { name: "Porta", cor: "Branca" };

console.log(showProductName(myObj));

// 3 - Generics com Interface
interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = {
  name: "Fusca",
  wheels: 4,
  engine: 1.0,
  color: "Branco",
};

const myPen: Pen = {
  name: "BIC",
  wheels: false,
  engine: false,
  color: "Azul",
};

console.log(myCar);
console.log(myPen);

// 4 - Type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${[key]} está presente no obj e tem o valor de ${obj[key]}`;
}

const server = {
  hd: "2TB",
  ram: "32GB",
};

console.log(getSomeKey(server, "ram"));
// console.log(getSomeKey(server, "teste"));

// 5 - Keyof type operator
type Character = { name: string; age: number; hasDriveLicense: boolean };
type C = keyof Character;

function showCharName(obj: Character, key: C): string {
  return `${obj[key]}`;
}

const myChar: Character = {
  name: "Hélio",
  age: 21,
  hasDriveLicense: true,
};
console.log(showCharName(myChar, "name"));

// 6 - Typeof type operator
const userName: string = "Hélio";

const userName2: typeof userName = "João";

// 7 - Indexed Access type
type Truck = { km: number; kg: number; description: string };

type km = Truck["km"];

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: "Caminhão bacana",
};

function showKm(km: km) {
  console.log(`O veiculo tem a km de ${km}`);
}

showKm(newTruck["km"]);

// 8 - Conditional Expressions type
interface A {}

interface B extends A {}

type myType = B extends A ? number : string;

// 9 - Template Literals type
type testA = "text";

type CustomType = `Some ${testA}`;

const testing: CustomType = "Some text";
