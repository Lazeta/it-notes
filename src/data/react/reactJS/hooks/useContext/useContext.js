export const useContext = {
  id: 2543,
  title: "useContext",
  children: [
    {
      title: "Основы использования",
      type: "text",
      description: `
        <p><strong>useContext</strong> — это хук для доступа к значению контекста без использования <code>Consumer</code>.</p>
        
        <pre><code>import { createContext, useContext } from 'react';

// 1. Создание контекста
const ThemeContext = createContext('light');

function App() {
  // 2. Передача значения через Provider
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  // 3. Получение значения в любом дочернем компоненте
  const theme = useContext(ThemeContext);
  return <div>Текущая тема: {theme}</div>;
}</code></pre>

        <p><strong>Когда использовать:</strong></p>
        <ul>
          <li>Глобальные настройки (темы, язык).</li>
          <li>Данные пользователя.</li>
          <li>Кешированные данные приложения.</li>
        </ul>
      `,
    },
    {
      title: "Типизация с TypeScript",
      type: "text",
      description: `
        <p><strong>Создание типизированного контекста:</strong></p>
        <pre><code>interface User {
  name: string;
  age: number;
}

const UserContext = createContext<User | null>(null);

function UserProfile() {
  const user = useContext(UserContext);
  
  if (!user) return <div>Пользователь не найден</div>;
  
  return <div>{user.name}, {user.age} лет</div>;
}</code></pre>

        <p><strong>Контекст с default value:</strong></p>
        <pre><code>interface Theme {
  colors: {
    primary: string;
    secondary: string;
  };
}

const defaultTheme: Theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d'
  }
};

const ThemeContext = createContext<Theme>(defaultTheme);</code></pre>
      `,
    },
    {
      title: "Оптимизация производительности",
      type: "text",
      description: `
        <p><strong>1. Мемоизация значения контекста:</strong></p>
        <pre><code>function App() {
  const [user, setUser] = useState({ name: 'Alex', age: 30 });
  
  // value не будет изменяться при каждом рендере
  const userValue = useMemo(() => ({ user, setUser }), [user]);
  
  return (
    <UserContext.Provider value={userValue}>
      <Profile />
    </UserContext.Provider>
  );
}</code></pre>

        <p><strong>2. Разделение контекстов:</strong></p>
        <pre><code>// Вместо одного большого контекста
const AppContext = createContext({ user, theme, settings });

// Лучше разделить на несколько
const UserContext = createContext(user);
const ThemeContext = createContext(theme);
const SettingsContext = createContext(settings);</code></pre>

        <p><strong>3. Кастомный хук для контекста:</strong></p>
        <pre><code>function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}

// Использование
const { user } = useUser();</code></pre>
      `,
    },
    {
      title: "Паттерны использования",
      type: "text",
      description: `
        <p><strong>1. Контекст с состоянием и действиями:</strong></p>
        <pre><code>const CounterContext = createContext();

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  
  const value = { count, increment, decrement };
  
  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
}

function Counter() {
  const { count, increment } = useContext(CounterContext);
  return <button onClick={increment}>{count}</button>;
}</code></pre>

        <p><strong>2. Многоуровневые провайдеры:</strong></p>
        <pre><code>function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <SettingsProvider>
          <MainApp />
        </SettingsProvider>
      </UserProvider>
    </ThemeProvider>
  );
}</code></pre>

        <p><strong>3. Контекст для dependency injection:</strong></p>
        <pre><code>const ApiContext = createContext({
  fetchUsers: () => Promise.resolve([])
});

function App() {
  const api = {
    fetchUsers: () => fetch('/users').then(res => res.json())
  };
  
  return (
    <ApiContext.Provider value={api}>
      <UserList />
    </ApiContext.Provider>
  );
}</code></pre>
      `,
    },
    {
      title: "Частые ошибки",
      type: "text",
      description: `
        <p><strong>1. Неправильное обновление контекста:</strong></p>
        <pre><code>function App() {
  const [user, setUser] = useState({ name: 'Alex' });
  
  // Плохо: новый объект при каждом рендере
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Child />
    </UserContext.Provider>
  );
}

// Лучше: мемоизировать значение
const value = useMemo(() => ({ user, setUser }), [user]);</code></pre>

        <p><strong>2. Избыточное использование контекста:</strong></p>
        <pre><code>// Не стоит использовать контекст для данных,
// которые передаются только на 1-2 уровня вниз
// Лучше использовать обычные props</code></pre>

        <p><strong>3. Отсутствие проверки на существование контекста:</strong></p>
        <pre><code>const theme = useContext(ThemeContext);
// Может быть undefined, если компонент не обернут в Provider

// Решение:
const theme = useContext(ThemeContext) ?? defaultTheme;</code></pre>
      `,
    },
    {
      title: "Продвинутые техники",
      type: "text",
      description: `
        <p><strong>1. Комбинированные провайдеры:</strong></p>
        <pre><code>function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ApiProvider>
          {children}
        </ApiProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

// Использование
<AppProviders>
  <App />
</AppProviders></code></pre>

        <p><strong>2. Селективный рендеринг с контекстом:</strong></p>
        <pre><code>const UserContext = createContext();

function UserProvider({ userId, children }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);
  
  if (!user) return <Loader />;
  
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}</code></pre>

        <p><strong>3. Контекст с reducer:</strong></p>
        <pre><code>const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  const value = { state, dispatch };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}</code></pre>
      `,
    },
    {
      title: "Альтернативы и сравнения",
      type: "text",
      description: `
        <p><strong>Когда использовать контекст, а когда другие решения:</strong></p>
        
        <table border="1">
          <tr>
            <th>Решение</th>
            <th>Когда использовать</th>
            <th>Когда не использовать</th>
          </tr>
          <tr>
            <td>useContext</td>
            <td>Глобальные данные, доступные многим компонентам</td>
            <td>Локальное состояние, редко меняющиеся данные</td>
          </tr>
          <tr>
            <td>Props drilling</td>
            <td>Простая передача на 1-2 уровня</td>
            <td>Глубокая иерархия компонентов</td>
          </tr>
          <tr>
            <td>Redux</td>
            <td>Сложное глобальное состояние, devtools</td>
            <td>Простые сценарии, небольшие приложения</td>
          </tr>
          <tr>
            <td>Component Composition</td>
            <td>Переиспользуемые компоненты с поведением</td>
            <td>Данные, нужные в разных частях приложения</td>
          </tr>
        </table>
      `,
    },
  ],
};
