export const reduxCreateSliceExample = {
  id: 532,
  title: "Пример использования createSlice (Redux Toolkit)",
  children: [
    {
      title: "Что такое createSlice?",
      type: "text",
      description: `
        <p><strong>createSlice</strong> — это основной инструмент Redux Toolkit для создания редьюсеров. Он автоматически генерирует:</p>
        <ul>
            <li>Action creators : Функции для отправки действий.</li>
            <li>Reducer : Функцию для обновления состояния.</li>
        </ul>
        <p>Основные параметры <strong>createSlice:</strong></p>
        <ul>
            <li><strong>name</strong> : Имя слайса (используется для генерации типов actions).</li>
            <li><strong>initialState</strong> : Начальное состояние.</li>
            <li><strong>reducers</strong> : Объект, где ключи — это названия actions, а значения — функции-редьюсеры.</li>
        </ul>
      `,
    },
    {
      title: "Шаг 1: Создание слайса",
      type: "text",
      description: `
        <p><strong>Создаём slice с помощью createSlice:</strong></p>
      `,
      code: `
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter', // Имя слайса
  initialState: 0, // Начальное состояние
  reducers: {
    increment: (state) => state + 1, // Action и reducer
    decrement: (state) => state - 1,
    incrementByAmount: (state, action) => state + action.payload, // Action с payload
  },
});

// Экспортируем reducer
export const counterReducer = counterSlice.reducer;

// Экспортируем action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
      `,
    },
    {
      title: "Как это работает",
      type: "text",
      description: `
        <ul>
          <li><strong>increment</strong> и <strong>decrement</strong> : Эти функции увеличивают и уменьшают состояние на 1.</li>
          <li><strong>incrementByAmount</strong> : Эта функция увеличивает состояние на значение, переданное в payload.</li>
        </ul>
      `,
    },
    {
      title: "Шаг 2: Настройка store",
      type: "text",
      description: `
        <p><strong>Создаём store с помощью configureStore:</strong></p>
      `,
      code: `
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counterSlice';

// Создаём store
const store = configureStore({
  reducer: {
    counter: counterReducer, // Подключаем reducer
  },
});

export default store;
      `,
    },
    {
      title: "Шаг 3: Использование в компонентах",
      type: "text",
      description: `
        <p><strong>Теперь можно использовать состояние и отправлять действия в компонентах:</strong></p>
      `,
      code: `
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter); // Читаем состояние
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
    </div>
  );
}

export default Counter;
      `,
    },
    {
      title: "Обработка иммутабельности",
      type: "text",
      description: `
        <p><strong>Redux Toolkit использует библиотеку Immer</strong>, которая позволяет писать мутации напрямую, но под капотом создаёт новые объекты. Это упрощает работу с иммутабельными данными.</p>
        <p><strong>Пример с объектом:</strong></p>
      `,
      code: `
const userSlice = createSlice({
  name: 'user',
  initialState: { name: '', age: 0 },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload; // "Мутация", но безопасная
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
  },
});
      `,
    },
    {
      title: "Асинхронные операции (thunk)",
      type: "text",
      description: `
        <p><strong>Redux Toolkit включает встроенную поддержку redux-thunk</strong>, что позволяет выполнять асинхронные операции (например, запросы к API).</p>
        <p><strong>Пример:</strong></p>
      `,
      code: `
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронный action
export const fetchUser = createAsyncThunk('user/fetchUser', async (userId) => {
  const response = await axios.get(\`/api/users/\${userId}\`);
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const userReducer = userSlice.reducer;
      `,
    },
    {
      title: "Как это работает",
      type: "text",
      description: `
        <ul>
          <li><strong>createAsyncThunk</strong> : Создаёт асинхронный action для выполнения запроса.</li>
          <li><strong>extraReducers</strong> : Обрабатывает три состояния асинхронного запроса:</li>
          <ul>
            <li><strong>pending</strong>: Запрос начался.</li>
            <li><strong>fulfilled</strong>: Запрос завершился успешно.</li>
            <li><strong>rejected</strong>: Запрос завершился с ошибкой.</li>
          </ul>
        </ul>
      `,
    },
    {
      title: "Объединение нескольких слайсов",
      type: "text",
      description: `
        <p><strong>Redux Toolkit позволяет легко объединять несколько слайсов в один store.</strong></p>
        <p><strong>Пример:</strong></p>
      `,
      code: `
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counterSlice';
import { userReducer } from './userSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

export default store;
      `,
    },
  ]
}