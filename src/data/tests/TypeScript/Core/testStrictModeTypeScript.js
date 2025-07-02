export const testStrictModeTypeScript = {
  id: 101950,
  title: "Strict mode",
  questions: [
    {
      id: 101951,
      question: "Что такое Strict mode?",
      answer: `
**Strict mode в TypeScript:**
- Это набор строгих проверок и правил, которые помогают писать более безопасный и надежный код.
- Включается с помощью параметра \`"strict": true\` в файле \`tsconfig.json\`.
- При активации \`strict\` автоматически включаются несколько связанных флагов, таких как \`noImplicitAny\`, \`strictNullChecks\` и другие.

**Основные преимущества:**
1. **Повышение безопасности:** Предотвращает распространенные ошибки, такие как неявное использование \`any\` или работа с \`null/undefined\`.
2. **Улучшение читаемости кода:** Строгий режим заставляет явно указывать типы и обрабатывать возможные ошибки.
3. **Лучшая поддержка инструментов разработки:** Улучшает автодополнение и проверку ошибок в редакторах кода.

**Пример настройки в \`tsconfig.json\`:**
\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`
`,
    },
    {
      id: 101952,
      question: "Какие флаги включаются при активации strict mode?",
      answer: `
**Флаги, включаемые \`strict\`:**
1. **noImplicitAny:**
   - Запрещает использование неявного типа \`any\`.
   - Если TypeScript не может вывести тип, требуется явное указание.

2. **strictNullChecks:**
   - Требует явной проверки значений на \`null\` и \`undefined\`.
   - Например, нельзя вызвать метод у переменной, которая может быть \`null\`.

3. **strictFunctionTypes:**
   - Проверяет совместимость типов функций более строго.

4. **strictBindCallApply:**
   - Проверяет корректность использования методов \`bind\`, \`call\` и \`apply\`.

5. **strictPropertyInitialization:**
   - Требует инициализации свойств класса в конструкторе.

6. **noImplicitThis:**
   - Запрещает использование \`this\` с неявным типом.

7. **alwaysStrict:**
   - Генерирует JavaScript-код в строгом режиме (\`"use strict"\`).

**Пример:**
\`\`\`typescript
function greet(name: string | null) {
  if (name) {
    console.log(\`Hello, \${name.toUpperCase()}\`);
  } else {
    console.log("Name is required");
  }
}
\`\`\`
`,
    },
    {
      id: 101953,
      question: "Зачем нужен noImplicitAny?",
      answer: `
**noImplicitAny:**
- Запрещает использование неявного типа \`any\`.
- Заставляет явно указывать типы для переменных, параметров функций и возвращаемых значений.

**Пример без noImplicitAny:**
\`\`\`typescript
function add(a, b) {
  return a + b; // TypeScript не выдаст ошибку, но типы неизвестны.
}
\`\`\`

**Пример с noImplicitAny:**
\`\`\`typescript
function add(a: number, b: number): number {
  return a + b; // Теперь типы явно указаны.
}
\`\`\`
`,
    },
    {
      id: 101954,
      question: "Как работает strictNullChecks?",
      answer: `
**strictNullChecks:**
- Требует явной проверки значений на \`null\` и \`undefined\`.
- Без этого флага TypeScript может позволить операции с \`null/undefined\`, что приведет к ошибкам во время выполнения.

**Пример без strictNullChecks:**
\`\`\`typescript
let name: string;
name = null; // Разрешено, но может вызвать ошибку.
console.log(name.toUpperCase()); // Ошибка во время выполнения.
\`\`\`

**Пример с strictNullChecks:**
\`\`\`typescript
let name: string | null = null;

if (name !== null) {
  console.log(name.toUpperCase());
} else {
  console.log("Name is null");
}
\`\`\`
`,
    },
    {
      id: 101955,
      question: "Как strictPropertyInitialization влияет на классы?",
      answer: `
**strictPropertyInitialization:**
- Требует инициализации свойств класса в конструкторе или при объявлении.
- Если свойство не инициализировано, TypeScript выдаст ошибку.

**Пример без инициализации:**
\`\`\`typescript
class User {
  name: string; // Error: Property 'name' has no initializer and is not definitely assigned in the constructor.
}
\`\`\`

**Пример с инициализацией:**
\`\`\`typescript
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("Alice");
console.log(user.name); // Alice
\`\`\`
`,
    },
    {
      id: 101956,
      question: "Можно ли отключить отдельные флаги strict mode?",
      answer: `
**Да, можно отключить отдельные флаги:**
- Если \`strict\` включен, можно отключить конкретные флаги в \`tsconfig.json\`.

**Пример:**
\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": false,
    "strictNullChecks": false
  }
}
\`\`\`
`,
    },
    {
      id: 101957,
      question: "Как strict mode помогает избежать ошибок?",
      answer: `
**Помощь в избежании ошибок:**
1. **Явные типы:** Исключает использование неявного \`any\`.
2. **Проверка на \`null/undefined\`:** Предотвращает ошибки времени выполнения.
3. **Инициализация свойств:** Убедитесь, что все свойства класса инициализированы.
4. **Строгая проверка функций:** Уменьшает вероятность некорректных вызовов.

**Пример:**
\`\`\`typescript
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

console.log(divide(10, 2)); // 5
\`\`\`
`,
    },
  ],
};
