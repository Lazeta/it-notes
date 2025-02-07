export const functionDeclarationAndExpressionAndArrow = {
  id: 144,
  title: "function declaration and expression, arrow function",
  children: [
    {
      title: "Описание объявлений и выражений функций",
      type: "text",
      description: `
            <p><strong>Объявление функции</strong>: Это способ определения функции с использованием ключевого слова <code>function</code>. Функция может быть вызвана до ее определения (подъем).</p>
            <p><strong>Выражение функции</strong>: Это определение функции, которое присваивается переменной. Функция не может быть вызвана до ее объявления.</p>
          `,
      code: `
// Объявление функции
function sayHello() {
console.log("Hello!");
}
sayHello(); // "Hello!"

// Выражение функции
const greet = function() {
console.log("Hi!");
};
greet(); // "Hi!"
          `,
    },
    {
      title: "Стрелочные функции",
      type: "text",
      description: `
            <p><strong>Стрелочные функции</strong>: Это упрощенный синтаксис для объявления функций, введенный в ES6. Они не имеют собственного значения <code>this</code> и не могут быть использованы 
            в качестве конструктора.</p>
          `,
      code: `
const multiply = (x, y) => x * y;
console.log(multiply(2, 3)); // 6

const add = (a, b) => {
return a + b;
};
console.log(add(2, 3)); // 5
          `,
    },
    {
      title: "Сравнение синтаксиса",
      type: "text",
      description: `
            <p>Различия в синтаксисе между обычными и стрелочными функциями:</p>
          `,
      code: `
// Обычная функция
function square(x) {
return x * x;
}

// Стрелочная функция
const squareArrow = (x) => x * x;

console.log(square(4)); // 16
console.log(squareArrow(4)); // 16
          `,
    },
    {
      title: "Преимущества",
      type: "text",
      description: `
            <p>Стрелочные функции обеспечивают более лаконичный синтаксис и удобнее работают с <code>this</code> в контексте методов, так как они наследуют <code>this</code> 
            от родительской области видимости.</p>
          `,
      code: `
const obj = {
value: 100,
regularFunction: function() {
console.log(this.value);
},
arrowFunction: () => {
console.log(this.value);
},
};

obj.regularFunction(); // 100
obj.arrowFunction();   // undefined (т.к. 'this' не ссылается на obj)
          `,
    },
  ],
};
