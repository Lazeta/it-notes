export const thisAndFunctionMethods = {
    id: 521,
    title: "this и методы функций (call, apply, bind)",
    children: [
      {
        title: "Основы this",
        type: "text",
        description: `
          <p><strong>Где определяется this:</strong></p>
          <ul>
            <li><strong>Обычная функция:</strong> Зависит от вызова</li>
            <li><strong>Стрелочная функция:</strong> Берет из внешнего контекста</li>
            <li><strong>Метод объекта:</strong> Ссылается на объект</li>
          </ul>
        `
      },
      {
        title: "Метод call()",
        type: "text",
        description: `
          <p><strong>call(thisArg, ...args)</strong> — вызывает функцию с указанным <code>this</code> и аргументами.</p>
          
          <pre><code>const person = { name: 'Alex' };
  
  function greet(greeting) {
    console.log(\`\${greeting}, \${this.name}!\`);
  }
  
  greet.call(person, 'Hello'); // Hello, Alex!</code></pre>
          
          <p><strong>Пример с наследованием:</strong></p>
          <pre><code>function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price); // Наследуем конструктор
    this.category = 'food';
  }
  
  new Food('Cheese', 5).name; // Cheese</code></pre>
        `
      },
      {
        title: "Метод apply()",
        type: "text",
        description: `
          <p><strong>apply(thisArg, [argsArray])</strong> — аналогичен <code>call</code>, но аргументы передаются массивом.</p>
          
          <pre><code>const numbers = [5, 6, 2, 3, 7];
  Math.max.apply(null, numbers); // 7
  
  // Современная замена:
  Math.max(...numbers); // 7 (spread оператор)</code></pre>
          
          <p><strong>Пример с аргументами:</strong></p>
          <pre><code>const person = { name: 'Alice' };
  
  function introduce(age, city) {
    console.log(\`I'm \${this.name}, \${age}, from \${city}\`);
  }
  
  introduce.apply(person, [25, 'Moscow']); // I'm Alice, 25, from Moscow</code></pre>
        `
      },
      {
        title: "Метод bind()",
        type: "text",
        description: `
          <p><strong>bind(thisArg, ...args)</strong> — создает новую функцию с привязанным <code>this</code> и аргументами.</p>
          
          <pre><code>const user = {
    name: 'John',
    sayHi() {
      console.log(\`Hi, \${this.name}!\`);
    }
  };
  
  setTimeout(user.sayHi.bind(user), 1000); // Hi, John! (через 1 сек)</code></pre>
          
          <p><strong>Частичное применение:</strong></p>
          <pre><code>function multiply(a, b) {
    return a * b;
  }
  
  const double = multiply.bind(null, 2);
  double(3); // 6 (2 * 3)</code></pre>
        `
      },
      {
        title: "Сравнение методов",
        type: "text",
        description: `
          <table border="1" cellpadding="5" cellspacing="0">
            <tr>
              <th>Метод</th>
              <th>Вызов</th>
              <th>Аргументы</th>
              <th>Результат</th>
            </tr>
            <tr>
              <td><code>call()</code></td>
              <td>Сразу</td>
              <td>Через запятую</td>
              <td>Результат функции</td>
            </tr>
            <tr>
              <td><code>apply()</code></td>
              <td>Сразу</td>
              <td>Массив</td>
              <td>Результат функции</td>
            </tr>
            <tr>
              <td><code>bind()</code></td>
              <td>Позже</td>
              <td>Через запятую</td>
              <td>Новая функция</td>
            </tr>
          </table>
        `
      },
      {
        title: "Практические примеры",
        type: "text",
        description: `
          <p><strong>1. Делегирование методов:</strong></p>
          <pre><code>const objA = { name: 'A' };
  const objB = {
    name: 'B',
    sayName() {
      console.log(this.name);
    }
  };
  
  objB.sayName.call(objA); // A (заимствуем метод)</code></pre>
          
          <p><strong>2. Каррирование с bind:</strong></p>
          <pre><code>function log(level, message) {
    console.log(\`[\${level}] \${message}\`);
  }
  
  const logError = log.bind(null, 'ERROR');
  logError('Something broke!'); // [ERROR] Something broke!</code></pre>
          
          <p><strong>3. Привязка контекста в классах:</strong></p>
          <pre><code>class Button {
    constructor() {
      this.click = this.click.bind(this);
    }
    
    click() {
      console.log(this); // Всегда экземпляр Button
    }
  }</code></pre>
        `
      },
      {
        title: "Стрелочные функции и this",
        type: "text",
        description: `
          <p>Стрелочные функции <strong>не имеют своего this</strong> — они берут его из внешнего контекста.</p>
          
          <pre><code>const group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    
    showList() {
      this.students.forEach(
        student => console.log(this.title + ': ' + student)
      );
      // Our Group: John
      // Our Group: Pete
      // Our Group: Alice
    }
  };</code></pre>
          
          <p><strong>Нельзя изменить this стрелочной функции:</strong></p>
          <pre><code>const f = () => console.log(this);
  f.call({ name: 'Alex' }); // window/global (контекст остался прежним)</code></pre>
        `
      }
    ]
  };