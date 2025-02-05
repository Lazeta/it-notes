export const Scope = {
  id: 236,
  title: "Scope",
  children: [
    {
      title: "1. Определение Scope",
      type: "text",
      description: `
            <p>Scope (область видимости) в JavaScript определяет, где переменные, функции и объекты доступны для использования в коде.</p>
          `,
    },
    {
      title: "2. Типы области видимости",
      type: "text",
      description: `
            <p>В JavaScript существуют два основных типа области видимости:</p>
            <ul>
              <li><strong>Глобальная область видимости:</strong> Переменные, объявленные вне любой функции, доступны везде в коде.</li>
              <li><strong>Локальная область видимости:</strong> Переменные, объявленные внутри функции, доступны только внутри этой функции.</li>
            </ul>
          `,
    },
    {
      title: "3. Области видимости с использованием let и const",
      type: "text",
      description: `
            <p>Переменные, объявленные с помощью <code>let</code> и <code>const</code>, имеют блочную область видимости, что означает, что они доступны только внутри блока кода (например, внутри фигурных скобок).</p>
          `,
    },
    {
      title: "4. Пример глобальной области видимости",
      type: "text",
      description: `
            <p>Пример глобальной области видимости:</p>
          `,
      code: `
var globalVar = "I'm global!";

function testGlobal() {
console.log(globalVar); // Доступно
}
testGlobal();
          `,
    },
    {
      title: "5. Пример локальной области видимости",
      type: "text",
      description: `
            <p>Пример локальной области видимости:</p>
          `,
      code: `
function testLocal() {
var localVar = "I'm local!";
console.log(localVar); // Доступно
}
testLocal();
console.log(localVar); // ReferenceError: localVar is not defined
          `,
    },
    {
      title: "6. Блочная область видимости",
      type: "text",
      description: `
            <p>Пример блочной области видимости с let:</p>
          `,
      code: `
{
let blockVar = "I'm in a block!";
console.log(blockVar); // Доступно
}
console.log(blockVar); // ReferenceError: blockVar is not defined
          `,
    },
    {
      title: "7. Иерархия области видимости",
      type: "text",
      description: `
            <p>JavaScript использует иерархию области видимости, что означает, что внутренняя функция имеет доступ к переменным своей внешней функции.</p>
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
  ],
};
