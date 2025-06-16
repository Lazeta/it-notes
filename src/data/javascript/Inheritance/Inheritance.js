export const Inheritance = {
  id: 149,
  title: "Inheritance (наследование)",
  children: [
    {
      title: "Прототипное наследование",
      type: "text",
      description: `
        <p><strong>Прототипное наследование</strong>: В JavaScript объекты могут наследовать свойства и методы от других объектов через механизм прототипов. Каждый объект имеет внутреннюю ссылку на свой прототип, который может содержать свойства и методы, доступные наследуемым объектам.</p>
        <p>Это характерно для JavaScript и позволяет разработчикам расширять возможности объектов без необходимости использовать классы.</p>
      `,
      code: `
// Создаем объект родитель
const parent = {
  greet: function() {
    console.log("Hello from parent!");
  }
};

// Создаем объект child с наследованием от parent
const child = Object.create(parent);
child.greet(); // "Hello from parent!"
      `,
    },
    {
      title: "Классы ES6",
      type: "text",
      description: `
        <p><strong>Классы ES6</strong>: С появлением ES6 в JavaScript появилась возможность использования классов. Классы предоставляют более удобный и понятный синтаксис для реализации наследования. Классы также используют механизм прототипов под капотом.</p>
      `,
      code: `
class Parent {
  greet() {
    console.log("Hello from parent class!");
  }
}

class Child extends Parent {
  greet() {
    console.log("Hello from child class!");
  }
}

const childInstance = new Child();
childInstance.greet(); // "Hello from child class!"

const parentInstance = new Parent();
parentInstance.greet(); // "Hello from parent class!"
      `,
    },
    {
      title: "Наследование с использованием Object.setPrototypeOf",
      type: "text",
      description: `
        <p><strong>Object.setPrototypeOf</strong>: Этот метод можно использовать для изменения прототипа существующего объекта. Это также позволяет реализовать наследование, но рекомендуется использовать в основном в особых случаях, т.к. может привести к ухудшению производительности.</p>
      `,
      code: `
const parent = {
  greet: function() {
    console.log("Hello from parent!");
  }
};

const child = {};
Object.setPrototypeOf(child, parent);
child.greet(); // "Hello from parent!"
      `,
    },
    {
      title: "Сравнение различных способов наследования",
      type: "text",
      description: `
        <p>Различные способы реализации наследования в JavaScript имеют свои преимущества и недостатки:</p>
        <ul>
          <li><strong>Прототипное наследование:</strong> Гибкость, но может быть сложнее для понимания начинающим.</li>
          <li><strong>Классы ES6:</strong> Более читаемый и привычный синтаксис, похожий на другие языки программирования.</li>
          <li><strong>Object.setPrototypeOf:</strong> Не рекомендуется для частого использования, так как имеет низкую производительность.</li>
        </ul>
      `,
      code: `
// Обзор методов
console.log(Object.getPrototypeOf(child) === parent); // true
console.log(child instanceof Child); // true
console.log(child instanceof Parent); // true
      `,
    },
    {
      title: "Лучшие практики",
      type: "text",
      description: `
        <ul>
          <li><strong>Используйте классы для наследования:</strong> Они более читаемы и поддерживаются большинством современных браузеров.</li>
          <li><strong>Избегайте частого использования Object.setPrototypeOf:</strong> Он может замедлить работу программы.</li>
          <li><strong>Организуйте общие методы в prototype:</strong> Это делает код более эффективным и читаемым.</li>
        </ul>
      `,
      code: `
// Пример организации методов в prototype
function Animal(type) {
  this.type = type;
}

Animal.prototype.makeSound = function () {
  console.log('Some generic sound');
};

const dog = new Animal('Dog');
dog.makeSound(); // Some generic sound
      `,
    },
    {
      title: "Частые ошибки",
      type: "text",
      description: `
        <p><strong>1. Прямое изменение __proto__:</strong></p>
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
        <p><strong>1. Миксины:</strong></p>
        <pre><code>const canEat = {
eat: function () {
  console.log('Eating...');
}
};

const canWalk = {
walk: function () {
  console.log('Walking...');
}
};

function mixin(target, ...sources) {
Object.assign(target, ...sources);
}

function Person(name) {
this.name = name;
}

mixin(Person.prototype, canEat, canWalk);

const person = new Person('Alice');
person.eat();  // Eating...
person.walk(); // Walking...
</code></pre>

        <p><strong>2. Композиция вместо наследования:</strong></p>
        <pre><code>const createAnimal = (type) => ({
type,
makeSound: () => console.log('Some generic sound')
});

const dog = createAnimal('Dog');
dog.makeSound(); // Some generic sound
</code></pre>
      `,
    },
  ],
};
