export const testLazyImports = {
  id: 103150,
  title: "Lazy Imports (ленивые импорты)",
  questions: [
    {
      id: 103151,
      question: "Что такое lazy imports (ленивые импорты)?",
      answer: `
**Ленивые импорты:**
- Это техника динамического импорта модулей, которая позволяет загружать код только тогда, когда он действительно нужен.
- Используется для оптимизации производительности и уменьшения размера начального бандла.

**Пример:**
\`\`\`javascript
// Статический импорт
import Module from './Module';

// Ленивый импорт
const Module = await import('./Module');
\`\`\`
`,
    },
    {
      id: 103152,
      question: "Как использовать динамический импорт в JavaScript?",
      answer: `
**Динамический импорт:**
- Используйте \`import()\` как функцию, которая возвращает Promise.

**Пример:**
\`\`\`javascript
document.getElementById('btn').addEventListener('click', async () => {
  const module = await import('./Module');
  module.default();
});
\`\`\`
`,
    },
    {
      id: 103153,
      question: "Как работает React.lazy и Suspense?",
      answer: `
**React.lazy и Suspense:**
- \`React.lazy\` используется для ленивой загрузки компонентов.
- \`Suspense\` показывает запасной контент (например, спиннер), пока компонент загружается.

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
      id: 103154,
      question: "Зачем нужны ленивые импорты?",
      answer: `
**Зачем нужны:**
1. **Оптимизация производительности:**
   - Уменьшают время начальной загрузки приложения.
2. **Code Splitting:**
   - Разделяют код на части, которые загружаются по требованию.
3. **Улучшение UX:**
   - Пользователи быстрее видят основной контент.

**Пример проблемы:**
\`\`\`javascript
// Без ленивых импортов:
import HeavyComponent from './HeavyComponent';
// HeavyComponent загружается всегда, даже если не используется.
\`\`\`

**Решение:**
\`\`\`javascript
// С ленивыми импортами:
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
\`\`\`
`,
    },
    {
      id: 103155,
      question: "Как тестировать компоненты с React.lazy?",
      answer: `
**Тестирование:**
- Используйте \`@testing-library/react\` и \`jest.mock\` для мокирования ленивых компонентов.

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
      id: 103156,
      question: "Какие есть ограничения у React.lazy?",
      answer: `
**Ограничения:**
1. **Поддержка только дефолтных экспортов:**
   - \`React.lazy\` работает только с модулями, использующими \`export default\`.
2. **Не поддерживает SSR без дополнительной настройки:**
   - Требуется интеграция с серверным рендерингом (например, Next.js).
3. **Нельзя использовать вне Suspense:**
   - \`React.lazy\` должен быть обернут в \`Suspense\`.

**Пример проблемы:**
\`\`\`javascript
// Ошибка:
const NamedExportComponent = React.lazy(() => import('./NamedExportComponent'));

// Решение:
const DefaultExportComponent = React.lazy(() => import('./DefaultExportComponent'));
\`\`\`
`,
    },
    {
      id: 103157,
      question: "Как реализовать ленивую загрузку в Next.js?",
      answer: `
**Ленивая загрузка в Next.js:**
- Используйте динамический импорт с \`next/dynamic\`.

**Пример:**
\`\`\`javascript
import dynamic from 'next/dynamic';

const LazyComponent = dynamic(() => import('../components/LazyComponent'), {
  loading: () => <p>Loading...</p>,
});

function Page() {
  return (
    <div>
      <h1>Lazy Loading Example</h1>
      <LazyComponent />
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 103158,
      question: "Как комбинировать ленивые импорты и маршрутизацию?",
      answer: `
**Ленивые импорты с маршрутизацией:**
- Используйте \`React.lazy\` для загрузки компонентов маршрутов.

**Пример:**
\`\`\`javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
\`\`\`
`,
    },
    {
      id: 103159,
      question: "Какие есть альтернативы React.lazy?",
      answer: `
**Альтернативы:**
1. **Loadable Components:**
   - Библиотека для ленивой загрузки компонентов с дополнительными возможностями.
2. **Next.js Dynamic Imports:**
   - Встроенная поддержка ленивой загрузки в Next.js.
3. **Manual Code Splitting:**
   - Использование Webpack или Vite для разделения кода.

**Пример Loadable Components:**
\`\`\`javascript
import loadable from '@loadable/component';

const LazyComponent = loadable(() => import('./LazyComponent'), {
  fallback: <div>Loading...</div>,
});

function App() {
  return <LazyComponent />;
}
\`\`\`
`,
    },
    {
      id: 103160,
      question: "Как измерить производительность ленивой загрузки?",
      answer: `
**Измерение производительности:**
1. **Webpack Bundle Analyzer:**
   - Анализирует размер бандлов.
2. **Performance API:**
   - Измеряет время загрузки модулей.
3. **React Profiler:**
   - Анализирует рендеринг компонентов.

**Пример Performance API:**
\`\`\`javascript
const start = performance.now();
await import('./Module');
const end = performance.now();
console.log(\`Module loaded in $\{end - start}ms\`);
\`\`\`
`,
    },
  ],
};
