export const testState = {
  id: 102700,
  title: "State Management (управление состоянием)",
  questions: [
    {
      id: 102701,
      question: "Что такое состояние (state) в React?",
      answer: `
**Состояние (State):**
- Это объект, который хранит данные компонента и может изменяться во время работы приложения.
- Изменение состояния вызывает перерисовку компонента.

**Пример:**
\`\`\`javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

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
      id: 102702,
      question: "Как инициализировать состояние в функциональном компоненте?",
      answer: `
**Инициализация состояния:**
- Используйте хук \`useState\`.

**Пример:**
\`\`\`javascript
import { useState } from 'react';

function Example() {
  const [value, setValue] = useState('initial value');

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue('new value')}>Change Value</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102703,
      question: "Как обновить состояние в React?",
      answer: `
**Обновление состояния:**
- Используйте функцию обновления, возвращаемую \`useState\`.
- Для сложных состояний используйте функциональное обновление.

**Пример:**
\`\`\`javascript
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1); // Функциональное обновление
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102704,
      question: "Что такое локальное состояние?",
      answer: `
**Локальное состояние:**
- Это состояние, которое принадлежит конкретному компоненту.
- Не передается другим компонентам напрямую.

**Пример:**
\`\`\`javascript
function LocalStateExample() {
  const [text, setText] = useState('');

  return (
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Введите текст"
    />
  );
}
\`\`\`
`,
    },
    {
      id: 102705,
      question: "Как поднять состояние (lift state up)?",
      answer: `
**Поднятие состояния:**
- Перемещение состояния из дочернего компонента в родительский для совместного использования.

**Пример:**
\`\`\`javascript
function Parent() {
  const [value, setValue] = useState('');

  return (
    <>
      <ChildInput value={value} onChange={setValue} />
      <DisplayValue value={value} />
    </>
  );
}

function ChildInput({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

function DisplayValue({ value }) {
  return <p>Значение: {value}</p>;
}
\`\`\`
`,
    },
    {
      id: 102706,
      question: "Что такое глобальное состояние?",
      answer: `
**Глобальное состояние:**
- Это состояние, доступное для нескольких компонентов.
- Управляется через контекст (\`Context API\`) или сторонние библиотеки (например, Redux).

**Пример с Context API:**
\`\`\`javascript
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

function App() {
  const [globalState, setGlobalState] = useState('initial value');

  return (
    <StateContext.Provider value={{ globalState, setGlobalState }}>
      <ChildComponent />
    </StateContext.Provider>
  );
}

function ChildComponent() {
  const { globalState, setGlobalState } = useContext(StateContext);

  return (
    <div>
      <p>{globalState}</p>
      <button onClick={() => setGlobalState('updated value')}>
        Update Global State
      </button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102707,
      question: "Как использовать хук useReducer для управления состоянием?",
      answer: `
**Хук \`useReducer\`:**
- Альтернатива \`useState\` для сложного состояния.
- Принимает редюсер и начальное состояние, возвращает текущее состояние и функцию dispatch.

**Пример:**
\`\`\`javascript
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102708,
      question: "В чем разница между состоянием и пропсами?",
      answer: `
**Разница между состоянием и пропсами:**
1. **Состояние (State):**
   - Управляется внутри компонента.
   - Может изменяться.
2. **Пропсы (Props):**
   - Передаются извне.
   - Только для чтения (неизменяемы внутри компонента).

**Пример:**
\`\`\`javascript
function Parent() {
  const [value, setValue] = useState('Hello');

  return <Child message={value} />;
}

function Child({ message }) {
  return <p>{message}</p>;
}
\`\`\`
`,
    },
    {
      id: 102709,
      question:
        "Как оптимизировать производительность при работе с состоянием?",
      answer: `
**Оптимизация состояния:**
1. **Мемоизация значений:**
   - Используйте \`useMemo\` для кэширования вычислений.
2. **Мемоизация функций:**
   - Используйте \`useCallback\` для предотвращения лишних перерисовок.
3. **Разделение состояний:**
   - Разделяйте состояние на независимые части.

**Пример с \`useMemo\`:**
\`\`\`javascript
function ExpensiveComponent({ data }) {
  const processedData = useMemo(() => {
    console.log('Recalculating...');
    return data.map(item => item * 2);
  }, [data]);

  return <div>{processedData.join(', ')}</div>;
}
\`\`\`
`,
    },
    {
      id: 102710,
      question: "Как управлять асинхронным состоянием?",
      answer: `
**Управление асинхронным состоянием:**
- Используйте \`useEffect\` для выполнения побочных эффектов.
- Обновляйте состояние после завершения асинхронной операции.

**Пример:**
\`\`\`javascript
function FetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/data ')
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return <div>{JSON.stringify(data)}</div>;
}
\`\`\`
`,
    },
    {
      id: 102711,
      question: "Какие есть альтернативы для управления глобальным состоянием?",
      answer: `
**Альтернативы для управления глобальным состоянием:**
1. **Redux:**
   - Библиотека для централизованного управления состоянием.
2. **MobX:**
   - Реактивное управление состоянием.
3. **Zustand:**
   - Минималистичная библиотека для управления состоянием.
4. **Recoil:**
   - Легковесная библиотека для управления состоянием.
5. **Context API:**
   - Встроенное решение React для глобального состояния.

**Пример с Zustand:**
\`\`\`javascript
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, increment } = useStore();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
\`\`\`
`,
    },
  ],
};
