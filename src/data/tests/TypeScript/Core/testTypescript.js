export const testTypescript = {
  id: 101700,
  title: "Typescript",
  questions: [
    {
      id: 101701,
      question: "Что такое TypeScript?",
      answer: `
      **TypeScript:**
      - Это строго типизированный язык программирования, который является надмножеством JavaScript.
      - Добавляет статическую типизацию, интерфейсы, классы, дженерики и другие возможности.
      - Компилируется в чистый JavaScript, совместимый с любыми браузерами и платформами.

      **Пример:**
      \`\`\`typescript
      let message: string = 'Hello, TypeScript!';
      console.log(message); // 'Hello, TypeScript!'
      \`\`\`
      `,
    },
    {
      id: 101702,
      question: "Какие преимущества TypeScript перед JavaScript?",
      answer: `
      **Преимущества TypeScript:**
      1. **Статическая типизация:**
         - Позволяет находить ошибки на этапе разработки.
      2. **Автоматическое завершение кода (IntelliSense):**
         - Упрощает написание кода благодаря подсказкам.
      3. **Поддержка современных стандартов:**
         - Включает ES6+ функции, такие как классы, модули и декораторы.
      4. **Масштабируемость:**
         - Подходит для больших проектов благодаря явной типизации.
      5. **Интерфейсы и дженерики:**
         - Упрощают работу с сложными структурами данных.

      **Пример:**
      \`\`\`typescript
      interface User {
        name: string;
        age: number;
      }

      function greet(user: User): string {
        return \`Hello, \${user.name}!\`;
      }

      const user: User = { name: 'Alice', age: 25 };
      console.log(greet(user)); // 'Hello, Alice!'
      \`\`\`
      `,
    },
    {
      id: 101703,
      question: "Что такое интерфейсы в TypeScript?",
      answer: `
      **Интерфейсы:**
      - Описывают структуру объекта или функции.
      - Используются для проверки типов на этапе компиляции.

      **Пример:**
      \`\`\`typescript
      interface Person {
        name: string;
        age?: number; // Необязательное свойство
      }

      function printPerson(person: Person): void {
        console.log(\`Name: \${person.name}, Age: \${person.age || 'Unknown'}\`);
      }

      const person: Person = { name: 'Bob' };
      printPerson(person); // 'Name: Bob, Age: Unknown'
      \`\`\`
      `,
    },
    {
      id: 101704,
      question: "Как работает система типов в TypeScript?",
      answer: `
      **Система типов:**
      - TypeScript использует статическую типизацию, что означает, что типы проверяются во время компиляции.
      - Типы могут быть явно указаны или выводиться автоматически.

      **Примеры типов:**
      1. **Базовые типы:**
         \`\`\`typescript
         let isDone: boolean = true;
         let total: number = 100;
         let title: string = 'TypeScript';
         \`\`\`

      2. **Массивы:**
         \`\`\`typescript
         let numbers: number[] = [1, 2, 3];
         let strings: Array<string> = ['a', 'b', 'c'];
         \`\`\`

      3. **Объединения (Union Types):**
         \`\`\`typescript
         let value: string | number = 'hello';
         value = 42;
         \`\`\`

      4. **Any и Unknown:**
         \`\`\`typescript
         let anything: any = 'string'; // Любой тип
         let unknownValue: unknown = 42; // Неизвестный тип
         \`\`\`
      `,
    },
    {
      id: 101705,
      question: "Что такое дженерики в TypeScript?",
      answer: `
      **Дженерики:**
      - Позволяют создавать универсальные функции, классы или интерфейсы, работающие с различными типами данных.
      - Обеспечивают повторное использование кода без потери типобезопасности.

      **Пример:**
      \`\`\`typescript
      function identity<T>(arg: T): T {
        return arg;
      }

      const output1 = identity<string>('Hello'); // 'Hello'
      const output2 = identity<number>(42); // 42
      \`\`\`
      `,
    },
    {
      id: 101706,
      question: "Что такое декораторы в TypeScript?",
      answer: `
      **Декораторы:**
      - Специальные объявления, которые добавляют метаданные или изменяют поведение классов, методов или свойств.
      - Часто используются в Angular и других фреймворках.

      **Пример:**
      \`\`\`typescript
      function log(target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
          console.log(\`Вызов метода \${key} с аргументами: \${JSON.stringify(args)}\`);
          return originalMethod.apply(this, args);
        };

        return descriptor;
      }

      class Calculator {
        @log
        add(a: number, b: number): number {
          return a + b;
        }
      }

      const calc = new Calculator();
      console.log(calc.add(2, 3)); // 'Вызов метода add с аргументами: [2,3]', затем '5'
      \`\`\`
      `,
    },
    {
      id: 101707,
      question: "Как использовать Enums в TypeScript?",
      answer: `
      **Enums (перечисления):**
      - Предоставляют удобный способ работы с набором констант.

      **Пример:**
      \`\`\`typescript
      enum Direction {
        Up = 1,
        Down,
        Left,
        Right,
      }

      console.log(Direction.Up); // 1
      console.log(Direction[2]); // 'Down'
      \`\`\`
      `,
    },
    {
      id: 101708,
      question: "Что такое Union Types и Intersection Types?",
      answer: `
      **Union Types:**
      - Позволяют переменной иметь несколько типов.

      **Intersection Types:**
      - Объединяют несколько типов в один.

      **Пример:**
      \`\`\`typescript
      type A = { a: number };
      type B = { b: string };

      type C = A & B; // Intersection
      const obj: C = { a: 1, b: 'text' };

      type D = string | number; // Union
      const value: D = 'hello';
      value = 42;
      \`\`\`
      `,
    },
    {
      id: 101709,
      question: "Как работают Utility Types в TypeScript?",
      answer: `
      **Utility Types:**
      - Это встроенные типы, которые помогают преобразовывать существующие типы.

      **Примеры:**
      1. **Partial<T>:**
         - Делает все свойства типа необязательными.
         \`\`\`typescript
         interface Todo {
           title: string;
           description: string;
         }

         const updateTodo = (todo: Partial<Todo>) => {};
         updateTodo({ title: 'New Title' });
         \`\`\`

      2. **Pick<T, K>:**
         - Выбирает подмножество свойств из типа.
         \`\`\`typescript
         interface Todo {
           title: string;
           description: string;
           completed: boolean;
         }

         type TodoPreview = Pick<Todo, 'title' | 'completed'>;
         const preview: TodoPreview = { title: 'Clean room', completed: false };
         \`\`\`
      `,
    },
    {
      id: 101710,
      question: "Как настроить TypeScript для проекта?",
      answer: `
      **Настройка TypeScript:**
      1. **Установка:**
         - Установите TypeScript через npm:
         \`\`\`bash
         npm install typescript --save-dev
         \`\`\`

      2. **Файл конфигурации:**
         - Создайте \`tsconfig.json\`:
         \`\`\`bash
         npx tsc --init
         \`\`\`

      3. **Основные параметры \`tsconfig.json\`:**
         \`\`\`json
         {
           "compilerOptions": {
             "target": "ES6",
             "module": "commonjs",
             "strict": true,
             "outDir": "./dist"
           },
           "include": ["src/**/*"]
         }
         \`\`\`

      4. **Компиляция:**
         - Скомпилируйте TypeScript в JavaScript:
         \`\`\`bash
         npx tsc
         \`\`\`
      `,
    },
  ],
};
