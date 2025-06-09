export const useEffect = {
  id: 2542,
  title: "useEffect",
  children: [
    {
      title: "Основы использования",
      type: "text",
      description: `
        <p><strong>useEffect</strong> - хук для выполнения побочных эффектов в функциональных компонентах React.</p>
        
        <pre><code>import { useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Аналог componentDidMount и componentDidUpdate
  useEffect(() => {
    document.title = \`Вы кликнули \${count} раз\`;
  });

  return (
    &lt;div&gt;
      &lt;p&gt;Вы кликнули {count} раз&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Нажми меня
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>

        <p><strong>Параметры:</strong></p>
        <ul>
          <li><code>effect</code> - функция, содержащая код эффекта</li>
          <li><code>dependencies</code> - массив зависимостей (опционально)</li>
        </ul>
      `
    },
    {
      title: "Варианты использования",
      type: "text",
      description: `
        <p><strong>1. Пустой массив зависимостей (аналог componentDidMount):</strong></p>
        <pre><code>useEffect(() => {
  console.log('Компонент смонтирован');
  return () => console.log('Компонент размонтирован');
}, []);</code></pre>

        <p><strong>2. С указанием зависимостей (аналог componentDidUpdate):</strong></p>
        <pre><code>useEffect(() => {
  console.log('Значение count изменилось:', count);
}, [count]);</code></pre>

        <p><strong>3. Без массива зависимостей (выполняется при каждом рендере):</strong></p>
        <pre><code>useEffect(() => {
  console.log('Компонент обновился');
});</code></pre>

        <p><strong>4. Функция очистки (аналог componentWillUnmount):</strong></p>
        <pre><code>useEffect(() => {
  const timer = setInterval(() => {
    console.log('Тик');
  }, 1000);

  return () => clearInterval(timer);
}, []);</code></pre>
      `
    },
    {
      title: "Типичные сценарии применения",
      type: "text",
      description: `
        <p><strong>1. Запросы к API:</strong></p>
        <pre><code>useEffect(() => {
  let ignore = false;
  
  async function fetchData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    if (!ignore) setData(data);
  }

  fetchData();
  
  return () => { ignore = true; };
}, [query]);</code></pre>

        <p><strong>2. Подписка на события:</strong></p>
        <pre><code>useEffect(() => {
  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);</code></pre>

        <p><strong>3. Интеграция с DOM:</strong></p>
        <pre><code>useEffect(() => {
  const element = document.getElementById('my-element');
  element.classList.add('highlight');
  
  return () => {
    element.classList.remove('highlight');
  };
}, [id]);</code></pre>
      `
    },
    {
      title: "Оптимизация производительности",
      type: "text",
      description: `
        <p><strong>1. Правильный выбор зависимостей:</strong></p>
        <pre><code>const [count, setCount] = useState(0);
const [query, setQuery] = useState('');

// Плохо - эффект зависит от count, хотя использует только query
useEffect(() => {
  search(query);
}, [count, query]);

// Лучше - указаны только реальные зависимости
useEffect(() => {
  search(query);
}, [query]);</code></pre>

        <p><strong>2. Мемоизация функций:</strong></p>
        <pre><code>const fetchData = useCallback(async () => {
  const response = await fetch(\`/api/data?query=\${query}\`);
  // ...
}, [query]);

useEffect(() => {
  fetchData();
}, [fetchData]);</code></pre>

        <p><strong>3. Разделение эффектов:</strong></p>
        <pre><code>// Плохо - один большой эффект
useEffect(() => {
  document.title = \`\${count} кликов\`;
  localStorage.setItem('count', count);
}, [count]);

// Лучше - раздельные эффекты
useEffect(() => {
  document.title = \`\${count} кликов\`;
}, [count]);

useEffect(() => {
  localStorage.setItem('count', count);
}, [count]);</code></pre>
      `
    },
    {
      title: "Типичные ошибки",
      type: "text",
      description: `
        <p><strong>1. Бесконечные циклы:</strong></p>
        <pre><code>const [data, setData] = useState(null);

// Бесконечный цикл - эффект изменяет свою зависимость
useEffect(() => {
  fetchData().then(data => setData(data));
}, [data]);</code></pre>

        <p><strong>2. Пропущенные зависимости:</strong></p>
        <pre><code>const [count, setCount] = useState(0);

// Пропущена зависимость increment
const increment = useCallback(() => {
  setCount(c => c + 1);
}, []);

useEffect(() => {
  increment();
}, []); // Должно быть [increment]</code></pre>

        <p><strong>3. Утечка памяти:</strong></p>
        <pre><code>useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  // Забыли return () => clearInterval(timer);
}, []);</code></pre>
      `
    },
    {
      title: "Продвинутые паттерны",
      type: "text",
      description: `
        <p><strong>1. Кастомные хуки с эффектами:</strong></p>
        <pre><code>function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

// Использование
const { width, height } = useWindowSize();</code></pre>

        <p><strong>2. Управление последовательностью эффектов:</strong></p>
        <pre><code>useEffect(() => {
  // Эффект 1 - выполняется первым
  return () => {
    // Очистка 1 - выполняется последней
  };
}, []);

useEffect(() => {
  // Эффект 2 - выполняется вторым
  return () => {
    // Очистка 2 - выполняется предпоследней
  };
}, []);</code></pre>

        <p><strong>3. Использование ref для хранения значений:</strong></p>
        <pre><code>function usePrevious(value) {
  const ref = useRef();
  
  useEffect(() => {
    ref.current = value;
  }, [value]);
  
  return ref.current;
}</code></pre>
      `
    },
    {
      title: "TypeScript и useEffect",
      type: "text",
      description: `
        <p><strong>Типизация асинхронных эффектов:</strong></p>
        <pre><code>useEffect(() => {
  let mounted = true;

  async function fetchData() {
    const response = await fetch&lt;ApiResponse&gt;('/api/data');
    if (mounted) setData(response.data);
  }

  fetchData();

  return () => {
    mounted = false;
  };
}, []);</code></pre>

        <p><strong>Типизация функций очистки:</strong></p>
        <pre><code>useEffect(() => {
  const timer: NodeJS.Timeout = setInterval(() => {}, 1000);
  
  return () => {
    clearInterval(timer);
  };
}, []);</code></pre>

        <p><strong>Типизация сложных зависимостей:</strong></p>
        <pre><code>interface User {
  id: number;
  name: string;
}

const [user, setUser] = useState&lt;User | null&gt;(null);

useEffect(() => {
  if (user) {
    console.log(user.name); // Тип User гарантирован
  }
}, [user]);</code></pre>
      `
    }
  ]
};