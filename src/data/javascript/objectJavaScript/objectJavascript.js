export const objectJavascript = {
  id: 524,
  title: "Объекты в JavaScript",
  children: [
    {
      title: "Создание объектов",
      type: "text",
      description: `
          <p><strong>1. Литеральная нотация (наиболее распространена):</strong></p>
          <pre><code>const user = {
    name: 'Alex',
    age: 30,
    isAdmin: true
  };</code></pre>
  
          <p><strong>2. Через конструктор Object:</strong></p>
          <pre><code>const book = new Object();
  book.title = 'JavaScript Guide';
  book.author = 'John Doe';</code></pre>
  
          <p><strong>3. Через классы (ES6):</strong></p>
          <pre><code>class Person {
    constructor(name) {
      this.name = name;
    }
  }
  const person = new Person('Alice');</code></pre>
        `,
    },
    {
      title: "Основные операции",
      type: "text",
      description: `
          <p><strong>Доступ к свойствам:</strong></p>
          <pre><code>user.name;    // 'Alex' (через точку)
  user['age']; // 30 (через скобки)</code></pre>
  
          <p><strong>Добавление/изменение свойств:</strong></p>
          <pre><code>user.city = 'Moscow'; // Добавить
  user.age = 31;     // Изменить</code></pre>
  
          <p><strong>Удаление свойств:</strong></p>
          <pre><code>delete user.isAdmin;</code></pre>
  
          <p><strong>Проверка существования свойства:</strong></p>
          <pre><code>'name' in user; // true
  user.hasOwnProperty('age'); // true</code></pre>
        `,
    },
    {
      title: "Методы объектов",
      type: "text",
      description: `
          <p><strong>1. Object.keys(obj)</strong> — возвращает массив ключей:</p>
          <pre><code>Object.keys(user); // ['name', 'age', 'city']</code></pre>
  
          <p><strong>2. Object.values(obj)</strong> — возвращает массив значений:</p>
          <pre><code>Object.values(user); // ['Alex', 31, 'Moscow']</code></pre>
  
          <p><strong>3. Object.entries(obj)</strong> — возвращает массив пар [ключ, значение]:</p>
          <pre><code>Object.entries(user); // [['name', 'Alex'], ['age', 31], ...]</code></pre>
  
          <p><strong>4. Object.assign(target, ...sources)</strong> — копирует свойства:</p>
          <pre><code>const defaults = { theme: 'light', fontSize: 16 };
  const settings = Object.assign({}, defaults, { fontSize: 14 });</code></pre>
  
          <p><strong>5. Object.freeze(obj)</strong> — запрещает изменения:</p>
          <pre><code>const config = Object.freeze({ apiUrl: 'https://api.example.com' });
  config.apiUrl = 'new-url'; // Ошибка в strict mode</code></pre>
        `,
    },
    {
      title: "Копирование объектов",
      type: "text",
      description: `
          <p><strong>Поверхностное копирование:</strong></p>
          <pre><code>const clone = Object.assign({}, user);
  // Или через spread-оператор:
  const clone = { ...user };</code></pre>
  
          <p><strong>Глубокое копирование:</strong></p>
          <pre><code>const deepClone = JSON.parse(JSON.stringify(obj));
  // Или с помощью structuredClone (современный способ):
  const deepClone = structuredClone(obj);</code></pre>
  
          <p><strong>Проблема ссылочного копирования:</strong></p>
          <pre><code>const original = { a: { b: 1 } };
  const copy = { ...original };
  copy.a.b = 2;
  console.log(original.a.b); // 2 (изменился и оригинал!)</code></pre>
        `,
    },
    {
      title: "Специальные возможности",
      type: "text",
      description: `
          <p><strong>Вычисляемые свойства:</strong></p>
          <pre><code>const propName = 'status';
  const order = {
    id: 1,
    [propName]: 'pending' // Свойство 'status'
  };</code></pre>
  
          <p><strong>Методы в объекте:</strong></p>
          <pre><code>const calculator = {
    sum(a, b) {
      return a + b;
    }
  };
  calculator.sum(2, 3); // 5</code></pre>
  
          <p><strong>Геттеры и сеттеры:</strong></p>
          <pre><code>const person = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
      return \`\${this.firstName} \${this.lastName}\`;
    },
    set fullName(value) {
      [this.firstName, this.lastName] = value.split(' ');
    }
  };
  person.fullName = 'Alice Cooper';</code></pre>
        `,
    },
    {
      title: "Прототипы и наследование",
      type: "text",
      description: `
          <p><strong>Прототипное наследование:</strong></p>
          <pre><code>const animal = { eats: true };
  const rabbit = { jumps: true };
  
  Object.setPrototypeOf(rabbit, animal); // rabbit.__proto__ = animal
  console.log(rabbit.eats); // true</code></pre>
  
          <p><strong>Создание объекта с прототипом:</strong></p>
          <pre><code>const rabbit = Object.create(animal);
  rabbit.jumps = true;</code></pre>
  
          <p><strong>Проверка прототипа:</strong></p>
          <pre><code>animal.isPrototypeOf(rabbit); // true
  Object.getPrototypeOf(rabbit) === animal; // true</code></pre>
        `,
    },
    {
      title: "Деструктуризация объектов",
      type: "text",
      description: `
          <p><strong>Базовый пример:</strong></p>
          <pre><code>const { name, age } = user;
  console.log(name, age); // 'Alex' 31</code></pre>
  
          <p><strong>С переименованием:</strong></p>
          <pre><code>const { name: userName, age: userAge } = user;</code></pre>
  
          <p><strong>Значения по умолчанию:</strong></p>
          <pre><code>const { name = 'Anonymous', isAdmin = false } = user;</code></pre>
  
          <p><strong>Вложенная деструктуризация:</strong></p>
          <pre><code>const options = {
    size: { width: 100, height: 200 },
    items: ['Cake', 'Donut']
  };
  
  const { size: { width }, items: [item1] } = options;
  console.log(width, item1); // 100 'Cake'</code></pre>
        `,
    },
  ],
};
