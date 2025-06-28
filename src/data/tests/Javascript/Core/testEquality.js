export const testEquality = {
  id: 100525,
  title: "Equality (Равенство)",
  questions: [
    {
      id: 100526,
      question: "Что такое оператор строгого равенства (===)?",
      answer: `
      **Оператор строгого равенства (\`===\`):**
      - Проверяет, равны ли два значения без преобразования типов.
      - Возвращает \`true\`, если значения и их типы одинаковы.

      **Пример:**
      \`\`\`javascript
      console.log(5 === 5); // true
      console.log(5 === '5'); // false (разные типы)
      \`\`\`
      `,
    },
    {
      id: 100527,
      question: "Что такое оператор нестрогого равенства (==)?",
      answer: `
      **Оператор нестрогого равенства (\`==\`):**
      - Проверяет, равны ли два значения с преобразованием типов.
      - Может привести к неожиданным результатам из-за неявного преобразования.

      **Пример:**
      \`\`\`javascript
      console.log(5 == '5'); // true (строка '5' преобразуется в число 5)
      console.log(false == 0); // true (false преобразуется в 0)
      \`\`\`
      `,
    },
    {
      id: 100528,
      question: "Как работает метод Object.is?",
      answer: `
      **Метод \`Object.is\`:**
      - Проверяет, являются ли два значения одинаковыми.
      - Отличается от \`===\` в случаях:
        - \`NaN\`: \`Object.is(NaN, NaN)\` возвращает \`true\`.
        - \`-0\` и \`+0\`: \`Object.is(-0, +0)\` возвращает \`false\`.

      **Пример:**
      \`\`\`javascript
      console.log(Object.is(NaN, NaN)); // true
      console.log(Object.is(-0, +0)); // false
      console.log(Object.is(5, 5)); // true
      \`\`\`
      `,
    },
    {
      id: 100529,
      question: "Какие различия между ==, === и Object.is?",
      answer: `
      **Различия:**
      1. \`==\`:
         - Выполняет неявное преобразование типов.
         - Пример: \`5 == '5'\` → \`true\`.

      2. \`===\`:
         - Не выполняет преобразование типов.
         - Пример: \`5 === '5'\` → \`false\`.

      3. \`Object.is\`:
         - Аналогично \`===\`, но правильно обрабатывает \`NaN\` и \`-0\`/ \`+0\`.
         - Пример: \`Object.is(NaN, NaN)\` → \`true\`.

      **Таблица сравнения:**
      | Операция          | Результат   |
      |-------------------|-------------|
      | \`5 == '5'\`       | \`true\`    |
      | \`5 === '5'\`      | \`false\`   |
      | \`Object.is(NaN, NaN)\` | \`true\` |
      | \`Object.is(-0, +0)\` | \`false\` |
      `,
    },
    {
      id: 100530,
      question: "Почему NaN не равно NaN при использовании == или ===?",
      answer: `
      **Причины:**
      - Согласно спецификации IEEE 754, \`NaN\` определяется как значение, которое не равно ничему, включая само себя.
      - Это поведение сохраняется в \`==\` и \`===\`.

      **Пример:**
      \`\`\`javascript
      console.log(NaN == NaN); // false
      console.log(NaN === NaN); // false
      \`\`\`

      **Решение:**
      - Используйте \`Object.is(NaN, NaN)\` или метод \`isNaN()\`.
      `,
    },
    {
      id: 100531,
      question: "Как проверить, является ли значение NaN?",
      answer: `
      **Способы проверки:**
      1. \`isNaN()\`:
         - Преобразует значение в число перед проверкой.
         - Может дать ложноположительные результаты для нечисловых значений.

      2. \`Number.isNaN()\`:
         - Проверяет, является ли значение именно \`NaN\`.
         - Без преобразования типов.

      **Пример:**
      \`\`\`javascript
      console.log(isNaN('abc')); // true (не рекомендуется)
      console.log(Number.isNaN('abc')); // false
      console.log(Number.isNaN(NaN)); // true
      \`\`\`
      `,
    },
    {
      id: 100532,
      question: "Как сравнить два объекта на равенство?",
      answer: `
      **Сравнение объектов:**
      - \`==\` и \`===\` сравнивают ссылки, а не содержимое.
      - Для глубокого сравнения используйте рекурсивную функцию или библиотеки (например, Lodash).

      **Пример:**
      \`\`\`javascript
      const obj1 = { a: 1 };
      const obj2 = { a: 1 };

      console.log(obj1 === obj2); // false (разные ссылки)
      console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true (сравнение строк)
      \`\`\`
      `,
    },
    {
      id: 100533,
      question: "Что такое глубокое сравнение объектов?",
      answer: `
      **Глубокое сравнение:**
      - Проверяет равенство всех свойств объектов, включая вложенные.
      - Требует рекурсивной проверки.

      **Пример реализации:**
      \`\`\`javascript
      function deepEqual(obj1, obj2) {
        if (obj1 === obj2) return true;

        if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
          return false;
        }

        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) return false;

        for (const key of keys1) {
          if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
          }
        }

        return true;
      }

      const obj1 = { a: 1, b: { c: 2 } };
      const obj2 = { a: 1, b: { c: 2 } };
      console.log(deepEqual(obj1, obj2)); // true
      \`\`\`
      `,
    },
    {
      id: 100534,
      question: "Как сравнить массивы на равенство?",
      answer: `
      **Сравнение массивов:**
      - \`==\` и \`===\` сравнивают ссылки, а не содержимое.
      - Для сравнения содержимого используйте методы, такие как \`JSON.stringify()\` или циклы.

      **Пример:**
      \`\`\`javascript
      const arr1 = [1, 2, 3];
      const arr2 = [1, 2, 3];

      console.log(arr1 === arr2); // false (разные ссылки)
      console.log(JSON.stringify(arr1) === JSON.stringify(arr2)); // true
      \`\`\`
      `,
    },
    {
      id: 100535,
      question:
        "Что такое ложные значения (falsy values) и как они влияют на равенство?",
      answer: `
      **Ложные значения:**
      - Значения, которые становятся \`false\` при приведении к булевому типу.
      - Примеры: \`false\`, \`0\`, \`''\` (пустая строка), \`null\`, \`undefined\`, \`NaN\`.

      **Пример:**
      \`\`\`javascript
      console.log(0 == false); // true
      console.log('' == false); // true
      console.log(null == undefined); // true
      \`\`\`
      `,
    },
  ],
};
