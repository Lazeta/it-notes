export const testUseTSJS = {
  id: 101075,
  title: "Используем TypeScript",
  questions: [
    {
      id: 101076,
      question: "Что такое TypeScript и зачем он нужен?",
      answer: `
      **TypeScript:**
      - Это строго типизированный язык программирования, который является надмножеством JavaScript.
      - TypeScript добавляет статическую типизацию, что помогает обнаруживать ошибки на этапе разработки, а не во время выполнения.

      **Преимущества TypeScript:**
      1. **Статическая типизация:** Позволяет явно указывать типы данных, что улучшает читаемость и поддержку кода.
      2. **Поддержка современных стандартов:** TypeScript поддерживает ES6+, включая классы, интерфейсы и декораторы.
      3. **Инструменты разработки:** Лучшая автодополнение и проверка ошибок в редакторах кода (например, VS Code).
      4. **Компиляция в JavaScript:** TypeScript компилируется в чистый JavaScript, совместимый с любыми браузерами.

      **Пример:**
      \`\`\`typescript
      function greet(name: string): string {
        return \`Hello, \${name}!\`;
      }

      console.log(greet("Alice")); // Hello, Alice!
      \`\`\`
      `,
    },
    {
      id: 101077,
      question: "Как объявить переменные в TypeScript?",
      answer: `
      **Объявление переменных в TypeScript:**
      - В TypeScript можно использовать ключевые слова \`let\`, \`const\` и \`var\`, как в JavaScript, но с добавлением типов.

      **Примеры:**
      \`\`\`typescript
      let age: number = 25;
      const name: string = "Alice";
      let isActive: boolean = true;

      // Массивы
      let numbers: number[] = [1, 2, 3];
      let strings: Array<string> = ["a", "b", "c"];

      // Объединение типов
      let value: string | number = "text";
      value = 42;

      // Any (любой тип)
      let unknownValue: any = "string";
      unknownValue = 123;
      \`\`\`
      `,
    },
    {
      id: 101078,
      question: "Что такое интерфейсы в TypeScript?",
      answer: `
      **Интерфейсы:**
      - Интерфейсы позволяют определять структуру объектов, функций или классов.
      - Они используются для проверки типов и обеспечивают согласованность данных.

      **Пример:**
      \`\`\`typescript
      interface User {
        id: number;
        name: string;
        email?: string; // Необязательное свойство
      }

      const user: User = {
        id: 1,
        name: "Alice",
      };

      function printUser(user: User): void {
        console.log(\`ID: \${user.id}, Name: \${user.name}\`);
      }

      printUser(user);
      \`\`\`
      `,
    },
    {
      id: 101079,
      question: "Как работают классы в TypeScript?",
      answer: `
      **Классы:**
      - Классы в TypeScript поддерживают модификаторы доступа (\`public\`, \`private\`, \`protected\`) и прочие возможности ООП.

      **Пример:**
      \`\`\`typescript
      class Animal {
        private name: string;

        constructor(name: string) {
          this.name = name;
        }

        public speak(): void {
          console.log(\`\${this.name} makes a noise.\`);
        }
      }

      class Dog extends Animal {
        public speak(): void {
          console.log(\`\${this.name} barks.\`);
        }
      }

      const dog = new Dog("Rex");
      dog.speak(); // Rex barks.
      \`\`\`
      `,
    },
    {
      id: 101080,
      question: "Что такое Generics в TypeScript?",
      answer: `
      **Generics:**
      - Generics позволяют создавать функции, классы или интерфейсы, которые работают с различными типами данных без потери контроля над типами.

      **Пример:**
      \`\`\`typescript
      function identity<T>(arg: T): T {
        return arg;
      }

      const result1 = identity<string>("Hello");
      const result2 = identity<number>(42);

      console.log(result1); // Hello
      console.log(result2); // 42
      \`\`\`
      `,
    },
    {
      id: 101081,
      question: "Как использовать Enums в TypeScript?",
      answer: `
      **Enums:**
      - Enums позволяют определять набор именованных констант.
      - Они могут быть числовыми или строковыми.

      **Пример:**
      \`\`\`typescript
      enum Color {
        Red = "RED",
        Green = "GREEN",
        Blue = "BLUE",
      }

      const selectedColor: Color = Color.Green;
      console.log(selectedColor); // GREEN
      \`\`\`
      `,
    },
    {
      id: 101082,
      question: "Что такое Union Types в TypeScript?",
      answer: `
      **Union Types:**
      - Union Types позволяют переменной иметь несколько типов.

      **Пример:**
      \`\`\`typescript
      function combine(a: number | string, b: number | string): number | string {
        if (typeof a === "number" && typeof b === "number") {
          return a + b;
        } else {
          return a.toString() + b.toString();
        }
      }

      console.log(combine(10, 20)); // 30
      console.log(combine("Hello, ", "World!")); // Hello, World!
      \`\`\`
      `,
    },
    {
      id: 101083,
      question: "Что такое Type Aliases в TypeScript?",
      answer: `
      **Type Aliases:**
      - Type Aliases позволяют создавать псевдонимы для типов.

      **Пример:**
      \`\`\`typescript
      type ID = number | string;

      function printID(id: ID): void {
        console.log(\`ID: \${id}\`);
      }

      printID(123); // ID: 123
      printID("abc"); // ID: abc
      \`\`\`
      `,
    },
    {
      id: 101084,
      question: "Что такое Utility Types в TypeScript?",
      answer: `
      **Utility Types:**
      - Utility Types предоставляют встроенные инструменты для преобразования типов.

      **Примеры:**
      \`\`\`typescript
      // Partial<T>: Делает все свойства объекта необязательными
      interface Todo {
        title: string;
        description: string;
      }

      const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>): Todo => {
        return { ...todo, ...fieldsToUpdate };
      };

      const todo: Todo = { title: "Learn TypeScript", description: "Read the docs" };
      const updatedTodo = updateTodo(todo, { description: "Practice coding" });

      console.log(updatedTodo);
      // { title: "Learn TypeScript", description: "Practice coding" }
      \`\`\`
      `,
    },
    {
      id: 101085,
      question: "Как настроить компиляцию TypeScript?",
      answer: `
      **Настройка компиляции:**
      - Для настройки используется файл \`tsconfig.json\`.
      - В этом файле можно указать параметры компиляции, такие как целевая версия JavaScript, включение файлов и другие опции.

      **Пример \`tsconfig.json\`:**
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
      `,
    },
  ],
};
