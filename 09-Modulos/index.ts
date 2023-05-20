// 1 - importação de arquivos
import importGreet from "./greet.js";

importGreet();

// 2 - Import de variavel
import { x } from "./variable.js";
console.log(x);

// 3 - Multiplas importações
import { a, b, myFunction } from "./multiple.js";

console.log(a);
console.log(b);
myFunction();

// 4 - Alias
import { someName as name } from "./changeName.js";
console.log(name);
import changed from "./changeName.js";
console.log(changed);

// 5 - Importa all
import * as numbers from "./numbers.js";
console.log(numbers.default);

// 6 - Import tipos / interaces
import { Human } from "./myType.js";

class User implements Human {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
