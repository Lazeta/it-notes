export const testRegularExpressions = {
  id: 102150,
  title: "Regular Expressions (Регулярные выражения)",
  questions: [
    {
      id: 102151,
      question: "Что такое Regular Expressions (Регулярные выражения)?",
      answer: `
**Регулярные выражения (Regular Expressions, сокращенно RegExp):**
- Это шаблоны, используемые для поиска, проверки и замены текстовых данных.
- Они позволяют находить строки или их части, соответствующие определенному формату.

**Основные применения:**
1. **Поиск:** Находить подстроки, соответствующие шаблону.
2. **Проверка (валидация):** Проверять, соответствует ли строка определенному формату (например, email, телефон).
3. **Замена:** Заменять части строки на другие значения.

**Пример:**
\`\`\`javascript
const regex = /hello/;
const text = "hello world";
console.log(regex.test(text)); // true
\`\`\`
`,
    },
    {
      id: 102152,
      question: "Как создать регулярное выражение в JavaScript?",
      answer: `
**Создание регулярных выражений:**
1. **Литеральный синтаксис:**
   - Используется \`\\/pattern\\/\`.
   \`\`\`javascript
   const regex = /abc/;
   \`\`\`

2. **Конструктор \`RegExp\`:**
   - Используется для динамического создания регулярных выражений.
   \`\`\`javascript
   const pattern = "abc";
   const regex = new RegExp(pattern);
   \`\`\`

**Пример использования:**
\`\`\`javascript
const regex = /world/;
const text = "hello world";
console.log(regex.test(text)); // true
\`\`\`
`,
    },
    {
      id: 102153,
      question:
        "Какие основные метасимволы используются в регулярных выражениях?",
      answer: `
**Основные метасимволы:**
1. **\`.\` (точка):** Соответствует любому одному символу, кроме новой строки.
2. **\`\\d\`:** Цифра (0-9).
3. **\`\\w\`:** Буква, цифра или символ подчеркивания (\`a-z\`, \`A-Z\`, \`0-9\`, \`_\`).
4. **\`\\s\`:** Пробельный символ (пробел, табуляция, новая строка).
5. **\`\\D\`, \`\\W\`, \`\\S\`:** Отрицание соответствующих символов (\`[^0-9]\`, \`[^a-zA-Z0-9_]\`, \`[^пробельные]\`).
6. **\`^\`:** Начало строки.
7. **\`$\`:** Конец строки.
8. **\`*\`:** Ноль или более повторений предшествующего элемента.
9. **\`+\`:** Одно или более повторений предшествующего элемента.
10. **\`?\`:** Ноль или одно повторение предшествующего элемента.
11. **\`{n}\`:** Ровно \`n\` повторений.
12. **\`{n,}\`:** Не менее \`n\` повторений.
13. **\`{n,m}\`:** От \`n\` до \`m\` повторений.

**Пример:**
\`\`\`javascript
const regex = /\\d{3}-\\d{2}-\\d{4}/; // Формат: 123-45-6789
console.log(regex.test("123-45-6789")); // true
\`\`\`
`,
    },
    {
      id: 102154,
      question: "Как использовать флаги в регулярных выражениях?",
      answer: `
**Флаги:**
1. **\`i\`:** Игнорировать регистр (case-insensitive).
2. **\`g\`:** Глобальный поиск (все совпадения, а не только первое).
3. **\`m\`:** Многострочный режим (\`^$\`) работают для каждой строки, а не только для всей строки).

**Пример:**
\`\`\`javascript
const regex = /hello/i; // Игнорирование регистра
console.log(regex.test("Hello")); // true

const text = "hello world, hello universe";
const matches = text.match(/hello/g); // Все совпадения
console.log(matches); // ["hello", "hello"]
\`\`\`
`,
    },
    {
      id: 102155,
      question: "Как проверить строку с помощью регулярного выражения?",
      answer: `
**Методы проверки:**
1. **\`test()\`:** Возвращает \`true\` или \`false\`, если строка соответствует шаблону.
   \`\`\`javascript
   const regex = /hello/;
   console.log(regex.test("hello world")); // true
   \`\`\`

2. **\`match()\`:** Возвращает массив совпадений или \`null\`.
   \`\`\`javascript
   const text = "hello world, hello universe";
   const matches = text.match(/hello/g);
   console.log(matches); // ["hello", "hello"]
   \`\`\`

3. **\`exec()\`:** Возвращает первое совпадение или \`null\`.
   \`\`\`javascript
   const regex = /hello/;
   console.log(regex.exec("hello world")); // ["hello"]
   \`\`\`
`,
    },
    {
      id: 102156,
      question: "Как заменить часть строки с помощью регулярных выражений?",
      answer: `
**Метод \`replace()\`:**
- Заменяет совпадения на указанное значение.

**Пример:**
\`\`\`javascript
const text = "hello world";
const result = text.replace(/world/, "universe");
console.log(result); // "hello universe"

// Глобальная замена
const text2 = "hello world, hello universe";
const result2 = text2.replace(/hello/g, "hi");
console.log(result2); // "hi world, hi universe"
\`\`\`
`,
    },
    {
      id: 102157,
      question: "Как использовать группы захвата в регулярных выражениях?",
      answer: `
**Группы захвата:**
- Используются для выделения частей совпадений.
- Обозначаются круглыми скобками \`()\`.

**Пример:**
\`\`\`javascript
const regex = /(\\d{3})-(\\d{2})-(\\d{4})/;
const text = "SSN: 123-45-6789";
const match = text.match(regex);

if (match) {
  console.log(match[1]); // "123" (первый блок)
  console.log(match[2]); // "45" (второй блок)
  console.log(match[3]); // "6789" (третий блок)
}
\`\`\`
`,
    },
    {
      id: 102158,
      question: "Как экранировать специальные символы в регулярных выражениях?",
      answer: `
**Экранирование:**
- Для использования специальных символов (например, \`.\`, \`*\`, \`?\`) как обычных символов добавьте перед ними обратный слэш (\`\\\`).

**Пример:**
\`\`\`javascript
const regex = /\\./; // Ищет точку как символ
const text = "example.com";
console.log(regex.test(text)); // true
\`\`\`
`,
    },
    {
      id: 102159,
      question: "Как проверить формат email с помощью регулярного выражения?",
      answer: `
**Шаблон для email:**
\`\`\`javascript
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
console.log(emailRegex.test("example@example.com")); // true
console.log(emailRegex.test("invalid-email")); // false
\`\`\`
`,
    },
    {
      id: 102160,
      question: "Как проверить формат URL с помощью регулярного выражения?",
      answer: `
**Шаблон для URL:**
\`\`\`javascript
const urlRegex = /^(https?:\\/\\/)?([a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})(\\/.*)?$/;
console.log(urlRegex.test("https://example.com ")); // true
console.log(urlRegex.test("ftp://example.com")); // false
\`\`\`
`,
    },
  ],
};
