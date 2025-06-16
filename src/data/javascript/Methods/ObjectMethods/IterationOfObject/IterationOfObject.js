export const IterationOfObject = {
  id: 2564,
  title: "1. Итерация по объекту",
  children: [
    {
      title: "Object.keys(obj)",
      type: "text",
      description: `
            <p><strong>Object.keys(obj)</strong>: Возвращает массив строк, содержащий имена собственных перечисляемых свойств объекта.</p>
          `,
      code: `
const person = { name: 'Alice', age: 25 };
console.log(Object.keys(person)); // ['name', 'age']
          `,
    },
    {
      title: "Object.values(obj)",
      type: "text",
      description: `
            <p><strong>Object.values(obj)</strong>: Возвращает массив значений собственных перечисляемых свойств объекта.</p>
          `,
      code: `
const person = { name: 'Alice', age: 25 };
console.log(Object.values(person)); // ['Alice', 25]
          `,
    },
    {
      title: "Object.entries(obj)",
      type: "text",
      description: `
            <p><strong>Object.entries(obj)</strong>: Возвращает массив пар [ключ, значение] для собственных перечисляемых свойств объекта.</p>
          `,
      code: `
const person = { name: 'Alice', age: 25 };
console.log(Object.entries(person)); // [['name', 'Alice'], ['age', 25]]
          `,
    },
  ],
};
