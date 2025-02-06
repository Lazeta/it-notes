export const Inheritance = {
  id: 149,
  title: "Inheritance / наследование",
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
  ],
};
