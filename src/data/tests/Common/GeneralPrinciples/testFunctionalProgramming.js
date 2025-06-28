export const testFunctionalProgramming = {
  id: 100500,
  title: "Functional Programming (Функциональное программирование)",
  questions: [
    {
      id: 100501,
      question: "Что такое функциональное программирование?",
      answer: `
      **Функциональное программирование** — это парадигма программирования, в которой основное внимание уделяется:
      - Использованию функций как основных строительных блоков.
      - Избеганию изменения состояния и данных (иммутабельность).
      - Минимизации побочных эффектов.

      **Пример:**
      \`\`\`javascript
      // Чистая функция
      const add = (a, b) => a + b;

      console.log(add(2, 3)); // 5
      \`\`\`
      `,
    },
    {
      id: 100502,
      question: "Какие концепции в функциональном программировании?",
      answer: `
      **Основные концепции:**
      1. **Чистые функции:**
         - Всегда возвращают одинаковый результат для одинаковых входных данных.
         - Не имеют побочных эффектов.
         \`\`\`javascript
         function add(a, b) {
           return a + b;
         }
         \`\`\`

      2. **Иммутабельность:**
         - Данные не изменяются, вместо этого создаются новые значения.
         \`\`\`javascript
         const arr = [1, 2, 3];
         const newArr = [...arr, 4]; // Создается новый массив
         \`\`\`

      3. **Функции высшего порядка:**
         - Принимают или возвращают другие функции.
         \`\`\`javascript
         function applyFunction(fn, value) {
           return fn(value);
         }

         const double = (x) => x * 2;
         console.log(applyFunction(double, 5)); // 10
         \`\`\`

      4. **Рекурсия:**
         - Функция вызывает саму себя для решения подзадач.
         \`\`\`javascript
         function factorial(n) {
           return n === 0 ? 1 : n * factorial(n - 1);
         }
         console.log(factorial(5)); // 120
         \`\`\`

      5. **Ленивые вычисления:**
         - Вычисления выполняются только тогда, когда их результат нужен.
         \`\`\`javascript
         function* lazySquares(numbers) {
           for (const num of numbers) {
             yield num * num;
           }
         }

         const squares = lazySquares([1, 2, 3]);
         console.log(squares.next().value); // 1
         \`\`\`
      `,
    },
    {
      id: 100503,
      question: "Пример чистой функции",
      answer: `
      **Чистая функция:**
      - Всегда возвращает одинаковый результат для одинаковых входных данных.
      - Не имеет побочных эффектов.

      **Пример:**
      \`\`\`javascript
      function add(a, b) {
        return a + b;
      }

      console.log(add(2, 3)); // 5
      \`\`\`
      `,
    },
    {
      id: 100504,
      question: "Функции высшего порядка",
      answer: `
      **Функции высшего порядка:**
      - Принимают или возвращают другие функции.

      **Пример:**
      \`\`\`javascript
      function applyFunction(fn, value) {
        return fn(value);
      }

      const double = (x) => x * 2;
      console.log(applyFunction(double, 5)); // 10
      \`\`\`
      `,
    },
    {
      id: 100505,
      question: "Пример рекурсии",
      answer: `
      **Рекурсия:**
      - Функция вызывает саму себя для решения подзадач.

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
      id: 100506,
      question: "Пример ленивых вычислений",
      answer: `
      **Ленивые вычисления:**
      - Вычисления выполняются только тогда, когда их результат нужен.

      **Пример:**
      \`\`\`javascript
      function* lazySquares(numbers) {
        for (const num of numbers) {
          yield num * num;
        }
      }

      const squares = lazySquares([1, 2, 3]);
      console.log(squares.next().value); // 1
      console.log(squares.next().value); // 4
      \`\`\`
      `,
    },
    {
      id: 100507,
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
    {
      id: 100508,
      question: "Что такое композиция функций?",
      answer: `
      **Композиция функций:**
      - Комбинирование нескольких функций в одну, где результат одной функции передается как аргумент другой.

      **Пример:**
      \`\`\`javascript
      const compose = (f, g) => (x) => f(g(x));

      const double = (x) => x * 2;
      const square = (x) => x * x;

      const doubleThenSquare = compose(square, double);
      console.log(doubleThenSquare(3)); // (3 * 2)^2 = 36
      \`\`\`
      `,
    },
    {
      id: 100509,
      question: "Что такое монады (monads)?",
      answer: `
      **Монады:**
      - Структуры данных, которые позволяют обрабатывать цепочки операций с учетом контекста (например, Maybe, Either).

      **Пример (Maybe):**
      \`\`\`javascript
      class Maybe {
        constructor(value) {
          this.value = value;
        }

        static of(value) {
          return new Maybe(value);
        }

        map(fn) {
          return this.value !== null && this.value !== undefined
            ? Maybe.of(fn(this.value))
            : Maybe.of(null);
        }
      }

      const result = Maybe.of(5)
        .map((x) => x + 2)
        .map((x) => x * 3);

      console.log(result.value); // 21
      \`\`\`
      `,
    },
    {
      id: 100510,
      question: "Что такое функторы (functors)?",
      answer: `
      **Функторы:**
      - Структуры данных, которые позволяют работать с функциями как с обычными значениями.

      **Пример:**
      \`\`\`javascript
      class Functor {
        constructor(value) {
          this.value = value;
        }

        map(fn) {
          return new Functor(fn(this.value));
        }
      }

      const result = new Functor(5)
        .map((x) => x + 2)
        .map((x) => x * 3);

      console.log(result.value); // 21
        }
      \`\`\`
      `,
    },
  ],
};
