export const idempotentMethods = {
  id: 2548,
  title: "1. Изменяющие методы",
  children: [
    {
      title: "pop()",
      type: "text",
      description: `
            <p><strong>pop()</strong>: Удаляет последний элемент массива и возвращает его.</p>
            <p>Метод изменяет исходный массив.</p>
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
            <p>Метод изменяет исходный массив.</p>
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
            <p>Метод изменяет исходный массив.</p>
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
            <p>Метод изменяет исходный массив.</p>
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
            <p>Метод изменяет исходный массив.</p>
          `,
      code: `
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, 'a', 'b'); // Удаляем 2 элемента с индекса 2 и добавляем 'a', 'b'
console.log(arr); // [1, 2, 'a', 'b', 5]
          `,
    },
    {
      title: "reverse()",
      type: "text",
      description: `
            <p><strong>reverse()</strong>: Меняет порядок элементов массива на обратный.</p>
            <p>Метод изменяет исходный массив.</p>
          `,
      code: `
const arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
          `,
    },
    {
      title: "sort()",
      type: "text",
      description: `
            <p><strong>sort(compareFunction)</strong>: Сортирует элементы массива на месте (по умолчанию как строки).</p>
            <p>Метод изменяет исходный массив.</p>
          `,
      code: `
const arr = [3, 1, 4, 2];
arr.sort((a, b) => a - b); // Числовая сортировка
console.log(arr); // [1, 2, 3, 4]
          `,
    },
    {
      title: "fill()",
      type: "text",
      description: `
            <p><strong>fill(value, start, end)</strong>: Заполняет массив указанным значением в заданном диапазоне.</p>
            <p>Метод изменяет исходный массив.</p>
          `,
      code: `
const arr = [1, 2, 3, 4];
arr.fill(0, 1, 3); // Заполняем значениями 0 с индекса 1 до 3 (не включая)
console.log(arr); // [1, 0, 0, 4]
          `,
    },
    {
      title: "copyWithin()",
      type: "text",
      description: `
            <p><strong>copyWithin(target, start, end)</strong>: Копирует часть массива внутри себя, перезаписывая существующие элементы.</p>
            <p>Метод изменяет исходный массив.</p>
          `,
      code: `
const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3, 5); // Копируем элементы с индекса 3 до 5 в начало массива
console.log(arr); // [4, 5, 3, 4, 5]
          `,
    },
  ],
};