export const useCallback = {
  id: 2547,
  title: "useCallback",
  children: [
    {
      title: "Основы использования",
      type: "text",
      description: `
        <p><strong>useCallback</strong> — хук для мемоизации функций между рендерами.</p>
        
        <pre><code>import { useCallback } from 'react';

function MyComponent({ onClick }) {
  const handleClick = useCallback(() => {
    console.log('Clicked!');
    onClick();
  }, [onClick]);

  return &lt;button onClick={handleClick}&gt;Click me&lt;/button&gt;;
}</code></pre>

        <p><strong>Параметры:</strong></p>
        <ul>
          <li><code>callback</code> — функция для мемоизации</li>
          <li><code>dependencies</code> — массив зависимостей</li>
        </ul>
      `
    },
    {
      title: "Когда использовать",
      type: "text",
      description: `
        <p><strong>1. Передача колбэков дочерним компонентам:</strong></p>
        <pre><code>const Child = React.memo(function Child({ onItemClick }) {
  /* Рендерится только при изменении пропсов */
});

function Parent({ items }) {
  const handleClick = useCallback((id) => {
    console.log('Item clicked:', id);
  }, []);

  return items.map(item => (
    &lt;Child key={item.id} onItemClick={handleClick} /&gt;
  ));
}</code></pre>

        <p><strong>2. Зависимости эффектов:</strong></p>
        <pre><code>const fetchData = useCallback(async () => {
  const res = await fetch(url);
  return res.json();
}, [url]); // Эффект зависит от стабильной ссылки на функцию

useEffect(() => {
  fetchData();
}, [fetchData]);</code></pre>

        <p><strong>3. Оптимизация хэндлеров событий:</strong></p>
        <pre><code>const handleScroll = useCallback(() => {
  /* Логика скролла */
}, []);

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [handleScroll]);</code></pre>
      `
    },
    {
      title: "Типизация с TypeScript",
      type: "text",
      description: `
        <p><strong>Явное указание типов параметров:</strong></p>
        <pre><code>const handleClick = useCallback&lt;(id: number) => void&gt;(
  (id) => { /* ... */ },
  []
);</code></pre>

        <p><strong>Типизация сложных колбэков:</strong></p>
        <pre><code>type SubmitHandler = (values: FormValues) => Promise&lt;void&gt;;

const onSubmit = useCallback&lt;SubmitHandler&gt;(
  async (values) => {
    await submitToApi(values);
  },
  [submitToApi]
);</code></pre>

        <p><strong>Автовывод типов:</strong></p>
        <pre><code>// Тип автоматически определяется как () => void
const handler = useCallback(() => {
  console.log('Hello');
}, []);</code></pre>
      `
    },
    {
      title: "Оптимизация производительности",
      type: "text",
      description: `
        <p><strong>1. Правильный выбор зависимостей:</strong></p>
        <pre><code>const [count, setCount] = useState(0);

// Плохо - пропущена зависимость count
const increment = useCallback(() => {
  setCount(count + 1);
}, []);

// Хорошо - функциональное обновление
const increment = useCallback(() => {
  setCount(c => c + 1);
}, []);</code></pre>

        <p><strong>2. Комбинирование с useMemo:</strong></p>
        <pre><code>const contextValue = useMemo(() => ({
  onClick: useCallback(() => {...}, []),
  data: expensiveData
}), [expensiveData]);</code></pre>

        <p><strong>3. Избегание избыточного использования:</strong></p>
        <pre><code>// Не нужно - функция создаётся один раз и так
const simpleHandler = () => console.log('Hi');

// Нужно - если передаётся в memo-компонент
const complexHandler = useCallback(() => {...}, [deps]);</code></pre>
      `
    },
    {
      title: "Практические примеры",
      type: "text",
      description: `
        <p><strong>1. Форма с валидацией:</strong></p>
        <pre><code>function Form({ onSubmit }) {
  const [values, setValues] = useState({});
  
  const handleChange = useCallback((name, value) => {
    setValues(v => ({ ...v, [name]: value }));
  }, []);
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onSubmit(values);
  }, [values, onSubmit]);

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;Input name="email" onChange={handleChange} /&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>

        <p><strong>2. Кастомный хук для событий:</strong></p>
        <pre><code>function useEventListener(event, handler, deps = []) {
  const memoizedHandler = useCallback(handler, deps);
  
  useEffect(() => {
    window.addEventListener(event, memoizedHandler);
    return () => window.removeEventListener(event, memoizedHandler);
  }, [event, memoizedHandler]);
}</code></pre>

        <p><strong>3. Оптимизированный список:</strong></p>
        <pre><code>const List = React.memo(function List({ items, onSelect }) {
  /* Рендерится только при изменении items или onSelect */
});

function Parent() {
  const handleSelect = useCallback((id) => {
    /* Логика выбора */
  }, []);

  return &lt;List items={items} onSelect={handleSelect} /&gt;;
}</code></pre>
      `
    },
    {
      title: "Распространённые ошибки",
      type: "text",
      description: `
        <p><strong>1. Лишние зависимости:</strong></p>
        <pre><code>const [count, setCount] = useState(0);

// Плохо - лишняя зависимость (setCount стабилен)
const increment = useCallback(() => {
  setCount(c => c + 1);
}, [setCount]);</code></pre>

        <p><strong>2. Путаница с useMemo:</strong></p>
        <pre><code>// Неправильно - useMemo для функций
const handler = useMemo(() => () => {...}, []);

// Правильно - useCallback
const handler = useCallback(() => {...}, []);</code></pre>

        <p><strong>3. Неоправданное использование:</strong></p>
        <pre><code>// Избыточно - функция не передаётся в memo-компонент
const handler = useCallback(() => {...}, []);

return &lt;button onClick={handler}&gt;Click&lt;/button&gt;;</code></pre>
      `
    },
    {
      title: "Сравнение с useMemo",
      type: "text",
      description: `
        <table border="1">
          <tr>
            <th>Хук</th>
            <th>Назначение</th>
            <th>Пример</th>
          </tr>
          <tr>
            <td><code>useCallback</code></td>
            <td>Мемоизация функций</td>
            <td><code>() => {...}</code></td>
          </tr>
          <tr>
            <td><code>useMemo</code></td>
            <td>Мемоизация значений</td>
            <td><code>expensiveCalculation()</code></td>
          </tr>
        </table>

        <p><strong>Эквивалентность:</strong></p>
        <pre><code>// Эти записи эквивалентны
useCallback(fn, deps);
useMemo(() => fn, deps);</code></pre>
      `
    },
    {
      title: "Лучшие практики",
      type: "text",
      description: `
        <ul>
          <li><strong>Используйте с React.memo</strong> для предотвращения лишних рендеров</li>
          <li><strong>Избегайте глубоких сравнений</strong> — меняйте структуру данных</li>
          <li><strong>Документируйте сложные зависимости</strong></li>
          <li><strong>Профилируйте производительность</strong> перед оптимизацией</li>
          <li><strong>Разделяйте логику</strong> на несколько хуков при сложных зависимостях</li>
        </ul>

        <p><strong>Правило:</strong> Используйте useCallback только когда:</p>
        <ol>
          <li>Функция передаётся в memo-компонент</li>
          <li>Функция используется как зависимость других хуков</li>
          <li>Функция является частью другого мемоизированного значения</li>
        </ol>
      `
    }
  ]
};