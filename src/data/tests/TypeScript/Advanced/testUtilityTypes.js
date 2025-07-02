export const testUtilityTypes = {
  id: 102100,
  title: "Utility Types",
  questions: [
    {
      id: 102101,
      question: "Что такое utility types?",
      answer: `
**Utility Types (Утилитарные типы):**
- Это встроенные типы в TypeScript, которые предоставляют удобные инструменты для преобразования и манипулирования типами.
- Они помогают упростить работу с типами, делая код более читаемым и поддерживаемым.

**Примеры популярных Utility Types:**
1. **Partial<T>:** Делает все свойства объекта необязательными.
   \`\`\`typescript
   interface Todo {
     title: string;
     description: string;
   }

   const updateTodo = (todo: Partial<Todo>) => {
     console.log(todo);
   };

   updateTodo({ title: "New Title" });
   \`\`\`

2. **Readonly<T>:** Делает все свойства объекта доступными только для чтения.
   \`\`\`typescript
   interface Todo {
     title: string;
   }

   const todo: Readonly<Todo> = { title: "Learn TypeScript" };
   // todo.title = "Change Title"; // Error: Cannot assign to 'title' because it is a read-only property.
   \`\`\`

3. **Pick<T, K>:** Создает новый тип, содержащий только выбранные свойства из исходного типа.
   \`\`\`typescript
   interface Todo {
     title: string;
     description: string;
     completed: boolean;
   }

   type TodoPreview = Pick<Todo, "title" | "completed">;

   const todo: TodoPreview = {
     title: "Clean room",
     completed: false,
   };
   \`\`\`

4. **Omit<T, K>:** Создает новый тип, исключая указанные свойства из исходного типа.
   \`\`\`typescript
   interface Todo {
     title: string;
     description: string;
     completed: boolean;
   }

   type TodoPreview = Omit<Todo, "description">;

   const todo: TodoPreview = {
     title: "Clean room",
     completed: false,
   };
   \`\`\`

5. **Record<K, T>:** Создает тип объекта, где ключи имеют тип \`K\`, а значения — тип \`T\`.
   \`\`\`typescript
   type Keys = "title" | "description";
   type Todo = Record<Keys, string>;

   const todo: Todo = {
     title: "Learn TypeScript",
     description: "Study utility types",
   };
   \`\`\`

6. **Exclude<T, U>:** Исключает из типа \`T\` все типы, которые совместимы с типом \`U\`.
   \`\`\`typescript
   type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
   \`\`\`

7. **Extract<T, U>:** Извлекает из типа \`T\` все типы, которые совместимы с типом \`U\`.
   \`\`\`typescript
   type T0 = Extract<"a" | "b" | "c", "a" | "b">; // "a" | "b"
   \`\`\`

8. **ReturnType<T>:** Получает тип возвращаемого значения функции.
   \`\`\`typescript
   function greet(): string {
     return "Hello, World!";
   }

   type GreetReturnType = ReturnType<typeof greet>; // string
   \`\`\`
`,
    },
    {
      id: 102102,
      question: "Как работает Partial<T>?",
      answer: `
**Partial<T>:**
- Делает все свойства объекта необязательными.
- Полезен, когда нужно обновить только часть свойств объекта.

**Пример:**
\`\`\`typescript
interface User {
  name: string;
  age: number;
}

function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

const user: User = { name: "Alice", age: 25 };
const updatedUser = updateUser(user, { age: 26 });

console.log(updatedUser); // { name: "Alice", age: 26 }
\`\`\`
`,
    },
    {
      id: 102103,
      question: "Как использовать Readonly<T>?",
      answer: `
**Readonly<T>:**
- Делает все свойства объекта доступными только для чтения.
- Полезен, чтобы предотвратить изменения объекта.

**Пример:**
\`\`\`typescript
interface Config {
  apiUrl: string;
}

const config: Readonly<Config> = {
  apiUrl: "https://api.example.com ",
};

// config.apiUrl = "https://new-api.example.com "; // Error: Cannot assign to 'apiUrl' because it is a read-only property.
\`\`\`
`,
    },
    {
      id: 102104,
      question: "В чем разница между Pick<T, K> и Omit<T, K>?",
      answer: `
**Разница:**
- **Pick<T, K>:** Создает новый тип, содержащий только выбранные свойства из исходного типа.
- **Omit<T, K>:** Создает новый тип, исключая указанные свойства из исходного типа.

**Пример Pick<T, K>:**
\`\`\`typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Learn TypeScript",
  completed: true,
};
\`\`\`

**Пример Omit<T, K>:**
\`\`\`typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Learn TypeScript",
  completed: true,
};
\`\`\`
`,
    },
    {
      id: 102105,
      question: "Как работает ReturnType<T>?",
      answer: `
**ReturnType<T>:**
- Извлекает тип возвращаемого значения функции.
- Полезен для определения типа результата функции без явного его указания.

**Пример:**
\`\`\`typescript
function add(a: number, b: number): number {
  return a + b;
}

type AddReturnType = ReturnType<typeof add>; // number

const result: AddReturnType = 42;
\`\`\`
`,
    },
    {
      id: 102106,
      question: "Как использовать Record<K, T>?",
      answer: `
**Record<K, T>:**
- Создает тип объекта, где ключи имеют тип \`K\`, а значения — тип \`T\`.
- Полезен для создания словарей или маппингов.

**Пример:**
\`\`\`typescript
type Keys = "name" | "age";
type User = Record<Keys, string>;

const user: User = {
  name: "Alice",
  age: "25",
};

console.log(user.name); // Alice
\`\`\`
`,
    },
    {
      id: 102107,
      question: "Что такое Exclude<T, U> и Extract<T, U>?",
      answer: `
**Exclude<T, U>:**
- Исключает из типа \`T\` все типы, которые совместимы с типом \`U\`.

**Пример Exclude<T, U>:**
\`\`\`typescript
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
\`\`\`

**Extract<T, U>:**
- Извлекает из типа \`T\` все типы, которые совместимы с типом \`U\`.

**Пример Extract<T, U>:**
\`\`\`typescript
type T0 = Extract<"a" | "b" | "c", "a" | "b">; // "a" | "b"
\`\`\`
`,
    },
  ],
};
