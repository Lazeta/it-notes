export const testReactRouter = {
  id: 102250,
  title: "React Router (Роутинг)",
  questions: [
    {
      id: 102251,
      question: "Что такое React Router?",
      answer: `
**React Router:**
- Это библиотека для управления маршрутизацией в приложениях на React.
- Позволяет создавать одностраничные приложения (SPA), где содержимое динамически изменяется в зависимости от URL, без перезагрузки страницы.

**Основные компоненты:**
1. **BrowserRouter:** Обертка для всего приложения, которая позволяет использовать HTML5 History API для синхронизации UI с URL.
2. **Routes:** Группирует все маршруты и выбирает первый подходящий маршрут для рендеринга.
3. **Route:** Определяет, какой компонент должен отображаться для конкретного пути (path).
4. **Link:** Заменяет тег \`<a>\` для навигации между страницами без перезагрузки.
5. **Navigate:** Программная навигация между маршрутами.

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
      id: 102252,
      question: "Как настроить маршрутизацию в React Router?",
      answer: `
**Настройка маршрутизации:**
1. Установите \`react-router-dom\`:
   \`\`\`bash
   npm install react-router-dom
   \`\`\`

2. Импортируйте необходимые компоненты:
   \`\`\`javascript
   import { BrowserRouter, Routes, Route } from 'react-router-dom';
   \`\`\`

3. Определите маршруты:
   - \`<BrowserRouter>\`: Обертывает всё приложение.
   - \`<Routes>\`: Содержит список всех маршрутов.
   - \`<Route>\`: Определяет путь (path) и соответствующий компонент (element).

**Пример:**
\`\`\`javascript
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* 404 маршрут */}
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`
`,
    },
    {
      id: 102253,
      question: "Как использовать параметры маршрута в React Router?",
      answer: `
**Параметры маршрута:**
- Позволяют передавать динамические значения через URL.

**Синтаксис:**
- Используйте \`:\` для определения параметра в пути.

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
      id: 102254,
      question: "Как реализовать программную навигацию в React Router?",
      answer: `
**Программная навигация:**
- Используйте хук \`useNavigate\` или компонент \`Navigate\`.

**Пример с \`useNavigate\`:**
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

**Пример с \`Navigate\`:**
\`\`\`javascript
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <h1>Protected Content</h1>;
}
\`\`\`
`,
    },
    {
      id: 102255,
      question: "Как обрабатывать 404 ошибку в React Router?",
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
      id: 102256,
      question: "Что такое Nested Routes (вложенные маршруты)?",
      answer: `
**Nested Routes (вложенные маршруты):**
- Позволяют определять дочерние маршруты внутри родительского маршрута.

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
    {
      id: 102257,
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
      id: 102258,
      question: "Как защитить маршруты (Protected Routes)?",
      answer: `
**Защита маршрутов:**
- Используйте условную логику для проверки прав доступа.

**Пример:**
\`\`\`javascript
function ProtectedRoute({ children, isLoggedIn }) {
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
      id: 102259,
      question: "Как использовать Query Parameters в React Router?",
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
