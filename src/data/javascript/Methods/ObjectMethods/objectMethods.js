export const objectMethods = {
  id: 508,
  title: "Object Methods (методы объекта)",
  children: [
    {
      title: "1. Итерация по объекту",
      type: "text",
      description: `
        <p>Эти методы используются для итерации по свойствам объекта:</p>
      `,
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
    },
    {
      title: "2. Копирование и объединение объектов",
      type: "text",
      description: `
        <p>Эти методы используются для копирования или объединения объектов:</p>
      `,
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
    },
    {
      title: "3. Заморозка и защита объектов",
      type: "text",
      description: `
        <p>Эти методы используются для защиты объектов от изменений:</p>
      `,
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
    },
    {
      title: "4. Создание и сравнение объектов",
      type: "text",
      description: `
        <p>Эти методы используются для создания новых объектов или сравнения значений:</p>
      `,
      children: [
        {
          title: "Object.create(proto, propertiesObject)",
          type: "text",
          description: `
            <p><strong>Object.create(proto, propertiesObject)</strong>: Создает новый объект с указанным прототипом и свойствами.</p>
          `,
          code: `
const proto = { greet() { console.log('Hello!'); } };
const obj = Object.create(proto);
obj.greet(); // 'Hello!'
          `,
        },
        {
          title: "Object.is(value1, value2)",
          type: "text",
          description: `
            <p><strong>Object.is(value1, value2)</strong>: Определяет, являются ли два значения строго равными. В отличие от оператора <code>===</code>, <code>Object.is()</code> корректно работает с <code>NaN</code> и <code>-0</code>.</p>
          `,
          code: `
console.log(Object.is('abc', 'abc')); // true
console.log(Object.is(0, -0)); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(null, undefined)); // false
          `,
        },
      ],
    },
    {
      title: "5. Проверка свойств объекта",
      type: "text",
      description: `
        <p>Эти методы используются для проверки наличия свойств в объекте:</p>
      `,
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
    },
    {
      title: "6. Полезные ссылки",
      type: "text",
      description: `
        <p>Дополнительные материалы для изучения:</p>
      `,
      children: [
        {
          title: "Learn more about Object methods",
          type: "link",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",
        },
        {
          title: "Interactive examples of Object methods",
          type: "link",
          url: "https://javascript.info/object-methods",
        },
      ],
    },
  ],
};
