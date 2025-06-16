export const StringAdditionalMethods = {
  id: 2557,
  title: "5. Дополнительные методы",
  children: [
    {
      title: "repeat()",
      type: "text",
      description: `
            <p><strong>repeat(count)</strong>: Повторяет строку указанное количество раз.</p>
          `,
      code: `
const str = "abc";
console.log(str.repeat(3)); // "abcabcabc"
          `,
    },
    {
      title: "padStart()",
      type: "text",
      description: `
            <p><strong>padStart(targetLength, padString)</strong>: Добавляет символы в начало строки, чтобы её длина достигла <code>targetLength</code>.</p>
          `,
      code: `
const str = "5";
console.log(str.padStart(3, "0")); // "005"
          `,
    },
    {
      title: "padEnd()",
      type: "text",
      description: `
            <p><strong>padEnd(targetLength, padString)</strong>: Добавляет символы в конец строки, чтобы её длина достигла <code>targetLength</code>.</p>
          `,
      code: `
const str = "5";
console.log(str.padEnd(3, "0")); // "500"
          `,
    },
    {
      title: "at()",
      type: "text",
      description: `
            <p><strong>at(index)</strong>: Возвращает символ по указанному индексу. Поддерживает отрицательные индексы для доступа с конца строки.</p>
          `,
      code: `
const str = "Hello, world!";
console.log(str.at(0)); // "H"
console.log(str.at(-1)); // "!"
          `,
    },
  ],
};
