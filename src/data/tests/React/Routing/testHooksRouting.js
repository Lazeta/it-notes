export const testHooksRouting = {
  id: 102325,
  title: "React Hooks & Routing",
  questions: [
    {
      id: 102326,
      question: "Что такое React Hooks?",
      answer: `
**React Hooks:**
- Это функции, которые позволяют использовать состояние и другие возможности React без написания классовых компонентов.
- Появились в React 16.8 и упрощают управление состоянием и побочными эффектами.

**Основные хуки:**
1. **useState:** Управление состоянием компонента.
2. **useEffect:** Обработка побочных эффектов (например, API-запросы, подписки).
3. **useContext:** Работа с контекстом для глобального состояния.
4. **useReducer:** Альтернатива \`useState\` для сложного состояния.
5. **useCallback, useMemo:** Оптимизация производительности.

**Пример (\`useState\`):**
\`\`\`javascript
import React, { useState } from 'react';

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
      id: 102327,
      question: "Как работает хук useEffect?",
      answer: `
**Хук \`useEffect\`:**
- Используется для выполнения побочных эффектов в функциональных компонентах.
- Может заменить методы жизненного цикла классовых компонентов (\`componentDidMount\`, \`componentDidUpdate\`, \`componentWillUnmount\`).

**Синтаксис:**
\`\`\`javascript
useEffect(() => {
  // Код для выполнения эффекта
  return () => {
    // Очистка (например, отмена подписок)
  };
}, [dependencies]);
\`\`\`

**Пример:**
\`\`\`javascript
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Очистка при размонтировании
  }, []);

  return <p>Seconds: {seconds}</p>;
}
\`\`\`
`,
    },
    {
      id: 102328,
      question: "Что такое хук useContext?",
      answer: `
**Хук \`useContext\`:**
- Позволяет получить доступ к значению контекста без обертывания компонента в \`Context.Consumer\`.

**Пример:**
\`\`\`javascript
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ChildComponent />
    </ThemeContext.Provider>
  );
}

function ChildComponent() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}
\`\`\`
`,
    },
    {
      id: 102329,
      question: "Как использовать хук useReducer?",
      answer: `
**Хук \`useReducer\`:**
- Альтернатива \`useState\` для управления сложным состоянием.
- Принимает редюсер и начальное состояние, возвращает текущее состояние и функцию dispatch.

**Пример:**
\`\`\`javascript
import React, { useReducer } from 'react';

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
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102330,
      question: "Как использовать маршрутизацию в React?",
      answer: `
**Маршрутизация в React:**
- Реализуется с помощью библиотеки \`react-router-dom\`.
- Позволяет создавать одностраничные приложения (SPA) с динамической навигацией.

**Основные компоненты:**
1. **BrowserRouter:** Обертка для всего приложения.
2. **Routes:** Группирует маршруты.
3. **Route:** Определяет путь и соответствующий компонент.
4. **Link:** Заменяет тег \`<a>\` для навигации.

**Пример:**
\`\`\`javascript
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}
\`\`\`
`,
    },
    {
      id: 102331,
      question: "Как использовать хук useNavigate?",
      answer: `
**Хук \`useNavigate\`:**
- Предоставляет функцию для программной навигации между маршрутами.

**Пример:**
\`\`\`javascript
import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard'); // Переход на /dashboard
  };

  return <button onClick={handleLogin}>Login</button>;
}
\`\`\`
`,
    },
    {
      id: 102332,
      question: "Как работают вложенные маршруты?",
      answer: `
**Вложенные маршруты:**
- Позволяют определять дочерние маршруты внутри родительского маршрута.
- Используйте \`Outlet\` для рендеринга дочерних маршрутов.

**Пример:**
\`\`\`javascript
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* Рендерит дочерний маршрут */}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`
`,
    },
    {
      id: 102333,
      question: "Как защитить маршруты?",
      answer: `
**Защита маршрутов:**
- Используйте условную логику для проверки прав доступа.

**Пример:**
\`\`\`javascript
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}

function App() {
  const isLoggedIn = false; // Пример состояния аутентификации

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`
`,
    },
    {
      id: 102334,
      question: "Как использовать Query Parameters?",
      answer: `
**Query Parameters:**
- Используйте хук \`useSearchParams\` для работы с параметрами запроса.

**Пример:**
\`\`\`javascript
import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q'); // Получаем параметр "q"

  const handleSearch = (newQuery) => {
    setSearchParams({ q: newQuery }); // Обновляем параметр "q"
  };

  return (
    <div>
      <input
        type="text"
        value={query || ''}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <p>Search Query: {query}</p>
    </div>
  );
}
\`\`\`
`,
    },
  ],
};
