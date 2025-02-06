export const Hoisting =     {
    id: 148,
    title: "Hoisting / поднятие",
    children: [
      {
        title: "1. Определение Hoisting",
        type: "text",
        description: `
            <p>Hoisting (поднятие) в JavaScript - это механизм, при котором объявления переменных и функций поднимаются в верхнюю часть своей области видимости во время выполнения кода.</p>
          `,
      },
      {
        title: "2. Как работает Hoisting?",
        type: "text",
        description: `
            <p>При выполнении кода JavaScript сначала обрабатывает все объявления переменных и функций, а затем выполняет код. Это означает, что вы можете использовать функции и переменные до их фактического объявления в коде.</p>
          `,
      },
      {
        title: "3. Пример Hoisting с функциями",
        type: "text",
        description: `
            <p>Пример поднятия функций:</p>
          `,
        code: `
sayHello(); // Работает, выводит "Hello!"

function sayHello() {
console.log("Hello!");
}
          `,
      },
      {
        title: "4. Пример Hoisting с переменными",
        type: "text",
        description: `
            <p>Пример поднятия переменных:</p>
          `,
        code: `
console.log(myVar); // undefined

var myVar = 5;
console.log(myVar); // 5
          `,
      },
      {
        title: "5. Что происходит на самом деле?",
        type: "text",
        description: `
            <p>Когда код выполняется, JavaScript фактически обрабатывает его следующим образом:</p>
            <pre>
    var myVar; // Объявление переменной поднимается
    console.log(myVar); // undefined
    myVar = 5; // Инициализация переменной
            </pre>
          `,
      },
      {
        title: "6. Hoisting с let и const",
        type: "text",
        description: `
            <p>Переменные, объявленные с помощью <code>let</code> и <code>const</code>, также поднимаются, но они находятся в Temporal Dead Zone (TDZ) до их инициализации:</p>
          `,
      },
      {
        title: "7. Пример Hoisting с let и const",
        type: "text",
        description: `
            <p>Пример с <code>let</code> и <code>const</code>:</p>
          `,
        code: `
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 20;
          `,
      },
      {
        title: "8. Важность понимания Hoisting",
        type: "text",
        description: `
            <p>Понимание Hoisting помогает избежать неожиданных ошибок и улучшает качество кода. Важно помнить, что хотя функции могут быть вызваны до их объявления, поведение переменных может привести к неожиданным результатам.</p>
          `,
      },
    ],
  }