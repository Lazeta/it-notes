export const testUseEffect = {
  id: 102375,
  title: "хук useEffect",
  questions: [
    {
      id: 102376,
      question: "Что такое хук useEffect?",
      answer: `
**Хук \`useEffect\`:**
- Это хук React, который позволяет выполнять побочные эффекты в функциональных компонентах.
- Заменяет методы жизненного цикла классовых компонентов (\`componentDidMount\`, \`componentDidUpdate\`, \`componentWillUnmount\`).

**Основные случаи использования:**
1. Выполнение кода при монтировании и обновлении компонента.
2. Подписка на события (например, WebSocket).
3. API-запросы.
4. Очистка ресурсов (например, отмена подписок или таймеров).

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
  }, []); // Пустой массив зависимостей = выполнение только при монтировании

  return <p>Seconds: {seconds}</p>;
}
\`\`\`
`,
    },
    {
      id: 102377,
      question: "Как работает массив зависимостей в useEffect?",
      answer: `
**Массив зависимостей:**
- Второй аргумент \`useEffect\` — это массив зависимостей, который определяет, когда эффект должен выполняться.

**Варианты:**
1. **Пустой массив (\`[]\`):**
   - Эффект выполняется только при монтировании и размонтировании компонента.
2. **Зависимости (например, \`[count]\`):**
   - Эффект выполняется при изменении указанных зависимостей.
3. **Отсутствие массива:**
   - Эффект выполняется при каждом рендере компонента.

**Пример с зависимостями:**
\`\`\`javascript
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(\`Count updated: $\{count}\`);
  }, [count]); // Эффект срабатывает только при изменении count

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
      id: 102378,
      question: "Как использовать useEffect для API-запросов?",
      answer: `
**API-запросы с помощью \`useEffect\`:**
- Используйте \`useEffect\` для выполнения запросов к серверу при монтировании компонента или изменении зависимостей.

**Пример:**
\`\`\`javascript
import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/data ')
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); // Запрос выполняется только один раз при монтировании

  if (loading) return <p>Loading...</p>;

  return <div>{JSON.stringify(data)}</div>;
}
\`\`\`
`,
    },
    {
      id: 102379,
      question: "Как выполнить очистку ресурсов в useEffect?",
      answer: `
**Очистка ресурсов:**
- Если эффект создает ресурсы (например, подписки, таймеры), их нужно очистить, чтобы избежать утечек памяти.
- Для этого возвращайте функцию очистки из \`useEffect\`.

**Пример:**
\`\`\`javascript
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Очистка таймера
  }, []);

  return <p>Seconds: {seconds}</p>;
}
\`\`\`
`,
    },
    {
      id: 102380,
      question: "Как избежать бесконечного цикла в useEffect?",
      answer: `
**Бесконечный цикл:**
- Бесконечный цикл возникает, если эффект обновляет состояние, которое является зависимостью эффекта.

**Решения:**
1. **Добавьте зависимости:**
   - Убедитесь, что все зависимости указаны в массиве.
2. **Используйте пустой массив зависимостей:**
   - Если эффект не зависит от состояния или пропсов, используйте \`[]\`.
3. **Избегайте изменения состояния внутри эффекта:**
   - Если необходимо обновить состояние, используйте условные проверки.

**Пример:**
\`\`\`javascript
import React, { useState, useEffect } from 'react';

function InfiniteLoopExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 5) {
      setCount((prev) => prev + 1); // Безопасное обновление
    }
  }, [count]); // Безопасная зависимость

  return <p>Count: {count}</p>;
}
\`\`\`
`,
    },
  ],
};
