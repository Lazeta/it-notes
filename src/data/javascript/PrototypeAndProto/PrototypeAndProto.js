export const PrototypeAndProto = {
  id: 223,
  title: "Prototype and __proto__",
  children: [
    {
      title: "Что такое prototype?",
      type: "text",
      description: `
        <p><strong>prototype</strong> — это свойство функции-конструктора, которое содержит объект с методами и свойствами, доступными всем экземплярам, созданным этой функцией.</p>
        <p>Когда вы создаете объект через конструктор (например, <code>new MyClass()</code>), он наследует методы и свойства из <code>MyClass.prototype</code>.</p>
      `,
      code: `
function Person(name) {
  this.name = name;
}

// Добавляем метод в prototype
Person.prototype.greet = function () {
  console.log(\`Hello, my name is \${this.name}\`);
};

const person = new Person('Alice');
person.greet(); // Hello, my name is Alice
      `,
    },
    {
      title: "Что такое __proto__?",
      type: "text",
      description: `
        <p><strong>__proto__</strong> — это скрытое свойство объекта, которое указывает на прототип его конструктора. Оно позволяет объекту наследовать методы и свойства из цепочки прототипов.</p>
        <p>В современном JavaScript рекомендуется использовать <code>Object.getPrototypeOf(obj)</code> вместо <code>obj.__proto__</code>, так как <code>__proto__</code> считается устаревшим.</p>
      `,
      code: `
const obj = {};
console.log(obj.__proto__ === Object.prototype); // true

// Рекомендуемый способ получения прототипа
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
      `,
    },
    {
      title: "Связь между prototype и __proto__",
      type: "text",
      description: `
        <p><strong>prototype</strong> определяет, какие методы и свойства будут доступны для всех экземпляров, а <strong>__proto__</strong> указывает на этот объект прототипа.</p>
        <p>Пример:</p>
        <ul>
          <li><code>Person.prototype</code> — это объект, содержащий методы для всех экземпляров <code>Person</code>.</li>
          <li><code>person.__proto__</code> указывает на <code>Person.prototype</code>.</li>
        </ul>
      `,
      code: `
function Animal(type) {
  this.type = type;
}

Animal.prototype.makeSound = function () {
  console.log('Some generic sound');
};

const dog = new Animal('Dog');

// Связь между prototype и __proto__
console.log(dog.__proto__ === Animal.prototype); // true
console.log(Animal.prototype.isPrototypeOf(dog)); // true
      `,
    },
    {
      title: "Цепочка прототипов",
      type: "text",
      description: `
        <p>В JavaScript каждый объект имеет цепочку прототипов. Если свойство или метод не найдены в самом объекте, поиск продолжается в его прототипе, затем в прототипе прототипа и так далее, пока не достигнет <code>null</code>.</p>
      `,
      code: `
const obj = {};
console.log(obj.toString()); // [object Object]

// Цепочка прототипов:
// obj -> Object.prototype -> null
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype) === null); // true
      `,
    },
    {
      title: "Добавление методов в prototype",
      type: "text",
      description: `
        <p>Методы, добавленные в <code>prototype</code>, становятся доступными всем экземплярам объекта. Это эффективный способ организации общего поведения.</p>
      `,
      code: `
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.displayInfo = function () {
  console.log(\`\${this.make} \${this.model}\`);
};

const car1 = new Car('Toyota', 'Corolla');
const car2 = new Car('Honda', 'Civic');

car1.displayInfo(); // Toyota Corolla
car2.displayInfo(); // Honda Civic
      `,
    },
    {
      title: "Изменение prototype",
      type: "text",
      description: `
        <p>Изменение <code>prototype</code> влияет на все существующие и будущие экземпляры объекта.</p>
      `,
      code: `
function User(name) {
  this.name = name;
}

const user1 = new User('Alice');

// Добавляем метод позже
User.prototype.sayHi = function () {
  console.log(\`Hi, I'm \${this.name}\`);
};

user1.sayHi(); // Hi, I'm Alice
      `,
    },
    {
      title: "Лучшие практики",
      type: "text",
      description: `
        <ul>
          <li><strong>Используйте <code>Object.create</code>:</strong> Для создания объектов с явно заданным прототипом.</li>
          <li><strong>Избегайте прямого изменения <code>__proto__</code>:</strong> Вместо этого используйте <code>Object.setPrototypeOf</code> или <code>Object.create</code>.</li>
          <li><strong>Организуйте методы в <code>prototype</code>:</strong> Это делает код более эффективным и читаемым.</li>
        </ul>
      `,
      code: `
// Создание объекта с явно заданным прототипом
const parent = { greet: () => console.log('Hello') };
const child = Object.create(parent);

child.greet(); // Hello
      `,
    },
    {
      title: "Частые ошибки",
      type: "text",
      description: `
        <p><strong>1. Прямое изменение <code>__proto__</code>:</strong></p>
        <pre><code>// Плохо: медленно и считается устаревшим
obj.__proto__ = someOtherObject;

// Лучше: используйте Object.setPrototypeOf
Object.setPrototypeOf(obj, someOtherObject);</code></pre>

        <p><strong>2. Неправильное использование prototype:</strong></p>
        <pre><code>// Плохо: добавление методов после создания экземпляра
const user = new User();
User.prototype.sayHi = function () { ... };

// Лучше: определите все методы заранее</code></pre>
      `,
    },
    {
      title: "Продвинутые паттерны",
      type: "text",
      description: `
        <p><strong>1. Наследование через prototype:</strong></p>
        <pre><code>function Parent(name) {
  this.name = name;
}

Parent.prototype.sayName = function () {
  console.log(\`My name is \${this.name}\`);
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

// Установка прототипа для наследования
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.sayAge = function () {
  console.log(\`I am \${this.age} years old\`);
};

const child = new Child('Bob', 10);
child.sayName(); // My name is Bob
child.sayAge();  // I am 10 years old
</code></pre>

        <p><strong>2. Использование классов:</strong></p>
        <pre><code>class Animal {
  constructor(type) {
    this.type = type;
  }

  makeSound() {
    console.log('Some generic sound');
  }
}

class Dog extends Animal {
  constructor(breed) {
    super('Dog');
    this.breed = breed;
  }

  bark() {
    console.log('Woof!');
  }
}

const dog = new Dog('Golden Retriever');
dog.makeSound(); // Some generic sound
dog.bark();      // Woof!
</code></pre>
      `,
    },
  ],
};
