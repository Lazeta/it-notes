export const testReactRouterAPI = {
  id: 102275,
  title: "React Router API",
  questions: [
    {
      id: 102276,
      question: "Что такое React Router API?",
      answer: `
**React Router API:**
- Это набор инструментов для управления маршрутизацией в приложениях на React.
- Позволяет создавать одностраничные приложения (SPA), где содержимое динамически изменяется в зависимости от URL без перезагрузки страницы.

**Основные компоненты и хуки:**
1. **BrowserRouter:** Обертка для всего приложения, использующая HTML5 History API для синхронизации UI с URL.
2. **Routes:** Группирует все маршруты и выбирает первый подходящий маршрут для рендеринга.
3. **Route:** Определяет, какой компонент должен отображаться для конкретного пути (path).
4. **Link:** Заменяет тег \`<a>\` для навигации между страницами без перезагрузки.
5. **Navigate:** Программная навигация между маршрутами.
6. **useNavigate:** Хук для программной навигации.
7. **useParams:** Хук для получения параметров маршрута.
8. **useLocation:** Хук для получения текущего местоположения (URL).
9. **Outlet:** Компонент для рендеринга дочерних маршрутов внутри родительского маршрута.
10. **useSearchParams:** Хук для работы с параметрами запроса (query parameters).

**Пример базового использования:**
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
      id: 102277,
      question: "Как работает BrowserRouter?",
      answer: `
**BrowserRouter:**
- Использует HTML5 History API для синхронизации UI с URL.
- Позволяет изменять URL без перезагрузки страницы.

**Пример:**
\`\`\`javascript
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Вложенные маршруты и компоненты */}
    </BrowserRouter>
  );
}
\`\`\`
`,
    },
    {
      id: 102278,
      question: "Что такое хук useNavigate?",
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
      id: 102279,
      question: "Как использовать хук useParams?",
      answer: `
**Хук \`useParams\`:**
- Предоставляет доступ к параметрам маршрута, определенным в \`Route\`.

**Пример:**
\`\`\`javascript
import { useParams } from 'react-router-dom';

function Profile() {
  const { userId } = useParams(); // Получаем параметр из URL
  return <h1>User ID: {userId}</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`
`,
    },
    {
      id: 102280,
      question: "Как использовать хук useLocation?",
      answer: `
**Хук \`useLocation\`:**
- Возвращает текущий объект location, который содержит информацию о текущем URL.

**Пример:**
\`\`\`javascript
import { useLocation } from 'react-router-dom';

function CurrentLocation() {
  const location = useLocation();
  return <p>Current Path: {location.pathname}</p>;
}
\`\`\`
`,
    },
    {
      id: 102281,
      question: "Что такое Outlet и как его использовать?",
      answer: `
**Outlet:**
- Компонент, который рендерит дочерние маршруты внутри родительского маршрута.

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
      id: 102282,
      question: "Как защитить маршруты с помощью Navigate?",
      answer: `
**Защита маршрутов с помощью \`Navigate\`:**
- Используйте компонент \`Navigate\` для перенаправления пользователей на другие страницы.

**Пример:**
\`\`\`javascript
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <h1>Protected Content</h1>;
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
      id: 102283,
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
    {
      id: 102284,
      question: "Как обработать 404 ошибку?",
      answer: `
**Обработка 404 ошибки:**
- Используйте маршрут с wildcard (\`*\`) для отображения страницы "Not Found".

**Пример:**
\`\`\`javascript
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* 404 маршрут */}
      </Routes>
    </BrowserRouter>
  );
}

function NotFoundPage() {
  return <h1>404 - Page Not Found</h1>;
}
\`\`\`
`,
    },
    {
      id: 102285,
      question: "Как работают вложенные маршруты?",
      answer: `
**Вложенные маршруты:**
- Позволяют определять дочерние маршруты внутри родительского маршрута.
- Используйте \`Outlet\` для рендеринга дочерних маршрутов.

**Пример:**
\`\`\`javascript
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

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* Рендерит дочерний маршрут */}
    </div>
  );
}
\`\`\`
`,
    },
  ],
};
