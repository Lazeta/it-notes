export const testFunctions = {
  id: 100550,
  title: "Functions (функции)",
  questions: [
    {
      id: 100551,
      question: "Что такое функция в JavaScript?",
      answer: `
      **Функция** — это блок кода, который можно вызывать многократно для выполнения определенной задачи.
      - Функции могут принимать параметры и возвращать значения.
      - В JavaScript функции являются объектами первого класса (first-class objects), что означает, что их можно передавать как аргументы, возвращать из других функций и присваивать переменным.

      **Пример:**
      \`\`\`javascript
      function greet(name) {
        return \`Hello, \${name}!\`;
      }

      console.log(greet('Alice')); // Hello, Alice!
      \`\`\`
      `,
    },
    {
      id: 100552,
      question: "Какие способы объявления функций существуют?",
      answer: `
      **Способы объявления функций:**
      1. **Function Declaration (Объявление функции):**
         - Объявляется с помощью ключевого слова \`function\`.
         - Поднимается (hoisting).
         \`\`\`javascript
         function add(a, b) {
           return a + b;
         }
         \`\`\`

      2. **Function Expression (Функциональное выражение):**
         - Присваивается переменной.
         - Не поднимается.
         \`\`\`javascript
         const multiply = function (a, b) {
           return a * b;
         };
         \`\`\`

      3. **Arrow Function (Стрелочная функция):**
         - Имеет сокращенный синтаксис.
         - Нет своего \`this\`.
         \`\`\`javascript
         const divide = (a, b) => a / b;
         \`\`\`

      4. **Immediately Invoked Function Expression (IIFE):**
         - Функция, которая выполняется сразу после объявления.
         \`\`\`javascript
         (function () {
           console.log('IIFE executed');
         })();
         \`\`\`
      `,
    },
    {
      id: 100553,
      question: "Что такое параметры и аргументы функции?",
      answer: `
      **Параметры и аргументы:**
      - **Параметры:** Переменные, указанные в объявлении функции.
      - **Аргументы:** Значения, передаваемые при вызове функции.

      **Пример:**
      \`\`\`javascript
      function greet(name, age) {
        console.log(\`Hello, my name is \${name} and I am \${age} years old.\`);
      }

      greet('Alice', 30); // name = 'Alice', age = 30
      \`\`\`
      `,
    },
    {
      id: 100554,
      question: "Что такое возвращаемое значение функции?",
      answer: `
      **Возвращаемое значение:**
      - Функция может возвращать значение с помощью ключевого слова \`return\`.
      - Если \`return\` отсутствует, функция возвращает \`undefined\`.

      **Пример:**
      \`\`\`javascript
      function add(a, b) {
        return a + b;
      }

      console.log(add(2, 3)); // 5

      function noReturn() {
        console.log('No return value');
      }

      console.log(noReturn()); // undefined
      \`\`\`
      `,
    },
    {
      id: 100555,
      question: "Что такое замыкания (closures)?",
      answer: `
      **Замыкания:**
      - Функция, которая имеет доступ к переменным из своей внешней области видимости, даже после завершения работы внешней функции.
      - Часто используется для создания приватных переменных или каррирования.

      **Пример:**
      \`\`\`javascript
      function createCounter() {
        let count = 0;
        return function () {
          count++;
          return count;
        };
      }

      const counter = createCounter();
      console.log(counter()); // 1
      console.log(counter()); // 2
      \`\`\`
      `,
    },
    {
      id: 100556,
      question: "Что такое рекурсия?",
      answer: `
      **Рекурсия:**
      - Функция вызывает саму себя для решения подзадач.
      - Рекурсия должна иметь базовый случай, чтобы избежать бесконечного цикла.

      **Пример:**
      \`\`\`javascript
      function factorial(n) {
        if (n === 0) {
          return 1; // Базовый случай
        } else {
          return n * factorial(n - 1); // Рекурсивный случай
        }
      }

      console.log(factorial(5)); // 120
      \`\`\`
      `,
    },
    {
      id: 100557,
      question: "Что такое функции высшего порядка?",
      answer: `
      **Функции высшего порядка:**
      - Функции, которые принимают другие функции в качестве аргументов или возвращают их в качестве результата.

      **Пример:**
      \`\`\`javascript
      function applyOperation(a, b, operation) {
        return operation(a, b);
      }

      const add = (x, y) => x + y;
      const multiply = (x, y) => x * y;

      console.log(applyOperation(2, 3, add));      // 5
      console.log(applyOperation(2, 3, multiply)); // 6
      \`\`\`
      `,
    },
    {
      id: 100558,
      question: "Чем стрелочные функции отличаются от обычных?",
      answer: `
      **Отличия стрелочных функций:**
      1. **Синтаксис:**
         - Стрелочные функции имеют более короткий синтаксис.
         \`\`\`javascript
         const square = (x) => x * x;
         \`\`\`

      2. **Нет своего \`this\`:**
         - \`this\` берется из внешнего лексического окружения.
         \`\`\`javascript
         const obj = {
           value: 42,
           regularFunction: function () {
             console.log(this.value);
           },
           arrowFunction: () => {
             console.log(this.value);
           },
         };

         obj.regularFunction(); // 42
         obj.arrowFunction();   // undefined
         \`\`\`

      3. **Не могут быть использованы как конструкторы:**
         - Вызов \`new\` с стрелочной функцией вызовет ошибку.
         \`\`\`javascript
         const ArrowFunc = () => {};
         new ArrowFunc(); // TypeError: ArrowFunc is not a constructor
         \`\`\`
      `,
    },
    {
      id: 100559,
      question: "Что такое IIFE (Immediately Invoked Function Expression)?",
      answer: `
      **IIFE (Immediately Invoked Function Expression):**
      - Функция, которая выполняется сразу после объявления.
      - Часто используется для создания изолированной области видимости.

      **Пример:**
      \`\`\`javascript
      (function () {
        const secret = 'This is a secret';
        console.log(secret);
      })();

      console.log(typeof secret); // undefined
      \`\`\`
      `,
    },
    {
      id: 100560,
      question: "Что такое каррирование?",
      answer: `
      **Каррирование:**
      - Преобразование функции с несколькими аргументами в последовательность функций, каждая из которых принимает один аргумент.

      **Пример:**
      \`\`\`javascript
      function curry(fn) {
        return function curried(...args) {
          if (args.length >= fn.length) {
            return fn.apply(this, args);
          } else {
            return function (...nextArgs) {
              return curried.apply(this, args.concat(nextArgs));
            };
          }
        };
      }

      function add(a, b, c) {
        return a + b + c;
      }

      const curriedAdd = curry(add);
      console.log(curriedAdd(1)(2)(3)); // 6
      \`\`\`
      `,
    },
  ],
};
