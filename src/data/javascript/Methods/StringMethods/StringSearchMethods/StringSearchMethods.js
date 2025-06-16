export const StringSearchMethods = {
  id: 2554,
  title: "2. Методы поиска",
  children: [
    {
      title: "includes()",
      type: "text",
      description: `
            <p><strong>includes(substring)</strong>: Проверяет, содержится ли подстрока в строке. Возвращает <code>true</code> или <code>false</code>.</p>
          `,
      code: `
const str = "Hello, world!";
console.log(str.includes("world")); // true
console.log(str.includes("earth")); // false
          `,
    },
    {
      title: "startsWith()",
      type: "text",
      description: `
            <p><strong>startsWith(substring)</strong>: Проверяет, начинается ли строка с указанной подстроки.</p>
          `,
      code: `
const str = "Hello, world!";
console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("world")); // false
          `,
    },
    {
      title: "endsWith()",
      type: "text",
      description: `
            <p><strong>endsWith(substring)</strong>: Проверяет, заканчивается ли строка на указанную подстроку.</p>
          `,
      code: `
const str = "Hello, world!";
console.log(str.endsWith("world!")); // true
console.log(str.endsWith("Hello")); // false
          `,
    },
    {
      title: "indexOf()",
      type: "text",
      description: `
            <p><strong>indexOf(substring)</strong>: Возвращает индекс первого вхождения подстроки. Если подстрока не найдена, возвращает <code>-1</code>.</p>
          `,
      code: `
const str = "Hello, world!";
console.log(str.indexOf("world")); // 7
console.log(str.indexOf("earth")); // -1
          `,
    },
    {
      title: "search()",
      type: "text",
      description: `
            <p><strong>search(regexp)</strong>: Ищет совпадение с регулярным выражением и возвращает индекс первого вхождения.</p>
          `,
      code: `
const str = "Hello, world!";
console.log(str.search(/world/)); // 7
console.log(str.search(/earth/)); // -1
          `,
    },
  ],
};
