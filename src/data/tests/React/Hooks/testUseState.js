export const testUseState = {
  id: 103250,
  title: "useState (управление состоянием)",
  questions: [
    {
      id: 103251,
      question: "Что такое хук useState?",
      answer: `
**useState:**
- Это хук, который позволяет добавлять состояние в функциональные компоненты.
- Возвращает текущее значение состояния и функцию для его обновления.

**Синтаксис:**
\`\`\`javascript
const [state, setState] = useState(initialValue);
\`\`\`

**Пример:**
\`\`\`javascript
function Counter() {
  const [count, setCount] = useState(0);

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
      id: 103252,
      question: "Как работает функция обновления состояния в useState?",
      answer: `
**Функция обновления состояния:**
- Функция, возвращаемая \`useState\`, используется для обновления состояния.
- При вызове она перерисовывает компонент с новым значением состояния.

**Пример:**
\`\`\`javascript
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); // Обновляет состояние
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 103253,
      question: "Как передать начальное значение в useState?",
      answer: `
**Передача начального значения:**
1. **Прямая передача:**
   - Начальное значение передается напрямую как аргумент в \`useState\`.

**Пример:**
\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

2. **Вычисляемое начальное значение:**
   - Можно передать функцию, которая вычислит начальное значение.

**Пример:**
\`\`\`javascript
const [count, setCount] = useState(() => {
  console.log('Initial value calculated');
  return 42;
});
\`\`\`
`,
    },
    {
      id: 103254,
      question: "Как использовать useState для объектов?",
      answer: `
**Использование с объектами:**
- \`useState\` может хранить объекты, но при обновлении нужно передавать новый объект.

**Пример:**
\`\`\`javascript
function Form() {
  const [form, setForm] = useState({ name: '', email: '' });

  const updateName = (e) => {
    setForm({ ...form, name: e.target.value });
  };

  const updateEmail = (e) => {
    setForm({ ...form, email: e.target.value });
  };

  return (
    <form>
      <input value={form.name} onChange={updateName} placeholder="Name" />
      <input value={form.email} onChange={updateEmail} placeholder="Email" />
    </form>
  );
}
\`\`\`
`,
    },
    {
      id: 103255,
      question: "Как обновить состояние на основе предыдущего значения?",
      answer: `
**Обновление на основе предыдущего значения:**
- Передайте функцию в \`setState\`, которая получает предыдущее значение и возвращает новое.

**Пример:**
\`\`\`javascript
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1); // Использует предыдущее значение
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 103256,
      question: "Как тестировать компоненты с useState?",
      answer: `
**Тестирование:**
- Используйте \`@testing-library/react\` для тестирования компонентов с \`useState\`.
- Проверьте, как состояние изменяется при взаимодействии.

**Пример:**
\`\`\`javascript
import { render, screen, fireEvent } from '@testing-library/react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

test('increments count', () => {
  render(<Counter />);
  const button = screen.getByText('Increment');
  fireEvent.click(button);
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});
\`\`\`
`,
    },
    {
      id: 103257,
      question: "Какие есть ограничения у useState?",
      answer: `
**Ограничения:**
1. **Простота:**
   - Подходит для простых состояний (например, числа или строки).
2. **Нет встроенной логики:**
   - Для сложной логики лучше использовать \`useReducer\`.
3. **Множественные состояния:**
   - Может стать громоздким при большом количестве состояний.

**Пример проблемы:**
\`\`\`javascript
// Сложное состояние:
const [state, setState] = useState({ count: 0, name: '', email: '' });
\`\`\`
`,
    },
    {
      id: 103258,
      question: "Как использовать useState для массивов?",
      answer: `
**Использование с массивами:**
- \`useState\` может хранить массивы, но при обновлении нужно создавать новый массив.

**Пример:**
\`\`\`javascript
function List() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, items.length + 1]);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 103259,
      question: "Как избежать лишних перерисовок при использовании useState?",
      answer: `
**Избежание лишних перерисовок:**
1. **Мемоизация:**
   - Используйте \`React.memo\` для предотвращения ненужных ререндеров.
2. **Условное обновление:**
   - Обновляйте состояние только при необходимости.

**Пример:**
\`\`\`javascript
function Input({ value, onChange }) {
  console.log('Rendered');
  return <input value={value} onChange={onChange} />;
}

const MemoizedInput = React.memo(Input);
\`\`\`
`,
    },
    {
      id: 103260,
      question: "Как комбинировать useState и useEffect?",
      answer: `
**Комбинирование:**
- \`useEffect\` можно использовать для выполнения побочных эффектов при изменении состояния.

**Пример:**
\`\`\`javascript
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

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
  ],
};
