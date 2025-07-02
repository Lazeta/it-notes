export const testUseReducer = {
  id: 103275,
  title: "useReducer (управление состоянием)",
  questions: [
    {
      id: 103276,
      question: "Что такое хук useReducer?",
      answer: `
**useReducer:**
- Это хук для управления сложным состоянием в React.
- Альтернатива \`useState\`, особенно полезная для работы с состоянием, которое зависит от предыдущего значения или требует множества связанных действий.

**Синтаксис:**
\`\`\`javascript
const [state, dispatch] = useReducer(reducer, initialState);
\`\`\`

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
      id: 103277,
      question: "В чем разница между useState и useReducer?",
      answer: `
**Разница между useState и useReducer:**
1. **Сложность состояния:**
   - \`useState\`: Подходит для простого состояния (например, число или строка).
   - \`useReducer\`: Подходит для сложного состояния (например, объекты или массивы).
2. **Логика обновления:**
   - \`useState\`: Логика обновления находится внутри компонента.
   - \`useReducer\`: Логика обновления вынесена в редьюсер.
3. **Множественные действия:**
   - \`useState\`: Требует нескольких вызовов \`setState\`.
   - \`useReducer\`: Удобен для множества связанных действий.

**Пример:**
\`\`\`javascript
// useState:
const [count, setCount] = useState(0);

// useReducer:
const [state, dispatch] = useReducer(reducer, { count: 0 });
\`\`\`
`,
    },
    {
      id: 103278,
      question: "Как работает функция редьюсера в useReducer?",
      answer: `
**Функция редьюсера:**
- Принимает текущее состояние и действие (\`action\`) в качестве аргументов.
- Возвращает новое состояние на основе действия.

**Пример:**
\`\`\`javascript
function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { ...state, items: [...state.items, action.payload] };
    case 'remove':
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    default:
      throw new Error('Unknown action');
  }
}
\`\`\`
`,
    },
    {
      id: 103279,
      question: "Как передавать начальное состояние в useReducer?",
      answer: `
**Передача начального состояния:**
1. **Прямая передача:**
   - Начальное состояние передается вторым аргументом в \`useReducer\`.

**Пример:**
\`\`\`javascript
const initialState = { count: 0 };
const [state, dispatch] = useReducer(reducer, initialState);
\`\`\`

2. **Инициализатор:**
   - Функция для вычисления начального состояния.

**Пример:**
\`\`\`javascript
function init(initialCount) {
  return { count: initialCount };
}

const [state, dispatch] = useReducer(reducer, initialCount, init);
\`\`\`
`,
    },
    {
      id: 103280,
      question: "Как использовать useReducer для глобального состояния?",
      answer: `
**Глобальное состояние:**
- \`useReducer\` можно комбинировать с \`Context API\` для управления глобальным состоянием.

**Пример:**
\`\`\`javascript
const CountContext = React.createContext();

function CountProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
}

function Counter() {
  const { state, dispatch } = useContext(CountContext);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 103281,
      question: "Как тестировать компоненты с useReducer?",
      answer: `
**Тестирование:**
- Используйте \`@testing-library/react\` для тестирования компонентов с \`useReducer\`.
- Проверьте, как состояние изменяется при диспетчеризации действий.

**Пример:**
\`\`\`javascript
import { render, screen } from '@testing-library/react';

function reducer(state, action) {
  return action.type === 'increment' ? { count: state.count + 1 } : state;
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}

test('increments count', () => {
  render(<Counter />);
  const button = screen.getByText('+');
  fireEvent.click(button);
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});
\`\`\`
`,
    },
    {
      id: 103282,
      question: "Какие есть преимущества использования useReducer?",
      answer: `
**Преимущества:**
1. **Централизованная логика:**
   - Логика обновления состояния вынесена в редьюсер.
2. **Удобство для сложного состояния:**
   - Подходит для объектов или массивов.
3. **Предсказуемость:**
   - Состояние обновляется только через действия (\`actions\`).

**Пример:**
\`\`\`javascript
function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
}
\`\`\`
`,
    },
    {
      id: 103283,
      question: "Какие есть ограничения у useReducer?",
      answer: `
**Ограничения:**
1. **Сложность:**
   - Для простых состояний может быть избыточен.
2. **Обучение:**
   - Требует понимания концепции редьюсеров.
3. **Производительность:**
   - Может быть менее эффективен для очень больших состояний.

**Пример проблемы:**
\`\`\`javascript
// Избыточно для простого счетчика:
const [state, dispatch] = useReducer(reducer, { count: 0 });
\`\`\`
`,
    },
    {
      id: 103284,
      question: "Как комбинировать useReducer и useContext?",
      answer: `
**Комбинирование:**
- \`useReducer\` управляет состоянием.
- \`useContext\` предоставляет доступ к состоянию и диспетчеризации.

**Пример:**
\`\`\`javascript
const StateContext = React.createContext();

function StateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

function Component() {
  const { state, dispatch } = useContext(StateContext);
  return <p>{state.value}</p>;
}
\`\`\`
`,
    },
    {
      id: 103285,
      question: "Как использовать useReducer для форм?",
      answer: `
**Управление формами:**
- \`useReducer\` можно использовать для управления состоянием формы.

**Пример:**
\`\`\`javascript
function formReducer(state, action) {
  switch (action.type) {
    case 'update':
      return { ...state, [action.field]: action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function Form() {
  const [state, dispatch] = useReducer(formReducer, { name: '', email: '' });

  return (
    <form>
      <input
        value={state.name}
        onChange={(e) => dispatch({ type: 'update', field: 'name', value: e.target.value })}
      />
      <input
        value={state.email}
        onChange={(e) => dispatch({ type: 'update', field: 'email', value: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`
`,
    },
  ],
};
