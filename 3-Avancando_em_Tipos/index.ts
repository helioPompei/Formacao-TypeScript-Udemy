// 1 - Nova Sintaxe de Arrays
let numbers: number[] = [];

for (let index = 1; index <= 10; index++) {
  numbers.push(index);
}

numbers[5] = 100;

console.log(numbers);
console.log(numbers[5]);

const names: string[] = [];

names.push("Melanie");
names.push("Diana");
names.push("Mikael");

console.log(names);
console.log(names[1]);

// 2 - Sintaxe antiga de Arrays

const numbersOld: Array<number> = [];

numbersOld.push(300, 200, 500);
console.log(numbersOld);

// 3 - Any ( Não é uma boa pratica )

const any: any = [1, "teste", true, [], {}, { nome: "João" }];
console.log(any);

// 4 - Tipo de parâmetro de funções

function myFunction(name: string, age: number) {
  console.log(`Seu nome é ${name} e sua idade é ${age}`);
}

myFunction("Hélio", 21);

// 5 - Tipo de retorno de funções

const sum = (v1: number, v2: number): number => {
  return v1 + v2;
};

const total = sum(20, 10);
console.log(total);

// 6 - função anonima
setTimeout(function () {
  const sallary: number = 1000;
  // console.log(parseFloat(sallary));
}, 2000);

// 7 - Tipos de Objeto
function passCoodinates(cood: { x: number; y: number }) {
  console.log("X coordinates: " + cood.x);
  console.log("Y coordinates: " + cood.y);
}

const objCoord = { x: 100, y: 89.532 };
passCoodinates(objCoord);

const userObj: { nome: string; age: number } = { nome: "", age: 0 };

// 8 - Propriedades opcionais !!!
const userObj2: { nome?: string; age?: number } = {};

const showNumbers = (n1: number, n2?: number, n3?: number) => {
  n1 ? console.log(`Valor de n2: ${n1}`) : console.log("n1 não foi declarado!");
  n2 ? console.log(`Valor de n2: ${n2}`) : console.log("n2 não foi declarado!");
  n3 ? console.log(`Valor de n2: ${n3}`) : console.log("n3 não foi declarado!");
};

showNumbers(10, 21);

// 9 - Validação de opcional !!!
const advancedGreeting = (firstName: string, lastName?: string): string => {
  if (lastName !== undefined) {
    return `Olá ${firstName} ${lastName}, tudo bem?`;
  }
  return `Olá ${firstName}!`;
};

console.log(advancedGreeting("Hélio", "Pompei"));
console.log(advancedGreeting("Hélio"));

// 10 - Union Type

const data1: number | string = "string";
const data2: number | string = 10;
const data3: (number | string)[] = [10, "Joao"];
const data4: Array<number | string> = [10, "Joao"];

const setData = (data: string | number): void => {
  console.log(`O dado é ${data} e o seu tipo é ${typeof data}`);
};

setData("Balão");
setData(20);

// 11 - Avançando em Union Type
const showUserRole = (role: boolean | string) => {
  if (typeof role === "boolean") {
    if (role === false) {
      return "Usuario negado!";
    } else {
      return "Usuario Aprovado!";
    }
  }
  if (typeof role === "string") {
    return `A função do usuário é: ${role} `;
  }
};

console.log(showUserRole(false));
console.log(showUserRole(true));
console.log(showUserRole("Adm"));

// 12 - Type alias

type ID = string | number;

const showId = (id: ID) => {
  console.log(`O ID é : ${id}`);
};

showId("Texto");
showId(10);

// 13 - Interface !!!
interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoords(obj: Point) {
  console.log(obj);
}

interface User {
  name: string;
  age: number;
  aprove: boolean;
}

function showUser(obj: User) {
  console.log(obj);
}

const coordObjt: Point = { x: 10, y: 10, z: 10 };

showCoords(coordObjt);
showUser({ name: "Hélio", age: 20, aprove: true });

// 14 - interface x type alias

interface Person {
  name: string;
}
interface Person {
  age: number;
}

const somePerson: Person = { name: "Matheus", age: 10 };

type personType = {
  name: string;
};

// type personType = {
//   age: number;
// };

// 15 - Literal types ( Enum )
let test: "reprovado" | "aprovado";

test = "aprovado";

// 16 - Non-Null Assertion Operator
const p = document.getElementById("some-p");
console.log(p!.innerText);
p!.innerHTML = "Opa";

// 17 - Bigint
let n: bigint;

n = 1000n;
console.log(n + " " + typeof n);

// 18 - Symbol

let symbolA: symbol;
let symbolB: symbol;

symbolA = Symbol(10);
symbolB = Symbol(10);

console.log(symbolA === symbolB);

