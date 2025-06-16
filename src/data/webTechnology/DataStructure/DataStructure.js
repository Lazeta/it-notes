export const DataStructure = {
  id: 222,
  title: "Data Structures (Структуры данных)",
  children: [
    {
      title: "Что такое структуры данных?",
      type: "text",
      description: `
        <p><strong>Структуры данных</strong> — это способы организации и хранения данных, которые позволяют эффективно управлять ими. Они определяют, как данные организованы, доступны и модифицируются.</p>
        <p>Основные категории структур данных:</p>
        <ul>
          <li><strong>Примитивные:</strong> Числа, строки, логические значения и т.д.</li>
          <li><strong>Сложные:</strong> Массивы, объекты, списки, стеки, очереди, деревья, графы и т.д.</li>
        </ul>
      `,
    },
    {
      title: "Массив (Array)",
      type: "text",
      description: `
        <p><strong>Массив</strong> — это упорядоченная коллекция элементов, доступ к которым осуществляется по индексу.</p>
        <ul>
          <li><strong>Характеристики:</strong>
            <ul>
              <li>Индексация начинается с 0.</li>
              <li>Элементы могут быть любого типа.</li>
              <li>Размер массива может изменяться динамически.</li>
            </ul>
          </li>
          <li><strong>Операции:</strong> Добавление, удаление, поиск, перебор.</li>
        </ul>
      `,
      code: `
const arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
arr.pop();   // [1, 2, 3]
console.log(arr[0]); // 1
      `,
    },
    {
      title: "Стек (Stack)",
      type: "text",
      description: `
        <p><strong>Стек</strong> — это структура данных, работающая по принципу LIFO (Last In, First Out). Последний добавленный элемент извлекается первым.</p>
        <ul>
          <li><strong>Операции:</strong>
            <ul>
              <li><code>push</code>: Добавляет элемент на вершину стека.</li>
              <li><code>pop</code>: Удаляет элемент с вершины стека.</li>
              <li><code>peek</code>: Возвращает элемент на вершине стека без его удаления.</li>
            </ul>
          </li>
        </ul>
      `,
      code: `
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
console.log(stack.peek()); // 1
      `,
    },
    {
      title: "Очередь (Queue)",
      type: "text",
      description: `
        <p><strong>Очередь</strong> — это структура данных, работающая по принципу FIFO (First In, First Out). Первый добавленный элемент извлекается первым.</p>
        <ul>
          <li><strong>Операции:</strong>
            <ul>
              <li><code>enqueue</code>: Добавляет элемент в конец очереди.</li>
              <li><code>dequeue</code>: Удаляет элемент из начала очереди.</li>
              <li><code>peek</code>: Возвращает первый элемент без его удаления.</li>
            </ul>
          </li>
        </ul>
      `,
      code: `
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1
console.log(queue.peek());    // 2
      `,
    },
    {
      title: "Связанный список (Linked List)",
      type: "text",
      description: `
        <p><strong>Связанный список</strong> — это структура данных, состоящая из узлов, где каждый узел содержит значение и ссылку на следующий узел.</p>
        <ul>
          <li><strong>Типы:</strong>
            <ul>
              <li><strong>Односвязный список:</strong> Каждый узел ссылается только на следующий узел.</li>
              <li><strong>Двусвязный список:</strong> Каждый узел ссылается на предыдущий и следующий узлы.</li>
            </ul>
          </li>
          <li><strong>Операции:</strong> Добавление, удаление, поиск.</li>
        </ul>
      `,
      code: `
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
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
console.log(list.find(2)); // Node { value: 2, next: null }
      `,
    },
    {
      title: "Хэш-таблица (Hash Table)",
      type: "text",
      description: `
        <p><strong>Хэш-таблица</strong> — это структура данных, которая хранит пары ключ-значение. Ключи преобразуются в индексы с помощью хэш-функции.</p>
        <ul>
          <li><strong>Преимущества:</strong>
            <ul>
              <li>Быстрый доступ к данным по ключу.</li>
              <li>Эффективное добавление, удаление и поиск.</li>
            </ul>
          </li>
          <li><strong>Недостатки:</strong>
            <ul>
              <li>Коллизии (когда разные ключи дают одинаковый хэш).</li>
              <li>Потребление памяти.</li>
            </ul>
          </li>
        </ul>
      `,
      code: `
class HashTable {
  constructor(size = 50) {
    this.buckets = new Array(size);
  }
  hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.buckets.length;
  }
  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    this.buckets[index].push([key, value]);
  }
  get(key) {
    const index = this.hash(key);
    if (this.buckets[index]) {
      for (let [k, v] of this.buckets[index]) {
        if (k === key) return v;
      }
    }
    return null;
  }
}

const table = new HashTable();
table.set("name", "Alice");
console.log(table.get("name")); // Alice
      `,
    },
    {
      title: "Дерево (Tree)",
      type: "text",
      description: `
        <p><strong>Дерево</strong> — это иерархическая структура данных, состоящая из узлов, где каждый узел имеет родительский и дочерние узлы.</p>
        <ul>
          <li><strong>Типы деревьев:</strong>
            <ul>
              <li><strong>Бинарное дерево:</strong> Каждый узел имеет не более двух дочерних узлов.</li>
              <li><strong>Бинарное дерево поиска (BST):</strong> Левое поддерево содержит значения меньше текущего узла, а правое — больше.</li>
            </ul>
          </li>
          <li><strong>Операции:</strong> Поиск, вставка, удаление.</li>
        </ul>
      `,
      code: `
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            break;
          }
          current = current.right;
        }
      }
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
console.log(bst.root.value); // 10
      `,
    },
    {
      title: "Граф (Graph)",
      type: "text",
      description: `
        <p><strong>Граф</strong> — это структура данных, состоящая из вершин (узлов) и рёбер, которые соединяют эти вершины.</p>
        <ul>
          <li><strong>Типы графов:</strong>
            <ul>
              <li><strong>Ориентированный граф:</strong> Рёбра имеют направление.</li>
              <li><strong>Неориентированный граф:</strong> Рёбра не имеют направления.</li>
            </ul>
          </li>
          <li><strong>Представление:</strong>
            <ul>
              <li>Список смежности.</li>
              <li>Матрица смежности.</li>
            </ul>
          </li>
        </ul>
      `,
      code: `
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addEdge("A", "B");
console.log(graph.adjacencyList); // { A: ["B"], B: ["A"] }
      `,
    },
    {
      title: "Заключение",
      type: "text",
      description: `
        <p>Структуры данных — это фундаментальные концепции программирования, которые помогают эффективно решать задачи. Выбор структуры данных зависит от конкретной задачи и требований к производительности.</p>
      `,
    },
  ],
};
