export const testThis = {
  id: 100700,
  title: "This (привязка контекста)",
  questions: [
    {
      id: 100701,
      question: "Что такое `this` в JavaScript?",
      answer: `
      **Ключевое слово \`this\`:**
      - \`this\` — это специальное ключевое слово, которое указывает на текущий контекст выполнения.
      - Значение \`this\` зависит от того, как функция вызывается.

      **Пример:**
      \`\`\`javascript
      const person = {
        name: 'Alice',
        greet() {
          console.log(\`Hello, my name is \${this.name}\`);
        },
      };

      person.greet(); // Hello, my name is Alice
      \`\`\`
      `,
    },
    {
      id: 100702,
      question: "Как определяется значение `this`?",
      answer: `
      **Определение значения \`this\`:**
      1. **В методах объекта:** \`this\` ссылается на объект, которому принадлежит метод.
         \`\`\`javascript
         const obj = {
           value: 42,
           getValue() {
             return this.value;
           },
         };
         console.log(obj.getValue()); // 42
         \`\`\`

      2. **В глобальной области видимости:** \`this\` ссылается на глобальный объект (\`window\` в браузере).
         \`\`\`javascript
         console.log(this === window); // true (в браузере)
         \`\`\`

      3. **В строгом режиме (\`'use strict'\`):** \`this\` становится \`undefined\`.
         \`\`\`javascript
         'use strict';
         function test() {
           console.log(this);
         }
         test(); // undefined
         \`\`\`

      4. **В конструкторах:** \`this\` ссылается на создаваемый экземпляр объекта.
         \`\`\`javascript
         function Person(name) {
           this.name = name;
         }
         const alice = new Person('Alice');
         console.log(alice.name); // Alice
         \`\`\`

      5. **В обработчиках событий:** \`this\` обычно ссылается на элемент, который вызвал событие.
         \`\`\`javascript
         document.querySelector('button').addEventListener('click', function () {
           console.log(this); // <button>...</button>
         });
         \`\`\`
      `,
    },
    {
      id: 100703,
      question: "Как работает привязка контекста (`bind`, `call`, `apply`)?",
      answer: `
      **Привязка контекста:**
      - Методы \`bind\`, \`call\` и \`apply\` позволяют явно задать значение \`this\`.

      1. **\`bind\`:** Возвращает новую функцию с привязанным контекстом.
         \`\`\`javascript
         function greet() {
           console.log(\`Hello, my name is \${this.name}\`);
         }

         const person = { name: 'Alice' };
         const boundGreet = greet.bind(person);
         boundGreet(); // Hello, my name is Alice
         \`\`\`

      2. **\`call\`:** Вызывает функцию с указанным контекстом и аргументами.
         \`\`\`javascript
         function introduce(greeting) {
           console.log(\`\${greeting}, my name is \${this.name}\`);
         }

         const person = { name: 'Bob' };
         introduce.call(person, 'Hi'); // Hi, my name is Bob
         \`\`\`

      3. **\`apply\`:** Аналогично \`call\`, но принимает аргументы в виде массива.
         \`\`\`javascript
         function sum(a, b) {
           return this.multiplier * (a + b);
         }

         const context = { multiplier: 2 };
         console.log(sum.apply(context, [3, 4])); // 14
         \`\`\`
      `,
    },
    {
      id: 100704,
      question: "Что такое потеря контекста и как её избежать?",
      answer: `
      **Потеря контекста:**
      - Происходит, когда значение \`this\` теряется при передаче метода объекта как колбэка или при вызове 
        функции без контекста.

      **Пример потери контекста:**
      \`\`\`javascript
      const user = {
        name: 'Alice',
        greet() {
          console.log(\`Hello, \${this.name}\`);
        },
      };

      const greet = user.greet;
      greet(); // TypeError: Cannot read properties of undefined (потеря контекста)
      \`\`\`

      **Решения:**
      1. Использование \`bind\`:
         \`\`\`javascript
         const greet = user.greet.bind(user);
         greet(); // Hello, Alice
         \`\`\`

      2. Стрелочные функции:
         - Стрелочные функции не имеют собственного \`this\`, они заимствуют его из внешнего лексического окружения.
         \`\`\`javascript
         const user = {
           name: 'Alice',
           greet: () => {
             console.log(\`Hello, \${this.name}\`);
           },
         };

         user.greet(); // Hello, undefined (не рекомендуется использовать стрелочные функции для методов)
         \`\`\`

      3. Использование замыканий:
         \`\`\`javascript
         const user = {
           name: 'Alice',
           greet() {
             const self = this; // Сохраняем контекст
             setTimeout(function () {
               console.log(\`Hello, \${self.name}\`);
             }, 1000);
           },
         };

         user.greet(); // Hello, Alice
         \`\`\`
      `,
    },
    {
      id: 100705,
      question: "Как работает `this` в стрелочных функциях?",
      answer: `
      **Стрелочные функции и \`this\`:**
      - Стрелочные функции не имеют собственного \`this\`.
      - Они заимствуют \`this\` из внешнего лексического окружения.

      **Пример:**
      \`\`\`javascript
      const obj = {
        value: 42,
        regularFunction() {
          console.log(this.value); // 42
        },
        arrowFunction: () => {
          console.log(this.value); // undefined (this берется из глобального контекста)
        },
      };

      obj.regularFunction(); // 42
      obj.arrowFunction(); // undefined
      \`\`\`
      `,
    },
    {
      id: 100706,
      question: "Как работает `this` в классах?",
      answer: `
      **\`this\` в классах:**
      - В методах класса \`this\` ссылается на экземпляр класса.
      - Если метод передается как колбэк, контекст может быть потерян.

      **Пример:**
      \`\`\`javascript
      class Person {
        constructor(name) {
          this.name = name;
        }

        greet() {
          console.log(\`Hello, my name is \${this.name}\`);
        }
      }

      const person = new Person('Alice');
      person.greet(); // Hello, my name is Alice

      const greet = person.greet;
      greet(); // TypeError: Cannot read properties of undefined (потеря контекста)
      \`\`\`

      **Решение:**
      \`\`\`javascript
      const boundGreet = person.greet.bind(person);
      boundGreet(); // Hello, my name is Alice
      \`\`\`
      `,
    },
    {
      id: 100707,
      question: "Как работает `this` в обработчиках событий?",
      answer: `
      **\`this\` в обработчиках событий:**
      - В обработчиках событий \`this\` обычно ссылается на элемент, который вызвал событие.

      **Пример:**
      \`\`\`javascript
      document.querySelector('button').addEventListener('click', function () {
        console.log(this); // <button>...</button>
      });
      \`\`\`

      **Исключение:**
      Если используется стрелочная функция, \`this\` будет заимствован из внешнего контекста.
      \`\`\`javascript
      document.querySelector('button').addEventListener('click', () => {
        console.log(this); // window (или undefined в строгом режиме)
      });
      \`\`\`
      `,
    },
    
  ],
};
