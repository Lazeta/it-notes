export const Classes = {
  id: 219,
  title: "Classes (Классы)",
  children: [
    {
      title: "Что такое классы в JavaScript?",
      type: "text",
      description: `
        <p><strong>Классы</strong> в JavaScript — это синтаксический сахар над прототипным наследованием. Они позволяют создавать объекты с определенными свойствами и методами, обеспечивая более удобный и понятный способ организации кода.</p>
        <p>Классы появились в ECMAScript 2015 (ES6) и предоставляют более читаемый синтаксис для работы с объектно-ориентированным программированием (ООП).</p>
      `,
    },
    {
      title: "Создание класса",
      type: "text",
      description: `
        <p><strong>Пример создания класса:</strong></p>
      `,
      code: `
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(\`Hello, my name is \${this.name} and I am \${this.age} years old.\`);
  }
}

const john = new Person('John', 30);
john.greet(); // Hello, my name is John and I am 30 years old.
      `,
    },
    {
      title: "Методы класса",
      type: "text",
      description: `
        <p>Классы могут содержать различные методы:</p>
        <ul>
          <li><strong>constructor:</strong> Специальный метод, который вызывается при создании нового экземпляра класса. Используется для инициализации свойств объекта.</li>
          <li><strong>Обычные методы:</strong> Методы, которые можно вызывать у экземпляра класса.</li>
          <li><strong>Статические методы:</strong> Методы, которые принадлежат самому классу, а не его экземплярам.</li>
        </ul>
      `,
      code: `
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 3)); // 8
      `,
    },
    {
      title: "Наследование",
      type: "text",
      description: `
        <p><strong>Наследование</strong> позволяет создавать новые классы на основе существующих. Новый класс (подкласс) наследует свойства и методы родительского класса.</p>
      `,
      code: `
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(\`\${this.name} makes a noise.\`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(\`\${this.name} barks.\`);
  }
}

const dog = new Dog('Rex');
dog.speak(); // Rex barks.
      `,
    },
    {
      title: "Геттеры и сеттеры",
      type: "text",
      description: `
        <p><strong>Геттеры и сеттеры</strong> позволяют определять поведение при чтении и записи свойств объекта. Они используются для инкапсуляции данных и управления доступом к ним.</p>
      `,
      code: `
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get area() {
    return this._width * this._height;
  }

  set dimensions({ width, height }) {
    this._width = width;
    this._height = height;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // 50

rect.dimensions = { width: 7, height: 3 };
console.log(rect.area); // 21
      `,
    },
    {
      title: "Приватные поля",
      type: "text",
      description: `
        <p>С помощью приватных полей (начинающихся с #) можно скрыть данные внутри класса, чтобы они были недоступны извне.</p>
      `,
      code: `
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log('Insufficient funds');
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
account.withdraw(50);
console.log(account.getBalance()); // 50
console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
      `,
    },
    {
      title: "Преимущества использования классов",
      type: "text",
      description: `
        <ul>
          <li><strong>Читаемость:</strong> Классы делают код более понятным и организованным.</li>
          <li><strong>Инкапсуляция:</strong> Позволяют скрывать внутреннюю реализацию и предоставлять только необходимый интерфейс.</li>
          <li><strong>Наследование:</strong> Упрощают повторное использование кода через наследование.</li>
          <li><strong>Поддержка ООП:</strong> Обеспечивают удобную работу с объектно-ориентированными концепциями.</li>
        </ul>
      `,
    },
    {
      title: "Недостатки использования классов",
      type: "text",
      description: `
        <ul>
          <li><strong>Сложность:</strong> Для начинающих разработчиков может быть сложно понять принципы работы с классами и наследованием.</li>
          <li><strong>Перегрузка:</strong> Избыточное использование классов может усложнить код и сделать его менее производительным.</li>
          <li><strong>Проблемы с памятью:</strong> Неправильное использование наследования может привести к утечкам памяти или излишнему потреблению ресурсов.</li>
        </ul>
      `,
    },
    {
      title: "Рекомендации по использованию",
      type: "text",
      description: `
        <p>Когда использовать классы:</p>
        <ul>
          <li><strong>Когда нужна структуризация кода:</strong> Например, для создания сложных объектов с четко определенными методами и свойствами.</li>
          <li><strong>Для инкапсуляции данных:</strong> Когда нужно скрыть внутренние детали реализации.</li>
          <li><strong>Для наследования:</strong> Когда требуется повторное использование кода через наследование.</li>
        </ul>
        <p>Когда НЕ использовать классы:</p>
        <ul>
          <li><strong>Для простых задач:</strong> Если задача решается с помощью функций или объектов без необходимости наследования.</li>
          <li><strong>Для глобальных состояний:</strong> Лучше использовать другие подходы, например, Redux или Context API.</li>
        </ul>
      `,
    },
    {
      title: "",
      type: "text",
      url: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes",
      link: "MDN: Classes",
    },
    {
      title: "",
      type: "text",
      url: "https://javascript.info/class",
      link: "JavaScript Info: Classes",
    },
  ],
};
