export const testHistoryLocationMatch = {
  id: 102300,
  title: "History, Location, Match (React Router)",
  questions: [
    {
      id: 102301,
      question: "Что такое объект history в React Router?",
      answer: `
**Объект \`history\`:**
- Предоставляет API для управления историей браузера (навигация между страницами).
- Используется для программной навигации и управления URL.

**Основные методы:**
1. **push(path, [state]):**
   - Переходит на указанный путь и добавляет запись в историю.
2. **replace(path, [state]):**
   - Заменяет текущую запись в истории на новую.
3. **go(n):**
   - Перемещается на \`n\` шагов вперед или назад в истории.
4. **goBack():**
   - Возвращает пользователя на предыдущую страницу.
5. **goForward():**
   - Перемещает пользователя на следующую страницу.

**Пример использования:**
\`\`\`javascript
import { useHistory } from 'react-router-dom';

function NavigateButton() {
  const history = useHistory();

  const handleNavigate = () => {
    history.push('/dashboard'); // Переход на /dashboard
  };

  return <button onClick={handleNavigate}>Go to Dashboard</button>;
}
\`\`\`
`,
    },
    {
      id: 102302,
      question: "Что такое объект location в React Router?",
      answer: `
**Объект \`location\`:**
- Содержит информацию о текущем URL и состоянии маршрута.
- Позволяет получить доступ к пути, параметрам запроса и состоянию.

**Свойства объекта \`location\`:**
1. **pathname:** Текущий путь (например, \`/about\`).
2. **search:** Параметры запроса в виде строки (например, \`?id=123\`).
3. **hash:** Хэш-часть URL (например, \`#section1\`).
4. **state:** Дополнительное состояние, переданное при навигации.

**Пример использования:**
\`\`\`javascript
import { useLocation } from 'react-router-dom';

function CurrentLocation() {
  const location = useLocation();

  return (
    <div>
      <p>Pathname: {location.pathname}</p>
      <p>Search: {location.search}</p>
      <p>Hash: {location.hash}</p>
      <p>State: {JSON.stringify(location.state)}</p>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102303,
      question: "Что такое объект match в React Router?",
      answer: `
**Объект \`match\`:**
- Содержит информацию о совпадении маршрута с текущим URL.
- Позволяет получить параметры маршрута и другие данные.

**Свойства объекта \`match\`:**
1. **params:** Объект с параметрами маршрута (например, \`{ id: '123' }\`).
2. **path:** Шаблон пути, указанный в \`Route\`.
3. **url:** Совпавшая часть URL.
4. **isExact:** Булево значение, указывающее, точно ли маршрут совпал с URL.

**Пример использования:**
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
      id: 102304,
      question: "Как использовать Query Parameters из объекта location?",
      answer: `
**Query Parameters:**
- Используйте хук \`useSearchParams\` или библиотеку \`URLSearchParams\` для работы с параметрами запроса.

**Пример с \`useSearchParams\`:**
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

**Пример с \`URLSearchParams\`:**
\`\`\`javascript
import { useLocation } from 'react-router-dom';

function SearchPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q');

  return <p>Search Query: {query}</p>;
}
\`\`\`
`,
    },
    {
      id: 102305,
      question: "Как передать состояние через объект history?",
      answer: `
**Передача состояния через \`history\`:**
- Используйте свойство \`state\` при вызове \`push\` или \`replace\`.

**Пример:**
\`\`\`javascript
import { useHistory } from 'react-router-dom';

function NavigateButton() {
  const history = useHistory();

  const handleNavigate = () => {
    history.push('/dashboard', { from: 'home' }); // Передаем состояние
  };

  return <button onClick={handleNavigate}>Go to Dashboard</button>;
}

function Dashboard() {
  const location = useLocation();

  return <p>Came from: {location.state?.from}</p>;
}
\`\`\`
`,
    },
    {
      id: 102306,
      question: "Как обработать несуществующий маршрут?",
      answer: `
**Обработка несуществующего маршрута:**
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
      id: 102307,
      question: "Как использовать объект match для вложенных маршрутов?",
      answer: `
**Использование объекта \`match\` для вложенных маршрутов:**
- \`match.url\` и \`match.path\` помогают динамически создавать ссылки и маршруты.

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
  const match = useMatch('/dashboard'); // Получаем match

  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to={\`\${match.url}/profile\`}>Profile</Link> | 
        <Link to={\`\${match.url}/settings\`}>Settings</Link>
      </nav>
      <Outlet /> {/* Рендерит дочерний маршрут */}
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102308,
      question: "Как работает хук useMatch?",
      answer: `
**Хук \`useMatch\`:**
- Позволяет проверить, совпадает ли текущий URL с указанным шаблоном.

**Пример:**
\`\`\`javascript
import { useMatch } from 'react-router-dom';

function ActiveLink({ to, children }) {
  const match = useMatch(to);

  return (
    <div style={{ fontWeight: match ? 'bold' : 'normal' }}>
      {children}
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/about">About</ActiveLink>
    </nav>
  );
}
\`\`\`
`,
    },
    {
      id: 102309,
      question: "Как использовать объект location для перенаправления?",
      answer: `
**Перенаправление с использованием \`location\`:**
- Используйте компонент \`Navigate\` или хук \`useNavigate\`.

**Пример с \`Navigate\`:**
\`\`\`javascript
import { Navigate, useLocation } from 'react-router-dom';

function Redirect() {
  const location = useLocation();

  return <Navigate to="/dashboard" state={{ from: location }} />;
}
\`\`\`

**Пример с \`useNavigate\`:**
\`\`\`javascript
import { useNavigate } from 'react-router-dom';

function RedirectToDashboard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };

  return <button onClick={handleClick}>Go to Dashboard</button>;
}
\`\`\`
`,
    },
  ],
};
