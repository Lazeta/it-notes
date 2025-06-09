export const useReducer = {
  id: 2544,
  title: "useReducer",
  children: [
    {
      title: "Что такое useReducer?",
      type: "text",
      description: `
        <p><strong>useReducer</strong> — это хук в React, который позволяет управлять состоянием компонента с помощью редьюсера. Он идеально подходит для управления сложным состоянием или когда следите за состоянием, которое зависит от предыдущего значения.</p>
        <p>useReducer принимает два аргумента: редьюсер и начальное состояние, и возвращает текущее состояние и функцию для его обновления.</p>
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

const initialState = { count: 0 };

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
          <li><strong>Управление сложным состоянием:</strong> useReducer позволяет управлять состоянием, когда состояние зависит от предыдущего.</li>
          <li><strong>Чистота кода:</strong> Логика обновления состояния сосредоточена в редьюсере, что делает код более организованным.</li>
          <li><strong>Поддержка нескольких значений:</strong> Можно легко управлять состоянием, состоящим из нескольких значений.</li>
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

const StateContext = createContext();

const initialState = { count: 0 };

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

export function StateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

export function useStateContext() {
  return useContext(StateContext);
}
      `,
    },
  ]
}