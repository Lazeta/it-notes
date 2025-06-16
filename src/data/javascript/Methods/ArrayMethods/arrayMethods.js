import { idempotentMethods } from "./idempotentMethods/idempotentMethods";
import { iterationMethods } from "./IterationMethods/iterationMethods";
import { nonIdempotentMethods } from "./nonIdempotentMethods/nonIdempotentMethods";

export const arrayMethods = {
  id: 505,
  title: "Array Methods (методы массива)",
  children: [
    idempotentMethods,
    nonIdempotentMethods,
    iterationMethods,
    {
      id: 2551,
      title: "4. Проверочные методы",
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
      id: 2552,
      title: "5. Полезные ссылки",
      children: [
        {
          title: "",
          type: "text",
          url: "https://learn.javascript.ru/array-methods",
          link: "Learn more about array methods",
        },
        {
          title: "",
          type: "text",
          url: "https://medium.com/@sewolpe/visualizing-javascript-array-methods-7babf560f7be",
          link: "Visual representation of array methods",
        },
      ],
    },
  ],
};
