export const testIIFE = {
  id: 101150,
  title: "IIFE",
  questions: [
    {
      id: 101151,
      question: "Что такое IIFE?",
      answer: `
      **IIFE (Immediately Invoked Function Expression):**
      - Это функция, которая выполняется сразу после своего определения.
      - Используется для создания изолированной области видимости, чтобы избежать загрязнения глобальной области.

      **Синтаксис:**
      \`\`\`javascript
      (function() {
        console.log('Эта функция выполнится сразу');
      })();
      \`\`\`

      **Пример:**
      \`\`\`javascript
      (function () {
        const message = 'Hello, IIFE!';
        console.log(message); // 'Hello, IIFE!'
      })();
      \`\`\`
      `,
    },
    {
      id: 101152,
      question: "Зачем нужен IIFE?",
      answer: `
      **Цели использования IIFE:**
      1. **Изоляция переменных:**
         - Переменные внутри IIFE не попадают в глобальную область видимости.
         - Это помогает избежать конфликтов имен.

      2. **Мгновенное выполнение кода:**
         - Код внутри IIFE выполняется сразу после его определения.

      3. **Защита данных:**
         - IIFE может использоваться для создания закрытых данных, недоступных извне.

      **Пример изоляции переменных:**
      \`\`\`javascript
      (function () {
        const secret = 'Это секрет';
        console.log(secret); // 'Это секрет'
      })();

      console.log(secret); // ReferenceError: secret is not defined
      \`\`\`
      `,
    },
    {
      id: 101153,
      question: "Как передать аргументы в IIFE?",
      answer: `
      **Передача аргументов в IIFE:**
      - Аргументы можно передать как обычные параметры функции.

      **Пример:**
      \`\`\`javascript
      (function (name, age) {
        console.log(\`Имя: \${name}, Возраст: \${age}\`);
      })('Alice', 25);
      // Вывод: Имя: Alice, Возраст: 25
      \`\`\`
      `,
    },
    {
      id: 101154,
      question: "Как вернуть значение из IIFE?",
      answer: `
      **Возврат значения из IIFE:**
      - IIFE может возвращать значение, которое можно сохранить в переменной.

      **Пример:**
      \`\`\`javascript
      const result = (function () {
        return 'Результат IIFE';
      })();

      console.log(result); // 'Результат IIFE'
      \`\`\`
      `,
    },
    {
      id: 101155,
      question: "Как использовать IIFE с асинхронным кодом?",
      answer: `
      **IIFE с асинхронным кодом:**
      - IIFE может быть асинхронным, если используется \`async\`/ \`await\`.

      **Пример:**
      \`\`\`javascript
      (async function () {
        const response = await fetch('https://api.example.com/data'); 
        const data = await response.json();
        console.log(data);
      })();
      \`\`\`
      `,
    },
    {
      id: 101156,
      question: "Какие альтернативы IIFE существуют в современном JavaScript?",
      answer: `
      **Альтернативы IIFE:**
      1. **Блоки \`let\`/ \`const\`:**
         - Создают локальную область видимости без необходимости IIFE.
         \`\`\`javascript
         {
           const message = 'Локальная переменная';
           console.log(message); // 'Локальная переменная'
         }
         console.log(message); // ReferenceError
         \`\`\`

      2. **Модули ES6:**
         - Модули автоматически имеют изолированную область видимости.
         \`\`\`javascript
         // module.js
         const message = 'Экспортированное сообщение';
         export { message };

         // main.js
         import { message } from './module.js';
         console.log(message); // 'Экспортированное сообщение'
         \`\`\`

      3. **Функции:**
         - Обычные функции также могут создавать изолированные области видимости.
         \`\`\`javascript
         function myFunction() {
           const message = 'Локальное сообщение';
           console.log(message);
         }
         myFunction();
         \`\`\`
      `,
    },
    {
      id: 101157,
      question: "Как работает IIFE с замыканиями?",
      answer: `
      **IIFE и замыкания:**
      - IIFE может создавать замыкания для хранения состояния.

      **Пример:**
      \`\`\`javascript
      const counter = (function () {
        let count = 0;
        return {
          increment: function () {
            count++;
            return count;
          },
          decrement: function () {
            count--;
            return count;
          },
        };
      })();

      console.log(counter.increment()); // 1
      console.log(counter.increment()); // 2
      console.log(counter.decrement()); // 1
      \`\`\`
      `,
    },
    {
      id: 101158,
      question: "Что произойдет, если не добавить скобки вокруг IIFE?",
      answer: `
      **Отсутствие скобок:**
      - Без скобок функция будет восприниматься как объявление, а не выражение.
      - Это вызовет ошибку синтаксиса.

      **Пример ошибки:**
      \`\`\`javascript
      function () {
        console.log('Ошибка');
      }(); // SyntaxError: Unexpected token '('
      \`\`\`

      **Решение:**
      - Добавьте скобки вокруг функции:
      \`\`\`javascript
      (function () {
        console.log('Работает!');
      })();
      \`\`\`
      `,
    },
  ],
};
