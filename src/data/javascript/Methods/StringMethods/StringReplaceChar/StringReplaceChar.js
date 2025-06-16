export const StringReplaceChar = {
  id: 2558,
  title: "7. Замена и работа с символами",
  children: [
    {
      title: "charAt()",
      type: "text",
      description: `
            <p><strong>charAt(index)</strong>: Возвращает символ по указанному индексу.</p>
          `,
      code: `
const str = "Hello";
console.log(str.charAt(1)); // "e"
          `,
    },
    {
      title: "charCodeAt()",
      type: "text",
      description: `
            <p><strong>charCodeAt(index)</strong>: Возвращает Unicode-код символа по указанному индексу.</p>
          `,
      code: `
const str = "A";
console.log(str.charCodeAt(0)); // 65
          `,
    },
  ],
};
