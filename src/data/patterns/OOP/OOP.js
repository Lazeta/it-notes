export const OOP = {
  id: 192,
  title: "OOP (Объектно-ориентированное программирование)",
  children: [
    {
      title:
        "Объектно-ориентированное программирование (ООП) — это парадигма программирования, основанная на концепции 'объектов', которые могут содержать данные и код. Основные принципы ООП:",
      type: "text",
      description: `
          <h3>1. Инкапсуляция</h3>
          <p><strong>Инкапсуляция</strong> — это механизм сокрытия внутреннего состояния объекта и предоставления контролируемого доступа к нему через методы.</p>
          <ul>
            <li>Позволяет защитить данные от неправильного использования.</li>
            <li>Модификаторы доступа: <code>private</code>, <code>protected</code>, <code>public</code>.</li>
          </ul>
          <p>Пример:</p>
          `,
      code: `
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // 150
      `,
    },
    {
      title: "2. Наследование",
      type: "text",
      description: `
          <p><strong>Наследование</strong> — это механизм, позволяющий создавать новые классы на основе существующих. Новый класс (потомок) наследует свойства и методы родительского класса.</p>
          <ul>
            <li>Позволяет повторно использовать код.</li>
            <li>Может привести к проблемам с 'жёсткой связью' (tight coupling).</li>
          </ul>
          <p>Пример:</p>
          `,
      code: `
class Animal {
  speak(): void {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  speak(): void {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.speak(); // Woof!
      `,
    },
    {
      title: "3. Полиморфизм",
      type: "text",
      description: `
          <p><strong>Полиморфизм</strong> — это способность объектов разных классов обрабатывать данные через одинаковый интерфейс.</p>
          <ul>
            <li>Достигается через переопределение методов или использование интерфейсов.</li>
            <li>Увеличивает гибкость кода.</li>
          </ul>
          <p>Пример:</p>
          `,
      code: `
interface Shape {
  area(): number;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Square implements Shape {
  side: number;

  constructor(side: number) {
    this.side = side;
  }

  area(): number {
    return this.side ** 2;
  }
}

function printArea(shape: Shape): void {
  console.log(shape.area());
}

const circle = new Circle(5);
const square = new Square(4);

printArea(circle); // 78.54
printArea(square); // 16
      `,
    },
    {
      title: "4. Абстракция",
      type: "text",
      description: `
          <p><strong>Абстракция</strong> — это процесс упрощения сложных систем путем определения общих интерфейсов и скрытия деталей реализации.</p>
          <ul>
            <li>Позволяет сосредоточиться на взаимодействии между объектами.</li>
            <li>Реализуется через абстрактные классы или интерфейсы.</li>
          </ul>
          <p>Пример:</p>
          `,
      code: `
abstract class Vehicle {
  abstract move(): void;
}

class Car extends Vehicle {
  move(): void {
    console.log("Driving...");
  }
}

class Plane extends Vehicle {
  move(): void {
    console.log("Flying...");
  }
}

const car = new Car();
car.move(); // Driving...
      `,
    },
    {
      title: "Композиция vs Наследование",
      type: "text",
      description: `
          <p><strong>Композиция</strong> — это подход, при котором объекты строятся из других объектов вместо наследования. Это более гибкий и безопасный способ по сравнению с наследованием.</p>
          <ul>
            <li>Наследование создаёт 'жёсткую связь' между классами.</li>
            <li>Композиция позволяет комбинировать поведение динамически.</li>
          </ul>
          <p>Пример:</p>
          `,
      code: `
class Engine {
  start(): void {
    console.log("Engine started");
  }
}

class Car {
  private engine: Engine;

  constructor() {
    this.engine = new Engine();
  }

  start(): void {
    this.engine.start();
    console.log("Car started");
  }
}

const car = new Car();
car.start();
// Engine started
// Car started
      `,
    },
    {
      title: "Частые вопросы на собеседованиях",
      type: "text",
      description: `
          <ul>
            <li><strong>Какие проблемы могут возникнуть при использовании наследования?</strong> — Жёсткая связь между классами, сложность поддержки кода.</li>
            <li><strong>Как композиция может заменить наследование?</strong> — Композиция позволяет комбинировать поведение динамически, что делает код более гибким.</li>
            <li><strong>Зачем нужны модификаторы доступа?</strong> — Они защищают внутренние данные объекта и предотвращают их неправильное использование.</li>
          </ul>
          `,
    },
  ],
};
