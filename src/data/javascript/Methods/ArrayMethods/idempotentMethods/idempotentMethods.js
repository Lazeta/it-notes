export const idempotentMethods = {
  id: 2548,
  title: "1. Изменяющие методы",
  children: [
    {
      title: "pop()",
      type: "text",
      description: `
            <p><strong>pop()</strong>: Удаляет последний элемент массива и возвращает его.</p>
          `,
      code: `
const arr = [1, 2, 3];
const lastElement = arr.pop();
console.log(arr); // [1, 2]
console.log(lastElement); // 3
          `,
    },
    {
      title: "shift()",
      type: "text",
      description: `
            <p><strong>shift()</strong>: Удаляет первый элемент массива и возвращает его.</p>
          `,
      code: `
const arr = [1, 2, 3];
const firstElement = arr.shift();
console.log(arr); // [2, 3]
console.log(firstElement); // 1
          `,
    },
    {
      title: "push()",
      type: "text",
      description: `
            <p><strong>push()</strong>: Добавляет один или несколько элементов в конец массива и возвращает новую длину массива.</p>
          `,
      code: `
const arr = [1, 2, 3];
arr.push(4, 5);
console.log(arr); // [1, 2, 3, 4, 5]
          `,
    },
    {
      title: "unshift()",
      type: "text",
      description: `
            <p><strong>unshift()</strong>: Добавляет один или несколько элементов в начало массива и возвращает новую длину массива.</p>
          `,
      code: `
const arr = [3, 4];
arr.unshift(1, 2);
console.log(arr); // [1, 2, 3, 4]
          `,
    },
    {
      title: "splice()",
      type: "text",
      description: `
            <p><strong>splice(start, deleteCount, items)</strong>: Добавляет, удаляет или заменяет элементы массива.</p>
          `,
      code: `
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, 'a', 'b'); // Удаляем 2 элемента с индекса 2 и добавляем 'a', 'b'
console.log(arr); // [1, 2, 'a', 'b', 5]
          `,
    },
  ],
};
