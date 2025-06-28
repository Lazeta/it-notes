export const testClasses = {
  id: 101625,
  title: "Classes",
  questions: [
    {
      id: 101626,
      question:
        "Как создать класс в JavaScript и какие ключевые слова используются для этого?",
      answer: `
      **Создание класса:**
      - Ключевое слово \`class\` используется для объявления класса.
      - \`constructor()\` — специальный метод для инициализации объекта.
      - \`this\` — ссылка на текущий экземпляр класса.
      - \`new\` — оператор для создания нового экземпляра класса.
      - \`extends\` — используется для наследования.
      - \`static\` — определяет статические методы/поля (принадлежат классу, а не объекту).

      **Пример:**
      \`\`\`javascript
      class Animal {
        constructor(name) {
          this.name = name;
        }
        speak() {
          console.log(\`\${this.name} makes a noise.\`);
        }
      }

      const dog = new Animal('Rex');
      dog.speak(); // Rex makes a noise.
      \`\`\`
      `,
    },
    {
      id: 101627,
      question:
        "Как реализовать наследование в JavaScript, используя классы, и как работает конструктор в дочернем классе?",
      answer: `
      **Наследование:**
      - Ключевое слово \`extends\` указывает, от какого класса наследоваться.
      - \`super()\` вызывает конструктор родительского класса (обязателен в конструкторе дочернего класса).
      - \`super.method()\` — обращение к методу родителя.

      **Пример:**
      \`\`\`javascript
      class Dog extends Animal {
        constructor(name, breed) {
          super(name); // Вызов конструктора родителя
          this.breed = breed;
        }
        speak() {
          console.log(\`\${this.name} barks.\`);
        }
      }

      const dog = new Dog('Buddy', 'Golden Retriever');
      dog.speak(); // Buddy barks.
      \`\`\`
      `,
    },
    {
      id: 101628,
      question:
        "Что такое полиморфизм в контексте классов в JavaScript и как его можно достичь?",
      answer: `
      **Полиморфизм:**
      - Это возможность объектов разных классов использовать методы с одинаковым именем, но разной реализацией.
      - В JavaScript он достигается через:
        1. **Наследование и переопределение методов:**
           \`\`\`javascript
           class Cat extends Animal {
             speak() {
               console.log(\`\${this.name} meows.\`);
             }
           }

           const cat = new Cat('Whiskers');
           cat.speak(); // Whiskers meows.
           \`\`\`
        2. **Утиную типизацию:** Проверка наличия метода у объекта.
      `,
    },
    {
      id: 101629,
      question: "Что такое класс в JavaScript?",
      answer: `
      **Класс** — это шаблон для создания объектов, определяющий их свойства и методы. 
      Классы в JavaScript являются синтаксическим сахаром над прототипным наследованием.

      **Пример:**
      \`\`\`javascript
      class Car {
        constructor(brand) {
          this.brand = brand;
        }
        drive() {
          console.log(\`\${this.brand} is driving.\`);
        }
      }

      const myCar = new Car('Toyota');
      myCar.drive(); // Toyota is driving.
      \`\`\`
      `,
    },
    {
      id: 101630,
      question: "Что такое конструктор класса?",
      answer: `
      **Конструктор** — это специальный метод, который вызывается при создании нового экземпляра класса. 
      Он используется для инициализации свойств объекта.

      **Пример:**
      \`\`\`javascript
      class Person {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
      }

      const person = new Person('Alice', 30);
      console.log(person.name); // Alice
      \`\`\`
      `,
    },
    {
      id: 101631,
      question: "Как создается класс?",
      answer: `
      **Создание класса:**
      - Используется ключевое слово \`class\`.
      - Внутри класса могут быть методы и свойства.

      **Пример:**
      \`\`\`javascript
      class Rectangle {
        constructor(width, height) {
          this.width = width;
          this.height = height;
        }
        area() {
          return this.width * this.height;
        }
      }

      const rect = new Rectangle(5, 10);
      console.log(rect.area()); // 50
      \`\`\`
      `,
    },
    {
      id: 101632,
      question: "Что такое наследование классов?",
      answer: `
      **Наследование** позволяет создавать новые классы на основе существующих, наследуя их свойства и методы. 
      Это помогает повторно использовать код и организовывать его логически.

      **Пример:**
      \`\`\`javascript
      class Vehicle {
        move() {
          console.log('Moving...');
        }
      }

      class Car extends Vehicle {
        drive() {
          console.log('Driving...');
        }
      }

      const car = new Car();
      car.move(); // Moving...
      car.drive(); // Driving...
      \`\`\`
      `,
    },
    {
      id: 101633,
      question: "Что такое super() и когда он используется?",
      answer: `
      **super():**
      - Используется в дочерних классах для вызова конструктора родительского класса.
      - Также может использоваться для доступа к методам и свойствам родителя.

      **Пример:**
      \`\`\`javascript
      class Parent {
        constructor(name) {
          this.name = name;
        }
        greet() {
          console.log(\`Hello, \${this.name}!\`);
        }
      }

      class Child extends Parent {
        constructor(name, age) {
          super(name); // Вызов конструктора родителя
          this.age = age;
        }
        info() {
          super.greet(); // Использование метода родителя
          console.log(\`I am \${this.age} years old.\`);
        }
      }

      const child = new Child('Alice', 10);
      child.info(); // Hello, Alice! I am 10 years old.
      \`\`\`
      `,
    },
    {
      id: 101634,
      question: "Как создать экземпляр класса?",
      answer: `
      **Создание экземпляра:**
      - Используется оператор \`new\`.

      **Пример:**
      \`\`\`javascript
      class User {
        constructor(name) {
          this.name = name;
        }
      }

      const user = new User('John');
      console.log(user.name); // John
      \`\`\`
      `,
    },
    {
      id: 101635,
      question: "Что такое статические методы и свойства?",
      answer: `
      **Статические методы и свойства:**
      - Принадлежат самому классу, а не его экземплярам.
      - Объявляются с помощью ключевого слова \`static\`.

      **Пример:**
      \`\`\`javascript
      class MathUtils {
        static add(a, b) {
          return a + b;
        }
      }

      console.log(MathUtils.add(2, 3)); // 5
      \`\`\`
      `,
    },
    {
      id: 101636,
      question: "В чем разница между классами и прототипным наследованием?",
      answer: `
      **Разница:**
      - Классы в JavaScript — это синтаксический сахар над прототипным наследованием.
      - Прототипное наследование работает напрямую с прототипами объектов, тогда как классы предоставляют более удобный синтаксис.

      **Пример прототипного наследования:**
      \`\`\`javascript
      function Animal(name) {
        this.name = name;
      }
      Animal.prototype.speak = function () {
        console.log(\`\${this.name} makes a noise.\`);
      };

      const dog = new Animal('Rex');
      dog.speak(); // Rex makes a noise.
      \`\`\`
      `,
    },
    {
      id: 101637,
      question: "Что такое методы доступа (геттеры и сеттеры)?",
      answer: `
      **Геттеры и сеттеры:**
      - Геттеры (\`get\`) позволяют контролировать доступ к свойствам при чтении.
      - Сеттеры (\`set\`) позволяют контролировать доступ к свойствам при записи.

      **Пример:**
      \`\`\`javascript
      class Rectangle {
        constructor(width, height) {
          this._width = width;
          this._height = height;
        }
        get area() {
          return this._width * this._height;
        }
        set width(value) {
          if (value > 0) {
            this._width = value;
          }
        }
      }

      const rect = new Rectangle(5, 10);
      console.log(rect.area); // 50
      rect.width = 8;
      console.log(rect.area); // 80
      \`\`\`
      `,
    },
    {
      id: 101638,
      question: "Как работают приватные свойства и методы?",
      answer: `
      **Приватные свойства и методы:**
      - Начинаются с \`#\` и доступны только внутри класса.

      **Пример:**
      \`\`\`javascript
      class BankAccount {
        #balance = 0;

        deposit(amount) {
          this.#balance += amount;
        }

        withdraw(amount) {
          if (amount <= this.#balance) {
            this.#balance -= amount;
          }
        }

        getBalance() {
          return this.#balance;
        }
      }

      const account = new BankAccount();
      account.deposit(100);
      console.log(account.getBalance()); // 100
      account.withdraw(50);
      console.log(account.getBalance()); // 50
      \`\`\`
      `,
    },
    {
      id: 101639,
      question: "Какие есть способы работы с классами в JavaScript?",
      answer: `
      **Основные способы:**
      1. Создание классов с помощью \`class\`.
      2. Реализация наследования через \`extends\`.
      3. Использование геттеров и сеттеров для контроля доступа к свойствам.
      4. Определение приватных свойств и методов с помощью \`#\`.
      5. Использование статических методов и свойств.
      `,
    },
    {
      id: 101640,
      question: "Как реализовать миксины в JavaScript?",
      answer: `
      **Миксины:**
      - Это функции, которые добавляют методы или свойства в класс.
      - Позволяют реализовать множественное наследование.

      **Пример:**
      \`\`\`javascript
      const Serializable = (BaseClass) => class extends BaseClass {
        serialize() {
          return JSON.stringify(this);
        }
      };

      class User {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
      }

      const SerializableUser = Serializable(User);
      const user = new SerializableUser('Alice', 30);
      console.log(user.serialize()); // {"name":"Alice","age":30}
      \`\`\`
      `,
    },
  ],
};
