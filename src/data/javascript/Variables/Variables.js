export const Variables = {
  id: 172,
  title: "Variables (Переменные)",
  children: [
    {
      title: "Область видимости",
      type: "text",
      description: `
        <p>В JavaScript есть три типа областей видимости: глобальная, функциональная и блочная.</p>
        <ul>
          <li><strong>Глобальная</strong>: Переменные, доступные во всем скрипте.</li>
          <li><strong>Функциональная</strong>: Переменные, доступные только внутри функции.</li>
          <li><strong>Блочная</strong>: Переменные, объявленные внутри блока (например, внутри 'if', 'for').</li>
        </ul>
      `,
      code: `
let globalVar = 'I am global';

function testScope() {
  let functionVar = 'I am local to function';
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
      title: "Типы объявлений переменных",
      type: "text",
      description: `
        <p>В JavaScript есть три ключевых способа объявления переменных:</p>
        <ul>
          <li><strong>var</strong>: Функциональная или глобальная область видимости. Подвержен поднятию (hoisting).</li>
          <li><strong>let</strong>: Блочная область видимости. Не может быть переопределён в пределах одной области видимости.</li>
          <li><strong>const</strong>: Блочная область видимости. Значение не может быть изменено после объявления.</li>
        </ul>
      `,
      code: `
var a = 'Hello';
let b = 'World';
const c = '!';

console.log(a); // Hello
console.log(b); // World
console.log(c); // !
      `,
    },
    {
      title: "Hoisting / Подъем переменных",
      type: "text",
      description: `
        <p>Все три типа переменных поднимаются, но их инициализация происходит на разных стадиях:</p>
        <ul>
          <li><strong>var</strong>: Поднимается, но инициализируется значением <code>undefined</code>.</li>
          <li><strong>let</strong> и <strong>const</strong>: Поднимаются, но не инициализируются до фактической строки кода (временная мертвая зона).</li>
        </ul>
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
      title: "Групповое объявление переменных",
      type: "text",
      description: `
        <p>Можно объявить несколько переменных в одной строке с использованием <code>let</code>, <code>const</code> или <code>var</code>:</p>
      `,
      code: `
let x = 10, y = 20, z = 30;
console.log(x, y, z); // 10 20 30
      `,
    },
    {
      title: "Рекомендации по использованию",
      type: "text",
      description: `
        <p>В современном JavaScript рекомендуется использовать <code>let</code> и <code>const</code> вместо <code>var</code>. Это помогает избежать проблем с областью видимости, поднятием и переопределением переменных.</p>
      `,
      code: `
let name = 'John';
const age = 30;

name = 'Doe'; // корректно, значение переменной может меняться
// age = 31; // TypeError: Assignment to constant variable. (ошибка)
      `,
    },
    {
      title: "Заключение",
      type: "text",
      description: `
        <p>Понимание различий между <code>var</code>, <code>let</code> и <code>const</code> важно для написания чистого и эффективного кода в JavaScript. Используйте <code>let</code> для изменяемых переменных и <code>const</code> для констант.</p>
      `,
    },
  ],
};
