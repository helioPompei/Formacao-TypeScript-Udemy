// 1 - Função Void
const semRetorno = (): void => {
  console.log("Não vou retornar nada!");
  // return 10;
};

semRetorno();

// 2 - Callback como argumento
function greeting(name: string): string {
  return `Olá ${name}`;
}

function preGreeting(f: (name: string) => string, name: string) {
  console.log("Preparando a função!");
  const greet = f(name);
  console.log(greet);
}

preGreeting(greeting, "Joao");

// 3 - Generic function

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

const numeros: number[] = [1, 2, 3];
const letras: string[] = ["a", "b", "c"];

console.log(firstElement(numeros));
console.log(firstElement(letras));

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}

const newObject = mergeObjects({ name: "Helio" }, { job: "programer" });
console.log(newObject);

// 4 - Constraints + Generic function
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }
  return biggest;
}

console.log(biggestNumber(2, 5));
console.log(biggestNumber("7", "5"));
// console.log(biggestNumber("9", 3));

// 5 - Especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

console.log(mergeArrays<number | string>([1, 2, 3], ["teste", "testado"]));

// 6 - Argumentos opcionais
function modernGreeting(name: string, greet?: string): string {
  if (greet) {
    return `Olá ${greet} ${name}, tudo bem?`;
  } else {
    return `Olá ${name}!`;
  }
}

console.log(modernGreeting("Pedro"));
console.log(modernGreeting("João", "senhor"));

// 7 - Parâmetro default
function somaDefault(n: number, m: number = 10): number {
  return n + m;
}

console.log(somaDefault(10));
console.log(somaDefault(12, 12));

// 8 - Unkown
function doSomething(x: unknown) {
  console.log(x);
  // console.log(x[0]); - erro
}

doSomething(1);

// 9 - Never
function showErrorMessage(msg: string): never {
  throw new Error(msg);
}

// showErrorMessage("Errou!");

// 10 - Rest operator
function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number);
}

console.log(sumAll(1, 2, 3, 4, 5));

// 11 - Destructuring
function destructedPerson({
  name,
  age,
}: {
  name: string;
  age: number;
}): string {
  return `O nome da pessoa é ${name} e ela tem ${age} anos!`;
}

interface Person {
  name: string;
  age: number;
  job: string;
}

const person: Person = { name: "joão", age: 10, job: "Dev" };
console.log(destructedPerson(person));
