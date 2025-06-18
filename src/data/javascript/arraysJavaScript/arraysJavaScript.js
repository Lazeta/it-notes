export const ArraysJavaScript = {
  id: 525,
  title: "Arrays in JS",
  children: [
    {
      title: "Создание массивов",
      type: "text",
      description: `
          <p><strong>1. Литеральная нотация:</strong></p>
          <pre><code>const fruits = ['apple', 'banana', 'orange'];</code></pre>
  
          <p><strong>2. Через конструктор Array:</strong></p>
          <pre><code>const numbers = new Array(1, 2, 3); // [1, 2, 3]
  const emptyArray = new Array(5); // Создаёт массив длиной 5 (пустые слоты)</code></pre>
  
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
  
          <p><strong>Преобразование массива в строку:</strong></p>
          <pre><code>fruits.toString(); // "apple,banana,orange"
  fruits.join(' | '); // "apple | banana | orange"</code></pre>
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
  
          <p><strong>3. Сортировка и изменение порядка:</strong></p>
          <ul>
            <li><code>sort()</code> - сортирует массив на месте</li>
            <li><code>reverse()</code> - меняет порядок элементов на обратный</li>
          </ul>
          <pre><code>const sorted = [40, 1, 5, 200].sort((a, b) => a - b); // [1, 5, 40, 200]
  const reversed = [1, 2, 3].reverse(); // [3, 2, 1]</code></pre>
  
          <p><strong>4. Заполнение массива:</strong></p>
          <ul>
            <li><code>fill()</code> - заполняет массив указанным значением</li>
            <li><code>copyWithin()</code> - копирует часть массива внутри себя</li>
          </ul>
          <pre><code>[1, 2, 3, 4].fill(0, 1, 3); // [1, 0, 0, 4]
  [1, 2, 3, 4].copyWithin(0, 2, 4); // [3, 4, 3, 4]</code></pre>
        `,
    },
    {
      title: "Итерация по массиву",
      type: "text",
      description: `
          <p><strong>1. forEach:</strong> Выполняет функцию для каждого элемента</p>
          <pre><code>fruits.forEach((fruit, index) => {
    console.log(\`\${index}: \${fruit}\`);
  });
  // 0: apple
  // 1: banana
  // 2: orange</code></pre>
  
          <p><strong>2. map:</strong> Создаёт новый массив, преобразуя элементы</p>
          <pre><code>const lengths = fruits.map(fruit => fruit.length); // [5, 6, 6]</code></pre>
  
          <p><strong>3. filter:</strong> Фильтрует элементы по условию</p>
          <pre><code>const longFruits = fruits.filter(fruit => fruit.length > 5); // ['banana', 'orange']</code></pre>
  
          <p><strong>4. reduce:</strong> Сводит массив к одному значению</p>
          <pre><code>const sum = [1, 2, 3].reduce((acc, num) => acc + num, 0); // 6</code></pre>
  
          <p><strong>5. find и findIndex:</strong> Поиск по условию</p>
          <pre><code>const found = numbers.find(n => n > 10); // 12
  const index = numbers.findIndex(n => n > 10); // 1</code></pre>
  
          <p><strong>6. every и some:</strong> Проверка условий</p>
          <pre><code>numbers.every(n => n > 0); // true
  numbers.some(n => n > 100); // true</code></pre>
        `,
    },
    {
      title: "Деструктуризация массивов",
      type: "text",
      description: `
          <p><strong>Деструктуризация</strong> — это удобный способ извлечения значений из массива или объекта.</p>
  
          <p><strong>1. Базовый пример:</strong></p>
          <pre><code>const [first, second] = fruits;
  console.log(first, second); // 'apple' 'banana'</code></pre>
  
          <p><strong>2. Пропуск элементов:</strong></p>
          <pre><code>const [first, , third] = fruits; // Пропускаем второй элемент
  console.log(first, third); // 'apple' 'orange'</code></pre>
  
          <p><strong>3. Остаточные параметры:</strong></p>
          <pre><code>const [first, ...rest] = fruits; // rest = ['banana', 'orange']
  console.log(rest); // ['banana', 'orange']</code></pre>
  
          <p><strong>4. Значения по умолчанию:</strong></p>
          <pre><code>const [a = 1, b = 2] = [10]; // a = 10, b = 2</code></pre>
  
          <p><strong>5. Вложенные массивы:</strong></p>
          <pre><code>const nested = [1, [2, 3]];
  const [x, [y, z]] = nested;
  console.log(x, y, z); // 1 2 3</code></pre>
        `,
    },
    {
      title: "Spread оператор",
      type: "text",
      description: `
          <p><strong>1. Копирование массива:</strong></p>
          <pre><code>const newFruits = [...fruits]; // Полная копия массива</code></pre>
  
          <p><strong>2. Объединение массивов:</strong></p>
          <pre><code>const vegetables = ['carrot', 'broccoli'];
  const combined = [...fruits, ...vegetables]; // ['apple', 'banana', 'orange', 'carrot', 'broccoli']</code></pre>
  
          <p><strong>3. Передача элементов в функцию:</strong></p>
          <pre><code>Math.max(...[1, 2, 3]); // Аналог Math.max(1, 2, 3)</code></pre>
  
          <p><strong>4. Преобразование итерируемых объектов:</strong></p>
          <pre><code>const chars = [...'hello']; // ['h', 'e', 'l', 'l', 'o']</code></pre>
  
          <p><strong>5. Разбиение массива на аргументы:</strong></p>
          <pre><code>function sum(a, b, c) {
    return a + b + c;
  }
  const numbers = [1, 2, 3];
  console.log(sum(...numbers)); // 6</code></pre>
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
          <pre><code>const newArray = fruits.concat(['kiwi', 'mango']); // ['apple', 'banana', 'orange', 'kiwi', 'mango']</code></pre>
  
          <p><strong>3. flat():</strong> "Выравнивает" вложенные массивы</p>
          <pre><code>[1, [2, [3]]].flat(2); // [1, 2, 3]</code></pre>
  
          <p><strong>4. flatMap():</strong> Комбинация map и flat</p>
          <pre><code>const sentences = ['hello world', 'foo bar'];
  const words = sentences.flatMap(sentence => sentence.split(' '));
  console.log(words); // ['hello', 'world', 'foo', 'bar']</code></pre>
  
          <p><strong>5. toSorted() и toReversed():</strong> Новые методы (ES2023)</p>
          <pre><code>const sorted = [3, 1, 2].toSorted(); // [1, 2, 3]
  const reversed = [1, 2, 3].toReversed(); // [3, 2, 1]</code></pre>
        `,
    },
    {
      title: "Полезные ссылки",
      type: "text",
      description: `
          <p>Для более глубокого изучения:</p>
          <ul>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"  target="_blank">MDN Web Docs: Array</a></li>
            <li><a href="https://learn.javascript.ru/array-methods"  target="_blank">Learn JavaScript: Методы массива</a></li>
            <li><a href="https://javascript.info/array"  target="_blank">JavaScript.info: Массивы</a></li>
          </ul>
        `,
    },
  ],
};
