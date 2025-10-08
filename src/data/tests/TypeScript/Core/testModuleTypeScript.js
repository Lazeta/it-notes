export const testModuleTypeScript = {
  id: 101975,
  title: "Модули",
  questions: [
    {
      id: 101976,
      question: "Что такое модули?",
      answer: `
**Модули:**
- Это отдельные файлы или блоки кода, которые содержат логически связанные функции, классы, переменные и т.д.
- Модули позволяют организовать код в независимые, переиспользуемые части.

**Основные преимущества модулей:**
1. **Инкапсуляция:** Код внутри модуля изолирован, и только явно экспортированные элементы доступны снаружи.
2. **Повторное использование:** Модули можно импортировать и использовать в разных частях программы.
3. **Управление зависимостями:** Модули помогают управлять зависимостями между частями программы.
4. **Улучшение читаемости и поддержки кода:** Разделение кода на модули делает его более структурированным.

**Пример модуля в TypeScript:**
\`\`\`typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

// main.ts
import { add, subtract } from './math';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
\`\`\`
`,
    },
    {
      id: 101977,
      question: "Как экспортировать значения из модуля?",
      answer: `
**Экспорт значений:**
- Используйте ключевое слово \`export\`, чтобы сделать значения доступными для других модулей.

**Способы экспорта:**
1. **Named Export (именованный экспорт):**
   - Экспортирует несколько значений из модуля.
   \`\`\`typescript
   export const name = "Alice";
   export function greet() {
     console.log("Hello!");
   }
   \`\`\`

2. **Default Export (экспорт по умолчанию):**
   - Экспортирует одно значение как основное.
   \`\`\`typescript
   const name = "Alice";
   export default name;
   \`\`\`

**Пример использования:**
\`\`\`typescript
// module.ts
export const value = 42;
export function getValue() {
  return value;
}

// main.ts
import { value, getValue } from './module';
console.log(value); // 42
console.log(getValue()); // 42
\`\`\`
`,
    },
    {
      id: 101978,
      question: "Как импортировать значения из модуля?",
      answer: `
**Импорт значений:**
- Используйте ключевое слово \`import\`, чтобы использовать экспортированные значения из другого модуля.

**Способы импорта:**
1. **Named Import (именованный импорт):**
   - Импортирует конкретные значения из модуля.
   \`\`\`typescript
   import { add, subtract } from './math';
   console.log(add(5, 3)); // 8
   \`\`\`

2. **Default Import (импорт по умолчанию):**
   - Импортирует значение, экспортированное по умолчанию.
   \`\`\`typescript
   import name from './module';
   console.log(name); // Alice
   \`\`\`

3. **Import All (импорт всех значений):**
   - Импортирует все экспортированные значения как объект.
   \`\`\`typescript
   import * as MathUtils from './math';
   console.log(MathUtils.add(5, 3)); // 8
   \`\`\`

4. **Side-effect Import (импорт для побочных эффектов):**
   - Импортирует модуль без использования его значений.
   \`\`\`typescript
   import './module'; // Выполняет код модуля
   \`\`\`
`,
    },
    {
      id: 101979,
      question: "Что такое модульная система CommonJS и как она работает?",
      answer: `
**CommonJS:**
- Это модульная система, используемая в Node.js.
- Использует \`require\` для импорта и \`module.exports\` для экспорта.

**Пример:**
\`\`\`javascript
// math.js
function add(a, b) {
  return a + b;
}

module.exports = { add };

// main.js
const { add } = require('./math');
console.log(add(5, 3)); // 8
\`\`\`
`,
    },
    {
      id: 101980,
      question: "В чем разница между CommonJS и ES Modules?",
      answer: `
**Разница между CommonJS и ES Modules:**

1. **Синтаксис:**
   - **CommonJS:**
     - Использует \`require\` для импорта и \`module.exports\` для экспорта.
   - **ES Modules:**
     - Использует \`import\` и \`export\`.

2. **Поддержка:**
   - **CommonJS:** Основной формат в Node.js.
   - **ES Modules:** Стандарт JavaScript, поддерживается в современных браузерах и Node.js.

3. **Статическая vs динамическая загрузка:**
   - **ES Modules:** Статическая загрузка (импорты обрабатываются до выполнения кода).
   - **CommonJS:** Динамическая загрузка (импорты могут выполняться во время выполнения).

4. **Tree Shaking:**
   - **ES Modules:** Поддерживают tree shaking (удаление неиспользуемого кода).
   - **CommonJS:** Не поддерживают tree shaking.

**Пример ES Modules:**
\`\`\`typescript
import { add } from './math';
console.log(add(5, 3));
\`\`\`

**Пример CommonJS:**
\`\`\`javascript
const { add } = require('./math');
console.log(add(5, 3));
\`\`\`
`,
    },
    {
      id: 101981,
      question: "Как использовать динамический импорт в TypeScript?",
      answer: `
**Динамический импорт:**
- Позволяет загружать модули асинхронно.
- Используется синтаксис \`import()\`, который возвращает промис.

**Пример:**
\`\`\`typescript
async function loadModule() {
  const module = await import('./math');
  console.log(module.add(5, 3)); // 8
}

loadModule();
\`\`\`
`,
    },
    {
      id: 101982,
      question: "Как экспортировать и импортировать типы в TypeScript?",
      answer: `
**Экспорт и импорт типов:**
- Типы можно экспортировать и импортировать так же, как и значения.

**Пример:**
\`\`\`typescript
// types.ts
export type User = {
  name: string;
  age: number;
};

// main.ts
import { User } from './types';

const user: User = { name: "Alice", age: 25 };
console.log(user);
\`\`\`
`,
    },
  ],
};
