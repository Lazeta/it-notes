export const testCustomHooks = {
  id: 102525,
  title: "Custom hooks (пользовательские хуки)",
  questions: [
    {
      id: 102526,
      question: "Что такое пользовательский хук?",
      answer: `
**Пользовательский хук:**
- Это функция, которая начинается с префикса \`use\` и может использовать встроенные хуки React (например, \`useState\`, \`useEffect\`).
- Позволяет вынести повторяющуюся логику в отдельную функцию для переиспользования в разных компонентах.

**Пример:**
\`\`\`javascript
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, [url]);

  return [data, loading];
}

function FetchData() {
  const [data, loading] = useFetch('https://api.example.com/data ');

  if (loading) return <p>Loading...</p>;

  return <div>{JSON.stringify(data)}</div>;
}
\`\`\`
`,
    },
    {
      id: 102527,
      question: "Зачем нужны пользовательские хуки?",
      answer: `
**Зачем нужны пользовательские хуки:**
1. **Реализация переиспользуемой логики:**
   - Вынос повторяющейся логики (например, API-запросы, обработка состояния) в отдельные функции.
2. **Упрощение компонентов:**
   - Уменьшение сложности компонентов за счет делегирования логики в хуки.
3. **Соблюдение принципа DRY:**
   - Избегание дублирования кода.
4. **Лучшая читаемость:**
   - Компоненты становятся более понятными благодаря разделению логики.

**Пример:**
\`\`\`javascript
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102528,
      question: "Как создать пользовательский хук?",
      answer: `
**Создание пользовательского хука:**
1. Название должно начинаться с \`use\`.
2. Можно использовать встроенные хуки внутри пользовательского хука.
3. Возвращать данные или функции, которые могут быть использованы в компонентах.

**Пример:**
\`\`\`javascript
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
}

function WindowSizeDisplay() {
  const [width, height] = useWindowSize();

  return (
    <div>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102529,
      question: "Можно ли передавать параметры в пользовательские хуки?",
      answer: `
**Да, можно:**
- Пользовательские хуки могут принимать параметры для настройки их поведения.

**Пример:**
\`\`\`javascript
function useTimeout(callback, delay) {
  useEffect(() => {
    const timer = setTimeout(callback, delay);

    return () => clearTimeout(timer);
  }, [callback, delay]);
}

function TimerComponent() {
  useTimeout(() => {
    console.log('Timeout triggered!');
  }, 3000);

  return <p>Check the console after 3 seconds.</p>;
}
\`\`\`
`,
    },
    {
      id: 102530,
      question: "Как тестировать пользовательские хуки?",
      answer: `
**Тестирование пользовательских хуков:**
1. **Использование библиотеки \`@testing-library/react-hooks\`:**
   - Предоставляет утилиты для тестирования хуков.
2. **Создание тестового компонента:**
   - Оберните хук в тестовый компонент для проверки его работы.

**Пример теста:**
\`\`\`javascript
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from './useCounter';

test('increments counter', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
\`\`\`
`,
    },
    {
      id: 102531,
      question: "Как организовать структуру пользовательских хуков в проекте?",
      answer: `
**Организация пользовательских хуков:**
1. **Отдельная папка:**
   - Создайте папку \`hooks\` в корне проекта.
2. **Группировка по назначению:**
   - Разделяйте хуки по функционалу (например, \`useFetch.js\`, \`useForm.js\`).
3. **Нейминг:**
   - Используйте префикс \`use\` для всех пользовательских хуков (например, \`useAuth\`, \`useTheme\`).

**Пример структуры:**
\`\`\`plaintext
src/
  hooks/
    useFetch.js
    useCounter.js
    useWindowSize.js
\`\`\`
`,
    },
    {
      id: 102532,
      question: "Какие популярные пользовательские хуки существуют?",
      answer: `
**Популярные пользовательские хуки:**
1. **useFetch:**
   - Для выполнения API-запросов.
2. **useForm:**
   - Для управления формами.
3. **useLocalStorage:**
   - Для работы с localStorage.
4. **usePrevious:**
   - Для получения предыдущего значения состояния.
5. **useDarkMode:**
   - Для управления темной темой.

**Пример \`useLocalStorage\`:**
\`\`\`javascript
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

function App() {
  const [name, setName] = useLocalStorage('username', 'Guest');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}!</p>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102533,
      question:
        "Как использовать пользовательские хуки в классовых компонентах?",
      answer: `
**Использование пользовательских хуков в классовых компонентах:**
- Непосредственно использовать хуки в классовых компонентах нельзя.
- Решение:
  1. **Вынести логику в функциональный компонент:**
     - Оберните хук в функциональный компонент и используйте его как дочерний элемент.
  2. **Использовать HOC (Higher-Order Component):**
     - Передайте логику через HOC.

**Пример HOC:**
\`\`\`javascript
function withWindowSize(Component) {
  return function WrappedComponent(props) {
    const [width, height] = useWindowSize();
    return <Component {...props} width={width} height={height} />;
  };
}

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Width: {this.props.width}</p>
        <p>Height: {this.props.height}</p>
      </div>
    );
  }
}

export default withWindowSize(App);
\`\`\`
`,
    },
  ],
};
