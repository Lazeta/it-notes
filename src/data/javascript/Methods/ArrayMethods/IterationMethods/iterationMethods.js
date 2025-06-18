export const iterationMethods = {
  id: 2550,
  title: "3. Методы итерации",
  children: [
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
    {
      title: "reduceRight()",
      type: "text",
      description: `
            <p><strong>reduceRight(callback, initialValue)</strong>: Аналогично <code>reduce</code>, но выполняется справа налево.</p>
          `,
      code: `
const numbers = [1, 2, 3, 4];
const result = numbers.reduceRight((acc, num) => acc - num, 0);
console.log(result); // -2 (0 - 4 - 3 - 2 - 1)
          `,
    },
    {
      title: "find()",
      type: "text",
      description: `
            <p><strong>find(callback)</strong>: Возвращает первый элемент массива, удовлетворяющий условию.</p>
          `,
      code: `
const numbers = [1, 2, 3, 4];
const found = numbers.find(num => num > 2);
console.log(found); // 3
          `,
    },
    {
      title: "findIndex()",
      type: "text",
      description: `
            <p><strong>findIndex(callback)</strong>: Возвращает индекс первого элемента массива, удовлетворяющего условию.</p>
          `,
      code: `
const numbers = [1, 2, 3, 4];
const index = numbers.findIndex(num => num > 2);
console.log(index); // 2
          `,
    },
    {
      title: "findLast()",
      type: "text",
      description: `
            <p><strong>findLast(callback)</strong>: Возвращает последний элемент массива, удовлетворяющий условию (ES2023).</p>
          `,
      code: `
const numbers = [1, 2, 3, 4];
const found = numbers.findLast(num => num > 2);
console.log(found); // 4
          `,
    },
    {
      title: "findLastIndex()",
      type: "text",
      description: `
            <p><strong>findLastIndex(callback)</strong>: Возвращает индекс последнего элемента массива, удовлетворяющего условию (ES2023).</p>
          `,
      code: `
const numbers = [1, 2, 3, 4];
const index = numbers.findLastIndex(num => num > 2);
console.log(index); // 3
          `,
    },
    {
      title: "entries()",
      type: "text",
      description: `
            <p><strong>entries()</strong>: Возвращает итератор пар [индекс, значение].</p>
          `,
      code: `
const arr = ['a', 'b', 'c'];
for (const [index, value] of arr.entries()) {
  console.log(\`\${index}: \${value}\`);
}
// 0: a
// 1: b
// 2: c
          `,
    },
    {
      title: "keys()",
      type: "text",
      description: `
            <p><strong>keys()</strong>: Возвращает итератор индексов массива.</p>
          `,
      code: `
const arr = ['a', 'b', 'c'];
for (const key of arr.keys()) {
  console.log(key);
}
// 0
// 1
// 2
          `,
    },
    {
      title: "values()",
      type: "text",
      description: `
            <p><strong>values()</strong>: Возвращает итератор значений массива.</p>
          `,
      code: `
const arr = ['a', 'b', 'c'];
for (const value of arr.values()) {
  console.log(value);
}
// a
// b
// c
          `,
    },
    {
      title: "at()",
      type: "text",
      description: `
            <p><strong>at(index)</strong>: Возвращает элемент по индексу (поддерживает отрицательные индексы).</p>
          `,
      code: `
const arr = [1, 2, 3];
console.log(arr.at(1)); // 2
console.log(arr.at(-1)); // 3
          `,
    },
  ],
};
