export const testUnionTypeIntersection = {
  id: 101925,
  title: "Union type & Intersection type",
  questions: [
    {
      id: 101926,
      question: "Что такое Union type?",
      answer: `
**Union Type (объединение типов):**
- Позволяет переменной или параметру иметь один из нескольких указанных типов.
- Обозначается с помощью оператора \`|\` (pipe).

**Пример:**
\`\`\`typescript
let value: string | number;
value = "Hello"; // OK
value = 42; // OK
value = true; // Ошибка: тип boolean не совместим с string | number
\`\`\`

**Использование в функциях:**
\`\`\`typescript
function printId(id: string | number): void {
  console.log(\`ID: $\{id}\`);
}

printId(101); // ID: 101
printId("202"); // ID: 202
\`\`\`

**Особенности:**
- При работе с union types необходимо учитывать, что доступны только общие методы и свойства всех типов.
- Для сужения типа можно использовать проверки (\`typeof\`, \`instanceof\`, пользовательские проверки).

**Пример сужения типа:**
\`\`\`typescript
function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log("String:", value.toUpperCase());
  } else {
    console.log("Number:", value.toFixed(2));
  }
}
\`\`\`
`,
    },
    {
      id: 101927,
      question: "Что такое Intersection type?",
      answer: `
**Intersection Type (пересечение типов):**
- Позволяет комбинировать несколько типов в один, объединяя все их свойства.
- Обозначается с помощью оператора \`&\`.

**Пример:**
\`\`\`typescript
type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

const person: Person = { name: "Alice", age: 30 }; // OK
console.log(person); // { name: "Alice", age: 30 }

// Ошибка: Отсутствует одно из свойств
const invalidPerson: Person = { name: "Bob" }; // Error: Property 'age' is missing
\`\`\`

**Использование в сложных типах:**
\`\`\`typescript
type HasId = { id: number };
type HasName = { name: string };

type Entity = HasId & HasName;

const entity: Entity = { id: 1, name: "Entity" };
console.log(entity); // { id: 1, name: "Entity" }
\`\`\`

**Особенности:**
- Intersection types полезны для создания сложных типов, например, при работе с интерфейсами или объектами.
- Если пересекаемые типы имеют конфликтующие свойства (например, разные типы одного и того же ключа), результат будет некорректным.

**Пример конфликта типов:**
\`\`\`typescript
type A = { prop: string };
type B = { prop: number };

type Conflict = A & B; // Невозможно объединить string и number
const conflict: Conflict = { prop: "test" }; // Error: Type 'string' is not assignable to type 'never'
\`\`\`
`,
    },
    {
      id: 101928,
      question: "Как использовать Union type с массивами?",
      answer: `
**Union type с массивами:**
- Позволяет определить массив, который может содержать элементы разных типов.

**Пример:**
\`\`\`typescript
const values: (string | number)[] = ["hello", 42, "world", 100];
console.log(values); // ["hello", 42, "world", 100]
\`\`\`

**Использование с функциями:**
\`\`\`typescript
function processValues(values: (string | number)[]): void {
  values.forEach((value) => {
    if (typeof value === "string") {
      console.log("String:", value.toUpperCase());
    } else {
      console.log("Number:", value.toFixed(2));
    }
  });
}

processValues(["test", 123, "example"]); 
// String: TEST
// Number: 123.00
// String: EXAMPLE
\`\`\`
`,
    },
    {
      id: 101929,
      question: "Можно ли комбинировать Union и Intersection types?",
      answer: `
**Да, можно:**
- Union и Intersection types могут быть комбинированы для создания сложных типов.

**Пример:**
\`\`\`typescript
type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type Combined = (A & B) | C;

const obj1: Combined = { a: "test", b: 42 }; // OK
const obj2: Combined = { c: true }; // OK

// Ошибка: Недостаточно свойств
const invalidObj: Combined = { a: "test" }; // Error: Property 'b' is missing
\`\`\`
`,
    },
    {
      id: 101930,
      question: "Как использовать type guards с Union types?",
      answer: `
**Type Guards:**
- Это техника, которая позволяет сузить тип до одного из вариантов union type.
- Используются условия (\`typeof\`, \`instanceof\`, пользовательские проверки).

**Пример:**
\`\`\`typescript
function isString(value: string | number): value is string {
  return typeof value === "string";
}

function process(value: string | number): void {
  if (isString(value)) {
    console.log("String:", value.toUpperCase());
  } else {
    console.log("Number:", value.toFixed(2));
  }
}

process("hello"); // String: HELLO
process(42); // Number: 42.00
\`\`\`
`,
    },
    {
      id: 101931,
      question: "Как работают Literal Types с Union types?",
      answer: `
**Literal Types:**
- Позволяют ограничить значения переменной конкретными литералами.
- Часто используются вместе с union types для создания ограниченных наборов значений.

**Пример:**
\`\`\`typescript
type Status = "success" | "error" | "pending";

function handleStatus(status: Status): void {
  switch (status) {
    case "success":
      console.log("Operation successful");
      break;
    case "error":
      console.log("An error occurred");
      break;
    case "pending":
      console.log("Operation is pending");
      break;
  }
}

handleStatus("success"); // Operation successful
handleStatus("invalid"); // Error: Argument of type '"invalid"' is not assignable to parameter of type 'Status'
\`\`\`
`,
    },
    {
      id: 101932,
      question:
        "Как использовать Intersection type для расширения интерфейсов?",
      answer: `
**Расширение интерфейсов:**
- Intersection type позволяет комбинировать интерфейсы для создания нового типа.

**Пример:**
\`\`\`typescript
interface User {
  id: number;
  name: string;
}

interface Timestamp {
  createdAt: Date;
}

type UserWithTimestamp = User & Timestamp;

const user: UserWithTimestamp = {
  id: 1,
  name: "Alice",
  createdAt: new Date(),
};

console.log(user);
// { id: 1, name: "Alice", createdAt: [Date] }
\`\`\`
`,
    },
  ],
};
