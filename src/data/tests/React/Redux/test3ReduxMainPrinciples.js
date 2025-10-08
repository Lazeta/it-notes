export const test3ReduxMainPrinciples = {
  id: 103400,
  title: "Основные принципы Redux",
  questions: [
    {
      id: 103401,
      question: "Какие основные принципы Redux?",
      answer: `
**Основные принципы Redux:**
1. **Единое хранилище состояния (Single Source of Truth):**
   - Все состояние приложения хранится в одном объекте (store).
   - Это упрощает отладку и управление состоянием.

2. **Состояние только для чтения (State is Read-Only):**
   - Единственный способ изменить состояние — это отправить действие (action).
   - Действия — это простые объекты, которые описывают, что произошло.

3. **Изменения состояния происходят через чистые функции (Reducers):**
   - Редюсеры — это функции, которые принимают текущее состояние и действие, и возвращают новое состояние.
   - Редюсеры должны быть чистыми (не вызывать побочных эффектов).

**Пример:**
\`\`\`javascript
// Action
const increment = { type: 'INCREMENT' };

// Reducer
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// Store
const store = Redux.createStore(counterReducer);
\`\`\`
`,
    },
    {
      id: 103402,
      question: "Что такое действие (Action) в Redux?",
      answer: `
**Действие (Action):**
- Это объект, который описывает, что произошло в приложении.
- Действие должно иметь свойство \`type\`, которое является строкой.
- Может содержать дополнительные данные (payload).

**Пример:**
\`\`\`javascript
const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: text,
});
\`\`\`

**Отправка действия:**
\`\`\`javascript
store.dispatch(addTodo('Learn Redux'));
\`\`\`
`,
    },
    {
      id: 103403,
      question: "Что такое редюсер (Reducer) в Redux?",
      answer: `
**Редюсер (Reducer):**
- Это чистая функция, которая определяет, как изменяется состояние приложения в ответ на действия.
- Принимает текущее состояние и действие, возвращает новое состояние.

**Пример:**
\`\`\`javascript
function todosReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'REMOVE_TODO':
      return state.filter((todo, index) => index !== action.payload);
    default:
      return state;
  }
}
\`\`\`
`,
    },
    {
      id: 103404,
      question: "Что такое хранилище (Store) в Redux?",
      answer: `
**Хранилище (Store):**
- Это объект, который содержит состояние приложения.
- Предоставляет методы для доступа к состоянию, отправки действий и подписки на изменения.

**Методы Store:**
1. **getState():**
   - Возвращает текущее состояние.
2. **dispatch(action):**
   - Отправляет действие для изменения состояния.
3. **subscribe(listener):**
   - Подписывает функцию на изменения состояния.

**Пример создания Store:**
\`\`\`javascript
import { createStore } from 'redux';

const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

console.log(store.getState()); // { count: 0 }
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // { count: 1 }
\`\`\`
`,
    },
    {
      id: 103405,
      question: "Как работает поток данных в Redux?",
      answer: `
**Поток данных в Redux:**
1. **Действие (Action):**
   - Пользователь взаимодействует с UI, что приводит к отправке действия.
2. **Редюсер (Reducer):**
   - Редюсер обрабатывает действие и возвращает новое состояние.
3. **Хранилище (Store):**
   - Хранилище обновляет состояние и уведомляет подписчиков.
4. **UI:**
   - Компоненты React перерисовываются с новым состоянием.

**Пример потока данных:**
\`\`\`javascript
// 1. Отправка действия
store.dispatch({ type: 'INCREMENT' });

// 2. Обработка редюсером
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// 3. Обновление состояния
console.log(store.getState()); // { count: 1 }

// 4. Перерисовка UI
function Counter() {
  const count = useSelector((state) => state.count);
  return <p>Count: {count}</p>;
}
\`\`\`
`,
    },
    {
      id: 103406,
      question: "Что такое Middleware в Redux?",
      answer: `
**Middleware:**
- Это функции, которые выполняются между отправкой действия и его обработкой редюсером.
- Middleware используется для выполнения асинхронных операций (например, API-запросов).

**Пример Middleware:**
\`\`\`javascript
const loggerMiddleware = (store) => (next) => (action) => {
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('Next state:', store.getState());
  return result;
};

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware)
);
\`\`\`
`,
    },
    {
      id: 103407,
      question: "Как организовать структуру Redux в большом приложении?",
      answer: `
**Структура Redux:**
1. **Организация по фичам:**
   - Разделяйте логику по фичам (features), например, \`auth\`, \`todos\`.
2. **Слайсы (slices):**
   - Используйте \`createSlice\` из Redux Toolkit для разделения логики.
3. **Корневой редюсер:**
   - Объединяйте все редюсеры с помощью \`combineReducers\`.

**Пример структуры:**
\`\`\`plaintext
src/
  features/
    auth/
      authSlice.js
    todos/
      todosSlice.js
  store.js
\`\`\`

**store.js:**
\`\`\`javascript
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import todosReducer from './features/todos/todosSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todosReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
\`\`\`
`,
    },
    {
      id: 103408,
      question: "Что такое Redux Toolkit и зачем он нужен?",
      answer: `
**Redux Toolkit:**
- Это официальная библиотека для упрощения работы с Redux.
- Устраняет необходимость писать много шаблонного кода.

**Основные функции:**
1. **createSlice:**
   - Создает редюсер и действия автоматически.
2. **configureStore:**
   - Упрощает настройку хранилища с middleware и инструментами разработчика.
3. **createAsyncThunk:**
   - Упрощает работу с асинхронными действиями.

**Пример:**
\`\`\`javascript
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const { increment, decrement } = counterSlice.actions;
\`\`\`
`,
    },
  ],
};
