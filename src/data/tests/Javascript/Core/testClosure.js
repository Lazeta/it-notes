export const testClosure = {
  id: 100150,
  title: "Closure (Замыкания)",
  questions: [
    {
      id: 100151,
      question: "Что такое замыкание?",
      answer: `
      **Замыкание (closure)** — это функция, которая имеет доступ к переменным своего лексического окружения 
      (lexical environment), даже после того, как внешняя функция, в которой она была определена, завершила 
      свое выполнение.

      **Пример:**
      \`\`\`javascript
      function createCounter() {
        let count = 0; // Лексическое окружение
        return function () {
          count++; // Замыкание сохраняет доступ к count
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
      id: 100152,
      question: "Для чего замыкание нужно?",
      answer: `
      **Основные применения замыканий:**
      1. **Сохранение состояния:**
         - Замыкания позволяют сохранять состояние между вызовами функции.
         \`\`\`javascript
         function createMultiplier(multiplier) {
           return function (value) {
             return value * multiplier;
           };
         }

         const double = createMultiplier(2);
         console.log(double(5)); // 10
         \`\`\`

      2. **Инкапсуляция:**
         - Замыкания могут использоваться для создания приватных переменных.
         \`\`\`javascript
         function createBankAccount(initialBalance) {
           let balance = initialBalance;
           return {
             deposit(amount) {
               balance += amount;
               return balance;
             },
             withdraw(amount) {
               if (amount <= balance) {
                 balance -= amount;
               }
               return balance;
             },
           };
         }

         const account = createBankAccount(100);
         console.log(account.deposit(50)); // 150
         console.log(account.withdraw(30)); // 120
         \`\`\`

      3. **Асинхронное программирование:**
         - Замыкания часто используются в асинхронных операциях (например, \`setTimeout\`).
         \`\`\`javascript
         function delayedGreeting(name) {
           setTimeout(() => {
             console.log(\`Hello, \${name}!\`);
           }, 1000);
         }

         delayedGreeting('Alice'); // Hello, Alice! (через 1 секунду)
         \`\`\`

      4. **Паттерны проектирования:**
         - Замыкания являются основой для многих паттернов, таких как модули, каррирование и ленивые вычисления.
      `,
    },
    {
      id: 100153,
      question: "В чём разница между видами замыкания?",
      answer: `
      **Глобальное замыкание:**
      - Предоставляет доступ к переменным в любом месте кода.
      - Может привести к проблемам с организацией кода и конфликтам имён.
      \`\`\`javascript
      const globalVar = 'I am global';

      function accessGlobal() {
        console.log(globalVar); // Доступ к глобальной переменной
      }

      accessGlobal(); // I am global
      \`\`\`

      **Функциональное замыкание:**
      - Обеспечивает более строгую организацию кода.
      - Позволяет создавать скрытые переменные и функциональность, доступные только внутри функции.
      \`\`\`javascript
      function createSecret() {
        const secret = 'hidden';
        return function () {
          return secret;
        };
      }

      const revealSecret = createSecret();
      console.log(revealSecret()); // hidden
      \`\`\`

      **Блочное замыкание:**
      - Обеспечивает мелкий уровень контроля над областью видимости переменных.
      - Переменные, объявленные через \`let\` или \`const\`, доступны только в рамках блока.
      \`\`\`javascript
      {
        const blockScoped = 'I am block scoped';
        console.log(blockScoped); // I am block scoped
      }
      console.log(blockScoped); // ReferenceError
      \`\`\`
      `,
    },
    {
      id: 100154,
      question: "Чем отличается замыкание от области видимости?",
      answer: `
      **Область видимости (scope):**
      - Определяет, где в коде переменная является доступной.
      - Виды областей видимости: глобальная, функциональная, блочная.

      **Замыкание (closure):**
      - Это способность функции запоминать и получать доступ к переменным из своей лексической области 
        видимости, даже если функция выполняется вне этой области.

      **Пример:**
      \`\`\`javascript
      function outerFunction() {
        const outerVariable = 'I am from outer scope';
        function innerFunction() {
          console.log(outerVariable); // Замыкание
        }
        return innerFunction;
      }

      const closure = outerFunction();
      closure(); // I am from outer scope
      \`\`\`
      `,
    },
    {
      id: 100155,
      question:
        "Какой смысл замыканий, если бы не было функций высшего порядка?",
      answer: `
      **Значение замыканий без функций высшего порядка:**
      - Замыкания всё равно полезны для создания инкапсулированного кода и приватных переменных.
      - Они позволяют реализовывать паттерны, такие как каррирование.

      **Пример:**
      \`\`\`javascript
      function createLogger(prefix) {
        return function (message) {
          console.log(\`\${prefix}: \${message}\`);
        };
      }

      const infoLogger = createLogger('INFO');
      infoLogger('This is a log message'); // INFO: This is a log message
      \`\`\`

      **Функции высшего порядка расширяют возможности замыканий:**
      - Они позволяют передавать и возвращать функции, создавая более гибкие и сложные структуры.
      \`\`\`javascript
      function multiplyBy(factor) {
        return function (number) {
          return number * factor;
        };
      }

      const double = multiplyBy(2);
      console.log(double(5)); // 10
      \`\`\`
      `,
    },
    {
      id: 100156,
      question: "Как замыкания используются в реальных проектах?",
      answer: `
      **Примеры использования замыканий в реальных проектах:**
      1. **Модули:**
         - Замыкания используются для создания приватных переменных и методов.
         \`\`\`javascript
         const Module = (function () {
           let privateData = 'I am private';
           return {
             getData() {
               return privateData;
             },
           };
         })();

         console.log(Module.getData()); // I am private
         \`\`\`

      2. **Каррирование:**
         - Замыкания позволяют создавать функции с частичным применением аргументов.
         \`\`\`javascript
         function add(a) {
           return function (b) {
             return a + b;
           };
         }

         const addFive = add(5);
         console.log(addFive(3)); // 8
         \`\`\`

      3. **Ленивая загрузка данных:**
         - Замыкания могут использоваться для отложенной загрузки ресурсов.
         \`\`\`javascript
         function lazyLoadResource() {
           let resource = null;
           return function () {
             if (!resource) {
               resource = 'Resource loaded';
             }
             return resource;
           };
         }

         const load = lazyLoadResource();
         console.log(load()); // Resource loaded
         \`\`\`
      `,
    },
    {
      id: 100157,
      question: "Как замыкания связаны с асинхронным программированием?",
      answer: `
      **Связь с асинхронным программированием:**
      - Замыкания позволяют сохранять контекст выполнения при работе с асинхронными операциями.

      **Пример с \`setTimeout\`:**
      \`\`\`javascript
      function delayedLog(message) {
        setTimeout(() => {
          console.log(message); // Замыкание сохраняет доступ к message
        }, 1000);
      }

      delayedLog('Hello after 1 second'); // Hello after 1 second (через 1 секунду)
      \`\`\`

      **Пример с обработчиками событий:**
      \`\`\`javascript
      function createButtonHandler(buttonId) {
        return function () {
          console.log(\`Button \${buttonId} clicked\`);
        };
      }

      const handler = createButtonHandler('submit');
      document.getElementById('submit').addEventListener('click', handler);
      \`\`\`
      `,
    },
  ],
};
