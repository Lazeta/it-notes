export const Reducers = {
  id: 160,
  title: "Reducers",
  children: [
    {
      title: "Определение редьюсера",
      type: "text",
      description: `
            <p>Редьюсер — это чистая функция, которая принимает текущее состояние и действие, и возвращает новое состояние.</p>
          `,
    },
    {
      title: "Аргументы редьюсера",
      type: "text",
      description: `
            <p>Редьюсер принимает два аргумента:</p>
            <ul>
              <li><strong>state</strong>: текущее состояние.</li>
              <li><strong>action</strong>: объект, описывающий действие.</li>
            </ul>
          `,
    },
    {
      title: "Пример редьюсера",
      type: "text",
      description: `
            <p>Пример простого редьюсера для управления задачами:</p>
          `,
      code: `
const initialState = { todos: [] };

function todoReducer(state = initialState, action) {
switch (action.type) {
case 'ADD_TODO':
  return { ...state, todos: [...state.todos, action.payload] };
case 'REMOVE_TODO':
  return {
    ...state,
    todos: state.todos.filter((_, index) => index !== action.payload),
  };
default:
  return state;
}
}
          `,
    },
    {
      title: "Использование редьюсера",
      type: "text",
      description: `
            <p>Редьюсеры комбинируются с помощью функции <code>combineReducers</code> для создания общего состояния в Redux.</p>
          `,
    },
    {
      title: "Пример с использованием useReducer",
      type: "text",
      description: `
            <p>Пример использования <code>useReducer</code> в React:</p>
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
<>
  Count: {state.count}
  <button onClick={() => dispatch({ type: 'increment' })}>+</button>
  <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
</>
);
}
          `,
    },
    {
      title: "Заключение",
      type: "text",
      description: `
            <p>Редьюсеры обеспечивают предсказуемое и централизованное управление состоянием в приложениях.</p>
          `,
    },
  ],
};
