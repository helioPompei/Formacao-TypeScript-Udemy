// 1 Tipo de objeto para função com interface

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  console.log(
    `O nome do produto é ${product.name} e seu preço é R$${product.price}`
  );
  if (product.isAvailable) {
    console.log("O produto está disponivel");
  }
}

const product1: Product = {
  name: "Camisa",
  price: 9.99,
  isAvailable: true,
};

showProductDetails(product1);

// 2 - Interface com propriedade opcional
interface User {
  nome: string;
  senha: string;
  email?: string;
}

function showUserDetails(user: User) {
  if (user.email) {
    console.log(`O email é ${user.email}`);
  }
  console.log(`Usuario ${user.nome}`);
}

const user1: User = { nome: "joao", senha: "senha" };
const user2: User = { nome: "matheus", senha: "senha", email: "Mat@gmail.com" };

showUserDetails(user1);
showUserDetails(user2);

// 3 - ReadOnly
interface Car {
  brand: string;
  readonly wheels: number;
}

const car1: Car = { brand: "VW", wheels: 4 };

car1.brand = "BMW";
// car1.wheels = 3 -> Somente leitura!

// 4 - Index signature
interface CoodObject {
  [index: string]: number | boolean;
}

let coords: CoodObject = {
  x: 10,
  y: true,
};

coords.z = 54;

console.log(coords);

// 5 - Extending interfaces

interface human {
  name: string;
  age: number;
}

interface SuperHuman extends human {
  superpowers: string[];
}

const matheus: human = { name: "Matheus", age: 30 };
console.log(matheus);
const goku: SuperHuman = {
  name: "Goku",
  age: 50,
  superpowers: ["Voar", "Kamehameha"],
};
console.log(goku);

// 6 Intersection Types

interface Character {
  name: string;
}

interface Gun {
  gun: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
  name: "Arnold",
  gun: "Shotgun",
  caliber: 12,
};

console.log(arnold);

// 7 - ReadOnly Array
let myArray: ReadonlyArray<string> = ["Maçã", "laranja", "banana"];

// myArray[3] = "Mamão";

console.log(myArray);

// 8 - Tuplas
type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6] ;

type nameAndAge = [string, number];

const user: nameAndAge = ["Joao", 20];
console.log(user);

// 9 - Tuplas com ReadOnly
function showNumbers(numbers: readonly [number, number]) {
  // numbers[0] = 10;
  console.log(numbers[0]);
  console.log(numbers[1]);
}

showNumbers([99, 11]);
