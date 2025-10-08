export const testInheritance = {
  id: 101400,
  title: "Inheritance (Наследование)",
  questions: [
    {
      id: 101401,
      question: "Что такое прототипное наследование?",
      answer: `
      **Прототипное наследование:**
      - Это механизм в JavaScript, который позволяет объектам наследовать свойства и методы от других объектов.
      - Каждый объект имеет внутреннюю ссылку на другой объект, называемый его **прототипом** (\`__proto__\` или \`Object.getPrototypeOf()\`).
      - Если свойство или метод не найдены в объекте, JavaScript ищет их в прототипе, затем в прототипе прототипа и так далее (цепочка прототипов).

      **Пример:**
      \`\`\`javascript
      const parent = {
        greet() {
          console.log('Hello from parent!');
        },
      };

      const child = Object.create(parent);
      child.greet(); // 'Hello from parent!'
      \`\`\`
      `,
    },
    {
      id: 101402,
      question: "Как создать объект с определенным прототипом?",
      answer: `
      **Создание объекта с прототипом:**
      - Используйте \`Object.create(proto)\`, чтобы создать объект с указанным прототипом.
      - Также можно использовать конструкторы или классы.

      **Пример с \`Object.create\`:**
      \`\`\`javascript
      const proto = {
        greet() {
          console.log('Hello!');
        },
      };

      const obj = Object.create(proto);
      obj.greet(); // 'Hello!'
      \`\`\`

      **Пример с конструктором:**
      \`\`\`javascript
      function Parent() {}
      Parent.prototype.greet = function () {
        console.log('Hello from Parent!');
      };

      const child = new Parent();
      child.greet(); // 'Hello from Parent!'
      \`\`\`
      `,
    },
    {
      id: 101403,
      question: "Как работает цепочка прототипов?",
      answer: `
      **Цепочка прототипов:**
      - Когда вы обращаетесь к свойству или методу объекта, JavaScript проверяет, существует ли оно в самом объекте.
      - Если нет, он ищет это свойство или метод в прототипе объекта.
      - Если и там нет, поиск продолжается в прототипе прототипа, пока не достигнет конца цепочки (\`null\`).

      **Пример:**
      \`\`\`javascript
      const parent = {
        greet() {
          console.log('Hello from parent!');
        },
      };

      const child = Object.create(parent);
      child.greet(); // 'Hello from parent!'
      console.log(child.hasOwnProperty('greet')); // false
      console.log('greet' in child); // true
      \`\`\`
      `,
    },
    {
      id: 101404,
      question: "Что такое \`__proto__\` и \`prototype\`?",
      answer: `
      **Разница между \`__proto__\` и \`prototype\`:**
      1. **\`__proto__\`:**
         - Внутреннее свойство объекта, которое указывает на его прототип.
         - Устаревшее, лучше использовать \`Object.getPrototypeOf()\`.

      2. **\`prototype\`:**
         - Свойство функции-конструктора, которое используется для создания прототипа новых объектов при вызове \`new\`.

      **Пример:**
      \`\`\`javascript
      function Person(name) {
        this.name = name;
      }

      Person.prototype.greet = function () {
        console.log(\`Hello, my name is \${this.name}\`);
      };

      const person = new Person('Alice');
      person.greet(); // 'Hello, my name is Alice'

      console.log(person.__proto__ === Person.prototype); // true
      \`\`\`
      `,
    },
    {
      id: 101405,
      question: "Как добавить метод в прототип?",
      answer: `
      **Добавление метода в прототип:**
      - Методы можно добавлять в прототип функции-конструктора или класса.
      - Все экземпляры, созданные из этой функции или класса, будут иметь доступ к этому методу.

      **Пример:**
      \`\`\`javascript
      function Animal(name) {
        this.name = name;
      }

      Animal.prototype.speak = function () {
        console.log(\`\${this.name} makes a noise.\`);
      };

      const dog = new Animal('Dog');
      dog.speak(); // 'Dog makes a noise.'
      \`\`\`
      `,
    },
    {
      id: 101406,
      question:
        "Что такое классы в JavaScript и как они связаны с наследованием?",
      answer: `
      **Классы в JavaScript:**
      - Классы — это синтаксический сахар над прототипным наследованием.
      - Они позволяют определять конструкторы и методы более удобным способом.

      **Пример наследования с классами:**
      \`\`\`javascript
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
      dog.speak(); // 'Rex barks.'
      \`\`\`
      `,
    },
    {
      id: 101407,
      question: "Как проверить, является ли один объект прототипом другого?",
      answer: `
      **Проверка прототипа:**
      - Используйте метод \`Object.prototype.isPrototypeOf()\` или \`Object.getPrototypeOf()\`.

      **Пример:**
      \`\`\`javascript
      const parent = {};
      const child = Object.create(parent);

      console.log(parent.isPrototypeOf(child)); // true
      console.log(Object.getPrototypeOf(child) === parent); // true
      \`\`\`
      `,
    },
    {
      id: 101408,
      question: "Что такое \`super\` в JavaScript?",
      answer: `
      **\`super\`:**
      - Ключевое слово, которое используется для вызова методов родительского класса.
      - Доступно только внутри классов и методов, определенных через \`class\`.

      **Пример:**
      \`\`\`javascript
      class Animal {
        speak() {
          console.log('Animal speaks.');
        }
      }

      class Dog extends Animal {
        speak() {
          super.speak();
          console.log('Dog barks.');
        }
      }

      const dog = new Dog();
      dog.speak();
      // Animal speaks.
      // Dog barks.
      \`\`\`
      `,
    },
    {
      id: 101409,
      question: "Можно ли изменить прототип объекта после его создания?",
      answer: `
      **Изменение прототипа:**
      - Да, используйте \`Object.setPrototypeOf(obj, newProto)\`.
      - Однако это может быть медленной операцией и может повлиять на производительность.

      **Пример:**
      \`\`\`javascript
      const obj = {};
      const newProto = { greet() { console.log('Hello!'); } };

      Object.setPrototypeOf(obj, newProto);
      obj.greet(); // 'Hello!'
      \`\`\`
      `,
    },
    {
      id: 101410,
      question: "Что происходит, если прототип равен \`null\`?",
      answer: `
      **Прототип \`null\`:**
      - Если прототип равен \`null\`, объект не имеет цепочки прототипов.
      - Такой объект называется "чистым" объектом и не наследует никаких свойств или методов.

      **Пример:**
      \`\`\`javascript
      const obj = Object.create(null);
      console.log(obj.toString); // undefined
      \`\`\`
      `,
    },
  ],
};
