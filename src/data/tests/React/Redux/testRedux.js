export const testRedux = {
  id: 102425,
  title: "Управление состоянием приложения",
  questions: [
    {
      id: 102426,
      question: "Что такое управление состоянием в React?",
      answer: `
**Управление состоянием в React:**
- Это процесс хранения, изменения и синхронизации данных в приложении.
- Состояние определяет, как компоненты отображаются и взаимодействуют между собой.

**Основные подходы:**
1. **Локальное состояние (useState, useReducer):**
   - Управление состоянием внутри одного компонента.
2. **Глобальное состояние:**
   - Использование контекста (Context API) или сторонних библиотек (Redux, MobX).
3. **Серверное состояние:**
   - Управление данными, полученными с сервера (например, через \`fetch\` или \`axios\`).

**Пример локального состояния:**
\`\`\`javascript
import React, { useState } from 'react';

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
      id: 102427,
      question: "Как использовать Context API для управления состоянием?",
      answer: `
**Context API:**
- Встроенный механизм React для передачи данных через дерево компонентов без необходимости прокидывать props на каждом уровне.

**Пример использования:**
\`\`\`javascript
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ChildComponent() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ChildComponent />
    </ThemeProvider>
  );
}
\`\`\`
`,
    },
    {
      id: 102428,
      question: "Зачем нужен Redux для управления состоянием?",
      answer: `
**Redux:**
- Библиотека для управления глобальным состоянием в React-приложениях.
- Предоставляет единое хранилище (store) для всего приложения.

**Преимущества Redux:**
1. **Централизованное хранилище:**
   - Все данные хранятся в одном месте.
2. **Предсказуемость:**
   - Изменение состояния происходит через чистые функции (reducers).
3. **Отладка:**
   - Инструменты разработчика (Redux DevTools) упрощают отслеживание изменений состояния.

**Пример:**
\`\`\`javascript
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Reducer
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Store
const store = createStore(counterReducer);

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
\`\`\`
`,
    },
    {
      id: 102429,
      question: "Какие альтернативы Redux существуют?",
      answer: `
**Альтернативы Redux:**
1. **MobX:**
   - Реактивное управление состоянием.
   - Проще в освоении, чем Redux.
2. **Recoil:**
   - Легковесная библиотека для управления состоянием.
   - Использует атомы (atoms) для хранения данных.
3. **Zustand:**
   - Минималистичная библиотека с простым API.
4. **Jotai:**
   - Еще одна легковесная библиотека, похожая на Recoil.
5. **Context API + useReducer:**
   - Встроенные инструменты React для управления состоянием.

**Пример Zustand:**
\`\`\`javascript
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

function Counter() {
  const { count, increment, decrement } = useStore();
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102430,
      question: "Как организовать состояние в больших приложениях?",
      answer: `
**Организация состояния в больших приложениях:**
1. **Разделение состояния:**
   - Разделяйте состояние на локальное и глобальное.
   - Локальное состояние — для отдельных компонентов.
   - Глобальное состояние — для данных, которые используются в нескольких местах.
2. **Модульность:**
   - Организуйте состояние по модулям (features).
   - Например, для туду-листа создайте отдельный файл состояния \`todoSlice.js\`.
3. **Инструменты:**
   - Используйте Redux Toolkit или другие библиотеки для упрощения работы с состоянием.
4. **Иммутабельность:**
   - Всегда обновляйте состояние иммутабельно (не изменяйте его напрямую).

**Пример структуры:**
\`\`\`plaintext
src/
  features/
    todos/
      todoSlice.js
    auth/
      authSlice.js
  store.js
\`\`\`
`,
    },
  ],
};
