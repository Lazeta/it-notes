export const testNullVsUndefined = {
  id: 100600,
  title: "null и undefined",
  questions: [
    {
      id: 100601,
      question: "Что такое null и undefined в JavaScript?",
      answer: `
**null:**
- Представляет собой намеренно отсутствующее или пустое значение.
- Является объектом по типу данных (это историческая особенность языка).

**undefined:**
- Указывает, что переменная объявлена, но не инициализирована.
- Является примитивным типом данных.

**Пример:**
\`\`\`javascript
let emptyValue = null; // Явно заданное пустое значение
let uninitializedValue; // undefined (не инициализировано)
console.log(emptyValue); // null
console.log(uninitializedValue); // undefined
\`\`\`
`,
    },
    {
      id: 100602,
      question: "В чем разница между null и undefined?",
      answer: `
**Разница:**
1. **Значение:**
   - \`null\`: Представляет собой явно заданное "пустое" значение.
   - \`undefined\`: Указывает на неинициализированное значение.
2. **Тип данных:**
   - \`typeof null\` возвращает \`"object"\` (историческая ошибка).
   - \`typeof undefined\` возвращает \`"undefined"\`.
3. **Использование:**
   - \`null\`: Используется для обозначения отсутствия значения.
   - \`undefined\`: Автоматически присваивается неинициализированным переменным.

**Пример:**
\`\`\`javascript
console.log(typeof null); // "object"
console.log(typeof undefined); // "undefined"
\`\`\`
`,
    },
    {
      id: 100603,
      question: "Как проверить, является ли значение null или undefined?",
      answer: `
**Проверка:**
1. **Строгое сравнение:**
   - Сравнивайте с \`null\` или \`undefined\` через \`===\`.

**Пример:**
\`\`\`javascript
const value = null;
if (value === null) {
  console.log('Value is null');
}
if (value === undefined) {
  console.log('Value is undefined');
}
\`\`\`

2. **Объединение проверок:**
   - Используйте логическое выражение \`value == null\`, которое проверяет как \`null\`, так и \`undefined\`.

**Пример:**
\`\`\`javascript
const value = undefined;
if (value == null) {
  console.log('Value is null or undefined');
}
\`\`\`
`,
    },
    {
      id: 100604,
      question: "Как работает оператор ?? (nullish coalescing)?",
      answer: `
**Оператор \`??\`:**
- Возвращает правый операнд, если левый равен \`null\` или \`undefined\`.
- Игнорирует такие значения, как \`false\`, \`0\`, \`''\` (пустая строка).

**Пример:**
\`\`\`javascript
const value = null;
const result = value ?? 'Default';
console.log(result); // 'Default'

const number = 0;
const result2 = number ?? 42;
console.log(result2); // 0 (не заменяется)
\`\`\`
`,
    },
    {
      id: 100605,
      question: "Как использовать null и undefined в условиях?",
      answer: `
**Использование в условиях:**
- \`null\` и \`undefined\` считаются "ложными" (\`falsy\`) значениями.

**Пример:**
\`\`\`javascript
const value = null;

if (!value) {
  console.log('Value is null or undefined'); // Выполнится
}

const definedValue = 'Hello';
if (definedValue) {
  console.log('Value is defined'); // Выполнится
}
\`\`\`
`,
    },
  ],
};
