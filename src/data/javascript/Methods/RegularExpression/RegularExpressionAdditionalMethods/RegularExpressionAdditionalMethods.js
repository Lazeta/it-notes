export const RegularExpressionAdditionalMethods = {
  id: 2571,
  title: "Дополнительные методы работы с регулярными выражениями",
  children: [
    {
      title: "test()",
      type: "text",
      description: `
            <p><strong>test()</strong>: Проверяет, соответствует ли строка указанному регулярному выражению. Возвращает <code>true</code> или <code>false</code>.</p>
          `,
      code: `
const regex = /hello/i;
console.log(regex.test("Hello, world!")); // true
console.log(regex.test("Goodbye, world!")); // false
          `,
    },
    {
      title: "exec()",
      type: "text",
      description: `
            <p><strong>exec()</strong>: Выполняет поиск совпадений в строке с использованием регулярного выражения. Возвращает массив с информацией о первом совпадении или <code>null</code>, если совпадений нет.</p>
          `,
      code: `
const regex = /quick|lazy/;
const str = "The quick brown fox jumps over the lazy dog.";
const result = regex.exec(str);
console.log(result); // ["quick", index: 4, input: "The quick brown fox jumps over the lazy dog.", groups: undefined]
          `,
    },
    {
      title: "replace() с регулярными выражениями",
      type: "text",
      description: `
            <p><strong>replace()</strong>: Заменяет совпадения с регулярным выражением на указанную строку или результат функции.</p>
          `,
      code: `
const str = "The rain in Spain stays mainly in the plain.";
const result = str.replace(/ain/g, "ane");
console.log(result); // "The rane in Spaine stays manely in the plane."
          `,
    },
  ],
};
