export const arrayMethods = {
  id: 505,
  title: "Array Methods (методы массива)",
  children: [
    {
      title: "1. Изменяющие методы",
      type: "text",
      description: `
        <p>Эти методы изменяют исходный массив:</p>
      `,
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
    },
    {
      title: "2. Неизменяющие методы",
      type: "text",
      description: `
        <p>Эти методы не изменяют исходный массив, а возвращают новый:</p>
      `,
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
    },
    {
      title: "3. Методы итерации",
      type: "text",
      description: `
        <p>Эти методы выполняют операции над каждым элементом массива:</p>
      `,
      children: [
        {
          title: "map()",
          type: "text",
          description: `
            <p><strong>map(callback)</strong>: Создает новый массив, применяя функцию к каждому элементу исходного массива.</p>
            <p>Часто используется для преобразования данных.</p>
          `,
          code: `
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
          `,
        },
        {
          title: "forEach()",
          type: "text",
          description: `
            <p><strong>forEach(callback)</strong>: Выполняет указанную функцию для каждого элемента массива, но не возвращает новый массив.</p>
            <p>Используется для выполнения побочных эффектов (например, вывода в консоль).</p>
          `,
          code: `
const numbers = [1, 2, 3];
numbers.forEach((num, index) => {
  console.log(\`Element at index \${index}: \${num}\`);
});
// Element at index 0: 1
// Element at index 1: 2
// Element at index 2: 3
          `,
        },
        {
          title: "filter()",
          type: "text",
          description: `
            <p><strong>filter(callback)</strong>: Создает новый массив, содержащий только те элементы, которые удовлетворяют условию.</p>
          `,
          code: `
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
          `,
        },
        {
          title: "reduce()",
          type: "text",
          description: `
            <p><strong>reduce(callback, initialValue)</strong>: Сводит массив к одному значению, выполняя функцию для каждого элемента.</p>
          `,
          code: `
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
          `,
        },
      ],
    },
    {
      title: "4. Проверочные методы",
      type: "text",
      description: `
        <p>Эти методы проверяют элементы массива на соответствие условиям:</p>
      `,
      children: [
        {
          title: "every()",
          type: "text",
          description: `
            <p><strong>every(callback)</strong>: Проверяет, удовлетворяют ли все элементы массива условию.</p>
          `,
          code: `
const numbers = [2, 4, 6];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true
          `,
        },
        {
          title: "some()",
          type: "text",
          description: `
            <p><strong>some(callback)</strong>: Проверяет, удовлетворяет ли хотя бы один элемент массива условию.</p>
          `,
          code: `
const numbers = [1, 2, 3];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true
          `,
        },
      ],
    },
    {
      title: "5. Полезные ссылки",
      type: "text",
      description: `
        <p>Дополнительные материалы для изучения:</p>
      `,
      children: [
        {
          title: "Learn more about array methods",
          type: "link",
          url: "https://learn.javascript.ru/array-methods",
        },
        {
          title: "Visual representation of array methods",
          type: "link",
          url: "https://medium.com/@sewolpe/visualizing-javascript-array-methods-7babf560f7be",
        },
      ],
    },
  ],
};
