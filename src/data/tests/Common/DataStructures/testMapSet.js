export const testMapSet = {
  id: 101100,
  title: "Map и Set",
  questions: [
    {
      id: 101101,
      question: "Что такое Map в JavaScript?",
      answer: `
      **Map:**
      - Это коллекция ключ-значение, где ключи могут быть любого типа (включая объекты, функции и примитивы).
      - В отличие от объектов, ключи в \`Map\` не ограничиваются строками или символами.
      - Порядок элементов сохраняется в порядке их добавления.

      **Пример:**
      \`\`\`javascript
      const map = new Map();
      map.set('name', 'Alice');
      map.set(42, 'Answer');
      map.set({}, 'Empty Object');

      console.log(map.get('name')); // 'Alice'
      console.log(map.get(42)); // 'Answer'
      console.log(map.size); // 3
      \`\`\`
      `,
    },
    {
      id: 101102,
      question: "Как создать Map и добавить элементы?",
      answer: `
      **Создание и добавление элементов:**
      - Используйте конструктор \`new Map()\` для создания коллекции.
      - Метод \`set(key, value)\` добавляет пару ключ-значение.

      **Пример:**
      \`\`\`javascript
      const map = new Map();
      map.set('id', 1);
      map.set('active', true);

      // Или инициализация через массив:
      const mapFromEntries = new Map([
        ['name', 'Bob'],
        ['age', 30],
      ]);

      console.log(mapFromEntries.get('name')); // 'Bob'
      \`\`\`
      `,
    },
    {
      id: 101103,
      question: "Как удалить элемент из Map?",
      answer: `
      **Удаление элементов:**
      - Используйте метод \`delete(key)\`, чтобы удалить элемент по ключу.

      **Пример:**
      \`\`\`javascript
      const map = new Map();
      map.set('name', 'Alice');
      map.set('age', 25);

      map.delete('age'); // Удаляем элемент с ключом 'age'
      console.log(map.has('age')); // false
      \`\`\`
      `,
    },
    {
      id: 101104,
      question: "Что такое Set в JavaScript?",
      answer: `
      **Set:**
      - Это коллекция уникальных значений.
      - Значения могут быть любого типа (примитивы и объекты).
      - Дубликаты автоматически игнорируются.

      **Пример:**
      \`\`\`javascript
      const set = new Set();
      set.add(1);
      set.add(2);
      set.add(2); // Этот элемент будет проигнорирован

      console.log(set.size); // 2
      console.log([...set]); // [1, 2]
      \`\`\`
      `,
    },
    {
      id: 101105,
      question: "Как создать Set и добавить элементы?",
      answer: `
      **Создание и добавление элементов:**
      - Используйте конструктор \`new Set()\` для создания коллекции.
      - Метод \`add(value)\` добавляет значение.

      **Пример:**
      \`\`\`javascript
      const set = new Set();
      set.add('apple');
      set.add('banana');
      set.add('apple'); // Дубликат игнорируется

      // Или инициализация через массив:
      const setFromArray = new Set(['orange', 'grape', 'orange']);

      console.log(setFromArray.size); // 2
      console.log([...setFromArray]); // ['orange', 'grape']
      \`\`\`
      `,
    },
    {
      id: 101106,
      question: "Как проверить наличие элемента в Set?",
      answer: `
      **Проверка наличия:**
      - Используйте метод \`has(value)\`.

      **Пример:**
      \`\`\`javascript
      const set = new Set(['apple', 'banana']);
      console.log(set.has('apple')); // true
      console.log(set.has('cherry')); // false
      \`\`\`
      `,
    },
    {
      id: 101107,
      question: "Как удалить элемент из Set?",
      answer: `
      **Удаление элементов:**
      - Используйте метод \`delete(value)\`.

      **Пример:**
      \`\`\`javascript
      const set = new Set(['apple', 'banana']);
      set.delete('apple'); // Удаляем элемент 'apple'

      console.log(set.has('apple')); // false
      \`\`\`
      `,
    },
    {
      id: 101108,
      question: "Как перебрать элементы в Map?",
      answer: `
      **Перебор элементов:**
      - \`for...of\` цикл.
      - Методы \`keys()\`, \`values()\`, \`entries()\`.
      - \`forEach()\`.

      **Пример:**
      \`\`\`javascript
      const map = new Map([
        ['name', 'Alice'],
        ['age', 25],
      ]);

      // for...of
      for (let [key, value] of map) {
        console.log(\`\${key}: \${value}\`);
      }

      // forEach
      map.forEach((value, key) => {
        console.log(\`\${key}: \${value}\`);
      });
      \`\`\`
      `,
    },
    {
      id: 101109,
      question: "Как перебрать элементы в Set?",
      answer: `
      **Перебор элементов:**
      - \`for...of\` цикл.
      - \`forEach()\`.

      **Пример:**
      \`\`\`javascript
      const set = new Set(['apple', 'banana', 'cherry']);

      // for...of
      for (let item of set) {
        console.log(item);
      }

      // forEach
      set.forEach((item) => {
        console.log(item);
      });
      \`\`\`
      `,
    },
    {
      id: 101110,
      question: "В чем разница между Map и объектом?",
      answer: `
      **Различия:**
      1. **Ключи:**
         - В \`Map\` ключи могут быть любого типа.
         - В объектах ключи ограничены строками и символами.
      2. **Порядок элементов:**
         - \`Map\` сохраняет порядок добавления элементов.
         - Объекты не гарантируют порядок свойств.
      3. **Размер:**
         - Размер \`Map\` можно узнать через \`size\`.
         - Для объектов нужно использовать \`Object.keys(obj).length\`.
      4. **Производительность:**
         - \`Map\` оптимизирован для частого добавления/удаления элементов.

      **Пример:**
      \`\`\`javascript
      const map = new Map();
      map.set({}, 'Object as key');

      const obj = {};
      obj[{}] = 'Stringified key';

      console.log(map.get({})); // undefined (разные объекты)
      console.log(obj[{}]); // 'Stringified key' (ключ преобразован в строку)
      \`\`\`
      `,
    },
    {
      id: 101111,
      question: "В чем разница между Set и массивом?",
      answer: `
      **Различия:**
      1. **Уникальность:**
         - \`Set\` хранит только уникальные значения.
         - Массив может содержать дубликаты.
      2. **Методы:**
         - \`Set\` предоставляет методы \`add\`, \`delete\`, \`has\`.
         - Массивы имеют богатый набор методов (\`push\`, \`pop\`, \`map\`, \`filter\` и т.д.).
      3. **Производительность:**
         - \`Set\` быстрее при проверке наличия элемента (\`has\`).

      **Пример:**
      \`\`\`javascript
      const array = [1, 2, 2, 3];
      const set = new Set(array);

      console.log(array); // [1, 2, 2, 3]
      console.log([...set]); // [1, 2, 3]
      \`\`\`
      `,
    },
    {
      id: 101112,
      question: "Как очистить Map или Set?",
      answer: `
      **Очистка коллекции:**
      - Используйте метод \`clear()\`.

      **Пример:**
      \`\`\`javascript
      const map = new Map();
      map.set('name', 'Alice');
      map.clear(); // Очищаем коллекцию
      console.log(map.size); // 0

      const set = new Set([1, 2, 3]);
      set.clear(); // Очищаем коллекцию
      console.log(set.size); // 0
      \`\`\`
      `,
    },
    {
      id: 101113,
      question: "Как преобразовать Map в объект?",
      answer: `
      **Преобразование Map в объект:**
      - Используйте метод \`Object.fromEntries()\`.

      **Пример:**
      \`\`\`javascript
      const map = new Map([
        ['name', 'Alice'],
        ['age', 25],
      ]);

      const obj = Object.fromEntries(map);
      console.log(obj); // { name: 'Alice', age: 25 }
      \`\`\`
      `,
    },
    {
      id: 101114,
      question: "Как преобразовать Set в массив?",
      answer: `
      **Преобразование Set в массив:**
      - Используйте оператор \`[...spread]\`.

      **Пример:**
      \`\`\`javascript
      const set = new Set([1, 2, 3]);
      const array = [...set];
      console.log(array); // [1, 2, 3]
      \`\`\`
      `,
    },
  ],
};
