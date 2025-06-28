export const nonIdempotentMethods = {
  id: 2549,
  title: "2. Неизменяющие методы",
  children: [
    {
      title: "slice()",
      type: "text",
      description: `
            <p><strong>slice(start, end)</strong>: Возвращает новый массив, содержащий копию части исходного массива.</p>
            <p>Метод не изменяет исходный массив.</p>
          `,
      code: `
const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(1, 4);
console.log(newArr); // [2, 3, 4]
console.log(arr); // Исходный массив не изменился: [1, 2, 3, 4, 5]
          `,
    },
    {
      title: "concat()",
      type: "text",
      description: `
            <p><strong>concat()</strong>: Создает новый массив, объединяя существующий массив с другими массивами или значениями.</p>
            <p>Метод не изменяет исходный массив.</p>
          `,
      code: `
const arr1 = [1, 2];
const arr2 = [3, 4];
const newArr = arr1.concat(arr2);
console.log(newArr); // [1, 2, 3, 4]
console.log(arr1); // Исходный массив не изменился: [1, 2]
          `,
    },
    {
      title: "join()",
      type: "text",
      description: `
            <p><strong>join(separator)</strong>: Преобразует массив в строку, разделяя элементы указанным разделителем.</p>
            <p>Метод не изменяет исходный массив.</p>
          `,
      code: `
const arr = ['apple', 'banana', 'cherry'];
const str = arr.join(', ');
console.log(str); // "apple, banana, cherry"
console.log(arr); // Исходный массив не изменился: ['apple', 'banana', 'cherry']
          `,
    },
    {
      title: "map()",
      type: "text",
      description: `
            <p><strong>map(callback)</strong>: Создает новый массив, применяя функцию к каждому элементу исходного массива.</p>
            <p>Часто используется для преобразования данных.</p>
            <p>Метод не изменяет исходный массив.</p>
          `,
      code: `
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
console.log(numbers); // Исходный массив не изменился: [1, 2, 3]
          `,
    },
    {
      title: "filter()",
      type: "text",
      description: `
            <p><strong>filter(callback)</strong>: Создает новый массив, содержащий только те элементы, которые удовлетворяют условию.</p>
            <p>Метод не изменяет исходный массив.</p>
          `,
      code: `
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
console.log(numbers); // Исходный массив не изменился: [1, 2, 3, 4]
          `,
    },
    {
      title: "flat()",
      type: "text",
      description: `
            <p><strong>flat(depth)</strong>: Возвращает новый массив с "разглаженными" уровнями вложенности.</p>
            <p>Метод не изменяет исходный массив.</p>
          `,
      code: `
const arr = [1, [2, [3, 4]]];
const flatArr = arr.flat(2);
console.log(flatArr); // [1, 2, 3, 4]
console.log(arr); // Исходный массив не изменился: [1, [2, [3, 4]]]
          `,
    },
    {
      title: "flatMap()",
      type: "text",
      description: `
            <p><strong>flatMap(callback)</strong>: Комбинация <code>map</code> и <code>flat</code>. Применяет функцию к каждому элементу и "разглаживает" результат.</p>
            <p>Метод не изменяет исходный массив.</p>
          `,
      code: `
const arr = [1, 2, 3];
const result = arr.flatMap(num => [num, num * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6]
console.log(arr); // Исходный массив не изменился: [1, 2, 3]
          `,
    },
    {
      title: "toSorted()",
      type: "text",
      description: `
            <p><strong>toSorted(compareFunction)</strong>: Возвращает отсортированную копию массива (ES2023).</p>
            <p>Метод не изменяет исходный массив.</p>
          `,
      code: `
const arr = [3, 1, 4, 2];
const sorted = arr.toSorted((a, b) => a - b);
console.log(sorted); // [1, 2, 3, 4]
console.log(arr); // Исходный массив не изменился: [3, 1, 4, 2]
          `,
    },
    {
      title: "toReversed()",
      type: "text",
      description: `
            <p><strong>toReversed()</strong>: Возвращает копию массива в обратном порядке (ES2023).</p>
            <p>Метод не изменяет исходный массив.</p>
          `,
      code: `
const arr = [1, 2, 3];
const reversed = arr.toReversed();
console.log(reversed); // [3, 2, 1]
console.log(arr); // Исходный массив не изменился: [1, 2, 3]
          `,
    },
    {
      title: "toSpliced()",
      type: "text",
      description: `
            <p><strong>toSpliced(start, deleteCount, items)</strong>: Возвращает копию массива с изменениями (ES2023).</p>
            <p>Метод не изменяет исходный массив.</p>
          `,
      code: `
const arr = [1, 2, 3, 4];
const modified = arr.toSpliced(1, 2, 'a', 'b');
console.log(modified); // [1, 'a', 'b', 4]
console.log(arr); // Исходный массив не изменился: [1, 2, 3, 4]
          `,
    },
    {
      title: "with()",
      type: "text",
      description: `
            <p><strong>with(index, value)</strong>: Возвращает копию массива с изменённым элементом (ES2023).</p>
            <p>Метод не изменяет исходный массив.</p>
          `,
      code: `
const arr = [1, 2, 3];
const updated = arr.with(1, 99);
console.log(updated); // [1, 99, 3]
console.log(arr); // Исходный массив не изменился: [1, 2, 3]
          `,
    },
    {
      title: "toString() и toLocaleString()",
      type: "text",
      description: `
            <p><strong>toString()</strong>: Преобразует массив в строку, разделяя элементы запятыми.</p>
            <p><strong>toLocaleString()</strong>: Преобразует массив в строку, используя локализованное представление элементов.</p>
            <p>Оба метода не изменяют исходный массив.</p>
          `,
      code: `
const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
console.log(arr.toLocaleString()); // "1,2,3" (зависит от локали)
console.log(arr); // Исходный массив не изменился: [1, 2, 3]
          `,
    },
  ],
};
