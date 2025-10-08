export const testRenderReact = {
  id: 103100,
  title: "Rendering in React (рендеринг)",
  questions: [
    {
      id: 103101,
      question: "Что такое рендеринг в React?",
      answer: `
**Рендеринг:**
- Это процесс преобразования JSX или компонентов React в реальные DOM-элементы, которые отображаются в браузере.
- React использует виртуальный DOM для оптимизации рендеринга.

**Пример:**
\`\`\`javascript
function App() {
  return <h1>Hello, World!</h1>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
\`\`\`
`,
    },
    {
      id: 103102,
      question: "Как работает ReactDOM.render?",
      answer: `
**ReactDOM.render:**
- Метод \`ReactDOM.render\` используется для рендеринга React-компонента в DOM-контейнер.
- В React 18+ рекомендуется использовать \`createRoot\`.

**Пример (React 17 и ниже):**
\`\`\`javascript
ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`

**Пример (React 18+):**
\`\`\`javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
\`\`\`
`,
    },
    {
      id: 103103,
      question: "Что такое Virtual DOM и как он работает?",
      answer: `
**Virtual DOM:**
- Легковесная копия реального DOM, хранящаяся в памяти.
- React сравнивает изменения в Virtual DOM и обновляет только те части реального DOM, которые изменились.

**Как это работает:**
1. Создается новое дерево Virtual DOM.
2. React сравнивает его с предыдущим деревом (diffing algorithm).
3. Обновляются только измененные узлы в реальном DOM.

**Преимущества:**
- Уменьшение количества прямых операций с DOM.
- Повышение производительности.
`,
    },
    {
      id: 103104,
      question: "Что такое Reconciliation (согласование) в React?",
      answer: `
**Reconciliation:**
- Процесс сравнения нового и старого дерева Virtual DOM для определения изменений.
- Реализован через алгоритм diffing.

**Принципы работы:**
1. **Элементы одного типа:** Сравниваются атрибуты, обновляются только изменения.
2. **Разные типы элементов:** Старый элемент удаляется, новый добавляется.
3. **Списки элементов:** Используются ключи (\`key\`) для идентификации элементов.

**Пример:**
\`\`\`javascript
function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
\`\`\`
`,
    },
    {
      id: 103105,
      question: "Как работает React.memo?",
      answer: `
**React.memo:**
- Это HOC (High-Order Component), который мемоизирует функциональные компоненты.
- Предотвращает лишние перерисовки, если пропсы не изменились.

**Пример:**
\`\`\`javascript
const MemoizedComponent = React.memo(function MyComponent({ prop }) {
  console.log('Rendered');
  return <p>{prop}</p>;
});

function ParentComponent() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <MemoizedComponent prop="Static Prop" />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 103106,
      question: "Что такое Conditional Rendering (условный рендеринг)?",
      answer: `
**Conditional Rendering:**
- Отображение компонентов на основе условий.

**Варианты реализации:**
1. **Тернарный оператор:**
   \`\`\`javascript
   function App({ isLoggedIn }) {
     return isLoggedIn ? <Dashboard /> : <Login />;
   }
   \`\`\`
2. **Logical &&:**
   \`\`\`javascript
   function App({ loading }) {
     return <div>{loading && <Spinner />}</div>;
   }
   \`\`\`
3. **if/else:**
   \`\`\`javascript
   function App({ user }) {
     if (!user) return <Login />;
     return <Dashboard />;
   }
   \`\`\`
`,
    },
    {
      id: 103107,
      question: "Как работает Lazy Loading в React?",
      answer: `
**Lazy Loading:**
- Техника загрузки компонентов только тогда, когда они нужны.
- Реализуется через \`React.lazy\` и \`Suspense\`.

**Пример:**
\`\`\`javascript
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}
\`\`\`
`,
    },
    {
      id: 103108,
      question: "Что такое Server-Side Rendering (SSR) в React?",
      answer: `
**Server-Side Rendering (SSR):**
- Рендеринг React-приложения на сервере для отправки готового HTML клиенту.
- Улучшает производительность и SEO.

**Пример с Next.js:**
\`\`\`javascript
export default function Home() {
  return <h1>Hello, SSR!</h1>;
}
\`\`\`
`,
    },
    {
      id: 103109,
      question: "Что такое Client-Side Rendering (CSR) в React?",
      answer: `
**Client-Side Rendering (CSR):**
- Рендеринг React-приложения в браузере.
- Более динамичный, но может быть медленнее при начальной загрузке.

**Пример:**
\`\`\`javascript
function App() {
  return <h1>Hello, CSR!</h1>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
\`\`\`
`,
    },
    {
      id: 103110,
      question: "Что такое Static Site Generation (SSG) в React?",
      answer: `
**Static Site Generation (SSG):**
- Генерация статических HTML-файлов во время сборки.
- Подходит для контента, который не меняется часто.

**Пример с Next.js:**
\`\`\`javascript
export async function getStaticProps() {
  return { props: { data: 'Static Data' } };
}

export default function Home({ data }) {
  return <h1>{data}</h1>;
}
\`\`\`
`,
    },
    {
      id: 103111,
      question: "Какие есть методы оптимизации рендеринга в React?",
      answer: `
**Методы оптимизации:**
1. **React.memo:** Мемоизация компонентов.
2. **shouldComponentUpdate:** Контроль обновлений в классовых компонентах.
3. **PureComponent:** Автоматическая проверка изменений в классовых компонентах.
4. **useMemo/useCallback:** Мемоизация значений и функций.
5. **Lazy Loading:** Загрузка компонентов по требованию.
6. **Code Splitting:** Разделение кода для уменьшения размера бандла.
7. **Windowing/Virtualization:** Оптимизация больших списков.
`,
    },
  ],
};
