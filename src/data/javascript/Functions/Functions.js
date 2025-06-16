export const Functions = {
  id: 144,
  title: "Functions (Функции)",
  children: [
    {
      title: "Что такое функция?",
      type: "text",
      description: `
        <p><strong>Функция</strong> — это блок кода, который выполняет определенную задачу и может быть вызван многократно. Функции позволяют организовать код в логические блоки, что делает его более читаемым и переиспользуемым.</p>
        <p>Функции могут принимать входные данные (аргументы) и возвращать результат.</p>
      `,
      code: `
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Alice")); // Hello, Alice!
      `,
    },
    {
      title: "Объявление функций",
      type: "text",
      description: `
        <p>Существует несколько способов объявления функций:</p>
        <ul>
          <li><strong>Function Declaration:</strong> Объявление функции с использованием ключевого слова <code>function</code>.</li>
          <li><strong>Function Expression:</strong> Присваивание функции переменной.</li>
          <li><strong>Arrow Function:</strong> Стрелочные функции, введенные в ES6.</li>
        </ul>
      `,
      code: `
// Function Declaration
function add(a, b) {
  return a + b;
}

// Function Expression
const multiply = function(a, b) {
  return a * b;
};

// Arrow Function
const subtract = (a, b) => a - b;

console.log(add(2, 3));       // 5
console.log(multiply(2, 3));  // 6
console.log(subtract(5, 2));  // 3
      `,
    },
    {
      title: "Параметры и аргументы",
      type: "text",
      description: `
        <p><strong>Параметры</strong> — это переменные, указанные в определении функции. <strong>Аргументы</strong> — это значения, передаваемые в функцию при её вызове.</p>
        <p>JavaScript позволяет использовать параметры по умолчанию и rest-параметры.</p>
      `,
      code: `
// Параметры по умолчанию
function greet(name = "Guest") {
  return \`Hello, \${name}!\`;
}

console.log(greet());         // Hello, Guest!
console.log(greet("Alice"));  // Hello, Alice!

// Rest-параметры
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
      `,
    },
    {
      title: "Возврат значений",
      type: "text",
      description: `
        <p>Функции могут возвращать значения с помощью ключевого слова <code>return</code>. Если <code>return</code> отсутствует, функция возвращает <code>undefined</code>.</p>
      `,
      code: `
function add(a, b) {
  return a + b;
}

function logMessage(message) {
  console.log(message);
}

console.log(add(2, 3)); // 5
logMessage("Hello!");  // Hello!
      `,
    },
    {
      title: "Функции как объекты",
      type: "text",
      description: `
        <p>В JavaScript функции являются объектами первого класса. Это означает, что их можно:</p>
        <ul>
          <li>Присваивать переменным.</li>
          <li>Передавать в качестве аргументов другим функциям.</li>
          <li>Возвращать из других функций.</li>
        </ul>
      `,
      code: `
// Передача функции как аргумента
function applyOperation(a, b, operation) {
  return operation(a, b);
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(applyOperation(2, 3, add));      // 5
console.log(applyOperation(2, 3, multiply)); // 6

// Возвращение функции
function createMultiplier(factor) {
  return function(value) {
    return value * factor;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10
      `,
    },
    {
      title: "Область видимости и замыкания",
      type: "text",
      description: `
        <p>Функции имеют свою собственную область видимости. Переменные, объявленные внутри функции, недоступны снаружи.</p>
        <p><strong>Замыкание</strong> — это комбинация функции и лексического окружения, в котором она была объявлена. Замыкания позволяют функциям "запоминать" переменные из внешней области видимости.</p>
      `,
      code: `
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
      `,
    },
    {
      title: "Стрелочные функции",
      type: "text",
      description: `
        <p>Стрелочные функции (<code>=></code>) были введены в ES6. Они имеют более короткий синтаксис и не имеют собственного <code>this</code>.</p>
        <ul>
          <li>Подходят для колбэков и обработчиков событий.</li>
          <li>Не подходят для методов объектов или конструкторов.</li>
        </ul>
      `,
      code: `
// Обычная функция
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Стрелочная функция
const greetArrow = (name) => \`Hello, \${name}!\`;

console.log(greet("Alice"));       // Hello, Alice!
console.log(greetArrow("Alice"));  // Hello, Alice!

// Отсутствие собственного this
const obj = {
  name: "Alice",
  sayHi: function() {
    setTimeout(() => {
      console.log(\`Hi, \${this.name}!\`);
    }, 1000);
  }
};

obj.sayHi(); // Hi, Alice!
      `,
    },
    {
      title: "Рекурсия",
      type: "text",
      description: `
        <p>Рекурсия — это механизм, при котором функция вызывает сама себя для решения подзадач. Рекурсия часто используется вместо циклов.</p>
      `,
      code: `
function factorial(n) {
  if (n === 0) {
    return 1; // Базовый случай
  } else {
    return n * factorial(n - 1); // Рекурсивный случай
  }
}

console.log(factorial(5)); // 120
      `,
    },
    {
      title: "Заключение",
      type: "text",
      description: `
        <p>Функции — это фундаментальная часть JavaScript, которая позволяет писать модульный, чистый и переиспользуемый код. Понимание различных типов функций, их областей видимости и замыканий поможет вам стать более эффективным разработчиком.</p>
      `,
    },
  ],
};
