export const verificationMethods = {
  id: 2551,
  title: "4. Проверочные методы",
  children: [
    {
      title: "includes()",
      type: "text",
      description: `
        <p><strong>includes(value)</strong>: Проверяет, содержит ли массив элемент.</p>
      `,
      code: `
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('grape')); // false
      `,
    },
    {
      title: "indexOf()",
      type: "text",
      description: `
        <p><strong>indexOf(value)</strong>: Возвращает индекс первого вхождения элемента. Если элемент не найден, возвращает -1.</p>
      `,
      code: `
const numbers = [1, 2, 3, 2];
console.log(numbers.indexOf(2)); // 1
console.log(numbers.indexOf(4)); // -1
      `,
    },
    {
      title: "lastIndexOf()",
      type: "text",
      description: `
        <p><strong>lastIndexOf(value)</strong>: Возвращает индекс последнего вхождения элемента. Если элемент не найден, возвращает -1.</p>
      `,
      code: `
const numbers = [1, 2, 3, 2];
console.log(numbers.lastIndexOf(2)); // 3
console.log(numbers.lastIndexOf(4)); // -1
      `,
    },
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
    {
      title: "isArray()",
      type: "text",
      description: `
        <p><strong>Array.isArray(obj)</strong>: Статический метод, проверяет, является ли объект массивом.</p>
      `,
      code: `
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false
console.log(Array.isArray('string')); // false
      `,
    },
  ],
};
