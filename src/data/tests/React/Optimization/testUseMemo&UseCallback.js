export const testUseMemoUseCallback = {
  id: 103000,
  title: "useMemo and useCallback (оптимизация производительности)",
  questions: [
    {
      id: 103001,
      question: "Что такое хук useMemo и как он работает?",
      answer: `
**Хук \`useMemo\`:**
- \`useMemo\` используется для мемоизации значений, чтобы избежать их повторных вычислений.
- Он принимает функцию и массив зависимостей, и возвращает закэшированное значение.

**Синтаксис:**
\`\`\`javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
\`\`\`

**Пример:**
\`\`\`javascript
import { useMemo, useState } from 'react';

function ExpensiveComponent({ a, b }) {
  const result = useMemo(() => {
    console.log('Computing result...');
    return a * b;
  }, [a, b]);

  return <p>Result: {result}</p>;
}
\`\`\`
`,
    },
    {
      id: 103002,
      question: "Зачем нужен хук useMemo?",
      answer: `
**Зачем нужен \`useMemo\`:**
1. **Оптимизация производительности:**
   - Предотвращает повторные вычисления при каждом рендере.
2. **Избегание лишних перерасчетов:**
   - Полезен для сложных вычислений или тяжелых операций.

**Пример проблемы без \`useMemo\`:**
\`\`\`javascript
function ExpensiveComponent({ a, b }) {
  const result = a * b; // Вычисляется при каждом рендере
  return <p>Result: {result}</p>;
}
\`\`\`
`,
    },
    {
      id: 103003,
      question: "Что такое хук useCallback и как он работает?",
      answer: `
**Хук \`useCallback\`:**
- \`useCallback\` используется для мемоизации функций, чтобы избежать их повторного создания.
- Он принимает функцию и массив зависимостей, и возвращает мемоизированную версию функции.

**Синтаксис:**
\`\`\`javascript
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
\`\`\`

**Пример:**
\`\`\`javascript
import { useCallback, useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function ChildComponent({ onClick }) {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Click me</button>;
}
\`\`\`
`,
    },
    {
      id: 103004,
      question: "Зачем нужен хук useCallback?",
      answer: `
**Зачем нужен \`useCallback\`:**
1. **Оптимизация дочерних компонентов:**
   - Предотвращает лишние перерисовки дочерних компонентов, если передаваемая функция не изменилась.
2. **Устранение ненужных изменений ссылок:**
   - Полезен для функций, которые передаются в качестве пропсов.

**Пример проблемы без \`useCallback\`:**
\`\`\`javascript
function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
// При каждом обновлении \`count\`, \`handleClick\` создается заново, вызывая перерисовку \`ChildComponent\`.
\`\`\`
`,
    },
    {
      id: 103005,
      question: "В чем разница между useMemo и useCallback?",
      answer: `
**Разница между \`useMemo\` и \`useCallback\`:**
1. **Тип возвращаемого значения:**
   - \`useMemo\` возвращает мемоизированное значение.
   - \`useCallback\` возвращает мемоизированную функцию.
2. **Использование:**
   - \`useMemo\` используется для кэширования результатов вычислений.
   - \`useCallback\` используется для кэширования функций.

**Пример:**
\`\`\`javascript
const memoizedValue = useMemo(() => computeValue(a, b), [a, b]);
const memoizedFunction = useCallback(() => doSomething(a, b), [a, b]);
\`\`\`
`,
    },
    {
      id: 103006,
      question: "Какие есть альтернативы useMemo и useCallback?",
      answer: `
**Альтернативы:**
1. **React.memo:**
   - Для мемоизации компонентов.
2. **Библиотеки:**
   - Например, \`reselect\` для сложных селекторов в Redux.
3. **Ручная оптимизация:**
   - Использование флагов или состояний для контроля обновлений.

**Пример \`React.memo\`:**
\`\`\`javascript
const MemoizedComponent = React.memo(function MyComponent({ prop }) {
  console.log('Rendered');
  return <p>{prop}</p>;
});
\`\`\`
`,
    },
    {
      id: 103007,
      question: "Когда использовать useMemo и useCallback?",
      answer: `
**Когда использовать:**
1. **useMemo:**
   - Когда нужно кэшировать результаты тяжелых вычислений.
   - Например, фильтрация массивов или сложные математические операции.
2. **useCallback:**
   - Когда нужно передать функцию в дочерний компонент, чтобы избежать лишних перерисовок.

**Правило:**
- Используйте их только тогда, когда это действительно необходимо, так как они добавляют сложность.
`,
    },
    {
      id: 103008,
      question: "Как тестировать компоненты с useMemo и useCallback?",
      answer: `
**Тестирование:**
- Убедитесь, что мемоизация работает корректно.
- Проверьте, что компоненты не перерисовываются лишний раз.

**Пример теста:**
\`\`\`javascript
import { render, screen } from '@testing-library/react';
import { useState, useMemo } from 'react';

function ComponentToTest() {
  const [count, setCount] = useState(0);
  const value = useMemo(() => count * 2, [count]);

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

test('renders memoized value', () => {
  render(<ComponentToTest />);
  expect(screen.getByText('Value: 0')).toBeInTheDocument();
});
\`\`\`
`,
    },
    {
      id: 103009,
      question: "Какие ограничения у useMemo и useCallback?",
      answer: `
**Ограничения:**
1. **Сложность кода:**
   - Добавляет дополнительный уровень абстракции.
2. **Неправильное использование:**
   - Может привести к избыточной оптимизации, если используется без необходимости.
3. **Не решает все проблемы производительности:**
   - Не заменяет правильную архитектуру приложения.

**Пример ошибки:**
\`\`\`javascript
// Избыточная оптимизация
const value = useMemo(() => x + y, [x, y]); // Нет смысла, если операция простая.
\`\`\`
`,
    },
    {
      id: 103010,
      question: "Как комбинировать useMemo и useCallback?",
      answer: `
**Комбинирование:**
- \`useMemo\` можно использовать для кэширования значений, а \`useCallback\` — для кэширования функций.

**Пример:**
\`\`\`javascript
function ParentComponent() {
  const [count, setCount] = useState(0);

  const memoizedValue = useMemo(() => count * 2, [count]);
  const memoizedCallback = useCallback(() => {
    console.log('Callback executed');
  }, []);

  return (
    <div>
      <ChildComponent value={memoizedValue} onClick={memoizedCallback} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function ChildComponent({ value, onClick }) {
  console.log('ChildComponent rendered');
  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
\`\`\`
`,
    },
  ],
};
