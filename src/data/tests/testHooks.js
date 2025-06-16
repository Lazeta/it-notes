export const testHooks = {
  id: 100750,
  title: "Hooks (Хуки)",
  questions: [
    {
      id: 100751,
      question: "Что такое хуки в React?",
      answer: `
      **Хуки (Hooks):**
      - Это функции, которые позволяют использовать состояние и другие возможности React в функциональных компонентах.
      - Появились в React 16.8 как альтернатива классовым компонентам.
      - Упрощают работу с состоянием и побочными эффектами.

      **Пример:**
      \`\`\`javascript
      import React, { useState } from 'react';

      function Counter() {
        const [count, setCount] = useState(0);

        return (
          <div>
            <p>Счетчик: {count}</p>
            <button onClick={() => setCount(count + 1)}>Увеличить</button>
          </div>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 100752,
      question: "Какие основные хуки существуют?",
      answer: `
      **Основные хуки:**
      1. **useState:**
         - Добавляет состояние в функциональный компонент.
         \`\`\`javascript
         const [state, setState] = useState(initialValue);
         \`\`\`

      2. **useEffect:**
         - Используется для выполнения побочных эффектов (например, запросы к API).
         \`\`\`javascript
         useEffect(() => {
           console.log('Компонент смонтирован');
           return () => {
             console.log('Компонент размонтирован');
           };
         }, []);
         \`\`\`

      3. **useContext:**
         - Позволяет использовать контекст для передачи данных между компонентами.
         \`\`\`javascript
         const value = useContext(MyContext);
         \`\`\`

      4. **useReducer:**
         - Альтернатива \`useState\` для сложного состояния.
         \`\`\`javascript
         const [state, dispatch] = useReducer(reducer, initialState);
         \`\`\`

      5. **useCallback:**
         - Возвращает мемоизированную версию функции.
         \`\`\`javascript
         const memoizedCallback = useCallback(() => {
           doSomething();
         }, [dependencies]);
         \`\`\`

      6. **useMemo:**
         - Возвращает мемоизированное значение.
         \`\`\`javascript
         const memoizedValue = useMemo(() => computeExpensiveValue(), [dependencies]);
         \`\`\`

      7. **useRef:**
         - Создает ссылку на DOM-элемент или сохраняет изменяемое значение.
         \`\`\`javascript
         const ref = useRef(initialValue);
         \`\`\`
      `,
    },
    {
      id: 100753,
      question: "Зачем нужен хук useState?",
      answer: `
      **Хук \`useState\`:**
      - Позволяет добавить состояние в функциональный компонент.
      - Возвращает текущее значение состояния и функцию для его обновления.

      **Пример:**
      \`\`\`javascript
      import React, { useState } from 'react';

      function Toggle() {
        const [isOn, setIsOn] = useState(false);

        return (
          <button onClick={() => setIsOn(!isOn)}>
            {isOn ? 'Вкл' : 'Выкл'}
          </button>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 100754,
      question: "Как работает хук useEffect?",
      answer: `
      **Хук \`useEffect\`:**
      - Выполняет побочные эффекты после рендеринга компонента.
      - Может использоваться для замены методов жизненного цикла (\`componentDidMount\`, \`componentDidUpdate\`, \`componentWillUnmount\`).

      **Пример:**
      \`\`\`javascript
      import React, { useEffect, useState } from 'react';

      function Example() {
        const [count, setCount] = useState(0);

        useEffect(() => {
          document.title = \`Вы нажали \${count} раз\`;
        });

        return (
          <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count + 1)}>Нажми меня</button>
          </div>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 100755,
      question: "Что такое хук useContext?",
      answer: `
      **Хук \`useContext\`:**
      - Позволяет подписаться на изменения контекста.
      - Упрощает доступ к данным из контекста без использования \`Context.Consumer\`.

      **Пример:**
      \`\`\`javascript
      import React, { createContext, useContext } from 'react';

      const ThemeContext = createContext('light');

      function ThemedButton() {
        const theme = useContext(ThemeContext);
        return <button style={{ background: theme === 'dark' ? '#333' : '#fff' }}>Кнопка</button>;
      }

      function App() {
        return (
          <ThemeContext.Provider value="dark">
            <ThemedButton />
          </ThemeContext.Provider>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 100756,
      question: "Как создать собственный хук?",
      answer: `
      **Создание собственного хука:**
      - Пользовательские хуки позволяют вынести логику в отдельные функции.
      - Название хука должно начинаться с \`use\`.

      **Пример:**
      \`\`\`javascript
      import { useState, useEffect } from 'react';

      function useFetch(url) {
        const [data, setData] = useState(null);

        useEffect(() => {
          fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data));
        }, [url]);

        return data;
      }

      function UserList() {
        const users = useFetch('/api/users');

        return (
          <ul>
            {users?.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        );
      }
      \`\`\`
      `,
    },
    {
      id: 100757,
      question: "Какие правила использования хуков?",
      answer: `
      **Правила использования хуков:**
      1. **Вызывать хуки только на верхнем уровне:**
         - Не вызывайте хуки внутри циклов, условий или вложенных функций.
      2. **Вызывать хуки только в React-компонентах или пользовательских хуках:**
         - Хуки не должны использоваться вне React-компонентов.

      Эти правила обеспечивают правильное управление состоянием и эффектами.
      `,
    },
    {
      id: 100758,
      question: "Чем отличается useCallback от useMemo?",
      answer: `
      **Разница между \`useCallback\` и \`useMemo\`:**
      - \`useCallback\`: Возвращает мемоизированную **функцию**.
      - \`useMemo\`: Возвращает мемоизированное **значение**.

      **Пример:**
      \`\`\`javascript
      const memoizedFunction = useCallback(() => {
        doSomething();
      }, [dependencies]);

      const memoizedValue = useMemo(() => computeValue(), [dependencies]);
      \`\`\`
      `,
    },
    {
      id: 100759,
      question: "Для чего используется хук useRef?",
      answer: `
      **Хук \`useRef\`:**
      - Создает изменяемый объект, который сохраняется между рендерами.
      - Часто используется для доступа к DOM-элементам или хранения изменяемых значений.

      **Пример:**
      \`\`\`javascript
      import React, { useRef } from 'react';

      function TextInputWithFocusButton() {
        const inputRef = useRef(null);

        const handleFocus = () => {
          inputRef.current.focus();
        };

        return (
          <>
            <input ref={inputRef} type="text" />
            <button onClick={handleFocus}>Фокус</button>
          </>
        );
      }
      \`\`\`
      `,
    },
  ],
};
