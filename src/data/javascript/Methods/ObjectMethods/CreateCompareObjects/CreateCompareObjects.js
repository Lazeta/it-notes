export const CreateCompareObjects = {
  id: 2567,
  title: "4. Создание и сравнение объектов",
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
};
