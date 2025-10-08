export const testCommonPrinciples = {
  id: 101850,
  title: "Общие принципы",
  questions: [
    {
      id: 101851,
      question: "Что такое DRY и почему это важно?",
      answer: `
      **DRY (Don't Repeat Yourself):**
      - Это принцип разработки, который гласит, что каждая часть знаний или логики должна иметь единственное, однозначное представление в системе.
      - Цель — избежать дублирования кода, чтобы упростить поддержку и уменьшить количество ошибок.

      **Пример:**
      - Вместо копирования одного и того же кода в разных местах программы, вынесите его в функцию или модуль.
      \`\`\`javascript
      // Плохо (дублирование):
      function calculateArea1(radius) {
        return Math.PI * radius * radius;
      }
      function calculateArea2(radius) {
        return Math.PI * radius * radius;
      }

      // Хорошо (DRY):
      function calculateArea(radius) {
        return Math.PI * radius * radius;
      }
      \`\`\`
      `,
    },
    {
      id: 101852,
      question: "Что такое KISS и как он применяется?",
      answer: `
      **KISS (Keep It Simple, Stupid):**
      - Принцип, который рекомендует делать системы максимально простыми для понимания и использования.
      - Сложные решения увеличивают вероятность ошибок и затрудняют поддержку.

      **Пример:**
      - Вместо сложной цепочки условий используйте более простые структуры данных.
      \`\`\`javascript
      // Плохо:
      if (type === 'A') {
        doSomething();
      } else if (type === 'B') {
        doSomethingElse();
      }

      // Хорошо:
      const actions = {
        A: doSomething,
        B: doSomethingElse,
      };
      actions[type]?.();
      \`\`\`
      `,
    },
    {
      id: 101853,
      question: "Что такое YAGNI и зачем он нужен?",
      answer: `
      **YAGNI (You Aren't Gonna Need It):**
      - Принцип, который говорит: не добавляйте функциональность, пока она действительно не нужна.
      - Это помогает избежать переработки и усложнения системы.

      **Пример:**
      - Не реализуйте функции "на будущее", если они не требуются сейчас.
      \`\`\`javascript
      // Плохо:
      function calculateArea(radius) {
        // Сейчас не нужно, но "вдруг пригодится":
        if (radius < 0) throw new Error("Radius cannot be negative");
        return Math.PI * radius * radius;
      }

      // Хорошо:
      function calculateArea(radius) {
        return Math.PI * radius * radius;
      }
      \`\`\`
      `,
    },
    {
      id: 101854,
      question: "Что такое SOLID и какие принципы в него входят?",
      answer: `
      **SOLID:**
      - Это набор принципов объектно-ориентированного программирования, которые помогают создавать гибкие и поддерживаемые системы.

      **Принципы:**
      1. **S**ingle Responsibility Principle (SRP): Каждый класс должен иметь одну ответственность.
      2. **O**pen/Closed Principle (OCP): Классы должны быть открыты для расширения, но закрыты для изменения.
      3. **L**iskov Substitution Principle (LSP): Подклассы должны заменять свои базовые классы без изменения поведения.
      4. **I**nterface Segregation Principle (ISP): Лучше много маленьких интерфейсов, чем один большой.
      5. **D**ependency Inversion Principle (DIP): Зависимости должны строиться на абстракциях, а не на конкретных реализациях.

      **Пример SRP:**
      \`\`\`javascript
      // Плохо:
      class User {
        saveToDatabase() { /* ... */ }
        sendEmail() { /* ... */ }
      }

      // Хорошо:
      class UserRepository {
        saveToDatabase() { /* ... */ }
      }
      class EmailService {
        sendEmail() { /* ... */ }
      }
      \`\`\`
      `,
    },
    {
      id: 101855,
      question: "Что такое принцип единственной ответственности (SRP)?",
      answer: `
      **Single Responsibility Principle (SRP):**
      - Каждый модуль или класс должен выполнять только одну задачу.
      - Это упрощает тестирование, поддержку и переиспользование кода.

      **Пример:**
      \`\`\`javascript
      // Плохо:
      class Report {
        generateReport() { /* ... */ }
        saveToFileSystem() { /* ... */ }
      }

      // Хорошо:
      class ReportGenerator {
        generateReport() { /* ... */ }
      }
      class FileSaver {
        saveToFileSystem() { /* ... */ }
      }
      \`\`\`
      `,
    },
    {
      id: 101856,
      question: "Что такое принцип открытости/закрытости (OCP)?",
      answer: `
      **Open/Closed Principle (OCP):**
      - Классы должны быть открыты для расширения, но закрыты для изменения.
      - Это позволяет добавлять новую функциональность, не изменяя существующий код.

      **Пример:**
      \`\`\`javascript
      // Плохо:
      class Rectangle {
        draw() { console.log('Drawing rectangle'); }
      }
      class Circle {
        draw() { console.log('Drawing circle'); }
      }
      function drawShapes(shapes) {
        shapes.forEach(shape => {
          if (shape.type === 'rectangle') shape.draw();
          else if (shape.type === 'circle') shape.draw();
        });
      }

      // Хорошо:
      class Shape {
        draw() { throw new Error('Method not implemented'); }
      }
      class Rectangle extends Shape {
        draw() { console.log('Drawing rectangle'); }
      }
      class Circle extends Shape {
        draw() { console.log('Drawing circle'); }
      }
      function drawShapes(shapes) {
        shapes.forEach(shape => shape.draw());
      }
      \`\`\`
      `,
    },
    {
      id: 101857,
      question: "Что такое принцип подстановки Барбары Лисков (LSP)?",
      answer: `
      **Liskov Substitution Principle (LSP):**
      - Объекты базового класса должны быть заменяемы объектами подкласса без изменения корректности программы.
      - Это гарантирует, что наследование используется правильно.

      **Пример:**
      \`\`\`javascript
      class Bird {
        fly() { console.log('Flying'); }
      }
      class Penguin extends Bird {
        fly() { throw new Error('Penguins can\'t fly'); }
      }

      // Нарушение LSP:
      const bird = new Penguin();
      bird.fly(); // Ошибка

      // Решение:
      class Bird {}
      class FlyingBird extends Bird {
        fly() { console.log('Flying'); }
      }
      class Penguin extends Bird {}
      \`\`\`
      `,
    },
    {
      id: 101858,
      question: "Что такое принцип разделения интерфейса (ISP)?",
      answer: `
      **Interface Segregation Principle (ISP):**
      - Лучше создавать маленькие специализированные интерфейсы, чем один большой универсальный.
      - Это упрощает использование и уменьшает зависимость между компонентами.

      **Пример:**
      \`\`\`javascript
      // Плохо:
      class Machine {
        print() { /* ... */ }
        scan() { /* ... */ }
      }

      // Хорошо:
      class Printer {
        print() { /* ... */ }
      }
      class Scanner {
        scan() { /* ... */ }
      }
      \`\`\`
      `,
    },
    {
      id: 101859,
      question: "Что такое принцип инверсии зависимостей (DIP)?",
      answer: `
      **Dependency Inversion Principle (DIP):**
      - Модули высокого уровня не должны зависеть от модулей низкого уровня. Оба должны зависеть от абстракций.
      - Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.

      **Пример:**
      \`\`\`javascript
      // Плохо:
      class LightBulb {
        turnOn() { console.log('Light is on'); }
      }
      class Switch {
        constructor() {
          this.bulb = new LightBulb();
        }
        operate() { this.bulb.turnOn(); }
      }

      // Хорошо:
      class SwitchableDevice {
        turnOn() { throw new Error('Method not implemented'); }
      }
      class LightBulb extends SwitchableDevice {
        turnOn() { console.log('Light is on'); }
      }
      class Switch {
        constructor(device) {
          this.device = device;
        }
        operate() { this.device.turnOn(); }
      }
      \`\`\`
      `,
    },
  ],
};
