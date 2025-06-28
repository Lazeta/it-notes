export const testMapVsForEach = {
  id: 100575,
  title: "Map и forEach",
  questions: [
    {
      id: 100576,
      question: "Что такое метод map?",
      answer: `
      **Метод \`map\`:**
      - Создает новый массив, применяя функцию к каждому элементу исходного массива.
      - Не изменяет исходный массив.
      - Возвращает новый массив с результатами.

      **Пример:**
      \`\`\`javascript
      const numbers = [1, 2, 3];
      const doubled = numbers.map((num) => num * 2);

      console.log(doubled); // [2, 4, 6]
      console.log(numbers); // [1, 2, 3] (исходный массив не изменился)
      \`\`\`
      `,
    },
    {
      id: 100577,
      question: "Что такое метод forEach?",
      answer: `
      **Метод \`forEach\`:**
      - Выполняет функцию для каждого элемента массива.
      - Не создает новый массив.
      - Используется для выполнения действий (например, вывода в консоль), но ничего не возвращает.

      **Пример:**
      \`\`\`javascript
      const numbers = [1, 2, 3];
      numbers.forEach((num) => console.log(num));

      // Вывод:
      // 1
      // 2
      // 3
      \`\`\`
      `,
    },
    {
      id: 100578,
      question: "Какая разница между map и forEach?",
      answer: `
      **Разница между \`map\` и \`forEach\`:**
      1. **Возвращаемое значение:**
         - \`map\`: Возвращает новый массив с результатами.
         - \`forEach\`: Ничего не возвращает (\`undefined\`).

      2. **Изменение исходного массива:**
         - \`map\`: Не изменяет исходный массив.
         - \`forEach\`: Также не изменяет исходный массив, но используется для побочных эффектов.

      3. **Цель использования:**
         - \`map\`: Когда нужно преобразовать данные и получить новый массив.
         - \`forEach\`: Когда нужно выполнить действие для каждого элемента (например, вывести в консоль).

      **Пример:**
      \`\`\`javascript
      const numbers = [1, 2, 3];

      // map
      const doubled = numbers.map((num) => num * 2);
      console.log(doubled); // [2, 4, 6]

      // forEach
      numbers.forEach((num) => console.log(num));
      // Вывод:
      // 1
      // 2
      // 3
      \`\`\`
      `,
    },
    {
      id: 100579,
      question: "Когда использовать map?",
      answer: `
      **Когда использовать \`map\`:**
      - Когда нужно преобразовать массив в новый массив.
      - Например, для удвоения значений, фильтрации или форматирования данных.

      **Пример:**
      \`\`\`javascript
      const users = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 },
      ];

      const names = users.map((user) => user.name);
      console.log(names); // ['Alice', 'Bob']
      \`\`\`
      `,
    },
    {
      id: 100580,
      question: "Когда использовать forEach?",
      answer: `
      **Когда использовать \`forEach\`:**
      - Когда нужно выполнить действие для каждого элемента массива без создания нового массива.
      - Например, для вывода данных в консоль или отправки запросов.

      **Пример:**
      \`\`\`javascript
      const numbers = [1, 2, 3];
      numbers.forEach((num) => {
        console.log(\`Current number: \${num}\`);
      });

      // Вывод:
      // Current number: 1
      // Current number: 2
      // Current number: 3
      \`\`\`
      `,
    },
    {
      id: 100581,
      question: "Можно ли заменить map на forEach?",
      answer: `
      **Ответ:**
      - Да, но это не рекомендуется.
      - \`forEach\` не возвращает новый массив, поэтому для имитации \`map\` потребуется вручную создавать массив.

      **Пример замены map на forEach:**
      \`\`\`javascript
      const numbers = [1, 2, 3];

      // С использованием map
      const doubledMap = numbers.map((num) => num * 2);
      console.log(doubledMap); // [2, 4, 6]

      // С использованием forEach
      const doubledForEach = [];
      numbers.forEach((num) => {
        doubledForEach.push(num * 2);
      });
      console.log(doubledForEach); // [2, 4, 6]
      \`\`\`
      `,
    },
    {
      id: 100582,
      question: "Как работает асинхронный код внутри map и forEach?",
      answer: `
      **Асинхронный код:**
      - \`map\` и \`forEach\` выполняют функции синхронно, если они не содержат асинхронных операций.
      - Если функция содержит асинхронные операции, порядок выполнения может быть нарушен.

      **Пример:**
      \`\`\`javascript
      const numbers = [1, 2, 3];

      // map с асинхронной функцией
      const promises = numbers.map(async (num) => {
        return num * 2;
      });
      console.log(promises); // [Promise, Promise, Promise]

      // forEach с асинхронной функцией
      numbers.forEach(async (num) => {
        console.log(await Promise.resolve(num * 2));
      });
      // Вывод (порядок может быть нарушен):
      // 2
      // 4
      // 6
      \`\`\`
      `,
    },
  ],
};
