export const objectMethods = {
  id: 508,
  title: "Object Methods",
  children: [
    {
      title:
        "1.Object.keys(obj): Возвращает массив строк, содержащий имена собственных перечисляемых свойств объекта.",
      type: "text",
      description: `<p>Примеры использования <code>Object.keys()</code>:</p>`,
      code: `
const person = { name: 'Alice', age: 25 };
console.log(Object.keys(person)); // ['name', 'age']
                                `,
    },
    {
      title:
        "2.Object.values(obj): Возвращает массив значений собственных перечисляемых свойств объекта.",
      type: "text",
      description: `<p>Примеры использования <code>Object.values()</code>:</p>`,
      code: `
const person = { name: 'Alice', age: 25 };
console.log(Object.values(person)); // ['Alice', 25]
                                `,
    },
    {
      title:
        "3.Object.create(proto, propertiesObject): Создает новый объект с указанным прототипом и свойствами.",
      type: "text",
      description: `<p>Примеры использования <code>Object.create()</code>:</p>`,
      code: `
const proto = { greet() { console.log('Hello!'); } };
const obj = Object.create(proto);
obj.greet(); // 'Hello!'
            `,
    },
    {
      title:
        "4.Object.freeze(obj): Замораживает объект, предотвращая добавление, удаление или изменение его свойств.",
      type: "text",
      description: `<p>Примеры использования <code>Object.freeze()</code>:</p>`,
      code: `
const obj = { name: 'Alice' };
Object.freeze(obj);
obj.name = 'Bob'; // не сработает
console.log(obj.name); // 'Alice'
            `,
    },
    {
      title:
        "5.Object.assign(target, ...sources): Копирует значения всех собственных перечисляемых свойств из одного или более источников в целевой объект и возвращает его.",
      type: "text",
      description: `<p>Примеры использования <code>Object.assign()</code>:</p>`,
      code: `
const target = { a: 1 };
const source = { b: 2, c: 3 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // { a: 1, b: 2, c: 3 }
            `,
    },
    {
      title:
        "6.Object.entries(obj): Возвращает массив пар [ключ, значение] для собственных перечисляемых свойств объекта.",
      type: "text",
      description: `<p>Примеры использования <code>Object.entries()</code>:</p>`,
      code: `
const person = { name: 'Alice', age: 25 };
console.log(Object.entries(person)); // [['name', 'Alice'], ['age', 25]]
            `,
    },
    {
      title:
        "7.Object.seal(obj): Замораживает объект, предотвращая добавление, удаление или изменение его свойств.",
      type: "text",
      description: `<p>Примеры использования <code>Object.seal()</code>:</p>`,
      code: `
const obj = { name: 'Alice' };
Object.seal(obj);
obj.age = 25; // не сработает
obj.name = 'Bob'; // сработает
console.log(obj); // { name: 'Bob' }
            `,
    },
    {
      title:
        "8.Object.is(value1, value2): Определяет, являются ли два значения одним и тем же значением.",
      type: "text",
      description: `<p>Примеры использования <code>Object.is()</code>:</p>`,
      code: `
console.log(Object.is('abc', 'abc')); // true
console.log(Object.is(0, -0)); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(null, undefined)); // false
            `,
    },
    {
      title:
        "9. Object.prototype.hasOwnProperty(): Возвращает булево значение, указывающее, является ли указанное свойство собственным свойством объекта.",
      type: "text",
      description: `<p>Примеры использования <code>Object.prototype.hasOwnProperty()</code>:</p>`,
      code: `
const obj = { name: 'Alice' };
console.log(obj.hasOwnProperty('name')); // true
console.log(obj.hasOwnProperty('age')); // false
            `,
    },
  ],
};
