export const StringTransformationsMethods = {
  id: 2553,
  title: "1. Методы преобразования",
  children: [
    {
      title: "toUpperCase()",
      type: "text",
      description: `
            <p><strong>toUpperCase()</strong>: Преобразует строку в верхний регистр.</p>
          `,
      code: `
const str = "hello";
console.log(str.toUpperCase()); // "HELLO"
          `,
    },
    {
      title: "toLowerCase()",
      type: "text",
      description: `
            <p><strong>toLowerCase()</strong>: Преобразует строку в нижний регистр.</p>
          `,
      code: `
const str = "WORLD";
console.log(str.toLowerCase()); // "world"
          `,
    },
    {
      title: "trim()",
      type: "text",
      description: `
            <p><strong>trim()</strong>: Удаляет пробелы в начале и конце строки.</p>
          `,
      code: `
const str = "   hello   ";
console.log(str.trim()); // "hello"
          `,
    },
    {
      title: "trimStart()",
      type: "text",
      description: `
            <p><strong>trimStart()</strong>: Удаляет пробелы только в начале строки.</p>
          `,
      code: `
const str = "   hello   ";
console.log(str.trimStart()); // "hello   "
          `,
    },
    {
      title: "trimEnd()",
      type: "text",
      description: `
            <p><strong>trimEnd()</strong>: Удаляет пробелы только в конце строки.</p>
          `,
      code: `
const str = "   hello   ";
console.log(str.trimEnd()); // "   hello"
          `,
    },
  ],
};
