export const testSOLID = {
  id: 100375,
  title: "S.O.L.I.D.",
  questions: [
    {
      id: 100376,
      question: "Что такое S.O.L.I.D.?",
      answer: `
      **S.O.L.I.D.** — это аббревиатура, представляющая пять основных принципов объектно-ориентированного проектирования:
      1. **S**ingle Responsibility Principle (Принцип единственной ответственности).
      2. **O**pen/Closed Principle (Принцип открытости/закрытости).
      3. **L**iskov Substitution Principle (Принцип подстановки Барбары Лисков).
      4. **I**nterface Segregation Principle (Принцип разделения интерфейса).
      5. **D**ependency Inversion Principle (Принцип инверсии зависимостей).

      Эти принципы помогают создавать гибкий, поддерживаемый и расширяемый код.
      `,
    },
    {
      id: 100377,
      question: "Что такое Single Responsibility Principle (SRP)?",
      answer: `
      **Принцип единственной ответственности (SRP):**
      - Каждый класс или модуль должен иметь только одну причину для изменения.
      - Другими словами, каждый класс должен решать только одну задачу.

      **Пример:**
      \`\`\`javascript
      // Плохо: Класс выполняет две задачи
      class User {
        constructor(name, email) {
          this.name = name;
          this.email = email;
        }

        saveToDatabase() {
          console.log('Сохранение пользователя в базу данных...');
        }

        sendEmail(message) {
          console.log(\`Отправка письма на \${this.email}: \${message}\`);
        }
      }

      // Хорошо: Разделение ответственностей
      class User {
        constructor(name, email) {
          this.name = name;
          this.email = email;
        }
      }

      class UserRepository {
        save(user) {
          console.log('Сохранение пользователя в базу данных...');
        }
      }

      class EmailService {
        send(user, message) {
          console.log(\`Отправка письма на \${user.email}: \${message}\`);
        }
      }
      \`\`\`
      `,
    },
    {
      id: 100378,
      question: "Что такое Open/Closed Principle (OCP)?",
      answer: `
      **Принцип открытости/закрытости (OCP):**
      - Программные сущности (классы, модули, функции) должны быть открыты для расширения, но закрыты для изменения.
      - Это означает, что можно добавлять новую функциональность без изменения существующего кода.

      **Пример:**
      \`\`\`javascript
      // Плохо: Изменение существующего класса
      class Rectangle {
        draw() {
          console.log('Рисуем прямоугольник');
        }
      }

      class Circle {
        draw() {
          console.log('Рисуем круг');
        }
      }

      class ShapeDrawer {
        drawShape(shape) {
          if (shape instanceof Rectangle) {
            shape.draw();
          } else if (shape instanceof Circle) {
            shape.draw();
          }
        }
      }

      // Хорошо: Использование полиморфизма
      class Shape {
        draw() {
          throw new Error('Метод draw должен быть переопределен');
        }
      }

      class Rectangle extends Shape {
        draw() {
          console.log('Рисуем прямоугольник');
        }
      }

      class Circle extends Shape {
        draw() {
          console.log('Рисуем круг');
        }
      }

      class ShapeDrawer {
        drawShape(shape) {
          shape.draw();
        }
      }
      \`\`\`
      `,
    },
    {
      id: 100379,
      question: "Что такое Liskov Substitution Principle (LSP)?",
      answer: `
      **Принцип подстановки Барбары Лисков (LSP):**
      - Объекты базового класса должны быть заменяемыми объектами подкласса без изменения корректности программы.
      - Подклассы должны расширять, а не изменять поведение базового класса.

      **Пример:**
      \`\`\`javascript
      // Плохо: Нарушение LSP
      class Bird {
        fly() {
          console.log('Птица летит');
        }
      }

      class Penguin extends Bird {
        fly() {
          throw new Error('Пингвины не умеют летать');
        }
      }

      // Хорошо: Устранение нарушения
      class FlyingBird {
        fly() {
          console.log('Птица летит');
        }
      }

      class Penguin {
        swim() {
          console.log('Пингвин плывет');
        }
      }
      \`\`\`
      `,
    },
    {
      id: 100380,
      question: "Что такое Interface Segregation Principle (ISP)?",
      answer: `
      **Принцип разделения интерфейса (ISP):**
      - Клиенты не должны зависеть от интерфейсов, которые они не используют.
      - Лучше иметь несколько специализированных интерфейсов, чем один общий.

      **Пример:**
      \`\`\`javascript
      // Плохо: Один большой интерфейс
      class Worker {
        work() {
          console.log('Работаю');
        }

        eat() {
          console.log('Ем');
        }
      }

      // Хорошо: Разделение интерфейсов
      class Workable {
        work() {
          console.log('Работаю');
        }
      }

      class Eatable {
        eat() {
          console.log('Ем');
        }
      }

      class HumanWorker extends Workable {
        eat() {
          console.log('Ем');
        }
      }

      class RobotWorker extends Workable {}
      \`\`\`
      `,
    },
    {
      id: 100381,
      question: "Что такое Dependency Inversion Principle (DIP)?",
      answer: `
      **Принцип инверсии зависимостей (DIP):**
      - Модули верхнего уровня не должны зависеть от модулей нижнего уровня. Оба должны зависеть от абстракций.
      - Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.

      **Пример:**
      \`\`\`javascript
      // Плохо: Зависимость от конкретной реализации
      class LightBulb {
        turnOn() {
          console.log('Лампочка включена');
        }
      }

      class Switch {
        constructor(bulb) {
          this.bulb = bulb;
        }

        operate() {
          this.bulb.turnOn();
        }
      }

      // Хорошо: Использование абстракции
      class SwitchableDevice {
        turnOn() {
          throw new Error('Метод turnOn должен быть переопределен');
        }
      }

      class LightBulb extends SwitchableDevice {
        turnOn() {
          console.log('Лампочка включена');
        }
      }

      class Fan extends SwitchableDevice {
        turnOn() {
          console.log('Вентилятор включен');
        }
      }

      class Switch {
        constructor(device) {
          this.device = device;
        }

        operate() {
          this.device.turnOn();
        }
      }
      \`\`\`
      `,
    },
    {
      id: 100382,
      question: "Почему важно следовать принципам S.O.L.I.D.?",
      answer: `
      **Важность S.O.L.I.D.:**
      1. **Гибкость:** Код легче адаптировать к изменениям.
      2. **Поддерживаемость:** Упрощается понимание и модификация кода.
      3. **Масштабируемость:** Легко добавлять новые функции без нарушения существующих.
      4. **Тестируемость:** Код становится более изолированным и тестируемым.
      5. **Уменьшение ошибок:** Четкое разделение ответственностей снижает риск ошибок.
      `,
    },
  ],
};
