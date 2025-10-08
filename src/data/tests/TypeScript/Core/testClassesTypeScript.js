export const testClassesTypeScript = {
  id: 102000,
  title: "Классы",
  questions: [
    {
      id: 102001,
      question: "Что такое классы?",
      answer: `
**Классы в TypeScript (и JavaScript):**
- Это шаблоны для создания объектов. Они позволяют определять структуру и поведение объектов.
- Классы поддерживают принципы объектно-ориентированного программирования (ООП), такие как инкапсуляция, наследование и полиморфизм.

**Основные компоненты класса:**
1. **Свойства:** Хранят данные объекта.
2. **Методы:** Определяют поведение объекта.
3. **Конструктор:** Инициализирует объект при его создании.
4. **Модификаторы доступа:** \`public\`, \`private\`, \`protected\` — определяют видимость свойств и методов.

**Пример:**
\`\`\`typescript
class Person {
  // Свойства
  public name: string;
  private age: number;

  // Конструктор
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Метод
  greet(): void {
    console.log(\`Hello, my name is \${this.name} and I am \${this.age} years old.\`);
  }
}

const person = new Person("Alice", 25);
person.greet(); // Hello, my name is Alice and I am 25 years old.
\`\`\`
`,
    },
    {
      id: 102002,
      question: "Как использовать модификаторы доступа в классах?",
      answer: `
**Модификаторы доступа:**
- Управляют видимостью свойств и методов класса.

1. **public (по умолчанию):**
   - Доступен везде.
   \`\`\`typescript
   class Example {
     public value: number = 42;
   }
   \`\`\`

2. **private:**
   - Доступен только внутри класса.
   \`\`\`typescript
   class Example {
     private secret: string = "hidden";
   }
   \`\`\`

3. **protected:**
   - Доступен внутри класса и его потомков.
   \`\`\`typescript
   class Parent {
     protected info: string = "shared";
   }

   class Child extends Parent {
     getInfo(): string {
       return this.info;
     }
   }
   \`\`\`
`,
    },
    {
      id: 102003,
      question: "Что такое наследование в классах?",
      answer: `
**Наследование:**
- Позволяет создавать новый класс на основе существующего, заимствуя его свойства и методы.
- Используется ключевое слово \`extends\`.

**Пример:**
\`\`\`typescript
class Animal {
  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.move(); // Moving...
dog.bark(); // Woof!
\`\`\`
`,
    },
    {
      id: 102004,
      question: "Что такое абстрактные классы?",
      answer: `
**Абстрактные классы:**
- Это классы, которые не могут быть инстанциированы напрямую.
- Они предназначены для использования в качестве базовых классов.
- Могут содержать абстрактные методы (без реализации).

**Пример:**
\`\`\`typescript
abstract class Shape {
  abstract area(): number;

  describe(): void {
    console.log("This is a shape.");
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.area()); // 78.54
circle.describe(); // This is a shape.
\`\`\`
`,
    },
    {
      id: 102005,
      question: "Что такое интерфейсы для классов?",
      answer: `
**Интерфейсы для классов:**
- Определяют структуру класса без реализации.
- Класс может реализовать один или несколько интерфейсов с помощью ключевого слова \`implements\`.

**Пример:**
\`\`\`typescript
interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string): void {
    console.log(\`\${phrase} \${this.name}\`);
  }
}

const user = new Person("Alice");
user.greet("Hello"); // Hello Alice
\`\`\`
`,
    },
    {
      id: 102006,
      question: "Что такое статические свойства и методы в классах?",
      answer: `
**Статические свойства и методы:**
- Принадлежат самому классу, а не его экземплярам.
- Используются с ключевым словом \`static\`.

**Пример:**
\`\`\`typescript
class MathUtils {
  static PI: number = 3.14;

  static calculateCircumference(radius: number): number {
    return 2 * MathUtils.PI * radius;
  }
}

console.log(MathUtils.PI); // 3.14
console.log(MathUtils.calculateCircumference(5)); // 31.4
\`\`\`
`,
    },
    {
      id: 102007,
      question: "Что такое конструктор в классах?",
      answer: `
**Конструктор:**
- Это специальный метод, который вызывается при создании нового экземпляра класса.
- Используется для инициализации свойств объекта.

**Пример:**
\`\`\`typescript
class Car {
  model: string;
  year: number;

  constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }

  displayInfo(): void {
    console.log(\`Model: \${this.model}, Year: \${this.year}\`);
  }
}

const car = new Car("Toyota", 2020);
car.displayInfo(); // Model: Toyota, Year: 2020
\`\`\`
`,
    },
    {
      id: 102008,
      question: "Что такое геттеры и сеттеры в классах?",
      answer: `
**Геттеры и сеттеры:**
- Геттеры (\`get\`) позволяют получать значение свойства.
- Сеттеры (\`set\`) позволяют изменять значение свойства.

**Пример:**
\`\`\`typescript
class User {
  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length > 0) {
      this._name = value;
    } else {
      console.error("Name cannot be empty");
    }
  }
}

const user = new User();
user.name = "Alice";
console.log(user.name); // Alice

user.name = ""; // Error: Name cannot be empty
\`\`\`
`,
    },
    {
      id: 102009,
      question: "Что такое полиморфизм в классах?",
      answer: `
**Полиморфизм:**
- Это способность объектов с одинаковым интерфейсом иметь разную реализацию.
- Обычно достигается через наследование и переопределение методов.

**Пример:**
\`\`\`typescript
class Animal {
  speak(): void {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak(): void {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak(): void {
    console.log("Cat meows");
  }
}

const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach((animal) => animal.speak());
// Dog barks
// Cat meows
\`\`\`
`,
    },
  ],
};
