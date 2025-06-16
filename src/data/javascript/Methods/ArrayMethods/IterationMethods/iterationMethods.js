export const iterationMethods = {
  id: 2550,
  title: "3. Методы итерации",
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
};
