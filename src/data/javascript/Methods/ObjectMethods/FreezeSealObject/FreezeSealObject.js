export const FreezeSealObject = {
  id: 2566,
  title: "3. Заморозка и защита объектов",
  children: [
    {
      title: "Object.freeze(obj)",
      type: "text",
      description: `
            <p><strong>Object.freeze(obj)</strong>: Полностью замораживает объект, предотвращая добавление, удаление или изменение его свойств.</p>
          `,
      code: `
const obj = { name: 'Alice' };
Object.freeze(obj);
obj.name = 'Bob'; // не сработает
console.log(obj.name); // 'Alice'
          `,
    },
    {
      title: "Object.seal(obj)",
      type: "text",
      description: `
            <p><strong>Object.seal(obj)</strong>: Запрещает добавление и удаление свойств объекта, но позволяет изменять существующие свойства.</p>
          `,
      code: `
const obj = { name: 'Alice' };
Object.seal(obj);
obj.age = 25; // не сработает
obj.name = 'Bob'; // сработает
console.log(obj); // { name: 'Bob' }
          `,
    },
  ],
};
