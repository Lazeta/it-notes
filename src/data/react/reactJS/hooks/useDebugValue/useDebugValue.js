export const useDebugValue = {
  id: 2574,
  title: "useDebugValue",
  children: [
    {
      title: "Определение",
      type: "text",
      description: `
        <p><strong>useDebugValue</strong> — это хук, который позволяет добавлять метки в инструменты разработчика React (React DevTools) для пользовательских хуков. Это помогает легче отслеживать состояние и значения, возвращаемые кастомными хуками.</p>
        <p><strong>Основные кейсы:</strong></p>
        <ul>
          <li>Отображение текущего состояния пользовательского хука.</li>
          <li>Добавление меток для сложных данных (например, объектов).</li>
          <li>Улучшение читаемости в React DevTools.</li>
        </ul>
      `,
    },
    {
      title: "Синтаксис",
      type: "text",
      description: `
        <pre><code>import { useDebugValue } from 'react';

function useCustomHook() {
  const [state, setState] = useState(0);

  // Добавление метки в React DevTools
  useDebugValue(state > 0 ? 'Positive' : 'Zero or Negative');

  return [state, setState];
}</code></pre>
      `,
    },
    {
      title: "Пример использования",
      type: "text",
      description: `
        <p><strong>Пример: пользовательский хук для отслеживания онлайн-статуса:</strong></p>
      `,
      code: `
import { useState, useEffect, useDebugValue } from 'react';

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Добавление метки в React DevTools
  useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}

// Использование
function App() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <p>Статус: {isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
      `,
    },
    {
      title: "Лучшие практики",
      type: "text",
      description: `
        <ul>
          <li><strong>Используйте только для пользовательских хуков:</strong> <code>useDebugValue</code> не нужен для встроенных хуков, так как они уже имеют встроенную поддержку отладки.</li>
          <li><strong>Добавляйте метки только для важных данных:</strong> Не перегружайте React DevTools избыточной информацией.</li>
          <li><strong>Форматируйте сложные данные:</strong> Для сложных объектов используйте функцию форматирования.</li>
        </ul>
      `,
    },
    {
      title: "Форматирование сложных данных",
      type: "text",
      description: `
        <p><strong>Пример: форматирование объекта:</strong></p>
        <pre><code>function useUser(user) {
  useDebugValue(user, user => \`Name: \${user.name}, Age: \${user.age}\`);
  return user;
}</code></pre>

        <p><strong>Пример: форматирование времени:</strong></p>
        <pre><code>function useTimestamp() {
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTimestamp(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  useDebugValue(new Date(timestamp).toISOString());
  return timestamp;
}</code></pre>
      `,
    },
    {
      title: "Частые ошибки",
      type: "text",
      description: `
        <p><strong>1. Избыточное использование:</strong></p>
        <pre><code>// Не добавляйте метки для каждого хука
// Добавляйте только для тех, которые действительно требуют отладки</code></pre>

        <p><strong>2. Неправильная форматизация:</strong></p>
        <pre><code>// Плохо: слишком сложная метка
useDebugValue({ a: 1, b: 2, c: 3 });

// Лучше: форматируйте данные
useDebugValue({ a: 1, b: 2, c: 3 }, data => \`a=\${data.a}, b=\${data.b}, c=\${data.c}\`);</code></pre>
      `,
    },
    {
      title: "TypeScript и useDebugValue",
      type: "text",
      description: `
        <p><strong>Типизация для useDebugValue:</strong></p>
        <pre><code>function useCounter(initialValue: number) {
  const [count, setCount] = useState(initialValue);

  // Метка для отладки
  useDebugValue(count > 0 ? 'Positive' : 'Zero or Negative');

  return [count, setCount] as const;
}</code></pre>
      `,
    },
    {
      title: "Продвинутые паттерны",
      type: "text",
      description: `
        <p><strong>1. Комбинирование с useMemo:</strong></p>
        <pre><code>function useExpensiveCalculation(data) {
  const result = useMemo(() => expensiveComputation(data), [data]);

  // Отображение результата в React DevTools
  useDebugValue(result, result => \`Result: \${result.toFixed(2)}\`);

  return result;
}</code></pre>

        <p><strong>2. Отладка асинхронных операций:</strong></p>
        <pre><code>function useAsyncData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      const response = await fetch(url);
      const result = await response.json();
      if (isMounted) {
        setData(result);
        setLoading(false);
      }
    }

    fetchData();

    return () => { isMounted = false; };
  }, [url]);

  // Отображение статуса в React DevTools
  useDebugValue(loading ? 'Loading...' : 'Loaded');

  return data;
}</code></pre>
      `,
    },
  ],
};
