export const StringSplitJoinMethods = {
  id: 2555,
  title: "3. Методы разбиения и объединения",
  children: [
    {
      title: "split()",
      type: "text",
      description: `
            <p><strong>split(separator)</strong>: Разбивает строку на массив подстрок по указанному разделителю.</p>
          `,
      code: `
const str = "apple,banana,cherry";
const fruits = str.split(",");
console.log(fruits); // ["apple", "banana", "cherry"]
          `,
    },
    {
      title: "concat()",
      type: "text",
      description: `
            <p><strong>concat(string)</strong>: Объединяет две или более строк в одну.</p>
          `,
      code: `
const str1 = "Hello, ";
const str2 = "world!";
const result = str1.concat(str2);
console.log(result); // "Hello, world!"
          `,
    },
  ],
};
