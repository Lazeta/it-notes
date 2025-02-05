export const VariablesLetConstVarAndHoisting = {
  id: 240,
  title: "Variables: let, const, var and hoisting / Переменные: let, const, var и хоистинг",
  children: [
    {
      title: "Область видимости переменных",
      type: "text",
      description: `
            <p>В JavaScript есть три типа областей видимости: глобальная, функция и блок.</p>
            <ul>
              <li><strong>Глобальная</strong>: Переменные, доступные во всем скрипте.</li>
              <li><strong>Функция</strong>: Переменные, доступные только внутри функции.</li>
              <li><strong>Блок</strong>: Переменные, объявленные внутри блока (например, внутри 'if', 'for', и т. д.).</li>
            </ul>
          `,
      code: `
let globalVar = 'I'm global';

function testScope() {
let functionVar = 'I'm local to function';
if (true) {
let blockVar = 'I exist only in this block';
console.log(blockVar); // доступен здесь
}
console.log(functionVar); // доступен здесь
// console.log(blockVar); // ошибка: blockVar не доступен здесь
}
console.log(globalVar); // доступен здесь
          `,
    },
    {
      title: "Описание переменных",
      type: "text",
      description: `
            <p><strong>var</strong>: Используется для объявления переменных. Переменные, объявленные с помощью var, имеют функциональную или глобальную область видимости и могут быть переопределены. Они также подвержены механизму поднятия (hoisting).</p>
            <p><strong>let</strong>: Вводится в ES6 (ECMAScript 2015). Используется для объявления переменных с блочной областью видимости. Переменные, объявленные с помощью let, не могут быть переопределены в пределах одной и той же области видимости. Также подвержены подъеманию, но не инициализируются до фактической строки кода.</p>
            <p><strong>const</strong>: Также введена в ES6. Используется для объявления констант, значение которых не может быть переопределено. Как и let, имеет блочную область видимости.</p>
          `,
      code: `
var a = 'Hello';
console.log(a); // 'Hello'

let b = 'World';
console.log(b); // 'World'

const c = '!';
console.log(c); // '!'
          `,
    },
    {
      title: "Сравнение области видимости",
      type: "text",
      description: `
            <p>Область видимости переменных var, let и const:</p>
            <ul>
              <li><strong>var</strong>: Функциональная или глобальная область видимости.</li>
              <li><strong>let</strong> и <strong>const</strong>: Блочная область видимости.</li>
            </ul>
          `,
      code: `
if (true) {
var x = 10;
let y = 20;
const z = 30;
}

console.log(x); // 10
console.log(y); // ReferenceError: y is not defined
console.log(z); // ReferenceError: z is not defined
          `,
    },
    {
      title: "Hoisting / Подъем переменных",
      type: "text",
      description: `
            <p>Все три типа переменных поднимаются, но их инициализация происходит на разных стадиях:</p>
          `,
      code: `
console.log(aVar); // undefined (подъем, но не инициализация)
var aVar = 'test';

// console.log(aLet); // ReferenceError: Cannot access 'aLet' before initialization
let aLet = 'test';

// console.log(aConst); // ReferenceError: Cannot access 'aConst' before initialization
const aConst = 'test';
          `,
    },
    {
      title: "Использование",
      type: "text",
      description: `
            <p>Рекомендуется использовать let и const вместо var, чтобы избежать неожиданных ошибок и путаницы:</p>
          `,
      code: `
let name = 'John';
const age = 30;

name = 'Doe'; // корректно, значение переменной может меняться
// age = 31; // TypeError: Assignment to constant variable. (ошибка)
          `,
    },
    {
      title: "Вывод",
      type: "text",
      description: `
            <p>Необходимо использовать let и const в современных приложениях, чтобы избежать проблем с областью видимости, поднятием и переопределением переменных.</p>
          `,
      code: `
if (true) {
let message = "Hello, block!";
console.log(message); // "Hello, block!"
}
// console.log(message); // ReferenceError: message is not defined
          `,
    },
  ],
};
