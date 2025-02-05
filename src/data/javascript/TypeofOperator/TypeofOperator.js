export const TypeofOperator = {
  id: 239,
  title: "typeof operator ",
  children: [
    {
      title: "Описание оператора typeof",
      type: "text",
      description: `
            <p><strong>typeof</strong>: Это оператор в JavaScript, который используется для определения типа переменной или выражения. Он возвращает строку, описывающую тип аргумента.</p>
            <ul>
              <li>Примеры типов: "undefined", "boolean", "number", "string", "object", "function", "symbol".</li>
            </ul>
          `,
      code: `
// Примеры использования оператора typeof
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (это известная ошибка в JavaScript)
console.log(typeof 42);        // "number"
console.log(typeof 'hello');   // "string"
console.log(typeof {});         // "object"
console.log(typeof [];          // "object"
console.log(typeof function(){}); // "function"
          `,
    },
    {
      title: "Практическое применение",
      type: "text",
      description: `
            <p>Оператор typeof часто используется для проверки типов переменных перед выполнением операций:</p>
          `,
      code: `
let value;

if (typeof value === 'undefined') {
console.log('Переменная value не инициализирована.');
}

value = 10;

if (typeof value === 'number') {
console.log('value является числом.');
}
          `,
    },
    {
      title: "Ограничения оператора typeof",
      type: "text",
      description: `
            <p>Некоторые особенности и ограничения:</p>
            <ul>
              <li>Для объектов и массивов оператор возвращает "object".</li>
              <li>Для null он также возвращает "object", что является известной особенностью JavaScript.</li>
              <li>Для функций возвращает "function", но это подтип объекта.</li>
            </ul>
          `,
      code: `
console.log(typeof null);       // "object"
console.log(typeof [1, 2, 3]);  // "object"
console.log(typeof {};           // "object"
console.log(typeof (() => {})); // "function"
          `,
    },
    {
      title: "Вывод",
      type: "text",
      description: `
            <p>Оператор typeof является полезным инструментом в JavaScript для проверки типов данных и может помочь избежать ошибок при работе с переменными.</p>
          `,
      code: `
let value = 'test';
console.log(typeof value); // "string"
          `,
    },
  ],
};
