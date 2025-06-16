export const CacheReact = {
  id: 535,
  title: "Cache in React (кэширование в реакт)",
  children: [
    {
      title: "Что такое кэширование в React?",
      type: "text",
      description: `
        <p><strong>Кэширование</strong> — это процесс сохранения результатов вычислений или данных для их повторного использования. В React кэширование помогает избежать ненужных перерасчетов, запросов к API или ререндеров компонентов.</p>
        <p>Основные преимущества:</p>
        <ul>
          <li>Уменьшение нагрузки на CPU и память.</li>
          <li>Оптимизация производительности приложений.</li>
          <li>Минимизация количества запросов к серверу.</li>
        </ul>
      `,
    },
    {
      title: "Инструменты кэширования в React",
      type: "text",
      description: `
        <p>React предоставляет несколько встроенных инструментов для кэширования:</p>
        <ul>
          <li><strong>useMemo:</strong> Кэширует результат вычислений.</li>
          <li><strong>useCallback:</strong> Кэширует функции.</li>
          <li><strong>React.memo:</strong> Кэширует результат рендеринга функциональных компонентов.</li>
          <li><strong>Suspense и React Query:</strong> Для кэширования данных (например, результатов запросов).</li>
        </ul>
      `,
    },
    {
      title: "useMemo",
      type: "text",
      description: `
        <p><strong>useMemo</strong> — это хук, который кэширует результат вычислений. Он полезен для тяжелых операций, таких как фильтрация массивов или сложные математические вычисления.</p>
      `,
      code: `
import React, { useMemo } from 'react';

function Component({ data }) {
  // Кэшируем результат вычислений
  const processedData = useMemo(() => {
    return data.filter(item => item.isActive);
  }, [data]);

  return <div>{processedData.length} активных элементов</div>;
}
      `,
    },
    {
      title: "useCallback",
      type: "text",
      description: `
        <p><strong>useCallback</strong> — это хук, который кэширует функции. Он полезен для предотвращения ненужных ререндеров дочерних компонентов, если функция передается через пропсы.</p>
      `,
      code: `
import React, { useCallback } from 'react';

function ParentComponent() {
  // Кэшируем функцию
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
  }, []);

  return <ChildComponent onClick={handleClick} />;
}

function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}
      `,
    },
    {
      title: "React.memo",
      type: "text",
      description: `
        <p><strong>React.memo</strong> — это функция для кэширования результатов рендеринга функциональных компонентов. Она предотвращает ререндер компонента, если его пропсы не изменились (по результатам поверхностного сравнения).</p>
      `,
      code: `
import React from 'react';

const MyComponent = React.memo(function MyComponent({ value }) {
  console.log('Render called');
  return <div>Value: {value}</div>;
});

function App() {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <MyComponent value={value} />
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </>
  );
}
      `,
    },
    {
      title: "Suspense и React Query",
      type: "text",
      description: `
        <p><strong>Suspense</strong> и <strong>React Query</strong> позволяют кэшировать данные, например, результаты запросов к API. Это особенно полезно для асинхронных операций.</p>
      `,
      code: `
// Пример с React Query
import { useQuery } from 'react-query';

function fetchData() {
  return fetch('/api/data').then(res => res.json());
}

function Component() {
  const { data, isLoading } = useQuery('data', fetchData);

  if (isLoading) return <div>Loading...</div>;

  return <div>{data.map(item => <p key={item.id}>{item.name}</p>)}</div>;
}
      `,
    },
    {
      title: "Лучшие практики",
      type: "text",
      description: `
        <ul>
          <li><strong>Используйте кэширование только при необходимости:</strong> Не злоупотребляйте <code>useMemo</code>, <code>useCallback</code> или <code>React.memo</code>, так как они добавляют сложность.</li>
          <li><strong>Тестируйте производительность:</strong> Убедитесь, что кэширование действительно улучшает производительность.</li>
          <li><strong>Избегайте мутаций:</strong> Данные должны быть иммутабельными для корректного кэширования.</li>
        </ul>
      `,
    },
    {
      title: "Частые ошибки",
      type: "text",
      description: `
        <p><strong>1. Избыточное использование useMemo/useCallback:</strong></p>
        <pre><code>// Плохо: кэширование простых вычислений
const value = useMemo(() => a + b, [a, b]);

// Лучше: используйте обычное вычисление
const value = a + b;
</code></pre>

        <p><strong>2. Неправильное сравнение зависимостей:</strong></p>
        <pre><code>// Плохо: забытая зависимость
const memoizedValue = useMemo(() => computeValue(data), []);

// Лучше: добавьте все зависимости
const memoizedValue = useMemo(() => computeValue(data), [data]);
</code></pre>
      `,
    },
    {
      title: "Продвинутые паттерны",
      type: "text",
      description: `
        <p><strong>1. Кэширование с помощью Map:</strong></p>
        <pre><code>function createCachedFunction(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log('Using cached result');
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const add = (a, b) => a + b;
const cachedAdd = createCachedFunction(add);

console.log(cachedAdd(2, 3)); // Вычисляет и кэширует
console.log(cachedAdd(2, 3)); // Использует кэш
</code></pre>

        <p><strong>2. Кэширование данных с SWR:</strong></p>
        <pre><code>import useSWR from 'swr';

function fetcher(url) {
  return fetch(url).then(res => res.json());
}

function Component() {
  const { data, error } = useSWR('/api/data', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return <div>{data.map(item => <p key={item.id}>{item.name}</p>)}</div>;
}
</code></pre>
      `,
    },
    {
      title: "Дополнительные материалы",
      type: "text",
      description: `
        <p>Для более глубокого изучения:</p>
        <ul>
          <li><a href="https://reactjs.org/docs/hooks-reference.html#usememo" target="_blank">React Documentation: useMemo</a></li> 
          <li><a href="https://reactjs.org/docs/hooks-reference.html#usecallback" target="_blank">React Documentation: useCallback</a></li> 
          <li><a href="https://react-query.tanstack.com/"  target="_blank">React Query Documentation</a></li>
          <li><a href="https://swr.vercel.app/"  target="_blank">SWR Documentation</a></li>
        </ul>
      `,
    },
  ],
};
