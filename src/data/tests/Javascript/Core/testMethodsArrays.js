export const testMethodsArrays = {
  id: 100825,
  title: "Arrays (массивы)",
  questions: [
    {
      id: 100826,
      question: "Что такое массив в JavaScript?",
      answer: `
      **Массив** — это упорядоченная коллекция значений, которая может содержать элементы любого типа.
      - Элементы массива нумеруются с нуля.
      - Массивы являются изменяемыми (mutable).

      **Пример:**
      \`\`\`javascript
      const arr = [1, 'two', true];
      console.log(arr[0]); // 1
      console.log(arr.length); // 3
      \`\`\`
      `,
    },
    {
      id: 100827,
      question: "Как создать массив?",
      answer: `
      **Способы создания массива:**
      1. **Литеральный синтаксис:**
         \`\`\`javascript
         const arr = [1, 2, 3];
         \`\`\`

      2. **Конструктор \`Array\`:**
         \`\`\`javascript
         const arr = new Array(1, 2, 3);
         const emptyArr = new Array(5); // Создает массив с 5 пустыми слотами
         \`\`\`

      3. **Статические методы:**
         \`\`\`javascript
         const arr = Array.of(1, 2, 3); // [1, 2, 3]
         const fromArr = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
         \`\`\`
      `,
    },
    {
      id: 100828,
      question: "Какие методы массивов существуют?",
      answer: `
      **Основные методы массивов:**
      1. **Добавление/удаление элементов:**
         - \`push()\`: Добавляет элемент в конец.
         - \`pop()\`: Удаляет последний элемент.
         - \`unshift()\`: Добавляет элемент в начало.
         - \`shift()\`: Удаляет первый элемент.
         - \`splice()\`: Изменяет массив, добавляя/удаляя элементы.

      2. **Итерация:**
         - \`forEach()\`: Выполняет функцию для каждого элемента.
         - \`map()\`: Создает новый массив с результатами.
         - \`filter()\`: Фильтрует элементы по условию.
         - \`reduce()\`: Сводит массив к одному значению.

      3. **Поиск:**
         - \`find()\`: Находит первый элемент, удовлетворяющий условию.
         - \`findIndex()\`: Находит индекс первого элемента, удовлетворяющего условию.
         - \`includes()\`: Проверяет наличие элемента.

      4. **Другие:**
         - \`slice()\`: Возвращает часть массива.
         - \`concat()\`: Объединяет массивы.
         - \`join()\`: Преобразует массив в строку.

      **Пример:**
      \`\`\`javascript
      const arr = [1, 2, 3];

      arr.push(4); // [1, 2, 3, 4]
      arr.pop();   // [1, 2, 3]

      const doubled = arr.map((num) => num * 2); // [2, 4, 6]
      const filtered = arr.filter((num) => num > 1); // [2, 3]
      \`\`\`
      `,
    },
    {
      id: 100829,
      question: "Что такое деструктуризация массива?",
      answer: `
      **Деструктуризация массива:**
      - Позволяет извлекать значения из массива и присваивать их переменным.

      **Пример:**
      \`\`\`javascript
      const arr = [1, 2, 3];
      const [first, second] = arr;

      console.log(first);  // 1
      console.log(second); // 2

      // Пропуск значений:
      const [a, , c] = arr;
      console.log(a); // 1
      console.log(c); // 3
      \`\`\`
      `,
    },
    {
      id: 100830,
      question: "Как работает метод reduce?",
      answer: `
      **Метод \`reduce\`:**
      - Сводит массив к одному значению, применяя функцию к каждому элементу.
      - Принимает два аргумента: функцию-аккумулятор и начальное значение.

      **Пример:**
      \`\`\`javascript
      const numbers = [1, 2, 3, 4];

      const sum = numbers.reduce((acc, num) => acc + num, 0);
      console.log(sum); // 10

      const product = numbers.reduce((acc, num) => acc * num, 1);
      console.log(product); // 24
      \`\`\`
      `,
    },
    {
      id: 100831,
      question: "Как проверить, является ли объект массивом?",
      answer: `
      **Проверка на массив:**
      - Используйте метод \`Array.isArray()\`.

      **Пример:**
      \`\`\`javascript
      const arr = [1, 2, 3];
      const obj = { key: 'value' };

      console.log(Array.isArray(arr)); // true
      console.log(Array.isArray(obj)); // false
      \`\`\`
      `,
    },
    {
      id: 100832,
      question: "Что такое spread оператор для массивов?",
      answer: `
      **Spread оператор (\`...\`):**
      - Позволяет расширять массив или создавать его копию.

      **Пример:**
      \`\`\`javascript
      const arr1 = [1, 2, 3];
      const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

      const copy = [...arr1]; // Копия массива
      console.log(copy); // [1, 2, 3]
      \`\`\`
      `,
    },
    {
      id: 100833,
      question: "Как отсортировать массив?",
      answer: `
      **Метод \`sort\`:**
      - Сортирует массив на месте (изменяет исходный массив).
      - Для чисел используйте функцию сравнения.

      **Пример:**
      \`\`\`javascript
      const arr = [3, 1, 2];

      // Сортировка строк:
      const sortedStrings = ['b', 'c', 'a'].sort();
      console.log(sortedStrings); // ['a', 'b', 'c']

      // Сортировка чисел:
      const sortedNumbers = arr.sort((a, b) => a - b);
      console.log(sortedNumbers); // [1, 2, 3]
      \`\`\`
      `,
    },
    {
      id: 100834,
      question: "Что такое многомерные массивы?",
      answer: `
      **Многомерные массивы:**
      - Это массивы, содержащие другие массивы.

      **Пример:**
      \`\`\`javascript
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];

      console.log(matrix[0][1]); // 2
      console.log(matrix[2][2]); // 9
      \`\`\`
      `,
    },
  ],
};
