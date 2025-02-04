export const VariableDeclarations = {
  title: "Variable declarations / Объявления переменных",
  children: [
    {
      title: "1. Использование var",
      type: "text",
      description: `
            <p><strong>var</strong>: Объявляет переменную с функциональной или глобальной областью видимости.</p>
            <ul>
              <li>Переменные, объявленные с помощью <code>var</code>, могут быть переопределены.</li>
              <li>Подвержены механизму поднятия (hoisting).</li>
            </ul>
          `,
      code: `
var name = 'Alice';
console.log(name); // 'Alice'
var name = 'Bob'; // переопределение
console.log(name); // 'Bob'
          `,
    },
    {
      title: "2. Использование let",
      type: "text",
      description: `
            <p><strong>let</strong>: Объявляет переменную с блочной областью видимости.</p>
            <ul>
              <li>Переменные, объявленные с помощью <code>let</code>, не могут быть переопределены в пределах одной области видимости.</li>
              <li>Также подвержены поднятию, но не инициализируются до фактической строки кода.</li>
            </ul>
          `,
      code: `
let age = 25;
console.log(age); // 25
// let age = 30; // ошибка: Identifier 'age' has already been declared
          `,
    },
    {
      title: "3. Использование const",
      type: "text",
      description: `
            <p><strong>const</strong>: Объявляет константу, значение которой не может быть переопределено.</p>
            <ul>
              <li>Имеет блочную область видимости.</li>
              <li>Объявленные с помощью <code>const</code> переменные должны быть инициализированы при объявлении.</li>
            </ul>
          `,
      code: `
const pi = 3.14;
console.log(pi); // 3.14
// pi = 3.14159; // ошибка: Assignment to constant variable.
          `,
    },
    {
      title: "4. Групповое объявление",
      type: "text",
      description: `
            <p>Можно объявить несколько переменных в одной строке:</p>
          `,
      code: `
let x = 10, y = 20, z = 30;
console.log(x, y, z); // 10 20 30
          `,
    },
  ],
};
