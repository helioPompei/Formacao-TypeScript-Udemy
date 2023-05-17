const firstName = "Hélio";
const anotherName = 1;
const x = true;

const v1 = 10;
const v2 = 5;

function greeting(name: string) {
  console.log("Olá " + name);
}

function sum(v1: number, v2: number) {
  console.log(v1 + v2);
}

sum(v1, v2);
greeting(firstName);
// greeting(anotherName);
// greeting(x);
