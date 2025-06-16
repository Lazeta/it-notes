export const CopyJoinObject = {
  id: 2565,
  title: "2. Копирование и объединение объектов",
  children: [
    {
      title: "Object.assign(target, ...sources)",
      type: "text",
      description: `
            <p><strong>Object.assign(target, ...sources)</strong>: Копирует значения всех собственных перечисляемых свойств из одного или более источников в целевой объект и возвращает его.</p>
          `,
      code: `
const target = { a: 1 };
const source = { b: 2, c: 3 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // { a: 1, b: 2, c: 3 }
          `,
    },
  ],
};
