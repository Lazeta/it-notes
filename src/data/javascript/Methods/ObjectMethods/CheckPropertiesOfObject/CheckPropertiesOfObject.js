export const CheckPropertiesOfObject = {
  id: 2568,
  title: "5. Проверка свойств объекта",
  children: [
    {
      title: "Object.prototype.hasOwnProperty()",
      type: "text",
      description: `
            <p><strong>Object.prototype.hasOwnProperty()</strong>: Возвращает булево значение, указывающее, является ли указанное свойство собственным свойством объекта.</p>
          `,
      code: `
const obj = { name: 'Alice' };
console.log(obj.hasOwnProperty('name')); // true
console.log(obj.hasOwnProperty('age')); // false
          `,
    },
  ],
};
