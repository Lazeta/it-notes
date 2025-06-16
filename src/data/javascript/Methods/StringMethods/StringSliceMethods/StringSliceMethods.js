export const StringSliceMethods = {
  id: 2556,
  title: "4. Методы извлечения частей строки",
  children: [
    {
      title: "slice()",
      type: "text",
      description: `
            <p><strong>slice(start, end)</strong>: Извлекает часть строки от <code>start</code> до <code>end</code> (не включая <code>end</code>). Поддерживает отрицательные значения.</p>
          `,
      code: `
const str = "Hello, world!";
console.log(str.slice(0, 5)); // "Hello"
console.log(str.slice(-6)); // "world!"
          `,
    },
    {
      title: "substring()",
      type: "text",
      description: `
            <p><strong>substring(start, end)</strong>: Извлекает часть строки от <code>start</code> до <code>end</code>. Не поддерживает отрицательные значения.</p>
          `,
      code: `
const str = "Hello, world!";
console.log(str.substring(0, 5)); // "Hello"
console.log(str.substring(7)); // "world!"
          `,
    },
    {
      title: "substr()",
      type: "text",
      description: `
            <p><strong>substr(start, length)</strong>: Извлекает подстроку длиной <code>length</code>, начиная с позиции <code>start</code>. <em>(Устаревший метод.)</em></p>
          `,
      code: `
const str = "Hello, world!";
console.log(str.substr(0, 5)); // "Hello"
console.log(str.substr(7, 5)); // "world"
          `,
    },
  ],
};
