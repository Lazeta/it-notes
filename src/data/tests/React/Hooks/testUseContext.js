export const testUseContext = {
  id: 102475,
  title: "useContext (контекст)",
  questions: [
    {
      id: 102476,
      question: "Что такое useContext?",
      answer: `
**useContext:**
- Это хук React, который позволяет получать доступ к данным контекста.
- Упрощает использование Context API, избавляя от необходимости оборачивать компоненты в \`Context.Consumer\`.

**Пример использования:**
\`\`\`javascript
import React, { createContext, useContext } from 'react';

// Создаем контекст
const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ChildComponent />
    </ThemeContext.Provider>
  );
}

function ChildComponent() {
  // Используем useContext для получения значения контекста
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}
\`\`\`
`,
    },
    {
      id: 102477,
      question: "Как создать и использовать контекст в React?",
      answer: `
**Создание и использование контекста:**
1. **Создание контекста:**
   - Используйте \`createContext\` для создания нового контекста.
2. **Предоставление значения:**
   - Оберните дочерние компоненты в \`Provider\`, чтобы передать значение контекста.
3. **Получение значения:**
   - Используйте \`useContext\` или \`Context.Consumer\` для доступа к значению.

**Пример:**
\`\`\`javascript
import React, { createContext, useContext } from 'react';

// 1. Создаем контекст
const UserContext = createContext();

function App() {
  const user = { name: 'Alice', age: 25 };

  return (
    // 2. Предоставляем значение через Provider
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  // 3. Получаем значение через useContext
  const user = useContext(UserContext);
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102478,
      question: "Зачем нужен Context API и когда его использовать?",
      answer: `
**Context API:**
- Позволяет передавать данные через дерево компонентов без необходимости прокидывать props на каждом уровне.
- Полезен для глобальных данных, таких как тема, пользовательская информация или языковые настройки.

**Когда использовать:**
1. **Глобальное состояние:**
   - Когда данные нужны в нескольких несвязанных компонентах.
2. **Избегание prop drilling:**
   - Когда приходится передавать данные через несколько уровней компонентов.
3. **Темы и настройки:**
   - Для управления темой, языком или другими глобальными настройками.

**Пример:**
\`\`\`javascript
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}
    >
      Toggle Theme
    </button>
  );
}
\`\`\`
`,
    },
    {
      id: 102479,
      question: "Как обновить значение контекста?",
      answer: `
**Обновление значения контекста:**
- Значение контекста можно обновить через состояние (например, \`useState\`) или другие механизмы.

**Пример:**
\`\`\`javascript
import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <CounterDisplay />
      <CounterButton />
    </CounterContext.Provider>
  );
}

function CounterDisplay() {
  const { count } = useContext(CounterContext);
  return <p>Count: {count}</p>;
}

function CounterButton() {
  const { setCount } = useContext(CounterContext);
  return <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>;
}
\`\`\`
`,
    },
    {
      id: 102480,
      question: "Как организовать несколько контекстов в приложении?",
      answer: `
**Организация нескольких контекстов:**
- Можно создавать несколько контекстов для разных типов данных.
- Каждый контекст управляет своим состоянием независимо.

**Пример:**
\`\`\`javascript
import React, { createContext, useContext, useState } from 'react';

// Создаем два контекста
const ThemeContext = createContext();
const UserContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState({ name: 'Alice', age: 25 });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserContext.Provider value={{ user, setUser }}>
        <Main />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

function Main() {
  return (
    <div>
      <ThemeToggler />
      <UserProfile />
    </div>
  );
}

function ThemeToggler() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  );
}

function UserProfile() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102481,
      question: "Какие есть альтернативы Context API?",
      answer: `
**Альтернативы Context API:**
1. **Redux:**
   - Библиотека для управления глобальным состоянием.
   - Подходит для сложных приложений с большим количеством состояний.
2. **MobX:**
   - Реактивное управление состоянием.
   - Проще в освоении, чем Redux.
3. **Zustand:**
   - Минималистичная библиотека для управления состоянием.
4. **Jotai:**
   - Легковесная библиотека, похожая на Recoil.
5. **Props Drilling:**
   - Передача данных через props (подходит для небольших приложений).

**Вывод:**
- Context API подходит для простых случаев.
- Для сложных приложений лучше использовать специализированные библиотеки.
`,
    },
    {
      id: 102482,
      question:
        "Как оптимизировать производительность при использовании Context API?",
      answer: `
**Оптимизация производительности:**
1. **Разделение контекстов:**
   - Создавайте отдельные контексты для разных типов данных.
2. **Мемоизация значений:**
   - Используйте \`React.memo\` или \`useMemo\` для предотвращения лишних перерисовок.
3. **Избегайте частых обновлений:**
   - Ограничьте количество обновлений контекста, особенно в часто изменяемых данных.

**Пример мемоизации:**
\`\`\`javascript
import React, { createContext, useContext, useState, useMemo } from 'react';

const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  // Мемоизация значения контекста
  const value = useMemo(() => ({ count, setCount }), [count]);

  return (
    <CountContext.Provider value={value}>
      <CounterDisplay />
      <CounterButton />
    </CountContext.Provider>
  );
}

function CounterDisplay() {
  const { count } = useContext(CountContext);
  return <p>Count: {count}</p>;
}

function CounterButton() {
  const { setCount } = useContext(CountContext);
  return <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>;
}
\`\`\`
`,
    },
  ],
};
