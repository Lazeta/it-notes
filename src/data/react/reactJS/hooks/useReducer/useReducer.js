export const useReducer = {
  id: 2544,
  title: "useReducer",
  children: [
    {
      title: "Что такое useReducer?",
      type: "text",
      description: `
        <p><strong>useReducer</strong> — это хук в React, который позволяет управлять состоянием компонента с помощью редьюсера. Он идеально подходит для управления сложным состоянием или когда состояние зависит от предыдущего значения.</p>
        <p>Хук принимает два аргумента:</p>
        <ul>
          <li><strong>reducer</strong>: функция, которая определяет, как состояние должно обновляться на основе действия (action).</li>
          <li><strong>initialState</strong>: начальное значение состояния.</li>
        </ul>
        <p>Возвращает текущее состояние и функцию <code>dispatch</code>, которая используется для отправки действий (actions).</p>
      `,
    },
    {
      title: "Синтаксис",
      type: "text",
      description: `
        <p><strong>Синтаксис использования useReducer:</strong></p>
      `,
      code: `
const [state, dispatch] = useReducer(reducer, initialState);
      `,
    },
    {
      title: "Пример использования",
      type: "text",
      description: `
        <p><strong>Пример простого счетчика с использованием useReducer:</strong></p>
      `,
      code: `
import React, { useReducer } from 'react';

// Начальное состояние
const initialState = { count: 0 };

// Редьюсер
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unknown action');
  }
}

function Counter() {
  // Использование useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;
      `,
    },
    {
      title: "Преимущества useReducer",
      type: "text",
      description: `
        <ul>
          <li><strong>Управление сложным состоянием:</strong> <code>useReducer</code> позволяет управлять состоянием, когда оно зависит от предыдущего значения.</li>
          <li><strong>Чистота кода:</strong> Логика обновления состояния сосредоточена в редьюсере, что делает код более организованным и легким для тестирования.</li>
          <li><strong>Поддержка нескольких значений:</strong> Можно легко управлять состоянием, состоящим из нескольких значений (например, объектов).</li>
          <li><strong>Масштабируемость:</strong> Подходит для больших приложений, где <code>useState</code> может стать громоздким.</li>
        </ul>
      `,
    },
    {
      title: "Использование с контекстом",
      type: "text",
      description: `
        <p><strong>useReducer</strong> можно комбинировать с <strong>useContext</strong> для глобального управления состоянием в приложении.</p>
        <p>Это позволяет создать глобальный state management, который проще поддерживать и расширять.</p>
      `,
      code: `
import React, { createContext, useReducer, useContext } from 'react';

// Создание контекста
const StateContext = createContext();

// Начальное состояние
const initialState = { count: 0 };

// Редьюсер
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unknown action');
  }
}

// Провайдер состояния
export function StateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

// Хук для использования контекста
export function useStateContext() {
  return useContext(StateContext);
}
      `,
    },
    {
      title: "Оптимизация производительности",
      type: "text",
      description: `
        <p><strong>1. Мемоизация редьюсера:</strong></p>
        <pre><code>const memoizedReducer = useCallback((state, action) => {
  switch (action.type) {
    case 'increment': return { ...state, count: state.count + 1 };
    case 'decrement': return { ...state, count: state.count - 1 };
    default: throw new Error();
  }
}, []);</code></pre>

        <p><strong>2. Ленивая инициализация состояния:</strong></p>
        <pre><code>function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return init(action.payload);
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}</code></pre>
      `,
    },
    {
      title: "Типичные ошибки",
      type: "text",
      description: `
        <p><strong>1. Забытый break в switch:</strong></p>
        <pre><code>function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 }; // Без break могут возникнуть ошибки
    default:
      throw new Error();
  }
}</code></pre>

        <p><strong>2. Прямая мутация состояния:</strong></p>
        <pre><code>function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      state.count++; // Неправильно - состояние мутируется напрямую
      return state;
    default:
      throw new Error();
  }
}</code></pre>

        <p><strong>3. Отсутствие обработки неизвестных действий:</strong></p>
        <pre><code>function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    // Нет обработки неизвестных действий
  }
}</code></pre>
      `,
    },
    {
      title: "TypeScript и useReducer",
      type: "text",
      description: `
        <p><strong>Типизация состояния и действий:</strong></p>
        <pre><code>type State = {
  count: number;
};

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset'; payload: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: action.payload };
    default:
      throw new Error();
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0 });
      </code></pre>
      `,
    },
  ],
};
