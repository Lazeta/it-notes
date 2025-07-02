export const testConcurrentModeSuspense = {
  id: 103175,
  title: "Concurrent Mode and Suspense (конкурентный режим и подвеска)",
  questions: [
    {
      id: 103176,
      question: "Что такое Concurrent Mode в React?",
      answer: `
**Concurrent Mode:**
- Это экспериментальный режим в React, который позволяет приложению оставаться отзывчивым, даже если часть UI блокируется или требует времени для загрузки.
- Включает в себя такие возможности, как приостановка рендеринга, разделение работы на части и приоритезацию обновлений.

**Основные особенности:**
1. **Прерываемый рендеринг:**
   - React может приостановить выполнение долгих операций и вернуться к ним позже.
2. **Приоритеты обновлений:**
   - Высокоприоритетные обновления (например, пользовательский ввод) выполняются раньше.
3. **Улучшение UX:**
   - Интерфейс остается отзывчивым, даже при медленных операциях.

**Пример:**
\`\`\`javascript
// Включение Concurrent Mode (React 18+):
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
\`\`\`
`,
    },
    {
      id: 103177,
      question: "Что такое Suspense и как он работает?",
      answer: `
**Suspense:**
- Это компонент, который позволяет "приостановить" рендеринг до тех пор, пока асинхронная операция (например, загрузка данных) не завершится.
- Пока данные загружаются, можно показать запасной контент (например, спиннер).

**Пример:**
\`\`\`javascript
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}
\`\`\`
`,
    },
    {
      id: 103178,
      question: "Как работает Suspense с ленивой загрузкой компонентов?",
      answer: `
**Suspense с ленивой загрузкой:**
- \`React.lazy\` используется для динамического импорта компонентов.
- \`Suspense\` отвечает за отображение запасного контента, пока компонент загружается.

**Пример:**
\`\`\`javascript
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}
\`\`\`
`,
    },
    {
      id: 103179,
      question: "Как использовать Suspense для загрузки данных?",
      answer: `
**Suspense для загрузки данных:**
- В React 18+ можно использовать Suspense для загрузки данных через библиотеки (например, Relay или Next.js).
- Данные загружаются асинхронно, а Suspense показывает запасной контент.

**Пример (Next.js):**
\`\`\`javascript
import { Suspense } from 'react';

function DataComponent() {
  const data = useFetchData('/api/data'); // Гипотетический хук для загрузки данных
  return <div>{data}</div>;
}

function App() {
  return (
    <Suspense fallback={<div>Loading data...</div>}>
      <DataComponent />
    </Suspense>
  );
}
\`\`\`
`,
    },
    {
      id: 103180,
      question: "Как Concurrent Mode улучшает производительность?",
      answer: `
**Улучшение производительности:**
1. **Разделение работы:**
   - React разделяет сложные задачи на мелкие части, чтобы избежать блокировки основного потока.
2. **Приостановка рендеринга:**
   - Если задача занимает много времени, React может приостановить её и выполнить другие задачи.
3. **Приоритизация обновлений:**
   - Высокоприоритетные обновления (например, клик пользователя) выполняются раньше.

**Пример:**
\`\`\`javascript
function App() {
  const [input, setInput] = React.useState('');
  const [data, setData] = React.useState(null);

  // Высокоприоритетное обновление
  const handleChange = (e) => setInput(e.target.value);

  // Низкоприоритетное обновление
  React.useEffect(() => {
    fetch('/api/data').then((res) => res.json()).then(setData);
  }, []);

  return (
    <div>
      <input value={input} onChange={handleChange} />
      <React.Suspense fallback={<div>Loading...</div>}>
        <DataDisplay data={data} />
      </React.Suspense>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 103181,
      question: "Какие есть ограничения у Concurrent Mode?",
      answer: `
**Ограничения:**
1. **Экспериментальный статус:**
   - Concurrent Mode все еще находится в разработке (React 18+).
2. **Сложность интеграции:**
   - Требует изменения архитектуры приложения.
3. **Поддержка библиотек:**
   - Не все библиотеки совместимы с Concurrent Mode.

**Пример проблемы:**
\`\`\`javascript
// Библиотеки, которые полагаются на синхронный рендеринг, могут работать некорректно.
\`\`\`
`,
    },
    {
      id: 103182,
      question: "Как тестировать компоненты с Suspense?",
      answer: `
**Тестирование:**
- Используйте \`@testing-library/react\` для тестирования компонентов с Suspense.
- Мокируйте асинхронные операции для проверки поведения.

**Пример:**
\`\`\`javascript
import { render, screen } from '@testing-library/react';
import React, { Suspense } from 'react';

jest.mock('./LazyComponent', () => ({
  __esModule: true,
  default: () => <div>Mocked Lazy Component</div>,
}));

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

test('renders mocked lazy component', () => {
  render(<App />);
  expect(screen.getByText('Mocked Lazy Component')).toBeInTheDocument();
});
\`\`\`
`,
    },
    {
      id: 103183,
      question: "Что такое Time Slicing (временные срезы)?",
      answer: `
**Time Slicing:**
- Это технология, которая позволяет React разделять работу на небольшие фрагменты и выполнять их постепенно.
- Пользовательский интерфейс остается отзывчивым, даже при выполнении тяжелых операций.

**Пример:**
\`\`\`javascript
// React автоматически разделяет рендеринг на части.
function HeavyComponent() {
  const items = Array.from({ length: 10000 }, (_, i) => <div key={i}>Item {i}</div>);
  return <div>{items}</div>;
}
\`\`\`
`,
    },
    {
      id: 103184,
      question: "Как Suspense помогает в SSR (Server-Side Rendering)?",
      answer: `
**Suspense в SSR:**
- В Next.js и других фреймворках Suspense позволяет откладывать рендеринг частей страницы, пока данные загружаются.
- Это улучшает производительность и SEO.

**Пример (Next.js):**
\`\`\`javascript
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Content />
    </Suspense>
  );
}

async function Content() {
  const data = await fetchData(); // Асинхронная загрузка данных
  return <div>{data}</div>;
}
\`\`\`
`,
    },
    {
      id: 103185,
      question: "Как выбрать между Suspense и useEffect для загрузки данных?",
      answer: `
**Выбор между Suspense и useEffect:**
1. **Suspense:**
   - Подходит для декларативной загрузки данных.
   - Работает с библиотеками, поддерживающими Suspense (например, Relay, Next.js).
2. **useEffect:**
   - Подходит для простой загрузки данных.
   - Работает в любом React-приложении.

**Пример:**
\`\`\`javascript
// Suspense:
function DataComponent() {
  const data = useSuspenseFetch('/api/data');
  return <div>{data}</div>;
}

// useEffect:
function DataComponent() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch('/api/data').then((res) => res.json()).then(setData);
  }, []);
  return data ? <div>{data}</div> : <div>Loading...</div>;
}
\`\`\`
`,
    },
  ],
};
