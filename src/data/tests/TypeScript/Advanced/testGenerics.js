export const testGenerics = {
  id: 100625,
  title: "Generic (дженерик)",
  questions: [
    {
      id: 100626,
      question: "Что такое дженерики (Generics)?",
      answer: `
      **Дженерики (Generics):**
      - Это механизм, позволяющий создавать компоненты (функции, классы, интерфейсы), которые работают с различными типами данных.
      - Обеспечивают повторное использование кода без потери типобезопасности.

      **Пример:**
      \`\`\`typescript
      function identity<T>(arg: T): T {
        return arg;
      }

      const output1 = identity<string>('Hello'); // 'Hello'
      const output2 = identity<number>(42); // 42
      \`\`\`
      `,
    },
    {
      id: 100627,
      question: "Зачем нужны дженерики?",
      answer: `
      **Цели использования дженериков:**
      1. **Типобезопасность:**
         - Позволяют явно указывать типы данных, что помогает избежать ошибок во время выполнения.
      2. **Повторное использование кода:**
         - Один дженерик может работать с разными типами данных.
      3. **Гибкость:**
         - Упрощают работу с коллекциями и структурами данных.

      **Пример:**
      \`\`\`typescript
      function reverseArray<T>(items: T[]): T[] {
        return items.reverse();
      }

      const numbers = reverseArray<number>([1, 2, 3]); // [3, 2, 1]
      const strings = reverseArray<string>(['a', 'b', 'c']); // ['c', 'b', 'a']
      \`\`\`
      `,
    },
    {
      id: 100628,
      question: "Как использовать дженерики в функциях?",
      answer: `
      **Использование дженериков в функциях:**
      - Указывается параметр типа (например, \`<T>\`) при определении функции.
      - Параметр типа используется для аргументов и возвращаемого значения.

      **Пример:**
      \`\`\`typescript
      function getValue<T>(value: T): T {
        return value;
      }

      const numberValue = getValue<number>(42); // 42
      const stringValue = getValue<string>('Hello'); // 'Hello'
      \`\`\`
      `,
    },
    {
      id: 100629,
      question: "Как использовать дженерики в классах?",
      answer: `
      **Использование дженериков в классах:**
      - Параметр типа указывается после имени класса.
      - Параметр типа используется для свойств, методов и аргументов.

      **Пример:**
      \`\`\`typescript
      class Box<T> {
        private value: T;

        constructor(value: T) {
          this.value = value;
        }

        getValue(): T {
          return this.value;
        }
      }

      const numberBox = new Box<number>(42);
      console.log(numberBox.getValue()); // 42

      const stringBox = new Box<string>('Hello');
      console.log(stringBox.getValue()); // 'Hello'
      \`\`\`
      `,
    },
    {
      id: 100630,
      question: "Как ограничить типы в дженериках?",
      answer: `
      **Ограничение типов:**
      - Используйте ключевое слово \`extends\`, чтобы ограничить типы, которые могут использоваться.

      **Пример:**
      \`\`\`typescript
      function getLength<T extends { length: number }>(item: T): number {
        return item.length;
      }

      console.log(getLength('Hello')); // 5
      console.log(getLength([1, 2, 3])); // 3
      // console.log(getLength(42)); // Ошибка: число не имеет свойства 'length'
      \`\`\`
      `,
    },
    {
      id: 100631,
      question: "Что такое дженерик-интерфейс?",
      answer: `
      **Дженерик-интерфейс:**
      - Интерфейс, который работает с различными типами данных через параметры типа.

      **Пример:**
      \`\`\`typescript
      interface KeyValuePair<K, V> {
        key: K;
        value: V;
      }

      const pair1: KeyValuePair<string, number> = { key: 'age', value: 25 };
      const pair2: KeyValuePair<number, string> = { key: 1, value: 'one' };
      \`\`\`
      `,
    },
    {
      id: 100632,
      question: "Как использовать несколько параметров типа в дженериках?",
      answer: `
      **Несколько параметров типа:**
      - Можно указать несколько параметров типа через запятую.

      **Пример:**
      \`\`\`typescript
      function combineArrays<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
        return [...arr1, ...arr2];
      }

      const result = combineArrays<number, string>([1, 2], ['a', 'b']);
      console.log(result); // [1, 2, 'a', 'b']
      \`\`\`
      `,
    },
    {
      id: 100633,
      question: "Какие преимущества дженериков перед any?",
      answer: `
      **Преимущества дженериков:**
      1. **Типобезопасность:**
         - \`any\` отключает проверку типов, тогда как дженерики сохраняют контроль над типами.
      2. **Повторное использование:**
         - Дженерики позволяют создавать универсальные компоненты без потери типизации.
      3. **Читаемость кода:**
         - Явные типы делают код более понятным.

      **Пример:**
      \`\`\`typescript
      function processAny(data: any): any {
        return data;
      }

      function processGeneric<T>(data: T): T {
        return data;
      }

      const result1 = processAny(42); // Тип неизвестен
      const result2 = processGeneric<number>(42); // Тип number
      \`\`\`
      `,
    },
    {
      id: 100634,
      question: "Как использовать дженерики с массивами?",
      answer: `
      **Дженерики с массивами:**
      - Можно указать тип элементов массива.

      **Пример:**
      \`\`\`typescript
      function firstElement<T>(arr: T[]): T | undefined {
        return arr[0];
      }

      const numbers = [1, 2, 3];
      const strings = ['a', 'b', 'c'];

      console.log(firstElement(numbers)); // 1
      console.log(firstElement(strings)); // 'a'
      \`\`\`
      `,
    },
    {
      id: 100635,
      question: "Как использовать дженерики с Promise?",
      answer: `
      **Дженерики с Promise:**
      - \`Promise<T>\` указывает тип данных, которые будут разрешены.

      **Пример:**
      \`\`\`typescript
      function fetchData<T>(url: string): Promise<T> {
        return fetch(url).then((response) => response.json());
      }

      fetchData<{ name: string }>('https://api.example.com/user') 
        .then((user) => console.log(user.name));
      \`\`\`
      `,
    },
  ],
};
