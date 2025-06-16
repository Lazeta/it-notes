export const ArrowFunctions = {
  id: 145,
  title: "Arrow functions",
  children: [
    {
      title: "1. Синтаксис",
      type: "text",
      description: `
            <p>Стрелочные функции имеют более компактный синтаксис по сравнению с обычными функциями:</p>
          `,
      code: `
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
          `,
    },
    {
      title: "2. Лексическое значение this",
      type: "text",
      description: `
            <p>Стрелочные функции не имеют своего собственного <code>this</code>; вместо этого они используют <code>this</code> из окружающего контекста:</p>
          `,
      code: `
function Person() {
this.age = 0;

setInterval(() => {
this.age++; // 'this' ссылается на объект Person
console.log(this.age);
}, 1000);
}

const p = new Person(); // будет выводить возраст каждую секунду
          `,
    },
    {
      title: "3. Отсутствие объекта arguments",
      type: "text",
      description: `
            <p>Стрелочные функции не имеют собственного объекта <code>arguments</code>. Для доступа к аргументам можно использовать оператор <code>rest</code>:</p>
          `,
      code: `
const sum = (...args) => args.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4)); // 10
          `,
    },
    {
      title: "4. Не могут быть использованы как конструкторы",
      type: "text",
      description: `
            <p>Стрелочные функции не могут быть использованы с оператором <code>new</code>:</p>
          `,
      code: `
const Person = () => {};
// const p = new Person(); // ошибка: Person is not a constructor
          `,
    },
    {
      title: "5. Не имеют свойства prototype",
      type: "text",
      description: `
            <p>Стрелочные функции не имеют свойства <code>prototype</code>, что делает их непригодными для создания методов объектов:</p>
          `,
      code: `
const arrowFunc = () => {};
console.log(arrowFunc.prototype); // undefined
          `,
    },
    {
      title: "6. Возврат значений",
      type: "text",
      description: `
            <p>Если стрелочная функция состоит из одного выражения, то фигурные скобки и ключевое слово <code>return</code> можно опустить:</p>
          `,
      code: `
const square = x => x * x;
console.log(square(4)); // 16
          `,
    },
  ],
};
