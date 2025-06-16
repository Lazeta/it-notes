export const testVirtualDom = {
  id: 100200,
  title: "Virtual Dom (Виртуальный Дом)",
  questions: [
    {
      id: 100201,
      question: "Что такое Virtual DOM?",
      answer: `
      **Virtual DOM** — это легковесная копия реального DOM, представленная в виде JavaScript-объектов. 
      Она используется для оптимизации обновлений интерфейса, минимизируя прямые изменения реального DOM.

      **Преимущества:**
      - Уменьшает количество дорогостоящих операций с реальным DOM.
      - Позволяет эффективно сравнивать и обновлять только те части интерфейса, которые изменились.

      **Пример:**
      \`\`\`javascript
      // Реальный DOM:
      <div id="app">
        <p>Hello, World!</p>
      </div>

      // Virtual DOM:
      const virtualDOM = {
        type: 'div',
        props: { id: 'app' },
        children: [
          { type: 'p', props: {}, children: ['Hello, World!'] },
        ],
      };
      \`\`\`
      `,
    },
    {
      id: 100202,
      question: "Как работает Virtual DOM?",
      answer: `
      **Процесс работы Virtual DOM:**
      1. **Создание:** Фреймворк создает виртуальное представление DOM на основе компонентов.
      2. **Сравнение:** При изменении состояния создается новое виртуальное дерево, которое сравнивается с предыдущим (diffing).
      3. **Обновление:** Определяются минимальные изменения, которые нужно применить к реальному DOM.
      4. **Рендеринг:** Применяются изменения к реальному DOM.

      **Пример:**
      \`\`\`javascript
      // React автоматически использует Virtual DOM:
      function App() {
        const [count, setCount] = React.useState(0);

        return (
          <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
          </div>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 100203,
      question: "Зачем нужен Virtual DOM?",
      answer: `
      **Причины использования Virtual DOM:**
      1. **Оптимизация производительности:** Изменения в реальном DOM дороги, особенно при частых обновлениях.
      2. **Минимизация операций:** Virtual DOM позволяет вычислить минимальный набор изменений перед обновлением реального DOM.
      3. **Кросс-платформенность:** Virtual DOM может быть использован не только в браузерах, но и в других средах (например, серверный рендеринг).

      **Пример:**
      \`\`\`javascript
      // Без Virtual DOM:
      document.getElementById('app').innerHTML = '<p>New content</p>'; // Полная перерисовка

      // С Virtual DOM:
      // React обновляет только измененные части интерфейса.
      \`\`\`
      `,
    },
    {
      id: 100204,
      question: "Как происходит сравнение (diffing) в Virtual DOM?",
      answer: `
      **Diffing (сравнение):**
      - Алгоритм сравнения двух деревьев Virtual DOM для определения минимальных изменений.
      - React использует стратегию "разделяй и властвуй":
        1. **Сравнение типов элементов:** Если тип элемента изменился, React заменяет весь поддерево.
        2. **Сравнение атрибутов:** Обновляются только измененные атрибуты.
        3. **Сравнение дочерних элементов:** Используется ключ (\`key\`) для идентификации элементов.

      **Пример:**
      \`\`\`javascript
      // До:
      <ul>
        <li key="1">Item 1</li>
        <li key="2">Item 2</li>
      </ul>

      // После:
      <ul>
        <li key="1">Item 1</li>
        <li key="3">Item 3</li>
      </ul>

      // React определяет, что второй элемент изменился, и обновляет только его.
      \`\`\`
      `,
    },
    {
      id: 100205,
      question: "Какие преимущества Virtual DOM перед реальным DOM?",
      answer: `
      **Преимущества Virtual DOM:**
      1. **Производительность:** Меньше операций с реальным DOM, что ускоряет рендеринг.
      2. **Удобство разработки:** Разработчики могут описывать интерфейс декларативно, без ручного управления DOM.
      3. **Кросс-платформенность:** Virtual DOM может быть использован в браузерах, на сервере и даже в мобильных приложениях.

      **Пример:**
      \`\`\`javascript
      // Реальный DOM требует ручного управления:
      const element = document.createElement('div');
      element.textContent = 'Hello';
      document.body.appendChild(element);

      // Virtual DOM управляет DOM автоматически:
      ReactDOM.render(<div>Hello</div>, document.getElementById('root'));
      \`\`\`
      `,
    },
    {
      id: 100206,
      question: "Какие недостатки Virtual DOM?",
      answer: `
      **Недостатки Virtual DOM:**
      1. **Дополнительные вычисления:** Сравнение деревьев требует времени и ресурсов.
      2. **Не всегда оптимально:** В некоторых случаях прямое управление реальным DOM может быть быстрее.
      3. **Сложность реализации:** Создание и поддержка алгоритма diffing требует усилий.

      **Пример:**
      \`\`\`javascript
      // В простых случаях прямое управление реальным DOM может быть эффективнее:
      const element = document.getElementById('app');
      element.textContent = 'Updated'; // Нет необходимости в Virtual DOM.
      \`\`\`
      `,
    },
    {
      id: 100207,
      question: "Как Virtual DOM помогает в React?",
      answer: `
      **Virtual DOM в React:**
      - React использует Virtual DOM для эффективного обновления интерфейса.
      - Компоненты React описывают, как должен выглядеть интерфейс, а React автоматически обновляет реальный DOM.

      **Пример:**
      \`\`\`javascript
      function Counter() {
        const [count, setCount] = React.useState(0);

        return (
          <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
          </div>
        );
      }

      ReactDOM.render(<Counter />, document.getElementById('root'));
      \`\`\`
      `,
    },
    {
      id: 100208,
      question: "Что такое reconciliation в контексте Virtual DOM?",
      answer: `
      **Reconciliation (согласование):**
      - Процесс сравнения текущего и нового Virtual DOM для определения минимальных изменений.
      - React использует алгоритм diffing для выполнения согласования.

      **Пример:**
      \`\`\`javascript
      // React автоматически выполняет reconciliation:
      function App() {
        const [show, setShow] = React.useState(true);

        return (
          <div>
            {show && <p>Hello, World!</p>}
            <button onClick={() => setShow(!show)}>Toggle</button>
          </div>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 100209,
      question: "Как ключи (keys) помогают в работе с Virtual DOM?",
      answer: `
      **Ключи (keys):**
      - Ключи помогают React идентифицировать элементы в списке.
      - Они обеспечивают стабильность идентификации элементов при обновлении списка.

      **Пример:**
      \`\`\`javascript
      const items = [
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
      ];

      function List() {
        return (
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 100210,
      question: "Какие есть альтернативы Virtual DOM?",
      answer: `
      **Альтернативы Virtual DOM:**
      1. **Svelte:** Использует компиляцию во время сборки, минуя Virtual DOM.
      2. **Vue.js:** Использует реактивную систему, которая отслеживает изменения напрямую.
      3. **Solid.js:** Использует реактивные сигналы вместо Virtual DOM.

      **Пример Svelte:**
      \`\`\`svelte
      <script>
        let count = 0;
      </script>

      <button on:click={() => count++}>Count: {count}</button>
      \`\`\`
      `,
    },
  ],
};
