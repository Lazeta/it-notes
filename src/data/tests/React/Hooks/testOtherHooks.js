export const testOtherHooks = {
  id: 102500,
  title: "Другие хуки React",
  questions: [
    {
      id: 102501,
      question: "Что такое хук useMemo и как он работает?",
      answer: `
**Хук \`useMemo\`:**
- Используется для мемоизации (кэширования) вычислений, чтобы избежать лишних пересчетов.
- Возвращает мемоизированное значение.

**Синтаксис:**
\`\`\`javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
\`\`\`

**Пример:**
\`\`\`javascript
import React, { useMemo, useState } from 'react';

function ExpensiveComponent({ a, b }) {
  const result = useMemo(() => {
    console.log('Recalculating...');
    return a * b; // Вычисление значения
  }, [a, b]); // Пересчитывается только при изменении a или b

  return <p>Result: {result}</p>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ExpensiveComponent a={count} b={2} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102502,
      question: "Что такое хук useCallback и чем он отличается от useMemo?",
      answer: `
**Хук \`useCallback\`:**
- Используется для мемоизации функций.
- Возвращает мемоизированную версию функции.

**Разница между \`useCallback\` и \`useMemo\`:**
- \`useCallback\` мемоизирует саму функцию.
- \`useMemo\` мемоизирует результат выполнения функции.

**Пример:**
\`\`\`javascript
import React, { useCallback, useState } from 'react';

function ChildComponent({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Click me</button>;
}

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // Функция не меняется при рендере

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102503,
      question: "Что такое хук useReducer и когда его использовать?",
      answer: `
**Хук \`useReducer\`:**
- Альтернатива \`useState\` для управления сложным состоянием.
- Принимает редюсер и начальное состояние, возвращает текущее состояние и функцию dispatch.

**Когда использовать:**
1. Сложное состояние с несколькими подсостояниями.
2. Логика обновления состояния зависит от предыдущего состояния.
3. Необходимость централизованного управления состоянием.

**Пример:**
\`\`\`javascript
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102504,
      question: "Что такое хук useRef и как его использовать?",
      answer: `
**Хук \`useRef\`:**
- Позволяет получить доступ к DOM-элементам или хранить изменяемое значение, которое не вызывает перерисовку компонента.

**Использование:**
1. **Доступ к DOM:**
   - Используйте \`ref\` для получения ссылки на элемент.
2. **Хранение значений:**
   - \`useRef\` можно использовать для хранения данных, которые не влияют на рендеринг.

**Пример (доступ к DOM):**
\`\`\`javascript
import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus(); // Установка фокуса на поле ввода
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
\`\`\`

**Пример (хранение значения):**
\`\`\`javascript
import React, { useRef, useEffect } from 'react';

function Counter() {
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current += 1;
    console.log('Current count:', countRef.current);
  });

  return <p>Check the console for the count value.</p>;
}
\`\`\`
`,
    },
    {
      id: 102505,
      question: "Что такое хук useImperativeHandle и зачем он нужен?",
      answer: `
**Хук \`useImperativeHandle\`:**
- Позволяет настраивать экземпляр, который предоставляется родительскому компоненту через \`ref\`.
- Используется редко, в основном для создания императивных API.

**Пример:**
\`\`\`javascript
import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const Child = forwardRef((props, ref) => {
  const internalInputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      internalInputRef.current.focus();
    },
  }));

  return <input ref={internalInputRef} type="text" />;
});

function Parent() {
  const childRef = useRef(null);

  const handleFocus = () => {
    childRef.current.focus(); // Вызов метода focus из дочернего компонента
  };

  return (
    <>
      <Child ref={childRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}
\`\`\`
`,
    },
    {
      id: 102506,
      question:
        "Что такое хук useLayoutEffect и чем он отличается от useEffect?",
      answer: `
**Хук \`useLayoutEffect\`:**
- Аналогичен \`useEffect\`, но выполняется синхронно после всех DOM-мутаций, но до отрисовки на экране.
- Используется для синхронных операций, таких как измерение размеров элементов.

**Разница между \`useLayoutEffect\` и \`useEffect\`:**
1. \`useLayoutEffect\` выполняется перед отрисовкой.
2. \`useEffect\` выполняется после отрисовки.

**Пример:**
\`\`\`javascript
import React, { useLayoutEffect, useRef, useState } from 'react';

function MeasureExample() {
  const [height, setHeight] = useState(0);
  const divRef = useRef();

  useLayoutEffect(() => {
    const rect = divRef.current.getBoundingClientRect();
    setHeight(rect.height);
  }, []);

  return (
    <div>
      <div ref={divRef}>Hello, world</div>
      <p>Height: {height}px</p>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102507,
      question: "Что такое хук useDebugValue и зачем он нужен?",
      answer: `
**Хук \`useDebugValue\`:**
- Позволяет отображать метку для пользовательских хуков в инструментах разработчика React.
- Используется только для отладки.

**Пример:**
\`\`\`javascript
import { useState, useDebugValue } from 'react';

function useCustomHook() {
  const [value, setValue] = useState(false);
  useDebugValue(value ? 'Active' : 'Inactive');
  return [value, setValue];
}

function Component() {
  const [isActive, setIsActive] = useCustomHook();
  return (
    <button onClick={() => setIsActive(!isActive)}>
      {isActive ? 'Deactivate' : 'Activate'}
    </button>
  );
}
\`\`\`
`,
    },
    {
      id: 102508,
      question: "Как создать пользовательский хук?",
      answer: `
**Пользовательские хуки:**
- Это функции, которые начинаются с префикса \`use\` и могут использовать другие хуки.
- Позволяют повторно использовать логику в разных компонентах.

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
  ],
};
