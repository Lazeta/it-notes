export const testDataType = {
  id: 100275,
  title: "Data Type (Типы Данных)",
  questions: [
    {
      id: 100276,
      question: "Какие типы данных существуют в JavaScript?",
      answer: `
      **Типы данных в JavaScript:**
      - **Примитивные типы:**
        1. \`String\`: Строки (например, \`"hello"\`).
        2. \`Number\`: Числа (например, \`42\`, \`3.14\`).
        3. \`BigInt\`: Большие целые числа (например, \`123456789012345678901234567890n\`).
        4. \`Boolean\`: Логические значения (\`true\` или \`false\`).
        5. \`Undefined\`: Переменная объявлена, но не инициализирована.
        6. \`Null\`: Отсутствие значения.
        7. \`Symbol\`: Уникальные идентификаторы.

      - **Ссылочный тип:**
        1. \`Object\`: Коллекции ключ-значение (включая массивы, функции и другие структуры).

      **Пример:**
      \`\`\`javascript
      const str = "Hello"; // String
      const num = 42; // Number
      const bool = true; // Boolean
      const undef = undefined; // Undefined
      const nul = null; // Null
      const sym = Symbol("id"); // Symbol
      const obj = { key: "value" }; // Object
      \`\`\`
      `,
    },
    {
      id: 100277,
      question: "Что такое примитивные типы данных?",
      answer: `
      **Примитивные типы данных:**
      - Это неизменяемые (immutable) значения, которые передаются по значению.
      - Включают: \`String\`, \`Number\`, \`BigInt\`, \`Boolean\`, \`Undefined\`, \`Null\`, \`Symbol\`.

      **Пример:**
      \`\`\`javascript
      let a = 42;
      let b = a; // Копируется значение
      b = 100;
      console.log(a); // 42 (не изменилось)
      \`\`\`
      `,
    },
    {
      id: 100278,
      question: "Что такое ссылочные типы данных?",
      answer: `
      **Ссылочные типы данных:**
      - Это изменяемые (mutable) значения, которые передаются по ссылке.
      - Включают: \`Object\`, \`Array\`, \`Function\`.

      **Пример:**
      \`\`\`javascript
      const obj1 = { value: 42 };
      const obj2 = obj1; // Копируется ссылка
      obj2.value = 100;
      console.log(obj1.value); // 100 (изменилось)
      \`\`\`
      `,
    },
    {
      id: 100279,
      question: "Чем отличаются примитивные типы от ссылочных?",
      answer: `
      **Отличия:**
      1. **Хранение:**
         - Примитивные типы хранятся в стеке (stack).
         - Ссылочные типы хранятся в куче (heap), а в стеке хранится ссылка на них.
      
      2. **Изменяемость:**
         - Примитивные типы неизменяемы.
         - Ссылочные типы изменяемы.

      3. **Передача:**
         - Примитивные типы передаются по значению.
         - Ссылочные типы передаются по ссылке.

      **Пример:**
      \`\`\`javascript
      // Примитив:
      let a = 42;
      let b = a;
      b = 100;
      console.log(a); // 42

      // Ссылочный:
      let obj1 = { value: 42 };
      let obj2 = obj1;
      obj2.value = 100;
      console.log(obj1.value); // 100
      \`\`\`
      `,
    },
    {
      id: 100280,
      question: "Что такое typeof и как он работает?",
      answer: `
      **Оператор \`typeof\`:**
      - Используется для определения типа данных значения.
      - Возвращает строку с названием типа.

      **Особенности:**
      - \`typeof null\` возвращает \`"object"\` (историческая ошибка).
      - \`typeof []\` возвращает \`"object"\`.
      - \`typeof function() {}\` возвращает \`"function"\`.

      **Пример:**
      \`\`\`javascript
      console.log(typeof 42); // "number"
      console.log(typeof "hello"); // "string"
      console.log(typeof true); // "boolean"
      console.log(typeof undefined); // "undefined"
      console.log(typeof null); // "object"
      console.log(typeof {}); // "object"
      console.log(typeof []); // "object"
      console.log(typeof function() {}); // "function"
      \`\`\`
      `,
    },
    {
      id: 100281,
      question: "Что такое NaN и как его проверить?",
      answer: `
      **NaN (Not-a-Number):**
      - Это специальное значение, которое указывает на ошибку в математических операциях.
      - \`NaN\` не равно ничему, даже самому себе.

      **Проверка:**
      - Используйте метод \`isNaN()\` или \`Number.isNaN()\`.

      **Пример:**
      \`\`\`javascript
      console.log(0 / 0); // NaN
      console.log(NaN === NaN); // false
      console.log(isNaN(NaN)); // true
      console.log(Number.isNaN(NaN)); // true
      \`\`\`
      `,
    },
    {
      id: 100282,
      question: "Что такое BigInt и зачем он нужен?",
      answer: `
      **BigInt:**
      - Это числовой тип данных, который позволяет работать с большими целыми числами.
      - Поддерживает числа больше, чем \`Number.MAX_SAFE_INTEGER\`.

      **Пример:**
      \`\`\`javascript
      const bigInt = 123456789012345678901234567890n;
      console.log(bigInt); // 123456789012345678901234567890n
      \`\`\`
      `,
    },
    {
      id: 100283,
      question: "Что такое Symbol и как его использовать?",
      answer: `
      **Symbol:**
      - Это уникальный и неизменяемый тип данных, используемый для создания уникальных идентификаторов.
      - Каждый \`Symbol\` уникален, даже если создан с одинаковым описанием.

      **Пример:**
      \`\`\`javascript
      const id1 = Symbol("id");
      const id2 = Symbol("id");
      console.log(id1 === id2); // false

      const obj = {};
      obj[id1] = "value1";
      console.log(obj[id1]); // "value1"
      \`\`\`
      `,
    },
    {
      id: 100284,
      question: "Что такое null и undefined?",
      answer: `
      **null:**
      - Представляет собой отсутствие значения или "пустое место".
      - Является ссылочным типом, но ведет себя как примитив.

      **undefined:**
      - Означает, что переменная объявлена, но не инициализирована.
      - Это значение по умолчанию для неинициализированных переменных.

      **Пример:**
      \`\`\`javascript
      let a;
      console.log(a); // undefined

      let b = null;
      console.log(b); // null
      \`\`\`
      `,
    },
    {
      id: 100285,
      question: "Как преобразовать типы данных в JavaScript?",
      answer: `
      **Преобразование типов:**
      1. **Явное преобразование:**
         - \`String(value)\`: Преобразует значение в строку.
         - \`Number(value)\`: Преобразует значение в число.
         - \`Boolean(value)\`: Преобразует значение в логическое.

      2. **Неявное преобразование:**
         - Происходит автоматически при выполнении операций.

      **Пример:**
      \`\`\`javascript
      // Явное:
      console.log(String(42)); // "42"
      console.log(Number("42")); // 42
      console.log(Boolean(0)); // false

      // Неявное:
      console.log(42 + ""); // "42"
      console.log("42" * 1); // 42
      console.log(!!42); // true
      \`\`\`
      `,
    },
  ],
};
