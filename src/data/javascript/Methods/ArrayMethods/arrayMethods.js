import { idempotentMethods } from "./idempotentMethods/idempotentMethods";
import { iterationMethods } from "./IterationMethods/iterationMethods";
import { nonIdempotentMethods } from "./nonIdempotentMethods/nonIdempotentMethods";
import { verificationMethods } from "./verificationMethods/verificationMethods";

export const arrayMethods = {
  id: 505,
  title: "Array Methods (методы массива)",
  children: [
    idempotentMethods,
    nonIdempotentMethods,
    iterationMethods,
    verificationMethods,
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
