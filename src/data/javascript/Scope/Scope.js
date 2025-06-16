export const Scope = {
  id: 168,
  title: "Scope (Область видимости)",
  children: [
    {
      title: "1. Определение Scope",
      type: "text",
      description: `
        <p><strong>Scope (область видимости)</strong> в JavaScript определяет, где переменные, функции и объекты доступны для использования в коде. Понимание scope важно для написания чистого и эффективного кода.</p>
      `,
    },
    {
      title: "2. Типы области видимости",
      type: "text",
      description: `
        <p>В JavaScript существуют три основных типа области видимости:</p>
        <ul>
          <li><strong>Глобальная область видимости:</strong> Переменные, объявленные вне любой функции или блока, доступны везде в коде.</li>
          <li><strong>Функциональная область видимости:</strong> Переменные, объявленные внутри функции, доступны только внутри этой функции.</li>
          <li><strong>Блочная область видимости:</strong> Переменные, объявленные с помощью <code>let</code> и <code>const</code>, доступны только внутри блока (например, внутри фигурных скобок).</li>
        </ul>
      `,
    },
    {
      title: "3. Области видимости с использованием let и const",
      type: "text",
      description: `
        <p>Переменные, объявленные с помощью <code>let</code> и <code>const</code>, имеют блочную область видимости. Это отличается от <code>var</code>, который имеет функциональную или глобальную область видимости.</p>
      `,
      code: `
{
  let blockVar = "I'm in a block!";
  console.log(blockVar); // Доступно
}
// console.log(blockVar); // ReferenceError: blockVar is not defined
      `,
    },
    {
      title: "4. Пример глобальной области видимости",
      type: "text",
      description: `
        <p>Переменные, объявленные вне любой функции или блока, находятся в глобальной области видимости и доступны везде в коде.</p>
      `,
      code: `
var globalVar = "I'm global!";

function testGlobal() {
  console.log(globalVar); // Доступно
}
testGlobal();
console.log(globalVar); // Доступно
      `,
    },
    {
      title: "5. Пример локальной области видимости",
      type: "text",
      description: `
        <p>Переменные, объявленные внутри функции, находятся в локальной области видимости и доступны только внутри этой функции.</p>
      `,
      code: `
function testLocal() {
  var localVar = "I'm local!";
  console.log(localVar); // Доступно
}
testLocal();
// console.log(localVar); // ReferenceError: localVar is not defined
      `,
    },
    {
      title: "6. Блочная область видимости",
      type: "text",
      description: `
        <p>Переменные, объявленные с помощью <code>let</code> и <code>const</code>, имеют блочную область видимости. Они доступны только внутри блока, в котором были объявлены.</p>
      `,
      code: `
{
  let blockVar = "I'm in a block!";
  console.log(blockVar); // Доступно
}
// console.log(blockVar); // ReferenceError: blockVar is not defined
      `,
    },
    {
      title: "7. Иерархия области видимости",
      type: "text",
      description: `
        <p>JavaScript использует иерархию области видимости, что означает, что внутренняя функция имеет доступ к переменным своей внешней функции. Это называется <strong>лексической областью видимости</strong>.</p>
      `,
    },
    {
      title: "8. Пример иерархии области видимости",
      type: "text",
      description: `
        <p>Пример иерархии области видимости:</p>
      `,
      code: `
function outerFunction() {
  var outerVar = "I'm outside!";

  function innerFunction() {
    console.log(outerVar); // Доступно
  }
  innerFunction();
}
outerFunction();
      `,
    },
    {
      title: "9. Hoisting (Поднятие)",
      type: "text",
      description: `
        <p><strong>Hoisting</strong> — это механизм, при котором объявления переменных (<code>var</code>) и функций поднимаются вверх своей области видимости. Однако их инициализация происходит только на строке объявления.</p>
      `,
      code: `
console.log(hoistedVar); // undefined (подъем, но не инициализация)
var hoistedVar = "I'm hoisted!";

// console.log(letVar); // ReferenceError: Cannot access 'letVar' before initialization
let letVar = "I'm not hoisted!";
      `,
    },
    {
      title: "10. Заключение",
      type: "text",
      description: `
        <p>Понимание области видимости в JavaScript важно для написания чистого и эффективного кода. Используйте <code>let</code> и <code>const</code> вместо <code>var</code> для минимизации ошибок, связанных с областью видимости.</p>
      `,
    },
  ],
};
