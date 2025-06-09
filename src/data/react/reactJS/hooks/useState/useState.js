export const useState = {
  id: 2541,
  title: "useState",
  children: [
    {
      title: "Основы использования",
      type: "text",
      description: `
        <p><strong>useState</strong> - хук для управления состоянием в функциональных компонентах React.</p>
        
        <pre><code>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
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
          <li><code>initialState</code> - начальное значение состояния</li>
        </ul>

        <p><strong>Возвращает:</strong></p>
        <ul>
          <li>Текущее значение состояния</li>
          <li>Функцию для его обновления</li>
        </ul>
      `
    },
    {
      title: "Особенности работы",
      type: "text",
      description: `
        <p><strong>1. Асинхронность обновлений:</strong></p>
        <pre><code>const [value, setValue] = useState(0);

// Неправильно - несколько вызовов подряд
const handleClick = () => {
  setValue(value + 1);
  setValue(value + 1); // Будет использовано старое значение
};

// Правильно - функциональное обновление
const handleClick = () => {
  setValue(prev => prev + 1);
  setValue(prev => prev + 1);
};</code></pre>

        <p><strong>2. Ленивая инициализация:</strong></p>
        <pre><code>// Выполнится только при первом рендере
const [state, setState] = useState(() => {
  const initialState = heavyComputation(props);
  return initialState;
});</code></pre>

        <p><strong>3. Правила хуков:</strong></p>
        <ul>
          <li>Вызывайте хуки только на верхнем уровне компонента</li>
          <li>Не используйте в условиях и циклах</li>
        </ul>
      `
    },
    {
      title: "Типизация с TypeScript",
      type: "text",
      description: `
        <p><strong>Явное указание типа:</strong></p>
        <pre><code>const [user, setUser] = useState&lt;User | null&gt;(null);

interface User {
  name: string;
  age: number;
}</code></pre>

        <p><strong>Автовывод типа:</strong></p>
        <pre><code>const [count, setCount] = useState(0); // Тип number
const [items, setItems] = useState&lt;string[]&gt;([]); // Массив строк</code></pre>

        <p><strong>Сложные состояния:</strong></p>
        <pre><code>type FormState = {
  username: string;
  password: string;
  remember: boolean;
};

const [form, setForm] = useState&lt;FormState&gt;({
  username: '',
  password: '',
  remember: false
});</code></pre>
      `
    },
    {
      title: "Работа с объектами и массивами",
      type: "text",
      description: `
        <p><strong>Обновление объектов:</strong></p>
        <pre><code>const [user, setUser] = useState({ name: '', age: 0 });

// Правильное обновление
setUser(prev => ({ ...prev, age: 25 }));

// Неправильно - потеря свойства name
setUser({ age: 25 });</code></pre>

        <p><strong>Работа с массивами:</strong></p>
        <pre><code>const [items, setItems] = useState([1, 2, 3]);

// Добавление
setItems(prev => [...prev, 4]);

// Удаление
setItems(prev => prev.filter(item => item !== 2));

// Обновление
setItems(prev => prev.map(item => item === 1 ? 10 : item));</code></pre>
      `
    },
    {
      title: "Продвинутые паттерны",
      type: "text",
      description: `
        <p><strong>1. Кастомный хук для формы:</strong></p>
        <pre><code>function useForm(initialState) {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return [values, handleChange];
}

// Использование
const [form, handleChange] = useForm({ email: '', agree: false });</code></pre>

        <p><strong>2. Состояние с localStorage:</strong></p>
        <pre><code>function usePersistedState(key, defaultValue) {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}</code></pre>
      `
    },
    {
      title: "Оптимизация производительности",
      type: "text",
      description: `
        <p><strong>1. Разделение состояния:</strong></p>
        <pre><code>// Плохо - один большой объект
const [state, setState] = useState({
  user: null,
  loading: false,
  error: null
});

// Лучше - раздельные состояния
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);</code></pre>

        <p><strong>2. Мемоизация функций обновления:</strong></p>
        <pre><code>const increment = useCallback(() => {
  setCount(prev => prev + 1);
}, []);</code></pre>

        <p><strong>3. Батчинг обновлений:</strong></p>
        <pre><code>// React автоматически батчит синхронные обновления
const handleClick = () => {
  setCount(c => c + 1);
  setName('New Name');
  // Только один ре-рендер
};</code></pre>
      `
    },
    {
      title: "Частые ошибки",
      type: "text",
      description: `
        <p><strong>1. Прямая мутация состояния:</strong></p>
        <pre><code>const [user, setUser] = useState({ name: 'Alex' });

// Неправильно
user.name = 'John';
setUser(user); // Не сработает!

// Правильно
setUser({ ...user, name: 'John' });</code></pre>

        <p><strong>2. Потеря предыдущего состояния:</strong></p>
        <pre><code>const [items, setItems] = useState(['a', 'b']);

// Неправильно (зависит от предыдущего состояния)
const addItem = (newItem) => {
  setItems([...items, newItem]);
};

// Правильно (функциональное обновление)
const addItem = (newItem) => {
  setItems(prev => [...prev, newItem]);
};</code></pre>

        <p><strong>3. Использование для производных данных:</strong></p>
        <pre><code>const [user, setUser] = useState({ firstName: 'John', lastName: 'Doe' });
// Плохо - дублирование данных
const [fullName, setFullName] = useState('John Doe');

// Лучше - вычислять при рендере
const fullName = \`\${user.firstName} \${user.lastName}\`;</code></pre>
      `
    }
  ]
};