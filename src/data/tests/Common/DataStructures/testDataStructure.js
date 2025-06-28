export const testDataStructure = {
  id: 100300,
  title: "Data Structure (Структуры Данных)",
  questions: [
    {
      id: 100301,
      question: "Что такое структуры данных?",
      answer: `
      **Структуры данных** — это способы организации и хранения данных, которые позволяют эффективно управлять ими.
      - Они определяют, как данные связаны между собой и как к ним можно получить доступ.
      - В JavaScript часто используются массивы, объекты, множества (Set), словари (Map) и другие структуры.

      **Пример:**
      \`\`\`javascript
      // Массив:
      const array = [1, 2, 3];

      // Объект:
      const object = { key: 'value' };

      // Множество:
      const set = new Set([1, 2, 3]);

      // Словарь:
      const map = new Map();
      map.set('key', 'value');
      \`\`\`
      `,
    },
    {
      id: 100302,
      question: "Какие основные структуры данных существуют в JavaScript?",
      answer: `
      **Основные структуры данных в JavaScript:**
      1. **Массивы (\`Array\`):**
         - Упорядоченные коллекции элементов.
         - Поддерживают динамическое изменение размера.

      2. **Объекты (\`Object\`):**
         - Коллекции пар ключ-значение.
         - Используются для хранения данных с произвольной структурой.

      3. **Множества (\`Set\`):**
         - Коллекции уникальных значений.
         - Порядок элементов сохраняется.

      4. **Словари (\`Map\`):**
         - Коллекции пар ключ-значение, где ключ может быть любого типа.

      5. **Стек (LIFO):**
         - Реализуется через массив с методами \`push()\` и \`pop()\`.

      6. **Очередь (FIFO):**
         - Реализуется через массив с методами \`push()\` и \`shift()\`.

      **Пример:**
      \`\`\`javascript
      // Стек:
      const stack = [];
      stack.push(1); // [1]
      stack.push(2); // [1, 2]
      stack.pop();   // [1]

      // Очередь:
      const queue = [];
      queue.push(1); // [1]
      queue.push(2); // [1, 2]
      queue.shift(); // [2]
      \`\`\`
      `,
    },
    {
      id: 100303,
      question: "Что такое массив и как он работает?",
      answer: `
      **Массив (\`Array\`):**
      - Упорядоченная коллекция элементов.
      - Элементы могут быть любого типа (числа, строки, объекты и т.д.).
      - Индексация начинается с 0.

      **Методы массивов:**
      - \`push()\`: Добавляет элемент в конец.
      - \`pop()\`: Удаляет последний элемент.
      - \`shift()\`: Удаляет первый элемент.
      - \`unshift()\`: Добавляет элемент в начало.
      - \`slice()\`, \`splice()\`: Работа с частями массива.

      **Пример:**
      \`\`\`javascript
      const array = [1, 2, 3];
      array.push(4); // [1, 2, 3, 4]
      array.pop();   // [1, 2, 3]
      console.log(array[0]); // 1
      \`\`\`
      `,
    },
    {
      id: 100304,
      question: "Что такое объект и как он работает?",
      answer: `
      **Объект (\`Object\`):**
      - Коллекция пар ключ-значение.
      - Ключи обычно строковые (или символы), значения могут быть любого типа.

      **Методы объектов:**
      - \`Object.keys()\`: Возвращает массив ключей.
      - \`Object.values()\`: Возвращает массив значений.
      - \`Object.entries()\`: Возвращает массив пар ключ-значение.

      **Пример:**
      \`\`\`javascript
      const obj = { name: 'Alice', age: 30 };
      console.log(obj.name); // Alice

      console.log(Object.keys(obj)); // ['name', 'age']
      console.log(Object.values(obj)); // ['Alice', 30]
      console.log(Object.entries(obj)); // [['name', 'Alice'], ['age', 30]]
      \`\`\`
      `,
    },
    {
      id: 100305,
      question: "Что такое множество (`Set`) и зачем оно нужно?",
      answer: `
      **Множество (\`Set\`):**
      - Коллекция уникальных значений.
      - Порядок элементов сохраняется.
      - Полезно для удаления дубликатов из массива.

      **Методы множества:**
      - \`add()\`: Добавляет значение.
      - \`delete()\`: Удаляет значение.
      - \`has()\`: Проверяет наличие значения.

      **Пример:**
      \`\`\`javascript
      const set = new Set([1, 2, 3, 3]);
      console.log(set); // Set {1, 2, 3}

      set.add(4);
      console.log(set.has(2)); // true
      set.delete(2);
      console.log(set); // Set {1, 3, 4}
      \`\`\`
      `,
    },
    {
      id: 100306,
      question: "Что такое словарь (`Map`) и чем он отличается от объекта?",
      answer: `
      **Словарь (\`Map\`):**
      - Коллекция пар ключ-значение.
      - Ключи могут быть любого типа (включая объекты, функции и примитивы).

      **Отличия от объекта:**
      - В объектах ключи всегда строковые или символьные.
      - В \`Map\` ключи могут быть любого типа.
      - \`Map\` сохраняет порядок добавления элементов.

      **Пример:**
      \`\`\`javascript
      const map = new Map();
      map.set('name', 'Alice');
      map.set(42, 'The answer');
      map.set({}, 'Empty object');

      console.log(map.get('name')); // Alice
      console.log(map.get(42));     // The answer
      console.log(map.size);        // 3
      \`\`\`
      `,
    },
    {
      id: 100307,
      question: "Что такое стек (LIFO) и как его реализовать?",
      answer: `
      **Стек (LIFO — Last In, First Out):**
      - Структура данных, где последний добавленный элемент извлекается первым.
      - Реализуется через массив с методами \`push()\` и \`pop()\`.

      **Пример:**
      \`\`\`javascript
      const stack = [];
      stack.push('first'); // ['first']
      stack.push('second'); // ['first', 'second']
      stack.push('third');  // ['first', 'second', 'third']

      console.log(stack.pop()); // 'third'
      console.log(stack.pop()); // 'second'
      \`\`\`
      `,
    },
    {
      id: 100308,
      question: "Что такое очередь (FIFO) и как её реализовать?",
      answer: `
      **Очередь (FIFO — First In, First Out):**
      - Структура данных, где первый добавленный элемент извлекается первым.
      - Реализуется через массив с методами \`push()\` и \`shift()\`.

      **Пример:**
      \`\`\`javascript
      const queue = [];
      queue.push('first');  // ['first']
      queue.push('second'); // ['first', 'second']
      queue.push('third');  // ['first', 'second', 'third']

      console.log(queue.shift()); // 'first'
      console.log(queue.shift()); // 'second'
      \`\`\`
      `,
    },
    {
      id: 100309,
      question: "Что такое связный список и как его реализовать?",
      answer: `
      **Связный список:**
      - Структура данных, состоящая из узлов, где каждый узел содержит значение и ссылку на следующий узел.
      - Преимущество: Легкость добавления/удаления элементов.

      **Пример реализации:**
      \`\`\`javascript
      class Node {
        constructor(value) {
          this.value = value;
          this.next = null;
        }
      }

      class LinkedList {
        constructor() {
          this.head = null;
        }

        add(value) {
          const newNode = new Node(value);
          if (!this.head) {
            this.head = newNode;
          } else {
            let current = this.head;
            while (current.next) {
              current = current.next;
            }
            current.next = newNode;
          }
        }

        print() {
          let current = this.head;
          while (current) {
            console.log(current.value);
            current = current.next;
          }
        }
      }

      const list = new LinkedList();
      list.add(1);
      list.add(2);
      list.add(3);
      list.print(); // 1, 2, 3
      \`\`\`
      `,
    },
    {
      id: 100310,
      question: "Что такое дерево и как его использовать?",
      answer: `
      **Дерево:**
      - Иерархическая структура данных, состоящая из узлов.
      - Каждый узел имеет значение и ссылки на дочерние узлы.
      - Примеры использования: DOM, файловые системы, алгоритмы поиска.

      **Пример реализации:**
      \`\`\`javascript
      class TreeNode {
        constructor(value) {
          this.value = value;
          this.children = [];
        }

        addChild(value) {
          const childNode = new TreeNode(value);
          this.children.push(childNode);
          return childNode;
        }

        print(level = 0) {
          console.log(' '.repeat(level * 2) + this.value);
          this.children.forEach((child) => child.print(level + 1));
        }
      }

      const root = new TreeNode('Root');
      const child1 = root.addChild('Child 1');
      const child2 = root.addChild('Child 2');
      child1.addChild('Grandchild 1');
      child2.addChild('Grandchild 2');

      root.print();
      /*
      Root
        Child 1
          Grandchild 1
        Child 2
          Grandchild 2
      */
      \`\`\`
      `,
    },
  ],
};
