export const nonIdempotentMethods = {
  id: 2549,
  title: "2. Неизменяющие методы",
  children: [
    {
      title: "slice()",
      type: "text",
      description: `
            <p><strong>slice(start, end)</strong>: Возвращает новый массив, содержащий копию части исходного массива.</p>
          `,
      code: `
const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(1, 4);
console.log(newArr); // [2, 3, 4]
          `,
    },
    {
      title: "concat()",
      type: "text",
      description: `
            <p><strong>concat()</strong>: Создает новый массив, объединяя существующий массив с другими массивами или значениями.</p>
          `,
      code: `
const arr1 = [1, 2];
const arr2 = [3, 4];
const newArr = arr1.concat(arr2);
console.log(newArr); // [1, 2, 3, 4]
          `,
    },
    {
      title: "join()",
      type: "text",
      description: `
            <p><strong>join(separator)</strong>: Преобразует массив в строку, разделяя элементы указанным разделителем.</p>
          `,
      code: `
const arr = ['apple', 'banana', 'cherry'];
const str = arr.join(', ');
console.log(str); // "apple, banana, cherry"
          `,
    },
  ],
};
