export const testPatternsReact = {
  id: 102825,
  title: "Design Patterns in React (шаблоны проектирования в React)",
  questions: [
    {
      id: 102826,
      question: "Что такое шаблоны проектирования (Design Patterns) в React?",
      answer: `
**Шаблоны проектирования:**
- Это проверенные решения типичных задач, которые помогают писать структурированный и переиспользуемый код.
- В React шаблоны проектирования помогают организовать логику компонентов, управлять состоянием и улучшать производительность.

**Примеры популярных шаблонов:**
1. **Компонентный подход:**
   - Разделение UI на независимые компоненты.
2. **Container/Presentational Pattern:**
   - Разделение логики и представления.
3. **Compound Components:**
   - Группа компонентов, работающих вместе как единое целое.
4. **Render Props:**
   - Передача функции для рендеринга дочерних элементов.

**Пример Container/Presentational Pattern:**
\`\`\`javascript
// Container Component
function UserContainer() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser().then((data) => setUser(data));
  }, []);

  return <UserProfile user={user} />;
}

// Presentational Component
function UserProfile({ user }) {
  if (!user) return <p>Loading...</p>;
  return <div>{user.name}</div>;
}
\`\`\`
`,
    },
    {
      id: 102827,
      question: "Что такое Container/Presentational Pattern?",
      answer: `
**Container/Presentational Pattern:**
- Разделяет логику и представление.
- **Container:** Отвечает за управление данными и состоянием.
- **Presentational:** Отвечает за отображение данных.

**Преимущества:**
- Упрощает тестирование.
- Повышает переиспользуемость компонентов.

**Пример:**
\`\`\`javascript
// Container Component
function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((result) => setData(result));
  }, []);

  return <DataList data={data} />;
}

// Presentational Component
function DataList({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
\`\`\`
`,
    },
    {
      id: 102828,
      question: "Что такое Render Props Pattern?",
      answer: `
**Render Props Pattern:**
- Позволяет передавать функцию как пропс для рендеринга дочерних элементов.
- Полезен для обмена логикой между компонентами.

**Пример:**
\`\`\`javascript
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return render(position);
}

function App() {
  return (
    <MouseTracker
      render={(position) => (
        <div>
          Mouse position: {position.x}, {position.y}
        </div>
      )}
    />
  );
}
\`\`\`
`,
    },
    {
      id: 102829,
      question: "Что такое Compound Components Pattern?",
      answer: `
**Compound Components Pattern:**
- Группа компонентов, работающих вместе как единое целое.
- Дочерние компоненты имеют доступ к состоянию родительского компонента через контекст или props.

**Пример:**
\`\`\`javascript
const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      isActive: index === activeTab,
      onClick: () => setActiveTab(index),
    })
  );
};

const TabButton = ({ isActive, onClick, children }) => (
  <button onClick={onClick} style={{ fontWeight: isActive ? 'bold' : 'normal' }}>
    {children}
  </button>
);

const TabContent = ({ isActive, children }) =>
  isActive ? <div>{children}</div> : null;

function App() {
  return (
    <Tabs>
      <TabButton>Tab 1</TabButton>
      <TabButton>Tab 2</TabButton>
      <TabContent>Content for Tab 1</TabContent>
      <TabContent>Content for Tab 2</TabContent>
    </Tabs>
  );
}
\`\`\`
`,
    },
    {
      id: 102830,
      question: "Что такое Higher-Order Components (HOC)?",
      answer: `
**Higher-Order Components (HOC):**
- Это функция, которая принимает компонент и возвращает новый компонент с дополнительными свойствами.
- Используется для повторного использования логики.

**Пример:**
\`\`\`javascript
function withLoading(Component) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) return <p>Loading...</p>;
    return <Component {...props} />;
  };
}

function DataList({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

const DataListWithLoading = withLoading(DataList);

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  return <DataListWithLoading data={data} isLoading={loading} />;
}
\`\`\`
`,
    },
    {
      id: 102831,
      question: "Что такое Custom Hooks Pattern?",
      answer: `
**Custom Hooks Pattern:**
- Это пользовательские хуки, которые позволяют выносить логику в отдельные функции.
- Упрощают переиспользование логики между компонентами.

**Пример:**
\`\`\`javascript
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

function App() {
  const { data, loading } = useFetch('https://api.example.com/data ');

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
\`\`\`
`,
    },
    {
      id: 102832,
      question: "Что такое Context API Pattern?",
      answer: `
**Context API Pattern:**
- Позволяет передавать данные глубоко в дерево компонентов без использования props.
- Используется для управления глобальным состоянием.

**Пример:**
\`\`\`javascript
const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme ({theme})
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedButton />
    </ThemeProvider>
  );
}
\`\`\`
`,
    },
    {
      id: 102833,
      question: "Что такое State Reducer Pattern?",
      answer: `
**State Reducer Pattern:**
- Позволяет делегировать управление состоянием родительскому компоненту.
- Используется для создания гибких компонентов.

**Пример:**
\`\`\`javascript
function useCounter({ initialState = 0, reducer = defaultReducer } = {}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: 'increment' });
  const decrement = () => dispatch({ type: 'decrement' });

  return { state, increment, decrement };
}

function defaultReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      throw new Error();
  }
}

function App() {
  const { state, increment, decrement } = useCounter();

  return (
    <div>
      <p>Count: {state}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102834,
      question: "Какие есть альтернативы Redux для управления состоянием?",
      answer: `
**Альтернативы Redux:**
1. **Context API:**
   - Встроенное решение React для глобального состояния.
2. **Recoil:**
   - Легковесная библиотека для управления состоянием.
3. **MobX:**
   - Реактивное управление состоянием.
4. **Zustand:**
   - Минималистичная библиотека для управления состоянием.
5. **Jotai:**
   - Атомарное управление состоянием.

**Пример Zustand:**
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
    {
      id: 102835,
      question: "Что такое Controlled и Uncontrolled Components?",
      answer: `
**Controlled Components:**
- Компоненты, управляемые через состояние React.
- Значения полей ввода синхронизируются с состоянием.

**Uncontrolled Components:**
- Компоненты, управляемые DOM.
- Значения полей ввода извлекаются через \`ref\`.

**Пример Controlled Component:**
\`\`\`javascript
function ControlledInput() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
\`\`\`

**Пример Uncontrolled Component:**
\`\`\`javascript
function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`
`,
    },
  ],
};
