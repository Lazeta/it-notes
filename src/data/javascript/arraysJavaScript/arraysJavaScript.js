export const arraysJavaScript = {
  id: 525,
  title: "Массивы в JavaScript",
  children: [
    {
      title: "Создание массивов",
      type: "text",
      description: `
          <p><strong>1. Литеральная нотация:</strong></p>
          <pre><code>const fruits = ['apple', 'banana', 'orange'];</code></pre>
  
          <p><strong>2. Через конструктор Array:</strong></p>
          <pre><code>const numbers = new Array(1, 2, 3);
  const emptyArray = new Array(5); // Создаёт массив длиной 5 (empty slots)</code></pre>
  
          <p><strong>3. Из итерируемых объектов:</strong></p>
          <pre><code>const fromString = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
  const fromSet = Array.from(new Set([1, 2, 1])); // [1, 2]</code></pre>
        `,
    },
    {
      title: "Базовые операции",
      type: "text",
      description: `
          <p><strong>Доступ к элементам:</strong></p>
          <pre><code>fruits[0]; // 'apple' (индексация с 0)
  fruits.at(-1); // 'orange' (новый метод, отрицательные индексы)</code></pre>
  
          <p><strong>Изменение длины:</strong></p>
          <pre><code>fruits.length = 2; // Удаляет последний элемент
  fruits.length = 5; // Добавляет пустые слоты</code></pre>
  
          <p><strong>Проверка массива:</strong></p>
          <pre><code>Array.isArray(fruits); // true
  fruits instanceof Array; // true</code></pre>
        `,
    },
    {
      title: "Методы массивов",
      type: "text",
      description: `
          <p><strong>1. Добавление/удаление элементов:</strong></p>
          <ul>
            <li><code>push()</code> - добавить в конец</li>
            <li><code>pop()</code> - удалить с конца</li>
            <li><code>unshift()</code> - добавить в начало</li>
            <li><code>shift()</code> - удалить с начала</li>
            <li><code>splice()</code> - универсальный метод</li>
          </ul>
          <pre><code>const arr = [1, 2, 3];
  arr.push(4); // [1, 2, 3, 4]
  arr.splice(1, 1, 'a', 'b'); // [1, 'a', 'b', 3, 4]</code></pre>
  
          <p><strong>2. Поиск элементов:</strong></p>
          <ul>
            <li><code>indexOf()</code> - индекс элемента</li>
            <li><code>includes()</code> - проверка наличия</li>
            <li><code>find()</code> - поиск по условию</li>
            <li><code>findIndex()</code> - индекс по условию</li>
          </ul>
          <pre><code>const numbers = [5, 12, 8, 130, 44];
  numbers.find(n => n > 10); // 12
  numbers.includes(8); // true</code></pre>
        `,
    },
    {
      title: "Итерация по массиву",
      type: "text",
      description: `
          <p><strong>1. forEach:</strong> Выполняет функцию для каждого элемента</p>
          <pre><code>fruits.forEach((fruit, index) => {
    console.log(\`\${index}: \${fruit}\`);
  });</code></pre>
  
          <p><strong>2. map:</strong> Создаёт новый массив, преобразуя элементы</p>
          <pre><code>const lengths = fruits.map(fruit => fruit.length); // [5, 6, 6]</code></pre>
  
          <p><strong>3. filter:</strong> Фильтрует элементы по условию</p>
          <pre><code>const longFruits = fruits.filter(fruit => fruit.length > 5); // ['banana', 'orange']</code></pre>
  
          <p><strong>4. reduce:</strong> Сводит массив к одному значению</p>
          <pre><code>const sum = [1, 2, 3].reduce((acc, num) => acc + num, 0); // 6</code></pre>
        `,
    },
    {
      title: "Полезные методы",
      type: "text",
      description: `
          <p><strong>1. slice():</strong> Копирует часть массива</p>
          <pre><code>const copy = fruits.slice(); // Полная копия
  const part = fruits.slice(1, 3); // ['banana', 'orange']</code></pre>
  
          <p><strong>2. concat():</strong> Объединяет массивы</p>
          <pre><code>const newArray = fruits.concat(['kiwi', 'mango']);</code></pre>
  
          <p><strong>3. sort():</strong> Сортирует массив</p>
          <pre><code>const sorted = fruits.sort(); // Изменяет исходный массив!
  const numbers = [40, 1, 5, 200];
  numbers.sort((a, b) => a - b); // [1, 5, 40, 200]</code></pre>
  
          <p><strong>4. flat():</strong> "Выравнивает" вложенные массивы</p>
          <pre><code>[1, [2, [3]]].flat(2); // [1, 2, 3]</code></pre>
        `,
    },
    {
      title: "Деструктуризация массивов",
      type: "text",
      description: `
          <p><strong>Базовый пример:</strong></p>
          <pre><code>const [first, second] = fruits;
  console.log(first, second); // 'apple' 'banana'</code></pre>
  
          <p><strong>Пропуск элементов:</strong></p>
          <pre><code>const [first, , third] = fruits; // Пропускаем второй элемент</code></pre>
  
          <p><strong>Остаточные параметры:</strong></p>
          <pre><code>const [first, ...rest] = fruits; // rest = ['banana', 'orange']</code></pre>
  
          <p><strong>Значения по умолчанию:</strong></p>
          <pre><code>const [a = 1, b = 2] = [10]; // a = 10, b = 2</code></pre>
        `,
    },
    {
      title: "Spread оператор",
      type: "text",
      description: `
          <p><strong>Копирование массива:</strong></p>
          <pre><code>const newFruits = [...fruits];</code></pre>
  
          <p><strong>Объединение массивов:</strong></p>
          <pre><code>const combined = [...fruits, ...vegetables];</code></pre>
  
          <p><strong>Передача элементов в функцию:</strong></p>
          <pre><code>Math.max(...[1, 2, 3]); // Аналог Math.max(1, 2, 3)</code></pre>
  
          <p><strong>Преобразование итерируемых объектов:</strong></p>
          <pre><code>const chars = [...'hello']; // ['h', 'e', 'l', 'l', 'o']</code></pre>
        `,
    },
  ],
};
