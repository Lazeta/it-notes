export const testContextReact = {
  id: 102925,
  title: "Context API (контекст)",
  questions: [
    {
      id: 102926,
      question: "Что такое Context API в React?",
      answer: `
**Context API:**
- Это механизм для передачи данных через дерево компонентов без необходимости передавать пропсы на каждом уровне.
- Позволяет управлять глобальным состоянием, например, темой, аутентификацией или языковыми настройками.

**Пример создания контекста:**
\`\`\`javascript
const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ChildComponent />
    </ThemeContext.Provider>
  );
}

function ChildComponent() {
  const theme = React.useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}
\`\`\`
`,
    },
    {
      id: 102927,
      question: "Как создать контекст в React?",
      answer: `
**Создание контекста:**
- Используйте \`React.createContext(defaultValue)\`.

**Шаги:**
1. Создайте контекст с помощью \`React.createContext\`.
2. Оберните дочерние компоненты в провайдер (\`Provider\`).
3. Получите значение контекста с помощью \`useContext\` или \`Consumer\`.

**Пример:**
\`\`\`javascript
const UserContext = React.createContext();

function App() {
  const user = { name: 'Alice', age: 25 };

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  const user = React.useContext(UserContext);
  return <p>{user.name}, {user.age} years old</p>;
}
\`\`\`
`,
    },
    {
      id: 102928,
      question: "Зачем нужен Context API?",
      answer: `
**Зачем нужен Context API:**
1. **Глобальное состояние:**
   - Упрощает управление данными, которые нужны в нескольких компонентах.
2. **Устранение prop-drilling:**
   - Избавляет от необходимости передавать пропсы через многоуровневую иерархию.
3. **Динамические данные:**
   - Позволяет обновлять данные в реальном времени.

**Пример использования:**
\`\`\`javascript
const LanguageContext = React.createContext('en');

function App() {
  const [language, setLanguage] = React.useState('en');

  return (
    <LanguageContext.Provider value={language}>
      <button onClick={() => setLanguage('ru')}>Change to Russian</button>
      <Content />
    </LanguageContext.Provider>
  );
}

function Content() {
  const language = React.useContext(LanguageContext);
  return <p>Current language: {language}</p>;
}
\`\`\`
`,
    },
    {
      id: 102929,
      question: "Как использовать useContext для работы с контекстом?",
      answer: `
**Использование useContext:**
- Хук \`useContext\` позволяет получить доступ к значению контекста.

**Пример:**
\`\`\`javascript
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button style={{ background: theme }}>Themed Button</button>;
}
\`\`\`
`,
    },
    {
      id: 102930,
      question: "Можно ли обновлять контекст динамически?",
      answer: `
**Динамическое обновление контекста:**
- Да, можно обновлять контекст с помощью состояния или редюсеров.

**Пример:**
\`\`\`javascript
const CounterContext = React.createContext();

function CounterProvider({ children }) {
  const [count, setCount] = React.useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

function CounterDisplay() {
  const { count } = React.useContext(CounterContext);
  return <p>Count: {count}</p>;
}

function IncrementButton() {
  const { setCount } = React.useContext(CounterContext);
  return <button onClick={() => setCount((c) => c + 1)}>Increment</button>;
}

function App() {
  return (
    <CounterProvider>
      <CounterDisplay />
      <IncrementButton />
    </CounterProvider>
  );
}
\`\`\`
`,
    },
    {
      id: 102931,
      question: "Какие есть альтернативы Context API?",
      answer: `
**Альтернативы Context API:**
1. **Prop Drilling:**
   - Передача данных через пропсы на каждом уровне.
2. **Redux:**
   - Библиотека для управления глобальным состоянием.
3. **MobX:**
   - Реактивное управление состоянием.
4. **Recoil/Zustand:**
   - Легковесные библиотеки для управления состоянием.

**Пример Redux:**
\`\`\`javascript
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

const store = createStore((state = { count: 0 }, action) => {
  if (action.type === 'increment') return { count: state.count + 1 };
  return state;
});

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102932,
      question:
        "Как избежать лишних перерисовок при использовании Context API?",
      answer: `
**Оптимизация перерисовок:**
1. **Разделение контекстов:**
   - Используйте отдельные контексты для разных данных.
2. **Мемоизация:**
   - Используйте \`React.memo\` для предотвращения лишних ререндеров.
3. **Обновление только необходимых частей:**
   - Передавайте только нужные данные через контекст.

**Пример разделения контекстов:**
\`\`\`javascript
const ThemeContext = React.createContext();
const AuthContext = React.createContext();

function App() {
  const [theme, setTheme] = React.useState('light');
  const [user, setUser] = React.useState(null);

  return (
    <ThemeContext.Provider value={theme}>
      <AuthContext.Provider value={user}>
        <Content />
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

function Content() {
  const theme = React.useContext(ThemeContext);
  const user = React.useContext(AuthContext);
  return (
    <div>
      <p>Theme: {theme}</p>
      <p>User: {user ? user.name : 'Guest'}</p>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102933,
      question: "Как использовать несколько контекстов в одном приложении?",
      answer: `
**Использование нескольких контекстов:**
- Создайте отдельные контексты для разных данных.

**Пример:**
\`\`\`javascript
const ThemeContext = React.createContext('light');
const UserContext = React.createContext({ name: 'Guest' });

function App() {
  const [theme, setTheme] = React.useState('dark');
  const [user, setUser] = React.useState({ name: 'Alice' });

  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={user}>
        <Profile />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

function Profile() {
  const theme = React.useContext(ThemeContext);
  const user = React.useContext(UserContext);
  return (
    <div style={{ background: theme }}>
      <p>Name: {user.name}</p>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102934,
      question: "Как тестировать компоненты с Context API?",
      answer: `
**Тестирование компонентов:**
- Используйте \`render\` из \`@testing-library/react\` и оборачивайте компоненты в провайдер.

**Пример теста:**
\`\`\`javascript
import { render, screen } from '@testing-library/react';
import React from 'react';

const ThemeContext = React.createContext('light');

function ThemedText() {
  const theme = React.useContext(ThemeContext);
  return <p>Theme: {theme}</p>;
}

test('renders dark theme', () => {
  render(
    <ThemeContext.Provider value="dark">
      <ThemedText />
    </ThemeContext.Provider>
  );

  expect(screen.getByText('Theme: dark')).toBeInTheDocument();
});
\`\`\`
`,
    },
    {
      id: 102935,
      question: "Как работает Consumer в Context API?",
      answer: `
**Consumer:**
- Компонент \`Consumer\` используется для получения значения контекста в классовых компонентах.

**Пример:**
\`\`\`javascript
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

class ThemedButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => <button style={{ background: theme }}>Themed Button</button>}
      </ThemeContext.Consumer>
    );
  }
}
\`\`\`
`,
    },
  ],
};
