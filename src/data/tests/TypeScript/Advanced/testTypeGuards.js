export const testTypeGuards = {
  id: 102050,
  title: "Type Guards",
  questions: [
    {
      id: 102051,
      question: "Что такое type guards?",
      answer: `
**Type Guards (Защитники типов):**
- Это техника в TypeScript, которая позволяет сузить тип переменной внутри условного блока.
- Type Guards помогают TypeScript определить, какой именно тип данных используется в конкретный момент.

**Основные типы Type Guards:**
1. **typeof:** Проверяет примитивные типы (например, \`string\`, \`number\`, \`boolean\`).
   \`\`\`typescript
   function printId(id: string | number): void {
     if (typeof id === "string") {
       console.log(\`ID as string: \${id.toUpperCase()}\`);
     } else {
       console.log(\`ID as number: \${id.toFixed(2)}\`);
     }
   }
   \`\`\`

2. **instanceof:** Проверяет, принадлежит ли объект к определенному классу.
   \`\`\`typescript
   class Car {
     drive() {
       console.log("Driving a car");
     }
   }

   class Bike {
     ride() {
       console.log("Riding a bike");
     }
   }

   function move(vehicle: Car | Bike): void {
     if (vehicle instanceof Car) {
       vehicle.drive();
     } else {
       vehicle.ride();
     }
   }
   \`\`\`

3. **in:** Проверяет наличие свойства в объекте.
   \`\`\`typescript
   interface Bird {
     fly: () => void;
   }

   interface Fish {
     swim: () => void;
   }

   function move(animal: Bird | Fish): void {
     if ("fly" in animal) {
       animal.fly();
     } else {
       animal.swim();
     }
   }
   \`\`\`

4. **Пользовательские Type Guards:** Функции, которые возвращают \`arg is Type\`.
   \`\`\`typescript
   function isString(value: any): value is string {
     return typeof value === "string";
   }

   function processInput(input: string | number): void {
     if (isString(input)) {
       console.log(\`Input is a string: \${input.toUpperCase()}\`);
     } else {
       console.log(\`Input is a number: \${input.toFixed(2)}\`);
     }
   }
   \`\`\`
`,
    },
    {
      id: 102052,
      question: "Как работает оператор typeof в TypeScript?",
      answer: `
**Оператор typeof:**
- Используется для проверки примитивных типов данных.
- Возвращает строку с типом значения.

**Поддерживаемые типы:**
- \`"string"\`
- \`"number"\`
- \`"boolean"\`
- \`"undefined"\`
- \`"object"\`
- \`"function"\`

**Пример:**
\`\`\`typescript
function printType(value: string | number): void {
  if (typeof value === "string") {
    console.log(\`Значение является строкой: \${value.toUpperCase()}\`);
  } else {
    console.log(\`Значение является числом: \${value.toFixed(2)}\`);
  }
}

printType("Hello"); // Значение является строкой: HELLO
printType(42); // Значение является числом: 42.00
\`\`\`
`,
    },
    {
      id: 102053,
      question: "Как работает оператор instanceof в TypeScript?",
      answer: `
**Оператор instanceof:**
- Проверяет, принадлежит ли объект к определенному классу или конструктору.
- Используется для сложных типов данных.

**Пример:**
\`\`\`typescript
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Animal): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else if (animal instanceof Cat) {
    animal.meow();
  } else {
    console.log("Unknown animal");
  }
}

const dog = new Dog("Rex");
const cat = new Cat("Milo");

makeSound(dog); // Woof!
makeSound(cat); // Meow!
\`\`\`
`,
    },
    {
      id: 102054,
      question: "Как использовать оператор in для проверки типа?",
      answer: `
**Оператор in:**
- Проверяет, существует ли свойство в объекте.
- Полезен для различения объектов с разными интерфейсами.

**Пример:**
\`\`\`typescript
interface Bird {
  fly: () => void;
}

interface Fish {
  swim: () => void;
}

function move(animal: Bird | Fish): void {
  if ("fly" in animal) {
    animal.fly();
  } else {
    animal.swim();
  }
}

const bird: Bird = { fly: () => console.log("Flying!") };
const fish: Fish = { swim: () => console.log("Swimming!") };

move(bird); // Flying!
move(fish); // Swimming!
\`\`\`
`,
    },
    {
      id: 102055,
      question: "Что такое пользовательские Type Guards?",
      answer: `
**Пользовательские Type Guards:**
- Это функции, которые возвращают булево значение и используют сигнатуру \`arg is Type\`.
- TypeScript использует эти функции для сужения типов.

**Пример:**
\`\`\`typescript
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

function isCircle(shape: Circle | Square): shape is Circle {
  return (shape as Circle).radius !== undefined;
}

function calculateArea(shape: Circle | Square): number {
  if (isCircle(shape)) {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.side ** 2;
  }
}

const circle: Circle = { kind: "circle", radius: 5 };
const square: Square = { kind: "square", side: 4 };

console.log(calculateArea(circle)); // 78.54
console.log(calculateArea(square)); // 16
\`\`\`
`,
    },
  ],
};
